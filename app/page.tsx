"use client";

import { Check} from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import Message from "./ui/components/Message";
import GridItem from "./ui/components/GridItem";
import Button from "./ui/components/Button";
import Logo from "./ui/components/Logo";
import { delay, motion } from "framer-motion";
import Card from "./ui/components/Card";

export default function Home() {
  return (
    <main className="bg-wm-main-background flex h-full flex-col items-center justify-between pb-[400px] gap-[200px]">
      <section className="h-screen w-full px-[120px] pt-[80px] bg-gradient-to-br from-linear-dark-blue via-linear-black to-linear-dark-blue justify-center flex flex-col gap-14 items-center">
        <Logo />
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            bounce: 0.5,
            type: "spring",
          }}
          className="text-semibold text-7xl"
        >
          Conectando o Mundo
        </motion.h2>
        <div className="self-start max-w-[40%] flex flex-col gap-7">
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="font-semibold text-3xl"
          >
            Transformando ideias em realidade, somos a ponte para a inovação.
          </motion.p>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-xl text-p-white"
          >
            Nossas soluções inovadoras impulsionam empresas como a sua a atingir
            novos patamares de eficiência e sucesso.
          </motion.p>
          <Button text="Conheça" animate={true} />
        </div>
      </section>
      <section className="flex flex-col items-center w-full">
        <motion.h3
           initial={{ x: -200, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{
             delay: 0.5,
             duration: 1,
             ease: "easeInOut",
           }}
           className="text-6xl text-black font-bold"
        >
          Quem é a Union?
        </motion.h3>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          className="text-wm-p-color text-2xl mt-5 text-center"
          >
          Somos tudo aquilo que for necessário para o seu sucesso.
        </motion.p>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="text-wm-p-color text-2xl mb-14 mt-4 max-w-[40vw] text-center"
          >
          E estamos comprometidos a fornecer soluções que atendam e impulsionem
          os seus objetivos para o próximo nível.
        </motion.p>
        </section>
        <Card/>
      <section className="grid grid-cols-2 gap-[10vw]">
        <div className="flex flex-col gap-y-7">
          <h3 className="text-6xl text-black font-bold">Tire suas ideias do papel em minutos</h3>
          <p className="bg-blue-50 text-tertiary-blue rounded-md w-fit px-4 py-1">
            Faça seus planos com a <span className="font-semibold">Union</span>
          </p>
          <div className="mr-20 flex flex-col gap-y-4">
            <p className="text-wm-p-color text-xl">
              Na Union, entendemos que cada grande projeto começa com uma ideia.
              É por isso focamos em agilizar o processo de transformar conceitos
              em realidade.
            </p>
            <p className="text-wm-p-color text-xl">
              Com uma equipe treinada e criativa, você pode começar a trabalhar
              em suas ideias imediatamente, sem obstáculos.
            </p>
            <p className="text-wm-p-color text-xl">
              Seja qual for seu objetivo, estamos aqui para ajudá-lo a
              alcançá-lo.
            </p>
          </div>
          <Button text="Fale Conosco" />
        </div>
        <div className="overflow-hidden h-[600px] flex justify-center items-center border-2 border-wm-border-color rounded-xl">
          <Image
            src="/default-image.png"
            alt="Union Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </section>
      <section className="w-full flex flex-col gap-10 items-center">
        <div>
          <h2 className="font-bold text-9xl text-main-purple">&quot;Union,</h2>
          <h3 className="text-7xl text-black font-normal ml-2">
            feitos de união
            <span className="text-8xl text-main-purple">&quot;</span>
          </h3>
        </div>
        {/* <div className="grid grid-cols-4 grid-rows-2 w-full gap-5 relative">
          <GridItem text="Link 1" />
          <GridItem cols={1} text="Link 2" />
          <GridItem rows={2} text="Link 3" />
          <GridItem text="Link 4" />
          <GridItem text="Link 5" />
          <GridItem text="Link 6" />
          <div
            className="absolute bottom-[-150px] w-full flex flex-col items-center pt-[150px] justify-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 45%)",
            }}
          >
            <p className="text-wm-p-color text-xl">
              Desenvolvendo por e para você.
            </p>
            <p className="text-wm-p-color mb-5 text-xl">
              saiba quem irá
              <span className="font-bold text-black"> desenvolver</span> seus
              <span className="font-bold text-black"> próximos projetos.</span>
            </p>
            <Button text="Conheça nossos Devs" />
          </div>
        </div> */}
      </section>
      
    </main>
  );
}
