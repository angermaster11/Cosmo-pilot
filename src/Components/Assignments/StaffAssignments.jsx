// frontend/src/Components/Assignments/StaffAssignments.jsx
// Staff view for creating and managing assignments

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Plus, BarChart3, Trash2, FileText, HelpCircle, Code, Calculator,
  FileSpreadsheet, Clock, AlertTriangle, CheckCircle, Trophy, Medal, X,
  ChevronDown, ChevronRight, Target, ListChecks, Key, Rocket, ThumbsUp,
  ThumbsDown, Lightbulb, ArrowRight, Inbox, Loader2, Flag
} from 'lucide-react';
import { 
  getStaffAssignments, 
  createAssignment, 
  deleteAssignment,
  getAssignmentSubmissions,
  getLeaderboard
} from '../../api/api';

const StaffAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [viewSubmissions, setViewSubmissions] = useState(null);

  useEffect(() => {
    loadAssignments();
  }, []);

  const loadAssignments = async () => {
    try {
      setLoading(true);
      const data = await getStaffAssignments();
      setAssignments(data);
    } catch (error) {
      console.error('Error loading assignments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this assignment?')) return;
    
    try {
      await deleteAssignment(id);
      loadAssignments();
    } catch (error) {
      console.error('Error deleting assignment:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-600" /> Assignment Manager
          </h1>
          <p className="text-gray-600">Create and manage student assignments</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> Create Assignment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-3xl font-bold text-gray-900">{assignments.length}</div>
          <div className="text-gray-500">Total Assignments</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-3xl font-bold text-blue-600">
            {assignments.filter(a => a.is_active).length}
          </div>
          <div className="text-gray-500">Active</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-3xl font-bold text-green-600">
            {assignments.reduce((sum, a) => sum + (a.submission_count || 0), 0)}
          </div>
          <div className="text-gray-500">Total Submissions</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-3xl font-bold text-purple-600">
            {assignments.reduce((sum, a) => sum + (a.evaluated_count || 0), 0)}
          </div>
          <div className="text-gray-500">Evaluated</div>
        </div>
      </div>

      {/* Assignment List */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 font-medium text-gray-600">Assignment</th>
              <th className="text-left p-4 font-medium text-gray-600">Due Date</th>
              <th className="text-center p-4 font-medium text-gray-600">Submissions</th>
              <th className="text-center p-4 font-medium text-gray-600">Evaluated</th>
              <th className="text-center p-4 font-medium text-gray-600">Status</th>
              <th className="text-right p-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, idx) => (
              <motion.tr
                key={assignment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4">
                  <div className="font-medium text-gray-900">{assignment.title}</div>
                  <div className="text-sm text-gray-500 line-clamp-1">
                    {assignment.description}
                  </div>
                </td>
                <td className="p-4 text-gray-600">
                  {assignment.due_date 
                    ? new Date(assignment.due_date).toLocaleDateString()
                    : 'No deadline'}
                </td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                    {assignment.submission_count || 0}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                    {assignment.evaluated_count || 0}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full font-medium ${
                    assignment.is_active 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {assignment.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => setViewSubmissions(assignment)}
                      className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1"
                    >
                      <BarChart3 className="w-4 h-4" /> View
                    </button>
                    <button
                      onClick={() => handleDelete(assignment.id)}
                      className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {assignments.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">No assignments yet</h3>
            <p className="text-gray-500">Create your first assignment to get started</p>
          </div>
        )}
      </div>

      {/* Create Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <CreateAssignmentModal
            onClose={() => setShowCreateModal(false)}
            onSuccess={() => {
              setShowCreateModal(false);
              loadAssignments();
            }}
          />
        )}
      </AnimatePresence>

      {/* View Submissions Modal */}
      <AnimatePresence>
        {viewSubmissions && (
          <ViewSubmissionsModal
            assignment={viewSubmissions}
            onClose={() => setViewSubmissions(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Create Assignment Modal
const CreateAssignmentModal = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructions: '',
    due_date: '',
    max_score: 100,
    allowed_formats: ['pdf', 'ppt', 'pptx', 'doc', 'docx', 'txt'],
    // NEW: Real evaluation fields
    assignment_type: 'general',
    answer_key: '',
    expected_topics: '',
    questions: ''
  });
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setCreating(true);
      setError('');
      
      // Parse questions and topics
      let questions = null;
      if (formData.questions.trim()) {
        try {
          // Try parsing as JSON first
          questions = JSON.parse(formData.questions);
        } catch {
          // Otherwise, split by newlines and create question objects
          questions = formData.questions.split('\n')
            .filter(q => q.trim())
            .map((q, i) => ({ id: i + 1, question: q.trim(), points: Math.floor(100 / formData.questions.split('\n').filter(q => q.trim()).length) }));
        }
      }
      
      const topics = formData.expected_topics.trim() 
        ? formData.expected_topics.split(',').map(t => t.trim()).filter(t => t)
        : null;
      
      await createAssignment({
        ...formData,
        due_date: formData.due_date ? new Date(formData.due_date).toISOString() : null,
        expected_topics: topics,
        questions: questions,
        answer_key: formData.answer_key || null
      });
      
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to create assignment');
    } finally {
      setCreating(false);
    }
  };

  const toggleFormat = (format) => {
    setFormData(prev => ({
      ...prev,
      allowed_formats: prev.allowed_formats.includes(format)
        ? prev.allowed_formats.filter(f => f !== format)
        : [...prev.allowed_formats, format]
    }));
  };

  const assignmentTypes = [
    { value: 'general', label: 'General', Icon: FileText, desc: 'Standard assignment' },
    { value: 'essay', label: 'Essay', Icon: FileText, desc: 'Written composition' },
    { value: 'quiz', label: 'Quiz', Icon: HelpCircle, desc: 'Questions & answers' },
    { value: 'code', label: 'Code', Icon: Code, desc: 'Programming task' },
    { value: 'math', label: 'Math', Icon: Calculator, desc: 'Mathematical problems' },
    { value: 'report', label: 'Report', Icon: FileSpreadsheet, desc: 'Research/Lab report' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Plus className="w-6 h-6 text-indigo-600" /> Create New Assignment
          </h2>
          <p className="text-gray-500 text-sm mt-1">AI will evaluate submissions based on your questions and criteria</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Final Project Report"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assignment Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {assignmentTypes.map(type => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, assignment_type: type.value })}
                  className={`p-3 rounded-xl text-left transition-all ${
                    formData.assignment_type === type.value
                      ? 'bg-indigo-100 border-2 border-indigo-500'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium flex items-center gap-2">
                    <type.Icon className="w-4 h-4" /> {type.label}
                  </div>
                  <div className="text-xs text-gray-500">{type.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
              placeholder="Brief description of the assignment..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instructions / Questions * 
              <span className="text-indigo-600 ml-1">(AI will evaluate based on this)</span>
            </label>
            <textarea
              value={formData.instructions}
              onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
              placeholder="Write specific questions or tasks here. Example:
1. What is polymorphism in OOP? Explain with an example.
2. Compare and contrast inheritance vs composition.
3. Write a code example demonstrating encapsulation."
            />
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <Lightbulb className="w-3 h-3 text-amber-500" /> Tip: Be specific! The AI will check if students answered these exact questions.
            </p>
          </div>

          {/* Advanced Options Toggle */}
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
          >
            {showAdvanced ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />} Advanced Evaluation Options
          </button>

          {showAdvanced && (
            <div className="space-y-4 p-4 bg-indigo-50 rounded-xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-indigo-500" /> Specific Questions (One per line)
                </label>
                <textarea
                  value={formData.questions}
                  onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
                  placeholder="What is recursion?
Explain the difference between stack and heap memory.
Write a function to reverse a linked list."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Each line becomes a question. AI will check if each is answered.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-indigo-500" /> Required Topics (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.expected_topics}
                  onChange={(e) => setFormData({ ...formData, expected_topics: e.target.value })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="recursion, data structures, algorithms, complexity analysis"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Topics that MUST be covered in the submission.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Key className="w-4 h-4 text-indigo-500" /> Answer Key / Expected Answers (Optional)
                </label>
                <textarea
                  value={formData.answer_key}
                  onChange={(e) => setFormData({ ...formData, answer_key: e.target.value })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
                  placeholder="Q1: Recursion is when a function calls itself...
Q2: Stack is used for static memory allocation...
Key points: O(n) complexity, base case required..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Reference material for grading. Students won't see this.
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Due Date
              </label>
              <input
                type="datetime-local"
                value={formData.due_date}
                onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Score
              </label>
              <input
                type="number"
                value={formData.max_score}
                onChange={(e) => setFormData({ ...formData, max_score: parseInt(e.target.value) })}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                min="1"
                max="1000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Allowed Formats
            </label>
            <div className="flex flex-wrap gap-2">
              {['pdf', 'ppt', 'pptx', 'doc', 'docx', 'txt'].map(format => (
                <button
                  key={format}
                  type="button"
                  onClick={() => toggleFormat(format)}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    formData.allowed_formats.includes(format)
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  .{format}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={creating}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 disabled:opacity-50"
            >
              {creating ? 'Creating...' : <><Rocket className="w-4 h-4 inline mr-1" /> Create Assignment</>}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

// View Submissions Modal
const ViewSubmissionsModal = ({ assignment, onClose }) => {
  const [submissions, setSubmissions] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('submissions');
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [subData, lbData] = await Promise.all([
        getAssignmentSubmissions(assignment.id),
        getLeaderboard(assignment.id)
      ]);
      setSubmissions(subData.submissions || []);
      setLeaderboard(lbData.leaderboard || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-indigo-600" /> {assignment.title}
            </h2>
            <p className="text-gray-600">
              {submissions.length} submissions • {leaderboard.length} ranked
            </p>
          </div>
          <button onClick={onClose} className="hover:bg-gray-100 p-2 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('submissions')}
            className={`flex-1 py-3 px-4 font-medium transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'submissions'
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-4 h-4" /> Submissions ({submissions.length})
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex-1 py-3 px-4 font-medium transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'leaderboard'
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Trophy className="w-4 h-4" /> Leaderboard ({leaderboard.length})
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {loading ? (
            <div className="text-center py-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full mx-auto"
              />
            </div>
          ) : activeTab === 'submissions' ? (
            /* Submissions Tab */
            submissions.length === 0 ? (
              <div className="text-center py-12">
                <Inbox className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">No submissions yet</h3>
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((sub, idx) => {
                  const evaluation = sub.evaluations?.[0];
                  return (
                    <motion.div
                      key={sub.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`p-4 rounded-2xl border ${
                        evaluation?.is_plagiarized 
                          ? 'bg-red-50 border-red-200'
                          : sub.status === 'evaluated'
                          ? 'bg-green-50 border-green-200'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">
                              {sub.student_name || `Student #${sub.student_id}`}
                            </span>
                            {sub.is_late && (
                              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs flex items-center gap-1">
                                <Clock className="w-3 h-3" /> Late
                              </span>
                            )}
                            {evaluation?.is_plagiarized && (
                              <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> Plagiarism {evaluation.plagiarism_score?.toFixed(1)}%
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Submitted {new Date(sub.submitted_at).toLocaleString()}
                            <span className="mx-2">•</span>
                            Format: <span className="font-medium">{sub.submission_type?.toUpperCase()}</span>
                          </div>
                          
                          {/* Evaluation Details */}
                          {evaluation && (
                            <div className="mt-3 grid grid-cols-4 gap-2 text-sm">
                              <div className="bg-blue-50 p-2 rounded-lg text-center">
                                <div className="text-xs text-blue-600">Content</div>
                                <div className="font-bold text-blue-700">{evaluation.content_score || 0}/30</div>
                              </div>
                              <div className="bg-purple-50 p-2 rounded-lg text-center">
                                <div className="text-xs text-purple-600">Clarity</div>
                                <div className="font-bold text-purple-700">{evaluation.clarity_score || 0}/25</div>
                              </div>
                              <div className="bg-green-50 p-2 rounded-lg text-center">
                                <div className="text-xs text-green-600">Complete</div>
                                <div className="font-bold text-green-700">{evaluation.completeness_score || 0}/25</div>
                              </div>
                              <div className="bg-orange-50 p-2 rounded-lg text-center">
                                <div className="text-xs text-orange-600">Original</div>
                                <div className="font-bold text-orange-700">{evaluation.originality_score || 0}/20</div>
                              </div>
                            </div>
                          )}
                          
                          {/* Pros and Cons Preview */}
                          {evaluation?.strengths && evaluation.strengths.length > 0 && (
                            <div className="mt-2 text-sm flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span className="text-green-600">{evaluation.strengths[0]}</span>
                            </div>
                          )}
                          {evaluation?.improvements && evaluation.improvements.length > 0 && (
                            <div className="text-sm flex items-center gap-1">
                              <X className="w-3 h-3 text-red-600" />
                              <span className="text-red-600">{evaluation.improvements[0]}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="text-right ml-4">
                          {evaluation ? (
                            <div>
                              <div className={`text-3xl font-bold ${
                                evaluation.percentage >= 80 ? 'text-green-600' :
                                evaluation.percentage >= 60 ? 'text-yellow-600' :
                                'text-red-600'
                              }`}>
                                {evaluation.score}/{evaluation.max_score}
                              </div>
                              <div className="text-sm font-medium text-gray-600">
                                {evaluation.percentage?.toFixed(1)}%
                              </div>
                              {evaluation.grade && (
                                <div className={`text-lg font-bold ${
                                  evaluation.grade.startsWith('A') ? 'text-green-600' :
                                  evaluation.grade.startsWith('B') ? 'text-blue-600' :
                                  evaluation.grade.startsWith('C') ? 'text-yellow-600' :
                                  'text-red-600'
                                }`}>
                                  Grade: {evaluation.grade}
                                </div>
                              )}
                              <button
                                onClick={() => setSelectedSubmission(sub)}
                                className="mt-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm hover:bg-indigo-200"
                              >
                                View Details
                              </button>
                            </div>
                          ) : (
                            <div>
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {sub.status === 'evaluating' ? 'Evaluating...' : 'Pending'}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )
          ) : (
            /* Leaderboard Tab */
            leaderboard.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">No rankings yet</h3>
                <p className="text-gray-500">Rankings appear after submissions are evaluated</p>
              </div>
            ) : (
              <div className="space-y-3">
                {leaderboard.map((entry, idx) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center gap-4 p-4 rounded-2xl ${
                      entry.rank === 1 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300' :
                      entry.rank === 2 ? 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300' :
                      entry.rank === 3 ? 'bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-300' :
                      'bg-gray-50 border border-gray-200'
                    } ${entry.is_plagiarized ? 'opacity-60' : ''}`}
                  >
                    {/* Rank */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                      entry.rank === 1 ? 'bg-yellow-400 text-white' :
                      entry.rank === 2 ? 'bg-gray-400 text-white' :
                      entry.rank === 3 ? 'bg-orange-400 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {entry.rank <= 3 ? <Medal className="w-6 h-6" /> : `#${entry.rank}`}
                    </div>
                    
                    {/* Student Info */}
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {entry.student_name || `Student #${entry.student_id}`}
                      </div>
                      <div className="text-sm text-gray-500">
                        Submitted {new Date(entry.submitted_at).toLocaleString()}
                      </div>
                    </div>
                    
                    {/* Score */}
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${
                        entry.percentage >= 80 ? 'text-green-600' :
                        entry.percentage >= 60 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {entry.score}/{assignment.max_score || 100}
                      </div>
                      <div className="text-sm text-gray-500">
                        {entry.percentage?.toFixed(1)}%
                      </div>
                      {entry.is_plagiarized && (
                        <span className="text-xs text-red-600 flex items-center gap-1">
                          <Flag className="w-3 h-3" /> Flagged
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          )}
        </div>
      </motion.div>

      {/* Detailed Submission View Modal */}
      <AnimatePresence>
        {selectedSubmission && (
          <SubmissionDetailModal
            submission={selectedSubmission}
            onClose={() => setSelectedSubmission(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Detailed Submission View Modal
const SubmissionDetailModal = ({ submission, onClose }) => {
  const evaluation = submission.evaluations?.[0];
  
  // Parse JSON fields if they're strings
  const parseJSON = (val) => {
    if (typeof val === 'string') {
      try { return JSON.parse(val); } catch { return val; }
    }
    return val;
  };
  
  const scoreBreakdown = parseJSON(evaluation?.score_breakdown);
  const detailedFeedback = parseJSON(evaluation?.detailed_feedback);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FileText className="w-5 h-5" /> {submission.student_name || `Student #${submission.student_id}`}
              </h2>
              <p className="text-indigo-100">
                Submitted {new Date(submission.submitted_at).toLocaleString()}
              </p>
            </div>
            <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          {evaluation ? (
            <div className="space-y-6">
              {/* Score Summary */}
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className={`text-5xl font-bold ${
                  evaluation.percentage >= 80 ? 'text-green-600' :
                  evaluation.percentage >= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {evaluation.score}/{evaluation.max_score}
                </div>
                <div className="text-2xl text-gray-600 mt-1">
                  {evaluation.percentage?.toFixed(1)}%
                </div>
                {evaluation.grade && (
                  <div className={`text-3xl font-bold mt-2 ${
                    evaluation.grade.startsWith('A') ? 'text-green-600' :
                    evaluation.grade.startsWith('B') ? 'text-blue-600' :
                    evaluation.grade.startsWith('C') ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    Grade: {evaluation.grade}
                  </div>
                )}
              </div>

              {/* Score Breakdown */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-indigo-600" /> Score Breakdown
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Content Quality', score: evaluation.content_score, max: 30, color: 'blue' },
                    { label: 'Clarity & Organization', score: evaluation.clarity_score, max: 25, color: 'purple' },
                    { label: 'Completeness', score: evaluation.completeness_score, max: 25, color: 'green' },
                    { label: 'Originality', score: evaluation.originality_score, max: 20, color: 'orange' }
                  ].map((item, idx) => (
                    <div key={idx} className={`bg-${item.color}-50 p-3 rounded-xl`}>
                      <div className="flex justify-between items-center">
                        <span className={`text-${item.color}-700 font-medium`}>{item.label}</span>
                        <span className={`text-${item.color}-700 font-bold`}>{item.score || 0}/{item.max}</span>
                      </div>
                      <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-${item.color}-500 h-full rounded-full transition-all`}
                          style={{ width: `${((item.score || 0) / item.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros */}
              {(evaluation.strengths?.length > 0 || evaluation.pros?.length > 0) && (
                <div>
                  <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> Strengths (What went well)
                  </h3>
                  <ul className="space-y-2">
                    {(evaluation.strengths || evaluation.pros || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Cons */}
              {(evaluation.improvements?.length > 0 || evaluation.cons?.length > 0) && (
                <div>
                  <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4" /> Areas for Improvement
                  </h3>
                  <ul className="space-y-2">
                    {(evaluation.improvements || evaluation.cons || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Suggestions */}
              {evaluation.suggestions?.length > 0 && (
                <div>
                  <h3 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> Suggestions for Improvement
                  </h3>
                  <ul className="space-y-2">
                    {evaluation.suggestions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detailed Feedback */}
              {detailedFeedback && typeof detailedFeedback === 'object' && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">📝 Detailed Feedback</h3>
                  <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                    {detailedFeedback.introduction_assessment && (
                      <div>
                        <span className="font-medium text-gray-700">Introduction: </span>
                        <span className="text-gray-600">{detailedFeedback.introduction_assessment}</span>
                      </div>
                    )}
                    {detailedFeedback.main_content_assessment && (
                      <div>
                        <span className="font-medium text-gray-700">Main Content: </span>
                        <span className="text-gray-600">{detailedFeedback.main_content_assessment}</span>
                      </div>
                    )}
                    {detailedFeedback.conclusion_assessment && (
                      <div>
                        <span className="font-medium text-gray-700">Conclusion: </span>
                        <span className="text-gray-600">{detailedFeedback.conclusion_assessment}</span>
                      </div>
                    )}
                    {detailedFeedback.overall_impression && (
                      <div className="pt-2 border-t">
                        <span className="font-medium text-gray-700">Overall: </span>
                        <span className="text-gray-600">{detailedFeedback.overall_impression}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Plagiarism Warning */}
              {evaluation.is_plagiarized && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Plagiarism Detected
                  </h3>
                  <p className="text-red-600">
                    This submission has {evaluation.plagiarism_score?.toFixed(1)}% similarity with other submissions.
                    The score has been penalized accordingly.
                  </p>
                </div>
              )}

              {/* Encouragement */}
              {evaluation.encouragement && (
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <p className="text-indigo-700 italic flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> {evaluation.encouragement}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <Clock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Evaluation Pending</h3>
              <p className="text-gray-500">This submission is still being evaluated</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StaffAssignments;
