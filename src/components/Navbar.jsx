import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 bg-slate-700">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-600">MyPortfolio</div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#projects"
            className="hover:text-blue-600 text-blue-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 text-blue-600 transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}></button>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out">
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-100">
            Projects
          </a>
          <a href="#skills" className="block px-4 py-2 hover:bg-gray-100">
            Skills
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
