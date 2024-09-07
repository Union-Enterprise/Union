import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BorderGradient = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className="framer-1hhkxcy hidden-1ja8gbp"
      data-framer-appear-id="1hhkxcy"
      data-framer-name="Glow"
      style={{ opacity, willChange: "auto", transform: "none" }}
    >
      <div className="framer-1k30ov7" data-framer-name="1"></div>
      <div className="framer-1mpp1vv" data-framer-name="2"></div>
      <div className="framer-10hbzmm" data-framer-name="bg"></div>
    </motion.div>
  );
};

export default BorderGradient;
