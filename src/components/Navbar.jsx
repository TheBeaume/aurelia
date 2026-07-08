import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-bold tracking-[4px] text-yellow-400">
            AURELIA
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white">
            <a href="#" className="hover:text-yellow-400 transition">Home</a>
            <a href="#" className="hover:text-yellow-400 transition">Services</a>
            <a href="#" className="hover:text-yellow-400 transition">Gallery</a>
            <a href="#" className="hover:text-yellow-400 transition">Pricing</a>
            <a href="#" className="hover:text-yellow-400 transition">Contact</a>
          </nav>

          <button className="hidden md:block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
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
