import { useState } from "react";
import { motion } from "framer-motion";

interface FormInputGroupProps {
  label?: string;
  isTextArea?: boolean;
  delayTime?: number;
  name?: string;
}

export default function FormInputGroup({
  label = "",
  isTextArea = false,
  delayTime = 2,
  name = "",
}: FormInputGroupProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: delayTime,
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex relative items-center"
    >
      {isTextArea ? (
        <textarea
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          cols={30}
          rows={10}
          className="w-full resize-none py-4 bg-transparent border-0 border-transparent border-b-2 border-white outline-none focus:border-main-purple focus:rounded-md peer opacity-80 focus:opacity-100"
        ></textarea>
      ) : (
        <input
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          className="w-full py-4 bg-transparent border-0 border-transparent border-b-2 border-white outline-none focus:border-main-purple focus:rounded-md peer opacity-80 focus:opacity-100"
          autoComplete="off"
        />
      )}
      <label
        className={`${
          isTextArea ? "top-2" : ""
        } text-xl opacity-80 peer-focus:opacity-100 peer-focus:-translate-y-12 absolute duration-500 pointer-events-none ${
          inputValue ? "-translate-y-12" : ""
        }`}
      >
        {label}
      </label>
    </motion.div>
  );
}
