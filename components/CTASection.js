"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600 px-6 text-white text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Support a Loved One?
        </h2>
        <p className="text-lg mb-8">
          Join the MemoTag waitlist or request a demo to see how AI can empower dementia care.
        </p>

        {/* Simple form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full text-gray-900 w-full sm:w-80 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Join Waitlist
          </button>
        </form>
      </motion.div>
    </section>
  );
}
