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
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
                        {/* Left Side Section */}
                        <div className="text-center md:text-left p-5">
                            <p className="bg-[#224564] inline-block px-2 rounded-[3px] mb-2">
                                Your Full Name
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
                                Hi! I'm First Name.
                            </h1>
                            <h1 className="text-[#0788ff] text-3xl md:text-4xl font-bold mb-4 uppercase flex items-center">
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
                                I’m a software engineer and full-stack developer
                                with expertise in web technologies. I build
                                scalable, efficient, and user-friendly web
                                applications, focusing on both front-end and
                                back-end development.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6">
                                <Link
                                    to="/contact"
                                    className="bg-[#0788ff] text-white px-6 py-3 rounded-full hover:bg-black flex items-center gap-2"
                                >
                                    Get in touch
                                    <IoIosArrowRoundForward className="text-2xl" />
                                </Link>
                                <div className="flex gap-4">
                                    <Link
                                        to="#"
                                        className="rounded-full border-2 border-white bg-blue-500 p-3 hover:scale-110 transition-transform"
                                    >
                                        <FaFacebookF className="text-white text-xl" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="rounded-full border-2 border-white bg-blue-400 p-3 hover:scale-110 transition-transform"
                                    >
                                        <FaLinkedinIn className="text-white text-xl" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Section */}
                        <div className="mt-8 md:mt-0">
                            <img
                                src="./home-banner.png"
                                alt="Home Banner"
                                className="w-full max-w-lg mx-auto"
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
