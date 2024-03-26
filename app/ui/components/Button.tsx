import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ text = "", animate = false }) {
  const animationProps = animate
    ? {
        initial: { x: -200, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: {
          delay: 1,
          duration: 1,
          ease: "easeInOut",
        },
      }
    : {};

  return (
    <motion.div
      className="text-white py-2 px-6 rounded-md w-fit h-fit bg-main-purple duration-200 cursor-pointer border-2 border-transparent hover:border-main-purple hover:bg-transparent hover:px-8 whitespace-nowrap"
      {...animationProps}
    >
      <Link key={"#"} href={"#"}>
        {text}
      </Link>
    </motion.div>
  );
}
