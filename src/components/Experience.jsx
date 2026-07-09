import experience from "../assets/images/experience.png";

function Experience() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid items-center gap-12 lg:grid-cols-2">

        <div>
          <img
            src={experience}
            alt="Luxury Salon Interior"
            className="w-full rounded-3xl object-cover"
          />
        </div>

        <div>
          <p
            className="uppercase tracking-[5px]"
            style={{ color: "var(--accent)" }}
          >
            Our Story
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Crafted For
            <span style={{ color: "var(--accent)" }}> Confidence</span>
          </h2>

          <p className="mt-8 leading-8 text-zinc-400">
            Every haircut, facial, makeover, and wellness treatment is
            thoughtfully designed to help you feel confident, elegant, and
            beautiful. Our experienced professionals combine creativity with
            premium products to deliver exceptional results every time you visit.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-white/10 p-6">
              <h3
                className="text-3xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                10+
              </h3>

              <p className="mt-2 text-zinc-500">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3
                className="text-3xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                100%
              </h3>

              <p className="mt-2 text-zinc-500">
                Premium Products
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
