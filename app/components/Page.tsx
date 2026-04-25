"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

// --- Typescript Interface ---
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

// --- SEO Optimized Blog Data ---
const BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    category: "Expedition",
    title: "Best Luxury Resorts in Sundarban: A Guide",
    slug: "luxury-resorts-sundarban-guide",
    excerpt: "Discover the top-rated eco-luxury resorts in Sundarban where adventure meets comfort in the heart of the mangrove forest.",
    image: "/images/hotels/larica-resort/larica1.jpg", // Replace with your actual path
    date: "Oct 12, 2024",
    isoDate: "2024-10-12",
    readTime: "8 min read",
  },
  {
    id: 2,
    category: "Heritage",
    title: "Sundarban Tour Guide: Complete Travel Plan",
    slug: "sunadarban-tour-guide-complete-travel-plan",
    excerpt: "Take a photographic journey through the 17th-century terracotta wonders of Bishnupur and their significance.",
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
    excerpt: "Learn how to cook authentic Shorshe Ilish using traditional stone-ground spices and mustard oil.",
    image: "/images/doi-ilish.jpg",
    date: "Sep 28, 2024",
    isoDate: "2024-09-28",
    readTime: "5 min read",
  }
];

export default function SEOBlogSection() {
  
  // JSON-LD Schema for SEO (Google Search Result Boost)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Latest Travel Insights & Journal",
    "blogPost": BLOG_DATA.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.image,
      "datePublished": post.isoDate,
      "abstract": post.excerpt,
      "url": `https://yourwebsite.com/blog/${post.slug}`
    }))
  };

  const getSafeImagePath = (path: string) => {
    if (path.startsWith('http')) return path;
    return path.startsWith('/') ? path : `/${path}`;
  };

  return (
    <section className="bg-[#030303] py-16 md:py-28 px-4 sm:px-8 md:px-12" aria-labelledby="blog-heading">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-325 mx-auto">
        
        {/* --- Section Header (Mobile Centered) --- */}
        <header className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-end md:text-left mb-12 md:mb-20 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              <div className="w-8 h-0.5 bg-emerald-500" />
              <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]">Our Journal</span>
            </motion.div>
            
            <h2 id="blog-heading" className="text-4xl sm:text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] text-white">
              LATEST <br className="hidden md:block" /> 
              <span className="text-emerald-500">INSIGHTS</span>
            </h2>
          </div>
          
          <Link href="/blogs" className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/10 pb-2">
            READ ALL ARTICLES 
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500 text-emerald-500" />
          </Link>
        </header>

        {/* --- Blog Cards Grid (Perfected Size) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {BLOG_DATA.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex flex-col"
            >
              {/* Image Container: High SEO Aspect Ratio */}
              <Link 
                href={`/blog/${post.slug}`} 
                className="relative aspect-16/11 md:aspect-16/10 rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 transition-all duration-500 group-hover:border-emerald-500/30"
              >
                <Image 
                  src={getSafeImagePath(post.image)} 
                  alt={post.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-70 grayscale-[0.3] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-black/80 backdrop-blur-md text-emerald-400 text-[9px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              {/* Content Content Area */}
              <div className="mt-6 px-1 space-y-3">
                <div className="flex items-center gap-5 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                  <time dateTime={post.isoDate} className="flex items-center gap-2">
                    <Calendar size={14} className="text-emerald-500" /> {post.date}
                  </time>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-emerald-500" /> {post.readTime}
                  </span>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl md:text-2xl font-black italic uppercase leading-tight tracking-tight text-white group-hover:text-emerald-500 transition-all duration-300">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 font-medium opacity-80">
                  {post.excerpt}
                </p>
                
                <div className="pt-2">
                  <div className="h-px w-8 bg-emerald-500/50 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}