import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-close handler
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 font-semibold ${
          isScrolled ? "bg-[#040c16] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
          {/* Logo Section */}
          <div>
            <Link to="/" className="flex items-center">
              <img src="/logo.png" className="w-10 h-10 mr-2" alt="Logo" />
              <h1 className="text-white text-3xl uppercase">Nuwantha</h1>
            </Link>
          </div>

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
            } md:flex text-white text-[16px] uppercase gap-4 absolute md:relative right-0 top-14 md:top-auto md:right-auto md:flex-row md:items-center bg-[#040c16] md:bg-transparent w-full md:w-auto`}
          >
            <Link
              to="/"
              className="block py-2 px-4 hover:text-[#0788ff]"
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 hover:text-[#0788ff]"
              onClick={handleNavClick}
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="block py-2 px-4 hover:text-[#0788ff]"
              onClick={handleNavClick}
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="block py-2 px-4 hover:text-[#0788ff]"
              onClick={handleNavClick}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 hover:text-[#0788ff]"
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </div>

          {/* Let's Talk Button */}
          <Link
            to="/contact"
            className="hidden md:block uppercase bg-[#0788ff] border-1 border-[#0788ff] text-white px-4 py-2 rounded-full hover:border-white hover:bg-black"
          >
            Let's Talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
