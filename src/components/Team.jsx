import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";

const team = [
  {
    name: "Sophia Carter",
    role: "Creative Hair Stylist",
    image: team1,
  },
  {
    name: "Emily Watson",
    role: "Skin Care Expert",
    image: team2,
  },
  {
    name: "Olivia James",
    role: "Bridal Makeup Artist",
    image: team3,
  },
];

function Team() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Meet Our Experts
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Our Professional Team
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-96 w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p
                  className="mt-2"
                  style={{ color: "var(--accent)" }}
                >
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;
