"use client";
import { motion } from "framer-motion";
import { FaBrain, FaHeartbeat, FaMobileAlt, FaChartLine } from "react-icons/fa";

export default function SolutionSection() {
  const features = [
    {
      icon: <FaBrain size={36} className="text-blue-600" />,
      title: "Cognitive Tracking",
      desc: "Monitor memory, attention, and mood through interactive tests and analysis.",
    },
    {
      icon: <FaHeartbeat size={36} className="text-red-500" />,
      title: "Physical Monitoring",
      desc: "Track activity, heart rate, and sleep with wearable integration.",
    },
    {
      icon: <FaMobileAlt size={36} className="text-green-600" />,
      title: "Caregiver Alerts",
      desc: "Get real-time alerts and personalized care suggestions.",
    },
    {
      icon: <FaChartLine size={36} className="text-purple-600" />,
      title: "Progress Insights",
      desc: "Visual dashboards to track cognitive and physical changes over time.",
    },
  ];

  return (
    <section className="py-20 bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          How MemoTag Works
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          MemoTag combines AI-powered assessments, wearable data, and smart alerts to support dementia care.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
