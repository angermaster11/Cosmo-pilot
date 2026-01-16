import RoadmapCard from "./RoadmapCardNew";
import { motion } from "framer-motion";

const RoadmapBoard = ({ roadmaps }) => {
  if (!roadmaps || roadmaps.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {roadmaps.map((rm, idx) => (
        <RoadmapCard key={rm.id || idx} roadmap={rm} index={idx} />
      ))}
    </motion.div>
  );
};

export default RoadmapBoard;
