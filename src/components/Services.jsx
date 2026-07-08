import {
  FaCut,
  FaSpa,
  FaPaintBrush,
  FaRegSmile,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCut size={34} />,
    title: "Hair Styling",
    desc: "Luxury haircuts, styling & treatments.",
  },
  {
    icon: <FaSpa size={34} />,
    title: "Spa Therapy",
    desc: "Relaxing body & facial spa experiences.",
  },
  {
    icon: <FaPaintBrush size={34} />,
    title: "Makeup",
    desc: "Professional bridal & party makeup.",
  },
  {
    icon: <FaRegSmile size={34} />,
    title: "Beauty Care",
    desc: "Skin treatments for glowing confidence.",
  },
];

function Services() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-yellow-400 uppercase tracking-[5px] text-center">
          Premium Services
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-4">
          Crafted For Luxury
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-3xl p-8 border border-zinc-800"
            >
              <div className="text-yellow-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 group-hover:text-black">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;
