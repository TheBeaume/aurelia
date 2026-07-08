function Experience() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80"
            alt="Salon"
            className="rounded-3xl w-full"
          />
        </div>

        <div>
          <p className="uppercase tracking-[5px] text-yellow-400">
            Our Story
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Crafted For
            <span className="text-yellow-400"> Confidence</span>
          </h2>

          <p className="mt-8 text-zinc-400 leading-8">
            Every haircut, facial and makeover is designed to make you
            feel confident, elegant and beautiful.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-3xl text-yellow-400 font-bold">10+</h3>
              <p className="text-zinc-500 mt-2">
                Years Experience
              </p>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-3xl text-yellow-400 font-bold">100%</h3>
              <p className="text-zinc-500 mt-2">
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
