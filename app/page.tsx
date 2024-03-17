import Image from "next/image";
import Link from "next/link";
import Card from "./ui/components/card";
import GridItem from "./ui/components/GridItem";

export default function Home() {
  return (
    <main className="bg-wm-main-background flex h-full flex-col items-center justify-between px-[120px] pb-[400px] gap-[200px]">
      <section className="h-screen justify-center flex flex-col items-center *:text-center">
        <Image
          src="/blue-logo.svg"
          alt="Union Logo"
          width={300}
          height={50}
          priority
        />
        <h1 className="text-8xl font-bold text-black mt-10">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-wm-p-color text-3xl px-[350px] my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          urna nisl. Nunc at facilisis sem, vitae vestibulum magna.
        </p>
        <Link
          key={"products-services"}
          href={"../products/"}
          className="bg-black px-6 py-3 text-white"
        >
          <p>Conheça nossos serviços</p>
        </Link>
      </section>
      <section className="flex flex-col items-center">
        <h3 className="text-6xl text-black font-bold">Quem é a Union?</h3>
        <p className="text-wm-p-color text-2xl mb-14 mt-5">
          Nós somos tudo aquilo que for necessário para o seu sucesso.
        </p>
        <div className="grid grid-cols-4 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="grid grid-cols-2 gap-[10vw]">
        <div className="flex flex-col gap-y-7">
          <h3 className="text-6xl text-black font-bold">
            Tire suas ideias do papel em minutos
          </h3>
          <p className="text-black">
            Faça seus planos com a <span className="font-semibold">Union</span>
          </p>
          <p className="text-wm-p-color text-xl mr-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pretium bibendum luctus. Praesent ligula urna, feugiat a sodales at,
            porttitor vel dolor. Curabitur sit amet augue et magna sagittis
            laoreet.
          </p>
          <Link
            key={"products-services"}
            href={"../products/"}
            className="bg-black py-3 px-6 w-fit rounded-sm"
          >
            <p>Fale Conosco</p>
          </Link>
        </div>
        <div className="bg-black overflow-hidden h-[600px]">
          {/* <Image
            src="/blue-logo.svg"
            alt="Union Logo"
            width={180}
            height={250}
            priority
            className="w-full"
          /> */}
        </div>
      </section>
      <section className="w-full flex flex-col gap-10 items-center">
        <h2 className="text-7xl text-black font-semibold">
          "<span className="font-bold text-blue-500">Union</span>, feita de
          união"
        </h2>
        <div className="grid grid-cols-4 auto-rows-[minmax(320px,_auto)] w-full gap-5 *:overflow-hidden relative">
          <GridItem />
          <GridItem colSpan={2} />
          <GridItem rowSpan={2} />
          <GridItem />
          <GridItem />
          <GridItem />
          <div
            className="absolute bottom-[-150px] w-full flex flex-col items-center pt-[150px] justify-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 45%)",
            }}
          >
            <p className="text-wm-p-color text-xl">
              Desenvolvendo por e para você.
            </p>
            <p className="text-wm-p-color mb-5 text-xl">
              saiba quem irá{" "}
              <span className="font-bold text-black">desenvolver</span> seus
              <span className="font-bold text-black"> próximos projetos.</span>
            </p>
            <Link
              key={"developers"}
              href={"../developers/"}
              className="bg-black py-3 px-8 w-fit rounded-sm"
            >
              <p>Fale Conosco</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
