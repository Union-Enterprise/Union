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
    <header className="bg-white w-full h-[60px] border-b border-gray-200 flex justify-between items-center px-[120px] fixed top-0 z-[999]">
      <Image
        src="/h-logo.png"
        alt="Union Logo"
        width={155}
        height={40}
        priority
      />
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
        <p className="border-wm-border-color border-2 text-black py-2 px-4 rounded-md cursor-pointer hover:opacity-60">
          Fale Conosco
        </p>
        <p className="text-white py-2 px-4 rounded-md bg-black cursor-pointer hover:bg-[rgba(0,0,0,0.7)]">
          Conheça
        </p>
      </div>
    </header>
  );
}
