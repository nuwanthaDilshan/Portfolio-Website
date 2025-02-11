import MouseBall from "../components/mouseBall";

export default function ContactPage() {
  return (
    <>
      <MouseBall />
      <section id="contact" className="w-full h-full p-5 md:p-10 text-white">
        <div className="p-6 md:p-10 w-full h-full">
          <div className="w-full bg-[#052e55] relative rounded-2xl overflow-hidden">
            {/* Contact Image */}
            <img
              src="/contact-us.jpg"
              className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-cover rounded-2xl left-5 top-5"
              alt="Contact Us"
            />
            {/* Contact Info */}
            <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-sm md:text-base hidden md:block">
              <div className="mb-6">
                <p className="opacity-70">E-mail Address</p>
                <h3 className="font-bold text-xl md:text-2xl">
                  email@gmail.com
                </h3>
              </div>
              <div>
                <p className="opacity-70">Phone</p>
                <h3 className="font-bold text-xl md:text-2xl">
                  +94 111 222 333
                </h3>
              </div>
            </div>

            {/* Responsive Discussion Section */}
            <div className="w-full bg-[#051c32] grid grid-cols-1 md:grid-cols-3 py-10 px-5 md:px-10 gap-5">
              <div className="hidden md:block"></div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Let’s Discuss
                </h1>
                <p className="text-sm md:text-base">
                  I'm always open to freelancing opportunities if the right
                  project comes my way. Feel free to reach out!
                </p>
              </div>
              <div className="w-[150px] h-[100px] block md:hidden"></div>
            </div>

            {/* Responsive Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 pt-10 px-5 md:px-10 pb-5">
              <div></div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="uppercase text-sm">Your Name</p>
                    <input
                      type="text"
                      className="border rounded-md w-full h-12 px-3 focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <p className="uppercase text-sm">Your Email</p>
                    <input
                      type="email"
                      className="border rounded-md w-full h-12 px-3 focus:outline-none"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <p className="uppercase text-sm">Subject</p>
                  <input
                    type="text"
                    className="border rounded-md w-full h-12 px-3 focus:outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <p className="uppercase text-sm">Your Message</p>
                  <textarea
                    className="border rounded-md w-full h-28 px-3 focus:outline-none resize-none"
                    placeholder="Message"
                  />
                </div>
                <button className="uppercase bg-[#0788ff] border border-[#0788ff] text-white px-4 py-3 w-full rounded-full hover:border-white hover:bg-black transition duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
