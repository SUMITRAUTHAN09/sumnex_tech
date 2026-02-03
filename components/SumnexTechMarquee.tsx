"use client";

import { techStack } from "@/data/techstack";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SumnexTechMarquee() {
  return (
    <section className="w-full bg-transparent py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mt-5">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-14 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white text-lg font-medium whitespace-nowrap"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="object-contain"
                  unoptimized
                />
                <span className="tracking-wide">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
