"use client";
import { motion } from "framer-motion";
import { FaDumbbell } from "react-icons/fa";

export default function ActivitiesPage() {
  return (
    <section
      id="activities"
      className="py-20 px-6 bg-white text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">MiniCog Activities & Exercises</h2>
        <p className="text-lg text-gray-700 mb-10">
          Cognitive-level-based exercises to enhance memory and mental agility. Customizable and app-driven activities designed for dementia care.
        </p>

        <div className="flex justify-center items-center mb-10">
          <FaDumbbell size={100} className="text-blue-600" />
        </div>

        <div className="text-lg text-gray-700 mb-12">
          <h3 className="font-semibold text-blue-700">How It Works</h3>
          <p>
            MemoTag offers cognitive exercises that are tailored to the user's mental state and progression. These exercises, driven by vocal prompts or app-based instructions, are designed to keep the brain active and engaged.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-blue-700 mb-6">Key Benefits</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Tailored cognitive exercises based on mental abilities.</li>
          <li>Voice and app-based instructions for accessibility.</li>
          <li>Helps improve memory, focus, and mental agility.</li>
          <li>Adjustable difficulty levels to suit individual needs.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-6">Why Choose MemoTag?</h3>
        <p className="text-lg text-gray-700">
          MiniCog Activities & Exercises is designed to stimulate cognitive functions, improve mental clarity, and keep users engaged in meaningful mental exercises.
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Back to Features
          </a>
        </div>
      </motion.div>
    </section>
  );
}
