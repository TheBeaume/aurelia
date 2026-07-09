import { FaBars } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <h1
            className="text-2xl font-bold tracking-[4px]"
            style={{ color: "var(--accent)" }}
          >
            {siteConfig.salonName}
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <button
            className="hidden md:block rounded-full px-6 py-3 font-semibold"
            style={{
              background: "var(--accent)",
              color: "#000",
            }}
          >
            Book Now
          </button>

          <button className="md:hidden text-white">
            <FaBars size={22} />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
