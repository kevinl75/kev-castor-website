import React from "react";
import ArticleSection from "./articleSection";
import { getLocalData } from "@/lib/localdata";

export default async function Page() {
  const articles = await getLocalData("articles.json");

  return (
    <div>
      <div className="py-12 text-center bg-dust-300 text-dust-900">
        <h1 className="text-4xl font-bold">
          Explorations tech, découvertes et retours d&apos;expérience.
        </h1>
        <p className="mt-4 text-xl">
          Retrouvez ici mes analyses et mes apprentissages. Un mélange de bonnes
          pratiques, de découvertes et de réflexions sur le monde de la tech !
        </p>
      </div>

      <ArticleSection articles={articles} />
    </div>
  );
}
