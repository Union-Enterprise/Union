"use client";

import Image from "next/image";
import Link from "next/link";
import GridItem from "./ui/components/GridItem";
import Button from "./ui/components/Button";
import Logo from "./ui/components/Logo";
import { delay, motion } from "framer-motion";
import Card from "./ui/components/Card";
import FormInputGroup from "./ui/components/FormInputGroup";

export default function Home() {
  return (
    <main className="bg-wm-main-background flex h-full flex-col items-center justify-between gap-[200px] *:px-[120px] *:w-full">
      <section className="h-screen bg-gradient-to-br from-linear-dark-blue via-linear-black to-linear-dark-blue justify-center flex flex-col gap-14 items-center">
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
        {/* <div className="self-start max-w-[40%] flex flex-col gap-7">
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
        </div> */}
      </section>
      <section className="flex flex-col items-center">
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
        <Card />
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-10">
          <h3 className="text-6xl text-black font-bold">
            Tire suas ideias do papel em minutos
          </h3>
          <div className="grid grid-cols-3 w-full border-2 group border-wm-border-color hover:border-main-purple *:text-black group *:hover:text-white hover:bg-light-gray rounded-3xl p-10">
            <p className="border-l-2 border-main-purple pl-5 group-hover:border-dashed">
              Na Union, entendemos que cada grande projeto começa com uma ideia.
              É por isso que focamos em agilizar o processo de transformar
              conceitos em realidade.
            </p>
            <p className="border-l-2 border-main-purple pl-5 group-hover:border-dashed ml-20">
              Com uma equipe treinada e criativa, você pode começar a trabalhar
              em suas ideias imediatamente, sem obstáculos.
            </p>
            <div className="flex justify-end items-end">
              <Button text="Fale Conosco" />
            </div>
          </div>
        </div>
        <div className="overflow-hidden h-[500px] bg-black flex justify-center items-center border-2 hover:border-main-purple rounded-3xl"></div>
      </section>
      <section className="flex flex-col gap-10 items-center">
        <div className="flex flex-col self-start">
          <h2 className="font-bold text-9xl text-main-purple">&quot;Union,</h2>
          <h3 className="text-7xl text-black font-normal ml-[10vw] ">
            feitos de união
            <span className="text-9xl font-bold text-main-purple">&quot;</span>
          </h3>
        </div>
        <div className="grid grid-cols-4 w-full gap-5 h-[90vh] relative border-t-2 border-main-purple border-opacity-30 pt-12">
          <GridItem cols={2} />
          <GridItem rows={2} />
          <GridItem />
          <GridItem cols={2} rows={2} />
          <GridItem rows={2} />
          <GridItem />
        </div>
      </section>
      <section className="bg-[#151619] h-screen overflow-hidden grid grid-cols-2 gap-[10vw] py-[120px]">
        <div className="flex flex-col gap-10">
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-white text-9xl font-semibold"
          >
            Como podemos te ajudar hoje?
          </motion.p>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-zinc-300 text-xl"
          >
            Nossa equipe está ansiosa para te ajudar a criar um futuro incrível
            de novas possibilidades. Se tiver alguma dúvida, sinta-se livre para
            acessar nossa página de FAQs, basta clicar no botão logo abaixo.
          </motion.p>

          <Button text="Ver FAQs" animate={true} />
        </div>

        <form className="flex flex-col gap-y-16">
          <div className="flex justify-between gap-10 *:w-full">
            <FormInputGroup label="Nome" />
            <FormInputGroup label="Sobrenome" delayTime={2.5} />
          </div>
          <FormInputGroup label="E-mail da empresa" delayTime={3} />
          <FormInputGroup label="Assunto" delayTime={3.5} />
          <FormInputGroup label="Mensagem" isTextArea={true} delayTime={4} />
          <motion.button
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 4.5,
              duration: 1,
              ease: "easeInOut",
            }}
            type="submit"
            className="py-3 bg-main-purple border-2 border-transparent rounded-md hover:border-main-purple hover:bg-transparent"
          >
            Enviar
          </motion.button>
        </form>
      </section>
    </main>
  );
}
