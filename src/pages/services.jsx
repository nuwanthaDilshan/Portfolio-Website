import MouseBall from "../components/mouseBall";

export default function ServicesPage() {
  const card = [
    {
      title: "Web Development Services",
      description:
        "I provide a wide range of web development services to bring your ideas to life. From custom websites to complex applications, I deliver results.",
      image: "/web-development-service.jpg",
      startRate: "★★★★⯨",
      rate: "4.7",
    },
    {
      title: "Web Designing Services",
      description:
        " I specialize in creating visually appealing and user-friendly web interfaces for a variety of applications.",
      image: "/website-design-services.jpg",
      startRate: "★★★★⯨",
      rate: "4.5",
    },
    {
      title: "Graphic Designing Services",
      description:
        "I craft visually appealing designs for websites and digital media, bringing your ideas to life.",
      image: "/Graphic-Designing.jpg",
      startRate: "★★★☆☆",
      rate: "3.0",
    },
  ];

  return (
    <>
      <MouseBall />
      <section className="w-full h-full p-10 text-white">
        <div className="p-6 md:p-16">
          <p className="uppercase bg-secondary inline-block px-2 rounded-[3px]">
            Services
          </p>
          <h1 className="uppercase text-3xl font-bold mt-2">
            web development <span className="text-accent">services</span> I am
            providing
          </h1>

          {/* Responsive Flexbox Layout */}
          <div className="flex flex-wrap justify-center gap-5 mt-7 max-w-full mx-auto">
            {card.map((item, index) => (
              <div key={index} className="w-[300px] sm:w-[350px] flex-shrink-0 hover:scale-105 transform duration-300">
                {/* Service Card */}
                <div className="w-full h-[400px] relative group overflow-hidden rounded-[6px] shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/20 rounded-[6px]"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <h2 className="text-[20px] font-bold mb-2">{item.title}</h2>
                    <p className="text-[14px] leading-relaxed opacity-90">
                      {item.description}
                    </p>
                    <hr className="my-3 opacity-30" />
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] text-yellow-400 hover:text-green-400">{item.startRate}</span>
                      <span className="text-[14px] opacity-90">{item.rate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
