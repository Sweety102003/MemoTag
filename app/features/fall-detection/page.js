"use client";
import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";

export default function FallDetectionPage() {
  return (
    <section
      id="fall-detection"
      className="py-20 px-6 bg-white text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">3-Axis Fall Detection</h2>
        <p className="text-lg text-gray-700 mb-10">
          Real-time monitoring to identify falls, monitor jerks, and alert caregivers instantly.
        </p>

        <div className="flex justify-center items-center mb-10">
          <FaHeartbeat size={100} className="text-blue-600" />
        </div>

        <div className="text-lg text-gray-700 mb-12">
          <h3 className="font-semibold text-blue-700">How It Works</h3>
          <p>
            Using sensors integrated into wearables, MemoTag’s 3-Axis Fall Detection feature can detect sudden movements, including falls or jerks, and immediately send an alert to caregivers or loved ones.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-blue-700 mb-6">Key Benefits</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Instant alerts for falls and sudden movements.</li>
          <li>Real-time monitoring of the user's physical state.</li>
          <li>Accurate 3-axis detection for improved fall detection accuracy.</li>
          <li>Helps caregivers respond immediately in case of an emergency.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-6">Why Choose MemoTag?</h3>
        <p className="text-lg text-gray-700">
          MemoTag’s Fall Detection ensures peace of mind by alerting caregivers instantly when a fall occurs, allowing them to respond quickly and effectively.
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
