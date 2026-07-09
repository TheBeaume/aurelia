import ReactCompareImage from "react-compare-image";

import before from "../assets/images/before.png";
import after from "../assets/images/after.png";

function BeforeAfter() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p
          className="text-center uppercase tracking-[5px]"
          style={{ color: "var(--accent)" }}
        >
          Our Transformations
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Before & After
        </h2>

        <p className="mt-6 text-center text-zinc-400">
          Drag the slider to reveal the transformation.
        </p>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-4">

          <ReactCompareImage
            leftImage={before}
            rightImage={after}
            leftImageLabel="Before"
            rightImageLabel="After"
            sliderLineColor="#D4AF37"
          />

        </div>

      </div>
    </section>
  );
}

export default BeforeAfter;
