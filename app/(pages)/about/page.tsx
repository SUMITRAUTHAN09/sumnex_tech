"use client";

import About from "@/components/about";
import BackgroundLines from "@/components/backgroundLines";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-gray-300 dark:bg-black overflow-x-hidden">
      
      {/* BACKGROUND (slow fade-in) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <BackgroundLines />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10">
        
        {/* HEADER – slide from top */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        {/* ABOUT – fade + slide from bottom */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <About />
        </motion.div>

        {/* FOOTER – fade-in */}
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
