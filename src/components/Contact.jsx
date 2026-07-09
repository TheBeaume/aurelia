import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import siteConfig from "../data/siteConfig";

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
              <h3 className="flex items-center gap-3 text-xl font-semibold">
                <FaPhoneAlt style={{ color: "var(--accent)" }} />
                Phone
              </h3>

              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-2 block text-zinc-400 hover:text-white"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center gap-3 text-xl font-semibold">
                <FaEnvelope style={{ color: "var(--accent)" }} />
                Email
              </h3>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-zinc-400 hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center gap-3 text-xl font-semibold">
                <FaMapMarkerAlt style={{ color: "var(--accent)" }} />
                Address
              </h3>

              <p className="mt-2 text-zinc-400">
                {siteConfig.address}
              </p>
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold transition hover:scale-105"
              style={{
                background: "var(--accent)",
                color: "#000",
              }}
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 flex items-center justify-center">
            <p className="text-zinc-500 text-center">
              Google Maps Embed will be added here
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
