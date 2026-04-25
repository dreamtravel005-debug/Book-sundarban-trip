"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera } from "lucide-react";

// ১. গ্যালারি ডাটা সেট
const GALLERY_IMAGES = [
  { id: 1, src: "/images/sundarban-home.webp", title: "Royal Bengal Tiger", category: "Wildlife" },
  { id: 2, src: "/images/packages/sundarban-2night.webp", title: "Mangrove Forest", category: "Nature" },
  { id: 3, src: "/images/chiken-curry.jpg", title: "Local Cuisine", category: "Food" },
  { id: 4, src: "/images/mutton-curry.jpg", title: "Local Cuisine", category: "Food" },
  { id: 5, src: "/images/dav-chingri.webp", title: "Local Cuisine", category: "Food" },
  { id: 6, src: "/images/doi-ilish.jpg", title: "Local Cuisine", category: "Food" },
  { id: 7, src: "/images/packages/sundarban-tour.webp", title: "Local Cuisine", category: "Food" },
  { id: 8, src: "/images/packages/food-sundarban.webp", title: "Local Cuisine", category: "Food" },
  { id: 9, src: "/images/packages/happy-sundarban.webp", title: "best Time", category: "Nature" },
  // আপনার কাছে আরও ছবি থাকলে এখানে যোগ করুন...
  { id: 10, src: "/images/home/sundarban-boat-safari.webp", title: "River View", category: "Nature" },
  { id: 11, src: "/images/packages/sundarban-wildlife.webp", title: "Golden Hour Tiger View", category: "Wildlife" },
  { id: 12, src: "/images/sundarban.jpg", title: "Sundarban Nature View", category: "Wildlife" },
  { id: 13, src: "/images/packages/sundarban-2-night-3--days.webp", title: "Boat Safari", category: "Boats" },
];

const categories = ["All", "Wildlife", "Nature", "Boats", "Food"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | typeof GALLERY_IMAGES[0]>(null);
  const [filter, setFilter] = useState("All");

  // ফিল্টারিং লজিক
  const filteredImages = filter === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6">
      
      {/* --- ২. হেডার সেকশন --- */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Camera size={20} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs">Visual Journey</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter"
        >
          Sundarban <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">Gallery</span>
        </motion.h1>
      </div>

      {/* --- ৩. ফিল্টার ট্যাব --- */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
              filter === cat 
              ? "bg-yellow-400 border-yellow-400 text-black" 
              : "bg-white/5 border-white/10 text-white hover:border-yellow-400/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- ৪. ইমেজ গ্রিড (Masonry Style) --- */}
      <motion.div 
        layout
        className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/5 break-inside-avoid"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={600}
                height={800}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* ওভারলে */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-yellow-400 text-[10px] uppercase tracking-widest mb-1">{image.category}</p>
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full">
                  <Maximize2 size={16} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- ৫. লাইটবক্স মডেল (Full Screen View) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-110"
            >
              <X size={40} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh]"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 w-full text-center py-6 bg-linear-to-t from-black to-transparent">
                <h2 className="text-white text-2xl font-bold uppercase tracking-widest">{selectedImage.title}</h2>
                <p className="text-yellow-400 text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}