"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
  {
    key: "products-services",
    href: "../products/",
    text: "Produtos e Serviços",
  },
  { key: "developers", href: "../developers/", text: "Desenvolvedores" },
  { key: "enterprise", href: "../enterprise/", text: "A Empresa" },
  { key: "partners", href: "../partners/", text: "Parceiros" },
];

export default function Header() {
  return (
    <header className="bg-[rgba(255,255,255,0.8)] backdrop-saturate-[1.8] backdrop-blur-sm w-full h-[60px] border-b-2 border-[#eaeaea] flex justify-between items-center px-[120px] fixed top-0 z-[999]">
      <Link key={"home"} href={"/"} className="flex gap-5 group cursor-pointer">
        <Image
          src="/h-logo-icon.svg"
          alt="Union Logo icon"
          width={36}
          height={40}
          priority
          className="group-hover:rotate-45 duration-300"
        />
        <Image
          src="/h-logo-name.svg"
          alt="Union Logo name"
          width={100}
          height={40}
          priority
        />
      </Link>
      <div className="flex gap-10">
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="text-wm-p-color hover:text-black duration-100"
          >
            <p>{link.text}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <p className="border-wm-border-color border-2 text-black py-2 px-4 rounded-md cursor-pointer hover:border-tertiary-blue hover:text-tertiary-blue">
          Fale Conosco
        </p>
        <p className="text-white py-2 px-4 rounded-md bg-black cursor-pointer hover:bg-tertiary-blue">
          Conheça
        </p>
      </div>
    </header>
  );
}
