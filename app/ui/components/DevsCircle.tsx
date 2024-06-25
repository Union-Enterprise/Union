import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface LineProps {
  animation?: number;
  width?: number;
  children?: ReactNode;
}

function Line({ animation = 0, width = 0, children }: LineProps) {
  const rotations = [
    "animate-spin-slow-10",
    "animate-spin-slow-20",
    "animate-spin-slow-35",
    "animate-spin-slow-60",
    "animate-spin-slow-70",
    "animate-spin-slow-90",
    "animate-spin-slow-105",
    "animate-spin-slow-130",
    "animate-spin-slow-145",
    "animate-spin-slow-155",
  ];

  const widths = ["w-lineA", "w-lineB", "w-lineC"];

  return (
    <div
      className={`absolute flex justify-between z-10 ${rotations[animation]} ${widths[width]}`}
    >
      {children}
    </div>
  );
}

function CircleRings({ scale = "" }) {
  return (
    <div
      className={`absolute left-0 top-0 right-0 bottom-0 w-full h-full ${scale} border-2 border-white rounded-full`}
    />
  );
}

function Profile({ animation = 0, name = "undefined", role = 0, devImg = 0 }) {
  const [socialVisible, setSocialVisible] = useState(false);

  const profileRotations = [
    "animate-spin-slow-10-reverse",
    "animate-spin-slow-20-reverse",
    "animate-spin-slow-35-reverse",
    "animate-spin-slow-60-reverse",
    "animate-spin-slow-70-reverse",
    "animate-spin-slow-90-reverse",
    "animate-spin-slow-105-reverse",
    "animate-spin-slow-130-reverse",
    "animate-spin-slow-145-reverse",
    "animate-spin-slow-155-reverse",
  ];

  const roles = [
    "Front-End / Designer",
    "Back-End / DBA",
    "Full-Stack",
    "Analista",
    "Tester",
    "Gerente",
  ];

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

  return (
    <div
      className={`relative flex flex-col items-center ${profileRotations[animation]} text-center w-[100px]`}
    >
      <div
      style={{ backgroundImage: `url(${profilesImg[devImg]})`}}
        className="rounded-full w-20 h-20 bg-center bg- bg-cover bg-no-repeat border-2 border-transparent bg-black hover:border-main-purple hover:scale-105 hover:cursor-pointer"
        onClick={() => {
          setSocialVisible(!socialVisible);
          setTimeout(() => {
            setSocialVisible(false);
          }, 5000);
        }}
      ></div>
      <p className="font-bold text-xl text-white">{name}</p>
      <p className="text-p-gray whitespace-nowrap px-2">{roles[role]}</p>
      <div
        className={`absolute bg-[#151515] bottom-[100%] left-[90%] gap-5 p-4 flex justify-between rounded-md z-50  ${
          socialVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <FontAwesomeIcon
          icon={faGithubAlt}
          size="2x"
          className="text-p-gray hover:text-white cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          size="2x"
          className="text-p-gray hover:text-white cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className="text-p-gray hover:text-white cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function DevsCircle() {
  return (
    <>
      <div className="w-[1500px] h-[1500px] absolute top-[50%]">
        <div className="position absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center">
          <Line animation={1}>
            <Profile animation={1} name="Eduardo" role={1} devImg={3} />
            <Profile animation={1} name="Eduardo" role={1} devImg={3} />
          </Line>
          <Line animation={3}>
            <Profile animation={3} name="Kauã" role={2} devImg={4} />
            <Profile animation={3} name="Kauã" role={2} devImg={4} />
          </Line>
          <Line animation={6}>
            <Profile animation={6} name="Rafaella" role={3} devImg={7} />
            <Profile animation={6} name="Rafaella" role={3}  devImg={7} />
          </Line>
          <Line animation={9}>
            <Profile animation={9} name="Caio" devImg={2} />
            <Profile animation={9} name="Caio" devImg={2} />
          </Line>

          <Line width={1}>
            <Profile name="Kauane" role={5} devImg={5} />
            <Profile name="Kauane" role={5} devImg={5} />
          </Line>
          <Line animation={4} width={1}>
            <Profile animation={4} name="Maurício" role={3} devImg={6} />
            <Profile animation={4} name="Maurício" role={3} devImg={6} />
          </Line>
          <Line animation={7} width={1}>
            <Profile animation={7} name="Vitor" role={4} devImg={9} />
            <Profile animation={7} name="Vitor" role={4}  devImg={9} />
          </Line>

          <Line animation={2} width={2}>
            <Profile animation={2} name="Victor" devImg={8} />
            <Profile animation={2} name="Victor" devImg={8} />
          </Line>
          <Line animation={5} width={2}>
            <Profile animation={5} name="Antônio" role={4} />
            <Profile animation={5} name="Antônio" role={4} />
          </Line>
          <Line animation={8} width={2}>
            <Profile animation={8} name="Bruno" role={1} devImg={1} />
            <Profile animation={8} name="Bruno" role={1} devImg={1} />
          </Line>
        </div>

        <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center z-0">
          <CircleRings />
          <CircleRings scale="scale-[90%]" />
          <CircleRings scale="scale-[80%]" />
          <CircleRings scale="scale-[70%]" />
          <CircleRings scale="scale-[60%]" />
          <CircleRings scale="scale-[50%]" />
          <CircleRings scale="scale-[40%]" />
        </div>
      </div>
    </>
  );
}
