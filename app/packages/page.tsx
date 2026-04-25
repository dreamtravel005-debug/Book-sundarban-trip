"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Star, ChevronLeft, ChevronRight, 
  Clock, Camera, Utensils, Phone, Info, Calendar 
} from "lucide-react";

// --- Types ---
interface TourPackage {
  id: number;
  title: string;
  duration: string;
  location: string;
  description: string;
  images: string[];
  rating: number;
  offer: string;
  prices: { standard: number; deluxe: number };
  oldPrice: number;
  slug: string;
}

// --- ১. ট্যুর প্যাকেজ ডাটা (৪টি কার্ড - পরে আরও যোগ করতে পারবেন) ---
const TOURS_DATA: TourPackage[] = [
  {
    id: 1,
    title: "Sundarban Hilsha Festivel",
    duration: "2 night 3 days Trip",
    location: "Sajnekhali, Sudhanyakhali, Dobanki",
    description: "Sundarban Hilsha Festivel, Perfect for those who want a quick escape into nature.",
    images: [
      "/images/sundarban-hilsha.jpg",
      "/images/packages/sundarban-2night.webp",
    ],
    rating: 4.5,
    offer: "Budget Friendly",
    prices: { standard: 3500, deluxe: 5999 },
    oldPrice: 6500,
    slug: "sundarban-hilsha-festival",
  },
  {
    id: 2,
    title: "Sundarban Adventure 1N/2D",
    duration: "1 Night 2 Days",
    location: "Sajnekhali, Sudhanyakhali",
    description: "Experience the core of the wild forest and watchtowers.",
    images: [
      "/images/packages/sundarban-tour.webp",
      "/images/packages/sundarban-1night (2).webp",
    ],
    rating: 4.8,
    offer: "Best Seller",
    prices: { standard: 3500, deluxe: 4500 },
    oldPrice: 5000,
    slug: "sundarban-tour-1-night-2-days",
  },
  {
    id: 3,
    title: "Sundarban Family Special",
    duration: "2 Nights 3 Days",
    location: "Dobanki & Sudhaynkhali",
    description: "Deep jungle safari with canopy walk and tiger rescue center.",
    images: [
      "/images/packages/food-sundarban.webp",
      "/images/packages/sundarban-wildlife.webp",
    ],
    rating: 4.9,
    offer: "Hot Deal",
    prices: { standard: 5500, deluxe: 7500 },
    oldPrice: 8500,
    slug: "sundarban-tour-2-night-3-days",
  },
  {
    id: 4,
    title: "Sundarban Wildlife Tour",
    duration: "2 Nights 3 Days",
    location: "Pakhiralay & Local Village, Dobanki",
    description: "Comfortable family stay with local folk dance and boating.",
    images: [
      "/images/sundarbanhome.webp",
      "/images/wildlife.jpg",
    ],
    rating: 4.7,
    offer: "Recommended",
    prices: { standard: 7499, deluxe: 8000 },
    oldPrice: 8500,
    slug: "sundarban-wildlife-tour",
  },
];

const TOUR_INCLUSIONS = [
  { icon: <Utensils size={13} />, label: "Food" },
  { icon: <Camera size={13} />, label: "Sight" },
  { icon: <Calendar size={13} />, label: "Entry" },
  { icon: <Clock size={13} />, label: "Guide" },
];

// --- ২. ট্যুর কার্ড কম্পোনেন্ট ---
const TourCard = ({ tour, isPriority }: { tour: TourPackage, isPriority: boolean }) => {
  const [packageType, setPackageType] = useState<"standard" | "deluxe">("standard");
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === tour.images.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [tour.images.length]);

  const price = tour.prices[packageType];

  return (
    <motion.article 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[1.8rem] p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      {/* Image Section */}
      <div className="relative h-44 w-full overflow-hidden rounded-[1.4rem] bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 h-full w-full"
          >
            <Image 
              src={tour.images[currentImg]} 
              alt={tour.title} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={isPriority && currentImg === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-2.5 left-2.5 z-20">
          <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[9px] font-black px-2 py-1 rounded-lg uppercase">
            {tour.offer}
          </span>
        </div>
        <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-lg flex items-center gap-1 z-20">
          <Star size={10} className="fill-orange-500 text-orange-500" />
          <span className="text-[10px] font-bold text-gray-800">{tour.rating}</span>
        </div>

        <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-all z-20">
          <button onClick={() => setCurrentImg(currentImg === 0 ? tour.images.length - 1 : currentImg - 1)} className="bg-white/40 backdrop-blur-md p-1 rounded-full text-gray-900 hover:bg-white"><ChevronLeft size={16} /></button>
          <button onClick={() => setCurrentImg(currentImg === tour.images.length - 1 ? 0 : currentImg + 1)} className="bg-white/40 backdrop-blur-md p-1 rounded-full text-gray-900 hover:bg-white"><ChevronRight size={16} /></button>
        </div>

        <div className="absolute bottom-2 left-2 z-20 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1">
          <Clock size={10} className="text-white" />
          <span className="text-[9px] font-bold text-white uppercase">{tour.duration}</span>
        </div>
      </div>

      <div className="px-1.5 pt-3.5 flex flex-col grow">
        <h3 className="text-base font-black text-gray-900 leading-tight truncate uppercase">{tour.title}</h3>
        <div className="flex items-center gap-1 text-gray-400 mt-0.5">
          <MapPin size={11} className="text-emerald-500" />
          <span className="text-[9px] font-bold uppercase tracking-widest truncate">{tour.location}</span>
        </div>

        <p className="text-gray-400 text-[10px] italic leading-snug line-clamp-1 my-2">"{tour.description}"</p>

        <div className="grid grid-cols-4 gap-1.5 bg-gray-50 p-2 rounded-xl mb-3 border border-gray-100/50">
          {TOUR_INCLUSIONS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-0.5">
              <span className="text-emerald-700">{item.icon}</span>
              <span className="text-[7px] font-black text-gray-400 uppercase tracking-tighter">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex bg-gray-100 p-0.5 rounded-lg mb-3">
          <button onClick={() => setPackageType("standard")} className={`flex-1 py-1 text-[9px] font-black rounded-md transition-all ${packageType === "standard" ? "bg-white text-emerald-800 shadow-sm" : "text-gray-400"}`}>STANDARD</button>
          <button onClick={() => setPackageType("deluxe")} className={`flex-1 py-1 text-[9px] font-black rounded-md transition-all ${packageType === "deluxe" ? "bg-white text-emerald-800 shadow-sm" : "text-gray-400"}`}>DELUXE</button>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-xl font-black text-gray-900 leading-none">₹{price}</span>
            <span className="text-gray-400 line-through text-[10px] font-bold">₹{tour.oldPrice}</span>
            <span className="text-[8px] font-bold text-gray-400 uppercase">/ person</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link href={`/packages/${tour.slug}`} className="w-full">
              <button className="w-full h-9 border-[1.5px] border-gray-900 text-gray-900 rounded-xl text-[10px] font-black flex items-center justify-center gap-1 uppercase hover:bg-gray-900 hover:text-white transition-all">
                <Info size={14} /> Details
              </button>
            </Link>
            <a href="tel:6290867430" className="w-full">
              <button className="w-full h-9 bg-emerald-700 text-white rounded-xl text-[10px] font-black flex items-center justify-center gap-1 uppercase shadow-md hover:bg-emerald-800 transition-all">
                <Phone size={14} /> Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// --- ৩. মেইন লিস্টিং সেকশন ---
export default function TourListing() {
  return (
    <section className="pt-28 pb-16 px-4 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-3">
            Best Tour <span className="text-emerald-700">Packages.</span>
          </h2>
          <p className="text-gray-400 font-medium text-[13px]">Memorable Sundarban journeys tailored just for you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOURS_DATA.map((tour, index) => (
            <TourCard 
              key={tour.id} 
              tour={tour} 
              isPriority={index < 4} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}