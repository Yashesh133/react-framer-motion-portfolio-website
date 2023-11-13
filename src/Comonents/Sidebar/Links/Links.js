import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const item = ["HomePage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div
      className="absolute w-full h-full flex flex-col justify-center items-center gap-4"
      variants={variants}
    >
      {item.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          className="text-4xl"
          variants={itemVariants}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.3 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
