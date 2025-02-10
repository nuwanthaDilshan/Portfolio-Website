import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "../components/header";
import AboutPage from "./about";
import ProjectsPage from "./projects";
import ServicesPage from "./services";
import ContactPage from "./contact";
import TestimonialPage from "./testimonial";
import Footer from "../components/footer";

export default function HomePage() {
    return (
        <>
            <Navbar />

            {/* Home Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="home"
                    className="min-h-[90vh] flex items-center justify-center py-5"
                >
                    <Home />
                </section>
            </div>

            {/* About Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="about"
                    className="min-h-[90vh] flex items-center justify-center py-5"
                >
                    <AboutPage />
                </section>
            </div>

            {/* Projects Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="projects"
                    className="min-h-[90vh] flex items-center justify-center py-5"
                >
                    <ProjectsPage />
                </section>
            </div>

            {/* Services Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="services"
                    className="min-h-[90vh] flex items-center justify-center py-5"
                >
                    <ServicesPage />
                </section>
            </div>
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="services"
                    className="min-h-[90vh] flex items-center justify-center py-5"
                >
                    <TestimonialPage/>
                </section>
            </div>

            {/* Contact Section */}
            <div className="w-full bg-[#062139] font-[Times_New_Roman]">
                <section
                    id="contact"
                    className="min-h-[90vh] flex items-center justify-center"
                >
                    <ContactPage />
                </section>
            </div>
            <Footer/>
        </>
    );
}
