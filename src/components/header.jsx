import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 font-semibold ${
          isScrolled ? "bg-[#040c16] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between relative">
          <div>
            <Link to="#" className="flex items-center">
              <img src="/logo.png" className="w-10 h-10 mr-2" alt="" />
              <h1 className="text-white text-3xl uppercase">Nuwantha</h1>
            </Link>
          </div>

          <div className="text-center text-white text-[16px] uppercase flex gap-4 absolute right-35 ">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <Link
            to="/contact"
            className="uppercase bg-[#0788ff] border-1 border-[#0788ff] text-white px-4 py-2 rounded-full hover:border-white hover:bg-black relative"
          >
            Let's Talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
