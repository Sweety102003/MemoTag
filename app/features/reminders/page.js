"use client";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";

export default function RemindersPage() {
  return (
    <section
      id="reminders"
      className="py-20 px-6 bg-white text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Reminders & Alerts</h2>
        <p className="text-lg text-gray-700 mb-10">
          Stay on top of daily tasks with customizable vocalized reminders. Keep track of appointments, medications, and other important events effortlessly.
        </p>

        <div className="flex justify-center items-center mb-10">
          <FaBell size={100} className="text-blue-600" />
        </div>

        <div className="text-lg text-gray-700 mb-12">
          <h3 className="font-semibold text-blue-700">How It Works</h3>
          <p>
            MemoTag allows users to set up customizable reminders that can be vocalized to them through smart wearables or mobile devices. With adjustable settings for time, frequency, and alerts, this feature ensures you never forget important tasks.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-blue-700 mb-6">Key Benefits</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Customizable alerts for various tasks.</li>
          <li>Voice-based reminders for accessibility.</li>
          <li>Easy integration with wearables for seamless notifications.</li>
          <li>Flexible settings to meet individual needs.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-6">Why Choose MemoTag?</h3>
        <p className="text-lg text-gray-700">
          Whether you’re helping a loved one with dementia or just want to stay organized, MemoTag’s Reminders & Alerts feature ensures you’re always on top of your schedule with minimal effort.
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
