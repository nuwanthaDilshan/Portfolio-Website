import { useState } from "react";
import { FaCircle } from "react-icons/fa";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula odio et felis hendrerit, sed fermentum nisi dictum.",
    name: "Your Name",
    company: "Company Name",
    image: "/testimonialpic1.jpg", // Replace with real image URL
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula odio et felis hendrerit, sed fermentum nisi dictum.",
    name: "Your Name",
    company: "Company Name",
    image: "/testimonialpic2.jpg",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="text-white py-16 px-6 md:px-20 text-center relative">
      {/* Header */}
      <h4 className="bg-secondary text-white py-1 px-3 rounded-md inline-block text-sm uppercase mb-4">
        TESTIMONIAL
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        OVER <span className="text-accent">8,000+</span> PEOPLE TRUST ME
      </h2>

      {/* Testimonial Card */}
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-20 h-20 rounded-full border-4 border-accent shadow-lg mb-4"
        />
        <p className="text-lg md:text-xl text-gray-300 italic mb-6">
          {testimonials[currentIndex].text}
        </p>
        <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
        <p className="text-gray-400">{testimonials[currentIndex].company}</p>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <FaCircle
            key={index}
            className={`cursor-pointer text-xs ${
              index === currentIndex
                ? "text-accent scale-150 duration-700"
                : "text-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
