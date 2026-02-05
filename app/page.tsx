"use client";

import BackgroundLines from "@/components/backgroundLines";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Header from "@/components/header";
import Hero from "@/components/hero";
import SumnexTechMarquee from "@/components/SumnexTechMarquee";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gray-300 dark:bg-black overflow-x-hidden">

      {/* BACKGROUND – slow fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
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

        {/* MARQUEE – fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <SumnexTechMarquee />
        </motion.div>

        {/* HERO – scale + fade */}
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        {/* GRID – reveal on scroll */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Grid />
        </motion.div>

        {/* CONTACT FORM – smooth rise */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <ContactForm />
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
