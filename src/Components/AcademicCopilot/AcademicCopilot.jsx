import React, { useState, useEffect } from "react";
import CopilotButton from "./CopilotButton";
import CopilotChat from "./CopilotChat";
import RoadmapBoard from "./RoadmapBoard";
import { fetchUserRoadmaps } from "../../api/api";

const AcademicCopilot = () => {
  const [open, setOpen] = useState(false);
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRoadmaps();
  }, []);

  const loadRoadmaps = async () => {
    try {
      setLoading(true);
      const data = await fetchUserRoadmaps();
      setRoadmaps(data);
    } catch (error) {
      console.error("Error loading roadmaps:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = (roadmap) => {
    setRoadmaps((prev) => [roadmap, ...prev]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading your roadmaps...</div>
      </div>
    );
  }

  return (
    <>
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Academic Copilot</h2>
          <p className="text-gray-600">
            AI-powered learning roadmaps to achieve your goals
          </p>
        </div>

        <RoadmapBoard roadmaps={roadmaps} />

        {roadmaps.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No roadmaps yet
            </h3>
            <p className="text-gray-500 mb-4">
              Click the bot button below to create your first learning roadmap!
            </p>
          </div>
        )}
      </div>

      {open && (
        <CopilotChat
          onGenerate={handleGenerate}
          onClose={() => setOpen(false)}
        />
      )}
      <CopilotButton onClick={() => setOpen(true)} />
    </>
  );
};

export default AcademicCopilot;
