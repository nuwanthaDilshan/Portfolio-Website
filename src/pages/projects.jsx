import { useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoMdArrowForward } from "react-icons/io";
import MouseBall from "../components/mouseBall";

export default function ProjectsPage() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const scrollDistance = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeftStart - scrollDistance;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const details = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      title: "Hot Meal Restaurant",
      description: "Web Design, App Design (HTML, CSS, Bootstrap, PHP).",
      link: "https://github.com/nuwanthaDilshan/Restaurant-Management-System.git",
    },
    {
      title: "Portfolio Website",
      description: "Web Design, App Design (ReactJS with Tailwind CSS).",
      link: "https://nuwantha-dilshan.vercel.app/",
    },

    {
      title: "AgroBot",
      description:
        "AI ChatBot using Python and Natural Language Processing (NLP) for Tea Cultivation",
      link: "https://github.com/nuwanthaDilshan/AgroBot.git",
    },
    {
      title: "Hospital Management System",
      description: "Web Design, App Design (HTML, CSS, JavaScript, PHP, Hack).",
      link: "https://github.com/nuwanthaDilshan/HospitalWebSite.git",
    },
  ];

  return (
    <>
      <MouseBall />
      <section id="projects" className="w-full h-full pt-10 text-white">
        <div className="bg-tertiary w-full h-full px-4">
          <div className="p-6 md:p-16">
            <p className="uppercase bg-secondary inline-block px-2 rounded-[3px]">
              my work
            </p>
            <h1 className="uppercase text-3xl font-bold mt-2">
              recent project
            </h1>

            {/* Scrollable Section */}
            <div
              ref={scrollContainerRef}
              className="flex gap-5 mt-7 overflow-x-auto cursor-grab scrollbar-hide"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
              {[1, 2, 3, 4, 5].map((project, index) => (
                <div
                  key={project}
                  className="w-[300px] sm:w-[350px] flex-shrink-0 bg-white rounded-[7px] p-4 relative cursor-default group overflow-hidden select-none"
                >
                  {/* Image with Hover Zoom, Blur, and Rounded Corners */}
                  <div className="relative overflow-hidden rounded-[7px] group-hover:rounded-[7px] transition-all duration-500 cursor-pointer">
                    <img
                      src={`/project${project}.jpg`}
                      alt={`Project ${project}`}
                      className="w-full h-[200px] object-cover transition-transform duration-500 transform group-hover:scale-110 group-hover:blur-sm"
                    />
                    {/* Plus Icon on Hover */}
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <BiPlus className="text-black bg-white bg-opacity-75 p-2 text-5xl rounded-full" />
                    </div>
                  </div>

                  <div className="mt-4 text-black relative">
                    <h1 className="text-2xl capitalize line-clamp-1">
                      {details[index]?.title || `Project ${project}`}
                    </h1>
                    <span className="capitalize opacity-60 line-clamp-2">
                      {details[index]?.description || "Description"}
                    </span>
                    <a href={details[index]?.link} target="_blank">
                      <IoMdArrowForward className="absolute right-2 bottom-2 border-2 border-black rounded-full text-4xl bg-accent text-white p-1 hover:bg-black transition-all duration-300 cursor-pointer" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
