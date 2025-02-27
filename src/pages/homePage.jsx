import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/footer";
import Navbar from "../components/header";
import AboutPage from "./about";
import ContactPage from "./contact";
import Home from "./home";
import ProjectsPage from "./projects";
import ServicesPage from "./services";
import TestimonialPage from "./education";
import EducationTimeline from "./education";

export default function HomePage() {
  const upRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const scrollToBottom = () => {
    upRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Show button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      {showButton && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-10 right-5 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-black  hover:scale-110 transition-all duration-75 z-50"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      {/* Home Section */}
      <div className="w-full bg-primary font-[Times_New_Roman]">
        <section
          id="home"
          className="min-h-[90vh] flex items-center justify-center py-5"
          ref={upRef}
        >
          <Home />
        </section>
      </div>

      {/* About Section */}
      <div className="w-full bg-primary font-[Times_New_Roman]">
        <section
          id="about"
          className="min-h-[90vh] flex items-center justify-center py-5"
        >
          <AboutPage />
        </section>
      </div>
      {/* Education Section */}
      <div className="w-full bg-primary font-[Times_New_Roman]">
        <section
          id="education"
          className="min-h-[90vh] flex items-center justify-center py-5"
        >
          <EducationTimeline />
        </section>
      </div>

      {/* Projects Section */}
      <div className="w-full bg-primary font-[Times_New_Roman]">
        <section
          id="projects"
          className="min-h-[90vh] flex items-center justify-center py-5"
        >
          <ProjectsPage />
        </section>
      </div>

      {/* Services Section */}
      <div className="w-full bg-primary font-[Times_New_Roman]">
        <section
          id="services"
          className="min-h-[90vh] flex items-center justify-center py-5"
        >
          <ServicesPage />
        </section>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-primary font-[Times_New_Roman]">
        <section
          id="contact"
          className="min-h-[90vh] flex items-center justify-center"
        >
          <ContactPage />
        </section>
      </div>
      <Footer />
    </>
  );
}
