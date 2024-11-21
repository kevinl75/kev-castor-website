"use client";
import { LuSearch } from "react-icons/lu";
import React, { useState } from "react";
import Article from "../../components/articleItem";

export default function ArticleSection({ articles }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const tags = Array.from(new Set(articles.flatMap((article) => article.tags)));

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "" || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
        <div className="relative flex-1 max-w-md text-amber-900">
          <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            className={`px-4 py-2 rounded-lg text-stone-100 bg-cactus-600 ${
              selectedTag === "" ? "bg-opacity-80" : ""
            }`}
            onClick={() => setSelectedTag("")}
          >
            Tous
          </button>
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-stone-100 bg-cactus-600 ${
                selectedTag === tag ? "bg-opacity-80" : ""
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div>
        {filteredArticles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            desc={article.description}
            link={article.link}
            tags={article.tags}
            readingTime={article.readTime}
            createdDate={article.date}
            id={article.id}
          />
        ))}
      </div>
    </section>
  );
}
