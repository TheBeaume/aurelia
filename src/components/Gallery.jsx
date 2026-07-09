const images = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
];

function Gallery() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Gallery
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Our Recent Work
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-80 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
