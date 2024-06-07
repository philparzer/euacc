"use client";

import { motion } from "framer-motion";

const LeftRightAnimation = () => {
  return (
    <div className="relative h-2 w-full">
      <motion.div
        animate={{
          translateX: ["0%", "100%", "0%"],
          transition: {
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className="absolute -top-6 w-[94%]"
      >
        <motion.svg
          animate={{
            rotate: [0, 0, 180, 180],
            transition: {
              times: [0, 0.46, 0.5, 1],
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
        >
          <path
            d="M12.1132 0L23.2735 19.3303H0.952827L12.1132 0Z"
            fill="#FFDD00"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        animate={{
          opacity: [1, 1, 0.5, 0.5],
          transition: {
            times: [0, 0.46, 0.5, 1],
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="absolute left-0 top-0 h-1.5 w-[49%] bg-eu-yellow"
      ></motion.div>
      <motion.div
        animate={{
          opacity: [0.5, 0.5, 1, 1],
          transition: {
            times: [0, 0.46, 0.5, 1],
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="absolute right-0 top-0 h-1.5 w-[49%] bg-eu-yellow"
      ></motion.div>
    </div>
  );
};

export default LeftRightAnimation;
