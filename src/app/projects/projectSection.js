import React from "react";
import ProjectCard from "../../components/projectCard";

export default function ProjectSection({ projects }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.title}
            projectDesc={project.description}
            projectImage={project.image}
            projectTags={project.tags}
            projectLink={project.link}
            isLastAndEven={
              index == projects.length - 1 && index % 2 == 0 ? true : false
            }
          />
        ))}
      </div>
    </section>
  );
}
