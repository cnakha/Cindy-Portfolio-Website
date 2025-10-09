import { useNavigate } from "react-router-dom";
import { projects } from "../lib/projectData";
import AboutMeCarousel from "./AboutMeCarousel";
import Footer from "./Footer";
import {Play, Pause} from 'lucide-react'
import { useRef, useState } from "react";


// import Curve from "../assets/grouping_curve.svg";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[120vh]">
      {/* Full-bleed background */}
      <video
        ref={videoRef}
        src={'/Portfolio_hero.mp4'}
        className="absolute inset-0 h-full w-auto min-w-full object-cover bg-center bg-no-repeat"
        muted
        autoPlay
        loop
        style={{ minHeight: '100%', height: '100%', width: 'auto' }}
      />
      {/* Gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#008BE8]/70 to-transparent" />

      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className={`absolute top-[15%] md:top-[70%] right-14 md:right-8 z-20 bg-black/55 backdrop-blur-sm
        shadow-[0_12px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-white px-4 py-4 rounded-full shadow hover:bg-black/80 transition-transform duration-200 hover:scale-110
        ${typeof slideNumber !== "undefined" && slideNumber !== 0 ? "hidden md:block" : "block"}`}
      >
        <div className="rounded-full p-2 flex items-center justify-center border-4 border-white/75">
          {isPlaying ? <Pause className="w-8 h-8 md:w-10 md:h-10 fill-white stroke-none"/> : <Play className="w-8 h-8 md:w-10 md:h-10 fill-white stroke-none"/>}
        </div>
      </button>

      {/* Content container: left aligned, pushed down from the top */}
      <div className="relative z-10 mx-auto w-full max-w-[90%]">
        <div className="pt-[100px]">
          {/* Left-aligned card; keep it square-ish with max-w and padding */}
          <AboutMeCarousel setSlideNumber={setSlideNumber}/>
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
      <div className="flex flex-col justify-center items-center w-full text-center mt-10">
        <h3 className="text-white text-4xl md:text-5xl ">{project.title}</h3>
        {/* <p className="mt-4 text-sm md:text-xl text-white/25 md:px-10">{project.category}</p> */}
        <p className="mt-8 max-w-4xl text-sm md:text-xl text-white/50 ">{project.description}</p>
        <button
          onClick={() => onOpen(project.id)}
          className="mt-8 block w-full overflow-hidden rounded-[12px] bg-black/20 ring-1 ring-white/10 hover:ring-white/30 transition"
        >
          <div className="relative aspect-[21/8] overflow-hidden rounded-[12px]">
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
    <section id="projects" className="relative w-full bg-[#1e1e1e] pb-10">
      <div className="flex w-full bg-blue-haze  px-4 py-20 ">
        <h2 className="text-3xl ml-20 md:text-6xl font-bolder text-white">
          Featured Projects
        </h2>
      </div>
      <div className="mx-auto w-full px-[10%] md:pb-10">

        <div className="mt-28 space-y-16">
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
