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

export default function DevsShowCase({ onClose }: DevsShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[rgba(4,4,4,0.8)] w-full h-full fixed flex top-0 left-0 z-50 justify-center items-center flex-col px-[250px] py-[150px] gap-5"
    >
      <div className="bg-[rgb(15,15,15,0.6)] grid grid-cols-4 w-full gap-10 p-5 h-full rounded-md overflow-auto">
        <Card name="Antônio Augusto" roles="Tester / Analista" />
        <Card name="Bruno Oliveira" roles="Back-End / DBA" />
        <Card name="Caio Silva" roles="Front-End / Designer" />
        <Card name="Eduardo Li" roles="Back-End / DBA" />
        <Card name="Kauã de Souza" roles="Full-Stack" />
        <Card name="Kauane de Souza" roles="Gerente de Projetos" />
        <Card name="Maurício" roles="Analista" />
        <Card name="Rafaella Lopes" roles="Analista" />
        <Card name="Victor Volpi" roles="Front-End / Designer" />
        <Card name="Vitor Pereira" roles="Tester" />
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

function Card({ name = "", roles = "" }) {
  return (
    <div className="bg-[#151515] rounded-md w-full h-[250px] flex flex-col gap-10 p-10 border-[1px] border-transparent hover:border-main-purple group col-span-2">
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
    </div>
  );
}
