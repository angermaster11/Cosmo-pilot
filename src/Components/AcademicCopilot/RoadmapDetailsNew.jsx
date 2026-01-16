import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { format, formatDistanceToNow } from "date-fns";
import { fetchRoadmapDetails, toggleTaskCompletion, recordDailyCheckIn } from "../../api/api";
import ProgressCharts, { CircularProgress, XPProgressBar, TaskPieChart } from "./ProgressCharts";
import StreakCard from "./StreakCard";
import Achievements from "./Achievements";

// Modern Milestone Component with Optimistic Updates
const MilestoneCard = ({ milestone, index, onTaskToggle, onTaskComplete }) => {
  const [expanded, setExpanded] = useState(index === 0);
  const [localTasks, setLocalTasks] = useState(milestone.tasks || []);
  const [loading, setLoading] = useState({});
  
  // Sync local tasks when milestone prop changes
  useEffect(() => {
    setLocalTasks(milestone.tasks || []);
  }, [milestone.tasks]);
  
  const tasks = localTasks;
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  const handleToggle = async (taskId, currentStatus) => {
    // Optimistic update - update UI immediately
    setLoading(prev => ({ ...prev, [taskId]: true }));
    setLocalTasks(prev => 
      prev.map(t => t.id === taskId ? { ...t, completed: !currentStatus } : t)
    );
    
    try {
      await toggleTaskCompletion(taskId, !currentStatus);
      if (!currentStatus) {
        onTaskComplete?.();
      }
      // Refresh parent data in background
      onTaskToggle?.();
    } catch (error) {
      console.error("Error toggling task:", error);
      // Revert on error
      setLocalTasks(prev => 
        prev.map(t => t.id === taskId ? { ...t, completed: currentStatus } : t)
      );
      alert("Failed to update task. Please try again.");
    } finally {
      setLoading(prev => ({ ...prev, [taskId]: false }));
    }
  };

  const statusConfig = {
    completed: { color: "bg-green-500", text: "Completed", icon: "✅" },
    in_progress: { color: "bg-yellow-500", text: "In Progress", icon: "🔄" },
    pending: { color: "bg-gray-400", text: "Pending", icon: "⏳" },
  };

  const status = progress === 100 ? "completed" : progress > 0 ? "in_progress" : "pending";
  const config = statusConfig[status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
    >
      {/* Milestone Header */}
      <div
        className="p-5 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${config.color} flex items-center justify-center text-2xl text-white shadow-lg`}>
              {config.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">{milestone.name}</h3>
              <p className="text-sm text-gray-500">
                {completedCount} of {tasks.length} tasks • {milestone.duration_days || milestone.duration} days
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              status === "completed" ? "bg-green-100 text-green-700" :
              status === "in_progress" ? "bg-yellow-100 text-yellow-700" :
              "bg-gray-100 text-gray-600"
            }`}>
              {config.text}
            </span>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              className="text-gray-400"
            >
              ▼
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                status === "completed" ? "bg-gradient-to-r from-green-400 to-emerald-500" :
                "bg-gradient-to-r from-indigo-500 to-purple-500"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-100"
          >
            <div className="p-5 space-y-3">
              {tasks.map((task, taskIndex) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: taskIndex * 0.05 }}
                  className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                    task.completed ? "bg-green-50" : "bg-gray-50 hover:bg-indigo-50"
                  } ${loading[task.id] ? "opacity-70" : ""}`}
                >
                  <label className="flex items-start gap-3 flex-1 cursor-pointer">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggle(task.id, task.completed)}
                        disabled={loading[task.id]}
                        className="sr-only"
                      />
                      <motion.div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${
                          task.completed
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-gray-300 hover:border-indigo-500"
                        } ${loading[task.id] ? "animate-pulse" : ""}`}
                        whileTap={{ scale: 0.9 }}
                      >
                        {loading[task.id] ? (
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="text-xs"
                          >
                            ⏳
                          </motion.span>
                        ) : task.completed ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-sm"
                          >
                            ✓
                          </motion.span>
                        ) : null}
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${task.completed ? "text-gray-400 line-through" : "text-gray-800"}`}>
                        {task.title}
                      </p>
                      {task.description && (
                        <p className="text-xs text-gray-500 mt-1">{task.description}</p>
                      )}
                      {task.estimated_hours && (
                        <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-100 text-indigo-600 text-xs rounded-full">
                          ⏱️ {task.estimated_hours}h estimated
                        </span>
                      )}
                    </div>
                  </label>
                  {task.completed && task.completed_at && (
                    <span className="text-xs text-gray-400">
                      {formatDistanceToNow(new Date(task.completed_at), { addSuffix: true })}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Daily Check-in Component
const DailyCheckIn = ({ roadmapId, hasCheckedIn, onCheckIn }) => {
  const [checking, setChecking] = useState(false);
  const [notes, setNotes] = useState("");

  const handleCheckIn = async () => {
    setChecking(true);
    try {
      await recordDailyCheckIn(roadmapId, notes);
      onCheckIn?.();
    } catch (error) {
      console.error("Check-in error:", error);
    } finally {
      setChecking(false);
    }
  };

  if (hasCheckedIn) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center gap-4">
          <div className="text-5xl">✅</div>
          <div>
            <h3 className="text-xl font-bold">You're on track today!</h3>
            <p className="text-white/80">Keep up the great work! 🚀</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white"
    >
      <h3 className="text-xl font-bold mb-2">Daily Check-in</h3>
      <p className="text-white/80 mb-4">Check in to maintain your streak! 🔥</p>
      <input
        type="text"
        placeholder="How are you feeling today? (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full p-3 rounded-lg bg-white/20 placeholder-white/50 text-white border-none outline-none mb-4"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCheckIn}
        disabled={checking}
        className="w-full py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition disabled:opacity-50"
      >
        {checking ? "Checking in..." : "Check In Now! 🎯"}
      </motion.button>
    </motion.div>
  );
};

// Main Roadmap Details Component
const RoadmapDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    loadRoadmapDetails();
  }, [id]);

  const loadRoadmapDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchRoadmapDetails(id);
      setRoadmap(data);
    } catch (err) {
      console.error("Error loading roadmap:", err);
      setError("Failed to load roadmap details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTaskComplete = () => {
    // Show confetti briefly
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 font-medium">Loading your roadmap...</p>
        </div>
      </div>
    );
  }

  if (error || !roadmap) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-6">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {error || "Roadmap not found"}
          </h2>
          <p className="text-gray-500 mb-6">
            We couldn't find the roadmap you're looking for.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition"
          >
            ← Go Back
          </motion.button>
        </div>
      </div>
    );
  }

  // Calculate stats
  const milestones = roadmap.milestones || [];
  const totalTasks = milestones.reduce((sum, m) => sum + (m.tasks?.length || 0), 0);
  const completedTasks = milestones.reduce(
    (sum, m) => sum + (m.tasks?.filter((t) => t.completed).length || 0), 0
  );
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const inProgressTasks = milestones.reduce(
    (sum, m) => sum + (m.tasks?.filter((t) => !t.completed).length || 0), 0
  );

  // Calculate XP (50 XP per task, 200 XP per milestone, streak bonus)
  const xp = completedTasks * 50 + 
    milestones.filter((m) => m.status === "completed").length * 200 +
    (roadmap.current_streak || 0) * 10;
  const level = Math.floor(xp / 500) + 1;

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "milestones", label: "Milestones", icon: "🎯" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
  ];

  const today = new Date().toISOString().split("T")[0];
  const hasCheckedInToday = roadmap.last_activity_date === today;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4 font-medium"
          >
            <span>←</span> Back to Dashboard
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-gray-900">{roadmap.title}</h1>
              <p className="text-gray-500 mt-1">{roadmap.description}</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  📅 {roadmap.duration_days} days
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  🎯 {roadmap.difficulty}
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  🔥 {roadmap.current_streak || 0} day streak
                </span>
                {roadmap.created_at && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    Started {format(new Date(roadmap.created_at), "MMM d, yyyy")}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <CircularProgress percentage={progress} size={100} label="Complete" />
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                      ✅
                    </div>
                    <div>
                      <p className="text-2xl font-black text-gray-800">{completedTasks}</p>
                      <p className="text-sm text-gray-500">Tasks Done</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl">
                      ⏳
                    </div>
                    <div>
                      <p className="text-2xl font-black text-gray-800">{inProgressTasks}</p>
                      <p className="text-sm text-gray-500">Tasks Left</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      📚
                    </div>
                    <div>
                      <p className="text-2xl font-black text-gray-800">{milestones.length}</p>
                      <p className="text-sm text-gray-500">Milestones</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <div>
                      <p className="text-2xl font-black text-gray-800">{xp}</p>
                      <p className="text-sm text-gray-500">XP Earned</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Daily Check-in */}
                  <DailyCheckIn
                    roadmapId={roadmap.id}
                    hasCheckedIn={hasCheckedInToday}
                    onCheckIn={loadRoadmapDetails}
                  />

                  {/* Task Distribution */}
                  <TaskPieChart
                    completed={completedTasks}
                    inProgress={Math.ceil(inProgressTasks / 2)}
                    pending={Math.floor(inProgressTasks / 2)}
                  />
                </div>

                <div className="space-y-6">
                  {/* Streak Card */}
                  <StreakCard
                    currentStreak={roadmap.current_streak || 0}
                    longestStreak={roadmap.longest_streak || 0}
                    lastActivityDate={roadmap.last_activity_date}
                  />

                  {/* XP Progress */}
                  <XPProgressBar
                    currentXP={xp % 500}
                    nextLevelXP={500}
                    level={level}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "milestones" && (
            <motion.div
              key="milestones"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {milestones.length > 0 ? (
                milestones.map((milestone, index) => (
                  <MilestoneCard
                    key={milestone.id}
                    milestone={milestone}
                    index={index}
                    onTaskToggle={loadRoadmapDetails}
                    onTaskComplete={handleTaskComplete}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-2xl">
                  <div className="text-6xl mb-4">📭</div>
                  <p className="text-gray-500">No milestones found</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "analytics" && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ProgressCharts roadmapId={roadmap.id} milestones={milestones} />
            </motion.div>
          )}

          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Achievements
                stats={{
                  tasksCompleted: completedTasks,
                  currentStreak: roadmap.current_streak || 0,
                  milestonesCompleted: milestones.filter((m) => m.status === "completed").length,
                  roadmapsCompleted: progress === 100 ? 1 : 0,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RoadmapDetails;
