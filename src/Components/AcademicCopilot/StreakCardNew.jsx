import { motion } from "framer-motion";
import { Flame, Trophy, Calendar, CheckCircle, Clock, Sparkles, Crown, Diamond, Zap, Star, Target } from "lucide-react";

const StreakCard = ({ currentStreak = 0, longestStreak = 0, lastActivityDate }) => {
  const streakLevel = 
    currentStreak >= 30 ? "legendary" :
    currentStreak >= 14 ? "epic" :
    currentStreak >= 7 ? "rare" :
    currentStreak >= 3 ? "common" : "starter";

  const levelConfig = {
    legendary: { 
      color: "from-amber-400 via-orange-500 to-red-500", 
      bg: "from-amber-900/30 to-red-900/30",
      Icon: Crown, 
      title: "LEGENDARY",
      glow: "shadow-amber-500/50"
    },
    epic: { 
      color: "from-purple-400 via-pink-500 to-rose-500", 
      bg: "from-purple-900/30 to-rose-900/30",
      Icon: Diamond, 
      title: "EPIC",
      glow: "shadow-purple-500/50"
    },
    rare: { 
      color: "from-blue-400 via-cyan-500 to-teal-500", 
      bg: "from-blue-900/30 to-teal-900/30",
      Icon: Zap, 
      title: "RARE",
      glow: "shadow-blue-500/50"
    },
    common: { 
      color: "from-green-400 via-emerald-500 to-teal-500", 
      bg: "from-green-900/30 to-teal-900/30",
      Icon: Star, 
      title: "COMMON",
      glow: "shadow-green-500/50"
    },
    starter: { 
      color: "from-slate-400 via-slate-500 to-slate-600", 
      bg: "from-slate-900/30 to-slate-800/30",
      Icon: Flame, 
      title: "STARTER",
      glow: "shadow-slate-500/50"
    }
  };

  const config = levelConfig[streakLevel];
  
  const today = new Date().toISOString().split('T')[0];
  const isActiveToday = lastActivityDate === today;

  // Calculate next milestone
  const milestones = [3, 7, 14, 30, 60, 100];
  const nextMilestone = milestones.find(m => m > currentStreak) || 100;
  const milestoneProgress = (currentStreak / nextMilestone) * 100;

  // Generate week days for calendar
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const activeWeekDays = Array(7).fill(false).map((_, i) => i < Math.min(currentStreak, 7));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${config.color} p-6 text-white shadow-2xl ${config.glow}`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.bg}`} />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              y: [-10, -100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
            style={{ 
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`
            }}
          />
        ))}
      </div>

      {/* Fire Particles */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -80],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.8, 0],
              scale: [1, 0.5]
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
            style={{ left: `${10 + i * 12}%`, bottom: 0 }}
          >
            <Flame className="w-6 h-6 text-yellow-300" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="p-2 bg-white/20 rounded-xl backdrop-blur-sm"
              >
                <Flame className="w-6 h-6" />
              </motion.div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                {config.title} STREAK
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <motion.span 
                className="text-6xl font-black"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                {currentStreak}
              </motion.span>
              <span className="text-2xl font-medium opacity-80">days</span>
            </div>
          </div>
          
          <motion.div 
            animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
          >
            <config.Icon className="w-10 h-10" />
          </motion.div>
        </div>

        {/* Milestone Progress */}
        <div className="mb-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium flex items-center gap-2">
              <Target className="w-4 h-4" /> Next Milestone
            </span>
            <span className="text-sm font-bold">
              {currentStreak} / {nextMilestone} days
            </span>
          </div>
          <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${milestoneProgress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Milestone markers */}
            {milestones.map((m, i) => (
              <div
                key={m}
                className={`absolute top-1/2 transform -translate-y-1/2 w-1 h-4 rounded-full ${
                  currentStreak >= m ? 'bg-yellow-300' : 'bg-white/30'
                }`}
                style={{ left: `${(m / nextMilestone) * 100}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs opacity-70">{nextMilestone - currentStreak} days to go</span>
            <span className="text-xs font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> +{nextMilestone * 10} XP reward
            </span>
          </div>
        </div>

        {/* Week Activity Visual */}
        <div className="mb-6">
          <span className="text-xs font-medium opacity-80 mb-2 block">This Week's Activity</span>
          <div className="flex gap-2">
            {weekDays.map((day, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`flex-1 aspect-square rounded-lg flex flex-col items-center justify-center ${
                  activeWeekDays[i] 
                    ? 'bg-gradient-to-br from-yellow-300 to-orange-400 shadow-lg' 
                    : 'bg-white/10'
                }`}
              >
                <span className={`text-xs font-medium ${activeWeekDays[i] ? 'text-orange-900' : 'opacity-60'}`}>
                  {day}
                </span>
                {activeWeekDays[i] && <Flame className="w-3 h-3 text-orange-800 mt-0.5" />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-yellow-300" />
              <p className="text-xs opacity-80">Best Streak</p>
            </div>
            <p className="text-2xl font-bold">{longestStreak} days</p>
            {currentStreak >= longestStreak && currentStreak > 0 && (
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-xs text-yellow-300 font-medium flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> Personal Best!
              </motion.span>
            )}
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-cyan-300" />
              <p className="text-xs opacity-80">Today's Status</p>
            </div>
            <div className="flex items-center gap-2">
              {isActiveToday ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-lg font-bold text-green-300">Active</span>
                </>
              ) : (
                <>
                  <Clock className="w-5 h-5 text-amber-300" />
                  <span className="text-lg font-bold text-amber-300">Pending</span>
                </>
              )}
            </div>
            {!isActiveToday && (
              <span className="text-xs text-amber-300 opacity-80">Complete a task to keep your streak!</span>
            )}
          </motion.div>
        </div>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <p className="text-sm opacity-80">
            {currentStreak === 0 && "Start your journey! Complete your first task today."}
            {currentStreak > 0 && currentStreak < 7 && "Great start! Keep the momentum going!"}
            {currentStreak >= 7 && currentStreak < 14 && "Amazing consistency! You're building great habits!"}
            {currentStreak >= 14 && currentStreak < 30 && <span className="flex items-center justify-center gap-1">Incredible dedication! You're on fire! <Flame className="w-4 h-4 inline" /></span>}
            {currentStreak >= 30 && <span className="flex items-center justify-center gap-1">LEGENDARY status achieved! You're unstoppable! <Crown className="w-4 h-4 inline" /></span>}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StreakCard;
