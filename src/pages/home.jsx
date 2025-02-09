import { useEffect, useState } from "react";
import MouseBall from "../components/mouseBall";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import FirstSectionBottomBar from "../components/firstSectionBottomBar";

export default function Home() {
  const [currentText, setCurrentText] = useState("software engineer");
  const [isTyping, setIsTyping] = useState(true);

  const texts = ["software engineer", "full stack developer"];
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
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
                  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Left Side Section */}
                      <div className="text-center md:text-left p-5">
                          <p className="bg-[#224564] inline-block px-2 rounded-[3px]">
                              You full Name
                          </p>
                          <h1 className="text-3xl md:text-5xl font-bold mb-2 uppercase">
                              Hi! I'm First Name.
                          </h1>
                          <h1 className="text-[#0788ff] text-3xl md:text-5xl font-bold mb-2 uppercase flex items-center">
                              <span className="mr-2 md:mr-3">I'm</span>
                              <span
                                  className={`inline-block ${
                                      isTyping ? "animate-typewriter" : ""
                                  } whitespace-nowrap overflow-hidden`}
                                  style={{ opacity: isTyping ? 1 : 0 }}
                              >
                                  {currentText}
                              </span>
                          </h1>

                          <p className="text-base md:text-xl">
                              I’m a software engineer and full-stack developer
                              with expertise in web technologies. I build
                              scalable, efficient, and user-friendly web
                              applications, focusing on both front-end and
                              back-end development.
                          </p>
                          <div className="flex justify-center md:justify-start items-center">
                              <Link
                                  to="/contact"
                                  className="bg-[#0788ff] text-white px-4 py-2 rounded-full hover:bg-black mt-6 mr-8 flex items-center gap-2"
                              >
                                  Get in touch
                                  <IoIosArrowRoundForward className="text-2xl" />
                              </Link>
                              <div className="ml-4 flex items-center justify-center pt-6 gap-4 relative">
                                  <Link
                                      to="#"
                                      className="absolute rounded-full border-2 border-white bg-blue-500 p-2 hover:mb-1 transition-all duration-300"
                                      style={{ left: "-1.5rem" }}
                                  >
                                      <FaFacebookF className="text-white text-2xl" />
                                  </Link>
                                  <Link
                                      to="#"
                                      className="absolute rounded-full border-2 border-white bg-blue-400 p-2 hover:mb-1 transition-all duration-300"
                                      style={{ left: "1.5rem" }}
                                  >
                                      <FaLinkedinIn className="text-white text-2xl" />
                                  </Link>
                              </div>
                          </div>
                      </div>
                      {/* Right Side Section */}
                      <div className="mt-8 md:mt-0 md:p-25">
                          <img
                              src="./home-banner.png"
                              alt="Home Banner"
                              className="w-full max-w-md mx-auto md:max-w-full"
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
