// import kitchenPanorama from ".../assets/panorama_kitchen.png";


export default function WorldNotes() {
  return (
    <section className="mt-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h4 className="text-white semi-bold">Key Features</h4>
        <h3 className="mt-2 text-2xl font-semibold">
          Note Traversal and Discovery
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-white/70">A new note creation canvas was created from scratch to not just adhere to the web app’s design, but also to provide unique custom tools and brushes specific to the site. Draggable panels were a key characteristic to the canvas, making the creation process and workspace feel more free.</p>
      <div className="relative aspect-[21/9] overflow-hidden rounded-[12px]">
        <img
          src={"/panorama_kitchen.png"}
          alt={`Note Creator Canvas`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

        <h3 className="mt-2 text-2xl font-semibold">
          Post Viewer
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-white/70">A new note creation canvas was created from scratch to not just adhere to the web app’s design, but also to provide unique custom tools and brushes specific to the site. Draggable panels were a key characteristic to the canvas, making the creation process and workspace feel more free.</p>
      <div className="relative aspect-[21/9] overflow-hidden rounded-[12px]">
        <img
          src={"/panorama_kitchen.png"}
          alt={`Note Creator Canvas`}
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
      </div>

    </section>

    );
}