/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

import { LuChevronRight } from "react-icons/lu";

const ProjectCard = ({
  projectName,
  projectDesc,
  projectImage,
  projectTags,
  projectLink,
  isLastAndEven,
}) => {
  return (
    <div
      className={
        isLastAndEven
          ? "bg-amber-200 rounded-lg border-2 border-amber-200 col-span-2 col-start-2"
          : "bg-amber-200 rounded-lg border-2 border-amber-200 col-span-2"
      }
    >
      <div className="w-full">
        <Image
          height={800}
          width={1600}
          src={projectImage}
          alt="Football Prediction app"
          className="w-full h-62 object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col px-6 justify-between text-amber-900">
        <div className="flex gap-2 mt-6">
          {projectTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 text-xs rounded-full bg-cactus-600 text-stone-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 ">
          <h2 className="text-xl font-semibold mb-2">{projectName}</h2>
          <p>{projectDesc}</p>
        </div>
        <div className="flex my-4 self-end">
          <a
            href={projectLink}
            className="flex items-center gap-1 text-sm font-medium"
          >
            Voir le repo Github
            <LuChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
