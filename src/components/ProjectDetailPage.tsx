import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../lib/projectData";
import Footer from "./Footer";
import { ArrowLeft, UserRound, Calendar, Wrench, Wand, Info } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import WorldNotes from "./Projects/WorldNotes";
import Clarity from "./Projects/Clarity";
import YCGH from "./Projects/YCGH";
import Biomed from "./Projects/Biomed";
import FolioFolds from "./Projects/FolioFolds";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOutExpo,
        delay: i * 0.06,
      },
    }),
  };


  if (!project) {
    return (
      <main className="min-h-screen bg-[#131415] pt-[80px] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-md bg-[#008BE8] px-4 py-2 hover:bg-[#006fbb]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
        </div>
      </main>
    );
  }

  const {
    title,
    githubUrl,
    vid,
    fullDescription,
    status,
    link,
    features = [],
    problem,
    subProblem, 
    solution,
    skills = [],
    tools,
    role,
    timeline,
    milestones = [],
    keyProblemDescriptions,
    keyProblems,
  } = project;

  return (
    <main className="font-nhgMono min-h-screen overflow-x-clip bg-white text-black">
     
      {/* Summary band (matches screenshot spacing) */}
      <section className="pt-40">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-xl p-6">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{
                once: true,          
                amount: 0.01,         
                margin: "0px 0px -8% 0px", 
              }}
            >
            <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex text-md items-center gap-2 border border-black rounded-full px-4 pr-6 py-2 text-black/90 hover:text-white hover:bg-black transition"
            >
              <ArrowLeft className="h-5 w-5" />
              Return to homepage
            </button>
          </motion.div>

            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              custom={2}
              viewport={{
                once: true,          
                amount: 0.01,         
                margin: "0px 0px -8% 0px", 
              }}
            >
              <h3 className="mt-4 font-nhgDisplay text-5xl md:text-6xl leading-[1.25] ">{title}</h3>
            </motion.div>
              <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              custom={3}
              viewport={{
                once: true,          
                amount: 0.01,         
                margin: "0px 0px -8% 0px", 
              }}
            >
              <h4 className="font-nhgDisplay mt-20 font-semibold">Overview</h4>
              <p className="font-nhgMono mt-2 opacity-90 text-xl md:text-2xl">{fullDescription}</p>
            </motion.div>
                {status && (
              <div className="mt-10 flex w-full rounded-full bg-black p-4 px-6 border border-white/10">
                    <div className="flex  gap-2">
                    <Info className="fill-white stroke-black"/>
                    <span className="font-semibold text-white">Status:</span>
                    </div>
                    <p className="flex items-center font-nhgText pl-8 md:pl-2 w-full text-white text-sm md:text-md ">
                      {status}
                    </p>
                  </div>
                )}
                 {link && (
              <div className="mt-10 flex w-full rounded-full bg-black p-4 px-6 border border-white/10">
                      <span className="font-semibold text-white whitespace-nowrap">Check out the project!</span>
                    <a href={link} target="_blank" rel="noopener noreferrer" 
                      className="cursor-pointer flex items-center font-nhgText pl-8 md:pl-4 w-full text-white text-sm md:text-md ">
                      {link}
                    </a>
                  </div>
                )}
            {vid ? (
            <div className=" mx-auto mt-10">
                <h3 className="mt-16 text-2xl">
                    Concept Video
                </h3>
                <div className=" mt-5 relative aspect-[21/13] overflow-hidden rounded-lg">
                    <video
                        src={`${import.meta.env.BASE_URL}YCGH/YCGH_Concept_Vid.mp4`}
                        controls
                        autoPlay
                    />
                </div>
              </div>
          ) : (
            <section >
              <div className="mx-auto mt-10">
                <div className="overflow-hidden  border border-white/20 rounded-lg">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.imageUrl2}`}
                    alt="Project mock"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </section>
          )}

            {/* Top specs row: My Role / Skills / Tools / Timeline + See the Code */}
            <section className="">
              <div className="mx-auto w-full max-w-6xl border border-white/10 rounded-xl bg-black p-10 mt-10">
                <div className="rounded-xl">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                  {/* Column 1: My Role + Timeline */}
                    <div className="flex flex-col items-start justify-between gap-10">                

                      {/* My Role */}
                      <div>
                        <div className="flex gap-2">
                          <UserRound size="25" color="white"/>
                          <h3 className="text-2xl tracking-wider text-white">
                            Role
                          </h3>
                        </div>
                        <p className="mt-2 text-[14px] text-white/90 max-w-md">
                          {role}
                        </p>
                      </div>     
                        {/* Timeline */}
                      <div className="w-full ">
                        <div className="flex gap-2">
                          <Calendar size="25" color="white"/>
                          <h3 className="text-2xl tracking-wider text-white ">
                            Timeline
                          </h3>
                        </div>
                        <p className="mt-2 text-[14px] text-white/90">{timeline} </p>
                      </div>                
                    </div>

                    {/* Column 2: Skills */}
                    {/* Skills */}
                    <div>
                      <div className="flex gap-2">
                        <Wand size="25" color="white"/>
                      <h3 className="text-2xl tracking-wider text-white">
                        Skills
                      </h3>
                      </div>
                      <ul className="mt-2 text-[14px] space-y-1 text-white/90 list-disc list-inside">
                        {(skills).map(
                          (s, i) => (
                            <li key={i}>{s}</li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Column 3: Tools + See Code */}
                    <div className="flex flex-col items-start justify-between gap-8"> 
                      <div>
                        <div className="flex gap-2">
                          <Wrench size="25" color="white"/>
                        <h3 className="text-2xl tracking-wider text-white">
                          Tools
                        </h3>
                      </div>
                      <div className="mt-2 text-[14px] flex flex-wrap gap-2">
                        {(tools.length ? tools : ["React", "Next.js", "TypeScript"]).map(
                          (t, i) => (
                            <span
                              key={i}
                              className="mt-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white ring-1 ring-white/20"
                            >
                              {t}
                            </span>
                          )
                        )}
                        </div>
                      </div>

                      {/* See code button */}
                      <div className="flex flex-colitems-start justify-between gap-4 ">
                        {githubUrl && (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-nhgMono inline-flex text-bolder mt-2 items-center gap-1 rounded-full border border-white/50 px-10 py-2 text-white hover:bg-white hover:text-black transition"
                          >
                            See the Code  <ArrowLeft className="h-6 w-6 rotate-180" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>


      <div className="flex flex-col justify-center items-center text-center mt-40 mx-auto w-full max-w-6xl px-6">
        <h4 className="font-nhgDisplay text-white font-semibold bg-blue-haze px-4 py-2 rounded-full">Problem</h4>
        <h3 className="font-nhgMono text-xl md:text-2xl mt-8 text-black font-bolder max-w-4xl">{problem} </h3>
        <p className="mt-4 text-black/75 max-w-2xl">{subProblem}</p>
        {keyProblems && keyProblems.length > 0 && keyProblemDescriptions && keyProblemDescriptions.length === keyProblems.length && (
            <div className="mt-10 px-4 flex flex-wrap gap-6 justify-center w-full">
            {keyProblems.map((problem, idx) => (
              <div
              key={idx}
              className="flex flex-col text-left items-start bg-black border border-white/10 rounded-xl p-6 min-w-[220px] max-w-xs flex-1"
              >
              <h5 className="text-xl md:text-lg font-bolder text-white mb-4">{problem}</h5>
              <p className="text-sm text-white/75">{keyProblemDescriptions[idx]}</p>
              </div>
            ))}
            </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-40 mx-auto w-full max-w-6xl px-8">
        <h4 className="font-nhgDisplay text-white font-semibold bg-blue-haze px-4 py-2 rounded-full">Solution</h4>
        <h3 className="font-nhgMono mt-8 text-xl md:text-2xl font-normal text-black max-w-4xl">
          {solution}
        </h3>
      </div>


      {/* Key Features (two-column bullets) */}
      {features.length > 0 && (
        <section className="mt-32">
          <div className="mx-auto w-full max-w-6xl px-8">
            <div className="rounded-xl border border-white/15 bg-black p-6 pb-10">
              <h3 className="font-nhgDisplay text-xl mb-4 text-white">Key Features</h3>
              <div className="grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-2">
                <ul className="list-disc list-inside space-y-2 text-white/85">
                  {features.slice(0, Math.ceil(features.length / 2)).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside space-y-2 text-white/85">
                  {features.slice(Math.ceil(features.length / 2)).map((feature, idx) => (
                    <li key={idx + Math.ceil(features.length / 2)}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {project.id === "worldnotes" ? 
        <WorldNotes/> : project.id === "clarity" 
        ? <Clarity/> : project.id === "YCGH"
        ? <YCGH/> : project.id === "biomed"
        ? <Biomed/> :  project.id === "foliofolds"
        ? <FolioFolds/> : null}

      {/* Next Milestones card */}
      {milestones.length > 0 && (
      <section className="mt-20 mb-40">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-xl border border-white/15 bg-black p-10">
            <h3 className="font-semibold text-white text-2xl">Next Milestones</h3>
            <div className="mt-4 space-y-6">
              {(milestones).map((m, i) => (
                <div key={i}>
                  <h4 className="font-bolder text-white">{m}</h4>
                  <p className="mt-1 text-xs text-white/60">
                    Elevate fidelity and gather analytics to iterate quickly.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>)}

      {/* Footer banner (use your existing component) */}
      <section className="mt-16">
        <Footer />
      </section>
    </main>
  );
}
