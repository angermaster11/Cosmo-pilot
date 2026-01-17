import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle, RefreshCw, Clock, Flame } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend,
  RadialBarChart,
  RadialBar
} from "recharts";
import { fetchRoadmapAnalytics } from "../../api/api";

// Color palette
const COLORS = {
  primary: "#6366f1",
  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
  info: "#3b82f6",
  purple: "#8b5cf6",
  pink: "#ec4899",
  gradient: ["#6366f1", "#8b5cf6", "#ec4899"]
};

const PIE_COLORS = ["#10b981", "#f59e0b", "#ef4444"];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Progress Line Chart Component
export const ProgressLineChart = ({ data = [], title = "Progress Over Time" }) => {
  // Generate sample data if none provided
  const chartData = data.length > 0 ? data : [
    { date: "Week 1", progress: 5 },
    { date: "Week 2", progress: 15 },
    { date: "Week 3", progress: 25 },
    { date: "Week 4", progress: 40 },
    { date: "Week 5", progress: 55 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3} />
              <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 12 }} />
          <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="progress"
            stroke={COLORS.primary}
            strokeWidth={3}
            fill="url(#progressGradient)"
            dot={{ fill: COLORS.primary, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: COLORS.primary }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

// Task Distribution Pie Chart
export const TaskPieChart = ({ completed = 0, inProgress = 0, pending = 0 }) => {
  const data = [
    { name: "Completed", value: completed || 1 },
    { name: "In Progress", value: inProgress || 1 },
    { name: "Pending", value: pending || 1 },
  ];

  const total = completed + inProgress + pending;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-4">Task Distribution</h3>
      <div className="flex items-center">
        <ResponsiveContainer width="60%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              animationBegin={0}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="w-40% space-y-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: PIE_COLORS[index] }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
              <span className="text-sm font-bold ml-auto">
                {total > 0 ? Math.round((item.value / total) * 100) : 0}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Weekly Activity Bar Chart
export const WeeklyActivityChart = ({ data = [] }) => {
  const chartData = data.length > 0 ? data : [
    { day: "Mon", tasks: 3, hours: 2 },
    { day: "Tue", tasks: 5, hours: 3 },
    { day: "Wed", tasks: 2, hours: 1.5 },
    { day: "Thu", tasks: 4, hours: 2.5 },
    { day: "Fri", tasks: 6, hours: 4 },
    { day: "Sat", tasks: 1, hours: 0.5 },
    { day: "Sun", tasks: 3, hours: 2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-4">Weekly Activity</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="day" tick={{ fill: "#6b7280", fontSize: 12 }} />
          <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="tasks"
            fill={COLORS.primary}
            radius={[4, 4, 0, 0]}
            name="Tasks Completed"
          />
          <Bar
            dataKey="hours"
            fill={COLORS.success}
            radius={[4, 4, 0, 0]}
            name="Hours Spent"
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

// Circular Progress Component
export const CircularProgress = ({ percentage = 0, size = 120, strokeWidth = 12, label = "Progress" }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={COLORS.primary} />
              <stop offset="100%" stopColor={COLORS.pink} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-2xl font-black text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      <span className="text-sm text-gray-500 mt-2">{label}</span>
    </motion.div>
  );
};

// XP Progress Bar
export const XPProgressBar = ({ currentXP = 0, nextLevelXP = 1000, level = 1 }) => {
  const progress = (currentXP / nextLevelXP) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-yellow-300" />
          <div>
            <p className="text-xs opacity-80">Experience Points</p>
            <p className="text-xl font-bold">{currentXP} XP</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-80">Level</p>
          <p className="text-3xl font-black">{level}</p>
        </div>
      </div>
      
      <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold drop-shadow">
            {currentXP} / {nextLevelXP} XP
          </span>
        </div>
      </div>
      
      <p className="text-xs text-center mt-2 opacity-80">
        {nextLevelXP - currentXP} XP to Level {level + 1}
      </p>
    </motion.div>
  );
};

// Stats Grid Component
export const StatsGrid = ({ stats }) => {
  const defaultStats = [
    { label: "Tasks Completed", value: stats?.completed || 0, Icon: CheckCircle, color: "bg-green-100 text-green-600" },
    { label: "In Progress", value: stats?.inProgress || 0, Icon: RefreshCw, color: "bg-yellow-100 text-yellow-600" },
    { label: "Total Hours", value: stats?.hours || 0, Icon: Clock, color: "bg-blue-100 text-blue-600" },
    { label: "Current Streak", value: stats?.streak || 0, Icon: Flame, color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {defaultStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>
            <stat.Icon className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          <p className="text-xs text-gray-500">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Full Analytics Dashboard
const ProgressCharts = ({ roadmapId, milestones = [] }) => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (roadmapId) {
      loadAnalytics();
    } else {
      setLoading(false);
    }
  }, [roadmapId]);

  const loadAnalytics = async () => {
    try {
      const data = await fetchRoadmapAnalytics(roadmapId);
      setAnalytics(data);
    } catch (error) {
      console.error("Error loading analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate task stats from milestones
  const taskStats = milestones.reduce(
    (acc, milestone) => {
      const tasks = milestone.tasks || [];
      acc.total += tasks.length;
      acc.completed += tasks.filter((t) => t.completed).length;
      acc.inProgress += tasks.filter((t) => !t.completed && milestone.status === "in_progress").length;
      return acc;
    },
    { total: 0, completed: 0, inProgress: 0 }
  );

  taskStats.pending = taskStats.total - taskStats.completed - taskStats.inProgress;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressLineChart data={analytics?.progress_history} />
        <TaskPieChart
          completed={taskStats.completed}
          inProgress={taskStats.inProgress}
          pending={taskStats.pending}
        />
      </div>
      <WeeklyActivityChart />
    </div>
  );
};

export default ProgressCharts;
