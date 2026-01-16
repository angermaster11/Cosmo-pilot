// frontend/src/Components/Assignments/AssignmentDetails.jsx
// Detailed view of assignment with results and leaderboard

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssignmentDetails, getLeaderboard } from '../../api/api';
import AssignmentSubmit from './AssignmentSubmit';

const AssignmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [details, board] = await Promise.all([
        getAssignmentDetails(id),
        getLeaderboard(id)
      ]);
      
      setAssignment(details.assignment);
      setSubmission(details.submission);
      setLeaderboard(board.leaderboard || []);
      setMyRank(board.my_rank);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const evaluation = submission?.evaluations?.[0];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
        />
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-700">Assignment not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back to Assignments
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">{assignment.title}</h1>
            <p className="text-blue-100">{assignment.description}</p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-white/20 rounded-xl px-4 py-2">
                <div className="text-sm text-blue-100">Due Date</div>
                <div className="font-semibold">
                  {assignment.due_date 
                    ? new Date(assignment.due_date).toLocaleDateString()
                    : 'No deadline'}
                </div>
              </div>
              <div className="bg-white/20 rounded-xl px-4 py-2">
                <div className="text-sm text-blue-100">Max Score</div>
                <div className="font-semibold">{assignment.max_score || 100}</div>
              </div>
              <div className="bg-white/20 rounded-xl px-4 py-2">
                <div className="text-sm text-blue-100">Status</div>
                <div className="font-semibold">
                  {submission ? '✅ Submitted' : '⏳ Pending'}
                </div>
              </div>
              {myRank && (
                <div className="bg-white/20 rounded-xl px-4 py-2">
                  <div className="text-sm text-blue-100">Your Rank</div>
                  <div className="font-semibold">#{myRank.rank}</div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['details', 'results', 'leaderboard'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab === 'details' && '📋 Details'}
              {tab === 'results' && '📊 Results'}
              {tab === 'leaderboard' && '🏆 Leaderboard'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'details' && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">📋 Instructions</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-wrap">
                  {assignment.instructions || 'No specific instructions provided.'}
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-700 mb-3">Allowed Formats</h3>
                <div className="flex flex-wrap gap-2">
                  {(assignment.allowed_formats || ['pdf', 'doc', 'txt']).map(format => (
                    <span
                      key={format}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      .{format}
                    </span>
                  ))}
                </div>
              </div>

              {!submission && (
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="mt-8 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  📤 Submit Assignment
                </button>
              )}
            </motion.div>
          )}

          {activeTab === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              {!submission ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-700">No submission yet</h3>
                  <p className="text-gray-500 mt-2">Submit your assignment to see results</p>
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl font-medium"
                  >
                    Submit Now
                  </button>
                </div>
              ) : !evaluation ? (
                <div className="text-center py-12">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    ⏳
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-700">Evaluation in progress</h3>
                  <p className="text-gray-500 mt-2">Your submission is being evaluated. Check back soon!</p>
                </div>
              ) : (
                <div>
                  {/* Grade Badge */}
                  {evaluation.grade && (
                    <div className="text-center mb-4">
                      <span className={`inline-block px-6 py-2 rounded-full text-2xl font-bold ${
                        evaluation.grade?.startsWith('A') ? 'bg-green-100 text-green-700' :
                        evaluation.grade?.startsWith('B') ? 'bg-blue-100 text-blue-700' :
                        evaluation.grade?.startsWith('C') ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        Grade: {evaluation.grade}
                      </span>
                    </div>
                  )}

                  {/* Score Overview */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${
                      evaluation.percentage >= 80 ? 'bg-green-100' :
                      evaluation.percentage >= 60 ? 'bg-yellow-100' :
                      'bg-red-100'
                    }`}>
                      <div>
                        <div className={`text-4xl font-bold ${
                          evaluation.percentage >= 80 ? 'text-green-600' :
                          evaluation.percentage >= 60 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {evaluation.score}
                        </div>
                        <div className="text-gray-500">/{evaluation.max_score}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-2xl font-bold text-gray-800">
                      {evaluation.percentage}%
                    </div>
                  </div>

                  {/* Plagiarism Warning */}
                  {evaluation.is_plagiarized && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                          <div className="font-semibold text-red-700">
                            Plagiarism Detected ({evaluation.plagiarism_score}%)
                          </div>
                          <p className="text-sm text-red-600">
                            Your submission has high similarity with other submissions. Score has been penalized.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Score Breakdown with Comments */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-4 text-lg">📊 Score Breakdown</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { 
                          label: 'Content Quality', 
                          score: evaluation.content_score, 
                          max: 30, 
                          icon: '📚', 
                          color: 'blue',
                          comment: evaluation.score_breakdown?.content_quality?.comment
                        },
                        { 
                          label: 'Clarity & Organization', 
                          score: evaluation.clarity_score, 
                          max: 25, 
                          icon: '✨', 
                          color: 'purple',
                          comment: evaluation.score_breakdown?.clarity_organization?.comment
                        },
                        { 
                          label: 'Completeness', 
                          score: evaluation.completeness_score, 
                          max: 25, 
                          icon: '✅', 
                          color: 'green',
                          comment: evaluation.score_breakdown?.completeness?.comment
                        },
                        { 
                          label: 'Originality & Creativity', 
                          score: evaluation.originality_score, 
                          max: 20, 
                          icon: '💡', 
                          color: 'amber',
                          comment: evaluation.score_breakdown?.originality_creativity?.comment
                        }
                      ].map(item => (
                        <div key={item.label} className="bg-gray-50 rounded-2xl p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-700">
                              {item.icon} {item.label}
                            </span>
                            <span className={`font-bold ${
                              (item.score / item.max) >= 0.8 ? 'text-green-600' :
                              (item.score / item.max) >= 0.6 ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>{item.score}/{item.max}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div
                              className={`h-2 rounded-full ${
                                (item.score / item.max) >= 0.8 ? 'bg-green-500' :
                                (item.score / item.max) >= 0.6 ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}
                              style={{ width: `${(item.score / item.max) * 100}%` }}
                            />
                          </div>
                          {item.comment && (
                            <p className="text-sm text-gray-500 mt-1">{item.comment}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pros and Cons Side by Side */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* PROS - What You Did Well */}
                    <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                      <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
                        <span className="text-2xl">✅</span> What You Did Well (Pros)
                      </h3>
                      <div className="space-y-3">
                        {(evaluation.pros || evaluation.strengths || []).map((item, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-xl shadow-sm">
                            <span className="text-green-600 mt-0.5">👍</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CONS - Where You Need Improvement */}
                    <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                      <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
                        <span className="text-2xl">⚠️</span> Where You Need Work (Cons)
                      </h3>
                      <div className="space-y-3">
                        {(evaluation.cons || evaluation.improvements || []).map((item, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-xl shadow-sm">
                            <span className="text-red-600 mt-0.5">📌</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Suggestions for Improvement */}
                  {evaluation.suggestions?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-3 text-lg">💡 Suggestions for Improvement</h3>
                      <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                        <ul className="space-y-2">
                          {evaluation.suggestions.map((s, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-600">➤</span>
                              <span className="text-gray-700">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Key Takeaways */}
                  {evaluation.key_takeaways?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-3 text-lg">🎯 Key Takeaways</h3>
                      <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
                        <ul className="space-y-2">
                          {evaluation.key_takeaways.map((t, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-purple-600">★</span>
                              <span className="text-gray-700">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Detailed Feedback */}
                  {evaluation.detailed_feedback && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-3 text-lg">📝 Detailed Feedback</h3>
                      <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                        <div className="text-gray-700 whitespace-pre-wrap prose max-w-none">
                          {evaluation.detailed_feedback}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Encouragement Message */}
                  {evaluation.encouragement && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🌟</span>
                        <p className="text-indigo-800 font-medium">{evaluation.encouragement}</p>
                      </div>
                    </div>
                  )}

                  {/* Revision Recommendation */}
                  {evaluation.would_recommend_revision && (
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📝</span>
                        <div>
                          <div className="font-semibold text-amber-800">Revision Recommended</div>
                          <p className="text-sm text-amber-700">
                            Consider revising your submission based on the feedback above to improve your score.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'leaderboard' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">🏆 Leaderboard</h2>
              
              {leaderboard.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-700">No submissions yet</h3>
                  <p className="text-gray-500 mt-2">Be the first to submit!</p>
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
                        myRank?.student_id === entry.student_id
                          ? 'bg-blue-50 border-2 border-blue-200'
                          : 'bg-gray-50'
                      } ${entry.is_plagiarized ? 'opacity-60' : ''}`}
                    >
                      {/* Rank */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        entry.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                        entry.rank === 2 ? 'bg-gray-300 text-gray-700' :
                        entry.rank === 3 ? 'bg-amber-600 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">
                          Student #{entry.student_id}
                          {myRank?.student_id === entry.student_id && (
                            <span className="ml-2 text-blue-600">(You)</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          Submitted {new Date(entry.submitted_at).toLocaleDateString()}
                        </div>
                      </div>

                      {/* Score */}
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          entry.percentage >= 80 ? 'text-green-600' :
                          entry.percentage >= 60 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {entry.percentage}%
                        </div>
                        <div className="text-sm text-gray-500">
                          {entry.score} pts
                        </div>
                      </div>

                      {/* Plagiarism flag */}
                      {entry.is_plagiarized && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                          ⚠️ Flagged
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submit Modal */}
      <AnimatePresence>
        {showSubmitModal && (
          <AssignmentSubmit
            assignment={assignment}
            onClose={() => setShowSubmitModal(false)}
            onSuccess={() => {
              setShowSubmitModal(false);
              loadData();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AssignmentDetails;
