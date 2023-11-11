"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { fadeIn } from "@/constants/animation";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="w-full pt-24 pb-12">
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
          Contact
        </motion.h1>
        <motion.div variants={fadeIn} className="text-base md:text-xl">
          Send me anything, critics, advices, or just some random messages.
        </motion.div>
      </motion.div>
      <motion.div
        className="max-w-lg mx-auto py-14 px-8 rounded-xl overflow-hidden shadow-02dp bg-white/50 dark:bg-dark-02dp"
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <ContactForm />
        <div className="text-center mt-6">
          Or contact me through{" "}
          <Link href="#" className="text-blue-600 dark:text-blue-500 underline">
            Email
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
