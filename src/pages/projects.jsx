import MouseBall from "../components/mouseBall";

export default function ProjectsPage() {
    return (
        <>
            <MouseBall />
            <section id="projects" className="w-full h-full pt-10 text-white">
                <div className="bg-[#072d4f] w-full h-full px-4">
                    <div className="p-20">
                        <p className="uppercase bg-[#224564] inline-block px-2 rounded-[3px]">
                            my work
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
