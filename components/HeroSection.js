"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-lightblue text-center md:text-left px-6 py-20 gap-10 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30"
        initial={{ x: 0, y: 0 }}
        animate={{ x: "calc(100vw - 16rem)", y: "calc(100vh - 16rem)" }}
        transition={{ duration: 6, loop: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-100">
          <img
            src="/hero-animation-placeholder.svg"
            alt="AI animation"
            className="w-full h-full object-contain "
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
          AI for <span className="text-blue-600">Dementia Care</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Empowering caregivers with smart tools to track, support, and improve
          cognitive well-being.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition">
            Request a Demo
          </button>
          <a
            href="https://chat.whatsapp.com/BZoTOHxrdJpH8ENZjd6Pcg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-50 transition"
          >
            <FaWhatsapp className="text-xl" />
            Join WhatsApp Community
          </a>
        </div>
      </motion.div>
    </section>
  );
}
