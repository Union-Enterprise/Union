import Image from "next/image";
import Link from "next/link";

export default function GridItem({ cols = 1, rows = 1, text = "Link" }) {
  return (
    <div
      className={`border-2 border-wm-border-color bg-black hover:border-main-purple rounded-3xl hover:translate-y-[-10px]
      ${cols == 2 ? "col-span-2" : "col-span-1"} 
      ${
        rows == 2 ? "row-span-2" : "row-span-1"
      } flex justify-center items-center relative group overflow-hidden`}
    >
      <div className="w-full h-full bg-[rgba(0,0,0,0.4)] absolute group-hover:opacity-100 opacity-0 flex justify-center items-center">
        <Link
          key={""}
          href={""}
          className="bg-white px-10 rounded-full text-sm py-1 text-wm-p-color"
        >
          <p>{text}</p>
        </Link>
      </div>
    </div>
  );
}
