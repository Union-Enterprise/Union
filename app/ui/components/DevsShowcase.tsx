import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  faGithubAlt,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface DevsShowcaseProps {
  onClose: () => void;
}

const profilesImg = [
  "/devs/antonio.png",
  "/devs/bruno.png",
  "/devs/caio.png",
  "/devs/eduardo.png",
  "/devs/kaua.png",
  "/devs/kauane.png",
  "/devs/mauricio.png",
  "/devs/rafaella.png",
  "/devs/victor.png",
  "/devs/vitor.png",
]

export default function DevsShowCase({ onClose }: DevsShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[rgba(4,4,4,0.8)] w-full h-full fixed flex top-0 left-0 z-50 justify-center items-center flex-col px-[200px] py-[150px] gap-5"
    >
      <div className="bg-[rgb(15,15,15,0.6)] grid grid-cols-5 w-full gap-5 p-5 h-[600px] rounded-md overflow-auto">
        <Card name="Antônio Augusto" roles="Tester / Analista" devImg={0} />
        <Card name="Bruno Silva" roles="Back-End / DBA" devImg={1} />
        <Card name="Caio Silva" roles="Front-End / Designer" devImg={2} />
        <Card name="Eduardo Li" roles="Back-End / DBA" devImg={3} />
        <Card name="Kauã de Souza" roles="Full-Stack" devImg={4} />
        <Card name="Kauane de Souza" roles="Gerente de Projetos" devImg={5} />
        <Card name="Maurício Henrique" roles="Analista" devImg={6} />
        <Card name="Rafaella Lopes" roles="Analista" devImg={7} />
        <Card name="Victor Volpi" roles="Front-End / Designer" devImg={8} />
        <Card name="Vitor Pereira" roles="Tester" devImg={9} />
      </div>
      <button
        className="text-xl text-white hover:text-main-purple"
        onClick={onClose}
      >
        Voltar &gt;
      </button>
    </motion.div>
  );
}

function Card({ name = "", roles = "", devImg = 0 }) {
  return (
    <div className="bg-[#151515] rounded-md w-full h-full flex flex-col gap-10 p-7 border-[1px] border-transparent hover:border-main-purple group relative">
      {/* <Image src="/union.svg" width={50} height={50} alt="Dev 1" /> */}
      <div>
        <p className="text-3xl">{name}</p>
        <p className="text-p-gray text-xl">{roles}</p>
      </div>
      <div className="flex gap-5">
        <FontAwesomeIcon
          icon={faGithubAlt}
          size="2x"
          className="text-p-gray hover:text-main-purple duration-75 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className="text-p-gray hover:text-main-purple duration-75 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className="text-p-gray hover:text-main-purple duration-75 cursor-pointer"
        />
      </div>
      <Image
      src={`${profilesImg[devImg]}`}
      className="absolute right-7 bottom-7 z-50"
      width={45}
      height={45}
      alt="Picture of the author"
    />
    </div>
  );
}
