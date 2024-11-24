import React from "react";
import ProjectSection from "./projectSection";
import { getLocalData } from "@/lib/localdata";

export default async function ArticlesPage() {
  const projects = await getLocalData("projects.json");

  return (
    <div>
      <div className="py-12 text-center bg-dust-300 text-dust-900">
        <h1 className="text-4xl font-bold">Du code qui prend vie !</h1>
        <p className="mt-4 text-xl">
          Découvrez mes projets: applications en tout genre, expérimentations
          data et projet de découverte. Retrouvez le code de mes projets sur mon
          compte Github!
        </p>
      </div>

      <ProjectSection projects={projects} />
    </div>
  );
}
