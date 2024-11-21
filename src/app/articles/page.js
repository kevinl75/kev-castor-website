import React from "react";
import ArticleSection from "./articleSection";
import { getLocalData } from "@/lib/localdata";

export default async function Page() {
  const articles = await getLocalData("articles.json");

  return (
    <div>
      <div className="py-12 text-center bg-dust-300 text-dust-900">
        <h1 className="text-4xl font-bold">Articles</h1>
        <p className="mt-4 text-lg">
          Découvrez mes articles sur le dev, le gaming et la tech
        </p>
      </div>

      <ArticleSection articles={articles} />
    </div>
  );
}
