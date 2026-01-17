import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Circle, Clock, Flag, Zap, Target, ArrowRight, PartyPopper } from "lucide-react";
import { toggleTaskCompletion } from "../../api/api";

const Milestone = ({ milestone, onTaskToggle, index = 0 }) => {
  const tasks = milestone.tasks || [];
  const completedCount = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const progress = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  const handleToggle = async (taskId, currentStatus) => {
    try {
      await toggleTaskCompletion(taskId, !currentStatus);
      if (onTaskToggle) onTaskToggle();
    } catch (error) {
      console.error("Error toggling task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  const status = progress === 100 ? "Completed" : progress > 0 ? "In Progress" : "Pending";
  
  const statusConfig = {
    "Completed": { color: "from-emerald-500 to-teal-500", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", icon: CheckCircle },
    "In Progress": { color: "from-indigo-500 to-purple-500", bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", icon: Clock },
    "Pending": { color: "from-slate-400 to-slate-500", bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200", icon: Flag }
  };

  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-2xl border-2 ${config.border} overflow-hidden shadow-lg hover:shadow-xl transition-all`}
    >
      {/* Progress Bar Header */}
      <div className="h-1.5 bg-slate-100">
        <motion.div
          className={`h-full bg-gradient-to-r ${config.color}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}
            >
              <config.icon className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">{milestone.name}</h3>
              <p className="text-sm text-slate-500">{milestone.duration || "1-2 weeks"}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${config.bg} ${config.text}`}>
              {status}
            </span>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="flex items-center gap-6 mb-5">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="40" cy="40" r="35" fill="none" stroke="#E2E8F0" strokeWidth="6" />
              <motion.circle
                cx="40" cy="40" r="35" fill="none"
                stroke={status === "Completed" ? "#22C55E" : status === "In Progress" ? "#6366F1" : "#94A3B8"}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={220}
                initial={{ strokeDashoffset: 220 }}
                animate={{ strokeDashoffset: 220 - (progress / 100) * 220 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-black text-slate-800">{progress}%</span>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <Target className="w-4 h-4" /> Total Tasks
              </span>
              <span className="font-bold text-slate-800">{total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Completed
              </span>
              <span className="font-bold text-emerald-600">{completedCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <Circle className="w-4 h-4" /> Remaining
              </span>
              <span className="font-bold text-amber-600">{total - completedCount}</span>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-2">
          {tasks.map((task, i) => (
            <motion.label
              key={task.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 4 }}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                task.completed 
                  ? 'bg-emerald-50 border border-emerald-200' 
                  : 'bg-slate-50 border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200'
              }`}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id, task.completed)}
                  className="sr-only"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                    task.completed 
                      ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg' 
                      : 'bg-white border-2 border-slate-300'
                  }`}
                >
                  {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                </motion.div>
              </div>
              
              <span className={`flex-1 text-sm font-medium ${
                task.completed ? 'text-emerald-700 line-through' : 'text-slate-700'
              }`}>
                {task.title}
              </span>

              {task.completed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 text-xs text-emerald-600 font-bold bg-emerald-100 px-2 py-1 rounded-full"
                >
                  <Zap className="w-3 h-3" /> +50 XP
                </motion.div>
              )}
            </motion.label>
          ))}
        </div>

        {/* Footer */}
        {status !== "Completed" && tasks.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 pt-4 border-t border-slate-100"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">
                Complete {total - completedCount} more tasks to finish this milestone
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-indigo-600 font-medium flex items-center gap-1"
              >
                Keep going! <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
          </motion.div>
        )}

        {/* Completion Badge */}
        {status === "Completed" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 pt-4 border-t border-emerald-100"
          >
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <PartyPopper className="w-5 h-5" />
              </motion.div>
              <span>Milestone Complete!</span>
              <span className="text-amber-500 flex items-center gap-1">
                <Zap className="w-4 h-4" /> +500 XP Bonus
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Milestone;
