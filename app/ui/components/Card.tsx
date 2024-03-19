import Image from "next/image";
import Link from "next/link";

export default function Card({ title = "", description = "" }) {
  return (
    <Link
      key={"products-services"}
      href={"../products/"}
      className=" hover:translate-y-[-20px] border-2 rounded-lg hover:border-tertiary-blue overflow-hidden h-fit"
    >
      <div className="h-[250px] bg-wm-main-background w-full flex justify-center items-center border-b-2 border-wm-border-color">
        <Image
          src="/default-image.png"
          alt="Union Logo"
          width={180}
          height={250}
          priority
        />
      </div>

      <div className="p-5 flex flex-col gap-y-5">
        <p className="text-xl text-black">{title}</p>
        <p className="text-wm-p-color text-lg">{description}</p>
      </div>
    </Link>
  );
}
