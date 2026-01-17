import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, X, Sparkles, Clock, Gauge, Send, Loader2, 
  AlertCircle, Rocket, BookOpen, GraduationCap, Code,
  Brain, Target, ArrowRight, CheckCircle
} from "lucide-react";
import { generateRoadmap } from "../../api/api";

const suggestedPrompts = [
  { icon: Code, text: "DSA mastery in 3 months", color: "from-blue-500 to-cyan-500" },
  { icon: GraduationCap, text: "GATE CS preparation", color: "from-purple-500 to-pink-500" },
  { icon: BookOpen, text: "Full-stack web development", color: "from-green-500 to-teal-500" },
  { icon: Brain, text: "Machine Learning basics", color: "from-orange-500 to-red-500" },
];

const CopilotChat = ({ onGenerate, onClose }) => {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState("");
  const [difficulty, setDifficulty] = useState("intermediate");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);

  const handleSubmit = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await generateRoadmap(query, duration, difficulty);

      if (response.success) {
        onGenerate(response.roadmap);
        setQuery("");
        setDuration("");
        onClose();
      }
    } catch (err) {
      console.error("Error generating roadmap:", err);
      setError("Failed to generate roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const difficultyConfig = {
    beginner: { color: "text-emerald-600 bg-emerald-100 border-emerald-300", label: "Beginner", desc: "Start from basics" },
    intermediate: { color: "text-amber-600 bg-amber-100 border-amber-300", label: "Intermediate", desc: "Some experience" },
    advanced: { color: "text-rose-600 bg-rose-100 border-rose-300", label: "Advanced", desc: "Expert level" }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-24 right-6 w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-slate-200"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-4 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-white/20 rounded-full blur-xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{ left: `${i * 25}%`, top: `${i * 15}%` }}
            />
          ))}
        </div>

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 bg-white/20 rounded-xl backdrop-blur-sm"
            >
              <Bot className="w-6 h-6" />
            </motion.div>
            <div>
              <h3 className="font-bold text-lg">Academic Copilot</h3>
              <p className="text-xs text-white/80">AI-powered learning paths</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div className="p-5">
        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-5">
          {[1, 2, 3].map((s) => (
            <motion.div
              key={s}
              className={`flex items-center gap-2 ${s <= step ? 'opacity-100' : 'opacity-40'}`}
            >
              <motion.div
                animate={s === step ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  s < step ? 'bg-emerald-500 text-white' :
                  s === step ? 'bg-indigo-600 text-white' :
                  'bg-slate-200 text-slate-500'
                }`}
              >
                {s < step ? <CheckCircle className="w-4 h-4" /> : s}
              </motion.div>
              {s < 3 && <div className={`w-8 h-0.5 ${s < step ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Topic */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                What do you want to learn?
              </label>
              <div className="relative mb-4">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="E.g., Machine learning fundamentals, React.js development..."
                  className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                  rows={3}
                  disabled={loading}
                />
                <Sparkles className="absolute right-3 top-3 w-5 h-5 text-slate-300" />
              </div>

              <p className="text-xs text-slate-500 mb-3">Quick suggestions:</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {suggestedPrompts.map((prompt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setQuery(prompt.text)}
                    className={`flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r ${prompt.color} text-white text-xs font-medium shadow-md hover:shadow-lg transition-all`}
                  >
                    <prompt.icon className="w-4 h-4" />
                    {prompt.text}
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => query.trim() && setStep(2)}
                disabled={!query.trim()}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}

          {/* Step 2: Duration & Difficulty */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-5">
                <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Duration
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["1 month", "3 months", "6 months"].map((d) => (
                    <motion.button
                      key={d}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setDuration(d)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        duration === d 
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {d}
                    </motion.button>
                  ))}
                </div>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Or enter custom duration..."
                  className="w-full border-2 border-slate-200 rounded-xl p-3 text-sm mt-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="mb-5">
                <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Gauge className="w-4 h-4" /> Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(difficultyConfig).map(([key, config]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setDifficulty(key)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        difficulty === key 
                          ? config.color 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <p className="font-medium text-sm">{config.label}</p>
                      <p className="text-xs opacity-70">{config.desc}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review & Generate */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-4 mb-4 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Review Your Roadmap</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500">Topic</p>
                      <p className="text-sm font-medium text-slate-800">{query}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500">Duration</p>
                      <p className="text-sm font-medium text-slate-800">{duration || "Flexible"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500">Difficulty</p>
                      <p className="text-sm font-medium text-slate-800 capitalize">{difficulty}</p>
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700 text-sm"
                >
                  <AlertCircle className="w-5 h-5" />
                  {error}
                </motion.div>
              )}

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(2)}
                  disabled={loading}
                  className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium disabled:opacity-50"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white rounded-xl font-medium disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-5 h-5" />
                      Generate Roadmap
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border-4 border-indigo-200 border-t-indigo-600"
            />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-4 text-sm font-medium text-slate-600"
            >
              Creating your personalized roadmap...
            </motion.p>
            <p className="text-xs text-slate-400 mt-1">This may take a few moments</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CopilotChat;
