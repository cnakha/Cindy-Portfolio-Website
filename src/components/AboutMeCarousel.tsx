import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Triangle, Clock , Heart, Play, Pause} from "lucide-react";

import { motion } from "framer-motion";

declare global {
  interface Window {
    visitorCount?: number;
  }
}


function TypedParagraph({ text, index }: { text: string; index: number }) {
const [typingDone, setTypingDone] = useState(false);

  // Framer Motion variants
  const container = {
    hidden: { opacity: 1 }, // keep container mounted while children are hidden
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,    // small pause before first child
        staggerChildren: 0.28, // spacing between each child
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    index === 0 ? (
      <div className="text-white space-y-6">
        <TypeAnimation
          key={"Hi there! I'm..."}
          sequence={[
            "Hi there! I'm...",
            () => setTypingDone(true), 
          ]}
          speed={35}
          cursor
          wrapper="p"
          className="
            block text-3xl md:text-4xl text-white/50
            !leading-[1.25]
            [&>span]:!leading-[1.4]
            whitespace-pre-wrap
          "
          style={{ lineHeight: 1.4 }}
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate={typingDone ? "show" : "hidden"}
        >
        {/* Name + Image */}
        <motion.div
          className="flex flex-inline w-full items-center gap-6"
          variants={item}
        >
        
          <div>
            <p className="text-6xl md:text-7xl text-white font-bolder pt-2">Cindy</p>
            <p className="text-5xl md:text-6xl text-white font-bolder pt-2">Nakhammouane</p>
            <p className="text-xl text-white pt-1">Fullstack Developer & UI/UX Designer</p>
          </div>
        </motion.div>

        <motion.p className="text-3xl md:text-4xl text-white/50 pt-8" variants={item}>
          I love to{" "}
          <span className="text-white font-bolder">
            research, design, user test, and code{" "}
          </span>
          cool projects all the way to launch with product focused thinking...
        </motion.p>     

        {/* Bottom info row */}
        <motion.div className="flex flex-wrap w-full gap-5 pt-8" variants={item}>
          <div className="flex flex-inline text-white/75 gap-2">
            <div className="w-6 h-6 rounded-full bg-white border border-[6px] border-blue-haze" />
            <p>Chicago, IL</p>
          </div>

          <div className="flex flex-inline items-center text-white/75 gap-2">
            <Clock className="h-5 w-5 stroke-white/75" />
            <p>
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "America/Chicago",
              })}
            </p>
          </div>

          <div className="flex flex-inline items-center text-white/75 gap-1">
            <Heart className="h-5 w-5 fill-white/75 stroke-none" />
            <p>Hello visitor</p>
            <div className="ring-1 ring-white/10 min-w-20 flex ml-1 items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-sm">
              <span>
                {typeof window !== "undefined" && (window as any).visitorCount
                  ? `${(window as any).visitorCount}`
                  : "0"}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    ) : (
      <TypeAnimation
        key={text}
        sequence={[text]}
        speed={55}
        cursor={text !== ""}
        wrapper="p"
        className="
          block text-3xl md:text-5xl text-white/75
          !leading-[1.25]               /* force on <p> */
          [&>span]:!leading-[1.4]      /* force on inner span that TA inserts */
          whitespace-pre-wrap
        "
        style={{ lineHeight: 1.6 }}
      />
    )
  );
}



export default function AboutMeCarousel({slideNumber,  setSlideNumber, isPlaying, onTogglePlay }: 
  { setSlideNumber: (num: number) => void 
    isPlaying: boolean;
    onTogglePlay: () => void;
    slideNumber: number;
  }) {
  const slides = [
    "",
    "I love creating things that bring joy to others and heavily value leaving a positive impact in the world. Wanting to leverage my academic drive and creative mind, I found myself at the door of creative technology...",
    "Today, I'm a fourth year undergraduate student at the University of Illinois Chicago studying computer science and design and exploring the possibilities of AI/ML automation, web dev, and product design.",
    "I love being at the intersection of design and technology as I get to bridge creative and technical teams. I've thus became a very passionate designer who values intuitive experiences and engaging storytelling and a developer who can bring ideas to life.",
    "In my free time I love to travel to cool places, watch movies, sing, and attend live theatrical shows. I also spend a lot of time on my passion projects: WorldNotes and FolioFlips!",
  ];

  const [idx, setIdx] = useState(0);
  const nextSlide = () => setIdx((i) => (i + 1) % slides.length);

  const MIN = 580;
  const innerRef = useRef<HTMLDivElement>(null); 
  const [height, setHeight] = useState<number>(MIN);

  useEffect(() => {
    const measure = () => {
      const el = innerRef.current;
      if (!el) return;
      const natural = el.scrollHeight;
      setHeight(Math.max(MIN, natural));
    };

    measure();

    const ro = new ResizeObserver(measure);
    const mo = new MutationObserver(measure);
    if (innerRef.current) {
      ro.observe(innerRef.current);
      mo.observe(innerRef.current, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [idx]);

  return (
    <div
      className="
        relative w-full max-w-[750px] rounded-2xl
        bg-black/55 backdrop-blur-sm
        shadow-[0_12px_32px_rgba(0,0,0,0.35)]
        ring-1 ring-white/10 overflow-hidden
      "
      style={{ height, transition: "height 300ms ease" }}
    >
      {/* Play/Pause Button */}
      {slideNumber === 0 && (
        <button
          onClick={onTogglePlay}
          className="
            absolute top-8 right-8
            bg-black/55 text-white rounded-full
            p-4 backdrop-blur-sm ring-1 ring-white/10
            shadow-[0_12px_32px_rgba(0,0,0,0.35)]
            hover:bg-black/80 transition-transform hover:scale-110
          "
        >
          <div className="rounded-full p-2 border-4 border-white/75 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-8 h-8 md:w-12 md:h-12 fill-white stroke-none" />
            ) : (
              <Play className="w-8 h-8 md:w-12 md:h-12 fill-white stroke-none" />
            )}
          </div>
        </button>
      )}

      {/* Natural-flow flex column (no h-full) so height can shrink/grow per slide */}
      <div
        ref={innerRef}
        className="flex min-h-[600px] flex-col gap-6 px-10 pt-10 "
      >
        {/* Text */}
        <TypedParagraph text={slides[idx]} index={idx} />

        {/* Controls pinned bottom-right when there's spare space */}
        <div className="flex justify-end w-full mt-auto">
          <div className="flex flex-col">
            <div className="opacity-40 hover:opacity-90 transition ease-in-out duration-500">
              <button
                className="inline-flex items-center text-xl text-white pb-2"
                onClick={nextSlide}
              >
                <p className="">More about me</p>
                <Triangle className="ml-2 h-5 w-5 rotate-90 fill-white stroke-none" />
              </button>
            </div>

            <div className="flex items-center gap-2 pb-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`About slide ${i + 1}`}
                  onClick={() => {setIdx(i); setSlideNumber(i);}}
                  className={`h-7 w-7 rounded-full transition ${
                    i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
