import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "../components/header";

export default function HomePage() {
    return (
      <>
        <Navbar/>
        <div className="h-screen w-full bg-[#062139] ">
          <Routes path="/*">
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </>
    );
}