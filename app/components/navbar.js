"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="group" onClick={closeMenu}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-[#C9A227] text-[#C9A227]">
              F
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-white">
                FURAHA
              </p>

              <p className="text-[9px] tracking-[0.2em] text-[#E5D39A]">
                EXECUTIVE RESIDENCY
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">

          <Link
            href="/"
            className="text-sm text-white transition hover:text-[#E5D39A]"
          >
            Home
          </Link>

          <a
            href="#inside-furaha"
            className="text-sm text-white transition hover:text-[#E5D39A]"
          >
            Inside Furaha
          </a>

          <a
            href="#contact"
            className="text-sm text-white transition hover:text-[#E5D39A]"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="border border-[#C9A227] px-5 py-3 text-sm text-white transition hover:bg-[#C9A227] hover:text-[#0B1F3A]"
          >
            Get in touch
          </a>

        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-1.5 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`h-px w-7 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>

          <span
            className={`h-px w-7 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-px w-5 bg-white transition-all duration-300 ${
              isOpen ? "w-7 -translate-y-1.5 -rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* Mobile navigation */}
        <div
          className={`absolute left-0 top-0 w-full bg-[#0B1F3A] px-6 pt-28 pb-10 transition-all duration-300 md:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-5 opacity-0"
          }`}
        >
          <div className="flex flex-col">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-sm uppercase tracking-[0.2em] text-white transition hover:text-[#E5D39A]"
            >
              Home
            </Link>

            <a
              href="#inside-furaha"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-sm uppercase tracking-[0.2em] text-white transition hover:text-[#E5D39A]"
            >
              Inside Furaha
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-sm uppercase tracking-[0.2em] text-white transition hover:text-[#E5D39A]"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-6 border border-[#C9A227] px-5 py-4 text-center text-sm uppercase tracking-[0.2em] text-white transition hover:bg-[#C9A227] hover:text-[#0B1F3A]"
            >
              Get in touch
            </a>

          </div>
        </div>

      </nav>
    </header>
  );
}