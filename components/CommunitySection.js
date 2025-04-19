import { FaWhatsapp } from "react-icons/fa";

export default function CommunitySection() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Want to Stay in the Loop?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join our WhatsApp Community to get early updates, caregiver tips, and news about MemoTag.
        </p>

        <a
          href="https://chat.whatsapp.com/BZoTOHxrdJpH8ENZjd6Pcg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-medium px-6 py-3 rounded-full transition"
        >
          <FaWhatsapp size={24} />
          Join WhatsApp Community
        </a>
      </div>
    </section>
  );
}
