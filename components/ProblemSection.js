"use client";
import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 mt-0  bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          The Dementia Diagnosis Gap
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Over 55 million people live with dementia worldwide. Early detection is rare,
          and caregivers lack tools to monitor cognitive and physical decline in real-time.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <StatCard number="55M+" label="People with dementia globally" />
          <StatCard number="3 in 4" label="Cases go undiagnosed" />
          <StatCard number="90%" label="Caregivers report stress from lack of tools" />
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-6"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-3xl font-bold text-blue-600">{number}</h3>
      <p className="text-gray-700 mt-2">{label}</p>
    </motion.div>
  );
}
