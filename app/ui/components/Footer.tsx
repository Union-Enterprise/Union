"use client";

import Image from "next/image";
import Link from "next/link";
import FooterSection from "./FooterSection";

export default function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-200 px-[120px] grid grid-cols-5 py-5">
      <Image
        src="/h-logo.png"
        alt="Union logo"
        width={155}
        height={40}
        priority
      />
      <FooterSection title={"Sei lá"} texts={["Texto", "Texto", "Texto"]} />
      <FooterSection
        title={"Faço a menor ideia"}
        texts={["Texto", "Texto", "Texto"]}
      />
      <FooterSection
        title={"Muito menos aqui"}
        texts={["Texto", "Texto", "Texto", "Texto"]}
      />
      <div>
        <p className="font-semibold text-black text-xl">Newsletter???</p>
        <div className="bg-wm-main-background py-2 px-4 rounded-md mt-5 flex items-center justify-between border-2 border-wm-border-color">
          <input
            type="email"
            placeholder="Digite seu email"
            required
            className="valid:text-blue-400 peer outline-none border-none text-black bg-transparent placeholder:italic placeholder:text-wm-p-color placeholder:opacity-50"
          />
          <button className="text-sm bg-black h-full rounded-md px-4 py-1 text-white pointer-events-none peer-valid:bg-blue-400 peer-valid:pointer-events-auto">
            Inscreva-se
          </button>
        </div>
      </div>

      <div className="col-span-5 *:text-wm-p-color flex justify-between items-center mt-20">
        <p>@2024 Union, Inc.</p>
        <p>00.000.000/0000-00</p>
        <p>Rua Paralelepípedo, N° 1238 em Algum Lugar - Brasil</p>
      </div>
    </footer>
  );
}
