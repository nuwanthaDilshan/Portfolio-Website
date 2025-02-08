import { useRef } from "react";
import MouseBall from "../components/mouseBall";
import { IoMdArrowForward } from "react-icons/io";
import { BiPlus } from "react-icons/bi";

export default function ProjectsPage() {
    const scrollContainerRef = useRef(null);

    // Handle mouse drag scrolling
    const handleMouseDown = (e) => {
        const container = scrollContainerRef.current;
        container.isDragging = true;
        container.startX = e.pageX - container.offsetLeft;
        container.scrollLeftStart = container.scrollLeft;
    };

    const handleMouseMove = (e) => {
        const container = scrollContainerRef.current;
        if (!container.isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const scrollDistance = x - container.startX;
        container.scrollLeft = container.scrollLeftStart - scrollDistance;
    };

    const handleMouseUp = () => {
        const container = scrollContainerRef.current;
        container.isDragging = false;
    };
    return (
        <>
            <MouseBall />
            <section id="projects" className="w-full h-full pt-10 text-white">
                <div className="bg-[#072d4f] w-full h-full px-4">
                    <div className="p-20">
                        <p className="uppercase bg-[#224564] inline-block px-2 rounded-[3px]">
                            my work
                        </p>
                        <h1 className="uppercase text-3xl font-bold mt-2">
                            recent project
                        </h1>
                        {/* Horizontal Scroll Section with Drag and Scroll */}
                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-scroll scrollbar-hide cursor-grab"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            <div className="flex pt-7 gap-5 min-w-fit select-none">
                                <div className="w-[400px] h-auto bg-white rounded-[7px] p-4 relative cursor-default group overflow-hidden">
                                    {/* Image with Hover Zoom, Blur, and Rounded Corners */}
                                    <div className="relative overflow-hidden rounded-[7px] group-hover:rounded-[7px] transition-all duration-500">
                                        <img
                                            src="/project1.jpg"
                                            alt=""
                                            className="w-full h-full transition-transform duration-500 transform group-hover:scale-110 group-hover:blur-sm"
                                        />
                                        {/* Plus Icon on Hover */}
                                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <BiPlus className="text-black bg-white bg-opacity-75 p-2 text-5xl rounded-full" />
                                        </div>
                                    </div>

                                    <div className="mt-4 text-black relative">
                                        <h1 className="text-2xl capitalize">
                                            Website Design
                                        </h1>
                                        <span className="capitalize opacity-60">
                                            Web Design, App Design
                                        </span>
                                        <IoMdArrowForward className="absolute right-2 bottom-2 border-2 border-black rounded-full text-4xl bg-blue-500 text-white p-1 hover:bg-black transition-all duration-300 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="w-[400px] h-auto bg-white rounded-[7px] p-4 relative cursor-default group overflow-hidden">
                                    {/* Image with Hover Zoom, Blur, and Rounded Corners */}
                                    <div className="relative overflow-hidden rounded-[7px] group-hover:rounded-[7px] transition-all duration-500">
                                        <img
                                            src="/project2.jpg"
                                            alt=""
                                            className="w-full h-full transition-transform duration-500 transform group-hover:scale-110 group-hover:blur-sm"
                                        />
                                        {/* Plus Icon on Hover */}
                                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <BiPlus className="text-black bg-white bg-opacity-75 p-2 text-5xl rounded-full" />
                                        </div>
                                    </div>

                                    <div className="mt-4 text-black relative">
                                        <h1 className="text-2xl capitalize">
                                            Website Design
                                        </h1>
                                        <span className="capitalize opacity-60">
                                            Web Design, App Design
                                        </span>
                                        <IoMdArrowForward className="absolute right-2 bottom-2 border-2 border-black rounded-full text-4xl bg-blue-500 text-white p-1 hover:bg-black transition-all duration-300 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="w-[400px] h-auto bg-white rounded-[7px] p-4 relative cursor-default group overflow-hidden">
                                    {/* Image with Hover Zoom, Blur, and Rounded Corners */}
                                    <div className="relative overflow-hidden rounded-[7px] group-hover:rounded-[7px] transition-all duration-500">
                                        <img
                                            src="/project3.jpg"
                                            alt=""
                                            className="w-full h-full transition-transform duration-500 transform group-hover:scale-110 group-hover:blur-sm"
                                        />
                                        {/* Plus Icon on Hover */}
                                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <BiPlus className="text-black bg-white bg-opacity-75 p-2 text-5xl rounded-full" />
                                        </div>
                                    </div>

                                    <div className="mt-4 text-black relative">
                                        <h1 className="text-2xl capitalize">
                                            Website Design
                                        </h1>
                                        <span className="capitalize opacity-60">
                                            Web Design, App Design
                                        </span>
                                        <IoMdArrowForward className="absolute right-2 bottom-2 border-2 border-black rounded-full text-4xl bg-blue-500 text-white p-1 hover:bg-black transition-all duration-300 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="w-[400px] h-auto bg-white rounded-[7px] p-4 relative cursor-default group overflow-hidden">
                                    {/* Image with Hover Zoom, Blur, and Rounded Corners */}
                                    <div className="relative overflow-hidden rounded-[7px] group-hover:rounded-[7px] transition-all duration-500">
                                        <img
                                            src="/project4.jpg"
                                            alt=""
                                            className="w-full h-full transition-transform duration-500 transform group-hover:scale-110 group-hover:blur-sm"
                                        />
                                        {/* Plus Icon on Hover */}
                                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <BiPlus className="text-black bg-white bg-opacity-75 p-2 text-5xl rounded-full" />
                                        </div>
                                    </div>

                                    <div className="mt-4 text-black relative">
                                        <h1 className="text-2xl capitalize">
                                            Website Design
                                        </h1>
                                        <span className="capitalize opacity-60">
                                            Web Design, App Design
                                        </span>
                                        <IoMdArrowForward className="absolute right-2 bottom-2 border-2 border-black rounded-full text-4xl bg-blue-500 text-white p-1 hover:bg-black transition-all duration-300 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
