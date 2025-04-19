"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaBell, FaMapMarkedAlt, FaHeartbeat, FaDumbbell } from "react-icons/fa";

export default function SolutionSection() {
const router=useRouter();
  const features = [
    {
      icon: <FaBell size={36} className="text-blue-600" />,
      title: "Reminders & Alerts",
      desc: "Keep track of daily tasks with customizable vocalized reminders...",
      readMoreLink: "/features/reminders",
    },
    {
      icon: <FaHeartbeat size={36} className="text-blue-600" />,
      title: "3-Axis Fall Detection",
      desc: "Real-time monitoring to identify falls, monitor jerks...",
      readMoreLink: "/features/fall-detection",
    },
    {
      icon: <FaMapMarkedAlt size={36} className="text-blue-600" />,
      title: "GPS & Geofencing",
      desc: "Tracking with active heatmaps and geofencing alerts...",
      readMoreLink: "/features/gps",
    },
    {
      icon: <FaDumbbell size={36} className="text-blue-600" />,
      title: "MiniCog Activities & Exercises",
      desc: "Cognitive-level-based vocal and app-driven exercises...",
      readMoreLink: "/features/activities",
    },
  ];

  return (
    <section
      id="solution"
      className="py-20 px-6 bg-white text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">How MemoTag Works</h2>
        <p className="text-lg text-gray-700 mb-12">
          MemoTag leverages AI, wearables, and voice assistance to deliver powerful dementia care tools — all in one place.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 text-blue-600">{f.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-700">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <span
                onClick={()=>router.push(f.readMoreLink)}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300"
              >
                Read More →
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
