"use client";

import { motion } from "framer-motion";

const WithEuAnimation = () => {
  return (
    <div className="relative flex w-full justify-center">
      <motion.div
      animate={{
        opacity: [0, 0, 0.2, 0.2],
        transition: {
          times: [0, 0.8, 0.9, 1],
          duration: 2,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",  
        },
      }}
      className="absolute w-[66px] h-[66px] translate-x-[-50%] top-0 left-[50%] bg-eu-yellow">

      </motion.div>
      <motion.div
        animate={{
          translateX: [-20, -20, 0, 0],
          transition: {
            times: [0, 0.5, 0.8, 1],
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",  
          },
        }}
        className="h-[66px] w-[33px] border-4 border-eu-yellow border-r-0"
      ></motion.div>
      <motion.div
        animate={{
          translateX: [20, 20, 0, 0],
          transition: {
            times: [0, 0.5, 0.8, 1],
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="h-[66px] w-[33px] border-4 border-eu-yellow border-l-0"
      ></motion.div>
    </div>
  );
};

export default WithEuAnimation;
