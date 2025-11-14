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

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
            <div className="flex justify-center items-center mx-auto w-full px-[5%] pb-10">
                <div className="relative w-full py-20">
                    <div className="max-w-xl w-full rounded-2xl p-10 overflow-hidden">
                        {/* <div className="flex-1 min-w-[250px]"> */}
                            <h1 className="font-nhgDisplay text-4xl md:text-6xl mb-4 text-white ">About Me</h1>
                            <div className="mt-10 text-2xl">
                                <p className="font-nhgText text-sm md:text-xl text-white/90 ">
                                    Hi! I'm Cindy Nakhammouane, a fullstack developer and UI/UX designer currently enrolled in my fourth year at the University of Illinois Chicago studying <span className="font-semibold">Computer Science and Design</span>. <br/> <br/>
                                    I'm currently very interested in creative technology and exploring career paths in AI/ML, web app dev, project management, and UI/UX design.<br/> <br/>
                                    In my free time I love to travel, watch movies, sing, draw, and do theatre!
                                </p>
                            {/* </div> */}
                        </div>
                    </div>
                    
                </div>

                {/* Right column */}
                <div className="flex flex-col justify-left items-left pt-40">
                    <img
                        src={"/headshot-bw.png"}
                        alt="Headshot Preview"
                        className="hidden md:block w-[30%] h-[30%]"
                    />


                    <div className=" w-[75%] mt-20 border border-white/10 rounded-xl bg-white/10 p-5">
                        <div className="flex flex-col items-start justify-between gap-8"> 
                            <div>
                                <div className="flex gap-2">
                                    <h3 className="rounded-full bg-blue-haze font-semibold px-4 py-1 text-md tracking-wider text-white">Tools I Use</h3>
                                </div>


                                <div className="pt-8 flex gap-2">
                                    <h3 className="text-md tracking-wider text-white">Coding</h3>
                                </div>
                                <div className=" text-[16px] flex flex-wrap gap-2">
                                    {(["React", "Next.js", "TypeScript", "Javascipt", "Python", "C/C++"]).map(
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

                                <div className="pt-8  flex gap-2">
                                    <h3 className="text-md tracking-wider text-white">Design</h3>
                                </div>
                                <div className=" text-[16px] flex flex-wrap gap-2">
                                    {(["Adobe Creative Suite", "Photoshop", "InDesign", "Illustrator", "After Effects", "Figma", "Blender", "Maya", "Canva"]).map(
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
