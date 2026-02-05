"use client";

import BackgroundLines from "@/components/backgroundLines";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-gray-300 dark:bg-black overflow-x-hidden">

      {/* BACKGROUND – subtle fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <BackgroundLines />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER – slide down */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        {/* PROJECTS – fade + rise on scroll */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Projects />
        </motion.div>

        {/* FOOTER – simple fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Footer />
        </motion.div>

      </div>
    </main>
  );
}
