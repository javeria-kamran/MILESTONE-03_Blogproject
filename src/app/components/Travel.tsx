"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Travel() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    {
      title: "EatOut",
      image: "/images/eatout.jpg",
      href: "/Eatout",
    },

    {
      title: "Drinks",
      image: "/images/dinks.jpg",
      href: "/Drinks",
    },

    {
      title: "Stay",
      image: "/images/stayin.jpg",
      href: "/Stay",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-[5rem] ">
      <div className="flex flex-wrap justify-center py-11">
        <h3 className="text-white text-md text-center">
          Join us on a culinary journey as we explore the city&apos;s most vibrant
          eateries, from hidden gems to renowned institutions,Whether you&apos;re a
          seasoned foodie or simply looking for your next delicious meal, our
          blog is your guide to the best bites in town.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-orange-400">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="relative group overflow-hidden"
            onMouseEnter={() => setHoveredSection(section.title)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="relative aspect-[4/3] ">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className={`object-cover transition-transform duration-500 ease-in-out ${
                  hoveredSection === section.title ? "scale-110" : "scale-100"
                }`}
              />

              <div className="absolute inset-0 bg-black/20 border-orange-600" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className={`text-black bg-orange-500 text-xl md:text-2xl px-6 py-2 font-serif transition-transform duration-500 ease-in-out ${
                    hoveredSection === section.title ? "scale-110" : "scale-100"
                  }`}
                >
                  {section.title}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
