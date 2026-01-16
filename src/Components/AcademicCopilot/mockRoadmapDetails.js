const mockRoadmapDetails = {
  dsa: {
    id: "dsa",
    title: "DSA Roadmap",
    duration: "Jan 2026 – Mar 2026",

    stats: {
      completedTasks: 14,
      pendingTasks: 29,
      progress: 32,
    },

    performance: [5, 12, 18, 25, 32],

    milestones: [
      {
        id: 1,
        name: "Arrays",
        duration: "10 Days",
        tasks: [
          { id: 1, title: "Basic Arrays", completed: true },
          { id: 2, title: "Prefix Sum", completed: true },
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
  },

  ml: {
    id: "ml",
    title: "Machine Learning Roadmap",
    duration: "Feb 2026 – Apr 2026",

    stats: {
      completedTasks: 6,
      pendingTasks: 18,
      progress: 25,
    },

    performance: [3, 8, 15, 20, 25],

    milestones: [
      {
        id: 1,
        name: "ML Foundations",
        duration: "3 Weeks",
        tasks: [
          { id: 1, title: "Linear Regression", completed: true },
          { id: 2, title: "Gradient Descent", completed: false },
        ],
      },
    ],
  },
};

export default mockRoadmapDetails;
