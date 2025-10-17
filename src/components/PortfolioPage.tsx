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
  className={`
    absolute top-[16%] z-20 bg-black/55 backdrop-blur-sm
    right-14 min-[920px]:right-auto min-[920px]:left-[700px]
    shadow-[0_12px_32px_rgba(0,0,0,0.35)]
    ring-1 ring-white/10 text-white px-4 py-4 rounded-full
    shadow hover:bg-black/80 transition-transform duration-200 hover:scale-110
    ${typeof slideNumber !== "undefined" && slideNumber !== 0 ? "hidden md:block" : "block"}
  `}
>
  <div className="rounded-full p-2 flex items-center justify-center border-4 border-white/75">
    {isPlaying ? (
      <Pause className="w-8 h-8 md:w-10 md:h-10 fill-white stroke-none" />
    ) : (
      <Play className="w-8 h-8 md:w-10 md:h-10 fill-white stroke-none" />
    )}
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
       
        <button
          onClick={() => onOpen(project.id)}
          className=" block w-full overflow-hidden rounded-[12px] bg-black/20 ring-1 ring-white/20 hover:ring-white/50 transition shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
        >
          <div className="relative aspect-[20/8] overflow-hidden">
          <img
            src={`${project.imageUrl}`}
            alt={`${project.id} preview`}
            className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-600 ease-in-out hover:scale-105"
          />
          </div>
        <div 
          className="flex flex-col py-6 px-6 md:px-20 justify-center items-center text-center 
          backdrop-blur-sm bg-black/75 hover:bg-blue-haze ring-1 ring-white/10 z-10  cursor-pointer transition ease-in-out duration-500">
          <h3 className="text-white max-w-4xl font-bolder text-2xl leading-[1.25] md:text-4xl ">{project.title}</h3>
          <p className="max-w-3xl text-sm mt-4 md:text-base text-white ">{project.description}</p>
        </div>
                </button>

        {/* Line */}
        {/* {project.id !== "clarity" && (<div className="mt-32 h-[1px] w-full bg-white/50" />)} */}
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
    <section id="projects" className="relative w-full bg-[#131415] pb-10">
      <div className="flex w-full items-center justify-center bg-black px-4 py-10 ">
        <h2 className=" text-3xl text-center md:text-5xl text-white">
          Featured Projects
        </h2>
      </div>
      <div className="mx-auto w-full px-[15%] md:pb-10">

        <div className="mt-10 space-y-16">
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





/* ---------------- PAGE ---------------- */

export default function PortfolioPage() {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 5);
  // bg-[#008be8]

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Hero />
      <FeaturedProjects items={featuredProjects} onOpen={handleProjectClick} />
      <Footer />
    </main>
  );
}
