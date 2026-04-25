"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Star, ChevronLeft, ChevronRight, 
  Wifi, Wind, Coffee, Utensils, Phone, Info 
} from "lucide-react";

// --- Types ---
interface Hotel {
  id: number;
  title: string;
  location: string;
  description: string;
  images: string[];
  rating: number;
  offer: string;
  prices: { ac: number; nonAc: number };
  oldPrice: number;
  slug: string;
}

// --- ১. হোটেল ডাটা ---
const HOTELS_DATA: Hotel[] = [
  {
    id: 1,
    title: "Sundarban Larica Resort",
    location: "Pakhiralay, Gosaba Island",
    description: "Premium suites with forest views and dining.",
    images: [
      "/images/hotels/larica-resort/larica1.jpg",
      "/images/hotels/larica-resort/larica6.jpg",
      "/images/hotels/larica-resort/larica3.jpg",
    ],
    rating: 4.7,
    offer: "20% OFF",
    prices: { ac: 4599, nonAc: 4000 },
    oldPrice: 5500,
    slug: "Sundarban-larica",
  },
  {
    id: 2,
    title: "Luxury Sonarbangla Resort",
    location: "Sajnekhali Buffer Zone",
    description: "Eco-friendly stay near the Tiger Reserve.",
    images: [
      "/images/hotels/Sundarban-sonarbangla/sonarbangla.jpg",
      "/images/hotels/Sundarban-sonarbangla/sonarbangla (2).webp",
      "/images/hotels/Sundarban-sonarbangla/sonarbangla2.jpg",
    ],
    rating: 4.8,
    offer: "Best Seller",
    prices: { ac: 7599, nonAc: 7000 },
    oldPrice: 8800,
    slug: "Sundarban-sonarbangla",
  },
  {
    id: 3,
    title: "Sundarban Beckons Resort",
    location: "Jharkhali Bend",
    description: "Cottages with stunning sunset river views.",
    images: [
      "/images/hotels/Sundarban-beckons-resort/beckons2.jpg",
      "/images/hotels/Sundarban-beckons-resort/beckons5.jpg",
      "/images/hotels/Sundarban-beckons-resort/beckons4.jpg",
    ],
    rating: 3.9,
    offer: "Hot Deal",
    prices: { ac: 2500, nonAc: 2000 },
    oldPrice: 3000,
    slug: "Sundarban-beckons",
  },
  {
    id: 4,
    title: "Hotel Tufan Sundarban",
    location: "Pakhiryala Village",
    description: "Best value stay with river views and local cuisine.",
    images: [
      "/images/hotels/hotel-tufan/hotel-tufan.jpg",
      "/images/hotels/hotel-tufan/hotel-tufan1.jpg",
      "/images/hotels/hotel-tufan/hotel-tufan3.jpg",
    ],
    rating: 3.5,
    offer: "Recommended",
    prices: { ac: 2200, nonAc: 2000 },
    oldPrice: 3200,
    slug: "sundarban-hotel-tufan",
  },
  {
    id: 5,
    title: "Royal Bengal Resort",
    location: "Doyapure Village",
    description: "Best old resort close to nature with river views.",
    images: [
      "/images/hotels/river-sight/Royal-Bengal-Resort.jpg",
      "/images/hotels/river-sight/Royal-Bengal-Resort4.jpg",
      "/images/hotels/river-sight/Royal-Bengal-Resort1.jpg",
    ],
    rating: 4.3,
    offer: "Top Rated",
    prices: { ac: 3200, nonAc: 2200 },
    oldPrice: 4200,
    slug: "Royal-Bengal-Resort",
  },
  {
    id: 6,
    title: "Sundarban Rk Resort",
    location: "Pakhiryala Village",
    description: "Luxury resort with stunning river views.",
    images: [
      "/images/hotels/Rk-resort/Rk-resort.jpg",
      "/images/hotels/Rk-resort/Rk-resort1.jpg",
      "/images/hotels/Rk-resort/Rk-resort2.jpg",
    ],
    rating: 4.5,
    offer: "Great Value",
    prices: { ac: 3500, nonAc: 3000 },
    oldPrice: 4200,
    slug: "Sundarban-Rk-Resort",
  },
  {
    id: 7,
    title: "Sundarban United-21 Resort",
    location: "Pakhiryala Village",
    description: "Unique resort with stunning river sight.",
    images: [
      "/images/hotels/Sundarban-United-21-Resort/United-21 Resort.jpg",
      "/images/hotels/Sundarban-United-21-Resort/United-21 Resort4.jpg",
      "/images/hotels/Sundarban-United-21-Resort/United-21 Resort2.jpg",
    ],
    rating: 3.5,
    offer: "Verified",
    prices: { ac: 3500, nonAc: 3000 },
    oldPrice: 4200,
    slug: "Sundarban-United-21-Resort",
  },
  {
    id: 8,
    title: "Sundarban Apanjan Hotel",
    location: "Pakhiryala Village",
    description: "Apanjan hotel with stunning river sight.",
    images: [
      "/images/hotels/Apanjan-hotel/apanjanhotel.jpg",
      "/images/hotels/Apanjan-hotel/apanjanhotel1.jpg",
      "/images/hotels/Apanjan-hotel/apanjanhotel3.jpg",
    ],
    rating: 2.6,
    offer: "Verified",
    prices: { ac: 2100, nonAc: 1700 },
    oldPrice: 2500,
    slug: "/Sundarban-Apanjan-Hotel",
  },
];

const AMENITIES = [
  { icon: <Wifi size={13} />, label: "WiFi" },
  { icon: <Wind size={13} />, label: "AC" },
  { icon: <Coffee size={13} />, label: "Tea" },
  { icon: <Utensils size={13} />, label: "Food" },
];

// --- ২. হোটেল কার্ড কম্পোনেন্ট ---
// priority prop যোগ করা হয়েছে
const HotelCard = ({ hotel, isPriority }: { hotel: Hotel, isPriority: boolean }) => {
  const [roomType, setRoomType] = useState<"ac" | "nonAc">("ac");
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === hotel.images.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [hotel.images.length]);

  const price = hotel.prices[roomType];

  return (
    <motion.article 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[1.8rem] p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
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
              src={hotel.images[currentImg]} 
              alt={hotel.title} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={isPriority && currentImg === 0} // শুধু প্রথম ইমেজে প্রায়োরিটি থাকবে
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-2.5 left-2.5 z-20">
          <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[9px] font-black px-2 py-1 rounded-lg uppercase">
            {hotel.offer}
          </span>
        </div>
        <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-lg flex items-center gap-1 z-20">
          <Star size={10} className="fill-orange-500 text-orange-500" />
          <span className="text-[10px] font-bold text-gray-800">{hotel.rating}</span>
        </div>

        <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-all z-20">
          <button onClick={() => setCurrentImg(currentImg === 0 ? hotel.images.length - 1 : currentImg - 1)} className="bg-white/40 backdrop-blur-md p-1 rounded-full text-gray-900 hover:bg-white"><ChevronLeft size={16} /></button>
          <button onClick={() => setCurrentImg(currentImg === hotel.images.length - 1 ? 0 : currentImg + 1)} className="bg-white/40 backdrop-blur-md p-1 rounded-full text-gray-900 hover:bg-white"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="px-1.5 pt-3.5 flex flex-col grow">
        <h3 className="text-base font-black text-gray-900 leading-tight truncate uppercase">{hotel.title}</h3>
        <div className="flex items-center gap-1 text-gray-400 mt-0.5">
          <MapPin size={11} className="text-emerald-500" />
          <span className="text-[9px] font-bold uppercase tracking-widest truncate">{hotel.location}</span>
        </div>

        <p className="text-gray-400 text-[10px] italic leading-snug line-clamp-1 my-2">"{hotel.description}"</p>

        <div className="grid grid-cols-4 gap-1.5 bg-gray-50 p-2 rounded-xl mb-3 border border-gray-100/50">
          {AMENITIES.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-0.5">
              <span className="text-emerald-700">{item.icon}</span>
              <span className="text-[7px] font-black text-gray-400 uppercase tracking-tighter">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex bg-gray-100 p-0.5 rounded-lg mb-3">
          <button onClick={() => setRoomType("ac")} className={`flex-1 py-1 text-[9px] font-black rounded-md transition-all ${roomType === "ac" ? "bg-white text-emerald-800 shadow-sm" : "text-gray-400"}`}>AC ROOM</button>
          <button onClick={() => setRoomType("nonAc")} className={`flex-1 py-1 text-[9px] font-black rounded-md transition-all ${roomType === "nonAc" ? "bg-white text-emerald-800 shadow-sm" : "text-gray-400"}`}>NON AC</button>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-xl font-black text-gray-900 leading-none">₹{price}</span>
            <span className="text-gray-400 line-through text-[10px] font-bold">₹{hotel.oldPrice}</span>
            <span className="text-[8px] font-bold text-gray-400 uppercase">/ night</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link href={`/hotels/${hotel.slug}`} className="w-full">
              <button className="w-full h-9 border-[1.5px] border-gray-900 text-gray-900 rounded-xl text-[10px] font-black flex items-center justify-center gap-1 uppercase hover:bg-gray-900 hover:text-white transition-all">
                <Info size={14} /> Details
              </button>
            </Link>
            <a href="tel:6290867430" className="w-full">
              <button className="w-full h-9 bg-emerald-700 text-white rounded-xl text-[10px] font-black flex items-center justify-center gap-1 uppercase shadow-md hover:bg-emerald-800 transition-all">
                <Phone size={14} /> Book
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// --- ৩. মেইন লিস্টিং সেকশন ---
export default function HotelListing() {
  return (
    <section className="pt-28 pb-16 px-4 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-3">
            Book Your Top <span className="text-emerald-700">Hotels.</span>
          </h2>
          <p className="text-gray-400 font-medium text-[13px]">Experience the raw majesty of the world’s largest mangrove forest from the lap of luxury. Stay in premium eco-resorts nestled deep within the tiger’s territory, where the wild delta meets world-class hospitality.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTELS_DATA.map((hotel, index) => (
            <HotelCard 
              key={hotel.id} 
              hotel={hotel} 
              isPriority={index < 4} // প্রথম ৪টি হোটেলকে প্রায়োরিটি দেওয়া হয়েছে (ডেস্কটপ কলাম অনুযায়ী)
            />
          ))}
        </div>
      </div>
    </section>
  );
}