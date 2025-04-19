"use client";
import { useState } from "react";

export default function CTASection() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    signingFor: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/join-waitlist", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.success) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", signingFor: "" });
      setTimeout(() => {
        setStatus("");
        setShowModal(false);
      }, 2000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="cta"
      className="py-20 bg-blue-600 px-6 text-white text-center relative z-10"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to Support a Loved One?</h2>
        <p className="text-lg mb-8">
          Join the MemoTag waitlist or request a demo to see how AI can empower dementia care.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Join Waitlist
        </button>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black rounded-xl p-8 w-full max-w-md relative shadow-xl animate-fade-in">
              {/* Close Button */}
              <button
                className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-600"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>

              <h3 className="text-xl font-semibold mb-4 text-center text-blue-700">
                Join the Waitlist
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="px-4 py-2 rounded border border-gray-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="px-4 py-2 rounded border border-gray-300"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="px-4 py-2 rounded border border-gray-300"
                />
                <select
                  name="signingFor"
                  value={formData.signingFor}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 rounded border border-gray-300"
                >
                  <option value="">Who are you signing up for?</option>
                  <option value="myself">Myself</option>
                  <option value="child">My Child</option>
                  <option value="family">A Family Member</option>
                  <option value="other">Someone Else</option>
                </select>

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </form>

              {status === "success" && (
                <p className="mt-4 text-green-500 text-center">
                  You're on the waitlist 🎉
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-500 text-center">
                  Something went wrong. Try again.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
