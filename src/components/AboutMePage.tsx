import React, { useState } from "react";
import Footer from "./Footer";
import { Triangle } from "lucide-react";

const pictures = [
    "/headshot-bw.png",
    "/chicago.png",
    "/panorama_kitchen.png",
];

export default function AboutMePage() {
    const [current, setCurrent] = useState(0);

    const nextPic = () => setCurrent((current + 1) % pictures.length);
    const prevPic = () => setCurrent((current - 1 + pictures.length) % pictures.length);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
        <div className="mx-auto w-full px-[5%] pb-10">
            <div className="mb-10 flex flex-row items-center justify-center min-h-[60vh] p-8 gap-8 flex-wrap md:flex-row sm:flex-col sm:p-4 sm:gap-4">
                <div className="relative w-full py-20">
                    <div
                        className="max-w-xl w-full rounded-2xl p-10 overflow-hidden"
                    >
                        {/* <div className="flex-1 min-w-[250px]"> */}
                            <h1 className="font-nhgDisplay text-4xl md:text-6xl mb-4 text-white ">About Me</h1>
                            <div className="mt-20 text-2xl">
                                <p className="font-nhgText text-md md:text-2xl text-white/90 ">
                                    Hi! I'm Cindy Nakhammouane, a fullstack developer and UI/UX designer currently enrolled in my fourth year at the University of Illinois Chicago studying Computer Science and Design. <br/> <br/>
                                    I'm currently very interested in creative technology and exploring career paths in AI/ML, web app dev, project management, and UI/UX design.<br/> <br/>
                                    In my free time I love to travel, watch movies, sing, draw, and do theatre.
                                </p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="flex-1 min-w-[250px] flex justify-center items-start">
                    <div className="mt-10 flex flex-col items-center ">
                        <img
                            src={pictures[current]}
                            alt="Profile"
                            className="w-[420px] h-[420px] object-cover shadow-md mb-4"
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={prevPic}
                                className="text-2xl px-2 py-2 rounded-full border-none bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
                            >
                                <Triangle className="-rotate-90 fill-black" />
                            </button>
                            <button
                                onClick={nextPic}
                                className="text-2xl px-2 py-2 rounded-full border-none bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
                            >
                                <Triangle className="rotate-90 fill-black"/>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
            </div>
            <Footer />
        </main>
    );
}
