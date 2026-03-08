import { motion } from "framer-motion";

export default function SkillBadge({ label }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.02 }}
      className="badge rounded-pill skill-badge px-3 py-2"
    >
      {label}
    </motion.span>
  );
}