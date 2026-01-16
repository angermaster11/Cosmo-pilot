import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBrain,
  FaUsers,
  FaExclamationTriangle,
  FaCheckCircle,
  FaSearch,
  FaSort,
  FaEye,
  FaChartLine,
  FaUserGraduate,
  FaArrowUp,
  FaArrowDown,
  FaMinus,
  FaFilter
} from 'react-icons/fa';
import './StaffRiskDashboard.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';

const StaffRiskDashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');
  const [sortBy, setSortBy] = useState('risk_score');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [studentDetails, setStudentDetails] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    critical: 0,
    high: 0,
    moderate: 0,
    low: 0
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/risk/batch-predict?limit=100`);
      const data = await response.json();
      
      if (data.success) {
        setStudents(data.predictions || []);
        
        // Calculate stats
        const predictions = data.predictions || [];
        setStats({
          total: predictions.length,
          critical: predictions.filter(p => p.risk_level === 'CRITICAL').length,
          high: predictions.filter(p => p.risk_level === 'HIGH').length,
          moderate: predictions.filter(p => p.risk_level === 'MODERATE').length,
          low: predictions.filter(p => p.risk_level === 'LOW').length
        });
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudentDetails = async (studentId) => {
    setDetailsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/risk/predict/${studentId}`);
      const data = await response.json();
      
      if (data.success) {
        setStudentDetails(data);
      }
    } catch (error) {
      console.error('Error fetching student details:', error);
    } finally {
      setDetailsLoading(false);
    }
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    fetchStudentDetails(student.student_id);
  };

  const getRiskColor = (level) => {
    switch (level?.toUpperCase()) {
      case 'LOW': return '#10b981';
      case 'MODERATE': return '#f59e0b';
      case 'HIGH': return '#f97316';
      case 'CRITICAL': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getRiskBg = (level) => {
    switch (level?.toUpperCase()) {
      case 'LOW': return 'rgba(16, 185, 129, 0.1)';
      case 'MODERATE': return 'rgba(245, 158, 11, 0.1)';
      case 'HIGH': return 'rgba(249, 115, 22, 0.1)';
      case 'CRITICAL': return 'rgba(239, 68, 68, 0.1)';
      default: return 'rgba(107, 114, 128, 0.1)';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend?.toLowerCase()) {
      case 'improving': return <FaArrowUp className="text-green-500" />;
      case 'declining': return <FaArrowDown className="text-red-500" />;
      default: return <FaMinus className="text-gray-500" />;
    }
  };

  // Filter and sort students
  const filteredStudents = students
    .filter(student => {
      const matchesSearch = student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.student_id?.toString().includes(searchTerm);
      const matchesFilter = filterLevel === 'all' || student.risk_level === filterLevel;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'risk_score') {
        comparison = a.risk_score - b.risk_score;
      } else if (sortBy === 'name') {
        comparison = (a.name || '').localeCompare(b.name || '');
      }
      return sortOrder === 'desc' ? -comparison : comparison;
    });

  if (loading) {
    return (
      <div className="staff-risk-loading">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <FaBrain className="text-6xl text-purple-500" />
        </motion.div>
        <p className="mt-4 text-gray-400">Analyzing student risk levels...</p>
      </div>
    );
  }

  return (
    <div className="staff-risk-dashboard">
      {/* Header Stats */}
      <div className="risk-stats-grid">
        <div className="risk-stat-card total">
          <FaUsers className="stat-icon" />
          <div className="stat-content">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total Students</span>
          </div>
        </div>
        <div className="risk-stat-card critical">
          <FaExclamationTriangle className="stat-icon" />
          <div className="stat-content">
            <span className="stat-number">{stats.critical}</span>
            <span className="stat-label">Critical Risk</span>
          </div>
        </div>
        <div className="risk-stat-card high">
          <FaExclamationTriangle className="stat-icon" />
          <div className="stat-content">
            <span className="stat-number">{stats.high}</span>
            <span className="stat-label">High Risk</span>
          </div>
        </div>
        <div className="risk-stat-card moderate">
          <FaChartLine className="stat-icon" />
          <div className="stat-content">
            <span className="stat-number">{stats.moderate}</span>
            <span className="stat-label">Moderate Risk</span>
          </div>
        </div>
        <div className="risk-stat-card low">
          <FaCheckCircle className="stat-icon" />
          <div className="stat-content">
            <span className="stat-number">{stats.low}</span>
            <span className="stat-label">Low Risk</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="risk-filters">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <FaFilter className="filter-icon" />
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="CRITICAL">Critical</option>
            <option value="HIGH">High</option>
            <option value="MODERATE">Moderate</option>
            <option value="LOW">Low</option>
          </select>
        </div>
        
        <div className="sort-group">
          <FaSort className="sort-icon" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="risk_score">Risk Score</option>
            <option value="name">Name</option>
          </select>
          <button
            className="sort-order-btn"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
        
        <button className="refresh-btn" onClick={fetchStudents}>
          Refresh
        </button>
      </div>

      {/* Main Content */}
      <div className="risk-content-grid">
        {/* Student List */}
        <div className="students-list-panel">
          <h3><FaUserGraduate /> Students ({filteredStudents.length})</h3>
          
          <div className="students-list">
            {filteredStudents.map((student, index) => (
              <motion.div
                key={student.student_id}
                className={`student-card ${selectedStudent?.student_id === student.student_id ? 'selected' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => handleStudentClick(student)}
                style={{ borderLeftColor: getRiskColor(student.risk_level) }}
              >
                <div className="student-info">
                  <div className="student-avatar">
                    {student.name?.charAt(0) || 'S'}
                  </div>
                  <div className="student-details">
                    <span className="student-name">{student.name || `Student ${student.student_id}`}</span>
                    <span className="student-id">ID: {student.student_id}</span>
                  </div>
                </div>
                
                <div className="student-risk">
                  <div 
                    className="risk-badge"
                    style={{ 
                      backgroundColor: getRiskBg(student.risk_level),
                      color: getRiskColor(student.risk_level)
                    }}
                  >
                    {student.risk_score}%
                  </div>
                  <span 
                    className="risk-level-text"
                    style={{ color: getRiskColor(student.risk_level) }}
                  >
                    {student.risk_level}
                  </span>
                  <span className="trend-icon">{getTrendIcon(student.trend)}</span>
                </div>
              </motion.div>
            ))}
            
            {filteredStudents.length === 0 && (
              <div className="no-students">
                <p>No students match your criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Details Panel */}
        <div className="details-panel">
          {selectedStudent ? (
            detailsLoading ? (
              <div className="details-loading">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <FaBrain className="text-3xl text-purple-500" />
                </motion.div>
                <p>Loading student details...</p>
              </div>
            ) : studentDetails ? (
              <div className="student-details-content">
                <div className="details-header">
                  <h3>{selectedStudent.name || `Student ${selectedStudent.student_id}`}</h3>
                  <div 
                    className="risk-level-large"
                    style={{ 
                      backgroundColor: getRiskBg(studentDetails.risk_level),
                      color: getRiskColor(studentDetails.risk_level)
                    }}
                  >
                    {studentDetails.risk_level} ({studentDetails.risk_score}%)
                  </div>
                </div>
                
                {/* AI Insights */}
                {studentDetails.ai_insights && (
                  <div className="ai-insights-card">
                    <h4><FaBrain /> AI Analysis</h4>
                    <p className="insights-summary">{studentDetails.ai_insights.summary}</p>
                    
                    {studentDetails.ai_insights.key_concern && (
                      <div className="insight-item concern">
                        <FaExclamationTriangle />
                        <span>{studentDetails.ai_insights.key_concern}</span>
                      </div>
                    )}
                    
                    {studentDetails.ai_insights.positive_aspect && (
                      <div className="insight-item positive">
                        <FaCheckCircle />
                        <span>{studentDetails.ai_insights.positive_aspect}</span>
                      </div>
                    )}
                    
                    {studentDetails.ai_insights.immediate_action && (
                      <div className="insight-item action">
                        <strong>Recommended Action:</strong>
                        <p>{studentDetails.ai_insights.immediate_action}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Metrics */}
                <div className="metrics-card">
                  <h4>Key Metrics</h4>
                  <div className="metrics-grid">
                    <div className="metric-item">
                      <span className="metric-label">Attendance</span>
                      <span className={`metric-value ${studentDetails.metrics?.attendance_rate >= 75 ? 'good' : 'bad'}`}>
                        {studentDetails.metrics?.attendance_rate || 0}%
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Avg Score</span>
                      <span className={`metric-value ${studentDetails.metrics?.average_score >= 60 ? 'good' : 'bad'}`}>
                        {studentDetails.metrics?.average_score || 0}%
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Completion</span>
                      <span className={`metric-value ${studentDetails.metrics?.completion_rate >= 70 ? 'good' : 'bad'}`}>
                        {studentDetails.metrics?.completion_rate || 0}%
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Late Submissions</span>
                      <span className={`metric-value ${studentDetails.metrics?.late_submissions <= 2 ? 'good' : 'bad'}`}>
                        {studentDetails.metrics?.late_submissions || 0}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Risk Factors */}
                <div className="risk-factors-card">
                  <h4>Risk Factors</h4>
                  {studentDetails.risk_factors?.map((factor, index) => (
                    <div key={index} className="factor-item">
                      <div className="factor-header">
                        <span>{factor.name}</span>
                        <span 
                          className="factor-impact"
                          style={{ color: factor.impact === 'high' ? '#ef4444' : factor.impact === 'medium' ? '#f59e0b' : '#10b981' }}
                        >
                          {factor.impact} impact
                        </span>
                      </div>
                      <div className="factor-bar-bg">
                        <div 
                          className="factor-bar-fill"
                          style={{ 
                            width: `${factor.score}%`,
                            backgroundColor: factor.score > 70 ? '#ef4444' : factor.score > 40 ? '#f59e0b' : '#10b981'
                          }}
                        />
                      </div>
                      <p className="factor-desc">{factor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="no-details">
                <p>Failed to load student details</p>
              </div>
            )
          ) : (
            <div className="no-selection">
              <FaUserGraduate className="text-6xl text-gray-600 mb-4" />
              <p>Select a student to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffRiskDashboard;
