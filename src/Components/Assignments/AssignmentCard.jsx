// frontend/src/Components/Assignments/AssignmentCard.jsx
// Card component for displaying assignment info

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AssignmentCard = ({ assignment, index, onSubmit, onRefresh }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const dueDate = assignment.due_date ? new Date(assignment.due_date) : null;
  const isPastDue = dueDate && new Date() > dueDate;
  const isSubmitted = assignment.submitted;
  const submission = assignment.submission;
  const evaluation = submission?.evaluations?.[0];

  const formatDate = (date) => {
    if (!date) return 'No due date';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = () => {
    if (evaluation) {
      const score = evaluation.percentage || 0;
      return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          score >= 80 ? 'bg-green-100 text-green-700' :
          score >= 60 ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          Score: {score}%
        </span>
      );
    }
    if (submission?.status === 'evaluating') {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 animate-pulse">
          ⏳ Evaluating...
        </span>
      );
    }
    if (isSubmitted) {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
          ✅ Submitted
        </span>
      );
    }
    if (isPastDue) {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
          ⚠️ Past Due
        </span>
      );
    }
    return (
      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
        📝 Pending
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${
        isPastDue && !isSubmitted ? 'ring-2 ring-red-200' : ''
      }`}
    >
      {/* Header */}
      <div className={`p-4 ${
        isSubmitted 
          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
          : isPastDue 
            ? 'bg-gradient-to-r from-red-500 to-rose-500'
            : 'bg-gradient-to-r from-blue-500 to-indigo-500'
      }`}>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-white line-clamp-2">
            {assignment.title}
          </h3>
          {getStatusBadge()}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {assignment.description || 'No description provided'}
        </p>

        {/* Meta info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <span>📅</span>
            <span className={isPastDue && !isSubmitted ? 'text-red-600 font-medium' : ''}>
              Due: {formatDate(dueDate)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span>📊</span>
            <span>Max Score: {assignment.max_score || 100}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span>📁</span>
            <span>Formats: {(assignment.allowed_formats || ['pdf', 'doc', 'txt']).join(', ')}</span>
          </div>
        </div>

        {/* Evaluation Preview */}
        {evaluation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 p-3 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Your Score</span>
              <span className={`text-2xl font-bold ${
                evaluation.percentage >= 80 ? 'text-green-600' :
                evaluation.percentage >= 60 ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                {evaluation.score}/{evaluation.max_score}
              </span>
            </div>
            {/* Score breakdown */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Content</span>
                <span className="font-medium">{evaluation.content_score}/30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Clarity</span>
                <span className="font-medium">{evaluation.clarity_score}/25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Completeness</span>
                <span className="font-medium">{evaluation.completeness_score}/25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Originality</span>
                <span className="font-medium">{evaluation.originality_score}/20</span>
              </div>
            </div>
            {evaluation.is_plagiarized && (
              <div className="mt-2 p-2 bg-red-50 rounded-lg text-xs text-red-700">
                ⚠️ Plagiarism detected ({evaluation.plagiarism_score}%)
              </div>
            )}
          </motion.div>
        )}

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          {!isSubmitted && (
            <button
              onClick={onSubmit}
              className="flex-1 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              📤 Submit
            </button>
          )}
          <button
            onClick={() => navigate(`/assignment/${assignment.id}`)}
            className={`${isSubmitted ? 'flex-1' : ''} py-2.5 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors`}
          >
            {isSubmitted ? '📊 View Details' : '👁️ View'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AssignmentCard;
