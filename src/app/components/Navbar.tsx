"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full  bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
      <div className="mx-auto flex h-16 max-w-7xl items-center  justify-between px-4 sm:px-6 lg:px-8">
        <div className="relative w-72">
          <h3 className="font-bold text-2xl text-black">Restaurant Guides</h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-8 md:flex text-black">
          {[
            { name: "Home", href: "/" },
            { name: "Eatout", href: "/Eatout" },
            { name: "Drinks", href: "/Drinks" },
            { name: "Stay", href: "/Stay" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm ${
                pathname === item.href
                  ? "text-white"
                  : "text-black hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black hover:text-white focus:outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="self-end m-4 text-white hover:text-orange-400 focus:outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Links */}
          <div className="mt-8 space-y-4 px-4">
            {[
              { name: "Home", href: "/" },
              { name: "Eatout", href: "/Eatout" },
              { name: "Drinks", href: "/Drinks" },
              { name: "Stay", href: "/Stay" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-sm ${
                  pathname === item.href
                    ? "text-[#ff8433]"
                    : "text-white hover:text-orange-400"
                }`}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
