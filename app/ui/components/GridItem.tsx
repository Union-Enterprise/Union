import Image from "next/image";
import Link from "next/link";

export default function GridItem({ colSpan = "1", rowSpan = "1", link = "A" }) {
  return (
    <div
      className={`border-2 border-wm-border-color hover:rounded-xl hover:translate-y-[-15px] col-span-${colSpan} row-span-${rowSpan} flex justify-center items-center relative group`}
    >
      <Image
        src="/default-image.png"
        alt="Union Logo"
        width={100}
        height={100}
        priority
      />
      <div className="w-full h-full bg-[rgba(0,0,0,0.4)] absolute group-hover:opacity-100 opacity-0 flex justify-center items-center">
        <Link
          key={""}
          href={""}
          className="bg-white px-10 rounded-full text-sm py-1 text-wm-p-color"
        >
          <p>{link}</p>
        </Link>
      </div>
    </div>
  );
}
