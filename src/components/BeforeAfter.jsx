function BeforeAfter() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Our Transformations
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Before & After
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80"
              alt="Before"
              className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="bg-zinc-900 p-5 text-center font-semibold">
              Before
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
              alt="After"
              className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
            />
            <div
              className="p-5 text-center font-semibold"
              style={{ background: "var(--accent)", color: "#000" }}
            >
              After
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BeforeAfter;
