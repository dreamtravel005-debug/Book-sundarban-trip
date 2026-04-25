"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Souvik",
    place: "Kolkata",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I had heard about them a lot and once I decided to go out on an adventurous tour to Sundarban with them. They gave me the experience of the best adventure trip of life.",
  },
  {
    name: "Mampi Mondal",
    place: "Durgapur",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I was thinking of going to Sundarban for long now. However, it was not being planned. Then I came across Sundarban Bengal Tourism and they made my imagination come true.",
  },
  {
    name: "Surajaya Paul",
    place: "Nadia",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "An absolutely incredible experience! We spotted a Royal Bengal Tiger on our first safari. The guides were knowledgeable and the stay was luxurious.",
  },
  {
    name: "Sima Mondal",
    place: "Durgapur",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Everything was perfectly organized. The boat stay was the highlight of our trip. Highly recommend them for Sundarban tours.",
  },
  {
    name: "Raju Mondal",
    place: "Durgapur",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
    text: "The food was delicious and the staff was very humble. We felt safe and enjoyed every moment in the wild.",
  },
];

// Infinite Loop এর জন্য ডেটাকে ডাবল করা হয়েছে
const infiniteTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // আপনার গুগল রিভিউ লিঙ্ক এখানে দিন
  const googleReviewLink = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let intervalId: NodeJS.Timeout;

    const startSliding = () => {
      intervalId = setInterval(() => {
        if (!isPaused && slider) {
          const cardWidth = slider.querySelector("div")?.offsetWidth || 300;
          const gap = 24; // gap-6 (24px)
          const scrollAmount = cardWidth + gap;

          // যদি স্ক্রল একদম শেষে পৌঁছে যায় (অর্ধেক লিস্ট পার হওয়ার পর)
          // তাহলে কোনো অ্যানিমেশন ছাড়াই শুরুতে জাম্প করবে (যাতে লুপ বোঝা না যায়)
          if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollTo({ left: 0, behavior: "instant" as any });
          }

          slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }, 3000);
    };

    startSliding();

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section
      className="relative py-16 md:py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/images/sundarban.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-yellow-400 uppercase border border-yellow-400/50 rounded-full bg-yellow-400/10">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            What Our <span className="text-yellow-400">Travelers</span> Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Read the stories of adventure from our happy guests.
          </p>
        </div>

        {/* SLIDER CONTAINER */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-10 px-4"
          style={{ 
            scrollSnapType: isPaused ? "x mandatory" : "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {infiniteTestimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-72.5 md:min-w-100 bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:bg-white/20"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl text-yellow-400 font-serif leading-none">“</span>
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(5)}
                  </div>
                </div>

                <p className="text-gray-100 text-[15px] md:text-base leading-relaxed mb-8 italic">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 shadow-lg"
                />
                <div>
                  <h4 className="text-white font-bold text-base">{item.name}</h4>
                  <p className="text-yellow-400 text-xs font-medium uppercase tracking-wider">
                    {item.place}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GOOGLE REVIEW BUTTON */}
        <div className="mt-10 text-center">
          <a 
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" 
              alt="Google" 
              className="w-5 h-5"
            />
            Review Us On Google
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-gray-400 text-xs mt-4">
            Join our 1000+ happy community!
          </p>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}