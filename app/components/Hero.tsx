"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowUpRight, MapPin } from "lucide-react";

// --- ১. ডাটা সেট ---
const HERO_SLIDES = [
  {
    prefix: "The Untamed",
    highlight: "Sundarban",
    desc: "Experience the world's largest mangrove forest safari in absolute luxury.",
    image: "/images/home/sundarban-boat-safari.webp",
    alt: "Sundarban Mangrove Forest HD",
  },
  {
    prefix: "Wild Majesty of",
    highlight: "Wildlife",
    desc: "Witness the legendary Royal Bengal Tiger in its raw, natural habitat.",
    image: "/images/sundarban-home.webp",
    alt: "Royal Bengal Tiger HD",
  },
  {
    prefix: "Discover The",
    highlight: "Heritage",
    desc: "Explore ancient cultures and the mystical river life of the Bengal Delta.",
    image: "/images/sundarban-tiger.webp",
    alt: "Sundarban river life HD",
  },
];

export default function LuxuryHeroFinal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative h-[95vh] md:h-screen w-full overflow-hidden bg-[#050505]" 
      aria-label="Sundarban Travel Hero"
    >
      
      {/* --- ২. ইমেজ ইঞ্জিন (Anti-Blur) --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={HERO_SLIDES[index].image}
            alt={HERO_SLIDES[index].alt}
            fill
            priority={true}
            unoptimized={true} // নেক্সট জেএস কম্প্রেশন বন্ধ, ছবি একদম শার্প আসবে
            sizes="100vw"
            className="object-cover object-center"
          />
          
          {/* মাল্টি-লেয়ার প্রিমিয়াম ওভারলে (Gradient Fixed) */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* --- ৩. কন্টেন্ট লেআউট --- */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-32 md:pb-40">
        <div className="max-w-3xl">
          
          {/* লোকেশন ব্যাজ */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-2 mb-4"
          >
            <MapPin size={16} className="text-yellow-500" />
            <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Sundarban, West Bengal</span>
          </motion.div>

          {/* কালারফুল টাইটেল */}
          <motion.div
            key={`title-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6 italic">
              {HERO_SLIDES[index].prefix} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-200 to-yellow-500 drop-shadow-sm">
                {HERO_SLIDES[index].highlight}
              </span>
            </h1>
          </motion.div>

          {/* ডেসক্রিপশন */}
          <motion.p
            key={`desc-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-sm md:text-lg mb-10 font-medium max-w-lg leading-relaxed drop-shadow-lg"
          >
            {HERO_SLIDES[index].desc}
          </motion.p>

          {/* বাটন গ্রুপ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row items-center gap-3 md:gap-5"
          >
            <Link href="/packages" className="flex-1 sm:flex-none">
              <button className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-4 bg-yellow-400 text-black rounded-xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2 group active:scale-95">
                Packages <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/hotels" className="flex-1 sm:flex-none">
              <button className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-4 bg-white/5 backdrop-blur-xl border border-white/20 text-white rounded-xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 active:scale-95">
                Hotels <ArrowUpRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* --- ৪. স্লাইড ইন্ডিকেটর --- */}
      <div className="absolute bottom-10 right-6 z-20 flex flex-col items-end gap-3">
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === index ? "w-10 bg-yellow-400" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
        <span className="text-white/40 text-[10px] font-black tracking-widest">
          0{index + 1} / 03
        </span>
      </div>

      {/* Cinematic Fog Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none opacity-80"></div>

    </section>
  );
}