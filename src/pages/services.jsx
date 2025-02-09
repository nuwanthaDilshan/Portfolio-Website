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
                        web development{" "}
                        <span className="text-[#0788ff]">services</span> I am
                        providing
                    </h1>
                    <div className="flex mt-7 gap-5">
                        <div className="w-[300px] h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
                            {/* Image */}
                            <img
                                src="/web-development-service.jpg"
                                alt="Web Development Services"
                                className="w-full h-full object-cover rounded-[6px]"
                            />

                            {/* Darker gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                                {/* Title */}
                                <h2 className="text-[20px] font-bold mb-2">
                                    Web Development Services
                                </h2>

                                {/* Description */}
                                <p className="text-[14px] leading-relaxed opacity-90">
                                    As a web developer, I provide a wide range
                                    of web development services to help
                                    businesses and individuals bring their ideas
                                    to life on the internet. Whether you need a
                                    custom website, a responsive design, or a
                                    complex web application, I have the skills
                                    and expertise to deliver exceptional
                                    results.
                                </p>

                                {/* Horizontal rule */}
                                <hr className="my-3 opacity-30" />

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    {/* Star rating */}
                                    <span className="text-[16px] text-yellow-400">
                                        ★★★★⯨
                                    </span>
                                    {/* Rating value */}
                                    <span className="text-[14px] opacity-90">
                                        (4.7)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
                            {/* Image */}
                            <img
                                src="/website-design-services.jpg"
                                alt="Web Development Services"
                                className="w-full h-full object-cover rounded-[6px]"
                            />

                            {/* Darker gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                                {/* Title */}
                                <h2 className="text-[20px] font-bold mb-2">
                                    Web Designing Services
                                </h2>

                                {/* Description */}
                                <p className="text-[14px] leading-relaxed opacity-90">
                                    As a web designer, I specialize in creating
                                    visually appealing and user-friendly web
                                    interfaces. Whether you need a simple
                                    website or a complex web application, I have
                                    the skills and experience to bring your
                                    vision to life.
                                </p>

                                {/* Horizontal rule */}
                                <hr className="my-3 opacity-30" />

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    {/* Star rating */}
                                    <span className="text-[16px] text-yellow-400">
                                        ★★★★⯨
                                    </span>
                                    {/* Rating value */}
                                    <span className="text-[14px] opacity-90">
                                        (4.5)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
                            {/* Image */}
                            <img
                                src="/seo.jpg"
                                alt="Web Development Services"
                                className="w-full h-full object-cover rounded-[6px]"
                            />

                            {/* Darker gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                                {/* Title */}
                                <h2 className="text-[20px] font-bold mb-2">
                                    SEO Services
                                </h2>

                                {/* Description */}
                                <p className="text-[14px] leading-relaxed opacity-90">
                                    As a SEO expert, I optimize websites to
                                    improve their visibility and ranking in
                                    search engine results. Whether you need
                                    basic SEO services or advanced SEO
                                    strategies, I have the skills and expertise
                                    to help you reach your goals.
                                </p>

                                {/* Horizontal rule */}
                                <hr className="my-3 opacity-30" />

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    {/* Star rating */}
                                    <span className="text-[16px] text-yellow-400">
                                        ★★★⯨☆
                                    </span>
                                    {/* Rating value */}
                                    <span className="text-[14px] opacity-90">
                                        (3.5)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
                            {/* Image */}
                            <img
                                src="/Graphic-Designing.jpg"
                                alt="Web Development Services"
                                className="w-full h-full object-cover rounded-[6px]"
                            />

                            {/* Darker gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                                {/* Title */}
                                <h2 className="text-[20px] font-bold mb-2">
                                    Graphic Designing Services
                                </h2>

                                {/* Description */}
                                <p className="text-[14px] leading-relaxed opacity-90">
                                    As a graphic designer, I create visually
                                    appealing and effective designs for
                                    websites, applications, and other digital
                                    media. Whether you need a simple logo or a
                                    complex design, I have the skills and
                                    expertise to bring your ideas to life.
                                </p>

                                {/* Horizontal rule */}
                                <hr className="my-3 opacity-30" />

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    {/* Star rating */}
                                    <span className="text-[16px] text-yellow-400">
                                        ★★★☆☆
                                    </span>
                                    {/* Rating value */}
                                    <span className="text-[14px] opacity-90">
                                        (3.0)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
