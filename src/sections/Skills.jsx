// Skills.jsx
import React from "react";

export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
    "API Integration",
    "React Router",
    "Context API",
  ];

  return (
    <section
      id="skills"
      className="bg-white pt-16 md:pt-20 lg:pt-24 py-20"
    >
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Skills
          </h2>
          <p className="text-gray-600 mt-3">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm md:text-base font-medium 
              hover:bg-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}