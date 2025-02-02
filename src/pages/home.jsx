import MouseBall from "../components/mouseBall";


export default function Home() {
    return (
      <>
        <MouseBall />
        <div className="bg-[#062239] min-h-screen">
          <main className="pt-18 p-3 max-w-7xl mx-auto text-gray-700">
            <section id="home">Home Section</section>
          </main>
        </div>
      </>
    );
}