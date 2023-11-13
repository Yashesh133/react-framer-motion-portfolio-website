import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero relative">
      <div className="max-w-screen-lg m-auto h-full">
        <motion.div
          className="h-full flex flex-col justify-center gap-10 w-6/12"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-3xl text-[#663399]" variants={textVariant}>
            YASHESH THUMMAR
          </motion.h2>
          <motion.h3 className="text-7xl" variants={textVariant}>
            MERN STACK DEVELOPER & Front-End Developer
          </motion.h3>
          <div>
            <motion.button
              variants={textVariant}
              className="p-2 border rounded-xl m-1 bg-transparent text-white cursor-pointer font-bold"
            >
              Check CV
            </motion.button>
            <motion.button
              variants={textVariant}
              className="p-2 border rounded-xl m-1 bg-white text-black cursor-pointer font-bold"
            >
              Contact US
            </motion.button>
          </div>
          <motion.img
            variants={textVariant}
            animate={"scrollButton"}
            className="w-[50px]"
            src={require("../../assets/scroll.png")}
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        className="absolute text-[300px] -bottom-28 whitespace-nowrap text-[#ffffff09] w-6/12"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        React JS Developer
      </motion.div>
      <div className="h-screen absolute top-0 right-20">
        <img className="h-full" src={require("../../assets/hero.png")} />
      </div>
    </div>
  );
};

export default Hero;
