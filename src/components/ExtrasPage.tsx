import React, { useState } from "react";
import Footer from "./Footer";
import { Triangle } from "lucide-react";

const pictures = [
    "/profile_picture.png",
    "/chicago.png",
    "/panorama_kitchen.png",
];

/* ---------------- EXTRAS (HORIZONTAL STRIP) ---------------- */

function Extras() {
  return (
    <section id="extras" className="relative w-full bg-[#008be8] mt-40">
      <div className="mx-auto w-full px-[5%]">
        <div className="flex w-full justify-center text-center px-4">
          <h2 className="text-6xl font-semibold text-white">
            Extras
          </h2>
        </div>
        <div className="px-4">
          <p className="mx-auto max-w-5xl text-center text-2xl text-white/75">
            A brief assortment of other projects and works
          </p>
        </div>

        <div className="mt-8">
          <div
            className="extras-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-6"
            style={{ scrollBehavior: "smooth" }}
          >
            {[...Array(8)].map((_, i) => (
              <button
                key={i}
                className="mt-4 snap-start shrink-0 w-[260px] overflow-hidden rounded-[18px] bg-black/20 ring-1 ring-black"
              >
                {/* <button> */}
                  <div className="relative aspect-[3/4]">
                    <img
                      src="/public/panorama_kitchen.png"
                      alt="Project preview"
                      className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-600 ease-in-out hover:scale-105"
                    />
                  </div>
                {/* </button> */}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExtrasPage() {
    return (
      <main className="relative min-h-screen w-full overflow-x-hidden bg-[#008be8]">
        <Extras/>
        <Footer />
      </main>
    );
}
