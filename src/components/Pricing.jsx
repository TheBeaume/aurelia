function Pricing() {
  const plans = [
    {
      name: "Essential",
      price: "$49",
      features: [
        "Hair Styling",
        "Facial",
        "Basic Consultation",
      ],
    },
    {
      name: "Premium",
      price: "$99",
      featured: true,
      features: [
        "Hair",
        "Skin",
        "Spa",
        "Makeup",
      ],
    },
    {
      name: "Luxury",
      price: "$149",
      features: [
        "Complete Makeover",
        "VIP Lounge",
        "Priority Booking",
      ],
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Pricing
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Choose Your Experience
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-yellow-500 bg-black"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p
                className="my-6 text-5xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {plan.price}
              </p>

              <div className="space-y-3">
                {plan.features.map((item) => (
                  <p key={item}>✓ {item}</p>
                ))}
              </div>

              <button
                className="mt-8 w-full rounded-full py-4 font-semibold"
                style={{
                  background: "var(--accent)",
                  color: "#000",
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
