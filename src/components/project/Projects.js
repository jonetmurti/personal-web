"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { projects } from "@/constants/project";
import { fadeIn } from "@/constants/animation";

const Projects = () => {
  return (
    <section id="projects" className="w-full pt-24 pb-12">
      <motion.div
        className="mb-16 gap-6 text-center"
        initial="offscreen"
        whileInView="onscreen"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <motion.h1
          variants={fadeIn}
          className="font-extrabold font-title text-black/[.87] dark:text-white/[.87] text-5xl md:text-7xl mb-2 md:mb-4"
        >
          Projects
        </motion.h1>
        <motion.div variants={fadeIn} className="text-base md:text-xl">
          Here are several of my projects. For more projects, see my{" "}
          <a
            href="https://github.com/jonetmurti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 underline"
          >
            GitHub
          </a>
          !
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-12 justify-center gap-6">
        {projects.map((project, index, arr) => {
          let lgCol = "lg:col-span-4";
          if (index === arr.length - 1 && arr.length % 3 === 1) {
            lgCol = "lg:col-start-5 lg:col-span-4";
          } else if ((index === 0 || index === 1) && arr.length % 3 === 2) {
            lgCol = "lg:col-span-6";
          }

          let smCol = "sm:col-span-6";
          if (index === 0 && arr.length % 2 === 1) {
            smCol = "sm:col-span-12";
          }

          return (
            <motion.div
              key={project?.name || index}
              variants={fadeIn}
              viewport={{ once: true }}
              initial="offscreen"
              whileInView="onscreen"
              className={`col-span-12 ${smCol} ${lgCol}`}
            >
              <Card project={project} className="h-full" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
