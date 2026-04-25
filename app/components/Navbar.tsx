"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Hotels", href: "/hotels" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-100 px-4 pt-4 transition-all duration-300">
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-2 transition-all duration-500 border rounded-full ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-white/40 shadow-xl"
              : "bg-white/40 backdrop-blur-md border-white/20 shadow-none"
          }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image
              src="/images/book-sundarban-trip.png"
              alt="Sundarban Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-[14px] font-bold transition-all rounded-full ${
                  pathname === link.href
                    ? "text-green-800 bg-white shadow-sm"
                    : "text-gray-800 hover:text-green-700 hover:bg-white/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ACTION */}
          <div className="flex items-center gap-3">
            <a href="tel:6290867430" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-800 text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg hover:bg-green-700"
              >
                <Phone size={14} /> BOOK NOW
              </motion.button>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-white/50 text-green-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-110 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute top-0 right-0 h-full w-[80%] bg-white shadow-2xl p-8 flex flex-col gap-4"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-green-800 text-xl">Menu</span>
                <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex justify-between items-center p-4 rounded-xl font-bold ${
                    pathname === link.href ? "bg-green-800 text-white" : "text-gray-800 hover:bg-green-50"
                  }`}
                >
                  {link.name} <ArrowRight size={18} />
                </Link>
              ))}
              <a href="tel:6295665770" className="mt-auto bg-green-800 text-white py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
                <Phone size={18} /> Call Now
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}