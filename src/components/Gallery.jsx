import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";

const images = [gallery1, gallery2, gallery3, gallery4];

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
              className="group overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
