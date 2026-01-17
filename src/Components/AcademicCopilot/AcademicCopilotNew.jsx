import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Sparkles, Rocket, Target, Trophy, Flame, Zap, BookOpen, CheckCircle,
  Clock, Calendar, TrendingUp, Award, Star, Map, Flag, ChevronRight,
  Plus, Filter, BarChart3, PieChart as PieChartIcon, Activity, Brain,
  GraduationCap, Layers, ArrowUpRight, Play, Pause, RefreshCw, Layout, Crown, Gem
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, XAxis,
  YAxis, Tooltip, Legend, LineChart, Line, CartesianGrid, RadialBarChart, RadialBar
} from "recharts";
import CopilotChat from "./CopilotChatNew";
import { fetchUserRoadmaps } from "../../api/api";

// ==================== COLOR PALETTE ====================
const COLORS = {
  primary: '#6366F1',
  secondary: '#8B5CF6',
  success: '#22C55E',
  warning: '#FBBF24',
  danger: '#F87171',
  info: '#3B82F6',
  slate: '#64748B',
  gradient: ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#22C55E', '#06B6D4']
};

// ==================== ANIMATED COUNTER ====================
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseFloat(value) || 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <>{Math.floor(count)}{suffix}</>;
};

// ==================== GLASS CARD ====================
const GlassCard = ({ children, className = "", gradient = false, hover = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={hover ? { y: -5, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.2)" } : {}}
    className={`relative overflow-hidden rounded-3xl ${gradient ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500' : 'bg-white/95 backdrop-blur-xl'} border border-slate-200/50 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

// ==================== FLOATING PARTICLES ====================
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
        animate={{
          y: [0, -100, 0],
          x: [0, Math.sin(i) * 30, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut"
        }}
        style={{ left: `${10 + i * 12}%`, top: '80%' }}
      />
    ))}
  </div>
);

// ==================== CIRCULAR PROGRESS RING ====================
const CircularProgressRing = ({ percentage, size = 120, strokeWidth = 10, color = COLORS.primary }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E2E8F0" strokeWidth={strokeWidth} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-black text-slate-800">{percentage}%</span>
      </div>
    </div>
  );
};

// ==================== MILESTONE VISUAL MAP ====================
const MilestoneVisualMap = ({ milestones = [] }) => {
  if (!milestones.length) {
    milestones = [
      { name: "Getting Started", status: "completed", tasks: 5, completedTasks: 5 },
      { name: "Core Concepts", status: "in-progress", tasks: 8, completedTasks: 3 },
      { name: "Advanced Topics", status: "pending", tasks: 10, completedTasks: 0 },
      { name: "Final Project", status: "pending", tasks: 6, completedTasks: 0 }
    ];
  }

  // Calculate tasks for each milestone
  const processedMilestones = milestones.map(m => ({
    ...m,
    tasks: m.tasks?.length || m.tasks || 5,
    completedTasks: m.tasks?.filter?.(t => t.completed)?.length || m.completedTasks || 0
  }));

  return (
    <div className="relative py-6">
      {/* Connection Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-indigo-400 to-slate-300 rounded-full transform -translate-y-1/2" />
      
      <div className="relative flex justify-between items-center">
        {processedMilestones.map((milestone, i) => {
          const tasks = milestone.tasks || 1;
          const completed = milestone.completedTasks || 0;
          const progress = Math.round((completed / tasks) * 100);
          const isCompleted = milestone.status === "completed" || progress === 100;
          const isActive = milestone.status === "in-progress" || (progress > 0 && progress < 100);
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center relative z-10"
            >
              {/* Milestone Node */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white ${
                  isCompleted ? 'bg-gradient-to-br from-emerald-400 to-teal-500' :
                  isActive ? 'bg-gradient-to-br from-indigo-500 to-purple-500' :
                  'bg-slate-200'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-8 h-8 text-white" />
                ) : isActive ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <RefreshCw className="w-8 h-8 text-white" />
                  </motion.div>
                ) : (
                  <Flag className="w-8 h-8 text-slate-400" />
                )}
              </motion.div>
              
              {/* Label */}
              <div className="mt-3 text-center max-w-[100px]">
                <p className="text-sm font-bold text-slate-800 truncate">{milestone.name}</p>
                <p className="text-xs text-slate-500">{completed}/{tasks} tasks</p>
              </div>

              {/* Progress Ring Below */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2"
                >
                  <div className="w-10 h-10 relative">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="20" cy="20" r="16" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                      <motion.circle
                        cx="20" cy="20" r="16" fill="none"
                        stroke={COLORS.primary}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={100}
                        initial={{ strokeDashoffset: 100 }}
                        animate={{ strokeDashoffset: 100 - progress }}
                        transition={{ duration: 1 }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-600">
                      {progress}%
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ==================== STAT CARD ====================
const StatCard = ({ icon: Icon, label, value, suffix = "", trend, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-slate-500 mb-1">{label}</p>
        <p className="text-3xl font-black text-slate-800">
          <AnimatedCounter value={value} suffix={suffix} />
        </p>
        {trend && (
          <span className={`text-xs font-medium flex items-center gap-1 mt-1 ${trend > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
            <ArrowUpRight className={`w-3 h-3 ${trend < 0 ? 'rotate-180' : ''}`} />
            {Math.abs(trend)}% this week
          </span>
        )}
      </div>
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </motion.div>
);

// ==================== ENHANCED ROADMAP CARD ====================
const EnhancedRoadmapCard = ({ roadmap, index }) => {
  const navigate = useNavigate();
  const progress = roadmap.overall_progress || 0;
  const milestones = roadmap.milestones || [];
  const completedMilestones = milestones.filter(m => m.status === "completed").length;
  const totalTasks = milestones.reduce((sum, m) => sum + (m.tasks?.length || 0), 0);
  const completedTasks = milestones.reduce((sum, m) => sum + (m.tasks?.filter(t => t.completed).length || 0), 0);

  const getStatusConfig = () => {
    if (progress === 100) return { status: "Completed", color: "from-emerald-500 to-teal-500", icon: Trophy, bg: "bg-emerald-50", text: "text-emerald-700" };
    if (progress > 50) return { status: "On Track", color: "from-indigo-500 to-purple-500", icon: Rocket, bg: "bg-indigo-50", text: "text-indigo-700" };
    if (progress > 0) return { status: "In Progress", color: "from-amber-500 to-orange-500", icon: Play, bg: "bg-amber-50", text: "text-amber-700" };
    return { status: "Not Started", color: "from-slate-400 to-slate-500", icon: BookOpen, bg: "bg-slate-50", text: "text-slate-600" };
  };

  const config = getStatusConfig();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/roadmap/${roadmap.id}`)}
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden border border-slate-100 group"
    >
      {/* Progress Header Bar */}
      <div className={`h-2 bg-gradient-to-r ${config.color}`}>
        <motion.div
          className="h-full bg-white/40"
          initial={{ width: "100%" }}
          animate={{ width: `${100 - progress}%` }}
          style={{ marginLeft: "auto" }}
        />
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center`}>
                <config.icon className="w-5 h-5 text-white" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${config.bg} ${config.text}`}>
                {config.status}
              </span>
            </div>
            <h3 className="font-bold text-slate-900 text-lg line-clamp-2">{roadmap.title}</h3>
          </div>

          {/* Streak Badge */}
          {roadmap.current_streak > 0 && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full shadow-lg"
            >
              <Flame className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">{roadmap.current_streak}</span>
            </motion.div>
          )}
        </div>

        {/* Progress Section with Circular Ring */}
        <div className="flex items-center gap-6 mb-4">
          <CircularProgressRing percentage={progress} size={80} strokeWidth={8} />
          
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <Layers className="w-4 h-4" /> Milestones
              </span>
              <span className="font-bold text-slate-800">{completedMilestones}/{milestones.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Tasks
              </span>
              <span className="font-bold text-slate-800">{completedTasks}/{totalTasks}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <Clock className="w-4 h-4" /> Duration
              </span>
              <span className="font-bold text-slate-800">{roadmap.duration_days || 30} days</span>
            </div>
          </div>
        </div>

        {/* Mini Milestone Progress */}
        <div className="flex gap-1 mb-4">
          {milestones.slice(0, 6).map((m, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`flex-1 h-2 rounded-full ${
                m.status === 'completed' ? 'bg-emerald-400' :
                m.status === 'in-progress' ? 'bg-indigo-400' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className={`px-3 py-1 text-xs font-medium rounded-lg ${
            roadmap.difficulty === "beginner" ? "bg-emerald-100 text-emerald-700" :
            roadmap.difficulty === "intermediate" ? "bg-amber-100 text-amber-700" :
            "bg-rose-100 text-rose-700"
          }`}>
            {roadmap.difficulty || "intermediate"}
          </span>

          <motion.div
            className="flex items-center gap-2 text-indigo-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View Details <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== STREAK VISUALIZATION ====================
const StreakVisualization = ({ currentStreak = 0, longestStreak = 0 }) => {
  const streakLevel = 
    currentStreak >= 30 ? "legendary" :
    currentStreak >= 14 ? "epic" :
    currentStreak >= 7 ? "rare" :
    currentStreak >= 3 ? "common" : "starter";

  const levelConfig = {
    legendary: { color: "from-amber-400 to-orange-600", Icon: Crown, title: "LEGENDARY", next: "Max Level!" },
    epic: { color: "from-violet-500 to-purple-600", Icon: Gem, title: "EPIC", next: "30 days for Legendary" },
    rare: { color: "from-blue-500 to-cyan-500", Icon: Zap, title: "RARE", next: "14 days for Epic" },
    common: { color: "from-emerald-400 to-teal-500", Icon: Star, title: "COMMON", next: "7 days for Rare" },
    starter: { color: "from-slate-400 to-slate-500", Icon: Flame, title: "STARTER", next: "3 days for Common" }
  };

  const config = levelConfig[streakLevel];

  // Generate last 7 days activity
  const weekActivity = [...Array(7)].map((_, i) => ({
    day: ['S', 'M', 'T', 'W', 'T', 'F', 'S'][i],
    active: i < currentStreak % 7 || currentStreak >= 7
  }));

  return (
    <GlassCard gradient className="p-6 text-white h-full">
      <FloatingParticles />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm uppercase tracking-wider opacity-80">Current Streak</p>
            <div className="flex items-baseline gap-2">
              <motion.span
                className="text-5xl font-black"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {currentStreak}
              </motion.span>
              <span className="text-xl opacity-80">days</span>
            </div>
          </div>
          <motion.div
            className="text-5xl"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
          >
            <config.Icon className="w-12 h-12" />
          </motion.div>
        </div>

        {/* Level Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold">{config.title}</span>
            <span className="opacity-80">{config.next}</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((currentStreak / 30) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Week Activity */}
        <div className="flex justify-between gap-2">
          {weekActivity.map((day, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 text-center"
            >
              <div className={`w-full aspect-square rounded-xl mb-1 flex items-center justify-center ${
                day.active ? 'bg-white/30' : 'bg-white/10'
              }`}>
                {day.active && <Flame className="w-4 h-4" />}
              </div>
              <span className="text-xs opacity-80">{day.day}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <Trophy className="w-5 h-5 mx-auto mb-1 opacity-80" />
            <p className="text-xl font-bold">{longestStreak}</p>
            <p className="text-xs opacity-80">Best Streak</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <Target className="w-5 h-5 mx-auto mb-1 opacity-80" />
            <p className="text-xl font-bold">{30 - (currentStreak % 30)}</p>
            <p className="text-xs opacity-80">Days to Next</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

// ==================== ANALYTICS CHARTS ====================
const AnalyticsSection = ({ roadmaps }) => {
  // Generate chart data from roadmaps
  const weeklyProgress = useMemo(() => [
    { week: 'Week 1', progress: 15, tasks: 8 },
    { week: 'Week 2', progress: 32, tasks: 12 },
    { week: 'Week 3', progress: 48, tasks: 15 },
    { week: 'Week 4', progress: 65, tasks: 20 },
  ], []);

  const taskDistribution = useMemo(() => {
    const completed = roadmaps.reduce((sum, r) => sum + (r.milestones?.reduce((s, m) => s + (m.tasks?.filter(t => t.completed).length || 0), 0) || 0), 0);
    const total = roadmaps.reduce((sum, r) => sum + (r.milestones?.reduce((s, m) => s + (m.tasks?.length || 0), 0) || 0), 0);
    return [
      { name: 'Completed', value: completed || 5, color: '#22C55E' },
      { name: 'In Progress', value: Math.floor((total || 10) * 0.2), color: '#FBBF24' },
      { name: 'Pending', value: (total || 10) - (completed || 5) - Math.floor((total || 10) * 0.2), color: '#E2E8F0' }
    ];
  }, [roadmaps]);

  const skillRadar = useMemo(() => [
    { skill: 'Problem Solving', value: 75 },
    { skill: 'Critical Thinking', value: 60 },
    { skill: 'Technical Skills', value: 80 },
    { skill: 'Time Management', value: 65 },
    { skill: 'Communication', value: 70 },
    { skill: 'Creativity', value: 55 },
  ], []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Progress Trend */}
      <GlassCard className="p-6 lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-500" />
            Learning Progress Trend
          </h3>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={weeklyProgress}>
            <defs>
              <linearGradient id="progressGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="week" tick={{ fill: '#64748B', fontSize: 12 }} />
            <YAxis tick={{ fill: '#64748B', fontSize: 12 }} domain={[0, 100]} />
            <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
            <Area type="monotone" dataKey="progress" stroke="#6366F1" strokeWidth={3} fill="url(#progressGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Task Distribution */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
          <PieChartIcon className="w-5 h-5 text-indigo-500" />
          Task Status
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={taskDistribution}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={70}
              paddingAngle={5}
              dataKey="value"
            >
              {taskDistribution.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-2">
          {taskDistribution.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-slate-600">{item.name}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Skill Radar */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-indigo-500" />
          Skills Developed
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart data={skillRadar}>
            <PolarGrid stroke="#E2E8F0" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: '#64748B', fontSize: 10 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#64748B', fontSize: 10 }} />
            <Radar name="Skills" dataKey="value" stroke="#6366F1" fill="#6366F1" fillOpacity={0.4} />
          </RadarChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* XP Progress */}
      <GlassCard className="p-6 lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            Experience & Level
          </h3>
        </div>
        <XPProgressSection roadmaps={roadmaps} />
      </GlassCard>
    </div>
  );
};

// ==================== XP PROGRESS SECTION ====================
const XPProgressSection = ({ roadmaps }) => {
  const totalTasks = roadmaps.reduce((sum, r) => {
    return sum + (r.milestones?.reduce((mSum, m) => mSum + (m.tasks?.filter(t => t.completed).length || 0), 0) || 0);
  }, 0);
  const totalXP = totalTasks * 50 + roadmaps.filter(r => r.overall_progress === 100).length * 500;
  const level = Math.floor(totalXP / 500) + 1;
  const currentLevelXP = totalXP % 500;
  const progress = (currentLevelXP / 500) * 100;

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm opacity-80">Total Experience</p>
            <p className="text-3xl font-black">{totalXP} XP</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm opacity-80">Current Level</p>
          <p className="text-4xl font-black">{level}</p>
        </div>
      </div>

      <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      
      <div className="flex justify-between mt-2 text-sm">
        <span className="opacity-80">{currentLevelXP} / 500 XP</span>
        <span className="font-bold">{500 - currentLevelXP} XP to Level {level + 1}</span>
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
const AcademicCopilot = () => {
  const [open, setOpen] = useState(false);
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeView, setActiveView] = useState("grid"); // grid | analytics
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) setCurrentUser(userData);
    } catch (e) {}
    loadRoadmaps();
  }, []);

  const loadRoadmaps = async () => {
    try {
      setLoading(true);
      const data = await fetchUserRoadmaps();
      setRoadmaps(data || []);
    } catch (error) {
      setRoadmaps([]);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = (roadmap) => {
    setRoadmaps(prev => [roadmap, ...prev]);
    setOpen(false);
  };

  // Stats calculations
  const totalTasks = roadmaps.reduce((sum, r) => sum + (r.milestones?.reduce((s, m) => s + (m.tasks?.length || 0), 0) || 0), 0);
  const completedTasks = roadmaps.reduce((sum, r) => sum + (r.milestones?.reduce((s, m) => s + (m.tasks?.filter(t => t.completed).length || 0), 0) || 0), 0);
  const bestStreak = Math.max(...roadmaps.map(r => r.current_streak || 0), 0);
  const longestStreak = Math.max(...roadmaps.map(r => r.longest_streak || 0), 0);
  const totalXP = completedTasks * 50 + roadmaps.filter(r => r.overall_progress === 100).length * 500;
  const level = Math.floor(totalXP / 500) + 1;

  const filteredRoadmaps = roadmaps.filter(r => {
    if (activeFilter === "all") return true;
    if (activeFilter === "active") return r.status === "active" && r.overall_progress < 100;
    if (activeFilter === "completed") return r.overall_progress === 100;
    return true;
  });

  const filters = [
    { id: "all", label: "All Roadmaps", icon: Layout, count: roadmaps.length },
    { id: "active", label: "In Progress", icon: Play, count: roadmaps.filter(r => r.status === "active" && r.overall_progress < 100).length },
    { id: "completed", label: "Completed", icon: Trophy, count: roadmaps.filter(r => r.overall_progress === 100).length },
  ];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full mx-auto mb-4"
          />
          <p className="text-slate-600 font-medium">Loading your learning journey...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl font-black text-slate-900">Academic Copilot</h1>
              </div>
              <p className="text-slate-500">
                AI-powered learning roadmaps to achieve your goals
                {currentUser && (
                  <span className="ml-2 text-indigo-600 font-medium">
                    • Welcome, {currentUser.username || currentUser.name || currentUser.user_id}!
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveView("grid")}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${activeView === "grid" ? "bg-white shadow text-indigo-600" : "text-slate-600"}`}
                >
                  <Layout className="w-4 h-4" /> Roadmaps
                </button>
                <button
                  onClick={() => setActiveView("analytics")}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${activeView === "analytics" ? "bg-white shadow text-indigo-600" : "text-slate-600"}`}
                >
                  <BarChart3 className="w-4 h-4" /> Analytics
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Create Roadmap
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats Dashboard */}
        {roadmaps.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Stats Cards */}
              <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard icon={BookOpen} label="Total Roadmaps" value={roadmaps.length} color="from-indigo-500 to-purple-500" delay={0} />
                <StatCard icon={CheckCircle} label="Tasks Completed" value={completedTasks} trend={12} color="from-emerald-500 to-teal-500" delay={0.1} />
                <StatCard icon={Flame} label="Current Streak" value={bestStreak} suffix=" days" color="from-orange-500 to-amber-500" delay={0.2} />
                <StatCard icon={Zap} label="Level" value={level} color="from-violet-500 to-purple-500" delay={0.3} />
              </div>

              {/* Streak Card */}
              <div className="hidden lg:block">
                <StreakVisualization currentStreak={bestStreak} longestStreak={longestStreak} />
              </div>
            </div>

            {/* Milestone Visual Map */}
            {roadmaps[0]?.milestones && (
              <GlassCard className="p-6 mt-6">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                  <Map className="w-5 h-5 text-indigo-500" />
                  Current Roadmap Progress
                </h3>
                <MilestoneVisualMap milestones={roadmaps[0].milestones} />
              </GlassCard>
            )}
          </motion.div>
        )}

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeView === "analytics" && roadmaps.length > 0 ? (
            <motion.div key="analytics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AnalyticsSection roadmaps={roadmaps} />
            </motion.div>
          ) : (
            <motion.div key="roadmaps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Filter Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {filters.map(filter => (
                  <motion.button
                    key={filter.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-5 py-3 rounded-xl font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                      activeFilter === filter.id
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "bg-white text-slate-600 hover:bg-slate-50 shadow border border-slate-100"
                    }`}
                  >
                    <filter.icon className="w-4 h-4" />
                    {filter.label}
                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                      activeFilter === filter.id ? "bg-white/20" : "bg-slate-100"
                    }`}>
                      {filter.count}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Roadmaps Grid */}
              {filteredRoadmaps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRoadmaps.map((rm, idx) => (
                    <EnhancedRoadmapCard key={rm.id || idx} roadmap={rm} index={idx} />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 px-4"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                  >
                    <Rocket className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {activeFilter === "all" ? "Start Your Learning Journey!" : `No ${activeFilter} roadmaps yet`}
                  </h3>
                  <p className="text-slate-500 mb-6 max-w-md mx-auto">
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
                      <Sparkles className="w-5 h-5 inline mr-2" />
                      Create Your First Roadmap
                    </motion.button>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {open && <CopilotChat onGenerate={handleGenerate} onClose={() => setOpen(false)} />}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center text-white z-50"
      >
        <Plus className="w-8 h-8" />
      </motion.button>
    </div>
  );
};

export default AcademicCopilot;
