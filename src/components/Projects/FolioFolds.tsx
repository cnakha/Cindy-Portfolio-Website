
function Line(){
  return <div className="h-[1px] w-full bg-white/50" />
}

export default function FolioFolds() {
 const tech = [
  'Three.js',
  'React + Next.js',
  'TypeScript',
  'WebGL + Shader Programming',
  'WebXR / AR',
  'Node.js / Express (Future scaling)',
  'Vercel Deployment',
];

const techDescriptions = [
  'Three.js powers the real-time 3D rendering and interaction system, enabling detailed page-turn animations, fold mechanics, and material effects.',
  'React + Next.js provide a modern web architecture with component-based UI, server-side rendering, and fast client-side transitions.',
  'TypeScript ensures strong type-safety across rendering logic, UI components, and scene data, preventing errors and improving maintainability as the tool scales.',
  'WebGL and custom shader logic enable realistic paper behavior, bends, shadows, lighting, texture mapping, and subtle material effects that mimic physical print.',
  'WebXR enables augmented reality viewing, allowing users to place and explore digital publications in physical environments through supported devices.',
  'Node.js and Express are part of the planned backend expansion for cloud asset handling, collaboration tools, publication sharing, and persistent project storage.',
  'Vercel is used for fast deployment, preview environments, and CI/CD automation, ensuring seamless updates and reliable hosting for interactive WebGL experiences.',
];

const accessibillity = [
  'Immediate feedback — changes are reflected in real-time 3D, reinforcing exploration through visual reward.',
  'Clear interaction cues and visual markers for actionable elements (drag edges, fold handles, navigation).',
  'Keyboard-friendly controls and focus-states for primary actions like rotating, flipping, and zooming.',
  'Encouraging unexpected outcomes — folds and page sequences can be rearranged on the fly.',
  'Play without penalty — undo/redo, safe drafts, and autosave encourage bold experimentation',
  'Warm, non-intimidating UI — soft motion, gallery-like space, and tooltips that feel like guidance rather than instruction',
];

  
    return (
    <section className="mt-40">
        
      <div className="font-nhgDisplay bg-[#B3C4E3] text-black">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]"> 
            <div className="mt-20 mb-10 sm:pr-10 md:mb-0 ml-10  md:ml-[15%]">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
                Import Images and PDFs, Choose a Template, Then Begin!
              </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
                Users can import images and PDFs, select from a variety of templates, and customize their designs with intuitive tools.
              </p>          
            </div>     
          <div className="scrollable-panel relative h-full lg:overflow-hidden overflow-x-auto">
            <div className="relative h-full aspect-[22/15] overflow-hidden">
              <img
                src={"/foliofolds/landing.png"}
                alt={`Note Traversal and Discovery`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>  
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2"> 
          <div
            className="
              order-2 md:order-1 relative overflow-hidden
              md:w-full md:translate-x-0
              z-0
            "
          >
          <div className="scrollable-panel relative h-full lg:overflow-hidden overflow-x-auto">
            <div className="h-full aspect-[22/15]">
              <img
                src="/foliofolds/folding.png"
                alt="Note Traversal and Discovery"
                className="h-full w-full object-cover"
              />
            </div>
            </div>
          </div> 
          <div className="mt-[15%] mb-20 md:mr-[15%] mx-10 md:ml-[15%] order-1 md:order-2">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
              Dynamically Fold your Pages Digitally
            </h3>
              <p className="mt-10 text-black/75 text-[1.25rem] md:text-[1rem] lg:text-xl">
            Handle paper folding with ease using intuitive gestures like pinch-to-fold and drag-to-unfold.
            </p>          
          </div>    
        </div>


          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]"> 
            <div className="mt-20 mb-10 sm:pr-10 md:mb-0 ml-10 md:ml-[15%]">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
              Create Unique Layouts and Binds
            </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
              Move and resize elements freely to create unique layouts. Choose from various binding and page styles like spiral binds, stitched binds, textured paper, to glossy paper.
            </p>          
            </div>      
                      <div className="scrollable-panel relative h-full lg:overflow-hidden overflow-x-auto">

          <div className="relative h-full aspect-[22/15] overflow-hidden">
            <img
              src={"/foliofolds/move.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>  
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2"> 
          <div
            className="
              order-2 md:order-1 relative overflow-hidden
              md:w-full md:translate-x-0
              z-0
            "
          >
          <div className="scrollable-panel relative h-full lg:overflow-hidden overflow-x-auto">
            <div className="h-full aspect-[22/15]">
            <img
              src={"/foliofolds/cutting.png"}
              alt={`Note Traversal and Discovery`}
                className="h-full w-full object-cover"
            />
          </div>  
          </div>
          </div>
          <div className="mt-[15%] mb-20 md:mr-[15%] mx-10 md:ml-[15%] order-1 md:order-2">
            <h3 className="mt-2 text-4xl font-semibold">
              Cut Pages with Ease and Precision
            </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
                Users can easily create cutouts and custom shapes on their pages using cutting tools inspired by paper cutter sliders.
             </p>          
          </div>     
        </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]"> 
            <div className="mt-20 mb-10 sm:pr-10 md:mb-0 ml-10 md:ml-[15%]">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
              Share & Publish Your Creations with the World
            </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
                Creators can generate a share link or embed, allowing publications to live online like interactive artifacts — not static images or PDFs. </p>          
            </div>      
                      <div className="scrollable-panel relative h-full lg:overflow-hidden overflow-x-auto">

          <div className="relative h-full aspect-[22/15] overflow-hidden">
            <img
              src={"/foliofolds/share.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            </div>
          </div>  
        </div>

      </div>
        
      <Line/>



      {/* Process Section */}
      <div className="max-w-6xl px-10 flex flex-col mx-auto mt-40 mb-40">
        <h3 className="font-nhgDisplay text-white text-6xl ">The Process</h3>
        <h3 className="mt-20 text-4xl">
          Step 1 — Inspiration and Research
        </h3>
        <p className="mt-10 text-sm text-white/70 max-w-4xl leading-relaxed text-xl">
          Paper engineering and bookbinding have a rich history that spans centuries and although the medium has a more enriching impact in its physical form, exploring ways to convey these physical properties digitally can allow designers to share our work's potential more captivatingly and serve as an interesting archival method. 
          <br/><br/>
          To design FolioFolds, I researched traditional techniques and modern digital tools to understand how people interact with physical publications and to find physical qualities I should replicate.
          The challenge then became: 
        </p>
        <p className="mt-10 italic text-white text-3xl"> How can we design a user friendly tool to construct prints in 3D that captures the tactility of traditional paper engineering?</p>

        <h3 className="mt-40 text-4xl ">
          Step 2 — Design Philosophy
        </h3>
        <p className="mt-10 text-sm text-white/70 max-w-5xl leading-relaxed text-xl">
          The core design values for FolioFolds centered around <span className="italic text-white font-semibold">simplicity, appreciation, and accessibility.</span>
        </p>

          <div className="mt-10 flex flex-col text-left items-start rounded-xl p-6 ">
            <h4 className=" font-semibold">
              Simplicity and Intuitiveness
            </h4>
            <p className="mt-4 max-w-4xl text-xl text-white/70">
              Simplicity was key to ensure that users of all skill levels could easily navigate the interface and create their own foldable publications without feeling overwhelmed by complex tools or features.
            </p>

            <h4 className=" mt-10 font-semibold">
              Digital Craft, Physical Sensibility
            </h4>
            <p className="mt-4 max-w-4xl text-xl text-white/70">
              The interface reflects the world of book arts: soft, tactile UI with subtle texture references.
              The digital tools mimic traditional paper engineering techniques while visually resembling current 3D modeling and design software.
              Gestures reminiscent of handling real books — pinch, drag, peek, unfold
            </p>

            <h4 className="mt-10 font-semibold">
              Celebration of Print Culture
            </h4>
            <p className="mt-4 max-w-4xl text-xl text-white/70">
               FolioFolds elevates printed matter as living, interactive media, bridging the gap between physical craft and digital storytelling.
            </p>
          </div>        

       

        <h3 className="mt-40 text-4xl">
          Step 3 — Prototyping and Designing Behaviours 
        </h3>
        <p className="mt-10 text-sm text-white/50 max-w-4xl leading-relaxed text-xl">
          To bring folding mechanics and material interactions to life, I built iterative prototypes exploring how paper should move, react, and feel in a digital environment. Early explorations included simplified books and basic hinge systems, gradually evolving into physics-informed page bends, easing curves, motion, weight, tension, and natural drag gestures. 
          This stage helped define the visual language, interaction rhythm, and tactile qualities that should be made adjustable for the user.
        </p>


        <h3 className="mt-40 text-4xl ">
          Step 4 — Interaction and Usability Tests
        </h3>
        <p className="mt-10 text-sm text-white/50 max-w-4xl leading-relaxed text-xl">
          With functional interactions in place, I conducted informal testing sessions with design students, book artists, and casual users to refine usability and user flow. 
          These sessions highlighted key needs: intuitive camera controls, clear affordances for flipping and unfolding, and a forgiving learning curve for newcomers. 
          <br/><br/>
          Based on feedback, I streamlined gesture input, introduced subtle visual prompts, and optimized transitions for clarity and comfort. 
          The iterative feedback loop ensured the interface remains approachable for beginners while still offering creative depth for expert users.
        </p>
        
        <div>
        <h3 className="mt-20 text-4xl ">
          Technologies
        </h3>
        <p className="mt-10 text-sm text-white/50 max-w-4xl leading-relaxed text-xl">
          The following tools make up the core technology stack for FolioFolds:
        </p>
        
        <div className="mt-12 md:px-20 flex flex-wrap gap-6 justify-center w-full">
          {tech.map((inspo, idx) => (
            <div
            key={idx}
            className="flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 min-w-[220px] min-h-[220px] max-w-xs flex-1"
            >
            <h5 className="text-lg font-bolder text-white mb-4">{inspo}</h5>
            <p className="text-sm text-white/50">{techDescriptions[idx]}</p>
            </div>
          ))}
        </div>

        
        <h3 className="mt-20 text-4xl">
          Designing for Creativity
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
          Empowering creativity was at the heart of FolioFold's design. My goal was to design an environment where users feel invited to experiment just as they would with paper, scissors, and a blank table.
          <br/><br/>
        </p>
        <ul className="list-disc mt-4 text-xl pl-20 space-y-2 text-white/75">
          {accessibillity.slice(0, accessibillity.length ).map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

          {/* <div className="mt-20 flex flex-col text-center justify-center">
            <h3 className="text-4xl font-bolder leading-tight text-blue-haze-light mt-20 text-center ">
              FolioFolds is finalizing its design and beginning development... Stay tuned for updates!
            </h3>
          </div> */}
        </div>
      </div>
    </section>
    );
}