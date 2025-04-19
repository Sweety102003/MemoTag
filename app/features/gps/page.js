"use client";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function GpsPage() {
  return (
    <section
      id="gps"
      className="py-20 px-6 bg-white text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">GPS & Geofencing</h2>
        <p className="text-lg text-gray-700 mb-10">
          Track the location in real time with GPS integration and set up virtual boundaries to monitor geofencing alerts.
        </p>

        <div className="flex justify-center items-center mb-10">
          <FaMapMarkedAlt size={100} className="text-blue-600" />
        </div>

        <div className="text-lg text-gray-700 mb-12">
          <h3 className="font-semibold text-blue-700">How It Works</h3>
          <p>
            MemoTag leverages GPS technology to track the user's location in real time. Additionally, geofencing alerts notify caregivers when the user exits or enters predefined areas.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-blue-700 mb-6">Key Benefits</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Real-time GPS location tracking.</li>
          <li>Geofencing alerts for boundary monitoring.</li>
          <li>Help caregivers monitor the safety and movements of their loved ones.</li>
          <li>Active heatmaps for efficient tracking over time.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-6">Why Choose MemoTag?</h3>
        <p className="text-lg text-gray-700">
          MemoTag’s GPS & Geofencing feature provides real-time location monitoring, giving caregivers peace of mind knowing the exact location and movements of their loved ones.
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
