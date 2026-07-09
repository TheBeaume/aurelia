import hair from "../assets/images/hair.png";
import spa from "../assets/images/spa.png";
import bridal from "../assets/images/bridal.png";
import hero from "../assets/images/hero.png";

const services = [
  {
    image: hair,
    title: "Hair Styling",
    desc: "Luxury haircuts, styling & premium hair treatments.",
  },
  {
    image: spa,
    title: "Spa Therapy",
    desc: "Relaxing body massages, facials & wellness experiences.",
  },
  {
    image: bridal,
    title: "Bridal Makeup",
    desc: "Premium bridal and party makeup by expert artists.",
  },
  {
    image: hero,
    title: "Beauty Care",
    desc: "Complete beauty treatments for healthy glowing skin.",
  },
];

function Services() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Premium Services
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Crafted For Luxury
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
