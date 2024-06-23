import { motion } from "framer-motion";

export default function Topic({
  title = "",
  description = "",
  initialX = 200,
}) {
  return (
    <motion.div
      initial={{ opacity: 0.3, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        ease: "easeInOut",
      }}
      className="*:text-black flex flex-col gap-5 relative"
    >
      <h3 className="font-semibold text-5xl">{title}</h3>
      <p className="text-2xl">{description}</p>
    </motion.div>
  );
}
