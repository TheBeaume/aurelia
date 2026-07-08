import { FaAward, FaLeaf, FaClock, FaHeart } from "react-icons/fa";

function WhyChoose() {
  const items = [
    {
      icon: <FaAward size={32} />,
      title: "Award Winning",
      desc: "Professional stylists with years of experience.",
    },
    {
      icon: <FaLeaf size={32} />,
      title: "Premium Products",
      desc: "Only trusted international beauty brands.",
    },
    {
      icon: <FaClock size={32} />,
      title: "Easy Booking",
      desc: "Book your appointment anytime.",
    },
    {
      icon: <FaHeart size={32} />,
      title: "Personal Care",
      desc: "Every client gets a personalized experience.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-400 uppercase tracking-[4px]">
          Why Choose Us
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Luxury Beyond Expectations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {items.map((item, i) => (
            <div
              key={i}
              className="bg-black rounded-3xl border border-zinc-800 p-8 hover:border-yellow-500 transition duration-300"
            >
              <div className="text-yellow-400 mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
