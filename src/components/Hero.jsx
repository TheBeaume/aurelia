import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Button from "./ui/Button";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 backdrop-blur-md border"
          style={{
            borderColor: "var(--accent)",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--accent)" }}
          ></span>

          <span
            className="text-sm uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Award Winning Luxury Salon
          </span>
        </div>

        <p
          className="uppercase tracking-[5px] text-sm"
          style={{ color: "var(--accent)" }}
        >
          Luxury Hair • Skin • Spa
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Experience
          <br />
          <span style={{ color: "var(--accent)" }}>
            Luxury Beauty
          </span>
          <br />
          Like Never Before
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Discover world-class hair styling, skincare, makeup and spa
          treatments in a luxurious environment crafted for elegance.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <Button className="flex items-center gap-3">
            Book Appointment
            <FaArrowRight />
          </Button>

          <Button variant="secondary">
            Explore Services
          </Button>
        </div>

        <div className="mt-16 grid max-w-xl grid-cols-3 gap-8">
          <div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              15+
            </h2>
            <p className="text-zinc-400">Expert Stylists</p>
          </div>

          <div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              12K+
            </h2>
            <p className="text-zinc-400">Happy Clients</p>
          </div>

          <div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              4.9★
            </h2>
            <p className="text-zinc-400">Google Rating</p>
          </div>
        </div>
      </motion.div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "var(--accent)" }}
      >
        <FaChevronDown size={22} />
      </div>
    </section>
  );
}

export default Hero;
