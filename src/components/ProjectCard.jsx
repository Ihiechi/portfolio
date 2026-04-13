import React from "react";

export default function ({ project }) {
  return (
    <div className="border rounded-xl p-6 shadow-md hover:shadow-lg bg-white bg-slate-100">
      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-700 mb-4">{project.description}</p>
      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold">Features:</h3>
          <ul className="list-disc list-inside">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Technologies */}
      {project.tech && project.tech.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold">Technologies</h3>
          <ul className="list-disc list-inside">
            {project.tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Links */}
      {project.github && (
        <div className="flex gap-4 mt-4">
          <a
            href={project.github}
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Github
          </a>
        </div>
      )}
      {project.live && (
        <div className="flex gap-4 mt-4">
          <a
            href={project.live}
            rel="noopener noreferrer"
            target="_blank"
            className="text-green-600 hover:underline"
          >
            Live Link
          </a>
        </div>
      )}
    </div>
  );
}
