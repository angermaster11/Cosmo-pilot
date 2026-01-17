import { useNavigate } from "react-router-dom";
import { Flame } from "lucide-react";

const RoadmapCard = ({ roadmap }) => {
  const navigate = useNavigate();

  // Format duration
  const duration = roadmap.duration_days 
    ? `${roadmap.duration_days} days`
    : roadmap.duration || "N/A";
  
  const progress = Math.round(roadmap.overall_progress || roadmap.progress || 0);

  return (
    <div
      onClick={() => navigate(`/roadmap/${roadmap.id}`)}
      className="cursor-pointer bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
    >
      <h2 className="text-lg font-semibold">{roadmap.title}</h2>
      
      {roadmap.difficulty && (
        <span className="inline-block px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded mt-1">
          {roadmap.difficulty}
        </span>
      )}

      <p className="text-sm text-gray-500 mt-1">
        {duration}
      </p>

      <div className="mt-4">
        <p className="text-xs text-gray-400 mb-1">Progress</p>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-indigo-600 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs mt-1">{progress}% Completed</p>
        
        {roadmap.current_streak > 0 && (
          <p className="text-xs mt-1 text-orange-600 flex items-center gap-1">
            <Flame className="w-3 h-3" /> {roadmap.current_streak} day streak
          </p>
        )}
      </div>
    </div>
  );
};

export default RoadmapCard;
