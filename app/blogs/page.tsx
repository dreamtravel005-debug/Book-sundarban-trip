"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, Search, Tag } from "lucide-react";

// --- Types ---
interface BlogPost {
  id: number;
  category: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  isoDate: string;
  readTime: string;
}

// --- Extended Data for Full Page ---
const ALL_POSTS: BlogPost[] = [
  {
    id: 1,
    category: "Expedition",
    title: "Best Luxury Resorts in Sundarban: A Guide",
    slug: "luxury-resorts-sundarban-guide",
    excerpt: "Discover the top-rated eco-luxury resorts in Sundarban where adventure meets comfort.",
    image: "/images/hotels/larica-resort/larica1.jpg",
    date: "Oct 12, 2024",
    isoDate: "2024-10-12",
    readTime: "8 min read",
  },
  {
    id: 2,
    category: "Heritage",
    title: "Sundarban Tour Guide: Complete Travel Plan",
    slug: "sundarban-tour-guide-complete-travel-plan",
    excerpt: "Plan your perfect Sundarban trip with itinerary, stays, and safari tips.",
    image: "/images/nature.jpg",
    date: "Oct 05, 2024",
    isoDate: "2024-10-05",
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Culinary",
    title: "Traditional Ilish Recipe Guide",
    slug: "traditional-shorshe-ilish-recipe-guide",
    excerpt: "Learn how to cook authentic Shorshe Ilish using traditional stone-ground spices.",
    image: "/images/doi-ilish.jpg",
    date: "Sep 28, 2024",
    isoDate: "2024-09-28",
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "Expedition",
    title: "Top Places to Visit in Sundarban",
    slug: "trekking-hidden-trails-north-bengal",
    excerpt: "Discover must-visit spots like watch towers, rivers, and dense mangrove forests.",
    image: "/images/Tiger and deer in mangrove swamp (1).webp",
    date: "Sep 15, 2024",
    isoDate: "2024-09-15",
    readTime: "10 min read",
  },
  {
    id: 5,
    category: "Culture",
    title: "Best Time to Visit Sundarban",
    slug: "baul-sangeet-mystical-soul-bengal",
    excerpt: "Know the ideal season for wildlife sightings and pleasant weather.",
    image: "/images/wildlife.jpg",
    date: "Sep 02, 2024",
    isoDate: "2024-09-02",
    readTime: "7 min read",
  },
  {
    id: 6,
    category: "Wildlife",
    title: "Sundarban Travel Tips for First-Time Visitors",
    slug: "bird-watching-purbasthali-lake",
    excerpt: "Essential tips to make your Sundarban trip safe, smooth, and memorable.",
    image: "/images/packages/sundarban-wildlife.webp",
    date: "Aug 20, 2024",
    isoDate: "2024-08-20",
    readTime: "4 min read",
  }
];

const CATEGORIES = ["All", "Expedition", "Heritage", "Culinary", "Culture", "Wildlife"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering Logic
  const filteredPosts = ALL_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#030303] text-white font-sans selection:bg-emerald-500/30">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-px bg-emerald-500" />
              <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.5em]">The Journal</span>
              <div className="w-10 h-px bg-emerald-500" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none"
            >
              STORIES & <span className="text-emerald-500">INSIGHTS</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed font-medium"
            >
              Explore the soul of Bengal through our curated travelogues, historical deep-dives, and culinary adventures.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- 2. FILTER & SEARCH BAR --- */}
      <section className="sticky top-0 z-40 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                  ? "bg-emerald-500 border-emerald-500 text-black" 
                  : "bg-transparent border-white/10 text-zinc-500 hover:border-emerald-500/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" size={16} />
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
        </div>
      </section>

      {/* --- 3. BLOG GRID --- */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, idx) => (
                  <motion.article 
                    layout
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col"
                  >
                    <Link href={`/blog/${post.slug}`} className="relative aspect-16/10 rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 transition-all duration-500 group-hover:border-emerald-500/30">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover opacity-70 grayscale-[0.3] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                      <div className="absolute top-5 left-5">
                        <span className="bg-black/80 backdrop-blur-md text-emerald-400 text-[8px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
                          {post.category}
                        </span>
                      </div>
                    </Link>
                    
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-emerald-500"/> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} className="text-emerald-500"/> {post.readTime}</span>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl md:text-2xl font-black italic uppercase leading-tight text-white group-hover:text-emerald-500 transition-all">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 opacity-80">
                        {post.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-zinc-500 italic">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- 4. NEWSLETTER / CTA --- */}
      <section className="py-20 px-6 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
            Don&apos;t Miss a <span className="text-emerald-500">Story</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">Subscribe to our newsletter for exclusive travel insights and early access to tour packages.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-emerald-500 transition-all"
              required
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-black uppercase text-[10px] tracking-widest px-8 py-3 rounded-full transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}