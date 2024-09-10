"use client";

import Button from "./ui/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./ui/components/Card";
import FormInputGroup from "./ui/components/FormInputGroup";
import DevsCircle from "./ui/components/DevsCircle";
import Topic from "./ui/components/Topic";
import CarrousselButtons from "./ui/components/CarrousselButtons";
import { faCode, faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";
import LogoIcon from "./ui/components/LogoIcon";
import BlackBoardMessage from "./ui/components/BlackBoardMessage";
import PartnersCard from "./ui/components/PartnersCard";
import { useState, useEffect, useRef } from "react";
import DevsShowcase from "./ui/components/DevsShowcase";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./ui/components/AnimatedText";
import BorderGradient from "./ui/components/BorderGradient";
import GenericCard from "./ui/components/GenericCard";

export default function Home() {
  const [showDevs, setShowDevs] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleCloseClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowDevs(false);
      setIsExiting(false);
    }, 500);
  };

  const contentRef = useRef(null);

  useEffect(() => {
    if (showDevs) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showDevs]);

  return (
    <main
      ref={contentRef}
      className="bg-white flex h-full flex-col items-center justify-between *:w-full"
    >
      <section className="h-screen bg-white justify-center flex flex-col gap-10 items-center relative">
        {/* <BorderGradient /> */}
        <AnimatedText
          text="Construindo o amanhã com tecnologia."
          classname="text-8xl text-black inline whitespace-normal w-[60vw] break-words text-center font-bold"
        />
        <p className="text-p-gray max-w-[50%] text-2xl text-center">
          Desenvolvemos soluções inovadoras que resolvem problemas reais e
          melhoram a qualidade de vida. Juntos, moldando um amanhã mais justo e
          sustentável através do hoje.
        </p>
        <Button>
          <p>
            Crie com a <span className="font-bold">Union</span>
          </p>
        </Button>
      </section>

      <section className="flex flex-col gap-10 py-[160px]">
        <div className="flex flex-col gap-6 max-w-[50%] pl-[200px]">
          <h2 className="text-7xl text-p-black font-semibold">
            Por que desenvolver com a Union?
          </h2>
          <p className="text-2xl text-p-black">
            Sempre estamos comprometidos a fornecer soluções que atendam e
            impulsionem os seus objetivos e te levem ao próximo nível.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 px-[200px]">
          <GenericCard
            cols="col-span-2"
            title="Transforme sua Ideia em Realidade"
            text="A Union é especialista em transformar suas ideias em soluções tecnológicas eficazes. Com um time dedicado de desenvolvedores e designers, garantimos que seu projeto seja entregue com qualidade, no prazo e dentro do orçamento. Vamos juntos transformar sua visão em uma realidade que vai além das suas expectativas."
          />
          <GenericCard
            cols="col-span-2"
            title="Soluções Personalizadas para Seu Negócio"
            delay={0.4}
            text="Entendemos que cada empresa é única e, por isso, oferecemos soluções de software personalizadas para atender às suas necessidades específicas. A Union trabalha lado a lado com você para criar soluções que realmente funcionem para seu negócio, ajudando a otimizar processos e alcançar seus objetivos."
          />
          <GenericCard
            cols="col-span-2"
            title="Tecnologia de Ponta ao Seu Alcance Texto"
            text="Com a Union, pequenas e médias empresas têm acesso a tecnologia de ponta que antes era exclusiva para grandes corporações. Utilizamos as melhores práticas e ferramentas para garantir que seu software seja moderno, seguro e escalável, impulsionando sua empresa para o futuro."
          />
          <GenericCard
            cols="col-span-2"
            title="Apoio Contínuo e Suporte Dedicado"
            delay={0.4}
            text="Nosso compromisso não termina com a entrega do projeto. A Union oferece suporte contínuo e manutenção para garantir que seu software continue funcionando perfeitamente. Estamos aqui para resolver qualquer problema e fazer ajustes sempre que necessário, para que você possa focar no crescimento do seu negócio."
          />
        </div>
      </section>

      <section
        id="services"
        className="flex flex-col gap-5 pb-[160px] px-[200px]"
      >
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-5 max-w-[55%]">
            <h2 className="text-7xl text-black font-semibold">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-2xl text-p-black">
              Na Union, oferecemos uma gama completa de soluções tecnológicas,
              desde desenvolvimento de software personalizado até suporte
              contínuo. Estamos aqui para atender todas as suas necessidades
              digitais em um único local.
            </p>
            <Button>
              <p className="group-hover/button:text-black">
                Crie com a <span className="font-bold">Union</span>
              </p>
            </Button>
          </div>
          <div className="flex justify-between gap-5 *:text-black">
            <Card
              title="Softwares"
              description="Crie softwares personalizados que atendam às necessidades específicas do seu negócio, aumentando a eficiência e impulsionando o crescimento."
              icon={faCode}
            />
            <Card
              title="Projetos Web"
              description="Desenvolva os sites mais modernos, com design responsivo e otimização para SEO, garantindo uma presença online forte e atraente."
              icon={faDesktop}
            />
            <Card
              title="Mobile Apps"
              description="Tenha aplicativos móveis intuitivos e de alta performance para Android e iOS, proporcionando uma experiência de usuário excepcional."
              icon={faMobile}
            />
          </div>
        </div>
      </section>
      <section
        id="devs"
        className="bg-[#040404] relative h-[100vh] px-[200px] py-[160px] flex justify-center overflow-hidden"
      >
        <div
          id="radial"
          className=" w-full bg-gradient-to-b from-[rgba(9,9,9,0)] from-80% to-[rgba(4,4,4,1)] h-full z-20 absolute left-0 top-0 pointer-events-none"
        />
        <h2 className="text-7xl text-center font-semibold">
          Conheça os desenvolvedores <br /> dos seus próximos projetos
        </h2>

        <button
          onClick={() => setShowDevs(true)}
          className="text-p-gray text-xl absolute bottom-5 z-50 hover:text-p-white"
        >
          Ver todos &gt;
        </button>

        <AnimatePresence>
          {!isExiting && showDevs && (
            <DevsShowcase onClose={handleCloseClick} />
          )}
        </AnimatePresence>

        <DevsCircle />
      </section>
      <section className="bg-[#040404] bg-gradient-to-b from-[#040404] from-50% to-[rgba(134,81,255,0.1)] h-[320vh] py-[160px] px-[200px] flex justify-center relative">
        <div className="my-[20px] relative w-full font-semibold">
          <BlackBoardMessage
            message="Unindo pessoas à ideias"
            size="text-9xl"
            weight="font-thin"
          />
          <BlackBoardMessage
            message="Escrevendo histórias de sucesso"
            x={250}
            y={200}
            size="text-8xl"
            weight="font-black"
            align="text-right"
          />
          <BlackBoardMessage
            message="Soluções que Inspiram e Conectam"
            y={380}
            size="text-5xl"
            weight="font-normal"
          />
          <BlackBoardMessage
            message="Construindo o amanhã, hoje"
            size="text-[60px]"
            x={80}
            y={480}
          />
          <BlackBoardMessage
            message="Transformando Desafios em Oportunidades"
            y={660}
            size="text-7xl"
            weight="font-normal"
          />
          <BlackBoardMessage
            message="Criando pontes entre soluções"
            x={300}
            y={800}
            size="text-9xl"
            align="text-right"
            weight="font-semibold"
          />
          <BlackBoardMessage
            message="Iniciativas que Inspiram"
            y={1100}
            size="text-7xl"
            weight="font-black"
          />
          <BlackBoardMessage
            message="Facilitando objetivos com Criatividade"
            x={300}
            y={1300}
            size="text-9xl"
            weight="font-normal"
            align="text-right"
          />
          <BlackBoardMessage
            message="Impulsionando Ideias"
            y={1600}
            size="text-6xl"
            weight="font-black"
          />
          <BlackBoardMessage
            message="Desenvolvendo sonhos, conectando o mundo"
            x={100}
            y={1800}
            size="text-7xl"
            weight="font-semibold"
            align="text-center"
          />
        </div>
      </section>

      <section className=" bg-gradient-to-b bg-white px-[200px] py-[100px] flex flex-col gap-20">
        <h3 className="text-7xl font-bold text-main-purple">Nosso projeto</h3>
        <div className="grid grid-cols-2 items-center justify-center bg-main-purple rounded-md p-20 gap-[120px]">
          <Image
            src={"/mockup-iacademy.png"}
            width={1000}
            height={1200}
            alt="Picture of the author"
            className="rounded-xl"
          />
          <div className="flex flex-col gap-10 *:text-right items-end">
            <Image
              src={"/iacademy.svg"}
              width={350}
              height={150}
              alt="Picture of the author"
              className="rounded-xl"
            />
            <p className="max-w[80%] text-xl">
              O IAcademy é o principal projeto da Union. Consiste em uma
              plataforma de ensino gameficada, voltada para o público estudantil
              que deseja se preparar para vestibulares como o Enem. Mas o seu
              diferencial está na utilização de Inteligência Artificial para
              auxiliar os estudantes durante suas jornadas de estudos.
            </p>
            <p className="text-2xl">Gostou da ideia?</p>
            <div
              className="text-main-purple h-[50px] px-6 flex items-center justify-center rounded-md w-fit bg-white duration-200 cursor-pointer border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white hover:px-8 group/button hover:font-semibold
      "
            >
              <Link key={"http://localhost:3001/"} href={"http://localhost:3001/"}>
                <p>Conheça o projeto</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#040404] bg-gradient-to-b from-[#040404] to-90%  to-[rgba(117,63,243,0.3)] py-[160px] flex flex-col justify-center items-center gap-10">
        <h2 className="font-semibold text-8xl text-center">
          Pronto para começar <br /> a criar?
        </h2>
        <p className="text-p-gray text-2xl text-center">
          Simplifique seus processos e alcance seus objetivos com a Union.
        </p>
        <Button>
          <p>Começar a criar</p>
        </Button>
      </section>
      <section
        id="partners"
        className="bg-white  py-[160px] h-[100vh] flex flex-col gap-10 relative"
      >
        <div className="flex justify-between items-end mx-[200px]">
          <h2 className="text-7xl text-black font-semibold">
            Conheça também <br /> nossos parceiros
          </h2>
          <CarrousselButtons />
        </div>
        <div
          id="partnersCarroussel"
          className="h-full w-full flex gap-5 px-[200px] overflow-x-hidden"
        >
          <PartnersCard name="Elysium" src="/elysium.png" />
          <PartnersCard name="Target" src="/target.png" />
          <PartnersCard name="Apex" src="/apex.png" />
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-radial from-[#151515] to-[#040404] to-60% px-[200px] grid grid-cols-2 gap-32 py-[160px] relative"
      >
        <BorderGradient />
        <div className="flex flex-col gap-10">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-[120px] leading-[1] font-semibold"
          >
            Como podemos te ajudar hoje?
          </motion.h1>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-p-gray text-xl"
          >
            Nossa equipe está ansiosa para te ajudar a criar um futuro incrível
            de novas possibilidades. Se tiver alguma dúvida, sinta-se livre para
            acessar nossa página de FAQs, basta clicar no botão logo abaixo.
          </motion.p>
          <Button>
            <p>Ver FAQs</p>
          </Button>
        </div>

        <form className="flex flex-col gap-y-16">
          <div className="flex justify-between gap-10 *:w-full">
            <FormInputGroup label="Nome" />
            <FormInputGroup label="Sobrenome" delayTime={2.5} />
          </div>
          <FormInputGroup label="E-mail da empresa" delayTime={3} />
          <FormInputGroup label="Assunto" delayTime={3.5} />
          <FormInputGroup label="Mensagem" isTextArea={true} delayTime={4} />
          <button
            type="submit"
            className="py-3 bg-main-purple border-2 border-transparent rounded-md hover:border-main-purple hover:bg-transparent"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
