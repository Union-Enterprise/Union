import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";


export default function Card({ title = "", description = "" }) {
  return (
    <section>
           
      <div className="grid grid-cols-3 gap-5 justify-center ">
        <motion.div
          className="col-span-2 w-[800px] h-[600px] bg-card-dark rounded-2xl overflow-hidden relative "
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
          }}
          >
              <div className="m-5 text-xl ">
                <motion.h1 
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="text-white pb-5 ml-10 text-6xl"
                  >
                  Facilidades
                </motion.h1>
                <motion.p
                  initial={{x: -200, opacity: 0}}
                  animate={{x: 0, opacity:1}}
                  transition={{
                  delay: 2.5,
                  ease: "easeInOut",
                  duration: 1,
                  }}
                  className="text-white pb-32 ml-10 "
                  >
                  Estamos sempre buscando <br /> novas maneiras de <br /> melhorar e inovar, garantindo <br /> que você tenha acesso <br /> às soluções mais avançadas.
                </motion.p>
                <div className="flex flex-col gap-5 px-12 ">
                    <div className="flex items-center">
                      <motion.p
                        initial={{y: -200, opacity: 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{
                          delay: 3.5,
                          duration: 1,
                          ease: "easeInOut",
                        }}
                        className=" w-[21px] h-[20px] rounded  bg-main-purple"
                      >
                        <Check className="  w-[21px] h-[20px]"/>
                      </motion.p>
                      <motion.p 
                        initial={{y: -200, opacity: 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{
                          delay: 3.5,
                          duration: 1,
                          ease: "easeInOut",
                        }}
                        className="text-main-purple text-sm ml-2"
                        >
                        Implemente novos projetos rapidamente.
                      </motion.p>
                    </div>
                    <div className="flex items-center">
                      <motion.p
                        initial={{y: -200, opacity: 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{
                          delay: 4.5,
                          duration: 1,
                          ease: "easeInOut",
                        }}
                        className=" w-[21px] h-[20px] rounded  bg-main-purple"
                        >
                        <Check className="  w-[21px] h-[20px]"/>
                      </motion.p>
                      <motion.p
                        initial={{y: -200, opacity: 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{
                          delay: 4.5,
                          duration: 1,
                          ease: "easeInOut",
                        }}
                        className="text-main-purple text-sm ml-2"
                        >
                        Não se preocupe com atualizações, estamos <br /> sempre de olho nisso para você.
                      </motion.p>
                    </div>
                    <div className="flex items-center">
                      <motion.p
                        initial={{y: -200, opacity: 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{
                          delay: 5.5,
                          duration: 1,
                          ease: "easeInOut",
                        }}
                        className=" w-[21px] h-[20px] rounded  bg-main-purple"
                        >
                        <Check className="  w-[21px] h-[20px]"/>
                      </motion.p>
                        <motion.p
                          initial={{y: -200, opacity: 0}}
                          animate={{y: 0, opacity:1}}
                          transition={{
                            delay: 5.5,
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="text-main-purple text-sm ml-2"
                          >
                          Escolha entre diversos serviços ou <br /> crie o seu totalmente personalizado.
                        </motion.p>                           
                    </div>
                    <motion.div
                      initial={{x: -200, opacity: 0}}
                      animate={{x: 0, opacity:1}}
                      transition={{
                        delay: 6,
                        duration: 1,
                        ease: "easeInOut",
                      }}
                      >
                      <Button text="Conheça a Union" />
                    </motion.div>
                </div>
              </div>
              <div className="flex flex-row justify-end items-start absolute top-0 right-0">
                <Image
                src="/card.png"
                alt="Union Logo"
                width={377}
                height={600}
                priority
                />
              </div>
          </motion.div >
          <motion.div 
            className="col-span-1 w-[407px] h-[600px] bg-back-card overflow-hidden rounded-2xl "
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
              ease: "easeInOut",
            }}
            >
            <div className="m-5">
                <motion.div
                className="text-black text-4xl"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 1,
                  ease: "easeInOut",
                }}
                >
                <span className="text-main-purple">+</span> Benefícios e
              </motion.div>
              <motion.div
                className="text-black text-4xl"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 3.5,
                  duration: 1,
                  ease: "easeInOut",
                }}
                >
                <span className="text-main-purple">-</span> Custos
                </motion.div>
            </div>
            <div className="mt-72 ">
              <motion.p
                className="text-black gap-y-5 m-5 "
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 4.5,
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
              Oferecemos soluções de alto nível a preços acessíveis, um excelente retorno sobre seu investimento, e economia de tempo e recursos.
              </motion.p>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 5,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="m-5 "
                >
                <Button text="Conheça a Union" />
              </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
