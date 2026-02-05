"use client";

import BackgroundLines from "@/components/backgroundLines";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-gray-300 dark:bg-black overflow-x-hidden">

      {/* BACKGROUND – soft fade */}
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
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        {/* SERVICES – rise + fade on scroll */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Services />
        </motion.div>

        {/* FOOTER – subtle fade */}
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
