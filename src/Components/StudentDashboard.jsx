import React, { useEffect, useState, useMemo } from 'react';
import { supabase } from '../Config/Config';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LogOut, User, Calendar, Bell, Award, BookOpen, Home, Clock, MapPin, 
  Mail, Phone, Map, TrendingUp, GraduationCap, Brain, Bot,
  CheckCircle, AlertCircle, Sparkles, Activity, Zap, Star, 
  ChevronLeft, ChevronRight, Play, ArrowUpRight, Flame, Target
} from 'lucide-react';
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, XAxis, 
  YAxis, Tooltip, Legend, LineChart, Line, Treemap, CartesianGrid
} from 'recharts';
import AcademicCopilot from "../Components/AcademicCopilot/AcademicCopilotNew";
import { AssignmentList } from "../Components/Assignments";
import RiskPrediction from "./RiskPrediction/RiskPrediction";

// ==================== CUSTOM COMPONENTS ====================

// Animated Counter
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

// Wave SVG Background
const WaveBackground = ({ color = "#64748B" }) => (
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <motion.path
      initial={{ d: "M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z" }}
      animate={{ d: ["M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z", "M0,64 C480,-20 960,150 1440,64 L1440,120 L0,120 Z", "M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      fill={color}
      fillOpacity="0.1"
    />
  </svg>
);

// Floating Orbs
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-white/20 to-slate-300/10"
        style={{
          width: 100 + i * 50,
          height: 100 + i * 50,
          left: `${20 * i}%`,
          top: `${15 * i}%`,
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

// Glassmorphism Card
const GlassCard = ({ children, className = "", gradient = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(71, 85, 105, 0.2)" }}
    className={`relative overflow-hidden rounded-3xl ${gradient ? 'bg-gradient-to-br from-[#475569] to-[#334155]' : 'bg-white/90 backdrop-blur-xl'} border border-slate-200/50 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

// Schedule Timeline Card
const ScheduleTimeline = ({ schedule, loading }) => {
  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-2 border-[#5E6572] border-t-transparent rounded-full animate-spin" /></div>;
  if (!schedule.length) return <p className="text-[#6B7280] text-center py-8">No classes scheduled</p>;

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-500 via-slate-300 to-transparent" />
      
      <div className="space-y-4">
        {schedule.map((cls, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-16"
          >
            {/* Timeline Dot */}
            <motion.div 
              className={`absolute left-4 w-5 h-5 rounded-full border-4 border-white shadow-lg ${i === 0 ? 'bg-emerald-500' : 'bg-slate-500'}`}
              animate={i === 0 ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className={`p-4 rounded-2xl ${i === 0 ? 'bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border-2 border-emerald-200/60' : 'bg-slate-50/50'} hover:shadow-lg transition-all`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {i === 0 && (
                      <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Play className="w-3 h-3" /> LIVE
                      </span>
                    )}
                    <h4 className="font-bold text-[#2D3139]">{cls.subjects?.subject_name}</h4>
                  </div>
                  <p className="text-sm text-[#6B7280]">{cls.subjects?.subject_code}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#5E6572]">{cls.time}</p>
                  <p className="text-sm text-[#A9B4C2] flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3" /> {cls.room_no}, {cls.block}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Attendance Heatmap
const AttendanceHeatmap = ({ data }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weeks = 4;
  
  // Generate mock heatmap data from attendance
  const heatmapData = useMemo(() => {
    const grid = [];
    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < days.length; d++) {
        const present = Math.random() > 0.2;
        grid.push({ week: w, day: d, value: present ? 1 : 0 });
      }
    }
    return grid;
  }, [data]);

  return (
    <div className="p-4">
      <div className="flex gap-1 mb-2">
        {days.map(day => (
          <div key={day} className="flex-1 text-center text-xs text-[#6B7280] font-medium">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-1">
        {heatmapData.map((cell, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.02 }}
            whileHover={{ scale: 1.2 }}
            className={`aspect-square rounded-md cursor-pointer transition-all ${
              cell.value ? 'bg-emerald-400/80 hover:bg-emerald-500/90' : 'bg-rose-300/60 hover:bg-rose-400/70'
            }`}
            title={cell.value ? 'Present' : 'Absent'}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-emerald-400" /> Present</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-rose-300" /> Absent</div>
      </div>
    </div>
  );
};

// Custom Treemap Content
const CustomTreemapContent = ({ x, y, width, height, name, percentage, fill }) => {
  if (width < 50 || height < 50) return null;
  return (
    <g>
      <motion.rect
        initial={{ width: 0, height: 0 }}
        animate={{ width, height }}
        x={x}
        y={y}
        fill={fill}
        rx={8}
        stroke="#fff"
        strokeWidth={2}
      />
      <text x={x + width / 2} y={y + height / 2 - 10} textAnchor="middle" fill="#fff" fontSize={12} fontWeight="bold">
        {name}
      </text>
      <text x={x + width / 2} y={y + height / 2 + 10} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="bold">
        {percentage}%
      </text>
    </g>
  );
};

// ==================== MAIN COMPONENT ====================

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const [attendanceData, setAttendanceData] = useState({});
  const [loadingAttendance, setLoadingAttendance] = useState(true);
  const [todaySchedule, setTodaySchedule] = useState([]);
  const [loadingSchedule, setLoadingSchedule] = useState(true);
  const [notices, setNotices] = useState([]);
  const [loadingNotices, setLoadingNotices] = useState(true);
  const [resultData, setResultData] = useState([]);
  const [loadingResults, setLoadingResults] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'timetable', label: 'Time Table', icon: Clock },
    { id: 'notices', label: 'Notices', icon: Bell },
    { id: 'results', label: 'Results', icon: Award },
    { id: 'assignments', label: 'Assignments', icon: BookOpen },
    { id: 'risk-analysis', label: 'AI Risk Analysis', icon: Brain },
    { id: 'academic-copilot', label: 'Academic Co-Pilot', icon: Bot },
  ];

  // Chart colors - Balanced, soft professional palette
  const COLORS = ['#64748B', '#78909C', '#8896A4', '#94A3B8', '#A1AEB8', '#B0BEC5'];
  const GRADIENT_COLORS = ['#22C55E', '#3B82F6', '#8B5CF6', '#F59E0B', '#EC4899', '#06B6D4'];

  // Fetch data
  useEffect(() => {
    const fetchNotices = async () => {
      setLoadingNotices(true);
      const { data } = await supabase.from('notice').select('*').order('date', { ascending: false }).limit(5);
      setNotices(data?.map(n => ({ ...n, staff: { name: 'Staff' } })) || []);
      setLoadingNotices(false);
    };
    fetchNotices();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
    else window.location.href = "/login";
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchAttendance = async () => {
      setLoadingAttendance(true);
      const { data: attendance } = await supabase.from('attendance').select('*').eq('student_id', user.user_id);
      const { data: subjects } = await supabase.from('subjects').select('*');

      const grouped = {};
      attendance?.forEach(({ subject_id, status }) => {
        if (!grouped[subject_id]) grouped[subject_id] = { present: 0, total: 0 };
        grouped[subject_id].total++;
        if (status === 'present' || status === 'P') grouped[subject_id].present++;
      });

      const result = {};
      Object.entries(grouped).forEach(([id, info]) => {
        const subj = subjects?.find(s => s.subject_id == id);
        result[id] = {
          subject_name: subj?.subject_name || `Subject ${id}`,
          subject_code: subj?.subject_code || '',
          ...info,
          percentage: ((info.present / info.total) * 100).toFixed(1),
          status: (info.present / info.total) >= 0.75 ? 'good' : 'warning'
        };
      });
      setAttendanceData(result);
      setLoadingAttendance(false);
    };

    const fetchSchedule = async () => {
      setLoadingSchedule(true);
      const { data } = await supabase.from('classes_schedule').select('*');
      const { data: subjects } = await supabase.from('subjects').select('*');
      const enriched = data?.map(s => ({ ...s, subjects: subjects?.find(sub => sub.subject_id === s.subject_id) || {} })) || [];
      setTodaySchedule(enriched.sort((a, b) => (a.time || '').localeCompare(b.time || '')));
      setLoadingSchedule(false);
    };

    const fetchResults = async () => {
      setLoadingResults(true);
      const { data: results } = await supabase.from('results').select('*').eq('user_id', user.user_id);
      const { data: subjects } = await supabase.from('subjects').select('*');
      
      const withSubjects = results?.map(r => {
        const subj = subjects?.find(s => s.subject_id === r.subject_id);
        const total = (r.mid_term_score || 0) + (r.end_term_score || 0);
        const perc = r.end_term_score ? ((total / 100) * 100).toFixed(1) : null;
        let grade = '-', gradeColor = 'bg-gray-100 text-gray-600';
        if (perc) {
          const p = parseFloat(perc);
          if (p >= 90) { grade = 'A+'; gradeColor = 'bg-green-100 text-green-700'; }
          else if (p >= 80) { grade = 'A'; gradeColor = 'bg-green-100 text-green-600'; }
          else if (p >= 70) { grade = 'B'; gradeColor = 'bg-blue-100 text-blue-600'; }
          else if (p >= 60) { grade = 'C'; gradeColor = 'bg-yellow-100 text-yellow-700'; }
          else if (p >= 50) { grade = 'D'; gradeColor = 'bg-orange-100 text-orange-600'; }
          else { grade = 'F'; gradeColor = 'bg-red-100 text-red-600'; }
        }
        return { ...r, subject_name: subj?.subject_name || '', subject_code: subj?.subject_code || '', percentage: perc, grade, gradeColor };
      }) || [];
      setResultData(withSubjects);
      setLoadingResults(false);
    };

    fetchAttendance();
    fetchSchedule();
    fetchResults();
  }, [user]);

  // Computed chart data
  const attendanceChartData = useMemo(() => 
    Object.values(attendanceData).map(d => ({
      name: d.subject_code || d.subject_name?.substring(0, 8),
      percentage: parseFloat(d.percentage),
      present: d.present,
      absent: d.total - d.present,
      total: d.total
    })), [attendanceData]);

  const attendanceTreemapData = useMemo(() =>
    Object.values(attendanceData).map((d, i) => ({
      name: d.subject_code || d.subject_name?.substring(0, 10),
      size: d.total,
      percentage: parseFloat(d.percentage),
      fill: GRADIENT_COLORS[i % GRADIENT_COLORS.length]
    })), [attendanceData]);

  const overallAttendance = useMemo(() => {
    const vals = Object.values(attendanceData);
    if (!vals.length) return 0;
    return (vals.reduce((sum, d) => sum + parseFloat(d.percentage), 0) / vals.length).toFixed(1);
  }, [attendanceData]);

  const radarData = useMemo(() =>
    Object.values(attendanceData).map(d => ({
      subject: d.subject_code || d.subject_name?.substring(0, 6),
      attendance: parseFloat(d.percentage),
      fullMark: 100
    })), [attendanceData]);

  const weeklyTrend = useMemo(() => {
    const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    return weeks.map((w, i) => ({
      week: w,
      attendance: 70 + Math.random() * 25,
      classes: 20 + Math.floor(Math.random() * 10)
    }));
  }, []);

  const pieData = useMemo(() => {
    const total = Object.values(attendanceData).reduce((sum, d) => sum + d.total, 0);
    const present = Object.values(attendanceData).reduce((sum, d) => sum + d.present, 0);
    return [
      { name: 'Present', value: present, color: '#22C55E' },
      { name: 'Absent', value: total - present, color: '#F87171' }
    ];
  }, [attendanceData]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#EEF1EF]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#5E6572] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#EEF1EF] via-white to-[#EEF1EF]">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarCollapsed ? 80 : 280 }}
        className="bg-gradient-to-b from-[#475569] to-[#334155] text-white flex flex-col shadow-2xl relative z-20"
      >
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">COSMO</h2>
                  <p className="text-xs text-white/60">Student Portal</p>
                </div>
              </motion.div>
            ) : (
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <GraduationCap className="w-6 h-6" />
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-[#5E6572] rounded-full flex items-center justify-center shadow-lg hover:bg-[#4a505b] transition-colors z-30"
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id ? 'bg-white/20 shadow-lg' : 'hover:bg-white/10'
              }`}
            >
              <item.icon className={`w-5 h-5 flex-shrink-0 ${activeTab === item.id ? 'text-white' : 'text-white/70'}`} />
              {!sidebarCollapsed && (
                <span className={`text-sm font-medium ${activeTab === item.id ? 'text-white' : 'text-white/70'}`}>
                  {item.label}
                </span>
              )}
            </motion.button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10">
          <motion.button
            onClick={() => { localStorage.removeItem('user'); window.location.href = '/login'; }}
            whileHover={{ x: 4 }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-300 transition-all"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && <span className="text-sm font-medium">Logout</span>}
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg p-4 mb-6 flex justify-between items-center border border-[#A9B4C2]/20"
        >
          <div>
            <h1 className="text-2xl font-bold text-[#2D3139]">
              {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
            </h1>
            <p className="text-sm text-[#6B7280]">
              {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} • {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} className="relative cursor-pointer" onClick={() => setActiveTab('notices')}>
              <Bell className="w-6 h-6 text-[#5E6572]" />
              {notices.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                >
                  {notices.length}
                </motion.span>
              )}
            </motion.div>
            <div className="flex items-center gap-3 pl-4 border-l border-[#A9B4C2]/30">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#5E6572] to-[#3D434D] flex items-center justify-center text-white font-bold shadow-lg">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div className="hidden md:block">
                <p className="font-semibold text-[#2D3139]">{user.name}</p>
                <p className="text-xs text-[#6B7280]">{user.branch} • Sem {user.semester}</p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <AnimatePresence mode="wait">
          {/* ==================== DASHBOARD TAB ==================== */}
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Welcome Banner */}
              <GlassCard gradient className="p-6 relative overflow-hidden">
                <FloatingOrbs />
                <WaveBackground />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between text-white">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                      <span className="text-white/80">Welcome back!</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{user.name}</h2>
                    <p className="text-white/70 max-w-md">Track your academic progress, view your schedule, and stay updated with the latest notices.</p>
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                      <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white/20 backdrop-blur rounded-xl flex items-center gap-2">
                        <Flame className="w-4 h-4 text-orange-300" />
                        <span className="font-medium">12 Day Streak</span>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white/20 backdrop-blur rounded-xl flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-300" />
                        <span className="font-medium">Top 10%</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-0 grid grid-cols-2 gap-3">
                    {[
                      { label: "Attendance", value: `${overallAttendance}%`, icon: CheckCircle, color: "bg-green-500/20" },
                      { label: "Classes Today", value: todaySchedule.length, icon: Calendar, color: "bg-blue-500/20" },
                      { label: "Semester", value: user.semester, icon: GraduationCap, color: "bg-purple-500/20" },
                      { label: "Section", value: user.section, icon: Target, color: "bg-orange-500/20" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className={`${stat.color} backdrop-blur-sm rounded-2xl p-4 text-center`}
                      >
                        <stat.icon className="w-5 h-5 mx-auto mb-1 opacity-80" />
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs opacity-70">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Quick Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: "Overall Attendance", value: overallAttendance, suffix: "%", icon: Activity, color: "from-emerald-500/90 to-teal-500/90", trend: "+2.5%" },
                  { label: "Classes Attended", value: Object.values(attendanceData).reduce((s, d) => s + d.present, 0), icon: CheckCircle, color: "from-blue-500/90 to-sky-500/90", trend: "+5" },
                  { label: "Upcoming Classes", value: todaySchedule.length, icon: Clock, color: "from-violet-500/90 to-purple-500/90", trend: "Today" },
                  { label: "New Notices", value: notices.length, icon: Bell, color: "from-amber-500/90 to-orange-500/90", trend: "New" },
                ].map((stat, i) => (
                  <GlassCard key={stat.label} className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-[#6B7280] mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-[#2D3139]">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix || ""} />
                        </p>
                        <span className="text-xs text-green-500 font-medium flex items-center gap-1 mt-1">
                          <ArrowUpRight className="w-3 h-3" /> {stat.trend}
                        </span>
                      </div>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Attendance Trend */}
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold text-[#2D3139] mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#5E6572]" />
                    Weekly Attendance Trend
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={weeklyTrend}>
                      <defs>
                        <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#5E6572" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#5E6572" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="week" tick={{ fill: '#6B7280', fontSize: 12 }} />
                      <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} domain={[0, 100]} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                      <Area type="monotone" dataKey="attendance" stroke="#5E6572" strokeWidth={3} fill="url(#attendanceGradient)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </GlassCard>

                {/* Subject-wise Bar Chart */}
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold text-[#2D3139] mb-4 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-[#5E6572]" />
                    Subject-wise Attendance
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={attendanceChartData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis type="number" domain={[0, 100]} tick={{ fill: '#6B7280', fontSize: 12 }} />
                      <YAxis dataKey="name" type="category" tick={{ fill: '#6B7280', fontSize: 11 }} width={60} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                      <Bar dataKey="percentage" radius={[0, 8, 8, 0]}>
                        {attendanceChartData.map((entry, index) => (
                          <Cell key={index} fill={entry.percentage >= 75 ? '#22C55E' : '#FBBF24'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </GlassCard>
              </div>

              {/* Schedule & Radar */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Today's Schedule */}
                <GlassCard className="p-6 lg:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#2D3139] flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#5E6572]" />
                      Today's Schedule
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveTab('timetable')}
                      className="text-sm text-[#5E6572] hover:text-[#3D434D] font-medium flex items-center gap-1"
                    >
                      View All <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <ScheduleTimeline schedule={todaySchedule.slice(0, 5)} loading={loadingSchedule} />
                </GlassCard>

                {/* Radar Chart */}
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold text-[#2D3139] mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#5E6572]" />
                    Performance Radar
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#E5E7EB" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#6B7280', fontSize: 10 }} />
                      <Radar name="Attendance" dataKey="attendance" stroke="#5E6572" fill="#5E6572" fillOpacity={0.4} strokeWidth={2} />
                    </RadarChart>
                  </ResponsiveContainer>
                </GlassCard>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Attendance Heatmap */}
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold text-[#2D3139] mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#5E6572]" />
                    Attendance Heatmap
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4">Last 4 weeks</p>
                  <AttendanceHeatmap data={attendanceData} />
                </GlassCard>

                {/* Pie Chart */}
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold text-[#2D3139] mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#5E6572]" />
                    Present vs Absent
                  </h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-6">
                    {pieData.map(d => (
                      <div key={d.name} className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                        <span className="text-[#6B7280]">{d.name}: {d.value}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Notices */}
                <GlassCard className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#2D3139] flex items-center gap-2">
                      <Bell className="w-5 h-5 text-[#5E6572]" />
                      Latest Notices
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveTab('notices')}
                      className="text-sm text-[#5E6572] hover:text-[#3D434D] font-medium"
                    >
                      View All →
                    </motion.button>
                  </div>
                  {loadingNotices ? (
                    <div className="flex justify-center py-8"><div className="w-6 h-6 border-2 border-[#5E6572] border-t-transparent rounded-full animate-spin" /></div>
                  ) : (
                    <div className="space-y-3">
                      {notices.slice(0, 3).map((notice, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-3 bg-[#EEF1EF]/50 rounded-xl hover:bg-[#EEF1EF] transition-colors cursor-pointer"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#5E6572] mt-2" />
                            <div>
                              <p className="font-medium text-[#2D3139] text-sm">{notice.topic}</p>
                              <p className="text-xs text-[#6B7280]">{notice.date}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </div>
            </motion.div>
          )}

          {/* ==================== ATTENDANCE TAB ==================== */}
          {activeTab === 'attendance' && (
            <motion.div
              key="attendance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: "Overall Attendance", value: `${overallAttendance}%`, color: parseFloat(overallAttendance) >= 75 ? "from-emerald-500/90 to-teal-500/90" : "from-amber-500/90 to-yellow-500/90" },
                  { label: "Total Classes", value: Object.values(attendanceData).reduce((s, d) => s + d.total, 0), color: "from-blue-500/90 to-sky-500/90" },
                  { label: "Classes Attended", value: Object.values(attendanceData).reduce((s, d) => s + d.present, 0), color: "from-violet-500/90 to-purple-500/90" },
                  { label: "Classes Missed", value: Object.values(attendanceData).reduce((s, d) => s + (d.total - d.present), 0), color: "from-rose-500/90 to-pink-500/90" },
                ].map((stat, i) => (
                  <GlassCard key={stat.label} className="p-5 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10`} />
                    <div className="relative z-10">
                      <p className="text-sm text-[#6B7280]">{stat.label}</p>
                      <p className="text-3xl font-bold text-[#2D3139] mt-1">{stat.value}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Treemap */}
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold text-[#2D3139] mb-4">📊 Attendance Treemap</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <Treemap
                      data={attendanceTreemapData}
                      dataKey="size"
                      aspectRatio={4 / 3}
                      stroke="#fff"
                      content={<CustomTreemapContent />}
                    />
                  </ResponsiveContainer>
                </GlassCard>

                {/* Bar Chart with Gradient */}
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold text-[#2D3139] mb-4">📈 Subject Performance</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={attendanceChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 11 }} />
                      <YAxis domain={[0, 100]} tick={{ fill: '#6B7280', fontSize: 12 }} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                      <Bar dataKey="percentage" radius={[8, 8, 0, 0]}>
                        {attendanceChartData.map((entry, index) => (
                          <Cell key={index} fill={GRADIENT_COLORS[index % GRADIENT_COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </GlassCard>
              </div>

              {/* Subject Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(attendanceData).map(([id, data], i) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <GlassCard className="p-5 relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 ${data.status === 'good' ? 'bg-emerald-100/70' : 'bg-amber-100/70'}`} />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-[#2D3139]">{data.subject_name}</h4>
                            <p className="text-sm text-[#6B7280]">{data.subject_code}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${data.status === 'good' ? 'bg-emerald-100/80 text-emerald-700' : 'bg-amber-100/80 text-amber-700'}`}>
                            {data.status === 'good' ? '✓ Good' : '⚠ Low'}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-20">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle cx="40" cy="40" r="36" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                              <motion.circle
                                cx="40" cy="40" r="36" fill="none"
                                stroke={data.status === 'good' ? '#22C55E' : '#FBBF24'}
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${parseFloat(data.percentage) * 2.26} 226`}
                                initial={{ strokeDasharray: "0 226" }}
                                animate={{ strokeDasharray: `${parseFloat(data.percentage) * 2.26} 226` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-bold text-[#2D3139]">{data.percentage}%</span>
                            </div>
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-[#6B7280]">Present</span>
                              <span className="font-medium text-green-600">{data.present}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#6B7280]">Absent</span>
                              <span className="font-medium text-red-500">{data.total - data.present}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#6B7280]">Total</span>
                              <span className="font-medium text-[#2D3139]">{data.total}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ==================== TIMETABLE TAB ==================== */}
          {activeTab === 'timetable' && (
            <motion.div
              key="timetable"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-[#2D3139] mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#5E6572]" />
                  Class Schedule
                </h3>
                <ScheduleTimeline schedule={todaySchedule} loading={loadingSchedule} />
              </GlassCard>

              {/* Schedule Grid View */}
              {!loadingSchedule && todaySchedule.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {todaySchedule.map((cls, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <GlassCard className="p-5 hover:shadow-2xl transition-shadow">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg bg-gradient-to-br ${GRADIENT_COLORS[i % GRADIENT_COLORS.length] === '#10B981' ? 'from-green-400 to-emerald-500' : `from-[${GRADIENT_COLORS[i % GRADIENT_COLORS.length]}] to-[${GRADIENT_COLORS[(i + 1) % GRADIENT_COLORS.length]}]`}`} style={{ background: `linear-gradient(135deg, ${GRADIENT_COLORS[i % GRADIENT_COLORS.length]}, ${GRADIENT_COLORS[(i + 1) % GRADIENT_COLORS.length]})` }}>
                            {cls.subjects?.subject_code?.substring(0, 2) || 'CL'}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#2D3139]">{cls.subjects?.subject_name}</h4>
                            <p className="text-sm text-[#6B7280]">{cls.subjects?.subject_code}</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[#A9B4C2]/20 flex items-center justify-between text-sm">
                          <span className="flex items-center gap-1 text-[#5E6572] font-medium">
                            <Clock className="w-4 h-4" /> {cls.time}
                          </span>
                          <span className="flex items-center gap-1 text-[#6B7280]">
                            <MapPin className="w-4 h-4" /> {cls.room_no}, {cls.block}
                          </span>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ==================== PROFILE TAB ==================== */}
          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-center gap-6 mb-8 pb-6 border-b border-[#A9B4C2]/20">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#5E6572] to-[#3D434D] flex items-center justify-center text-white text-5xl font-bold shadow-2xl"
                  >
                    {user.name?.charAt(0).toUpperCase()}
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#2D3139]">{user.name}</h2>
                    <p className="text-[#6B7280]">Student ID: {user.user_id}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 bg-[#5E6572]/10 rounded-full text-sm text-[#5E6572] font-medium">{user.branch}</span>
                      <span className="px-3 py-1 bg-[#A9B4C2]/20 rounded-full text-sm text-[#5E6572] font-medium">Semester {user.semester}</span>
                      <span className="px-3 py-1 bg-green-100 rounded-full text-sm text-green-700 font-medium">Section {user.section}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-[#2D3139] flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[#5E6572]" /> Academic Information
                    </h3>
                    {[
                      { label: "Branch", value: user.branch },
                      { label: "Semester", value: user.semester },
                      { label: "Section", value: user.section },
                      { label: "Year", value: user.year },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between p-4 bg-[#EEF1EF]/50 rounded-xl">
                        <span className="text-[#6B7280]">{item.label}</span>
                        <span className="font-semibold text-[#2D3139]">{item.value || 'N/A'}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-[#2D3139] flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#5E6572]" /> Contact Information
                    </h3>
                    {[
                      { label: "Email", value: user.email, icon: Mail },
                      { label: "Phone", value: user.phone, icon: Phone },
                      { label: "Address", value: user.address, icon: Map },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 p-4 bg-[#EEF1EF]/50 rounded-xl">
                        <item.icon className="w-5 h-5 text-[#A9B4C2]" />
                        <div>
                          <p className="text-xs text-[#6B7280]">{item.label}</p>
                          <p className="font-medium text-[#2D3139]">{item.value || 'Not provided'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* ==================== NOTICES TAB ==================== */}
          {activeTab === 'notices' && (
            <motion.div
              key="notices"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassCard className="p-6">
                {loadingNotices ? (
                  <div className="flex justify-center py-12"><div className="w-10 h-10 border-2 border-[#5E6572] border-t-transparent rounded-full animate-spin" /></div>
                ) : notices.length === 0 ? (
                  <p className="text-[#6B7280] text-center py-12">No notices available</p>
                ) : (
                  <div className="space-y-4">
                    {notices.map((notice, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="p-5 bg-gradient-to-r from-[#EEF1EF]/80 to-white rounded-2xl border border-[#A9B4C2]/20 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5E6572] to-[#A9B4C2] flex items-center justify-center flex-shrink-0">
                            <Bell className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#2D3139] text-lg">{notice.topic}</h4>
                            <p className="text-[#6B7280] mt-1">{notice.description || 'No description provided.'}</p>
                            <div className="flex items-center gap-4 mt-3 text-sm text-[#A9B4C2]">
                              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {notice.date}</span>
                              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {notice.time}</span>
                              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {notice.staff?.name}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </GlassCard>
            </motion.div>
          )}

          {/* ==================== RESULTS TAB ==================== */}
          {activeTab === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassCard className="p-6">
                {loadingResults ? (
                  <div className="flex justify-center py-12"><div className="w-10 h-10 border-2 border-[#5E6572] border-t-transparent rounded-full animate-spin" /></div>
                ) : resultData.length === 0 ? (
                  <p className="text-[#6B7280] text-center py-12">No results available</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b-2 border-[#A9B4C2]/20">
                          <th className="px-6 py-4 text-left text-sm font-bold text-[#5E6572]">Subject</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-[#5E6572]">Mid Term</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-[#5E6572]">End Term</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-[#5E6572]">Percentage</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-[#5E6572]">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultData.map((res, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="border-b border-[#A9B4C2]/10 hover:bg-[#EEF1EF]/50 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <p className="font-semibold text-[#2D3139]">{res.subject_name}</p>
                              <p className="text-sm text-[#6B7280]">{res.subject_code}</p>
                            </td>
                            <td className="px-6 py-4 text-[#2D3139] font-medium">{res.mid_term_score ?? 'N/A'}</td>
                            <td className="px-6 py-4 text-[#2D3139] font-medium">{res.end_term_score ?? 'N/A'}</td>
                            <td className="px-6 py-4 text-[#2D3139] font-bold">{res.percentage ? `${res.percentage}%` : 'N/A'}</td>
                            <td className="px-6 py-4">
                              <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${res.gradeColor}`}>
                                {res.grade}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          )}

          {/* ==================== OTHER TABS ==================== */}
          {activeTab === 'assignments' && (
            <motion.div key="assignments" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AssignmentList />
            </motion.div>
          )}

          {activeTab === 'risk-analysis' && (
            <motion.div key="risk" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <GlassCard className="p-6 min-h-[600px]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#2D3139] flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    AI Risk Analysis
                  </h3>
                  <p className="text-[#64748B] mt-2">Advanced prediction model analyzing your academic performance patterns</p>
                </div>
                <RiskPrediction studentId={user?.user_id} />
              </GlassCard>
            </motion.div>
          )}

          {activeTab === 'academic-copilot' && (
            <motion.div key="copilot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <GlassCard className="p-6 min-h-[600px]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#2D3139] flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    Academic Co-Pilot
                  </h3>
                  <p className="text-[#64748B] mt-2">Your AI-powered academic assistant for personalized guidance</p>
                </div>
                <AcademicCopilot />
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default StudentDashboard;
