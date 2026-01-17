// frontend/src/Components/Assignments/AssignmentDetails.jsx
// Detailed view of assignment with results and leaderboard

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SearchX, CheckCircle, Clock, FileText, BarChart3, Trophy, Upload,
  AlertTriangle, BookOpen, Sparkles, Lightbulb, Target, Star, ThumbsUp,
  Pin, ArrowRight, PenLine, Medal, RefreshCw, HelpCircle
} from 'lucide-react';
import { getAssignmentDetails, getLeaderboard, getDetailedFeedback } from '../../api/api';
import AssignmentSubmit from './AssignmentSubmit';

// Helper function to split questions from description text
const parseQuestionsFromText = (text) => {
  if (!text) return [];
  
  // Try different patterns to split questions
  const patterns = [
    /(?:Q\d+[\.\):]?\s*|Question\s*\d+[\.\):]?\s*|\d+[\.\)]\s+)/gi,  // Q1. or Question 1: or 1.
    /\?\s+(?=[A-Z])/g,  // Split on ? followed by capital letter
    /(?:What|How|Why|Explain|Describe|Define|List|Compare|Discuss|Write)\s+/gi,  // Question starters
  ];
  
  let questions = [];
  
  // First try splitting by question numbers
  const numbered = text.split(/(?:Q\d+[\.\):]?\s*|Question\s*\d+[\.\):]?\s*|\d+[\.\)]\s+)/gi);
  if (numbered.length > 1) {
    questions = numbered.filter(q => q.trim().length > 10);
  }
  
  // If that didn't work, try splitting by question marks
  if (questions.length <= 1) {
    questions = text.split(/\?\s*/).filter(q => q.trim().length > 10).map(q => q.trim() + '?');
  }
  
  return questions.map((q, i) => ({
    number: i + 1,
    text: q.trim()
  }));
};

const AssignmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [parsedQuestions, setParsedQuestions] = useState([]);

  const loadData = useCallback(async () => {
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
      
      // Parse questions from description/instructions
      const qText = details.assignment?.description || details.assignment?.instructions || '';
      setParsedQuestions(parseQuestionsFromText(qText));
      
      // If there's a submission, get detailed feedback
      if (details.submission?.id) {
        try {
          const feedbackData = await getDetailedFeedback(details.submission.id);
          if (feedbackData.feedback) {
            setEvaluation(feedbackData.feedback.overall ? {
              ...feedbackData.feedback.overall,
              pros: feedbackData.feedback.pros,
              cons: feedbackData.feedback.cons,
              suggestions: feedbackData.feedback.suggestions,
              key_takeaways: feedbackData.feedback.key_takeaways,
              detailed_feedback: feedbackData.feedback.detailed_feedback,
              encouragement: feedbackData.feedback.encouragement,
              score_breakdown: feedbackData.feedback.score_breakdown,
              question_feedback: feedbackData.feedback.question_feedback,
              plagiarism_score: feedbackData.feedback.plagiarism?.score,
              is_plagiarized: feedbackData.feedback.plagiarism?.is_flagged
            } : null);
          }
        } catch (e) {
          // If detailed feedback fails, try from submission evaluations
          if (details.submission?.evaluations?.[0]) {
            setEvaluation(details.submission.evaluations[0]);
          }
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Auto-refresh when evaluation is pending
  useEffect(() => {
    if (submission && !evaluation && submission.status !== 'evaluated') {
      const interval = setInterval(async () => {
        try {
          const feedbackData = await getDetailedFeedback(submission.id);
          if (feedbackData.status === 'evaluated' && feedbackData.feedback) {
            setEvaluation(feedbackData.feedback.overall ? {
              ...feedbackData.feedback.overall,
              pros: feedbackData.feedback.pros,
              cons: feedbackData.feedback.cons,
              suggestions: feedbackData.feedback.suggestions,
              encouragement: feedbackData.feedback.encouragement,
              score_breakdown: feedbackData.feedback.score_breakdown
            } : null);
            clearInterval(interval);
          }
        } catch (e) {
          console.log('Still evaluating...');
        }
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [submission, evaluation]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadData();
    setIsRefreshing(false);
  };

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
          <SearchX className="w-16 h-16 text-slate-300 mx-auto mb-4" />
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
                <div className="font-semibold flex items-center gap-1">
                  {submission ? <><CheckCircle className="w-4 h-4" /> Submitted</> : <><Clock className="w-4 h-4" /> Pending</>}
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
              className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab === 'details' && <><FileText className="w-4 h-4" /> Details</>}
              {tab === 'results' && <><BarChart3 className="w-4 h-4" /> Results</>}
              {tab === 'leaderboard' && <><Trophy className="w-4 h-4" /> Leaderboard</>}
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
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" /> Assignment Questions
              </h2>
              
              {/* Show parsed questions if available */}
              {parsedQuestions.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {parsedQuestions.map((q, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex items-start gap-3">
                        <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {q.number}
                        </span>
                        <p className="text-gray-700">{q.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="prose max-w-none mb-6">
                  <p className="text-gray-600 whitespace-pre-wrap">
                    {assignment.instructions || assignment.description || 'No specific instructions provided.'}
                  </p>
                </div>
              )}

              {/* Original description if questions were parsed */}
              {parsedQuestions.length > 0 && assignment.instructions && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" /> Full Instructions
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-wrap">
                    {assignment.instructions}
                  </p>
                </div>
              )}

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
                  className="mt-8 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" /> Submit Assignment
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
                  <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
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
                  >
                    <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
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
                        <AlertTriangle className="w-6 h-6 text-red-600" />
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
                    <h3 className="font-semibold text-gray-800 mb-4 text-lg flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-indigo-600" /> Score Breakdown
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { 
                          label: 'Content Quality', 
                          score: evaluation.content_score, 
                          max: 30, 
                          Icon: BookOpen, 
                          color: 'blue',
                          comment: evaluation.score_breakdown?.content_quality?.comment
                        },
                        { 
                          label: 'Clarity & Organization', 
                          score: evaluation.clarity_score, 
                          max: 25, 
                          Icon: Sparkles, 
                          color: 'purple',
                          comment: evaluation.score_breakdown?.clarity_organization?.comment
                        },
                        { 
                          label: 'Completeness', 
                          score: evaluation.completeness_score, 
                          max: 25, 
                          Icon: CheckCircle, 
                          color: 'green',
                          comment: evaluation.score_breakdown?.completeness?.comment
                        },
                        { 
                          label: 'Originality & Creativity', 
                          score: evaluation.originality_score, 
                          max: 20, 
                          Icon: Lightbulb, 
                          color: 'amber',
                          comment: evaluation.score_breakdown?.originality_creativity?.comment
                        }
                      ].map(item => (
                        <div key={item.label} className="bg-gray-50 rounded-2xl p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-700 flex items-center gap-2">
                              <item.Icon className="w-4 h-4" /> {item.label}
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
                        <ThumbsUp className="w-5 h-5" /> What You Did Well (Pros)
                      </h3>
                      <div className="space-y-3">
                        {(evaluation.pros || evaluation.strengths || []).length > 0 ? (
                          (evaluation.pros || evaluation.strengths || []).map((item, i) => (
                            <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-xl shadow-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-green-700 text-sm italic">Feedback will appear after detailed evaluation</p>
                        )}
                      </div>
                    </div>

                    {/* CONS - Where You Need Improvement */}
                    <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                      <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
                        <AlertTriangle className="w-5 h-5" /> Where You Need Work (Cons)
                      </h3>
                      <div className="space-y-3">
                        {(evaluation.cons || evaluation.improvements || []).length > 0 ? (
                          (evaluation.cons || evaluation.improvements || []).map((item, i) => (
                            <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-xl shadow-sm">
                              <Pin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-red-700 text-sm italic">Areas for improvement will appear after detailed evaluation</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Suggestions for Improvement */}
                  {evaluation.suggestions?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-3 text-lg flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-blue-600" /> Suggestions for Improvement
                      </h3>
                      <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                        <ul className="space-y-2">
                          {evaluation.suggestions.map((s, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
                      <h3 className="font-semibold text-gray-800 mb-3 text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-600" /> Key Takeaways
                      </h3>
                      <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
                        <ul className="space-y-2">
                          {evaluation.key_takeaways.map((t, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
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
                      <h3 className="font-semibold text-gray-800 mb-3 text-lg flex items-center gap-2">
                        <PenLine className="w-5 h-5 text-slate-600" /> Detailed Feedback
                      </h3>
                      <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                        <div className="text-gray-700 whitespace-pre-wrap prose max-w-none">
                          {evaluation.detailed_feedback}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Encouragement Message - Always show some encouragement */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-indigo-600" />
                      <p className="text-indigo-800 font-medium">
                        {evaluation.encouragement || 
                         (evaluation.percentage >= 80 ? "Excellent work! Keep pushing yourself to achieve even greater heights! 🌟" :
                          evaluation.percentage >= 60 ? "Good effort! With some more practice, you'll master this topic! 💪" :
                          evaluation.percentage >= 40 ? "Keep learning! Every attempt is a step toward improvement! 📚" :
                          "Don't give up! Learning takes time, and you're making progress! 🚀")}
                      </p>
                    </div>
                  </div>

                  {/* Revision Recommendation */}
                  {(evaluation.would_recommend_revision || evaluation.percentage < 60) && (
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
                      <div className="flex items-center gap-3">
                        <PenLine className="w-6 h-6 text-amber-600" />
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
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-amber-500" /> Leaderboard
              </h2>
              
              {leaderboard.length === 0 ? (
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
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
                        {entry.rank <= 3 ? <Medal className="w-6 h-6" /> : `#${entry.rank}`}
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
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Flagged
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
