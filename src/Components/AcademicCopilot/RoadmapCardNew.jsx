import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { format, formatDistanceToNow } from "date-fns";

const RoadmapCard = ({ roadmap, index = 0 }) => {
  const navigate = useNavigate();

  const progress = roadmap.overall_progress || 0;
  const streak = roadmap.current_streak || 0;
  const durationDays = roadmap.duration_days || 30;

  // Determine status and colors
  const getStatusConfig = () => {
    if (progress === 100) {
      return {
        status: "Completed",
        color: "from-green-400 to-emerald-500",
        bgColor: "bg-green-50",
        textColor: "text-green-700",
        icon: "🏆"
      };
    }
    if (progress > 50) {
      return {
        status: "On Track",
        color: "from-indigo-500 to-purple-500",
        bgColor: "bg-indigo-50",
        textColor: "text-indigo-700",
        icon: "🚀"
      };
    }
    if (progress > 0) {
      return {
        status: "In Progress",
        color: "from-yellow-400 to-orange-500",
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-700",
        icon: "📚"
      };
    }
    return {
      status: "Not Started",
      color: "from-gray-400 to-gray-500",
      bgColor: "bg-gray-50",
      textColor: "text-gray-600",
      icon: "📋"
    };
  };

  const statusConfig = getStatusConfig();

  // Calculate milestones stats
  const milestones = roadmap.milestones || [];
  const completedMilestones = milestones.filter((m) => m.status === "completed").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => navigate(`/roadmap/${roadmap.id}`)}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-gray-100"
    >
      {/* Progress Header */}
      <div className={`h-2 bg-gradient-to-r ${statusConfig.color}`}>
        <motion.div
          className="h-full bg-white/30"
          initial={{ width: "100%" }}
          animate={{ width: `${100 - progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ marginLeft: "auto" }}
        />
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{statusConfig.icon}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusConfig.bgColor} ${statusConfig.textColor}`}>
                {statusConfig.status}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg line-clamp-2">
              {roadmap.title}
            </h3>
          </div>
          
          {/* Streak Badge */}
          {streak > 0 && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="flex items-center gap-1 px-3 py-1 bg-orange-100 rounded-full"
            >
              <span>🔥</span>
              <span className="text-sm font-bold text-orange-600">{streak}</span>
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {roadmap.description || "No description available"}
        </p>

        {/* Progress Section */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Progress</span>
            <span className="font-bold text-gray-700">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${statusConfig.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-gray-800">{durationDays}</p>
            <p className="text-xs text-gray-500">Days</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-gray-800">{milestones.length}</p>
            <p className="text-xs text-gray-500">Milestones</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-gray-800">{completedMilestones}</p>
            <p className="text-xs text-gray-500">Done</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 text-xs rounded-lg ${
              roadmap.difficulty === "beginner" ? "bg-green-100 text-green-700" :
              roadmap.difficulty === "intermediate" ? "bg-yellow-100 text-yellow-700" :
              "bg-red-100 text-red-700"
            }`}>
              {roadmap.difficulty || "intermediate"}
            </span>
          </div>
          
          <div className="text-xs text-gray-400">
            {roadmap.created_at && (
              <>Created {formatDistanceToNow(new Date(roadmap.created_at), { addSuffix: true })}</>
            )}
          </div>
        </div>

        {/* Hover Action */}
        <motion.div
          className="mt-4 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <span>View Details</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RoadmapCard;
