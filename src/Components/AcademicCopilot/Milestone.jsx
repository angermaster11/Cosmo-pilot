import { toggleTaskCompletion } from "../../api/api";

const Milestone = ({ milestone, onTaskToggle }) => {
  const tasks = milestone.tasks || [];
  const completedCount = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const progress = Math.round((completedCount / total) * 100);

  const handleToggle = async (taskId, currentStatus) => {
    try {
      await toggleTaskCompletion(taskId, !currentStatus);
      // Refresh the roadmap data
      if (onTaskToggle) {
        onTaskToggle();
      }
    } catch (error) {
      console.error("Error toggling task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  const status =
    progress === 100
      ? "Completed"
      : progress > 0
      ? "In Progress"
      : "Pending";

  const statusColor =
    status === "Completed"
      ? "text-green-600"
      : status === "In Progress"
      ? "text-orange-500"
      : "text-red-500";

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{milestone.name}</h3>
        <span className={`text-sm ${statusColor}`}>{status}</span>
      </div>

      <p className="text-xs text-gray-500 mb-2">
        {milestone.duration}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded mb-3">
        <div
          className="bg-indigo-600 h-2 rounded transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Tasks */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id, task.completed)}
            />
            <span
              className={
                task.completed ? "line-through text-gray-400" : ""
              }
            >
              {task.title}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Milestone;
