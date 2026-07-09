function About() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          About Us
        </p>

        <h1 className="mt-4 text-center text-5xl font-bold">
          Beauty. Confidence. Luxury.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-400">
          Welcome to our salon, where beauty meets luxury. We believe every
          client deserves a personalized experience in a relaxing and elegant
          environment. Our team is passionate about helping you look and feel
          your absolute best through professional beauty services and exceptional
          customer care.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Our Story
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              Since our beginning, our goal has been to create more than just a
              salon—we wanted to build a destination where every guest feels
              welcomed, relaxed, and confident. By combining skilled
              professionals, premium products, and modern techniques, we deliver
              beauty experiences that leave a lasting impression.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              Our mission is to provide outstanding salon services with
              professionalism, creativity, and care. We are committed to making
              every appointment comfortable, enjoyable, and tailored to your
              individual style and beauty goals.
            </p>
          </div>

        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--accent)" }}
          >
            Why Choose Us?
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 text-zinc-300">
            <p>✔ Experienced & Certified Beauty Professionals</p>
            <p>✔ Premium Hair, Skin & Spa Services</p>
            <p>✔ Hygienic & Luxury Salon Environment</p>
            <p>✔ Personalized Beauty Consultations</p>
            <p>✔ High-Quality Beauty Products</p>
            <p>✔ Exceptional Customer Experience</p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--accent)" }}
          >
            Our Promise
          </h2>

          <p className="mt-4 leading-8 text-zinc-400">
            We are dedicated to helping you look your best while ensuring every
            visit is relaxing, enjoyable, and memorable. Whether you're visiting
            for a haircut, skincare treatment, bridal makeover, or a luxury spa
            session, our commitment is to exceed your expectations with every
            appointment.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
