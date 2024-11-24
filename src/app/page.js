/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { RiBlueskyLine } from "react-icons/ri";
import { LuNewspaper, LuGithub, LuTwitch, LuHammer } from "react-icons/lu";

const HomePage = () => {
  const timelineItems = [
    {
      type: "Article",
      title: "Les bonnes pratiques React en 2024",
      date: "27 Mai 2024",
      icon: <LuNewspaper />,
    },
    {
      type: "Projet",
      title: "Castor Culture Club",
      date: "WIP",
      icon: <LuHammer />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="py-12 text-center bg-dust-300">
        <div className="container mx-auto px-4 text-dust-900">
          <Image
            width={250}
            height={250}
            src="/kev-castor-website/kev-castor-logo.jpeg"
            alt="Logo"
            className="rounded-full mb-8 justify-self-center"
          />
          <h1 className="text-4xl font-bold mb-6">
            Développeur / Streamer tech & gaming / Rédacteur
          </h1>
          <p className="text-xl mb-8">
            J&apos;explore, je code, je joue et je partage ! Entre projets tech
            et sessions de gaming sur Twitch, j&apos;essaye de construire des
            projets sympa tout en partageant mes découvertes dans des articles.
            Pour me suivre:
          </p>
          <div className="flex justify-center gap-4 text-stone-100">
            <a
              href="https://www.twitch.tv/kev_castor"
              className="p-4 rounded-full hover:bg-opacity-80 bg-cactus-600"
            >
              <LuTwitch className="w-6 h-6" />
            </a>
            <a
              href="https://bsky.app/profile/kev-castor.bsky.social"
              className="p-4 rounded-full hover:bg-opacity-80 bg-cactus-600"
            >
              <RiBlueskyLine className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/kevinl75"
              className="p-4 rounded-full hover:bg-opacity-80 bg-cactus-600"
            >
              <LuGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-amber-900">
          Dernieres publications
        </h2>
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <div key={index} className="flex gap-4 mb-8">
              <div className="p-3 rounded-full content-center bg-cactus-600">
                {React.cloneElement(item.icon, {
                  className: "w-6 h-6 text-stone-100",
                })}
              </div>
              <div className="flex-1">
                <div className="bg-amber-200 p-6 rounded-lg shadow-sm text-amber-900">
                  <span className="text-sm font-semibold">
                    {item.type} - {item.date}
                  </span>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
