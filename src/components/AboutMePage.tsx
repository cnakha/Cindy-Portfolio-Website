import Footer from "./Footer";

export default function AboutMePage() {

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <div className="mx-auto mt-10 w-full px-[10%] pb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 py-20">
          {/* Left column (About paragraphs) */}
          <div className="w-full md:flex-1">
            <div className="max-w-xl w-full rounded-2xl overflow-hidden">
              
              <div className="mt-10 text-2xl">
                <div className="flex gap-8 items-end">
                    <img
                        src={`${import.meta.env.BASE_URL}/about/img1.jpg`}
                        alt={`Photo of me`}
                        className="w-[35%] h-auto block rounded-full border border-white/10"
                        loading="lazy"
                    />
                    <div className="flex flex-col">
                        <h1 className="font-nhgDisplay text-4xl md:text-6xl text-white mb-10">
                            About Me
                        </h1>
                        <p className="font-nhgText text-sm md:text-xl text-white/90 mb-8">
                        Hi! I'm Cindy Nakhammouane, a fullstack developer and UI/UX
                        designer currently enrolled in my fourth year at the University
                        of Illinois Chicago and studying{" "}
                        <span className="font-semibold">Computer Science and Design</span>.
                        </p>
                    </div>
                </div>
                <img
                    src={`${import.meta.env.BASE_URL}/about/vancouver.jpg`}
                    alt={`Photo of me`}
                    className="w-full h-auto block rounded-full mt-8 border border-white/10"
                    loading="lazy"
                  />
                <p className="font-nhgText text-sm md:text-xl text-white/90 py-8">
                  I love creative technology and exploring career paths in fullstack 
                  and web app development, project management, and UI/UX design.
                  In my free time, besides coding, I love to travel, watch movies,
                  write, sing, draw, and do theatre!
                </p>
                <img
                    src={`${import.meta.env.BASE_URL}/about/wood.jpg`}
                    alt={`Photo of me`}
                    className="w-full h-auto block rounded-full mt-2 border border-white/10"
                    loading="lazy"
                  />
              
              </div>
            </div>
          </div>

          {/* Right column (Tools card) */}
          <div className="w-full md:w-[550px]">
            <div className="border border-white/10 rounded-xl bg-white/10 p-6 pb-8 mt-20 lg:mt-40">
              <div className="flex flex-col items-center justify-center gap-10">
                {/* <img
                    src={`${import.meta.env.BASE_URL}/about/grad.png`}
                    alt={`Photo of me`}
                    className="w-[55%] h-auto block rounded-full mt-8 border border-white/10"
                    loading="lazy"
                  /> */}
                <div className="flex flex-col items-start">
                  <div className="flex gap-2 mb-2 mt-4 justify-center">
                    <h3 className="rounded-full bg-white font-semibold px-4 py-1 text-lg tracking-wider text-black">
                      Tools I Use:
                    </h3>
                  </div>

                  <div className="pt-8 flex gap-2">
                    <h3 className="text-[16px] font-semibold tracking-wider text-white mb-1">
                      Coding
                    </h3>
                  </div>
                  <div className="text-[16px] flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Javascipt", "Tailwind", "Python", "C/C++", "Firebase", "SQL", "REST API", "FastAPI"].map(
                      (t, i) => (
                        <span
                          key={i}
                          className="mt-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>

                  <div className="pt-8 flex gap-2">
                    <h3 className="text-[16px] font-semibold tracking-wider text-white mb-1">
                      Design
                    </h3>
                  </div>
                  <div className="text-[16px] flex flex-wrap gap-2">
                    {[
                      "Adobe Creative Suite",
                      "Photoshop",
                      "InDesign",
                      "Illustrator",
                      "After Effects",
                      "Figma",
                      "Blender",
                      "Maya",
                      "Canva",
                    ].map((t, i) => (
                      <span
                        key={i}
                        className="mt-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                <div className="pt-8 flex gap-2">
                    <h3 className="text-[16px] font-semibold tracking-wider text-white mb-1">
                      My Pockets
                    </h3>
                  </div>
                  <div className="text-[16px] flex flex-wrap gap-2">
                    {[
                      "Sunshine"
                    ].map((t, i) => (
                      <span
                        key={i}
                        className="mt-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
