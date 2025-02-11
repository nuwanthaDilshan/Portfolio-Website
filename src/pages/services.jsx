import MouseBall from "../components/mouseBall";

export default function ServicesPage() {
  return (
    <>
      <MouseBall />
      <section id="services" className="w-full h-full p-10 text-white">
        <div className="p-6 md:p-16">
          <p className="uppercase bg-[#224564] inline-block px-2 rounded-[3px]">
            Services
          </p>
          <h1 className="uppercase text-3xl font-bold mt-2">
            web development <span className="text-[#0788ff]">services</span> I
            am providing
          </h1>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
            {/* Service Card 1 */}
            <div className="w-full h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
              <img
                src="/web-development-service.jpg"
                alt="Web Development Services"
                className="w-full h-full object-cover rounded-[6px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h2 className="text-[20px] font-bold mb-2">
                  Web Development Services
                </h2>
                <p className="text-[14px] leading-relaxed opacity-90">
                  I provide a wide range of web development services to bring
                  your ideas to life. From custom websites to complex
                  applications, I deliver results.
                </p>
                <hr className="my-3 opacity-30" />
                <div className="flex items-center gap-2">
                  <span className="text-[16px] text-yellow-400">★★★★⯨</span>
                  <span className="text-[14px] opacity-90">(4.7)</span>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="w-full h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
              <img
                src="/website-design-services.jpg"
                alt="Web Development Services"
                className="w-full h-full object-cover rounded-[6px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h2 className="text-[20px] font-bold mb-2">
                  Web Designing Services
                </h2>
                <p className="text-[14px] leading-relaxed opacity-90">
                  I specialize in creating visually appealing and user-friendly
                  web interfaces for a variety of applications.
                </p>
                <hr className="my-3 opacity-30" />
                <div className="flex items-center gap-2">
                  <span className="text-[16px] text-yellow-400">★★★★⯨</span>
                  <span className="text-[14px] opacity-90">(4.5)</span>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="w-full h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
              <img
                src="/seo.jpg"
                alt="SEO Services"
                className="w-full h-full object-cover rounded-[6px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h2 className="text-[20px] font-bold mb-2">SEO Services</h2>
                <p className="text-[14px] leading-relaxed opacity-90">
                  I help improve website visibility and search engine rankings
                  with tailored SEO strategies.
                </p>
                <hr className="my-3 opacity-30" />
                <div className="flex items-center gap-2">
                  <span className="text-[16px] text-yellow-400">★★★⯨☆</span>
                  <span className="text-[14px] opacity-90">(3.5)</span>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="w-full h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
              <img
                src="/Graphic-Designing.jpg"
                alt="Graphic Designing Services"
                className="w-full h-full object-cover rounded-[6px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h2 className="text-[20px] font-bold mb-2">
                  Graphic Designing Services
                </h2>
                <p className="text-[14px] leading-relaxed opacity-90">
                  I craft visually appealing designs for websites and digital
                  media, bringing your ideas to life.
                </p>
                <hr className="my-3 opacity-30" />
                <div className="flex items-center gap-2">
                  <span className="text-[16px] text-yellow-400">★★★☆☆</span>
                  <span className="text-[14px] opacity-90">(3.0)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
