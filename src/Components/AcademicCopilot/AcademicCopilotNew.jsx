import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CopilotButton from "./CopilotButton";
import CopilotChat from "./CopilotChatNew";
import RoadmapBoard from "./RoadmapBoard";
import StreakCard from "./StreakCard";
import { XPProgressBar, StatsGrid } from "./ProgressCharts";
import { fetchUserRoadmaps, getCurrentUserId } from "../../api/api";

const AcademicCopilot = () => {
  const [open, setOpen] = useState(false);
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Get current user from localStorage
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        setCurrentUser(userData);
      }
    } catch (e) {
      console.error("Error parsing user data:", e);
    }
    loadRoadmaps();
  }, []);

  const loadRoadmaps = async () => {
    try {
      setLoading(true);
      const data = await fetchUserRoadmaps();
      setRoadmaps(data || []);
    } catch (error) {
      console.error("Error loading roadmaps:", error);
      setRoadmaps([]);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = (roadmap) => {
    setRoadmaps((prev) => [roadmap, ...prev]);
    setOpen(false);
  };

  // Calculate overall stats
  const totalTasks = roadmaps.reduce((sum, r) => {
    const milestones = r.milestones || [];
    return sum + milestones.reduce((mSum, m) => mSum + (m.tasks?.length || 0), 0);
  }, 0);

  const completedTasks = roadmaps.reduce((sum, r) => {
    const milestones = r.milestones || [];
    return sum + milestones.reduce((mSum, m) => 
      mSum + (m.tasks?.filter((t) => t.completed).length || 0), 0);
  }, 0);

  const bestStreak = Math.max(...roadmaps.map((r) => r.current_streak || 0), 0);
  const totalXP = completedTasks * 50 + roadmaps.filter((r) => r.overall_progress === 100).length * 500;
  const level = Math.floor(totalXP / 500) + 1;

  // Filter roadmaps
  const filteredRoadmaps = roadmaps.filter((r) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "active") return r.status === "active" && r.overall_progress < 100;
    if (activeFilter === "completed") return r.overall_progress === 100;
    return true;
  });

  const filters = [
    { id: "all", label: "All Roadmaps", icon: "📚" },
    { id: "active", label: "In Progress", icon: "🚀" },
    { id: "completed", label: "Completed", icon: "✅" },
  ];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 font-medium">Loading your learning journey...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">
                Academic Copilot 🚀
              </h1>
              <p className="text-gray-500 text-lg">
                AI-powered learning roadmaps to achieve your goals
                {currentUser && (
                  <span className="ml-2 text-indigo-600 font-medium">
                    • Welcome, {currentUser.username || currentUser.user_id}!
                  </span>
                )}
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <span className="text-xl">✨</span>
              Create New Roadmap
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Dashboard */}
        {roadmaps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Stats */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-3">
                      📚
                    </div>
                    <p className="text-3xl font-black text-gray-800">{roadmaps.length}</p>
                    <p className="text-sm text-gray-500">Total Roadmaps</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-3">
                      ✅
                    </div>
                    <p className="text-3xl font-black text-gray-800">{completedTasks}</p>
                    <p className="text-sm text-gray-500">Tasks Done</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-3">
                      🔥
                    </div>
                    <p className="text-3xl font-black text-gray-800">{bestStreak}</p>
                    <p className="text-sm text-gray-500">Best Streak</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-3">
                      ⚡
                    </div>
                    <p className="text-3xl font-black text-gray-800">Lv.{level}</p>
                    <p className="text-sm text-gray-500">Your Level</p>
                  </motion.div>
                </div>

                {/* XP Progress */}
                <div className="mt-4">
                  <XPProgressBar
                    currentXP={totalXP % 500}
                    nextLevelXP={500}
                    level={level}
                  />
                </div>
              </div>

              {/* Streak Card */}
              <div>
                <StreakCard
                  currentStreak={bestStreak}
                  longestStreak={Math.max(...roadmaps.map((r) => r.longest_streak || 0), 0)}
                  lastActivityDate={roadmaps[0]?.last_activity_date}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-3 rounded-xl font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow"
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
              {filter.id === "all" && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {roadmaps.length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Roadmaps Grid */}
        <AnimatePresence mode="wait">
          {filteredRoadmaps.length > 0 ? (
            <motion.div
              key="roadmaps"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <RoadmapBoard roadmaps={filteredRoadmaps} />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-16 px-4"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {activeFilter === "all" 
                  ? "Start Your Learning Journey!"
                  : `No ${activeFilter} roadmaps yet`}
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {activeFilter === "all"
                  ? "Create your first AI-powered learning roadmap and start achieving your goals today!"
                  : "Complete some tasks or create new roadmaps to see them here."}
              </p>
              {activeFilter === "all" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  ✨ Create Your First Roadmap
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {open && (
          <CopilotChat
            onGenerate={handleGenerate}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <CopilotButton onClick={() => setOpen(true)} />
    </div>
  );
};

export default AcademicCopilot;
