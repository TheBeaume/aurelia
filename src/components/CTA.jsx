function CTA() {
  const goToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div
        className="mx-auto max-w-6xl rounded-[40px] p-12 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p
          className="uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Book Today
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Ready For Your Next
          <br />
          Beauty Transformation?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
          Experience premium salon services with our expert stylists.
          Book your appointment today and discover a new level of beauty.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button
            onClick={goToContact}
            className="rounded-full px-8 py-4 font-semibold transition duration-300 hover:scale-105"
            style={{
              background: "var(--accent)",
              color: "#000",
            }}
          >
            Book Appointment
          </button>

          <button
            onClick={goToContact}
            className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
