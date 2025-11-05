import { useState } from "react";
import { Triangle } from "lucide-react";

export default function YCGH() {
    const [showPopup, setShowPopup] = useState(false);
    const [current, setCurrent] = useState(0);
    
    const pictures = [
        "/YCGH/interaction2.jpeg",
        "/YCGH/interaction1.jpg",
        "/YCGH/interaction3.jpg",
        "/YCGH/interaction4.jpeg",
        "/YCGH/island_view.png",
    ];

    const nextPic = () => setCurrent((current + 1) % pictures.length);
    const prevPic = () => setCurrent((current - 1 + pictures.length) % pictures.length);

    return(
        <section className="mt-40 mb-40 mx-auto w-full max-w-6xl px-6">

            <div className=" mt-10">
                <h3 className="mt-16 text-2xl">
                    Documentation Video
                </h3>
                <div className=" mt-5 relative aspect-[21/13] overflow-hidden rounded-lg">
                    <video
                        src={'/YCGH/YCGH_Video_Documentation_FINAL.mp4'}
                        controls
                    />
                </div>
              </div>
           
            <div className="mt-5 relative aspect-[10/5] overflow-hidden rounded-t-lg">
                <img
                    src={pictures[current]}
                    alt={`YCGH Interaction`}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 z-10 flex items-center justify-between px-4">
                    <button
                        onClick={prevPic}
                        aria-label="Previous image"
                        className="flex justify-center items-center p-2 md:p-4 rounded-full bg-white/75 hover:bg-white hover:scale-105 transition cursor-pointer shadow"
                    >
                        <Triangle className="size-8 md:size-10 stroke-none -rotate-90 fill-black" />
                    </button>

                    <button
                        onClick={nextPic}
                        aria-label="Next image"
                        className="flex justify-center items-center p-2 md:p-4 rounded-full bg-white/75 hover:bg-white hover:scale-105 transition cursor-pointer shadow"
                    >
                        <Triangle className="size-8 md:size-10 stroke-none rotate-90 fill-black" />
                    </button>
                </div>
                  
            </div>
            <div className="flex justify-center bg-white rounded-b-lg py-4">
                <p className="text-center text-sm text-black/75">Anxiety Management Interactions and Map Overview</p>
            </div>  

            <div className=" mx-auto w-full max-w-6xl px-8">
            
                <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2"> 
                    <div>
                        <h3 className=" text-5xl">
                        SIGGRAPH 2025 Convention
                        </h3>
                        <p className="mt-10 text-xl text-white/70"> 
                        ACM SIGGRAPH is the world’s premier international conference on computer graphics and interactive techniques, known for its competitive selection process and global prestige.
                        <br/><br/>
                        After writing our research paper, we put together a research poster to present at the SIGGRAPGH 2025 Convention in Vancouver over the course of 5 days for over 12,000 attendees.
                        <br/><br/>
                        <span className="text-sm text-white/50">
                            An interesting application of this research that was discussed was the use of VR in medical and clinical settings; patients could use VR to destress and educate themselves about upcoming procedures and good health practices.
                        </span>
                        <br/><br/>
                        Check out the full research paper here:
                        </p>
                        
                        <a className="cursor-pointer font-semibold" href="https://dl.acm.org/doi/10.1145/3721250.3743037"> https://dl.acm.org/doi/10.1145/3721250.3743037 </a>
                    </div>      
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src={"/YCGH/2025_SIGGRAPH_POSTER_YCGH_Final.png"}
                            alt={`YCGH Poster`}
                            className=" object-cover cursor-pointer transform transition-transform duration-600 ease-in-out hover:scale-105"
                            onClick={() => setShowPopup(true)}
                        />
                        {showPopup && (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                                onClick={() => setShowPopup(false)}
                            >
                                <img
                                    src={"/YCGH/2025_SIGGRAPH_POSTER_YCGH_Final.png"}
                                    alt={`YCGH Poster Enlarged`}
                                    className="max-h-[90vh] max-w-[90vw] shadow-lg"
                                    onClick={e => e.stopPropagation()}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center text-center justify-center mt-40 ">
                    <h4 className="font-nhgDisplay text-white font-semibold bg-blue-haze px-4 py-2 rounded-[20px]">Outcome</h4>
                    <p className="mt-10 text-xl text-white/70 max-w-4xl">
                        Our project received significant attention at SIGGRAPH 2025, sparking engaging discussions about the future of AR/VR in mental health and adjacent fields. The positive feedback from attendees highlighted the potential impact of our work in making anxiety management more accessible and effective through immersive technology.
                    </p>
                    <h3 className="font-nhgMono mt-8 text-3xl text-white/90 font-bolder max-w-3xl">
                        "The experience is emotionally engaging, using gentle gameplay mechanics, environmental storytelling, ambient sound, and evolving typography."
                    </h3>
                    <p className="mt-4 italic text-white/50 max-w-2xl">— Reviewer</p>
                    <h3 className="font-nhgMono mt-8 text-3xl text-white/90 font-bolder max-w-3xl">
                        "While VR for mental health isn’t new, the focus on narrative, improvisation, and user interaction makes this project stand out. It’s a thoughtful blend of disciplines with potential for real-world impact."
                    </h3>
                    <p className="mt-4 italic text-white/50 max-w-2xl">— Reviewer</p>
                </div>
            </div>
        </section>
    );
}