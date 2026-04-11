import React from "react";
import { projects } from "../data/project";
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
  return (
    <section
      className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6 pt-16 md:pt-20 lg:pt-24"
      id="projects"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
