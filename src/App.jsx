import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState("#D4AF37");

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ "--accent": theme }}
    >
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Footer />

      <ThemeSwitcher setTheme={setTheme} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
