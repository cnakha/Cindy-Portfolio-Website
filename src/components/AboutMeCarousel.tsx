import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Triangle } from "lucide-react";



function TypedParagraph({ text }: { text: string }) {
  return (
    <TypeAnimation
      key={text}
      sequence={[text]}
      speed={55}
      cursor
      wrapper="p"
      className="
        block text-5xl text-white/75
        !leading-[1.25]               /* force on <p> */
        [&>span]:!leading-[1.6]      /* force on inner span that TA inserts */
        whitespace-pre-wrap
      "
      style={{ lineHeight: 1.6 }}
    />
  );
}



export default function AboutMeCarousel() {
  const slides = [
    "Hi! I'm Cindy Nakhammouane, a fullstack developer and UI/UX designer with product focused thinking and a love for making cool projects...",
    "I love creating things that bring joy to others and leave a positive impact. Wanting to leverage my academic drive and creative mind, one day I found myself at the door of creative technology...",
    "Today, I'm a fourth year undergraduate student at the University of Illinois Chicago studying computer science and design exploring the possibilities of AI/ML automation, web dev, and product design.",
    "In my free time I love to travel to cool places, watch movies, sing, and attend theatrical shows. I also spend a lot of time on my passion projects: WorldNotes and FolioFlips!",
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
        w-full max-w-[650px] rounded-2xl
        bg-black/55 backdrop-blur-sm
        shadow-[0_12px_32px_rgba(0,0,0,0.35)]
        ring-1 ring-white/10 overflow-hidden
      "
      style={{ height, transition: "height 300ms ease" }}
    >
      {/* Natural-flow flex column (no h-full) so height can shrink/grow per slide */}
      <div
        ref={innerRef}
        className="flex min-h-[550px] flex-col gap-6 px-10 pt-10 pb-4"
      >
        {/* Text */}
        <TypedParagraph text={slides[idx]} />

        {/* Controls pinned bottom-right when there's spare space */}
        <div className="mt-auto self-end text-right">
          <button
            className="inline-flex items-center text-xl gap-2 text-white/90 hover:text-white transition"
            onClick={nextSlide}
          >
            More about me
           
            <Triangle className="h-4 w-4 rotate-45 fill-white" />

          </button>

          <div className="mt-2 flex items-center justify-end gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`About slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-8 w-8 rounded-full transition ${
                  i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
