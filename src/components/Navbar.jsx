import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = "/#" + id;
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    closeMenu();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            <Link
              to="/"
              className="text-2xl font-bold tracking-[4px]"
              style={{ color: "var(--accent)" }}
            >
              {siteConfig.salonName}
            </Link>

            <nav className="hidden gap-8 text-sm uppercase tracking-widest md:flex">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("services")}>Services</button>
              <button onClick={() => scrollToSection("gallery")}>Gallery</button>
              <button onClick={() => scrollToSection("pricing")}>Pricing</button>
              <Link to="/about">About</Link>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </nav>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden rounded-full px-6 py-3 font-semibold md:block"
              style={{
                background: "var(--accent)",
                color: "#000",
              }}
            >
              Book Now
            </button>

            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars size={22} />
            </button>

          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-black/95 text-2xl">

          <button
            className="absolute right-8 top-8"
            onClick={closeMenu}
          >
            <FaTimes size={30} />
          </button>

          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("gallery")}>Gallery</button>
          <button onClick={() => scrollToSection("pricing")}>Pricing</button>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <button onClick={() => scrollToSection("contact")}>Contact</button>

        </div>
      )}
    </>
  );
}

export default Navbar;
