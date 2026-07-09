import { Link } from "react-router-dom";
import siteConfig from "../data/siteConfig";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">

        <div>
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--accent)" }}
          >
            {siteConfig.salonName}
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            {siteConfig.tagline}
            <br />
            Crafted for modern salons, beauty studios and wellness brands.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">
            Quick Links
          </h3>

          <div className="space-y-3 text-zinc-400">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About Us</Link></p>
            <p><a href="/#services">Services</a></p>
            <p><a href="/#gallery">Gallery</a></p>
            <p><a href="/#contact">Contact</a></p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">
            Legal
          </h3>

          <div className="space-y-3 text-zinc-400">
            <p><Link to="/privacy-policy">Privacy Policy</Link></p>
            <p><Link to="/terms-and-conditions">Terms & Conditions</Link></p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-zinc-500">
              Need appointment booking, customer management and WhatsApp automation?
            </p>

            <a
              href="https://retivio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Explore Retivio CRM →
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            © 2026 {siteConfig.salonName}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
