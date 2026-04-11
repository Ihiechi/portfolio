// Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white relative"
    >
      <div className="container mx-auto px-4 py-4 text-center md:text-left  inset-0 bg-black/10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Ihechi 👋
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl mb-6 text-blue-100">
          Frontend Developer building responsive and user-friendly web
          applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
        <p className="text-sm text-blue-100 mt-2">React • JavaScript • Tailwind CSS</p>
      </div>
    </section>
  );
}
