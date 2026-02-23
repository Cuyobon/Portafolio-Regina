import { motion } from "framer-motion"

export default function ProjectCard({ title, desc }) {
  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  )
}