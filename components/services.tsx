"use client";

import { services } from "@/data/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At Sumnex Tech, we provide end-to-end web development services using
          modern technologies to deliver scalable, secure, and high-performance
          digital solutions.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-white transition group"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-black">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {service.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
