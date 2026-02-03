"use client";

import { CONSTANTS, NavItems } from "@/app/constant";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white shadow-lg shadow-white">
      <div className="flex h-16 items-center justify-between px-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
<Link href="/"> {CONSTANTS.COMPANY_NAME}</Link>          
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {NavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-semibold hover:text-red-600 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col items-center gap-4 py-4">
            {NavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold hover:text-red-600 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
