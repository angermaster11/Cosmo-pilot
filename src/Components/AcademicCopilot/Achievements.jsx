import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Target, Flame, Zap, Gem, Crown, BookOpen, Rocket, Trophy, Award,
  Star, Sunrise, Moon, Lock
} from "lucide-react";

// Icon components map
const ICONS = {
  Target: Target,
  Flame: Flame,
  Zap: Zap,
  Gem: Gem,
  Crown: Crown,
  BookOpen: BookOpen,
  Rocket: Rocket,
  Trophy: Trophy,
  Award: Award,
  Star: Star,
  Sunrise: Sunrise,
  Moon: Moon
};

// Achievement definitions
const ACHIEVEMENTS = [
  {
    id: "first_task",
    name: "First Steps",
    description: "Complete your first task",
    IconName: "Target",
    xp: 50,
    condition: (stats) => stats.tasksCompleted >= 1,
    rarity: "common"
  },
  {
    id: "streak_3",
    name: "Getting Started",
    description: "Maintain a 3-day streak",
    IconName: "Flame",
    xp: 100,
    condition: (stats) => stats.currentStreak >= 3,
    rarity: "common"
  },
  {
    id: "streak_7",
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    IconName: "Zap",
    xp: 250,
    condition: (stats) => stats.currentStreak >= 7,
    rarity: "rare"
  },
  {
    id: "streak_14",
    name: "Fortnight Fighter",
    description: "Maintain a 14-day streak",
    IconName: "Gem",
    xp: 500,
    condition: (stats) => stats.currentStreak >= 14,
    rarity: "epic"
  },
  {
    id: "streak_30",
    name: "Monthly Master",
    description: "Maintain a 30-day streak",
    IconName: "Crown",
    xp: 1000,
    condition: (stats) => stats.currentStreak >= 30,
    rarity: "legendary"
  },
  {
    id: "tasks_10",
    name: "Task Tackler",
    description: "Complete 10 tasks",
    IconName: "BookOpen",
    xp: 150,
    condition: (stats) => stats.tasksCompleted >= 10,
    rarity: "common"
  },
  {
    id: "tasks_50",
    name: "Productivity Pro",
    description: "Complete 50 tasks",
    IconName: "Rocket",
    xp: 400,
    condition: (stats) => stats.tasksCompleted >= 50,
    rarity: "rare"
  },
  {
    id: "tasks_100",
    name: "Century Champion",
    description: "Complete 100 tasks",
    IconName: "Trophy",
    xp: 800,
    condition: (stats) => stats.tasksCompleted >= 100,
    rarity: "epic"
  },
  {
    id: "milestone_complete",
    name: "Milestone Maker",
    description: "Complete a milestone",
    IconName: "Award",
    xp: 200,
    condition: (stats) => stats.milestonesCompleted >= 1,
    rarity: "rare"
  },
  {
    id: "roadmap_complete",
    name: "Journey Complete",
    description: "Complete an entire roadmap",
    IconName: "Star",
    xp: 1500,
    condition: (stats) => stats.roadmapsCompleted >= 1,
    rarity: "legendary"
  },
  {
    id: "early_bird",
    name: "Early Bird",
    description: "Complete a task before 8 AM",
    IconName: "Sunrise",
    xp: 75,
    condition: (stats) => stats.earlyTasks >= 1,
    rarity: "rare"
  },
  {
    id: "night_owl",
    name: "Night Owl",
    description: "Complete a task after 10 PM",
    IconName: "Moon",
    xp: 75,
    condition: (stats) => stats.lateTasks >= 1,
    rarity: "rare"
  }
];

// Rarity colors
const RARITY_COLORS = {
  common: "from-gray-400 to-gray-500",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-500 to-pink-500",
  legendary: "from-amber-400 to-orange-600"
};

const RARITY_BORDERS = {
  common: "border-gray-300",
  rare: "border-blue-400",
  epic: "border-purple-500",
  legendary: "border-amber-400"
};

const RARITY_GLOW = {
  common: "",
  rare: "shadow-blue-400/30",
  epic: "shadow-purple-500/30",
  legendary: "shadow-amber-400/50"
};

// Single Achievement Badge
const AchievementBadge = ({ achievement, unlocked, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick && onClick(achievement)}
      className={`
        relative cursor-pointer rounded-xl p-4 border-2 transition-all
        ${unlocked 
          ? `bg-gradient-to-br ${RARITY_COLORS[achievement.rarity]} ${RARITY_BORDERS[achievement.rarity]} shadow-lg ${RARITY_GLOW[achievement.rarity]}`
          : "bg-gray-100 border-gray-200 opacity-50"
        }
      `}
    >
      {/* Unlock animation particles */}
      {unlocked && achievement.rarity === "legendary" && (
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              animate={{
                y: [-10, -30],
                opacity: [1, 0],
                scale: [1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{ left: `${20 + i * 15}%`, bottom: "20%" }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 text-center">
        <motion.div
          className="mb-2 flex justify-center"
          animate={unlocked ? { rotate: [0, -10, 10, 0] } : {}}
          transition={{ duration: 0.5, repeat: unlocked ? Infinity : 0, repeatDelay: 3 }}
        >
          {unlocked ? (
            (() => {
              const Icon = ICONS[achievement.IconName];
              return Icon ? <Icon className="w-10 h-10 text-white" /> : null;
            })()
          ) : (
            <Lock className="w-10 h-10 text-gray-400" />
          )}
        </motion.div>
        <h4 className={`font-bold text-sm ${unlocked ? "text-white" : "text-gray-500"}`}>
          {achievement.name}
        </h4>
        <p className={`text-xs mt-1 ${unlocked ? "text-white/80" : "text-gray-400"}`}>
          {unlocked ? `+${achievement.xp} XP` : achievement.description}
        </p>
      </div>

      {/* Rarity indicator */}
      <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold uppercase
        ${unlocked ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"}`}
      >
        {achievement.rarity}
      </div>
    </motion.div>
  );
};

// Achievement Modal
const AchievementModal = ({ achievement, onClose }) => {
  if (!achievement) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.5, y: 50 }}
        className={`bg-gradient-to-br ${RARITY_COLORS[achievement.rarity]} rounded-2xl p-8 max-w-sm w-full text-center text-white shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="mb-4 flex justify-center"
          animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          {(() => {
            const Icon = ICONS[achievement.IconName];
            return Icon ? <Icon className="w-20 h-20 text-white" /> : null;
          })()}
        </motion.div>
        <h2 className="text-2xl font-black mb-2">{achievement.name}</h2>
        <p className="text-white/80 mb-4">{achievement.description}</p>
        <div className="bg-white/20 rounded-xl p-4 mb-4">
          <p className="text-3xl font-black">+{achievement.xp} XP</p>
          <p className="text-xs uppercase tracking-wider opacity-80">Reward</p>
        </div>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-white text-gray-800 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Awesome!
        </button>
      </motion.div>
    </motion.div>
  );
};

// Main Achievements Component
const Achievements = ({ stats = {} }) => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // Default stats if not provided
  const defaultStats = {
    tasksCompleted: stats.tasksCompleted || 0,
    currentStreak: stats.currentStreak || 0,
    milestonesCompleted: stats.milestonesCompleted || 0,
    roadmapsCompleted: stats.roadmapsCompleted || 0,
    earlyTasks: stats.earlyTasks || 0,
    lateTasks: stats.lateTasks || 0,
    ...stats
  };

  // Calculate unlocked achievements
  const unlockedAchievements = ACHIEVEMENTS.filter((a) => a.condition(defaultStats));
  const totalXP = unlockedAchievements.reduce((sum, a) => sum + a.xp, 0);
  const level = Math.floor(totalXP / 500) + 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80">Total Achievements</p>
            <p className="text-3xl font-black">
              {unlockedAchievements.length} / {ACHIEVEMENTS.length}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-80">Total XP Earned</p>
            <p className="text-3xl font-black">{totalXP} XP</p>
          </div>
        </div>
        
        {/* Progress to next achievement */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Level {level}</span>
            <span>Level {level + 1}</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(totalXP % 500) / 5}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Achievement Categories */}
      <div className="space-y-4">
        {/* Legendary */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-500" /> Legendary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ACHIEVEMENTS.filter((a) => a.rarity === "legendary").map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                unlocked={unlockedAchievements.includes(achievement)}
                onClick={setSelectedAchievement}
              />
            ))}
          </div>
        </div>

        {/* Epic */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Gem className="w-5 h-5 text-purple-500" /> Epic
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ACHIEVEMENTS.filter((a) => a.rarity === "epic").map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                unlocked={unlockedAchievements.includes(achievement)}
                onClick={setSelectedAchievement}
              />
            ))}
          </div>
        </div>

        {/* Rare */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-500" /> Rare
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ACHIEVEMENTS.filter((a) => a.rarity === "rare").map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                unlocked={unlockedAchievements.includes(achievement)}
                onClick={setSelectedAchievement}
              />
            ))}
          </div>
        </div>

        {/* Common */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-gray-500" /> Common
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ACHIEVEMENTS.filter((a) => a.rarity === "common").map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                unlocked={unlockedAchievements.includes(achievement)}
                onClick={setSelectedAchievement}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </motion.div>
  );
};

export default Achievements;
export { ACHIEVEMENTS, AchievementBadge };
