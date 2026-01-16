import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateRoadmap } from "../../api/api";

const CopilotChat = ({ onGenerate, onClose }) => {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState("");
  const [difficulty, setDifficulty] = useState("intermediate");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);

  const presets = [
    { label: "🎯 DSA Mastery", query: "Create a comprehensive roadmap for mastering Data Structures and Algorithms for coding interviews" },
    { label: "🌐 Web Development", query: "Full-stack web development roadmap with React, Node.js, and databases" },
    { label: "🤖 Machine Learning", query: "Machine Learning roadmap from basics to deploying ML models" },
    { label: "📱 Mobile Development", query: "React Native mobile app development from scratch" },
    { label: "☁️ Cloud Computing", query: "AWS Cloud certification preparation roadmap" },
    { label: "🔒 Cybersecurity", query: "Cybersecurity fundamentals and ethical hacking roadmap" },
  ];

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                🤖
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Academic Copilot</h3>
                <p className="text-white/80 text-sm">AI-powered learning roadmaps</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Query */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What do you want to learn? ✨
                </label>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe your learning goal..."
                  className="w-full border-2 border-gray-200 rounded-xl p-4 text-sm mb-4 resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                  rows={3}
                  disabled={loading}
                />

                {/* Quick Presets */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Quick start with a template:</p>
                  <div className="flex flex-wrap gap-2">
                    {presets.map((preset) => (
                      <motion.button
                        key={preset.label}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setQuery(preset.query)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-lg text-xs font-medium transition"
                      >
                        {preset.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => query.trim() && setStep(2)}
                  disabled={!query.trim()}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue →
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <button
                  onClick={() => setStep(1)}
                  className="text-indigo-600 text-sm mb-4 hover:underline"
                >
                  ← Back
                </button>

                <div className="bg-indigo-50 rounded-xl p-4 mb-4">
                  <p className="text-xs text-indigo-600 font-medium mb-1">Your Goal:</p>
                  <p className="text-gray-800 text-sm">{query}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ⏱️ Duration (optional)
                    </label>
                    <input
                      type="text"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="e.g., 3 months, 60 days, 8 weeks"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      📊 Difficulty Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: "beginner", label: "Beginner", icon: "🌱" },
                        { value: "intermediate", label: "Intermediate", icon: "🌿" },
                        { value: "advanced", label: "Advanced", icon: "🌳" },
                      ].map((option) => (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setDifficulty(option.value)}
                          className={`p-3 rounded-xl border-2 transition ${
                            difficulty === option.value
                              ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="text-2xl mb-1">{option.icon}</div>
                          <div className="text-xs font-medium">{option.label}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        ⚙️
                      </motion.span>
                      Generating your roadmap...
                    </>
                  ) : (
                    <>
                      ✨ Generate Roadmap
                    </>
                  )}
                </motion.button>

                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center"
                  >
                    <p className="text-sm text-gray-500">
                      Our AI is crafting a personalized roadmap just for you...
                    </p>
                    <div className="flex justify-center gap-1 mt-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-indigo-600 rounded-full"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CopilotChat;
