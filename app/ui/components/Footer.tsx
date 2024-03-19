"use client";

import Image from "next/image";
import Link from "next/link";
import FooterSection from "./FooterSection";

export default function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-200 px-[120px] grid grid-cols-5 py-8">
      <Image
        src="/h-logo.png"
        alt="Union logo"
        width={155}
        height={40}
        priority
      />
      <FooterSection
        title={"Recursos"}
        texts={["Documentação", "Estudos de Caso", "FAQ", "Suporte ao Cliente"]}
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
      <div>
        <p className="font-semibold text-black text-xl">
          Assine nossa Newsletter
        </p>
        <form className="relative mt-5 flex items-center">
          <input
            type="email"
            placeholder="Digite seu email"
            required
            className="bg-wm-main-background w-full py-2 px-4 pr-36 outline-none border-2 valid:border-tertiary-blue border-wm-border-color text-wm-p-color focus:border-tertiary-blue rounded-md peer"
          />
          <button className="bg-black text-sm rounded-md px-4 peer-valid:opacity-100 peer-valid:bg-tertiary-blue hover:opacity-60 text-white py-1 absolute right-4">
            Inscreva-se
          </button>
        </form>
      </div>

      <div className="col-span-5 *:text-wm-p-color flex justify-between items-center mt-20">
        <p>&copy; 2024 Union, Inc. - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
