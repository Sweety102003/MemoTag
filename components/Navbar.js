"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", target: "#hero" },
    { label: "Problem", target: "#problem" },
    { label: "Solution", target: "#solution" },
    { label: "Traction", target: "#traction" },
    { label: "Get Started", target: "#cta" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-1/2 -translate-x-1/2 mt-4 w-[95%] max-w-6xl z-50 bg-white shadow-lg rounded-4xl backdrop-blur-sm border border-gray-200"
    >
      <div className="px-6 py-3  flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            MemoTag
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.target}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://chat.whatsapp.com/BZoTOHxrdJpH8ENZjd6Pcg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="text-lg" />
            <span className="text-sm font-semibold">Join WhatsApp</span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-2xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-4 rounded-b-2xl space-y-3 transition-all duration-300">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.target}
              className="block text-gray-700 font-medium hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://chat.whatsapp.com/BZoTOHxrdJpH8ENZjd6Pcg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
            onClick={() => setIsOpen(false)}
          >
            <FaWhatsapp />
            Join WhatsApp
          </a>
        </div>
      )}
    </motion.nav>
  );
}
