import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../lib/projectData";
// import imgChicago from "./public/chicago_bg.png";
import Footer from "./Footer";
import { ArrowLeft, UserRound, Calendar, Wrench, Wand } from "lucide-react";
import WorldNotes from "./Projects/WorldNotes";
import Clarity from "./Projects/Clarity";
import YCGH from "./Projects/YCGH";
import Biomed from "./Projects/Biomed";
import FolioFolds from "./Projects/FolioFolds";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#131415] pt-[80px] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
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
    description,
    category,
    githubUrl,
    imageUrl,
    vid,
    fullDescription,
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
    <main className="font-nhgMono min-h-screen overflow-x-clip bg-[#131415] text-white">
     
      {/* Summary band (matches screenshot spacing) */}
      <section className="pt-32">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-xl p-6">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex text-xl items-center gap-2 rounded-[25px] px-2 pr-6 py-2 text-white/90 hover:bg-white/10 transition"
            >
              <ArrowLeft className="h-7 w-7" />
              Return
            </button>

            <h3 className="mt-4 text-white text-6xl leading-[1.25] ">{project.title}</h3>
            {project.vid ? (
            <div className=" mx-auto mt-10">
                <h3 className="mt-16 text-2xl">
                    Concept Video
                </h3>
                <div className=" mt-5 relative aspect-[21/13] overflow-hidden rounded-lg">
                    <video
                        src={'/YCGH/YCGH_Concept_Vid.mp4'}
                        controls
                    />
                </div>
              </div>
          ) : (
            <section className="mt-10">
              <div className="mx-auto mt-10">
                <div className="overflow-hidden  border border-white/20 rounded-lg">
                  <img
                    src={`${project.imageUrl2}`}
                    alt="Project mock"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </section>
          )}

            {/* Top specs row: My Role / Skills / Tools / Timeline + See the Code */}
            <section className="mt-10">
              <div className="mx-auto w-full max-w-6xl">
                <div className="rounded-xl">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                  {/* Column 1: My Role + Timeline */}
                    <div className="flex flex-col items-start justify-between gap-8">                

                      {/* My Role */}
                      <div>
                        <div className="flex gap-2">
                          <UserRound size="25"/>
                          <h3 className="text-2xl tracking-wider text-white">
                            Role
                          </h3>
                        </div>
                        <p className="mt-2 text-[16px] text-white/80 max-w-md">
                          {role}
                        </p>
                      </div>

                      {/* Timeline */}
                      <div className="w-full ">
                        <div className="flex gap-2">
                          <Calendar size="25"/>
                          <h3 className="text-2xl tracking-wider text-white ">
                            Timeline
                          </h3>
                        </div>
                        <p className="mt-2 text-[16px] text-white/80">
                          {timeline || "June 2025 – Present"}
                        </p>
                      </div>
                    </div>

                    {/* Column 2: Skills */}
                    {/* Skills */}
                    <div>
                      <div className="flex gap-2">
                        <Wand size="25"/>
                      <h3 className="text-2xl tracking-wider text-white">
                        Skills
                      </h3>
                      </div>
                      <ul className="mt-2 space-y-1  text-white/80 list-disc list-inside">
                        {(skills.length ? skills : ["UI/UX Design", "Web Development", "Wireframing", "SEO"]).map(
                          (s, i) => (
                            <li key={i}>{s}</li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Column 3: Tools + See Code */}
                    <div>
                      <div className="flex gap-2">
                        <Wrench size="25"/>
                      <h3 className="text-2xl tracking-wider text-white">
                        Tools
                      </h3>
                      </div>
                      <div className="mt-2 text-[16px] flex flex-wrap gap-2">
                        {(tools.length ? tools : ["React", "Next.js", "TypeScript"]).map(
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

                      {/* See code button */}
                      <div className="flex flex-col mt-2 items-start justify-between gap-4 ">
                        {githubUrl && (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-nhgMono inline-flex text-bolder mt-8 items-center gap-1 rounded-full border border-white/50 px-10 py-2 text-white hover:bg-white hover:text-black transition"
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

            <h4 className="font-nhgDisplay mt-20 text-white font-semibold">Overview</h4>
            <p className="font-nhgMono mt-4 text-white/75 text-[24px]">{project.fullDescription}</p>

          </div>
        </div>
      </section>


      <div className="flex flex-col justify-center items-center text-center mt-40 mx-auto w-full max-w-6xl px-6">
        <h4 className="font-nhgDisplay text-white font-semibold bg-blue-haze px-4 py-2 rounded-[20px]">Problem</h4>
        <h3 className="font-nhgMono mt-8 text-3xl text-white/90 font-bolder max-w-3xl">
          {problem ||
            "How can we promote authentic visual expression and global communication while elevating the medium with new technologies?"}
        </h3>
        <p className="mt-4 text-white/50 max-w-2xl">
          {subProblem || "Authentic connection can be expanded through shared, visual notes and geolocated discovery—creating richer casual browsing and meaningfulinteractions."}
        </p>
        {keyProblems && keyProblems.length > 0 && keyProblemDescriptions && keyProblemDescriptions.length === keyProblems.length && (
            <div className="mt-8 px-4 flex flex-wrap gap-6 justify-center w-full">
            {keyProblems.map((problem, idx) => (
              <div
              key={idx}
              className="flex flex-col text-left items-start bg-white/10 border border-white/10 rounded-xl p-6 min-w-[220px] max-w-xs flex-1"
              >
              <h5 className="text-lg font-bolder text-white/90 mb-4">{problem}</h5>
              <p className="text-sm text-white/75">{keyProblemDescriptions[idx]}</p>
              </div>
            ))}
            </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-40 mx-auto w-full max-w-6xl px-8">
        <h4 className="font-nhgDispla ytext-white font-semibold bg-blue-haze px-4 py-2 rounded-[20px]">Solution</h4>
        <h3 className="font-nhgMono mt-8 text-3xl font-normal text-white/90 max-w-4xl">
          {solution}
        </h3>
      </div>


      {/* Key Features (two-column bullets) */}
      {features.length > 0 && (
        <section className="mt-32">
          <div className="mx-auto w-full max-w-6xl px-8">
            <div className="rounded-xl border border-white/15 bg-white/10 p-6 pb-10">
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
          <div className="rounded-xl border border-white/15 bg-[#222] p-6">
            <h3 className="font-semibold text-white text-2xl">Next Milestones</h3>
            <div className="mt-4 space-y-6">
              {(milestones).map((m, i) => (
                <div key={i}>
                  <h4 className="font-bolder">{m}</h4>
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
