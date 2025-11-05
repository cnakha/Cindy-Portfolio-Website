import { useNavigate } from "react-router-dom";
import { projects } from "../lib/projectData";
import AboutMeCarousel from "./AboutMeCarousel";
import Footer from "./Footer";
import { useRef, useState } from "react";
import { motion } from "framer-motion";


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
    <section id="home" className="relative w-full min-h-[100vh]">
      {/* Full-bleed background */}
      <video
        ref={videoRef}
        src={'/Hero.mp4'}
        className="absolute inset-0 h-full w-auto min-w-full object-cover bg-center bg-no-repeat"
        muted
        autoPlay
        loop
        style={{ minHeight: '100%', height: '100%', width: 'auto' }}
      />
      {/* Gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#008BE8]/70 to-transparent" />

      {/* Content container: left aligned, pushed down from the top */}
      <div className="relative z-10 mx-auto w-full max-w-[90%]">
        <div className="pt-[100px]">
          {/* Left-aligned card; keep it square-ish with max-w and padding */}
          <AboutMeCarousel 
          setSlideNumber={setSlideNumber}
          slideNumber={slideNumber}
          isPlaying={isPlaying}
          onTogglePlay={handlePlayPause}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED PROJECTS ---------------- */

function FeaturedProjectBlock({
  project,
  onOpen,
  index,
}: {
  project: any;
  onOpen: (id: string) => void;
  index: number;
}) {


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.25, // spacing between siblings, but only after THIS one is in view
      },
    }),
  };

  return (
    <motion.div
      className="flex h-full"
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{
        once: true,          
        amount: 0.1,         
        margin: "0px 0px -8% 0px", 
      }
    }
    >
      <div className="flex flex-col justify-center items-center h-full w-full text-center">
        <button
          onClick={() => onOpen(project.id)}
          className="group block h-full w-full overflow-hidden rounded-[12px] bg-black/20 ring-1 ring-white/20 transition "
        >
          <div className="relative aspect-[20/7] overflow-hidden">
            <img
              src={`${project.imageUrl}`}
              alt={`${project.id} preview`}
              className="absolute inset-0 h-full w-full object-cover transform transition duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div 
            className="flex flex-col text-left h-full px-6 md:px-10 py-10 
            bg-black transition ease-in-out duration-500 group-hover:bg-blue-haze
            "
          >
            <h2 className="font-nhgDisplay text-white font-bolder text-2xl leading-[1.25] md:text-3xl">
              {project.title}
            </h2>
            <p className="font-nhgTexttext-md mt-6 md:text-md text-white/75">
              {project.description}
            </p>
          </div>
        </button>


      </div>

    </motion.div>
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
    <section id="projects" className="relative w-full bg-black/90 pb-10">
      <div className="flex w-full bg-black pt-20 pl-10 py-10 ">
        <h1 className="font-nhgDisplay text-3xl md:text-5xl pl-10 text-white">
          Featured Projects
        </h1>
      </div>
      <div className="mx-auto w-full px-[5%] md:pb-10">
        <div
          className="
            mt-10 
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-10
            items-stretch
          "
        >
          {items.map((project, i) => (
            <FeaturedProjectBlock
              key={project.id}
              project={project}
              onOpen={onOpen}
              index={i}
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
    <main className="font-nhgText relative min-h-screen w-full overflow-x-hidden bg-white">
      <Hero />
      <FeaturedProjects items={featuredProjects} onOpen={handleProjectClick} />
      <Footer />
    </main>
  );
}
