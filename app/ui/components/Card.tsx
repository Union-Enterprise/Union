import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <Link
      key={"products-services"}
      href={"../products/"}
      className=" hover:translate-y-[-20px] border-2 rounded-lg hover:border-blue-400 overflow-hidden"
    >
      <div className="h-[250px] bg-black w-full">
        {/* <Image
          src="/blue-logo.svg"
          alt="Union Logo"
          width={180}
          height={250}
          priority
        /> */}
      </div>

      <div className="p-5 flex flex-col gap-y-5">
        <p className="text-xl text-black">Serviços de X, Y e Z</p>
        <p className="text-wm-p-color text-lg">
          Tenha todos os serviços que quiser sem complicações ou processos
          chatos e burocráticos...
        </p>
      </div>
    </Link>
  );
}
