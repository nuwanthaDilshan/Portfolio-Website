import { FaGraduationCap } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

const education = [
  {
    year: "2023",
    title: "BSc (Hons) in Software Engineering",
    institution: "Cardiff Metropolitan University, UK",
    icon: <FaGraduationCap className="text-white md:text-2xl" />,
  },
  {
    year: "2021",
    title: "HD in Computing and Software Engineering",
    institution: "ICBT Campus, Colombo, Sri Lanka",
    icon: <GiTrophyCup className="text-white md:text-2xl" />,
  },
  {
    year: "2016",
    title: "Diploma in English Language",
    institution: "Britch Way English Academy, Sri Lanka",
    icon: <GiTrophyCup className="text-white md:text-2xl" />,
  },
];

export default function EducationTimeline() {
  return (
    <>
      <section
        id="services"
        className="w-full h-full p-6 md:p-10 text-white"
      >
        <div className="p-6 md:p-16">
          <p className="uppercase bg-secondary inline-block px-2 rounded-[3px]">
            education
          </p>
          <h1 className="uppercase text-2xl md:text-3xl font-bold mt-2">
            My criteria for
            <span className="text-accent"> education.</span>
          </h1>
          <div className="mt-8 md:w-[800px] mx-auto">
            <div className="flex flex-col space-y-12 relative">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center w-full ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } relative`}
                >
                  {/* Connector Line */}
                  {index !== education.length - 1 && (
                    <div className="absolute top-full left-1/2 w-2 h-12 bg-gradient-to-r from-tertiary to-secondary"></div>
                  )}

                  <div className="flex w-full items-center space-x-6 max-w-lg p-6 bg-gradient-to-r from-tertiary to-secondary shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center w-10 h-10  md:w-16 md:h-16 bg-gradient-to-r from-accent to-secondary rounded-full border-4 border-gray-700 shadow-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="md:text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium">
                        {item.institution}
                      </p>
                      <p className="text-gray-400 text-xs mt-2">{item.year}</p>
                      {item.modules && (
                        <ul className="mt-3 text-gray-300 text-sm list-disc list-inside">
                          {item.modules.map((module, i) => (
                            <li key={i}>{module}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
