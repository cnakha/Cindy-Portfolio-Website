import Footer from "./Footer";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function AboutMePage() {
  const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

    const fadeSlide: Variants = {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      exit: { opacity: 0, y: -16, transition: { duration: 0.35, ease: EASE } },
    };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <div className="flex flex-col justify-center mx-auto px-[10%] pb-10 bg-white/10 mt-32">
        <motion.div
              key="motionsense"
              id="collage"
              role="tabpanel"
              aria-labelledby="tab-motionsense"
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex gap-4 mt-10"
          >
          <img
                src={`${import.meta.env.BASE_URL}/about/img1.jpg`}
                alt={`Photo of me`}
                className="w-1/4 h-auto block rounded-2xl object-cover"
                loading="lazy"
            />
            <div className="flex flex-col gap-4 w-1/2">
              <img
                src={`${import.meta.env.BASE_URL}/about/vancouver.jpg`}
                alt={`Photo of me`}
                className="w-full h-auto block rounded-2xl object-cover"
                loading="lazy"
              />     
              <img
                src={`${import.meta.env.BASE_URL}/about/wood.jpg`}
                alt={`Photo of me`}
                className="w-full h-auto block rounded-2xl"
                loading="lazy"
              />
             </div>   
          <img
            src={`${import.meta.env.BASE_URL}/about/grad.png`}
            alt={`Photo of me`}
            className="w-1/3 h-auto block rounded-2xl object-cover"
            loading="lazy"
          />  
        </motion.div> 
 
        <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-10 py-10">
          
          {/* Left column (About paragraphs) */}
          <div className="">
            <div className="max-w-2xl w-full overflow-hidden">
              
              <div className="">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex flex-col gap-4 ">
                      <h1 className="font-nhgDisplay text-2xl text-white mb-2 ">
                          Background
                      </h1>
                        <p className="font-nhgText text-[16px] md:text-xl text-white/90 mb-4">
                          Hi! I'm Cindy Nakhammouane, a <span className="font-semibold ">Fullstack Developer and UI/UX
                          Designer</span> currently enrolled in my fourth year at the University
                          of Illinois Chicago and studying{" "}
                          <span className="font-semibold ">Computer Science and Design</span>.
                          
                        </p>
                    </div>
                </div>
                <p className="font-nhgText text-[16px] md:text-xl text-white/90 py-4">
                  Creating is freedom. Since forever, I've always been drawn toward expressing myself through various creative avenues as well as living to learn, 
                  so I naturally grew an interest in blending the worlds of technology and art. 
                  I love that creative technology is always evolving and I would love to spend my life 
                  exploring it and making cool stuff. 
                  <br/> <br/>
                  I'm currently interested in career paths in fullstack 
                  and web app development, creative directing + project management, and UI/UX design.
                </p>
                <p className="font-nhgText text-[16px] md:text-xl text-white/90 pt-4 ">
                  Random stuff about me: 
                </p>
                <ul className="font-nhgText text-[16px] md:text-md text-white/90 py-4 list-disc list-inside">
                  <li>In my free time, I love to travel, watch movies, write, sing, draw, and do theatre!</li>
                  <li>Laotian but born and raised in Chicago</li>
                  <li>I play a little bit of guitar and ukulele</li>
                  <li>Chronically online</li>
                </ul>

              </div>
            </div>
          </div>

          {/* Right column (Tools card) */}
          <div className="flex justify-center">
          <div className="flex flex-col gap-8 w-full md:max-w-[450px] min-w-[300px]">
            <div className="border border-white/10 rounded-xl bg-black p-6 pb-8">
              <div className="">
                <div className="flex flex-col items-start">
                  <div className="flex gap-2 mb-2 mt-4 justify-center">
                    <h3 className="font-nhgDisplay  py-1 text-2xl text-white">
                      Tools I Use:
                    </h3>
                  </div>

                  <div className="pt-10 flex gap-2">
                    <h3 className="text-[16px] font-semibold tracking-wider text-white mb-1">
                      Tech
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

                  <div className="pt-10 flex gap-2">
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

                <div className="pt-10 flex gap-2">
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
      </div>

      <Footer />
    </main>
  );
}
