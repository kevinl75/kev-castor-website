/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="p-4 shadow-sm bg-cactus-600 text-stone-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img
            src="/kev-castor-logo.jpeg"
            alt="logo"
            className="rounded-full w-16 h-16"
          />
          <span className="text-2xl font-bold">Kev Castor</span>
        </div>
        <div className="text-lg flex gap-8">
          <Link href="/" className="hover:text-stone-300">
            Accueil
          </Link>
          <Link href="/articles" className="hover:text-stone-300">
            Articles
          </Link>
          <Link href="/projects" className="hover:text-stone-300">
            Projets
          </Link>
          <Link href="/about" className="hover:text-stone-300">
            A propos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
