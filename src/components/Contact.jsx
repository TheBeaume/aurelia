import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Contact Us
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Let's Make You Look Amazing
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">

            <div className="mb-8">
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--accent)" }}
              >
                <FaPhoneAlt className="inline mr-3" />
                Phone
              </h3>
              <p className="mt-2 text-zinc-400">
                +91 98765 43210
              </p>
            </div>

            <div className="mb-8">
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--accent)" }}
              >
                <FaEnvelope className="inline mr-3" />
                Email
              </h3>
              <p className="mt-2 text-zinc-400">
                hello@aurelia.com
              </p>
            </div>

            <div className="mb-8">
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--accent)" }}
              >
                <FaMapMarkerAlt className="inline mr-3" />
                Address
              </h3>
              <p className="mt-2 text-zinc-400">
                123 Luxury Street, Downtown
              </p>
            </div>

            <button
              className="mt-4 flex items-center gap-3 rounded-full px-8 py-4 font-semibold"
              style={{
                background: "var(--accent)",
                color: "#000",
              }}
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </button>

          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
            <div className="flex h-full min-h-[350px] items-center justify-center rounded-2xl border border-dashed border-white/20 text-zinc-500">
              Google Maps Placeholder
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
