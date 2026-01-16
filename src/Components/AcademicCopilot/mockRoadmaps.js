const mockRoadmaps = (query) => {
  return {
    id: "dsa",              // ✅ REQUIRED
    title: "DSA Roadmap",
    duration: "3 Months",
    progress: 0,            // ✅ REQUIRED

    milestones: [
      {
        id: 1,
        name: "Arrays",
        duration: "10 Days",
        tasks: [
          { id: 1, title: "Basic Arrays", completed: false },
          { id: 2, title: "Prefix Sum", completed: false },
          { id: 3, title: "Two Pointer", completed: false },
        ],
      },
      {
        id: 2,
        name: "Searching & Sorting",
        duration: "7 Days",
        tasks: [
          { id: 1, title: "Binary Search", completed: false },
          { id: 2, title: "Merge Sort", completed: false },
        ],
      },
    ],
  };
};

export default mockRoadmaps;
