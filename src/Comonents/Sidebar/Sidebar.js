import React, { useState } from "react";
import Links from "./Links/Links";
import ToggleButton from "./ToggeleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variant = {
    open: {
      clipPath: "circle(1200px at 50px 30px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    close: {
      clipPath: "circle(20px at 48px 25px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "close"}
      className="flex flex-col items-center justify-center bg-white text-black"
    >
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50"
        variants={variant}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
