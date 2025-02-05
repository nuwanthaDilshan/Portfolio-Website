import MouseBall from "../components/mouseBall";

export default function AboutPage() {
    return (
        <>
            <MouseBall />
            <div className="bg-[#062239] min-h-screen mt-70 md:mt-12">
                <main className="pt-18 p-3 max-w-7xl mx-auto text-gray-700">
                    <section id="about">About Section</section>
                </main>
            </div>
        </>
    );
}
