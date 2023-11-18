import React from "react";
import { motion } from "framer-motion";

const variant = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
    Transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    Transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="bg-gradient-to-t from-#0c0c1d via-#111132 h-full flex flex-col justify-between"
      variants={variant}
      initial="initial"
      whileInView={"animate"}
    >
      <motion.div
        className="flex-[1] self-end flex items-center gap-3"
        variants={variant}
      >
        <p className="text-gray-50 font-medium text-lg text-right">
          I Focus on helping your brand grow
          <br />
          and more forward
        </p>
        <hr className="w-[450px] border-t-2 border-color-rgb(105, 105, 105)" />
      </motion.div>
      <motion.div
        className="flex-[2] flex flex-col items-center"
        variants={variant}
      >
        <div className="flex gap-4 items-center">
          <img
            className="h-[80px] w-[300px] rounded-[50px] object-cover"
            src={require("../../assets/people.webp")}
            alt="people"
          />
          <h1 className="text-[70px] font-thin">
            <b className="font-semibold">Unique</b> Ideas
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-[70px] font-thin">
            <b className="font-semibold">For Your</b> Business
          </h1>
          <button className="h-[80px] w-[300px] rounded-[50px] bg-yellow-400 text-4xl cursor-pointer text-black">
            What We Do?
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex-[2] flex max-w-screen-lg m-auto"
        variants={variant}
      >
        <motion.div
          className="p-14 border flex flex-col"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2 className="text-2xl font-medium py-3.5">Branding</h2>
          <p className="py-2.5">
            “Lorem ipsum” dummy text is used by many web-developers to test how
            their HTML templates will look with real data. Often, developers use
            third-party services to generate “Lorem ipsum” text, but now you can
            do that right in your editor. Just expand lorem or abbreviations to
            get the following snippet:
          </p>
          <button className="bg-yellow-500 py-2.5 my-2.5 text-black font-semibold text-xl rounded-[50px] cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          className="p-14 border flex flex-col"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2 className="text-2xl font-medium py-3.5">Branding</h2>
          <p className="py-2.5">
            “Lorem ipsum” dummy text is used by many web-developers to test how
            their HTML templates will look with real data. Often, developers use
            third-party services to generate “Lorem ipsum” text, but now you can
            do that right in your editor. Just expand lorem or abbreviations to
            get the following snippet:
          </p>
          <button className="bg-yellow-500 py-2.5 my-2.5 text-black font-semibold text-xl rounded-[50px] cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          className="p-14 border flex flex-col"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2 className="text-2xl font-medium py-3.5">Branding</h2>
          <p className="py-2.5">
            “Lorem ipsum” dummy text is used by many web-developers to test how
            their HTML templates will look with real data. Often, developers use
            third-party services to generate “Lorem ipsum” text, but now you can
            do that right in your editor. Just expand lorem or abbreviations to
            get the following snippet:
          </p>
          <button className="bg-yellow-500 py-2.5 my-2.5 text-black font-semibold text-xl rounded-[50px] cursor-pointer">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
