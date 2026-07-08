function LuxuryExperience() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80"
            alt="Luxury Salon"
            className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <p className="text-yellow-400 uppercase tracking-[5px]">
            Luxury Experience
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Beauty Crafted
            <br />
            With Passion
          </h2>

          <p className="text-zinc-400 mt-8 leading-8">
            Our expert stylists combine creativity, premium products and
            personalized care to deliver an unforgettable salon experience.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-black p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-yellow-400 text-3xl font-bold">10+</h3>
              <p className="text-zinc-400 mt-2">Years Experience</p>
            </div>

            <div className="bg-black p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-yellow-400 text-3xl font-bold">100%</h3>
              <p className="text-zinc-400 mt-2">Premium Products</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default LuxuryExperience;
