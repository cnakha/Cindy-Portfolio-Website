import { useMemo, useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import { X } from 'lucide-react';


/**
 * A single "extra project" item:
 * - coverImage: shown in the masonry grid
 * - images: additional images shown in the popup (cover auto-included at top)
 * - description: shown at top of popup
 */
type ExtraProject = {
  id: string;
  coverImage: string;
  images: string[];
  description: string;
  title: string;
  video?: string;
};

/**
 * Hide scrollbar but keep scroll working.
 * Put this in your global CSS if you prefer (recommended).
 * If you can't edit global CSS, keep these class names and add the CSS below.
 *
 * CSS (globals.css):
 * .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
 * .hide-scrollbar::-webkit-scrollbar { display: none; }
 */

function ExtraProjectModal({
  open,
  onClose,
  coverImage,
  images,
  description,
  title,
  video,
}: {
  open: boolean;
  onClose: () => void;
  coverImage: string;
  images: string[];
  description: string;
  title: string;
  video?: string;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  const allImages = useMemo(() => {
    const merged = [coverImage.substring(1), ...(images ?? [])].filter(Boolean);
    return Array.from(new Set(merged));
  }, [coverImage, images]);

  // Lock background scroll while modal is open
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => panelRef.current?.focus());
  }, [open]);

  if (!open) return null;

  return (
    <div                   
    onClick={onClose}
    className="fixed inset-0 z-[999]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close popup"
      />

      {/* Centered modal wrapper */}
      <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-8">
        <div
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className="
            relative z-[1000]
            w-[min(920px,92vw)]
            max-h-[100vh]
            rounded-2xl
            overflow-hidden
            outline-none
            flex flex-col
          "
        >
          {/* Header (content width smaller + centered) */}
          <div className="shrink-0 bg-black/50 backdrop-blur px-5 py-4 rounded-2xl">
            <div className="mx-auto w-full">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-white text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-white/80 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="
                    shrink-0
                    rounded-full
                    p-2
                    text-white
                    bg-white/10 hover:bg-white/20
                    ring-1 ring-white/15
                  "
                  aria-label="Close"
                >
                  <X size={25} />
                </button>
              </div>
            </div>
          </div>

          <div
            className="
              flex-1
              overflow-y-auto
              overscroll-contain
              hide-scrollbar
              px-5 py-6
            "
          >
            <div className="mx-auto w-full max-w-xl flex flex-col gap-6 pb-10">
              {video && (
                <div className=" mt-5 relative aspect-[21/13] overflow-hidden rounded-lg">
                  <video
                    src={`${import.meta.env.BASE_URL}${video}`}
                    controls
                    autoPlay
                  />
                </div>
              )}
              {allImages.map((src, idx) => (
                <figure
                  key={`${src}-${idx}`}
                  className="
                    rounded-xl overflow-hidden
                    bg-white/5 ring-1 ring-white/10
                  "
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${src}`}
                    alt={`Project image ${idx + 1}`}
                    loading="lazy"
                    className="block w-full h-auto object-contain"
                    style={{ height: "auto" }} // extra safety vs global img styles
                  />
                </figure>
              ))}
            </div>

            <div className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default function ExtrasPage() {
  const extras: ExtraProject[] = [
    {
      id: "time-poster",
      coverImage: "/extras/Time_Poster.png",
      images: [],
      description: "Composition and photo editing practice and study.",
      title: "Fluid Time Poster",
    },
    {
      id: "coding-poster",
      coverImage: "/extras/Coding_Poster.png",
      images: [],
      description: "Playful visual language following algorithmic code + design.",
      title: "Coding Poster"
    },
    {
      id: "vfx",
      coverImage: "/extras/vfx/vfx.png",
      images: ["extras/vfx/spread1.png", "extras/vfx/spread2.png", "extras/vfx/tv.png", "extras/vfx/blender.png"],
      description: "Book on the social space of VFX, retro futurism style.",
      title: "VFX and the Space Between"
    },
    {
      id: "riso-animation",
      coverImage: "/extras/Riso_Animation.gif",
      images: ["/extras/Cindy_RisoScan_Animation1.gif"],
      description: "Riso printed animations, Animated in Photoshop",
      title: "Riso Astronaut Animation"
    },
    {
      id: "lolla",
      coverImage: "/extras/Lollapalooza.jpg",
      images: [],
      description: "Typography + Shapes + Images study.",
      title: "Lollapalooza Calandar Poster"
    },
    {
      id: "memento",
      coverImage: "/extras/memento/memento.png",
      images: ["extras/memento/all.png", "extras/memento/cover.jpg", "extras/memento/back.jpg", "extras/memento/inside1.jpg",
              "extras/memento/inside2.jpg"],
      description: "Memento concept, Riso printed, analog images, narrative/visual design exploration.",
      title: "Memento"
    },
    {
      id: "ticket",
      coverImage: "/extras/ticket.png",
      images: [],
      description: "Music festival concept ticket",
      title: "XYV Music Festival Ticket Concept"
    },
    {
      id: "photography",
      coverImage: "/extras/photography/bus_stop.jpg",
      images: ["extras/photography/garden.jpg", "extras/photography/glasses.jpg", "extras/photography/ships.jpg",
              "extras/photography/boots.jpg", "extras/photography/plants.jpg"],
      description: "",
      title: "Collage of Photography Works"
    },
    {
      id: "conops",
      coverImage: "/extras/nasa/Conops.png",
      images: ["extras/nasa/diagram.png", "extras/nasa/rover.png"],
      description: "CONOPS / systems-style document visuals, clean layout practice as part of L'SPACE Program. Role: Chief Scientist",
      title: "NASA Rover Conops Poster"
    },
    {
      id: "countdown",
      coverImage: "/extras/countdown/10_style_frame.jpg",
      video: "extras/countdown/Bug_Countdown.mp4",
      images: ["extras/countdown/10_sb.jpg", "extras/countdown/3_Style_Frame.jpg", "extras/countdown/3_sb.jpg",
               "extras/countdown/4_Style_Frame.jpg", "extras/countdown/6_style_frame.jpg", "extras/countdown/7_style_frame.jpg"
      ],
      description: "10 second countdown Photoshop animation, collaborated with Hope Jo",
      title: "Bug Countdown"
    },
    {
      id: "goblet",
      coverImage: "/extras/goblet/img1.png",
      images: ["extras/goblet/img2.png", "extras/goblet/img3.png", "extras/goblet/img4.png",
                "extras/goblet/img5.png", "extras/goblet/collage1.png", "extras/goblet/collage2.png",
                "extras/goblet/grid_art.png", "extras/goblet/color1.png", "extras/goblet/color2.png",
                "extras/goblet/color3.png", "extras/goblet/color4.png", "extras/goblet/color5.png",
                "extras/goblet/b1.png", "extras/goblet/b2.png"
      ],
      description: "Typography, printing, and book binding",
      title: "The Crystal Goblet"
    },
    
    {
      id: "trippy",
      coverImage: "/extras/trippy2.gif",
      images: ["extras/Trippy_Animation.gif"],
      description: "Trippy animation loop, Analog images, experimental timing + shapes.",
      title: "Trippy Animation"
    },
    {
      id: "love",
      coverImage: "/extras/Love.png",
      images: [],
      description: "Visualizing relationship maps.",
      title: "Love Through the Sky"
    },
    {
      id: "antparty",
      coverImage: "/extras/ant_party.png",
      images: ["extras/Garden_Card2.png"],
      description: "Business card concepts",
      title: "ANT PARTY Card Concept"
    },
    {
      id: "paper",
      coverImage: "/extras/paper/img1.png",
      images: ["extras/paper/img2.png", "extras/paper/img3.png", "extras/paper/img4.png"],
      description: "Form + Type + Image, Photography Practice",
      title: "Light and Shadow Paper Photography"
    },
  ];

  const [active, setActive] = useState<ExtraProject | null>(null);

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
            {extras.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                className="
                  mb-4 break-inside-avoid w-full text-left
                  rounded-xl overflow-hidden
                  bg-white/10 ring-1 ring-white/15
                  group
                  focus:outline-none focus:ring-2 focus:ring-white/40
                "
                aria-label={`Open project ${i + 1}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.coverImage}`}
                  alt={`Extra ${i + 1}`}
                  className="
                    w-full h-auto
                    opacity-0 animate-[fadeIn_400ms_ease-out_forwards]
                    transition-transform duration-200
                    group-hover:scale-[1.02]
                  "
                  loading="lazy"
                />

                {/* <div className="px-3 py-2">
                  <p className="text-white/80 text-xs line-clamp-2">
                    {item.title}
                  </p>
                </div> */}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ExtraProjectModal
        open={!!active}
        onClose={() => setActive(null)}
        coverImage={active?.coverImage ?? ""}
        images={active?.images ?? []}
        video={active?.video ?? "" }
        description={active?.description ?? ""}
        title={active?.title ?? ""}
      />

      <Footer />
    </main>
  );
}
