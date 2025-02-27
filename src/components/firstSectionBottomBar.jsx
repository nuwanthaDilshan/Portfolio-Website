import { useRef, useState, useEffect } from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFlask, SiMongodb, SiPhp } from "react-icons/si";

export default function FirstSectionBottomBar() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const icons = [
    <FaJs className="text-8xl text-yellow-500" />,
    <FaReact className="text-8xl text-accent" />,
    <FaNodeJs className="text-8xl text-green-500" />,
    <SiExpress className="text-8xl text-gray-500" />,
    <SiMongodb className="text-8xl text-green-500" />,
    <FaPython className="text-8xl text-[#ffff00]" />,
    <SiFlask className="text-8xl text-[#000000]" />,
    <SiPhp className="text-8xl text-[#7377ad]" />,
    <FaHtml5 className="text-8xl text-[#e34f26]" />,
    <RiTailwindCssFill className="text-8xl text-[#38bdf8]" />,
    <FaCss3Alt className="text-8xl text-[#264de4]" />,
    <FaLaravel className="text-8xl text-[#ff2d20]" />,
    <FaBootstrap className="text-8xl text-[#563d7c]" />,
    <FaGitAlt className="text-8xl text-[#f34f29]" />,
    <FaGithub className="text-8xl text-[#181717]" />,
    <IoLogoFigma className="text-8xl text-[#f24e1e]" />,
  ];

  // Duplicate icons to enable infinite loop effect
  const duplicatedIcons = [...icons, ...icons];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Set initial scroll position to the middle
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 4;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 4;
      } else if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 4;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1; // Adjust speed as needed

    const autoScroll = () => {
      if (scrollContainer && !isDragging) {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    };

    const interval = setInterval(autoScroll, 50);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const deltaX = e.clientX - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - deltaX;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="absolute left-0 bottom-0 w-full h-[150px] bg-tertiary">
        <div className="w-full h-full flex justify-center items-center">
          <div
            ref={scrollContainerRef}
            className="flex gap-10 overflow-x-auto scrollbar-hide cursor-grab"
            style={{
              width: "1000px",
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollSnapType: "x mandatory",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {duplicatedIcons.map((icon, index) => (
              <div key={index} className="w-[100px] flex-shrink-0">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
