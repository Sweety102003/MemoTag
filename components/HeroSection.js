"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          AI for Dementia Care
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Empowering caregivers with AI tools to track, support, and improve cognitive well-being.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Request a Demo
        </button>

        <div className="mt-10">
          <img
            src="/hero-animation-placeholder.svg"
            alt="AI animation"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
