"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Have an idea or looking to build a website? Get in touch with Sumnex
          Tech and let’s bring your vision to life.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-800 rounded-2xl p-8 shadow-xl space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 text-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            placeholder="Enter your contact number"
            className="w-full border border-gray-300 rounded-lg text-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Inquiry Type
          </label>
          <select className="w-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black">
            <option>General Inquiry</option>
            <option>Interested in Website</option>
            <option>Project Idea / Requirement</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message / Idea / Requirement
          </label>
          <textarea
            rows={5}
            placeholder="Describe your idea or requirement..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold tracking-wide hover:bg-green-900 transition"
        >
          Submit Inquiry
        </motion.button>
      </motion.form>
    </section>
  );
}
