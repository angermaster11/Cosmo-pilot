import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBrain,
  FaChartLine,
  FaExclamationTriangle,
  FaCheckCircle,
  FaLightbulb,
  FaArrowUp,
  FaArrowDown,
  FaMinus,
  FaBookOpen,
  FaUserClock,
  FaTasks,
  FaShieldAlt,
  FaRocket,
  FaChartPie
} from 'react-icons/fa';
import { getRiskPrediction, getRiskSummary, getRiskRecommendations } from '../../api/api';
import './RiskPrediction.css';

const RiskPrediction = ({ studentId }) => {
  const [loading, setLoading] = useState(true);
  const [riskData, setRiskData] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (studentId) {
      fetchRiskData();
    }
  }, [studentId]);

  const fetchRiskData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [prediction, recs] = await Promise.all([
        getRiskPrediction(studentId),
        getRiskRecommendations(studentId)
      ]);
      setRiskData(prediction);
      setRecommendations(recs);
    } catch (err) {
      console.error('Error fetching risk data:', err);
      setError('Unable to load risk analysis. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'low': return '#10b981';
      case 'moderate': return '#f59e0b';
      case 'high': return '#ef4444';
      case 'critical': return '#dc2626';
      default: return '#6b7280';
    }
  };

  const getRiskIcon = (level) => {
    switch (level?.toLowerCase()) {
      case 'low': return <FaCheckCircle className="text-green-500" />;
      case 'moderate': return <FaExclamationTriangle className="text-yellow-500" />;
      case 'high': return <FaExclamationTriangle className="text-orange-500" />;
      case 'critical': return <FaExclamationTriangle className="text-red-500" />;
      default: return <FaMinus className="text-gray-500" />;
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend?.toLowerCase()) {
      case 'improving': return <FaArrowUp className="text-green-500" />;
      case 'declining': return <FaArrowDown className="text-red-500" />;
      default: return <FaMinus className="text-gray-500" />;
    }
  };

  const getGaugeRotation = (score) => {
    // Score 0-100 maps to rotation -90 to 90 degrees
    return ((score / 100) * 180) - 90;
  };

  if (loading) {
    return (
      <div className="risk-loading">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <FaBrain className="text-6xl text-purple-500" />
        </motion.div>
        <p className="mt-4 text-gray-400">Analyzing your academic data with AI...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="risk-error">
        <FaExclamationTriangle className="text-4xl text-red-500 mb-4" />
        <p className="text-red-400">{error}</p>
        <button onClick={fetchRiskData} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="risk-prediction-container">
      {/* Header */}
      <div className="risk-header">
        <div className="risk-header-left">
          <FaBrain className="text-3xl text-purple-500" />
          <div>
            <h1>AI Risk Analysis</h1>
            <p>Powered by Machine Learning & LLM</p>
          </div>
        </div>
        <button onClick={fetchRiskData} className="refresh-btn">
          <FaChartLine /> Refresh Analysis
        </button>
      </div>

      {/* Main Risk Gauge */}
      <motion.div 
        className="risk-gauge-section"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="gauge-container">
          <svg viewBox="0 0 200 120" className="gauge-svg">
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#2d3748"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Colored segments */}
            <path
              d="M 20 100 A 80 80 0 0 1 65 35"
              fill="none"
              stroke="#10b981"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M 65 35 A 80 80 0 0 1 135 35"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="20"
            />
            <path
              d="M 135 35 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#ef4444"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Needle */}
            <g transform={`rotate(${getGaugeRotation(riskData?.risk_score || 50)}, 100, 100)`}>
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="30"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="100" cy="100" r="8" fill="#fff" />
            </g>
          </svg>
          <div className="gauge-value">
            <span className="score" style={{ color: getRiskColor(riskData?.risk_level) }}>
              {riskData?.risk_score || 50}
            </span>
            <span className="label">Risk Score</span>
          </div>
        </div>

        <div className="risk-level-badge" style={{ backgroundColor: getRiskColor(riskData?.risk_level) }}>
          {getRiskIcon(riskData?.risk_level)}
          <span>{riskData?.risk_level || 'Unknown'} Risk</span>
        </div>

        <div className="trend-indicator">
          {getTrendIcon(riskData?.trend)}
          <span>Trend: {riskData?.trend || 'Stable'}</span>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="risk-tabs">
        {['overview', 'insights', 'recommendations', 'metrics'].map((tab) => (
          <button
            key={tab}
            className={`risk-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' && <FaChartPie />}
            {tab === 'insights' && <FaBrain />}
            {tab === 'recommendations' && <FaLightbulb />}
            {tab === 'metrics' && <FaChartLine />}
            <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="tab-content"
        >
          {activeTab === 'overview' && (
            <div className="overview-grid">
              {/* Risk Factors */}
              <div className="risk-card risk-factors">
                <h3><FaShieldAlt /> Risk Factors</h3>
                <div className="factors-list">
                  {riskData?.risk_factors?.map((factor, index) => (
                    <motion.div
                      key={index}
                      className="factor-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="factor-header">
                        <span className="factor-name">{factor.name}</span>
                        <span 
                          className="factor-impact"
                          style={{ color: factor.impact === 'high' ? '#ef4444' : factor.impact === 'medium' ? '#f59e0b' : '#10b981' }}
                        >
                          {factor.impact} impact
                        </span>
                      </div>
                      <div className="factor-bar">
                        <div 
                          className="factor-progress"
                          style={{ 
                            width: `${factor.score}%`,
                            backgroundColor: factor.score > 70 ? '#ef4444' : factor.score > 40 ? '#f59e0b' : '#10b981'
                          }}
                        />
                      </div>
                      <p className="factor-description">{factor.description}</p>
                    </motion.div>
                  )) || (
                    <p className="no-data">No risk factors identified</p>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="stat-card">
                  <FaUserClock className="stat-icon text-blue-500" />
                  <div className="stat-info">
                    <span className="stat-value">{riskData?.metrics?.attendance_rate || 0}%</span>
                    <span className="stat-label">Attendance</span>
                  </div>
                </div>
                <div className="stat-card">
                  <FaBookOpen className="stat-icon text-green-500" />
                  <div className="stat-info">
                    <span className="stat-value">{riskData?.metrics?.average_score || 0}</span>
                    <span className="stat-label">Avg Score</span>
                  </div>
                </div>
                <div className="stat-card">
                  <FaTasks className="stat-icon text-purple-500" />
                  <div className="stat-info">
                    <span className="stat-value">{riskData?.metrics?.completion_rate || 0}%</span>
                    <span className="stat-label">Completion</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="ai-insights-section">
              <div className="insight-header">
                <FaBrain className="text-2xl text-purple-500" />
                <h3>AI-Powered Insights</h3>
                <span className="ai-badge">Powered by LLM</span>
              </div>
              
              {riskData?.ai_insights ? (
                <div className="insights-content">
                  <div className="insight-summary">
                    <h4>Overall Assessment</h4>
                    <p>{riskData.ai_insights.summary}</p>
                  </div>

                  {riskData.ai_insights.strengths?.length > 0 && (
                    <div className="insight-section strengths">
                      <h4><FaCheckCircle className="text-green-500" /> Your Strengths</h4>
                      <ul>
                        {riskData.ai_insights.strengths.map((strength, i) => (
                          <li key={i}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {riskData.ai_insights.concerns?.length > 0 && (
                    <div className="insight-section concerns">
                      <h4><FaExclamationTriangle className="text-yellow-500" /> Areas of Concern</h4>
                      <ul>
                        {riskData.ai_insights.concerns.map((concern, i) => (
                          <li key={i}>{concern}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {riskData.ai_insights.action_items?.length > 0 && (
                    <div className="insight-section actions">
                      <h4><FaRocket className="text-blue-500" /> Recommended Actions</h4>
                      <ul>
                        {riskData.ai_insights.action_items.map((action, i) => (
                          <li key={i}>{action}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {riskData.ai_insights.motivation && (
                    <div className="motivation-box">
                      <FaLightbulb className="text-yellow-400" />
                      <p>{riskData.ai_insights.motivation}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="no-insights">
                  <p>AI insights are being generated. Please check back soon.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="recommendations-section">
              {recommendations?.recommendations?.length > 0 ? (
                <div className="rec-list">
                  {recommendations.recommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      className={`rec-card priority-${rec.priority}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="rec-header">
                        <span className={`priority-badge ${rec.priority}`}>
                          {rec.priority} Priority
                        </span>
                        <span className="rec-category">{rec.category}</span>
                      </div>
                      <h4>{rec.title}</h4>
                      <p>{rec.description}</p>
                      {rec.action_steps && (
                        <div className="action-steps">
                          <h5>Steps to Take:</h5>
                          <ol>
                            {rec.action_steps.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                      {rec.expected_impact && (
                        <div className="expected-impact">
                          <FaChartLine />
                          <span>Expected Impact: {rec.expected_impact}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="no-recommendations">
                  <FaCheckCircle className="text-4xl text-green-500 mb-4" />
                  <p>Great job! No immediate recommendations needed.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="metrics-section">
              <div className="metrics-grid">
                {/* Attendance Breakdown */}
                <div className="metric-card">
                  <h4><FaUserClock /> Attendance Analysis</h4>
                  <div className="metric-details">
                    <div className="metric-row">
                      <span>Total Classes</span>
                      <span>{riskData?.metrics?.total_classes || 0}</span>
                    </div>
                    <div className="metric-row">
                      <span>Classes Attended</span>
                      <span>{riskData?.metrics?.classes_attended || 0}</span>
                    </div>
                    <div className="metric-row">
                      <span>Attendance Rate</span>
                      <span className={riskData?.metrics?.attendance_rate >= 75 ? 'text-green-500' : 'text-red-500'}>
                        {riskData?.metrics?.attendance_rate || 0}%
                      </span>
                    </div>
                    <div className="metric-row">
                      <span>Recent Trend</span>
                      <span className="flex items-center gap-1">
                        {getTrendIcon(riskData?.metrics?.attendance_trend)}
                        {riskData?.metrics?.attendance_trend || 'Stable'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Academic Performance */}
                <div className="metric-card">
                  <h4><FaBookOpen /> Academic Performance</h4>
                  <div className="metric-details">
                    <div className="metric-row">
                      <span>Average Score</span>
                      <span className={riskData?.metrics?.average_score >= 60 ? 'text-green-500' : 'text-red-500'}>
                        {riskData?.metrics?.average_score || 0}%
                      </span>
                    </div>
                    <div className="metric-row">
                      <span>Highest Score</span>
                      <span>{riskData?.metrics?.highest_score || 0}%</span>
                    </div>
                    <div className="metric-row">
                      <span>Lowest Score</span>
                      <span>{riskData?.metrics?.lowest_score || 0}%</span>
                    </div>
                    <div className="metric-row">
                      <span>Grade Trend</span>
                      <span className="flex items-center gap-1">
                        {getTrendIcon(riskData?.metrics?.grade_trend)}
                        {riskData?.metrics?.grade_trend || 'Stable'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Assignment Metrics */}
                <div className="metric-card">
                  <h4><FaTasks /> Assignment Metrics</h4>
                  <div className="metric-details">
                    <div className="metric-row">
                      <span>Total Assignments</span>
                      <span>{riskData?.metrics?.total_assignments || 0}</span>
                    </div>
                    <div className="metric-row">
                      <span>Completed</span>
                      <span>{riskData?.metrics?.completed_assignments || 0}</span>
                    </div>
                    <div className="metric-row">
                      <span>Completion Rate</span>
                      <span className={riskData?.metrics?.completion_rate >= 80 ? 'text-green-500' : 'text-red-500'}>
                        {riskData?.metrics?.completion_rate || 0}%
                      </span>
                    </div>
                    <div className="metric-row">
                      <span>Late Submissions</span>
                      <span className={riskData?.metrics?.late_submissions > 2 ? 'text-red-500' : 'text-green-500'}>
                        {riskData?.metrics?.late_submissions || 0}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ML Prediction Details */}
                <div className="metric-card ml-details">
                  <h4><FaBrain /> ML Model Confidence</h4>
                  <div className="confidence-meter">
                    <div 
                      className="confidence-fill"
                      style={{ width: `${riskData?.ml_confidence || 75}%` }}
                    />
                    <span className="confidence-value">{riskData?.ml_confidence || 75}%</span>
                  </div>
                  <p className="confidence-note">
                    Prediction based on ensemble of Random Forest and Gradient Boosting models
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RiskPrediction;
