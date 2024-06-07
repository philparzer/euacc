"use client"

import { motion } from "framer-motion";

const DecentralizedAnimation = () => {
  // Array to hold individual animation settings for each circle
  const animations = [
    { x: [0, 5, -2, 0], y: [0, -5, 2, 0], opacity: [1, 0.5, 0.8, 1] },
    { x: [0, -5, 2, 0], y: [0, 5, -2, 0], opacity: [1, 2, 0.5, 1] },
    { x: [0, 3, -1, 0], y: [0, -3, 1, 0], opacity: [1, 0.95, 0.9, 1] },
    { x: [0, -3, 1, 0], y: [0, 2, -1, 0], opacity: [1, 0.6, 0.7, 1] },
    { x: [0, 4, -1, 0], y: [0, -4, 1, 0], opacity: [1, 0.85, 0.75, 1] },
    { x: [0, -4, 1, 0], y: [0, 4, -1, 0], opacity: [0.5, 0.45, 0.8, 1] },
    { x: [0, 2, -0.5, 0], y: [0, 2, 0.5, 0], opacity: [0.8, 0.75, 1, 0.8] },
    { x: [0, -2, -6, 0], y: [0, 2, 1, 0], opacity: [1, 0.92, 0.95, 1] }
  ];

  return (
    <div className="flex justify-center">
      <svg
        className="w-[80%]"
        viewBox="0 0 262 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {animations.map((anim, index) => (
          <motion.circle
            key={index}
            cx={[166.423, 207.404, 185.701, 89.715, 9.2511, 55.4838, 128.088, 253.238][index]}
            cy={[19.5574, 19.5574, 41.6136, 13.3192, 19.5574, 30.5854, 27.8284, 8.52918][index]}
            r="8.27112"
            fill="#FFDD00"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={anim}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              duration: Math.random() * 2 + 2,
              delay: Math.random() * 4
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default DecentralizedAnimation;
