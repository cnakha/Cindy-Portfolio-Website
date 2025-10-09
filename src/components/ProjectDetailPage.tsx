import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../lib/projectData";
// import imgChicago from "./public/chicago_bg.png";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react";
import WorldNotes from "./Projects/WorldNotes";
import Clarity from "./Projects/Clarity";
import YCGH from "./Projects/YCGH";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#1e1e1e] pt-[84px] text-white flex items-center justify-center">
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
    <main className="min-h-screen bg-[#1e1e1e] text-white">
      {/* Banner */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt="Banner"
          className="absolute inset-0 w-full object-cover"
          style={{ objectPosition: "center top", transform: "translateY(-25%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#008BE8]/70 via-[#1e1e1e]/10 to-[#1e1e1e]" />
      </section>

      {/* Summary band (matches screenshot spacing) */}
      <section className="mt-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-xl p-6">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex items-center gap-2 rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Return
            </button>

            <h3 className="mt-4 text-white text-6xl leading-[1.25] font-semibold">{project.title}</h3>
            {/* <p className={`text-white/40 text-xl ${project.id === "YCGH" ? "mt-4" : "mt-2"}`}>{project.category}</p> */}
            <p className="mt-12 text-white/75 text-[24px]">{project.fullDescription}</p>

          </div>
        </div>
      </section>

      {/* Top specs row: My Role / Skills / Tools / Timeline + See the Code */}
      <section className="mt-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-xl border border-white/10 bg-[#1f1f1f] p-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

             {/* Column 1: My Role + Timeline */}
              <div className="flex flex-col items-start justify-between gap-8">                

                {/* My Role */}
                <div>
                  <h3 className="text-[24px] tracking-wider text-white font-semibold">
                    My Role
                  </h3>
                  <p className="mt-2 text-[16px] text-white/80 max-w-md">
                    {role ||
                      "As the only developer and designer, I built this app end-to-end from ideation to launch."}
                  </p>
                </div>

                {/* Timeline */}
                <div className="w-full mt-4">
                  <h3 className="text-[24px] tracking-wider text-white font-semibold">
                    Timeline
                  </h3>
                  <p className="mt-2 text-[16px] text-white/80">
                    {timeline || "June 2025 – Present"}
                  </p>
                </div>
              </div>

              {/* Column 2: Skills */}
              {/* Skills */}
              <div>
                <h3 className="text-[24px] tracking-wider text-white font-semibold">
                  Skills
                </h3>
                <ul className="mt-2 space-y-1 text-[16px] text-white/80 list-disc list-inside">
                  {(skills.length ? skills : ["UI/UX Design", "Web Development", "Wireframing", "SEO"]).map(
                    (s, i) => (
                      <li key={i}>{s}</li>
                    )
                  )}
                </ul>
              </div>

              {/* Column 3: Tools + See Code */}
              <div>
                <h3 className="text-[24px] tracking-wider text-white font-semibold">
                  Tools
                </h3>
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
                <div className="flex flex-col items-start justify-between gap-4 ">
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-[16px] mt-8 items-center gap-2 rounded-full border border-white/50 px-10 py-2 text-sm text-white/50 hover:bg-white/10"
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

       {/* Big image */}
            <section className="mt-8">
              <div className="mx-auto max-w-6xl mt-10">
                <div className="overflow-hidden rounded-lg border border-white/20">
                  <img
                    src={`${project.imageUrl2}`}
                    alt="Project mock"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </section>

      {/* <div className="grid grid-cols-1 mt-20 mx-auto w-full max-w-6xl px-6 md:grid-cols-2">
        {(problem || true) && (
          <section className="mt-10">
            <div className="mx-auto w-full max-w-6xl px-6">
              <h4 className="text-white font-semibold">Problem</h4>
              <h3 className="mt-2 text-2xl font-semibold">
                {problem ||
                  "How can we promote authentic visual expression and global communication while elevating the medium with new technologies?"}
              </h3>
              <p className="mt-4 text-sm text-white/70">
                {subProblem || "Authentic connection can be expanded through shared, visual notes and geolocated discovery—creating richer casual browsing and meaningfulinteractions."}
              </p>
            </div>
          </section>
        )}

        {(solution || true) && (
          <section className="mt-10">
            <div className="mx-auto w-full max-w-6xl px-6">
              <h4 className="text-white font-semibold">Solution</h4>
              <p className="mt-2 text-xl text-white/80">
                {solution ||
                  "A social platform that embraces visual self-expression. Users place 2D/3D notes on a map using Street View, discover others’ notes, and explore city-scale stories. Built end-to-end with a focus on joyful micro-interactions and fast iteration."}
              </p>
            </div>
          </section>
        )}
      </div> */}

      <div className="flex flex-col justify-center items-center text-center mt-40 mx-auto w-full max-w-6xl px-6">
        <h4 className="text-white font-semibold">Problem</h4>
        <h3 className="mt-2 text-2xl text-white/90 font-bolder max-w-3xl">
          {problem ||
            "How can we promote authentic visual expression and global communication while elevating the medium with new technologies?"}
        </h3>
        <p className="mt-4 text-white/50 max-w-3xl">
          {subProblem || "Authentic connection can be expanded through shared, visual notes and geolocated discovery—creating richer casual browsing and meaningfulinteractions."}
        </p>
      {keyProblems && keyProblems.length > 0 && keyProblemDescriptions && keyProblemDescriptions.length === keyProblems.length && (
          <div className="mt-8 flex flex-wrap gap-6 justify-center w-full">
          {keyProblems.map((problem, idx) => (
            <div
            key={idx}
            className="flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 min-w-[220px] max-w-xs flex-1"
            >
            <h5 className="text-lg font-bolder text-white/90 mb-4">{problem}</h5>
            <p className="text-sm text-white/50">{keyProblemDescriptions[idx]}</p>
            </div>
          ))}
          </div>
      )}
      </div>


      {/* Key Features (two-column bullets) */}
      <section className="mt-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-xl border border-white/15 bg-[#1f1f1f] p-6 pb-10">
            <h3 className="mb-4 text-white text-xl font-semibold">Key Features</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ul className="list-disc list-inside space-y-2 text-white/85">
                {(features.length
                  ? features.slice(0, Math.ceil(features.length / 2))
                  : [
                      "Street View Note Traversal and Discovery",
                      "Animated Post Viewer",
                      "Personalized User Profiles",
                    ]
                ).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <ul className="list-disc list-inside space-y-2 text-white/85">
                {(features.length
                  ? features.slice(Math.ceil(features.length / 2))
                  : ["Custom Note Creator", "Animated Post Viewer", "Responsive UI"]
                ).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
              

      {project.id === "worldnotes" ? 
      <WorldNotes/> : project.id === "clarity" 
      ? <Clarity/> : project.id === "YCGH"
      ? <YCGH/> : null}

      {/* Next Milestones card */}
      {milestones.length > 0 && (
      <section className="mt-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-xl border border-white/15 bg-[#222] p-6">
            <h3 className="text-white font-semibold">Next Milestones</h3>
            <div className="mt-4 space-y-6">
              {(milestones).map((m, i) => (
                <div key={i}>
                  <h4 className="font-semibold">{m}</h4>
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
