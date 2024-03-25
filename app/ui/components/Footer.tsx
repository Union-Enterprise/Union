"use client";

import Image from "next/image";
import Link from "next/link";
import FooterSection from "./FooterSection";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-dark-gray w-full px-[100px] pt-[100px] pb-[50px]">
      <div className="bg-light-gray px-[80px] py-[40px] grid grid-cols-4 items-start rounded-3xl gap-y-10 *:text-p-white">
        <Link
          key={"home"}
          href={"/"}
          className="flex gap-5 group cursor-pointer w-fit"
        >
          <LogoIcon />
        </Link>
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
        <div className="col-span-4 flex justify-between items-center border-t-2 border-white-b pt-5">
          <p>&copy; 2024 Union, Inc. - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
