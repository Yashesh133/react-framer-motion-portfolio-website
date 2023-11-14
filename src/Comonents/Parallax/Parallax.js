import React from "react";
import { motion } from "framer-motion"

const Parallax = ({ type }) => {
  return (
    <div
      className="h-full w-full relative flex justify-center items-center"
      style={{
        background:
          type === "service"
            ? "linear-gradient(180deg , #111132 , #0c0c1d)"
            : "linear-gradient(180deg , #111132 , #505064)",
      }}
    >
      <motion.h1 className="text-[80px]">{type === "service" ? "What We Do ?" : "What We Did ?"}</motion.h1>
      <motion.div className="bg-mountain bg-cover bg-bottom h-full w-full absolute"></motion.div>
      <motion.div className="bg-planet bg-cover bg-bottom h-full w-full absolute"></motion.div>
      <motion.div className="bg-stars bg-cover bg-bottom h-full w-full absolute"></motion.div>
    </div>
  );
};

export default Parallax;
