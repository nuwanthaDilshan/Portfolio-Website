import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import FirstSectionBottomBar from "../components/firstSectionBottomBar";
import MouseBall from "../components/mouseBall";

export default function Home() {
  const [currentText, setCurrentText] = useState("software engineer");
  const [isTyping, setIsTyping] = useState(true);

  const texts = ["software engineer", "full stack developer"];
  let currentIndex = 0;
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        currentIndex = (currentIndex + 1) % texts.length;
        setCurrentText(texts[currentIndex]);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MouseBall />
      <div className="relative w-full text-gray-100">
        {/* Home Section */}
        <section id="home" className="w-full flex-grow relative">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
            {/* Left Side Section */}
            <div className="text-center md:text-left p-5">
              <p className="bg-secondary inline-block px-2 rounded-[3px] mb-2">
                Subasinghe Mudiyanselage Nuwantha Dilshan Subsinghe
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
                Hi! I'm Nuwantha.
              </h1>
              <h1 className="text-accent text-3xl md:text-4xl font-bold mb-4 uppercase flex items-center">
                <span className="mr-3">I'm</span>
                <span
                  className={`inline-block ${
                    isTyping ? "animate-typewriter" : ""
                  } whitespace-nowrap overflow-hidden`}
                  style={{ opacity: isTyping ? 1 : 0 }}
                >
                  {currentText}
                </span>
              </h1>

              <p className="text-base md:text-lg mb-6">
                I’m a software engineer and full-stack developer with expertise
                in web technologies. I build scalable, efficient, and
                user-friendly web applications, focusing on both front-end and
                back-end development.
              </p>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6">
                <Link
                  to="/contact"
                  className="bg-accent text-white px-6 py-3 rounded-full hover:bg-black flex items-center gap-2"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in touch
                  <IoIosArrowRoundForward className="text-2xl" />
                </Link>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/nuwantha.dilshan.05"
                    className="rounded-full border-2 border-white bg-blue-500 p-3 hover:scale-110 transition-transform"
                  >
                    <FaFacebookF className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nuwantha-dilshan-subasinghe-6bbb08289/"
                    className="rounded-full border-2 border-white bg-blue-400 p-3 hover:scale-110 transition-transform"
                  >
                    <FaLinkedinIn className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side Section */}
            <div>
              <img
                src="./banner.png"
                alt="Home Banner"
                className="w-full mx-auto p-10 rounded-[100px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Blue Bar Section at Bottom */}
        <FirstSectionBottomBar />
      </div>
    </>
  );
}
