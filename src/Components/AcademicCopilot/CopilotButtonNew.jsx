import { motion } from "framer-motion";
import { Bot, Sparkles, Wand2 } from "lucide-react";

const CopilotButton = ({ onClick, isOpen = false }) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Ring */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
      />
      
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
      
      {/* Button Body */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white p-4 rounded-full shadow-2xl border border-white/20 overflow-hidden">
        {/* Animated background shimmer */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />
        
        {/* Icon */}
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {isOpen ? (
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
            >
              <Wand2 className="w-6 h-6" />
            </motion.div>
          ) : (
            <Bot className="w-6 h-6" />
          )}
        </motion.div>

        {/* Sparkles */}
        <motion.div
          animate={{ 
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="absolute -top-1 -right-1"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </motion.div>
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.8 }}
        whileHover={{ opacity: 1, x: 0, scale: 1 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl pointer-events-none"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          {isOpen ? "Close Copilot" : "Open AI Copilot"}
        </span>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" />
      </motion.div>
    </motion.button>
  );
};

export default CopilotButton;
