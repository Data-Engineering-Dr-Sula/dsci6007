"use client";
import Link from "next/link";
import React from "react";

const menuItems = [
  { name: "Course Description", href: "#description" },
  { name: "Schedule", href: "#schedule" },
  { name: "Course Work", href: "#course" },
  { name: "Office Hours", href: "#hours" },
];

export default function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <header className="bg-[#003366] border-b border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" title="" className="flex gap-3">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://marvel-b1-cdn.bc0a.com/f00000000257779/www.newhaven.edu/_resources/images/_email/logos/unewhaven_stacked_logo_white.png"
                alt=""
                width={100}
                height={100}
              />
              <div className="text-2xl font-bold text-white my-auto">
                DSCI-6007
              </div>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                onClick={() => setShowMenu(false)}
                href={item.href}
                title=""
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
              >
                {" "}
                {item.name}{" "}
              </Link>
            ))}
          </div>
        </nav>

        <nav
          className={`${
            showMenu ? "block" : "hidden"
          } min-h-screen px-4 py-10 text-center bg-[#003366] md:hidden`}
        >
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col items-center mt-10 space-y-2">
            {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                onClick={() => setShowMenu(false)}
                title=""
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                {item.name}{" "}
              </Link>
            ))}
          </nav>
        </nav>
      </div>
    </header>
  );
}
