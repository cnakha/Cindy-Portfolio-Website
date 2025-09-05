// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../lib/projectData";
import AboutMeCarousel from "./AboutMeCarousel";
import Footer from "./Footer";

// import Curve from "../assets/grouping_curve.svg";

function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100vh]">
      {/* Full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("../public/chicago_bg.png")` }}
      />
      {/* Gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#008BE8]/70 to-transparent" />

      {/* Content container: left aligned, pushed down from the top */}
      <div className="relative z-10 mx-auto w-full max-w-[80%]">
        <div className="pt-[100px]">
          {/* Left-aligned card; keep it square-ish with max-w and padding */}
          <AboutMeCarousel />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED PROJECTS ---------------- */

function FeaturedProjectBlock({
  project,
  onOpen,
}: {
  project: any;
  onOpen: (id: string) => void;
}) {
  return (
    <div className="flex">
      <div className="w-full">
        <h3 className="text-white text-4xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-white/50 text-xl">{project.category}</p>
        <p className="mt-2 text-white text-xl">{project.description}</p>

        <button
          onClick={() => onOpen(project.id)}
          className="mt-8 block w-full overflow-hidden rounded-[12px] bg-black/20 ring-1 ring-white/10 hover:ring-white/30 transition"
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-[12px]">
            <img
              src={`${project.imageUrl}`}
              alt={`${project.id} preview`}
              className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-600 ease-in-out hover:scale-105"
            />
          </div>
        </button>

      </div>
    </div>
  );
}

function FeaturedProjects({
  items,
  onOpen,
}: {
  items: any[];
  onOpen: (id: string) => void;
}) {
  return (
    <section id="projects" className="relative w-full bg-[#1e1e1e] py-14">
      <div className="mx-auto w-full px-[10%] pb-10">

        <div className="flex w-full justify-center text-center px-4 py-8">
          <h2 className="text-4xl font-semibold text-white">
            Featured Projects
          </h2>
        </div>
        <div className="px-4">
          <p className="mx-auto max-w-5xl text-center text-2xl text-white/75">
            Case studies of previous and current projects that explore my Fullstack
            development, UI/UX design, and Product design process.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {items.map((project) => (
            <FeaturedProjectBlock
              key={project.id}
              project={project}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXTRAS (HORIZONTAL STRIP) ---------------- */

function Extras() {
  return (
    <section id="extras" className="relative w-full bg-[#008be8] py-12">
      <div className="mx-auto w-full px-[5%]">
        <div className="flex w-full justify-center text-center px-4">
          <h2 className="text-4xl font-semibold text-white">
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



/* ---------------- PAGE ---------------- */

export default function PortfolioPage() {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 5);

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#008be8]">
      <Hero />
      <FeaturedProjects items={featuredProjects} onOpen={handleProjectClick} />
      <Extras />
      <Footer />
    </main>
  );
}
