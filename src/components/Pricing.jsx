function Pricing() {
  const packages = [
    {
      name: "Essential Care",
      features: [
        "Hair Styling",
        "Hair Wash",
        "Basic Consultation",
      ],
    },
    {
      name: "Premium Care",
      featured: true,
      features: [
        "Hair Styling",
        "Facial",
        "Spa Therapy",
        "Makeup Consultation",
      ],
    },
    {
      name: "Bridal Experience",
      features: [
        "Bridal Makeup",
        "Hair Styling",
        "Skincare Preparation",
        "Premium Finish",
      ],
    },
  ];

  const bookAppointment = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Signature Packages
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Our Signature Packages
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-zinc-400">
          Carefully curated beauty experiences designed to enhance your
          confidence and elevate every visit.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${
                pkg.featured
                  ? "border-yellow-500 bg-black"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <h3 className="text-2xl font-bold">
                {pkg.name}
              </h3>

              <div className="mt-8 space-y-4">
                {pkg.features.map((item) => (
                  <p key={item}>✓ {item}</p>
                ))}
              </div>

              <button
                onClick={bookAppointment}
                className="mt-10 w-full rounded-full py-4 font-semibold transition hover:scale-105"
                style={{
                  background: "var(--accent)",
                  color: "#000",
                }}
              >
                Book Appointment
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;
