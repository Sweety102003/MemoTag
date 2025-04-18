"use client";
import { motion } from "framer-motion";

export default function TractionSection() {
  const tractionData = [
    {
      stat: "10,000+",
      label: "Caregivers signed up",
    },
    {
      stat: "20+",
      label: "Healthcare partnerships",
    },
    {
      stat: "95%",
      label: "Caregiver satisfaction rate",
    },
    {
      stat: "25%",
      label: "Faster dementia recognition in trials",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Proven Impact
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          MemoTag is already making a difference. Here's how we're helping.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {tractionData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-blue-600">{item.stat}</h3>
              <p className="text-gray-700 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
