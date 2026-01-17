import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { 
  Trophy, Rocket, BookOpen, ClipboardList, Flame, Calendar,
  Target, CheckCircle2, Clock, ArrowRight, Sparkles, Star,
  TrendingUp, Zap
} from "lucide-react";

// Circular Progress Ring Component
const CircularProgress = ({ progress, size = 80, strokeWidth = 6, color = "#6366F1" }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-black text-slate-800">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

// Milestone Progress Dots
const MilestoneProgress = ({ milestones }) => {
  const completed = milestones.filter(m => m.status === "completed").length;
  const total = milestones.length;
  
  return (
    <div className="flex items-center gap-1.5">
      {milestones.slice(0, 6).map((m, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`w-3 h-3 rounded-full ${
            m.status === "completed" 
              ? "bg-gradient-to-r from-emerald-400 to-teal-500" 
              : m.status === "in_progress"
              ? "bg-gradient-to-r from-indigo-400 to-purple-500"
              : "bg-slate-200"
          }`}
        />
      ))}
      {milestones.length > 6 && (
        <span className="text-xs text-slate-400 font-medium">+{milestones.length - 6}</span>
      )}
    </div>
  );
};

const RoadmapCard = ({ roadmap, index = 0 }) => {
  const navigate = useNavigate();

  const progress = roadmap.overall_progress || 0;
  const streak = roadmap.current_streak || 0;
  const durationDays = roadmap.duration_days || 30;

  const getStatusConfig = () => {
    if (progress === 100) {
      return {
        status: "Completed",
        color: "from-emerald-400 to-teal-500",
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-700",
        borderColor: "border-emerald-200",
        ringColor: "#10B981",
        Icon: Trophy
      };
    }
    if (progress > 50) {
      return {
        status: "On Track",
        color: "from-indigo-500 to-purple-600",
        bgColor: "bg-indigo-50",
        textColor: "text-indigo-700",
        borderColor: "border-indigo-200",
        ringColor: "#6366F1",
        Icon: Rocket
      };
    }
    if (progress > 0) {
      return {
        status: "In Progress",
        color: "from-amber-400 to-orange-500",
        bgColor: "bg-amber-50",
        textColor: "text-amber-700",
        borderColor: "border-amber-200",
        ringColor: "#F59E0B",
        Icon: BookOpen
      };
    }
    return {
      status: "Not Started",
      color: "from-slate-400 to-slate-500",
      bgColor: "bg-slate-50",
      textColor: "text-slate-600",
      borderColor: "border-slate-200",
      ringColor: "#64748B",
      Icon: ClipboardList
    };
  };

  const statusConfig = getStatusConfig();
  const milestones = roadmap.milestones || [];
  const completedMilestones = milestones.filter((m) => m.status === "completed").length;

  const difficultyConfig = {
    beginner: { bg: "bg-emerald-100", text: "text-emerald-700", icon: Star },
    intermediate: { bg: "bg-amber-100", text: "text-amber-700", icon: TrendingUp },
    advanced: { bg: "bg-rose-100", text: "text-rose-700", icon: Zap }
  };
  const difficulty = roadmap.difficulty || "intermediate";
  const DiffIcon = difficultyConfig[difficulty]?.icon || Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => navigate(`/roadmap/${roadmap.id}`)}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden border-2 ${statusConfig.borderColor} group`}
    >
      {/* Animated Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${statusConfig.color} relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
      </div>

      <div className="p-5">
        {/* Header Row */}
        <div className="flex items-start gap-4 mb-4">
          {/* Circular Progress */}
          <CircularProgress 
            progress={progress} 
            size={70} 
            strokeWidth={5} 
            color={statusConfig.ringColor} 
          />
          
          <div className="flex-1 min-w-0">
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                whileHover={{ rotate: 10 }}
                className={`p-1.5 rounded-lg bg-gradient-to-br ${statusConfig.color} shadow-md`}
              >
                <statusConfig.Icon className="w-4 h-4 text-white" />
              </motion.div>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusConfig.bgColor} ${statusConfig.textColor}`}>
                {statusConfig.status}
              </span>
              
              {/* Streak Badge */}
              {streak > 0 && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                  className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-orange-100 to-red-100 rounded-full"
                >
                  <Flame className="w-3 h-3 text-orange-500" />
                  <span className="text-xs font-bold text-orange-600">{streak}</span>
                </motion.div>
              )}
            </div>
            
            {/* Title */}
            <h3 className="font-bold text-slate-800 text-lg line-clamp-2 group-hover:text-indigo-600 transition-colors">
              {roadmap.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {roadmap.description || "No description available"}
        </p>

        {/* Milestones Progress Visual */}
        <div className="mb-4 p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Target className="w-3 h-3" /> Milestones
            </span>
            <span className="text-xs font-bold text-slate-700">
              {completedMilestones}/{milestones.length}
            </span>
          </div>
          <MilestoneProgress milestones={milestones} />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-2.5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100"
          >
            <Calendar className="w-4 h-4 text-indigo-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-slate-800">{durationDays}</p>
            <p className="text-xs text-slate-500">Days</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-2.5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100"
          >
            <Target className="w-4 h-4 text-amber-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-slate-800">{milestones.length}</p>
            <p className="text-xs text-slate-500">Milestones</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-2.5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-slate-800">{completedMilestones}</p>
            <p className="text-xs text-slate-500">Done</p>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 text-xs rounded-lg flex items-center gap-1 ${
              difficultyConfig[difficulty]?.bg || "bg-slate-100"
            } ${difficultyConfig[difficulty]?.text || "text-slate-700"}`}>
              <DiffIcon className="w-3 h-3" />
              {difficulty}
            </span>
          </div>
          
          <div className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {roadmap.created_at && (
              <>{formatDistanceToNow(new Date(roadmap.created_at), { addSuffix: true })}</>
            )}
          </div>
        </div>

        {/* Hover CTA */}
        <motion.div
          className="mt-4 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0 }}
        >
          <Sparkles className="w-4 h-4" />
          <span>View Roadmap</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Completion Celebration */}
      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 right-4"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            <Trophy className="w-8 h-8 text-amber-400 drop-shadow-lg" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default RoadmapCard;
