"use client";

import Image from "next/image";
import Link from "next/link";
import FooterSection from "./FooterSection";
import LogoIcon from "./LogoIcon";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#040404] border-t-2 border-[#111111] w-full px-[200px] py-[80px]">
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col gap-5">
          <Link
            key={"home"}
            href={"/"}
            className="flex gap-5 group cursor-pointer w-fit"
          >
            <LogoIcon />
          </Link>
          <p className="text-md text-p-gray">
            &copy; 2024 Union, Inc. - Todos os direitos reservados.
          </p>
        </div>
        <FooterSection
          title={"Recursos"}
          texts={[
            "Documentação",
            "Estudos de Caso",
            "FAQ",
            "Suporte ao Cliente",
          ]}
        />
        <FooterSection
          title={"Sobre a Union"}
          texts={["Equipe", "História", "Missão e Valores", "Parceiros"]}
        />
        <FooterSection
          title={"Legalidade"}
          texts={[
            "Conformidade Regulatória",
            "Cookies",
            "Privacidade",
            "Termos de Serviço",
          ]}
        />
      </div>
    </footer>
  );
}
