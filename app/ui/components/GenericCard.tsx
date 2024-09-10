import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const GenericCard: React.FC<{
  title: string;
  text: string;
  cols: string;
  delay?: number;
}> = ({ cols, delay = 0.2, title, text }) => {
  return (
    <motion.div
      className={`${cols} shadow-sm hover:shadow-lg *:text-black border-2 rounded-lg p-10`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      <h3 className="text-2xl text-white font-semibold mb-4">{title}</h3>
      <p className="text-lg text-white">{text}</p>
    </motion.div>
  );
};

export default GenericCard;
