import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Card() {
  return (
    <div className="grid grid-cols-3 justify-center *:h-full w-full gap-10 min-h-[600px] px-[80px]">
      <motion.div
        className="flex flex-col justify-between gap-[10vh] bg-card-dark rounded-3xl overflow-hidden relative p-12 col-span-2"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col gap-5 max-w-[50%] z-10">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-white text-8xl font-semibold"
          >
            Facilidades
          </motion.h1>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 2.5,
              ease: "easeInOut",
              duration: 1,
            }}
            className="text-white text-xl"
          >
            Estamos sempre buscando novas maneiras de melhorar e inovar,
            garantindo que você tenha acesso às soluções mais avançadas.
          </motion.p>
        </div>
        <div className="flex flex-col gap-5 z-10">
          <div className="flex items-center gap-3">
            <motion.p
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 3.5,
                duration: 1,
                ease: "easeInOut",
              }}
              className="w-[22px] h-[22px] rounded bg-main-purple flex justify-center items-center"
            >
              <Check className="w-[18px] h-[18px]" />
            </motion.p>
            <motion.p
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 3.5,
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-main-purple ml-2"
            >
              Implemente novos projetos rapidamente.
            </motion.p>
          </div>
          <div className="flex items-center gap-3">
            <motion.p
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 3.5,
                duration: 1,
                ease: "easeInOut",
              }}
              className="w-[22px] h-[22px] rounded bg-main-purple flex justify-center items-center"
            >
              <Check className="w-[18px] h-[18px]" />
            </motion.p>
            <motion.p
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 3.5,
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-main-purple ml-2"
            >
              Não se preocupe com atualizações, estamos sempre de olho nisso
              para você.
            </motion.p>
          </div>
          <div className="flex items-center gap-3">
            <motion.p
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 3.5,
                duration: 1,
                ease: "easeInOut",
              }}
              className="w-[22px] h-[22px] rounded bg-main-purple flex justify-center items-center"
            >
              <Check className="w-[18px] h-[18px]" />
            </motion.p>
            <motion.p
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 3.5,
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-main-purple ml-2"
            >
              Escolha entre diversos serviços ou crie o seu totalmente
              personalizado.
            </motion.p>
          </div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 6,
              duration: 1,
              ease: "easeInOut",
            }}
            className="mt-10"
          >
            <Button text="Conheça a Union" />
          </motion.div>
        </div>
        <div className="flex flex-row justify-end items-start absolute top-0 right-0 z-0">
          <Image
            src="/card.png"
            alt="Union Logo"
            width={500}
            height={600}
            priority
          />
          <div
            className="
          bg-gradient-to-r from-dark-gray to-transparent absolute right-0 z-[1] w-full h-full"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col justify-between gap-[10vh] bg-back-card rounded-3xl overflow-hidden relative p-12"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div>
          <motion.h3
            className="text-black text-5xl font-semibold"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 2.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <span className="text-main-purple">+</span> Benefícios e
          </motion.h3>
          <motion.h3
            className="text-black text-5xl font-semibold"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 3.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <span className="text-main-purple">-</span> Custos
          </motion.h3>
        </div>
        <div>
          <motion.p
            className="text-black text-lg"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 4.5,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            Oferecemos soluções de alto nível a preços acessíveis, um excelente
            retorno sobre seu investimento, e economia de tempo e recursos.
          </motion.p>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="mt-10"
          >
            <Button text="Conheça a Union" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
