import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "../components/header";
import AboutPage from "./about";
import ProjectsPage from "./projects";
import ServicesPage from "./services";
import ContactPage from "./contact";

export default function HomePage() {
    return (
        <>
            <Navbar />

            {/* Home Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="home"
                    className="min-h-[90vh] flex items-center justify-center py-10"
                >
                    <Home />
                </section>
            </div>

            {/* About Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="about"
                    className="min-h-[90vh] flex items-center justify-center py-10"
                >
                    <AboutPage />
                </section>
            </div>

            {/* Projects Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="projects"
                    className="min-h-[90vh] flex items-center justify-center py-10"
                >
                    <ProjectsPage />
                </section>
            </div>

            {/* Services Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="services"
                    className="min-h-[90vh] flex items-center justify-center py-10"
                >
                    <ServicesPage />
                </section>
            </div>

            {/* Contact Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="contact"
                    className="min-h-[90vh] flex items-center justify-center py-10"
                >
                    <ContactPage />
                </section>
            </div>
        </>
    );
}
