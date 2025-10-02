import React, { useState } from "react";
import Footer from "./Footer";
import { Triangle } from "lucide-react";

const pictures = [
    "/profile_picture.png",
    "/chicago.png",
    "/panorama_kitchen.png",
];

export default function AboutMePage() {
    const [current, setCurrent] = useState(0);

    const nextPic = () => setCurrent((current + 1) % pictures.length);
    const prevPic = () => setCurrent((current - 1 + pictures.length) % pictures.length);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-[#008be8]">
        <div className="mt-[10%] mx-auto w-full px-[10%] pb-10">

            <div className="mt-10 mb-10  flex flex-row items-center justify-center min-h-[60vh] p-8 gap-8 flex-wrap md:flex-row sm:flex-col sm:p-4 sm:gap-4">
                <div className="flex-1 min-w-[250px]">
                    <h1 className=" text-6xl font-bold mb-4 text-white">About Me</h1>
                    <div className="mt-10 text-2xl">
                    <p className="text-2xl text-white">
                        Hi there! I'm Cindy Nakhammouane, a fullstack developer and UI/UX designer with product focused thinking and a love for making cool projects. <br/> <br/>
                        I love creating things that bring joy to others and value leaving a positive impact in the world. Wanting to leverage my academic drive and creative mind, one day I found myself at the door of creative technology. <br/> <br/>
                        Today, I'm a fourth year undergraduate student at the University of Illinois Chicago studying computer science and design and exploring the fields of AI/ML, web dev, project management, and product design. <br/> <br/>
                        In my free time I love to travel, watch movies, sing, draw, and go see and perform in theatrical shows. I also spend a lot of time on my passion projects: WorldNotes and FolioFlips!",
                    </p>
                    </div>
                </div>
                <div className="flex-1 min-w-[250px] flex justify-center items-start">
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
                </div>
            </div>
            </div>
            <Footer />
        </main>
    );
}
