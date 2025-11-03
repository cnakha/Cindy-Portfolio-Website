
import { useState } from "react";


function Line(){
  return <div className="h-[1px] w-full bg-white/50" />
}

export default function WorldNotes() {
  const [AppStructPopup, setShowPopup] = useState(false);

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Konva', 'Firebase Firestore', 'NextAuth'
  ];

  const texhStackDescriptions = [
    'React powers the interactive UI components, while Next.js (App Router) structures the app.',
    'Nested layouts and route groups separate the map explorer, note creator, and profile areas. Server Components handle data fetching and SEO-friendly rendering; Client Components power interactive views.',
    'TypeScript ensures type safety across components, hooks, and API calls, reducing runtime bugs and streamlining refactors as features evolve.', 
    'Konva enables the custom note creation canvas with drawing, text, and pixel-art modes, supporting layers, transforms, and undo/redo functionality.',
    'Firebase Firestore serves as the NoSQL database, storing notes, user profiles, and community replies with geo-discovery and fast reads in mind.', 
    'NextAuth manages authentication and session flow, tying identities to Firestore documents for secure user interactions.'
  ];

  const keyInspos = [
    'The Unsent Project',
    'Google Maps & GeoGuessr',
    "Reddit's r/Place",
    'Gartic Phone & MS Paint'
  ];

  const keyInsposDescriptions = [
    'I loved its minimalist approach to anonymous note sharing. Its simple layouts inspired me to strip away unnecessary complexity, keeping WorldNotes focused on the intimacy of expression.',
    'Reinforced the importance of world exploration mechanics. Features like zoom levels, Street View, and metadata overlays shaped how I designed the navigation system for discovering notes.',
    "Sparked ideas around collaborative art, where users can collaborate digitally in one space together. This heavily influenced WorldNotes' note placement and discovery system.",
    'Inspired the drawing experience. I intentionally leaned into primitive, playful tools, which lower barriers to entry and make creation fun rather than intimidating.'
  ];

  return (
    <section className="mt-40 mb-40">
      <div className="mx-auto w-full">
      <Line/>

      <div className="font-nhgDisplay bg-white/95 text-black">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]"> 
            <div className="mt-20 mb-10 sm:pr-10 md:mb-0 ml-10  md:ml-[15%]">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
                Discover Art and Stories From Around the World
              </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
                Start your adventure by landing at a random location scattered with 3D notes left behind by others. <br/> <br/>Exploration feels natural: click-to-move in Street View, use the overview or mini map, or search specific places. The navigation bar allows quick refreshes of nearby notes, filters, and stepping through notes.            
              </p>          
            </div>     
          <div className="scrollable-panel relative h-full lg:overflow-hidden overflow-x-auto">
            <div className="relative h-full aspect-[22/15] overflow-hidden">
              <img
                src={"/worldnotes/traversal.png"}
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
                src="/worldnotes/post_viewer.png"
                alt="Note Traversal and Discovery"
                className="h-full w-full object-cover"
              />
            </div>
            </div>
          </div> 
          <div className="mt-[15%] mb-20 md:mr-[15%] ml-[15%] order-1 md:order-2">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
              See the Full Picture and React with Your Community
            </h3>
              <p className="mt-10 text-black/75 text-[1.25rem] md:text-[1rem] lg:text-xl">
              A post viewer will be shown if you click on a note, here we can see information about the note’s title, creator, location, description, and community reactions.
            </p>          
          </div>    
        </div>


          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]"> 
            <div className="mt-20 mb-10 sm:pr-10 md:mb-0 ml-10 md:ml-[15%]">
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
              Show Off Your Notes the Way You Want
            </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
              Profiles show you all the notes you post, draft, repost, like, and save. The cover page is a place the user can display their favorite notes in any way they desire.
            </p>          
            </div>      
          <div className="relative h-full aspect-[22/15] overflow-hidden">
            <img
              src={"/worldnotes/profile.png"}
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
              src={"/worldnotes/creator.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>  
          </div>
          <div className="mt-[15%] mb-20 md:mr-[15%] ml-[15%] order-1 md:order-2">
            <h3 className="mt-2 text-4xl font-semibold">
              Create Notes with Fun and Easy to Use Tools
            </h3>
              <p className="mt-6 mb-10 text-black/75 sm:text-xl md:text-[1rem] lg:text-xl">
              The note creation canvas provides custom tools and brushes. Drawing, text, pixel art, and animation are all supported along with a layers panel, color picker, and color palette creator.
            </p>          
          </div>     
        </div>
      </div>
        
      <Line/>



      {/* Process Section */}
      <div className="max-w-6xl px-10 flex flex-col mx-auto mt-40">
        <h3 className="font-nhgDisplay text-white text-center text-7xl ">Creating the MVP</h3>
        <h3 className="mt-40 text-2xl font-semibold">
          Step 1 — Inspiration and Discovery
        </h3>
        <p className="mt-10 text-sm text-white/70 max-w-4xl leading-relaxed text-xl">
          Establishing a vision and core values were key to WorldNotes's design. Prioritizing pictorial communication and geolocated discoveries offers a quirky nuance and emotional depth in social interactions that is yet to be explored. 
          The challenge then became: <span className="italic text-white font-semibold"> how can we design a user friendly, universal platform that inspires creativity? </span>
        
        <br/><br/>
        WorldNotes is deeply informed by a blend of <span className="font-semibold text-white">internet culture </span>, mapping tools, and communal creativity platforms. Here a few places of inspiration I pulled from:
        </p>
        
        <div className="mt-10 flex flex-wrap gap-6 justify-center w-full">
          {keyInspos.map((inspo, idx) => (
            <div
            key={idx}
            className="flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 min-w-[220px] max-w-xs flex-1"
            >
            <h5 className="text-lg font-bolder text-white/90 mb-4">{inspo}</h5>
            <p className="text-sm text-white/50">{keyInsposDescriptions[idx]}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-white/70 max-w-4xl mt-10 text-xl">
          The end result is a creative world explorer that is part map, part sketchbook, and part collaboration space. 
        </p>

        <div className="mt-40">
          {/* <Line /> */}
        </div>

        <h3 className="mt-40 text-2xl font-semibold">
          Step 2 — How to Build Community
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-3xl">
          Building community meant encouraging exploration and a sense of adventure rather than passive scrolling in a tailored algorithm. It was very important to be raw and an <span className="font-semibold">open global community </span>as to authentically reflect the art of the world. Notes are anchored to geolocations
          that foster a diverse user base of different backgrounds and interests. The spontaneous element of finding these new communities let's the WorldNotes community be an open experience that leads to natural discovery of micro-communities.
        </p>

        <div className="mt-40">
          {/* <Line /> */}
        </div>


        <h3 className="mt-40 text-2xl font-semibold">
          Step 3 — Designing App Structure
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
        With the vision set, I focused on structuring the app. 
        There's a diverse set of unique user flows I had to consider: note traversal and browsing, the note creation process, etc., so I decided to map the app structure 
        out. This helped me visualize all user navigation routes between different sections, ensuring a logical user flow. 
        </p>
        <div className=" mt-10 relative aspect-[24/10] overflow-hidden ">
          <img
            src={"/worldnotes/user_flow.png"}
            alt={`Flowchart of Webflow`}
            className="absolute inset-0 h-full w-full object-cover cursor-pointer hover:scale-105 transition"
            onClick={() => setShowPopup(true)}
          />
          
          {AppStructPopup && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                onClick={() => setShowPopup(false)}
            >
              <img
                src={"/worldnotes/user_flow.png"}
                alt={`App Structure Enlarged`}
                className="max-h-[90vh] max-w-[90vw]  shadow-lg "
                onClick={e => e.stopPropagation()}
              />
            </div>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-center text-white/50">App Structure Diagram</p>
        </div>   

        <div className="mt-40">
          {/* <Line /> */}
        </div>

        <h3 className="mt-40 text-2xl font-bold">
          Step 4 — Wireframing
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
          I sketched out how key features like the user profile, community page, and subsequent news and updates page would look and interact. 
          Early iterations helped me find balance between clean and simpler layouts and a stylized scrap book layout without over-investing in visuals too soon.
        </p>
        <div className="mt-10 relative aspect-[21/8] overflow-hidden">
          <img
            src={"/worldnotes/wireframing.png"}
            alt={`Wireframe`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-center text-white/50">Wireframes of User Profile and Community Page</p>
        </div>    
        
        <div className="mt-40">
          {/* <Line /> */}
        </div>
        
        <h3 className="mt-40 text-2xl font-semibold">
          Step 5 — UI Design
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
        After validating layouts, I shifted to creating a formal visual design of components using Figma and Illustrator. In doing this process, I found myself redesigning elements multiple times to refine usability and aesthetics.
         <br/><br/>
        WorldNote's branding embraces playfulness, bright accents, references scrapbooking, and a lighthearted aesthetic—to reflect the project’s creative spirit. 
        The UI is intentionally inviting, encouraging hesitant users to leave their mark on the world.
        </p>

        <div className="mt-10 ml-10 flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 ">
          <h4 className=" font-semibold">
            Creating An Ecosystem
          </h4>
          <p className="mt-2 max-w-4xl text-xl text-white/70">
            A consistent design system ensures the interface feels cohesive and visually unified, giving every interaction from map navigation to note creation a recognizable identity.
            <br/><br/>
            The platform is also designed to be intentionally <span className="font-bold"> scalable </span>. The note creator is built to grow, opening possibilities like animated notes, music attachments, borders, or stickers, expanding the ways users can express themselves.
          </p>
        </div>

        <div className=" mt-10 relative aspect-[21/8] overflow-hidden ">
          <img
            src={"/worldnotes/UI_Design.png"}
            alt={`UI Design`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-center text-white/50">Mockup Deigns of User Profile and Community Page</p>
        </div>   

        <div className="mt-40">
          {/* <Line /> */}
        </div>

        <h3 className="mt-40 text-2xl font-semibold">
          Step 6 — Fullstack Development
        </h3>


        <p className="mt-10 text-xl text-white/70 max-w-5xl">
          I followed an Agile-inspired workflow to stay organized and iterative. Each development cycle began with defining small, testable goals—design a feature, implement it, validate behavior, and gather informal user feedback.
          <br/><br/>
          Working independently meant acting as both designer and developer, so I used short sprints and modular commits to keep momentum while maintaining flexibility. I continuously refined features through rapid prototyping, debugging, and lightweight testing rather than long planning phases.
          <br/><br/>
          This solo-Agile approach allowed WorldNotes to grow organically—each iteration building on user insight, visual polish, and technical scalability without rigid deadlines or external dependencies.
          <br/><br/>
          After designing all necessary UI components, I assembled a tech stack and began developing the vision: </p>
        
        <div className="flex flex-col justify-center items-center w-full mt-2 text-sm max-w-4xl text-white/70 mx-auto">
          <div className="mt-10 flex flex-wrap gap-6 justify-center items-center w-full">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 min-w-[220px] min-h-[220px] max-w-xs flex-1"
              >
                <h5 className="text-lg font-bolder text-white/90 mb-4">{tech}</h5>
                <p className="text-sm text-white/50">{texhStackDescriptions[idx]}</p>
              </div>
            ))}
        </div>
        </div>    

        <div className="mt-40">
          {/* <Line /> */}
        </div>
        
        <h3 className="mt-40 text-2xl font-semibold">
          Step 7 - Measuring Impact
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
          Because WorldNotes is experimental, impact is measured less in metrics and more in moments of connection; however there are community polls that are posted to survey users on the site’s updates. Over time, I plan to introduce lightweight analytics and community feedback loops to guide future iterations.
        </p>
        {/* <div className=" mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
          <img
            src={"/panorama_kitchen.png"}
            alt={`Engagement Metrics`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div> */}

      </div>
      </div>
    </section>

    );
}