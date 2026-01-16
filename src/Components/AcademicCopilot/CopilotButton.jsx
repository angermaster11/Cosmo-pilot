import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const CopilotButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-xl"
    >
      <FaRobot size={22} />
    </motion.button>
  );
};

export default CopilotButton;
