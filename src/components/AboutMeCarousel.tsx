import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

/** optional: keep phrase at 100% opacity if you switch back to static <p> */
function highlightFullstack(s: string) {
  const re = /fullstack developer and UI\/UX designer/gi;
  const parts: Array<string | JSX.Element> = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s)) !== null) {
    if (m.index > last) parts.push(s.slice(last, m.index));
    parts.push(<span key={m.index} className="text-white">{m[0]}</span>);
    last = m.index + m[0].length;
  }
  if (last < s.length) parts.push(s.slice(last));
  return parts;
}

function TypedParagraph({ text }: { text: string }) {
  return (
    <TypeAnimation
      key={text}
      sequence={[text]}
      speed={55}
      cursor
      wrapper="p"
      className="block text-5xl leading-[1.45] text-white/75" 
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

  const MIN = 550;
  const innerRef = useRef<HTMLDivElement>(null); // natural-flow container (no h-full)
  const [height, setHeight] = useState<number>(MIN);

  useEffect(() => {
    const measure = () => {
      const el = innerRef.current;
      if (!el) return;
      // natural content height (ignores parent constraints)
      const natural = el.scrollHeight;
      setHeight(Math.max(MIN, natural));
    };

    // measure now & on slide change
    measure();

    // re-measure as text types/wraps or on resize
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
        w-full max-w-2xl rounded-2xl
        bg-black/55 backdrop-blur-sm
        shadow-[0_12px_32px_rgba(0,0,0,0.35)]
        ring-1 ring-white/10 overflow-hidden
      "
      style={{ height, transition: "height 300ms ease" }}
    >
      {/* Natural-flow flex column (no h-full) so height can shrink/grow per slide */}
      <div
        ref={innerRef}
        className="flex min-h-[550px] flex-col gap-6 px-10 py-10"
      >
        {/* Text */}
        <TypedParagraph text={slides[idx]} />
        {/* If you need the inline highlight instead of typing: 
            <p className="text-6xl leading-[1.15] text-white/75">
              {highlightFullstack(slides[idx])}
            </p>
        */}

        {/* Controls pinned bottom-right when there's spare space */}
        <div className="mt-auto self-end text-right">
          <button
            className="inline-flex items-center text-xl gap-2 text-white/90 hover:text-white transition"
            onClick={nextSlide}
          >
            More about me
            <svg width="30" height="30" viewBox="0 0 20 20" className="-rotate-90">
              <path d="M5 7l5 6 5-6" fill="currentColor" />
            </svg>
          </button>

          <div className="mt-3 flex items-center justify-end gap-3">
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
