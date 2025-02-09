import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine the active section based on scroll position
            const sections = [
                "home",
                "about",
                "projects",
                "services",
                "contact",
            ];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 400 && rect.bottom >= 400) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleNavClick = (id) => {
        setMenuOpen(false); // Close the menu if open
        scrollToSection(id); // Scroll to the specified section
    };

    return (
        <header>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 font-[Times_New_Roman] ${
                    isScrolled ? "bg-[#040c16] shadow-lg" : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center">
                        <img
                            src="/logo.png"
                            className="w-10 h-10 mr-2"
                            alt="Logo"
                            onClick={() => handleNavClick("home")}
                        />
                        <h1
                            className="text-white text-3xl capitalize font-[Monotype_Corsiva]"
                            onClick={() => handleNavClick("home")}
                        >
                            First Name
                        </h1>
                    </NavLink>

                    {/* Hamburger Icon for Mobile */}
                    <button
                        className="text-white md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`${
                            menuOpen ? "block" : "hidden"
                        } md:flex text-[13px] text-white text-base uppercase gap-4 absolute md:relative right-1 top-14 md:top-auto md:right-auto md:flex-row md:items-center bg-[#040c16] md:bg-transparent w-full md:w-auto`}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative text-white block py-2 px-4 ${
                                    activeSection === "home"
                                        ? "text-[#0788ff] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-[3px] md:after:bg-[#0788ff] md:after:transition-all md:after:duration-1000"
                                        : "md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-0 md:after:h-[3px] md:after:bg-transparent"
                                }`
                            }
                            onClick={() => handleNavClick("home")}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `relative text-white block py-2 px-4 ${
                                    activeSection === "about"
                                        ? "text-[#0788ff] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-[3px] md:after:bg-[#0788ff] md:after:transition-all md:after:duration-1000"
                                        : "md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-0 md:after:h-[3px] md:after:bg-transparent"
                                }`
                            }
                            onClick={() => handleNavClick("about")}
                        >
                            About Me
                        </NavLink>

                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `relative text-white block py-2 px-4 ${
                                    activeSection === "projects"
                                        ? "text-[#0788ff] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-[3px] md:after:bg-[#0788ff] md:after:transition-all md:after:duration-1000"
                                        : "md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-0 md:after:h-[3px] md:after:bg-transparent"
                                }`
                            }
                            onClick={() => handleNavClick("projects")}
                        >
                            Projects
                        </NavLink>

                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `relative text-white block py-2 px-4 ${
                                    activeSection === "services"
                                        ? "text-[#0788ff] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-[3px] md:after:bg-[#0788ff] md:after:transition-all md:after:duration-1000"
                                        : "md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-0 md:after:h-[3px] md:after:bg-transparent"
                                }`
                            }
                            onClick={() => handleNavClick("services")}
                        >
                            Services
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `relative text-white block py-2 px-4 ${
                                    activeSection === "contact"
                                        ? "text-[#0788ff] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-[3px] md:after:bg-[#0788ff] md:after:transition-all md:after:duration-1000"
                                        : "md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-0 md:after:h-[3px] md:after:bg-transparent"
                                }`
                            }
                            onClick={() => handleNavClick("contact")}
                        >
                            Contact
                        </NavLink>
                        {/* Let's Talk Button */}
                        <Link
                            to="/contact"
                            className="hidden md:block uppercase bg-[#0788ff] border-1 border-[#0788ff] text-white px-4 py-2 rounded-full hover:border-white hover:bg-black md:ml-[40px]"
                            onClick={() => handleNavClick("contact")}
                        >
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
