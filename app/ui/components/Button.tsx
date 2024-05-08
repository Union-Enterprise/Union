import Link from "next/link";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface ButtonProps {
  children?: ReactElement;
  animate?: Boolean;
}

export default function Button({ children, animate = false }: ButtonProps) {
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
      className="text-white h-[50px] px-6 flex items-center justify-center rounded-md w-fit bg-main-purple duration-200 cursor-pointer border-2 border-transparent hover:border-main-purple hover:bg-transparent hover:px-8 group/button
      "
      {...animationProps}
    >
      <Link key={"#"} href={"#"}>
        {children}
      </Link>
    </motion.div>
  );
}
