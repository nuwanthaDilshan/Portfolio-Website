import { BiSolidError } from "react-icons/bi";
import MouseBall from "../components/mouseBall";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
      <>
        <MouseBall />
        <div className="bg-[#062239] min-h-screen">
          <main className="pt-18 p-3 max-w-7xl mx-auto text-white">
            <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center flex-col p-4 text-center">
              <BiSolidError className="text-[#0788ff] text-8xl md:text-[200px]" />
              <h1 className="text-2xl md:text-[30px] font-bold mt-4">
                We’re Sorry, an error has occurred
              </h1>
              <p className="text-sm md:text-[15px] opacity-60 mt-2">
                We seem to have lost this page but we don’t want to lose you.
              </p>
              <Link to="/" className="mt-6">
                <button className="bg-[#0788ff] border-1 border-[#0788ff] text-white px-4 py-2 rounded-full hover:border-white hover:bg-black">
                  Back to Home
                </button>
              </Link>
            </div>
          </main>
        </div>
      </>
    );
}