"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" },
  { href: "/examples", label: "Examples" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="brutal-nav bg-white relative overflow-hidden">
      <div className="comic-lines absolute inset-0 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="comic-text text-3xl px-3 neo-brutal-card bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 transform -rotate-2"
            >
              HawK-a-Thoon
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="neo-brutal-button bg-white hover:bg-pink-200 transition-colors duration-300 transform rotate-1 hover:rotate-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden neo-brutal-button bg-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="neo-brutal-button bg-white hover:bg-pink-200 transition-colors duration-300 block text-center transform rotate-1 hover:rotate-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
