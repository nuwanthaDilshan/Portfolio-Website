import MouseBall from "../components/mouseBall";

export default function AboutPage() {
  return (
    <>
      <MouseBall />
      <section id="about" className="w-full h-full py-10">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-gray-100">
          {/* Left Side Section */}
          <div className="w-full flex justify-center md:px-10">
            <img
              src="/about-banner.png"
              alt="About Us Banner"
              className="rounded-3xl w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
            />
          </div>

          {/* Right Side Section */}
          <div className="space-y-6 text-center md:text-left md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              Welcome to Our Journey
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Discover who we are, what we stand for, and how we are shaping the
              future with innovative solutions and creative ideas.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our commitment to excellence drives us to deliver products and
              services that make a difference. Join us on this incredible
              adventure.
            </p>
            <div>
              <button className=" bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-black  transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
