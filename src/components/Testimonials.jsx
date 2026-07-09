const reviews = [
  {
    name: "Sarah Johnson",
    service: "Hair Transformation",
    review:
      "Absolutely amazing experience! The team completely transformed my look. Highly recommended.",
    rating: "★★★★★",
  },
  {
    name: "Emma Wilson",
    service: "Luxury Facial",
    review:
      "The atmosphere, staff and service were exceptional. I'll definitely come back.",
    rating: "★★★★★",
  },
  {
    name: "Olivia Brown",
    service: "Bridal Makeup",
    review:
      "Professional artists and premium products. My wedding makeup lasted all day.",
    rating: "★★★★★",
  },
];

function Testimonials() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p
          className="uppercase tracking-[5px] text-center"
          style={{ color: "var(--accent)" }}
        >
          Testimonials
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Loved By Our Clients
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className="text-xl mb-4"
                style={{ color: "var(--accent)" }}
              >
                {item.rating}
              </div>

              <p className="text-zinc-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-zinc-500">
                  {item.service}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
