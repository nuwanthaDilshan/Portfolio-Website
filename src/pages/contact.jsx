import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MouseBall from "../components/mouseBall";
import toast from "react-hot-toast";

export default function ContactPage() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    // setMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          // console.log("Email sent successfully:", result.text);
          // setMessage("Message sent successfully!");
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          // console.error("Error sending email:", error.text);
          // setMessage("Failed to send message. Please try again.");
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
        <MouseBall />
        <section id="contact" className="w-full h-full p-5 md:p-10 text-white">
          <div className="p-6 md:p-10 w-full h-full">
            <div className="w-full bg-secondary relative rounded-2xl overflow-hidden">
              {/* Contact Image */}
              <img
                src="/contact_us.png"
                className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-cover rounded-2xl left-5 top-5"
                alt="Contact Us"
              />
              {/* Contact Info */}
              <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-sm md:text-base hidden md:block">
                <div className="mb-6">
                  <p className="opacity-70">E-mail Address</p>
                  <h3 className="font-bold text-xl md:text-2xl">
                    nuwanthadilshan56@gmail.com
                  </h3>
                </div>
                <div>
                  <p className="opacity-70">Phone</p>
                  <h3 className="font-bold text-xl md:text-2xl">
                    +94 74 190 0211
                  </h3>
                </div>
              </div>

              {/* Responsive Discussion Section */}
              <div className="w-full bg-tertiary grid grid-cols-1 md:grid-cols-3 py-10 px-5 md:px-10 gap-5">
                <div className="hidden md:block"></div>
                <div className="col-span-2 md:col-span-1 hidden md:block">
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    Let’s Discuss
                  </h1>
                  <p className="text-sm md:text-base">
                    I am always open to freelancing opportunities if the right
                    project comes my way. Feel free to reach out!
                  </p>
                </div>
                <div className="w-[150px] h-[100px] block md:hidden"></div>
              </div>

              {/* Responsive Contact Section */}
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-3 pt-10 px-5 md:px-10 pb-5">
                  <div></div>
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="uppercase text-sm">Your Name</p>
                        <input
                          type="text"
                          name="name"
                          className="border rounded-md w-full h-12 px-3 focus:outline-none"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div>
                        <p className="uppercase text-sm">Your Email</p>
                        <input
                          type="email"
                          name="email"
                          className="border rounded-md w-full h-12 px-3 focus:outline-none"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="uppercase text-sm">Subject</p>
                      <input
                        type="text"
                        name="subject"
                        className="border rounded-md w-full h-12 px-3 focus:outline-none"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <p className="uppercase text-sm">Your Message</p>
                      <textarea
                        className="border rounded-md w-full h-28 px-3 focus:outline-none resize-none"
                        placeholder="Message"
                        name="message"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="uppercase bg-accent  text-white px-4 py-3 w-full rounded-full  hover:bg-black transition duration-300"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    {/* {message && (
                      <p className="text-center mt-3 text-sm md:text-base text-green-400">
                        {message}
                      </p>
                    )} */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
    </>
  );
}
