import MouseBall from "../components/mouseBall";

export default function AboutPage() {
  return (
    <>
      <MouseBall />
      <section className="w-full h-full py-10">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-gray-100">
          {/* Left Side Section */}
          <div className="w-full flex justify-center md:px-10">
            <img
              src="/about-banner.png"
              alt="About Us Banner"
              className="rounded-3xl w-full max-w-sm md:max-w-md lg:max-w-lg object-cover h-[80vh]"
            />
          </div>

          {/* Right Side Section */}
          <div className="space-y-6 text-center md:text-left md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              Welcome to Our Journey
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Explore our identity, values, and the transformative impact we’re
              making through cutting-edge solutions and imaginative ideas.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our dedication to quality fuels our mission to provide products
              and services that truly matter. Come along on this exciting
              journey with us.
            </p>
            <div>
              <a
                href="https://github.com/nuwanthaDilshan" target="_blank"
                className=" bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-black  transition-all"
              >
                Go My GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
