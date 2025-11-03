
function Line(){
  return <div className="h-[1px] w-full bg-white/50" />
}

export default function FolioFolds() {
  const tech = [
    'Processing',
    'React + Node.js + TailwindCSS',
    'Figma',
    'Arduino',
    "Python",
    '3D Printing',
  ];

  const techDescriptions = [
    'Processing is a visual programming environment used for creative coding, interactive graphics, and generative art.',
    'A modern full-stack web development stack. React powers dynamic UIs, Node.js handles backend logic and APIs, and TailwindCSS enables rapid, responsive interface styling.',
    'A collaborative design tool for creating user interfaces, prototypes, and design systems with real-time feedback.',
    'An open-source electronics platform based on easy-to-use hardware and software, ideal for building interactive projects and prototypes.',
    'A versatile programming language known for its simplicity and readability, widely used in data analysis, machine learning, web development, and automation.',
    'A manufacturing process that creates three-dimensional objects by layering materials based on digital models, enabling rapid prototyping and custom designs.',
  ];
  
    return (
    <section className="mt-14">
        
      <div className="font-nhgDisplay bg-[#B3C4E3] text-black">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]"> 
            <div className="mt-20 mb-10 sm:pr-10 md:mb-0 ml-10  md:ml-[15%]">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
                Import Images and PDFs, Choose a Template, Then Go!
              </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
                FolioFolds makes it easy to create beautiful, professional-quality foldable publications. Users can import images and PDFs, select from a variety of templates, and customize their designs with intuitive tools.
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
          <div className="mt-[15%] mb-20 md:mr-[15%] ml-[15%] order-1 md:order-2">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
              Dynamically Fold your Pages Digitally
            </h3>
              <p className="mt-10 text-black/75 text-[1.25rem] md:text-[1rem] lg:text-xl">
            Users can experience the feeling of handling a physical publication digitally.
            </p>          
          </div>    
        </div>


          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]"> 
            <div className="mt-20 mb-10 sm:pr-10 md:mb-0 ml-10 md:ml-[15%]">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
              Create Unique Layouts and Binds
            </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
              Move and resize elements freely to create custom layouts. Choose from various binding and page styles like saddle stitch, perfect bind, and spiral bind to give your publication a professional finish.
            </p>          
            </div>      
          <div className="relative h-full aspect-[22/15] overflow-hidden">
            <img
              src={"/foliofolds/move.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
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
            <div className="h-full aspect-[22/15]">
            <img
              src={"/foliofolds/cutting.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>  
          </div>
          <div className="mt-[15%] mb-20 md:mr-[15%] ml-[15%] order-1 md:order-2">
            <h3 className="mt-2 text-4xl font-semibold">
              Cut Pages with Ease and Precision
            </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
                Users can easily create cutouts and custom shapes on their pages using intuitive cutting tools. This allows for unique designs and interactive elements within the publication.
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
          <div className="relative h-full aspect-[22/15] overflow-hidden">
            <img
              src={"/foliofolds/share.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>  
        </div>

      </div>
        
      <Line/>



      {/* Process Section */}
      <div className="max-w-6xl px-10 flex flex-col mx-auto mt-40">
        <h3 className="font-nhgDisplay text-white text-center text-7xl ">Creating the MVP</h3>
        <h3 className="mt-40 text-2xl font-semibold">
          Step 1 — Inspiration and Research
        </h3>
        <p className="mt-10 text-sm text-white/70 max-w-4xl leading-relaxed text-xl">
          Paper engineering and bookbinding have a rich history that spans centuries and although the medium has a more prominent impact in its physical form, exploring ways to convey these physical properties digitally can allow designers to share our works easier and serve as an archival method. 
          To design FolioFolds, I researched traditional techniques and modern digital tools to understand how people interact with physical publications.
          The challenge then became: <span className="italic text-white font-semibold"> how can we design a user friendly tool to construct prints in 3D that captures the tactility of traditional paper engineering? </span>
        </p>

        <div className="mt-40">
          <Line />
        </div>

        <h3 className="mt-40 text-2xl font-semibold">
          Step 2 — Design Philosophy
        </h3>
        <p className="mt-10 text-sm text-white/70 max-w-4xl leading-relaxed text-xl">
          The core design values for FolioFolds centered around <span className="italic text-white font-semibold">simplicity, creativity, and accessibility.</span>
          <br/><br/>
          Simplicity was key to ensure that users of all skill levels could easily navigate the interface and create their own foldable publications without feeling overwhelmed by complex tools or features.
          <br/><br/>
          Digital Craft, Physical Sensibility
          <br/><br/>
The interface reflects the world of book arts: soft, tactile UI with subtle texture references.
The digital tools mimic traditional paper engineering techniques while visually resembling current 3D modeling and design software.
Gestures reminiscent of handling real books — pinch, drag, peek, unfold
          <br/><br/>

          Celebration of Print Culture
          <br/><br/>
          FolioFolds elevates printed matter as living, interactive media — bridging the gap between physical craft and digital storytelling.
        </p>

        <div className="mt-40">
          <Line />
        </div>

        <h3 className="mt-40 text-2xl font-semibold">
          Step 3 — Prototyping and Designing Behaviours 
        </h3>
        <h3 className="mt-40 text-2xl font-semibold">
          Step 4 — Interaction and Usability Tests
        </h3>
        
        <div className="px-10">
        <h3 className="mt-20 text-2xl font-semibold">
          Technologies
        </h3>
        <p className="mt-10 text-sm text-white/50 max-w-4xl leading-relaxed text-xl">
          Before participating in this lab, I had limited experience with biomedical device design nor engineering in general. 
          Through this project, I gained hands-on experience in sensor integration, harware engineering, data acquisition, and real-time monitoring.
          <br/><br/>
          The following tools were instrumental in bringing the various biomedical devices to life:
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

        <Line/>

        
        <h3 className="mt-20 text-2xl font-semibold">
          Designing for Health
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
          Designing biomedical devices requires a deep understanding of both user needs and technical constraints. I prioritized clarity, accessibility, and comfort in these UI designs as displaying biometric data can often be non-intuitive and overwhelming. 
          Researching existing health monitoring solutions helped to identify effective hierarchy of information and the importance of clear labeling and soft visuals. 
          <br/><br/>
        </p>
        </div>
      </div>
    </section>
    );
}