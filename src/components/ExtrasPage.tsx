import React from "react";
import Footer from "./Footer";
const extras = [
  "/extras/Time_Poster.png",
  "/extras/Coding_Poster.png",
  "/extras/Love.png",
  "/extras/Riso_Animation.gif",
  "/extras/Lollapalooza.jpg",
  "/extras/Trippy_Animation.gif",
  "/extras/vfx.png",
  "/extras/memento.png",
  "/extras/Conops.png",

];

export default function ExtrasPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#008be8]">
      <section id="extras" className="relative w-full py-24">
        <div className="mx-auto w-full max-w-6xl px-[5%]">
          <div className="flex w-full justify-center text-center px-4">
            <h2 className="text-6xl text-white">Extras</h2>
          </div>
          <p className="mx-auto max-w-5xl text-center text-2xl text-white/75 px-4 mt-2">
            A brief assortment of other projects and works
          </p>

          {/* Masonry */}
          <div
            className="
              mt-12
              columns-1 sm:columns-2 lg:columns-3 xl:columns-4
              gap-4 [column-fill:_balance]
              px-2
            "
          >
            {extras.map((src, i) => (
              <figure
                key={i}
                className="
                  mb-4 break-inside-avoid
                  rounded-xl overflow-hidden
                  bg-white/10 ring-1 ring-white/15
                  group
                "
              >
                <img
                  src={src}
                  alt={`Extra ${i + 1}`}
                  className="w-full h-auto opacity-0 animate-[fadeIn_400ms_ease-out_forwards]"

                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
