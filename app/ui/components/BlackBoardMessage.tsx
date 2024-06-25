import { motion } from "framer-motion";

export default function BlackBoardMessage({
  message = "",
  x = 0,
  y = 0,
  size = "text-5xl",
  weight = "font-bold",
  align = "text-left",
}) {
  return (
    <motion.p
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: x - 150 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        ease: "easeInOut",
      }}
      style={{ left: `${x}px`, top: `${y}px` }}
      className={`${size} ${weight} ${align} text-white absolute hover:text-main-purple duration-100 h-20`}
    >
      {message}
    </motion.p>
  );
}
