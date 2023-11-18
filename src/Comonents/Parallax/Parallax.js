import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div
      className="h-full w-full relative flex justify-center items-center overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "service"
            ? "linear-gradient(180deg , #111132 , #0c0c1d)"
            : "linear-gradient(180deg , #111132 , #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} className="text-[80px] ">{type === "service" ? "What We Do ?" : "What We Did ?"}</motion.h1>
      <motion.div className="bg-mountain bg-cover bg-bottom h-full w-full absolute z-20 "></motion.div>
      <motion.div
        style={{ y: yBg }}
        className={`bg-cover bg-bottom h-full w-full absolute z-10 ${type === "service" ? "bg-planet" : "bg-sun"
          }`}
      ></motion.div>

      <motion.div style={{ x: yBg }} className="bg-stars bg-cover bg-bottom h-full w-full absolute z-0 "></motion.div>
    </div>
  );
};

export default Parallax;
