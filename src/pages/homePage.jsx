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
        <div className="h-screen w-full bg-[#062139] ">
          <Routes path="/*">
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/services" element={<ServicesPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Routes>
        </div>
      </>
    );
}