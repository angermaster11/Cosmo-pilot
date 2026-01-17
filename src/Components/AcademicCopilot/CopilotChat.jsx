import { useState } from "react";
import { generateRoadmap } from "../../api/api";
import { Bot, PartyPopper, Settings, Sparkles } from "lucide-react";

const CopilotChat = ({ onGenerate, onClose }) => {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState("");
  const [difficulty, setDifficulty] = useState("intermediate");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        alert("Roadmap generated successfully!");
      }
    } catch (err) {
      console.error("Error generating roadmap:", err);
      setError("Failed to generate roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-2xl p-4 z-50">
      <h3 className="font-semibold mb-3 text-lg flex items-center gap-2"><Bot className="w-5 h-5 text-indigo-600" /> Academic Copilot</h3>

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="E.g., Create a roadmap for GATE CS preparation, DSA mastery in 3 months, Web development..."
        className="w-full border rounded-lg p-3 text-sm mb-3 resize-none focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        rows={3}
        disabled={loading}
      />

      <div className="mb-3">
        <label className="text-xs text-gray-600 block mb-1">
          Duration (optional)
        </label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="e.g., 3 months, 60 days"
          className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          disabled={loading}
        />
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-600 block mb-1">Difficulty</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          disabled={loading}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {error && (
        <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-gray-700 px-3 py-2"
          disabled={loading}
        >
          Close
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading || !query.trim()}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? (
            <>
              <Settings className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate Roadmap
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CopilotChat;
