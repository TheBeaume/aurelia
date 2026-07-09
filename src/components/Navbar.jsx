import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            <a
              href="#home"
              className="text-2xl font-bold tracking-[4px]"
              style={{ color: "var(--accent)" }}
            >
              {siteConfig.salonName}
            </a>

            <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </nav>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hidden md:block rounded-full px-6 py-3 font-semibold"
              style={{
                background: "var(--accent)",
                color: "#000",
              }}
            >
              Book Now
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars size={22} />
            </button>

          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center gap-8 text-2xl">

          <button
            className="absolute right-8 top-8"
            onClick={closeMenu}
          >
            <FaTimes size={30} />
          </button>

          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

        </div>
      )}
    </>
  );
}

export default Navbar;
