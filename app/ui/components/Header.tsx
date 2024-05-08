"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import LogoIcon from "./LogoIcon";

const links = [
  [
    {
      key: "products-services",
      href: "../products/",
      text: "Produtos e Serviços",
    },

    { key: "partners", href: "../partners/", text: "Parceiros" },
  ],
  [
    { key: "developers", href: "../developers/", text: "Desenvolvedores" },
    { key: "enterprise", href: "../enterprise/", text: "A Empresa" },
  ],
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  });
  return (
    <>
      <header
        className={`${
          isScrolled
            ? "bg-[rgba(0,0,0,0.4)] backdrop-saturate-[1.8] backdrop-blur-xl"
            : "bg-transparent opacity-100"
        }  w-full flex justify-between items-center px-[100px] h-[80px] fixed top-0 z-[999]`}
      >
        <div className="flex gap-10 items-center">
          <div className={`${"bg-[rgba(0,0,0,0.4)] "}`}></div>
          <Link
            key={"home"}
            href={"/"}
            className="flex gap-5 group cursor-pointer"
          >
            <LogoIcon />
          </Link>
          <div className="flex gap-10">
            {links[0].map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-white hover:text-main-purple duration-100"
              >
                <p>{link.text}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-10 items-center">
          {links[1].map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-white hover:text-main-purple duration-100"
            >
              <p>{link.text}</p>
            </Link>
          ))}
          <Button>
            <p>Conhecer</p>
          </Button>
        </div>
      </header>
    </>
  );
}
