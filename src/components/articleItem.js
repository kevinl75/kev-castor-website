/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LuClock, LuChevronRight } from "react-icons/lu";

const Article = ({ id, title, desc, tags, link, createdDate, readingTime }) => {
  return (
    <article
      key={id}
      className="bg-amber-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow mb-10"
    >
      <div className="p-6 text-amber-900">
        <div className="flex gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 text-xs rounded-full bg-cactus-600 text-stone-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{desc}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <LuClock className="w-4 h-4" />
              {readingTime}
            </span>
            <span>{createdDate}</span>
          </div>
          <a className="flex items-center gap-1 text-sm" href={link}>
            Lire plus
            <LuChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Article;
