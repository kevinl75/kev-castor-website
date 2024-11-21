import React from "react";
import Image from "next/image";

import { LuNewspaper, LuGithub, LuTwitch, LuHammer } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";

import nextConfig from "../../next.config.mjs";

const HomePage = () => {
  const timelineItems = [
    {
      type: "Article",
      title: "Les bonnes pratiques React en 2024",
      date: "Il y a 3 jours",
      icon: <LuNewspaper />,
    },
    {
      type: "Projet",
      title: "Castor Culture Club",
      date: "Il y a 1 semaine",
      icon: <LuHammer />,
    },
  ];
  console.log("Bonjour");
  console.log(nextConfig);

  return (
    <div>
      {/* Hero Section */}
      <div className="py-12 text-center bg-dust-300">
        <div className="container mx-auto px-4 text-dust-900">
          <Image
            src="/kev-castor-website/kev-castor-logo.jpeg"
            alt="logo"
            width={200}
            height={200}
            className="rounded-full mb-8 justify-self-center"
          />
          <h1 className="text-4xl font-bold mb-6">
            Bienvenue dans mon univers !
          </h1>
          <p className="text-xl mb-8">
            Gaming 🎮 | Developpement 💻 | Creation de contenu 🎥
          </p>
          <div className="flex justify-center gap-4 text-stone-100">
            <a
              href="#"
              className="p-4 rounded-full hover:bg-opacity-80 bg-cactus-600"
            >
              <LuTwitch className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-4 rounded-full hover:bg-opacity-80 bg-cactus-600"
            >
              <BsTwitterX className="w-6 h-6" />
            </a>
            <a
              href="#"
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
                  <span className="text-sm">{item.date}</span>
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
