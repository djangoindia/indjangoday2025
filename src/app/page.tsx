"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative z-50">
      <motion.div className="absolute top-[-50%] translate-y-1/2 translate-x-1/2 left-[-50%] w-1/2 h-1/2">
        <Image
          src="/mandala.svg"
          fill
          alt="Mandal"
          className="animate-[spin_10s_linear_infinite]"
        />
      </motion.div>
      <div className="container mx-auto h-full flex gap-4 flex-col justify-center font-black text-5xl md:text-7xl lg:text-9xl text-[#06038D] items-center">
        <div>
          {"Django Day".split("").map((letter, i) => (
            <motion.button
              key={letter + i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {letter === " " ? <span>&nbsp;</span> : letter}
            </motion.button>
          ))}
        </div>
        <div>
          {"INDIA".split("").map((letter, i) => (
            <motion.button
              key={letter + i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn({
                "text-orange-500": i <= 1,
                "text-green-500": i >= 3,
              })}
            >
              {letter}
            </motion.button>
          ))}
        </div>
        <div>
          {"2025".split("").map((letter, i) => (
            <motion.button
              key={letter + i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {letter}
            </motion.button>
          ))}
        </div>
        <h2 className="animate-bounce text-3xl md:text-6xl mt-10">
          Coming Soon
        </h2>
      </div>
      <motion.div className="absolute top-[50%] translate-y-1/2 translate-x-1/2 left-[50%] w-1/2 h-1/2">
        <Image
          src="/mandala.svg"
          fill
          alt="Mandal"
          className="animate-[spin_10s_linear_infinite]"
        />
      </motion.div>
    </div>
  );
};

export default Home;
