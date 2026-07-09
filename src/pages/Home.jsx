import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>

      <section id="experience" className="scroll-mt-28">
        <Experience />
      </section>

      <section id="services" className="scroll-mt-28">
        <Services />
      </section>

      <section id="why" className="scroll-mt-28">
        <WhyChoose />
      </section>

      <section id="before-after" className="scroll-mt-28">
        <BeforeAfter />
      </section>

      <section id="testimonials" className="scroll-mt-28">
        <Testimonials />
      </section>

      <section id="pricing" className="scroll-mt-28">
        <Pricing />
      </section>

      <section id="team" className="scroll-mt-28">
        <Team />
      </section>

      <section id="gallery" className="scroll-mt-28">
        <Gallery />
      </section>

      <section id="faq" className="scroll-mt-28">
        <FAQ />
      </section>

      <section id="cta" className="scroll-mt-28">
        <CTA />
      </section>

      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>
    </>
  );
}

export default Home;
