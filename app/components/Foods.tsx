"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Utensils, ArrowRight } from "lucide-react";

// --- ১. ডাটা সরাসরি এখানে দেওয়া হয়েছে (JSON এরর এড়ানোর জন্য) ---
const MENU_DATA = [
  {
    "id": 1,
    "category": "Prawn Curry",
    "shortDesc": "Traditional flavors from the heart of Bengal.",
    "longDesc": "A masterclass in tradition. We bring you age-old recipes from the royal delta, sculpted with heritage precision.",
    "image": "/images/chingri-malacurry.webp", 
    "tag": "Exclusive",
    "dishes": [
      { "name": "Dav Chingri", "details": "Daab Chingri is perhaps the most exotic and visually stunning prawn dish in Bengali cuisine The prawns are cooked inside a tender green coconut which infuses the gravy with a subtle sweetness and a unique aroma.", "dishImage": "/images/dav-chingri.webp" },
      { "name": "Chingri Malaikari", "details": "Taste: A perfect harmony of the natural sweetness of prawns and coconut milk, balanced with the warmth of whole spices and the pungency of mustard oil.", "dishImage": "/images/chingri-malacurry.webp" }
    ]
  },
  {
    "id": 2,
    "category": "Mutton Curry",
    "shortDesc": "Primitive fire techniques meeting modern artistry.",
    "longDesc": "Experience the charm of open-fire grilling. Each dish is slow-cooked over wood fire and local charcoal.",
    "image": "/images/mutton-curry.jpg",
    "tag": "Live Fire",
    "dishes": [
      { "name": "Mutton Rezala", "details": "A masterpiece from the Mughlai-Bengali kitchens of Kolkata. Unlike the spicy Kosha Mangsho, this is a white, yogurt-based curry.", "dishImage": "/images/Mutton Rezala.webp" }
    ]
  },
  {
    "id": 3,
    "category": "Doi Ilish",
    "shortDesc": "Continental classics with a local twist.",
    "longDesc": "A sophisticated intersection of continental recipes and local organic produce.",
    "image": "/images/doi-ilish.jpg",
    "tag": "Gourmet",
    "dishes": [
      { "name": "Doi Ilish", "details": "A more sophisticated and milder version compared to the pungent Shorshe Ilish. It is often served at weddings and special occasions.", "dishImage": "/images/doi-ilish.jpg" },
      { "name": "Ilish Bhapa", "details": "Many connoisseurs believe this is the best way to enjoy Hilsa because steaming preserves the natural flavors and tenderness of the fish better than any other method.", "dishImage": "/images/ilish-vapa.jpg" },
    ]
  },
  {
    "id": 4,
    "category": "Chicken Curry",
    "shortDesc": "A complete experience of royal dining.",
    "longDesc": "A curated collection of our finest dishes served in a single, magnificent spread.",
    "image": "/images/chiken-curry.jpg",
    "tag": "Signature",
    "dishes": [
      { "name": "Chiken Curry", "details": "This is the heart and soul of every Bengali home. It is a light, flavorful, and comforting curry characterized by the presence of large, golden-fried potatoes.", "dishImage": "/images/chiken-curry.jpg" }
    ]
  }
];

export default function LuxuryMenuFinal() {
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);

  // Modal ওপেন থাকলে ব্যাকগ্রাউন্ড স্ক্রল লক
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCategory]);

  return (
    <div className="bg-[#030303] text-zinc-100 min-h-screen py-16 px-6 relative font-sans">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#10b98110_0%,transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-20 space-y-4">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
            <div className="w-12 h-px bg-emerald-500" />
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]">The Elite Kitchen</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter"
          >
            SAVOUR THE <br /> <span className="text-emerald-500">DELTA SPIRIT</span>
          </motion.h1>
        </header>

        {/* --- MENU GRID (4 Cards) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedCategory(item)}
              className="group relative h-120 overflow-hidden bg-zinc-900 rounded-[3rem] border border-white/5 cursor-pointer shadow-2xl transition-all hover:border-emerald-500/40"
            >
              <Image 
                src={item.image} 
                alt={item.category} 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover opacity-60 group-hover:scale-110 transition-all duration-1000 grayscale-[0.2] group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-2">{item.tag}</span>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-5 leading-none">{item.category}</h3>
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-all">
                  VIEW MENU <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-emerald-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL SECTION --- */}
        <AnimatePresence>
          {selectedCategory && (
            <div className="fixed inset-0 z-999999 flex items-center justify-center">
              
              {/* Dark Overlay */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedCategory(null)}
                className="absolute inset-0 bg-black/98 backdrop-blur-2xl"
              />
              
              {/* Modal Box */}
              <motion.div 
                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="relative w-full h-full md:h-[92vh] md:max-w-7xl bg-[#080808] shadow-2xl flex flex-col md:flex-row md:rounded-[4rem] overflow-hidden border-t border-white/10"
              >
                
                {/* --- PROFESSIONAL CLOSE BUTTON --- 
                    মোবাইলে হেডার থেকে বাঁচতে এটিকে top-32 (প্রায় ১২০ পিক্সেল নিচে) নামানো হয়েছে 
                */}
                <div className="fixed top-32 right-6 md:absolute md:top-10 md:right-10 z-1000000">
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="w-14 h-14 bg-emerald-500 text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-90 transition-all border-4 border-black hover:rotate-90 duration-500"
                  >
                    <X size={30} strokeWidth={3} />
                  </button>
                </div>

                {/* Modal Left Image */}
                <div className="relative w-full md:w-[45%] h-[40vh] md:h-auto shrink-0">
                  <Image 
                    src={selectedCategory.image} 
                    alt={selectedCategory.category} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-80" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-[#080808] via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-10 md:left-16">
                    <span className="text-emerald-500 text-[11px] font-black tracking-[0.5em] uppercase mb-3 block">{selectedCategory.tag}</span>
                    <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.8] mb-4">
                      {selectedCategory.category}
                    </h2>
                  </div>
                </div>

                {/* Modal Right Content (Dish List) */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-20 bg-[#080808]">
                  <p className="text-zinc-400 text-lg md:text-xl font-light italic leading-relaxed mb-20 border-l-4 border-emerald-500 pl-8 max-w-3xl">
                    {selectedCategory.longDesc}
                  </p>

                  <div className="space-y-32">
                    {selectedCategory.dishes.map((dish: any, i: number) => (
                      <div key={i} className="group flex flex-col gap-10">
                        {/* Dish Image (No Price) */}
                        <div className="relative w-full h-75 md:h-112.5 rounded-[3.5rem] overflow-hidden border border-white/5 shadow-3xl">
                          <Image 
                            src={dish.dishImage} 
                            alt={dish.name} 
                            fill 
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover group-hover:scale-105 transition-transform duration-[2s]" 
                          />
                        </div>

                        {/* Dish Text */}
                        <div className="px-4">
                          <h4 className="text-4xl md:text-5xl font-black italic uppercase text-white tracking-tighter mb-6 group-hover:text-emerald-500 transition-colors">
                            {dish.name}
                          </h4>
                          <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-2xl">
                            {dish.details}
                          </p>
                          <div className="flex flex-wrap gap-4">
                            <span className="flex items-center gap-3 text-[11px] font-black text-zinc-300 uppercase tracking-widest bg-zinc-900 px-6 py-3 rounded-2xl border border-white/5">
                              <Clock size={16} className="text-emerald-500" /> AVG 1.5 HRS
                            </span>
                            <span className="flex items-center gap-3 text-[11px] font-black text-zinc-300 uppercase tracking-widest bg-zinc-900 px-6 py-3 rounded-2xl border border-white/5">
                              <Utensils size={16} className="text-emerald-500" /> SIGNATURE
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-32 pt-16 border-t border-white/5 text-center">
                     <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]">End of Selection</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #10b981; border-radius: 20px; }
      `}</style>
    </div>
  );
}