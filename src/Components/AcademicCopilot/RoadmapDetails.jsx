import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchRoadmapDetails } from "../../api/api";
import Milestone from "./Milestone";
import PerformanceGraph from "./PerformanceGraph";
import { AlertCircle, Calendar, Target, Flame } from "lucide-react";

const RoadmapDetails = () => {
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRoadmapDetails();
  }, [id]);

  const loadRoadmapDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchRoadmapDetails(id);
      setRoadmap(data);
    } catch (err) {
      console.error("Error loading roadmap:", err);
      setError("Failed to load roadmap details");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading roadmap...</p>
        </div>
      </div>
    );
  }

  if (error || !roadmap) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            {error || "Roadmap not found"}
          </h2>
          <button
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Calculate stats from roadmap data
  const totalTasks = roadmap.milestones?.reduce(
    (sum, m) => sum + (m.tasks?.length || 0),
    0
  ) || 0;
  
  const completedTasks = roadmap.milestones?.reduce(
    (sum, m) => sum + (m.tasks?.filter(t => t.completed).length || 0),
    0
  ) || 0;
  
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => window.history.back()}
          className="text-indigo-600 hover:text-indigo-700 mb-4 flex items-center gap-2"
        >
          ← Back to Roadmaps
        </button>
        <h1 className="text-2xl font-bold mb-2">{roadmap.title}</h1>
        <p className="text-gray-500">{roadmap.description}</p>
        <div className="flex gap-4 mt-2">
          <span className="text-sm text-gray-600 flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {roadmap.duration_days} days
          </span>
          <span className="text-sm text-gray-600 flex items-center gap-1">
            <Target className="w-4 h-4" /> {roadmap.difficulty}
          </span>
          {roadmap.current_streak > 0 && (
            <span className="text-sm text-gray-600 flex items-center gap-1">
              <Flame className="w-4 h-4 text-orange-500" /> {roadmap.current_streak} day streak
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Stat title="Completed Tasks" value={completedTasks} />
        <Stat title="Pending Tasks" value={pendingTasks} />
        <Stat title="Overall Progress" value={`${Math.round(roadmap.overall_progress || 0)}%`} />
      </div>

      {/* Graph */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h3 className="font-semibold mb-4">Performance Graph</h3>
        <PerformanceGraph roadmapId={roadmap.id} />
      </div>

      {/* Milestones */}
      <div className="space-y-4">
        {roadmap.milestones && roadmap.milestones.length > 0 ? (
          roadmap.milestones.map((m) => (
            <Milestone 
              key={m.id} 
              milestone={m} 
              onTaskToggle={loadRoadmapDetails}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No milestones found
          </div>
        )}
      </div>
    </div>
  );
};

const Stat = ({ title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <p className="text-xs text-gray-400">{title}</p>
    <h2 className="text-xl font-semibold">{value}</h2>
  </div>
);

export default RoadmapDetails;
