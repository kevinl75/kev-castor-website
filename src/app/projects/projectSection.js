import React from "react";
import ProjectCard from "../../components/projectCard";

export default function ProjectSection({ projects }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            desc={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
            isLastAndEven={
              index == projects.length - 1 && index % 2 == 0 ? true : false
            }
          />
        ))}
      </div>
    </section>
  );
}
