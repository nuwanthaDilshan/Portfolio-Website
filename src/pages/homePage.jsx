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
            <div className="h-screen w-full bg-[#062139] font-[Times_New_Roman] pt-45 md:pt-0">
                <section
                    id="home"
                    className="h-full flex items-center justify-center"
                >
                    <Home />
                </section>
            </div>
            <div className="h-screen w-full bg-[#062139] font-[Times_New_Roman] md:pt-0 pt-40">
                <section
                    id="about"
                    className="h-screen flex items-center justify-center"
                >
                    <AboutPage />
                </section>
            </div>
            <div className="h-screen w-full bg-[#062139] font-[Times_New_Roman] md:pt-0 pt-80">
                <section
                    id="projects"
                    className="h-screen flex items-center justify-center"
                >
                    <ProjectsPage />
                </section>
            </div>
            <div className="h-screen w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="services"
                    className="h-screen flex items-center justify-center"
                >
                    <ServicesPage />
                </section>
            </div>
            <div className="h-screen w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="contact"
                    className="h-screen flex items-center justify-center"
                >
                    <ContactPage />
                </section>
            </div>
        </>
    );
}
