import axios from 'axios';
import { supabase } from '../Config/Config';

const BASE_URL = 'http://localhost:8001/';
const API_BASE = 'http://localhost:8001/api/copilot';

// Get auth token - tries multiple sources
const getAuthToken = () => {
  // First try localStorage token
  const token = localStorage.getItem('token');
  if (token) return token;
  
  // Try to get from user object
  const user = localStorage.getItem('user');
  if (user) {
    try {
      const userData = JSON.parse(user);
      // Create token from user data
      const tokenPayload = {
        user_id: userData.user_id,
        role: userData.role || 'student',
        exp: Date.now() + (24 * 60 * 60 * 1000)
      };
      const newToken = btoa(JSON.stringify(tokenPayload));
      localStorage.setItem('token', newToken);
      return newToken;
    } catch (e) {
      console.error('Error parsing user:', e);
    }
  }
  
  return '';
};

// Get current user ID
export const getCurrentUserId = () => {
  const token = getAuthToken();
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token));
    return payload.user_id;
  } catch (e) {
    // Try from user object
    const user = localStorage.getItem('user');
    if (user) {
      try {
        return JSON.parse(user).user_id;
      } catch (e) {
        return null;
      }
    }
    return null;
  }
};

// Create axios instance with interceptors
const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth header to all requests
apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Authentication error - please login again');
    }
    return Promise.reject(error);
  }
);

// Original function
export const sendToBot = async (userMessage) => {
  try {
    const response = await axios.post(BASE_URL, { data: userMessage });
    return response.data?.bot_response?.content || 'No response from bot';
  } catch (error) {
    console.error('API Error:', error.message);
    return 'Something went wrong while contacting the bot.';
  }
};

// === COPILOT API FUNCTIONS ===

export const generateRoadmap = async (query, duration, difficulty = 'intermediate') => {
  try {
    const response = await apiClient.post('/generate', {
      query,
      duration_preference: duration,
      difficulty,
      additional_context: {}
    });
    return response.data;
  } catch (error) {
    console.error('Generate Roadmap Error:', error);
    throw error;
  }
};

export const fetchUserRoadmaps = async () => {
  try {
    const response = await apiClient.get('/roadmaps');
    return response.data.roadmaps || [];
  } catch (error) {
    console.error('Fetch Roadmaps Error:', error);
    return [];
  }
};

export const fetchRoadmapDetails = async (roadmapId) => {
  try {
    const response = await apiClient.get(`/roadmap/${roadmapId}`);
    return response.data.roadmap;
  } catch (error) {
    console.error('Fetch Roadmap Details Error:', error);
    throw error;
  }
};

export const toggleTaskCompletion = async (taskId, completed) => {
  try {
    const response = await apiClient.put(`/task/${taskId}/toggle`, {
      completed
    });
    return response.data;
  } catch (error) {
    console.error('Toggle Task Error:', error);
    throw error;
  }
};

export const recordDailyCheckIn = async (roadmapId, notes = '') => {
  try {
    const response = await apiClient.post(`/checkin/${roadmapId}`, {
      notes
    });
    return response.data;
  } catch (error) {
    console.error('Check-in Error:', error);
    throw error;
  }
};

export const fetchRoadmapAnalytics = async (roadmapId, days = 30) => {
  try {
    const response = await apiClient.get(`/roadmap/${roadmapId}/analytics?days=${days}`);
    return response.data.analytics;
  } catch (error) {
    console.error('Fetch Analytics Error:', error);
    return { progress_history: [], total_tasks_completed: 0 };
  }
};

// === DIRECT SUPABASE FUNCTIONS ===

export const getUserStats = async (userId) => {
  try {
    const { data: roadmaps } = await supabase
      .from('roadmaps')
      .select('id, title, overall_progress, current_streak, longest_streak')
      .eq('user_id', userId);

    if (!roadmaps) return null;

    return {
      totalRoadmaps: roadmaps.length,
      currentStreak: Math.max(...roadmaps.map(r => r.current_streak || 0), 0),
      longestStreak: Math.max(...roadmaps.map(r => r.longest_streak || 0), 0),
      completedRoadmaps: roadmaps.filter(r => r.overall_progress === 100).length,
    };
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return null;
  }
};

export const subscribeToRoadmapUpdates = (roadmapId, callback) => {
  const channel = supabase
    .channel(`roadmap-${roadmapId}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'tasks' }, callback)
    .subscribe();

  return () => supabase.removeChannel(channel);
};

// === ASSIGNMENT API FUNCTIONS ===

const ASSIGNMENT_API = 'http://localhost:8001/api/assignments';

// Create axios instance for assignments
const assignmentClient = axios.create({
  baseURL: ASSIGNMENT_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth header
assignmentClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// === STAFF FUNCTIONS ===

export const createAssignment = async (assignmentData) => {
  try {
    const response = await assignmentClient.post('/create', assignmentData);
    return response.data;
  } catch (error) {
    console.error('Create Assignment Error:', error);
    throw error;
  }
};

export const createAssignmentWithFile = async (formData) => {
  try {
    const response = await assignmentClient.post('/create-with-file', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.error('Create Assignment with File Error:', error);
    throw error;
  }
};

export const getStaffAssignments = async () => {
  try {
    const response = await assignmentClient.get('/staff/list');
    return response.data.assignments || [];
  } catch (error) {
    console.error('Fetch Staff Assignments Error:', error);
    return [];
  }
};

export const updateAssignment = async (assignmentId, updates) => {
  try {
    const response = await assignmentClient.put(`/${assignmentId}`, updates);
    return response.data;
  } catch (error) {
    console.error('Update Assignment Error:', error);
    throw error;
  }
};

export const deleteAssignment = async (assignmentId) => {
  try {
    const response = await assignmentClient.delete(`/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error('Delete Assignment Error:', error);
    throw error;
  }
};

export const getAssignmentSubmissions = async (assignmentId) => {
  try {
    const response = await assignmentClient.get(`/staff/${assignmentId}/submissions`);
    return response.data;
  } catch (error) {
    console.error('Fetch Submissions Error:', error);
    throw error;
  }
};

// === STUDENT FUNCTIONS ===

export const getActiveAssignments = async () => {
  try {
    const response = await assignmentClient.get('/list');
    return response.data.assignments || [];
  } catch (error) {
    console.error('Fetch Assignments Error:', error);
    return [];
  }
};

export const getAssignmentDetails = async (assignmentId) => {
  try {
    const response = await assignmentClient.get(`/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error('Fetch Assignment Details Error:', error);
    throw error;
  }
};

export const submitTextAssignment = async (assignmentId, content) => {
  try {
    const response = await assignmentClient.post('/submit/text', {
      assignment_id: assignmentId,
      content
    });
    return response.data;
  } catch (error) {
    console.error('Submit Text Assignment Error:', error);
    throw error;
  }
};

export const submitFileAssignment = async (assignmentId, file) => {
  try {
    const formData = new FormData();
    formData.append('assignment_id', assignmentId);
    formData.append('file', file);
    
    const response = await assignmentClient.post('/submit/file', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.error('Submit File Assignment Error:', error);
    throw error;
  }
};

export const getSubmissionStatus = async (submissionId) => {
  try {
    const response = await assignmentClient.get(`/submission/${submissionId}/status`);
    return response.data;
  } catch (error) {
    console.error('Fetch Submission Status Error:', error);
    throw error;
  }
};

export const getMySubmissions = async () => {
  try {
    const response = await assignmentClient.get('/my-submissions');
    return response.data.submissions || [];
  } catch (error) {
    console.error('Fetch My Submissions Error:', error);
    return [];
  }
};

export const getLeaderboard = async (assignmentId) => {
  try {
    const response = await assignmentClient.get(`/${assignmentId}/leaderboard`);
    return response.data;
  } catch (error) {
    console.error('Fetch Leaderboard Error:', error);
    return { leaderboard: [], my_rank: null };
  }
};

// Get detailed feedback for a submission
export const getDetailedFeedback = async (submissionId) => {
  try {
    const response = await assignmentClient.get(`/submission/${submissionId}/feedback`);
    return response.data;
  } catch (error) {
    console.error('Fetch Detailed Feedback Error:', error);
    throw error;
  }
};

// Parse questions from text
export const parseQuestionsFromText = async (text) => {
  try {
    const response = await assignmentClient.post('/parse-questions', { text });
    return response.data;
  } catch (error) {
    console.error('Parse Questions Error:', error);
    return { questions: [], count: 0 };
  }
};

// Poll submission status until evaluated
export const pollSubmissionStatus = async (submissionId, maxAttempts = 30, interval = 3000) => {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await assignmentClient.get(`/submission/${submissionId}/status`);
      if (response.data.submission?.status === 'evaluated' || response.data.is_evaluated) {
        return response.data;
      }
      await new Promise(resolve => setTimeout(resolve, interval));
    } catch (error) {
      console.error('Poll status error:', error);
    }
  }
  return null;
};

// ================== RISK PREDICTION API ==================

const riskClient = axios.create({
  baseURL: `${BASE_URL}api/risk`,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' }
});

// Add auth token to risk requests
riskClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Get full risk prediction for a student
export const getRiskPrediction = async (studentId) => {
  try {
    const response = await riskClient.get(`/predict/${studentId}`);
    return response.data;
  } catch (error) {
    console.error('Risk Prediction Error:', error);
    throw error;
  }
};

// Get risk summary for dashboard widget
export const getRiskSummary = async (studentId) => {
  try {
    const response = await riskClient.get(`/summary/${studentId}`);
    return response.data.summary;
  } catch (error) {
    console.error('Risk Summary Error:', error);
    return {
      risk_score: 50,
      risk_level: 'MODERATE',
      trend: 'stable',
      top_concern: null,
      quick_tip: null
    };
  }
};

// Get personalized recommendations
export const getRiskRecommendations = async (studentId) => {
  try {
    const response = await riskClient.get(`/recommendations/${studentId}`);
    return response.data;
  } catch (error) {
    console.error('Risk Recommendations Error:', error);
    return { recommendations: [], ai_insights: null };
  }
};

// Get attendance analysis
export const getAttendanceAnalysis = async (studentId) => {
  try {
    const response = await riskClient.get(`/attendance-analysis/${studentId}`);
    return response.data.attendance;
  } catch (error) {
    console.error('Attendance Analysis Error:', error);
    return {};
  }
};

// Get grades analysis
export const getGradesAnalysis = async (studentId) => {
  try {
    const response = await riskClient.get(`/grades-analysis/${studentId}`);
    return response.data.grades;
  } catch (error) {
    console.error('Grades Analysis Error:', error);
    return {};
  }
};

export default apiClient;