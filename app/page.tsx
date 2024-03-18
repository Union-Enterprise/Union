import Image from "next/image";
import Link from "next/link";
import Card from "./ui/components/Card";
import GridItem from "./ui/components/GridItem";
import Button from "./ui/components/Button";

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
        <h1 className="text-8xl font-bold text-black mt-10">Unindo o Mundo</h1>
        <p className="text-wm-p-color text-2xl px-[350px] my-6">
          Transformando ideias em realidade, somos a ponte para a inovação no
          universo tecnológico. Nossas soluções inovadoras impulsionam empresas
          como a sua a atingir novos patamares de eficiência e sucesso.
        </p>
        <Button text="Conheça nossos serviços" />
      </section>
      <section className="flex flex-col items-center w-full">
        <h3 className="text-6xl text-black font-bold">Quem é a Union?</h3>
        <p className="text-wm-p-color text-2xl mt-5 text-center">
          Somos tudo aquilo que for necessário para o seu sucesso.
        </p>
        <p className="text-wm-p-color text-2xl mb-14 mt-4 max-w-[40vw] text-center">
          E estamos comprometidos a fornecer soluções que atendam e impulsionem
          os seus objetivos para o próximo nível.
        </p>
        <div className="grid grid-cols-4 gap-5 w-full">
          <Card
            title="Facilidade"
            description="Estamos sempre buscando novas maneiras de melhorar e inovar, garantindo que você tenha acesso às soluções mais avançadas."
          />
          <Card
            title="Serviços Personalizados"
            description="Entendemos que cada negócio é único. Graças a isso, nossos serviços são altamente personalizáveis para se adequar às suas necessidades específicas, proporcionando uma solução sob medida."
          />
          <Card
            title="Suporte Contínuo"
            description="Assim como a tecnologia, nossos serviços estão em constante evolução. Mantemos nossos produtos atualizados com as últimas tendências e tecnologias para garantir que você esteja sempre à frente da concorrência."
          />
          <Card
            title="Custo-benefício"
            description="Oferecemos soluções de alto nível a preços acessíveis. Nosso objetivo é fornecer um excelente retorno sobre seu investimento, ajudando-o a economizar tempo e recursos enquanto dedica-se a atingir o que realmente importa, suas metas e sonhos."
          />
        </div>
      </section>
      <section className="grid grid-cols-2 gap-[10vw]">
        <div className="flex flex-col gap-y-7">
          <h3 className="text-6xl text-black font-bold">
            Tire suas ideias do papel em minutos
          </h3>
          <p className="bg-blue-50 text-blue-400 rounded-md w-fit px-4 py-1">
            Faça seus planos com a <span className="font-semibold">Union</span>
          </p>
          <div className="mr-20 flex flex-col gap-y-4">
            <p className="text-wm-p-color text-xl">
              Na Union, entendemos que cada grande projeto começa com uma ideia.
              É por isso focamos em agilizar o processo de transformar conceitos
              em realidade.
            </p>
            <p className="text-wm-p-color text-xl">
              Com uma equipe treinada e criativa, você pode começar a trabalhar
              em suas ideias imediatamente, sem obstáculos.
            </p>
            <p className="text-wm-p-color text-xl">
              Seja qual for seu objetivo, estamos aqui para ajudá-lo a
              alcançá-lo.
            </p>
          </div>
          <Button text="Fale Conosco" />
        </div>
        <div className="overflow-hidden h-[600px] flex justify-center items-center border-2 border-wm-border-color rounded-xl">
          <Image
            src="/default-image.png"
            alt="Union Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </section>
      <section className="w-full flex flex-col gap-10 items-center">
        <h2 className="text-7xl text-black font-semibold">
          &quot;<span className="font-bold text-blue-400">Union</span>, feita de
          união&quot;
        </h2>
        <div className="grid grid-cols-4 auto-rows-[minmax(320px,_auto)] w-full gap-5 *:overflow-hidden relative">
          <GridItem link="Link 1" />
          <GridItem colSpan={"2"} link="Link 2" />
          <GridItem rowSpan={"2"} link="Link 3" />
          <GridItem link="Link 4" />
          <GridItem link="Link 5" />
          <GridItem link="Link 6" />
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
              saiba quem irá
              <span className="font-bold text-black"> desenvolver</span> seus
              <span className="font-bold text-black"> próximos projetos.</span>
            </p>
            <Button text="Conheça nossos Devs" />
          </div>
        </div>
      </section>
    </main>
  );
}
