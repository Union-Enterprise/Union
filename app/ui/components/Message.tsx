
import { MotionConfig, motion } from "framer-motion"
import Button from "./Button"
export default function Message(){
    return(
      <section className="bg-dark-gray w-full px-[100px] pt-[100px] pb-[50px] h-[1024px] overflow-hidden">
      <div className="flex flex-row gap-5 m-3 pt-7 col-span-2">
        <div className="flex flex-col gap-5">
          <motion.p
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-white text-8xl flex items-center pb-8 font-bold"
          >
            Como  podemos te  ajudar hoje?
          </motion.p>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-zinc-300 font-bold"
          >
            Nossa equipe está ansiosa para te ajudar a criar um futuro incrível  de novas possibilidades. Se tiver alguma dúvida,  sinta-se livre para acessar nossa página de FAQs, basta clicar no botão logo abaixo.
          </motion.p>
        
          <Button text="Ver FAQs" animate={true} />
        </div>
        <div className="flex flex-col justify-end items-start pl-32">
          <div className="grid grid-cols-2 gap-5">
            <motion.div
               initial={{ x: -200, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
                 delay: 2 ,
                 duration: 1,
                 ease: "easeInOut",
               }}
               className=" border border-gray-600 rounded-md h-14 w-[286px] text-sm relative focus-within:border-main-purple "
            >
              <input type="text" className="w-full h-full px-4 pt-3 outline-none bg-transparent text-white rounded-md focus-within:border-main-purple peer focus:placeholder-main-purple" placeholder="Nome" autoComplete="off" />
            </motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 3,
                duration: 1,
                ease: "easeInOut",
              }}
              className=" border border-gray-600 rounded-md h-14 w-[280px] text-sm relative focus-within:border-main-purple "
            >
              <input type="text" className="w-full h-full px-4 pt-3 outline-none bg-transparent text-white rounded-md focus-within:border-main-purple peer focus:placeholder-main-purple" placeholder="Sobrenome" autoComplete="off" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 3.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className=" border border-gray-600 rounded-md h-14 w-[581px] text-sm relative focus-within:border-main-purple "
            >
              <input type="text" className="w-full h-full px-4 pt-3 outline-none bg-transparent text-white rounded-md focus-within:border-main-purple peer focus:placeholder-main-purple" placeholder="Email da Empresa" autoComplete="off" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            <motion.div
               initial={{ x: -200, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
                 delay: 4,
                 duration: 1,
                 ease: "easeInOut",
               }}
               className=" border border-gray-600 rounded-md h-14 w-[581px] text-sm relative focus-within:border-main-purple "
            >
              <input type="text" className="w-full h-full px-4 pt-3 outline-none bg-transparent text-white rounded-md focus-within:border-main-purple peer focus:placeholder-main-purple" placeholder="Tópico" autoComplete="off" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 4.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className=" border border-gray-600 rounded-md h-[300px] w-[581px] text-sm relative focus-within:border-main-purple "
            >
            <input type="text" className="w-full h-full px-4 pt-3 outline-none bg-transparent text-white rounded-md focus-within:border-main-purple peer focus:placeholder-main-purple pb-[260px]" placeholder="Menssagem" autoComplete="off" />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-5 pt-5 "
          >
          <Button  text="Enviar"  />
          </motion.div>
        </div>
      </div>
    </section>
    )
}