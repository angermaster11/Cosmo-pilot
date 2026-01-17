// frontend/src/Components/Assignments/AssignmentList.jsx
// Student view of assignments

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, Clock, CheckCircle, BookOpen, Inbox } from 'lucide-react';
import { getActiveAssignments } from '../../api/api';
import AssignmentCard from './AssignmentCard';
import AssignmentSubmit from './AssignmentSubmit';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [filter, setFilter] = useState('all'); // all, pending, submitted

  useEffect(() => {
    loadAssignments();
  }, []);

  const loadAssignments = async () => {
    try {
      setLoading(true);
      const data = await getActiveAssignments();
      setAssignments(data);
    } catch (error) {
      console.error('Error loading assignments:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAssignments = assignments.filter(a => {
    if (filter === 'pending') return !a.submitted;
    if (filter === 'submitted') return a.submitted;
    return true;
  });

  const stats = {
    total: assignments.length,
    pending: assignments.filter(a => !a.submitted).length,
    submitted: assignments.filter(a => a.submitted).length
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <ClipboardList className="w-8 h-8 text-indigo-600" /> Assignments
        </h1>
        <p className="text-gray-600">Submit your work and track your progress</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white"
        >
          <div className="text-3xl font-bold">{stats.total}</div>
          <div className="text-blue-100">Total Assignments</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-4 text-white"
        >
          <div className="text-3xl font-bold">{stats.pending}</div>
          <div className="text-amber-100">Pending</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 text-white"
        >
          <div className="text-3xl font-bold">{stats.submitted}</div>
          <div className="text-green-100">Submitted</div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'all', label: 'All', Icon: BookOpen },
          { id: 'pending', label: 'Pending', Icon: Clock },
          { id: 'submitted', label: 'Submitted', Icon: CheckCircle }
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${
              filter === f.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <f.Icon className="w-4 h-4" /> {f.label}
          </button>
        ))}
      </div>

      {/* Assignment Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredAssignments.map((assignment, idx) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              index={idx}
              onSubmit={() => setSelectedAssignment(assignment)}
              onRefresh={loadAssignments}
            />
          ))}
        </AnimatePresence>
      </div>

      {filteredAssignments.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Inbox className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">No assignments found</h3>
          <p className="text-gray-500">
            {filter === 'pending' 
              ? "You've submitted all your assignments!" 
              : "Check back later for new assignments"}
          </p>
        </motion.div>
      )}

      {/* Submit Modal */}
      <AnimatePresence>
        {selectedAssignment && (
          <AssignmentSubmit
            assignment={selectedAssignment}
            onClose={() => setSelectedAssignment(null)}
            onSuccess={() => {
              setSelectedAssignment(null);
              loadAssignments();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AssignmentList;
