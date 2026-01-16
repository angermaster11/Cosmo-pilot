const PerformanceGraph = () => {
  const data = [10, 18, 22, 32, 40];

  return (
    <div className="flex items-end gap-3 h-40">
      {data.map((d, i) => (
        <div key={i} className="flex-1">
          <div
            className="bg-indigo-600 rounded-t"
            style={{ height: `${d}%` }}
          />
          <p className="text-xs text-center mt-1">W{i + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default PerformanceGraph;
