"use client";

import Link from "next/link";
import { LogoGithub, LogoLinkedin } from "@carbon/icons-react";

import useIsTopPage from "@/hooks/useIsTopPage";
import Burger from "./Burger";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = ({ links }) => {
  const { isTopPage } = useIsTopPage();

  return (
    <header
      className={`z-20 bg-light/80 dark:bg-dark/80 backdrop-blur-md transition-all duration-300 fixed top-0 w-full ${
        isTopPage ? "h-24 shadow-none" : "h-16 shadow-03dp"
      }`}
    >
      <nav className="container h-full mx-auto">
        <div className="flex flex-wrap items-center h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex-1">
            <div className="hidden lg:flex sm:items-center sm:justify-start gap-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="text-black/[.87] dark:text-white/[.87] transition duration-300 hover:text-blue-600 dark:hover:text-blue-500"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="block lg:hidden absolute inset-y-0 left-0 flex items-center">
              <Burger links={links} />
            </div>
          </div>
          <div className="relative flex-1 flex justify-end items-center gap-x-4">
            <ThemeSwitch />
            <Link className="rounded-full group group" href="#">
              <LogoGithub
                className="transition duration-300 text-black/[.87] dark:text-white/[.87] group-hover:text-blue-600 group-hover:dark:text-blue-500"
                size={24}
              />
            </Link>
            <Link className="group" href="#">
              <LogoLinkedin
                className="transition duration-300 text-black/[.87] dark:text-white/[.87] group-hover:text-blue-600 group-hover:dark:text-blue-500"
                size={24}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
