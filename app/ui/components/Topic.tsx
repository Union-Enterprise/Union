import { motion } from "framer-motion";

export default function Topic() {
  return (
    <motion.div
      initial={{ opacity: 0.3, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: "easeInOut",
      }}
      className="*:text-black flex flex-col gap-5 max-w-[75%] relative"
    >
      <h3 className="font-semibold text-5xl">Facilidade</h3>
      <p className="text-2xl">
        Estamos sempre buscando novas maneiras de melhorar e inovar, garantindo
        que você tenha acesso às soluções mais avançadas.
      </p>
    </motion.div>
  );
}
