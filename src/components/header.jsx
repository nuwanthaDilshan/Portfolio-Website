import { useEffect, useState } from "react";

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
          <div className="flex items-center">
            <img src="./logo.png" className="w-10 h-10 mr-2" alt="" />
            <h1 className="text-white text-3xl uppercase">Nuwantha</h1>
          </div>

          <div className="text-center text-white text-[16px] uppercase flex gap-4 absolute right-35 ">
            <h1>Home</h1>
            <h1>About Me</h1>
            <h1>Projects</h1>
            <h1>Services</h1>
            <h1>Contact</h1>
          </div>

          <button className="uppercase bg-[#0788ff] border-1 border-[#0788ff] text-white px-4 py-2 rounded-full hover:border-white hover:bg-black relative">
            Let's Talk
          </button>
        </div>
      </nav>
    </header>
  );
}
