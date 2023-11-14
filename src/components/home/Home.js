"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/constants/animation";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex justify-center items-center"
    >
      <motion.div
        className="relative text-center flex-1"
        initial="offscreen"
        whileInView="onscreen"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          variants={fadeIn}
          className="font-bold font-title text-black/[.87] dark:text-white/[.87] text-2xl md:text-4xl mb1 md:mb-2"
        >
          {"Hello, I'm"}
        </motion.div>
        <motion.h1
          variants={fadeIn}
          className="font-extrabold font-title text-black/[.87] dark:text-white/[.87] text-5xl md:text-7xl mb-2 md:mb-4"
        >
          Jonet
        </motion.h1>
        <motion.div variants={fadeIn} className="text-base md:text-xl">
          {"I'm a Software Engineer"}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
