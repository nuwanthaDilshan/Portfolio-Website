import MouseBall from "../components/mouseBall";

export default function AboutPage() {
    return (
        <>
            <MouseBall />
                <section id="about" className="w-full h-full">
                    <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-gray-100">
                        {/* Left Side Section */}
                        <div className="w-full flex justify-center md:p-35">
                            <img
                                src="/about-banner.jpg"
                                alt="About Us Banner"
                                className="rounded-[36px] w-full max-w-md md:max-w-lg lg:max-w-xl object-cover"
                            />
                        </div>

                        {/* Right Side Section */}
                        <div className="space-y-6 text-center md:text-left">
                            <h2 className="text-4xl font-bold text-blue-500">
                                Welcome to Our Journey
                            </h2>
                            <p className="text-gray-200 text-lg leading-relaxed">
                                Discover who we are, what we stand for, and how
                                we are shaping the future with innovative
                                solutions and creative ideas.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Our commitment to excellence drives us to
                                deliver products and services that make a
                                difference. Join us on this incredible
                                adventure.
                            </p>
                            <div>
                                <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-black hover:border-1 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
