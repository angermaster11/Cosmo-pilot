import { motion } from "framer-motion";
import { Crown, Gem, Zap, Star, Flame, Trophy, Calendar, Check, Clock } from "lucide-react";

const StreakCard = ({ currentStreak = 0, longestStreak = 0, lastActivityDate }) => {
  const streakLevel = 
    currentStreak >= 30 ? "legendary" :
    currentStreak >= 14 ? "epic" :
    currentStreak >= 7 ? "rare" :
    currentStreak >= 3 ? "common" : "starter";

  const levelConfig = {
    legendary: { color: "from-amber-400 to-orange-600", icon: <Crown className="w-12 h-12" />, title: "LEGENDARY" },
    epic: { color: "from-purple-500 to-pink-600", icon: <Gem className="w-12 h-12" />, title: "EPIC" },
    rare: { color: "from-blue-500 to-cyan-500", icon: <Zap className="w-12 h-12" />, title: "RARE" },
    common: { color: "from-green-400 to-emerald-500", icon: <Star className="w-12 h-12" />, title: "COMMON" },
    starter: { color: "from-gray-400 to-gray-500", icon: <Flame className="w-12 h-12" />, title: "STARTER" }
  };

  const config = levelConfig[streakLevel];
  
  const today = new Date().toISOString().split('T')[0];
  const isActiveToday = lastActivityDate === today;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${config.color} p-6 text-white shadow-xl`}
    >
      {/* Animated fire particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60"
            animate={{
              y: [100, -20],
              x: [Math.random() * 100, Math.random() * 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-wider opacity-80">Current Streak</p>
            <div className="flex items-baseline gap-2">
              <motion.span 
                className="text-5xl font-black"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                {currentStreak}
              </motion.span>
              <span className="text-xl">days</span>
            </div>
          </div>
          <motion.div 
            className="text-6xl"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
          >
            {config.icon}
          </motion.div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 bg-white/20 rounded-full h-2">
            <motion.div 
              className="bg-white rounded-full h-2"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((currentStreak / 30) * 100, 100)}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs font-medium">{config.title}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-xs opacity-80 flex items-center gap-1"><Trophy className="w-3 h-3" /> Best Streak</p>
            <p className="text-xl font-bold">{longestStreak} days</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-xs opacity-80 flex items-center gap-1"><Calendar className="w-3 h-3" /> Today</p>
            <p className="text-xl font-bold flex items-center gap-1">
              {isActiveToday ? <><Check className="w-4 h-4" /> Active</> : <><Clock className="w-4 h-4" /> Pending</>}
            </p>
          </div>
        </div>

        {/* Weekly streak indicators */}
        <div className="mt-4 flex justify-between">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div key={i} className="text-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  i < Math.min(currentStreak % 7 || 7, 7) 
                    ? "bg-white text-orange-600" 
                    : "bg-white/20"
                }`}
              >
                {day}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StreakCard;
