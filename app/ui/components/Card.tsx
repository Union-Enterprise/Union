import { motion } from "framer-motion";
// import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title = "", description = "", icon = faCode }) {
  return (
    <div className="p-10 h-[400px] w-full border-2 border-[#e7e7e7] rounded-lg flex flex-col gap-5 hover:border-main-purple hover:-translate-y-4 hover:rotate-2 group">
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        className="group-hover:text-main-purple w-fit"
      />
      <h4 className="text-3xl font-bold group-hover:text-main-purple">
        {title}
      </h4>
      <p className="text-xl">{description}</p>
    </div>
  );
}
