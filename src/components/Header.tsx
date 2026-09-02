"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#services" },
    { name: "Case Studies", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-gray-950/95 backdrop-blur-md shadow-xl py-3 border-b border-gray-800"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center space-x-2">
          <span className="text-2xl font-black font-raleway tracking-wider text-white">
            MODERN<span className="text-primary">.</span>
          </span>
          <span className="hidden sm:inline-flex items-center space-x-1.5 bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>99.9% Uptime</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary text-gray-950 px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-yellow-600 transition-all duration-300 shadow-md flex items-center space-x-1.5 group"
          >
            <span>Book Discovery Call</span>
            <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950 border-b border-gray-800 shadow-2xl flex flex-col py-4 px-6 space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2 text-sm font-semibold text-gray-200 hover:text-primary transition-colors border-b border-gray-800/60"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                className="w-full text-center block bg-primary text-gray-950 py-3 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-yellow-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Discovery Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
