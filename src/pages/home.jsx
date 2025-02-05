import { useEffect, useState } from "react";
import MouseBall from "../components/mouseBall";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
    const [currentText, setCurrentText] = useState("software engineer");
    const [isTyping, setIsTyping] = useState(true);

    const texts = ["software engineer", "full stack developer"];

    let currentIndex = 0; // Initialize index to start at the first text

    // Change text in order every 3 seconds with smooth transition
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTyping(false); // Stop typing animation before changing text
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length; // Move to the next text
                setCurrentText(texts[currentIndex]); // Set the new text
                setIsTyping(true); // Start typing animation again
            }, 500); // Delay before typing new text
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <MouseBall />
            <div className="bg-[#062239] min-h-screen w-full flex flex-col relative pt-50 md:pt-15">
                {/* Home Section */}
                <section id="home" className="flex-1">
                    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-gray-100">
                        {/* Left Side Section */}
                        <div className="text-center md:text-left">
                            <p className="bg-[#06355f] w-fixed inline-block px-2 rounded-1xl">
                                Nuwantha Dilshan Subasinghe
                            </p>
                            <h1 className="text-3xl md:text-5xl font-bold mb-2 uppercase">
                                Hi! I'm Nuwantha.
                            </h1>
                            <h1 className=" text-[#0788ff] text-3xl md:text-5xl font-bold mb-2 uppercase flex items-center">
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
                            <div className="container mx-auto flex justify-center md:justify-start items-center">
                                <Link
                                    to="/contact"
                                    className="bg-[#0788ff] border-1 border-[#0788ff] text-white px-4 py-2 rounded-full hover:border-white hover:bg-black uppercase mt-6 mr-8 md:mr-15 flex items-center gap-2"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent the default link behavior (page refresh)
                                        const contactSection =
                                            document.getElementById("contact");
                                        if (contactSection) {
                                            contactSection.scrollIntoView({
                                                behavior: "smooth",
                                            }); // Scroll smoothly to the contact section
                                        }
                                    }}
                                >
                                    Get in touch
                                    <IoIosArrowRoundForward className="text-2xl" />
                                </Link>
                                <div className="ml-4 flex items-center justify-center pt-6 gap-4 relative">
                                    {/* Facebook Link */}
                                    <Link
                                        to="#"
                                        className="absolute rounded-full border-2 border-white bg-blue-500 p-2 hover:mb-1"
                                        style={{ left: "-1.5rem" }} // Adjust this value to control the gap
                                    >
                                        <FaFacebookF className="text-white text-2xl" />
                                    </Link>

                                    {/* LinkedIn Link */}
                                    <Link
                                        to="#"
                                        className="absolute rounded-full border-2 border-white bg-blue-400 p-2 hover:mb-1"
                                        style={{ left: "1.5rem" }} // Adjust this value to control the gap
                                    >
                                        <FaLinkedinIn className="text-white text-2xl" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Right Side Section */}
                        <div className="mt-8 md:mt-0">
                            <img
                                src="./home-banner.png"
                                alt="Home Banner"
                                className="w-full max-w-md mx-auto md:max-w-full"
                            />
                        </div>
                    </div>
                </section>
                {/* Full-Width Red Bar at Bottom */}
                <div className="absolute left-0 bottom-0 w-full h-[150px] bg-red-500"></div>
            </div>
        </>
    );
}
