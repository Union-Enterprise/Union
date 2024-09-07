"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import LogoIcon from "./LogoIcon";

const links = [
  {
    key: "services",
    href: "#services",
    text: "Serviços",
  },
  { key: "developers", href: "#devs", text: "Desenvolvedores" },
  { key: "partners", href: "#partners", text: "Parceiros" },
  { key: "contact", href: "#contact", text: "Fale Conosco" },
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
          <Link
            key={"home"}
            href={"/"}
            className="flex gap-5 group cursor-pointer"
          >
            <LogoIcon />
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="hover:text-main-purple duration-100"
              // className={`${
              //   isScrolled ? "text-black" : "text-white"
              // } hover:text-main-purple duration-100`}
            >
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
