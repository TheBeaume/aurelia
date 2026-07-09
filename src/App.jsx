import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ThemeSwitcher from "./components/ThemeSwitcher";

import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";

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
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ThemeSwitcher setTheme={setTheme} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
