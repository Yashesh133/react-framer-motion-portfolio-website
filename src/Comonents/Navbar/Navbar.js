import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="h-[100px]">
      {/* sidebar */}
      <Sidebar />
      {/* navbar */}
      <div className="h-[50%] max-w-screen-lg m-auto flex justify-between items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl"
        >
          yashu devv.
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-5"
        >
          <a href="#">
            <img
              className="w-4 m-4"
              src={require("../../assets/facebook.png")}
            />
          </a>
          <a href="#">
            <img
              className="w-4 m-4"
              src={require("../../assets/youtube.png")}
            />
          </a>
          <a href="#">
            <img
              className="w-4 m-4"
              src={require("../../assets/instagram.png")}
            />
          </a>
          <a href="#">
            <img
              className="w-4 m-4"
              src={require("../../assets/dribbble.png")}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
