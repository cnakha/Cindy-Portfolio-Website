// import {videofile} from './YCGH/YCGH_SIGGRAPH_video.mp4';
import { useState } from "react";

export default function YCGH() {
    const [showPopup, setShowPopup] = useState(false);
    
    return(
        <section className="mt-14 mx-auto w-full max-w-6xl px-6">
            <h3 className="mt-10 text-2xl font-semibold">
                Concept Video
            </h3>
            {/* <p className="mt-2 text-sm text-white/70">jkdhhf</p> */}
            <div className=" mt-5 relative aspect-[21/12] overflow-hidden rounded-[12px]">
            <video
                src={'/YCGH/YCGH_Concept_Vid.mp4'}
                alt={`Concept Video`}
                controls
            />
            </div>

            <div className="mt-10 mx-auto w-full max-w-6xl px-12">
            
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2"> 
                    <div>
                        <h3 className="mt-2 text-2xl font-semibold">
                        SIGGRAPH 2025 Convention Research Poster
                        </h3>
                        <p className="mt-2 text-sm text-white/70"> This poster was presented at the SIGGRAPGH 2025 Convention in Vancouver over the course of 5 days for over 12,000 attendees within the AR/VR research section.</p>
                        <h3 className="mt-10 text-2xl font-semibold">
                            Check out the Research Paper Here
                        </h3>
                        <a href="https://dl.acm.org/doi/10.1145/3721250.3743037"> LINK </a>
                    </div>      
                    <div className="mt-5 relative overflow-hidden rounded-[12px]">
                        <img
                            src={"/YCGH/2025_SIGGRAPH_POSTER_YCGH_Final.png"}
                            alt={`YCGH Poster`}
                            className="h-full w-full object-cover cursor-pointer"
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
                                    className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                                    onClick={e => e.stopPropagation()}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>


            
        </section>
    );
}