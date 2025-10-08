

export default function WorldNotes() {
  return (
    <section className="mt-14">
      <div className="mx-auto w-full max-w-6xl px-6 ">

      {/* Big image */}
      <section className="mt-8">
        <div className="mx-auto w-full max-w-8xl px-12">
          <div className="overflow-hidden rounded-lg border border-white/20">
            <img
              src={"/worldnotes/welcomeScreen.png"}
              alt="Project mock"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

        <h3 className="mt-20 text-white text-4xl font-bold">WorldNotes: A Global Canvas for Creative Expression</h3>
        <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10"> 
          <div>
            <h3 className="mt-2 text-2xl font-semibold">
              Note Traversal and Discovery
            </h3>
            <p className="mt-4 text-xl text-white/70">
              The app's home page immediately brings the user into the world of WorldNotes, dropping them off at a random place scattered with 3D notes posted in the space by previous users. 
              <br/><br/>Traversing the site is fairly simple, users use the click-to-go circle on the ground to progress in the Street View or they can toggle an overview map, click on the mini map, or location search to explore other places. 
              <br/><br/>The Navigation bar lets the user refresh and shuffle the notes seen in a given area as well as step to the previous or next note for an automated note discovery experience.
            </p>          
          </div>      
          <div className="mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
            <img
              src={"/panorama_kitchen.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>


        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2"> 
          <div>
            <h3 className="mt-2 text-2xl font-semibold">
              Customizable User Profiles
            </h3>
            <p className="mt-4 text-xl text-white/70">
              Profiles show you all the notes a user creates as well as reposts. The profile page is a place the user can display their favorite notes in any way they want.
            </p>          
            </div>      
          <div className="mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
            <img
              src={"/panorama_kitchen.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>


         <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2"> 
          <div>
            <h3 className="mt-2 text-2xl font-semibold">
              Note Viewer
            </h3>
            <p className="mt-4 text-xl text-white/70">
              A post viewer will be shown to the user if they click on a note, here we can see information about the note’s title, creator, description, and community reactions.
            </p>          
            </div>   
          <div className="mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
            <img
              src={"/panorama_kitchen.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>   
        </div>


        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2"> 
          <div>
            <h3 className="mt-2 text-2xl font-semibold">
              Note Creator
            </h3>
            <p className="mt-4 text-xl text-white/70">
              A new note creation canvas was created from scratch to not just adhere to the web app’s design, but also to provide unique custom tools and brushes specific to the site. Draggable panels were a key characteristic to the canvas, making the creation process and workspace feel more free.
            </p>          
            </div> 
          <div className="mt-5 relative aspect-[21/12] overflow-hidden rounded-[12px]">
            <img
              src={"/worldnotes/note_creator.png"}
              alt={`Note Traversal and Discovery`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>     
        </div>

        {/* Process Section */}
        <h3 className="text-white text-4xl font-bold mt-40">The Process of Creating the MVP</h3>
        <h3 className="mt-10 text-2xl font-semibold">
          Step 1 - Inspiration and Discovery
        </h3>
        <p className="mt-4 text-sm text-white/70 max-w-4xl leading-relaxed text-xl">
          The first step was establishing a vision and core values to my product to help guide the visual and user experience design. I noticed a gap in how existing platforms encourage expression: most prioritize text or algorithm-driven hyper curated engagement, which often dilutes authentic connection. Visual communication, especially when tied to place, offers richer nuance and emotional depth that is yet to be explored. 
          The challenge became: <span className="italic text-white"> how can we design a platform that promotes genuine self-expression and global connection, while elevating the social medium through new, creative technologies? </span>
        
        <br/><br/>
        WorldNotes is deeply informed by a blend of <span className="font-semibold text-white">internet culture </span>, mapping tools, and communal creativity platforms. Here a few places of inspiration I pulled from:
        </p>
        <ul className="mt-8 text-sm text-white/70 max-w-2xl list-disc pl-6 space-y-4">
          <li>
            <span className="font-semibold text-white">The Unsent Project:</span> I loved its minimalist approach to anonymous note sharing. Its simple layouts inspired me to strip away unnecessary complexity, keeping WorldNotes focused on the intimacy of expression.
          </li>
          <li>
            <span className="font-semibold text-white">Google Maps & GeoGuessr:</span> Reinforced the importance of world exploration mechanics. Features like zoom levels, Street View, and metadata overlays shaped how I designed the navigation system for discovering notes.
          </li>
          <li>
            <span className="font-semibold text-white">Reddit's r/Place:</span> Sparked ideas around collaborative art, where users can collaborate digitally in one space together. This heavily influenced WorldNotes' note placement and discovery system.
          </li>
          <li>
            <span className="font-semibold text-white">Gartic Phone & MS Paint:</span> Inspired the drawing experience. I intentionally leaned into primitive, playful tools, which lower barriers to entry and make creation fun rather than intimidating.
          </li>
        </ul>
          <p className="font-semibold text-white mt-10">The Result</p>
        <p className="text-sm text-white/70 max-w-2xl mt-2 text-xl">
          The result is a creative world explorer that is part map, part sketchbook, part message board. WorldNotes transforms the act of scrolling into a playful exploration of what people leave behind, visually bridging global
        </p>


        <h3 className="mt-10 text-2xl font-semibold">
          Step 2 - Building Community
        </h3>
        <p className="mt-2 text-xl text-white/70 max-w-2xl">
          From the start, I designed WorldNotes to encourage participation rather than passive scrolling. Notes are anchored to places, giving users a sense of belonging and discovery. This fosters micro-communities clusters of ideas tied not just to people but to locations and shared experiences. This experience thus opens itself up to a diverse user base of different backgrounds and interests.
        </p>


        <h3 className="mt-10 text-2xl font-semibold">
          Step 3 - Designing App Structure
        </h3>
        <p className="mt-2 text-xl text-white/70 max-w-4xl">
        With the vision set, I focused on structuring the app. There's a diverse set of user flows I had to consider, browsing, creating, and interacting with notes, so I decided to map them out to balance ease of use with room for exploration. I created flow charts to visualize how casual visitors and frequent creators would engage with the platform.
        </p>
        <div className=" mt-5 relative aspect-[21/12] overflow-hidden rounded-[12px]">
          <img
            src={"/worldnotes/user_flow.png"}
            alt={`Flowchart of Webflow`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>


        <h3 className="mt-10 text-2xl font-bold">
          Step 4 - Wireframing
        </h3>
        <p className="mt-6 text-xl text-white/70 max-w-4xl">
          Next came wireframing. I sketched out how key features like the user profile, community page, and subsequent news and updates page would look and interact. Early iterations emphasized simple layouts so I could test flows without over-investing in visuals too soon.
        </p>
        <div className="mt-10 relative aspect-[21/8] overflow-hidden rounded-[12px]">
          <img
            src={"/worldnotes/wireframing.png"}
            alt={`Wireframe`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-center text-white/50">Wireframes of User Profile and Community Page</p>
        </div>    
        
        
        <h3 className="mt-10 text-2xl font-semibold">
          Step 5 - UI Design
        </h3>
        <p className="mt-2 text-xl text-white/70 max-w-4xl">
        After validating flows, I shifted to creating a formal visual design using Figma and Illustrator. The interface embraces playfulness, bright accents, references to the visual characteristics of paper notes, and a lighthearted aesthetic—to reflect the project’s creative spirit. The UI is intentionally inviting, encouraging hesitant users to leave their mark on the world.
        </p>
        <h4 className="mt-10  font-semibold">
          Creating An Ecosystem
        </h4>
        <p className="mt-2 max-w-4xl text-xl text-white/70">
          A consistent design system ensures the interface feels cohesive and visually unified, giving every interaction from map navigation to note creation a recognizable identity.
          <br/><br/>
          Beyond text, the platform already supports layering, doodles, and spatial note placement, but the foundation  is intentionally <span className="font-bold"> scalable </span>. The note creator is built to grow, opening possibilities like animated notes, music attachments, borders, or stickers, expanding the ways users can express themselves. By treating design as both a system and a playground, WorldNotes sets the foundation for a platform that can evolve alongside its community’s creativity.
        </p>
        <div className=" mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
          <img
            src={"/panorama_kitchen.png"}
            alt={`UI Design`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>


        <h3 className="mt-10 text-2xl font-semibold">
          Step 6 - Implementation
        </h3>
        <p className="mt-2 text-xl text-white/70 max-w-4xl">
After desiging all ne        </p>
        <h4 className="mt-10  font-semibold">
          Frontend Stack & Architecture
        </h4>
        <span className="font-semibold">Stack:</span> React (server & client components), Next.js (App Router), TypeScript, Konva

        <p className="mt-2 text-sm  max-w-4xl text-white/70">
          <ul className="list-disc pl-6 mt-4 space-y-4">
            <li>
              <span className="font-bold">Architecture with Next.js App Router:</span> Nested layouts and route groups separate the map explorer, note creator, and profile areas. Server Components handle data fetching and SEO-friendly rendering; Client Components power interactive views like the canvas tools and Street View overlays.
            </li>
            <li>
              <span className="font-semibold">Type-Safe UI in TypeScript:</span> Domain types (e.g., Note, NoteLocation, ToolState) enforce correctness across components, hooks, and API calls. Strong typing reduces runtime bugs and streamlines refactors as features (layers, pixel art, stickers) evolve.
            </li>
            <li>
              <span className="font-semibold">Konva-Powered Creation Tools:</span> The note creator uses Konva for drawing, text, and pixel-art modes with support for layers, transforms, and undo/redo. Debounced state updates and canvas snapshots keep the UI responsive while preserving editing history.
            </li>
            <li>
              <span className="font-semibold">Street View + Spatial UX:</span> Notes render with spatial anchoring—position/scale respond to zoom, heading, and pitch for believable placement. Interaction patterns mirror familiar map behaviors (pan/zoom, hover previews), lowering the learning curve.
            </li>
            <li>
              <span className="font-semibold">State & Interaction:</span> React context + custom hooks manage tool state, selection, and note metadata. Transitions and micro-interactions (hover cues, drag handles) make creation feel playful without getting in the way.
            </li>
            <li>
              <span className="font-semibold">Performance & Accessibility:</span> Code-splitting for heavy views (creator, Street View), memoized canvases, and throttled map events keep fps stable. Keyboard focus management and semantic roles improve accessibility across the editor and feed.
            </li>
          </ul>
        </p>    <div className=" mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
          <img
            src={"/panorama_kitchen.png"}
            alt={`UI Design`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
         <h4 className="mt-10  font-semibold">
          Backend
        </h4>
       
        <p className="text-xl text-white/70">Stack: Firebase Firestore (NoSQL), Next.js Route Handlers (API), Auth (NextAuth + Firebase), React Context/Hooks</p>
        <ul className="list-disc pl-6 mt-4 space-y-4 text-white/70 max-w-4xl">
          <li>
            <span className="font-bold text-white">Data Model (Firestore):</span> Collections like notes, users profiles, and community replies to posts are shaped for geo-discovery and fast reads. Notes store lightweight content + spatial metadata (lat/lng, zoom hints, heading/pitch) with security rules to ensure users can only modify their own content.
          </li>
          <li>
            <span className="font-bold">APIs with Next.js Route Handlers:</span> CRUD endpoints (e.g., /api/notes, /api/reactions) validate input with TypeScript types and return lean payloads optimized for streaming Server Components. Write paths are authenticated; read paths are cached and paginated for map/Street View browsing.
          </li>
          <li>
            <span className="font-bold">Authentication & Session Flow:</span> NextAuth provides session management on the web side; Firebase (Auth/Custom Claims or a Firebase Adapter) ties identities to Firestore documents. Client components read session state via React context, while server routes verify tokens before writes.
          </li>
          <li>
            <span className="font-bold">Real-Time & Caching Strategy:</span> Firestore listeners power live updates in creation flows (e.g., collaborative impressions and reaction counts), while map discovery prefers cache-first reads with incremental revalidation to control cost and latency.
          </li>
          <li>
            <span className="font-bold">Security & Governance:</span> Firestore security rules gate create/update/delete by user_id, rate-limit sensitive actions (publishing, reporting), and validate schema shapes. Server routes perform a second layer of checks (ownership, content size caps) before writing.
          </li>
          <li>
            <span className="font-bold">Observability (planned):</span> Lightweight analytics record funnel steps (view → open → create → publish) and field performance (Web Vitals, error traces). This informs iteration on the note creator (e.g., adding animation, music, borders, or stickers) without invasive tracking.
          </li>
        </ul>

        
        <h3 className="mt-10 text-2xl font-semibold">
          Step 7 - Measuring Impact
        </h3>
        <p className="mt-2 text-xl text-white/70 max-w-4xl">
          Because WorldNotes is experimental, impact is measured less in metrics and more in moments of connection; however there are community polls that are posted to survey users on the site’s updates. Over time, I plan to introduce lightweight analytics and community feedback loops to guide future iterations.
        </p>
        <div className=" mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
          <img
            src={"/panorama_kitchen.png"}
            alt={`Engagement Metrics`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

      </div>
    </section>

    );
}