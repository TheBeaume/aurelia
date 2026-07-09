import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("aurelia-theme") || "#D4AF37"
  );

  useEffect(() => {
    localStorage.setItem("aurelia-theme", theme);
  }, [theme]);

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
      <BeforeAfter />
      <Testimonials />
      <Pricing />
      <Team />
      <Gallery />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />

      <ThemeSwitcher setTheme={setTheme} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
