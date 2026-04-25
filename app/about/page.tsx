"use client";

import React, { useEffect, useState } from "react";

export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Years of Experience", value: "12+" },
    { label: "Happy Travelers", value: "25K" },
    { label: "Local Experts", value: "50+" },
    { label: "Tiger Sightings", value: "85%" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-emerald-100 overflow-x-hidden">
      
      {/* --- CUSTOM ANIMATIONS --- */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes subtle-zoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-zoom {
          animation: subtle-zoom 10s ease-out forwards;
        }
        .floating {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="/images/wildlife.jpg" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Sundarban Nature" 
          />
        </div>
        <div className={`relative z-20 text-center px-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-yellow-400 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
            Dedicated to Wildlife
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Our Journey & Passion
          </h1>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Preserving the <span className="text-emerald-600">Untamed Wilderness</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 2014, we began with a simple mission: to provide travelers with an authentic and safe window into the world’s largest mangrove forest. What started as a local initiative has grown into Kolkata’s most trusted wildlife expedition team.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe that travel should be a balance of luxury and raw nature. Our team consists of local islanders who share their heritage, ensuring that every tour supports the community and protects the environment.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl">🌿</div>
                <p className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Committed to 100% Sustainable Eco-Tourism</p>
            </div>
          </div>
          
          <div className="reveal order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-emerald-100 rounded-[3rem] -rotate-2"></div>
            <img 
              src="/images/sundarban-tiger.webp" 
              className="relative rounded-4xl shadow-2xl w-full h-112.5 object-cover floating" 
              alt="Our Tour Boat" 
            />
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="reveal group p-6">
                <h3 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </h3>
                <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE VALUES CARDS --- */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Travel With Us?</h2>
            <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs">The Pillars of Our Success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Expert Guides", d: "Our naturalists are local islanders who know the jungle by heart, ensuring the best tiger sightings.", i: "🔭" },
              { t: "Safety First", d: "From premium life jackets to GPS-equipped boats, your safety is our top priority at every step.", i: "🛡️" },
              { t: "Pure Luxury", d: "Enjoy authentic Bengali cuisine and premium resort stays without losing the raw feel of the wild.", i: "✨" }
            ].map((item, i) => (
              <div key={i} className="reveal bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group">
                <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform inline-block">{item.i}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-tight">{item.t}</h4>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 px-6">
        <div className="reveal max-w-5xl mx-auto bg-emerald-600 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Hear the <span className="text-yellow-400">Tiger's Roar?</span>
            </h2>
            <p className="text-emerald-50 text-lg mb-10 max-w-2xl mx-auto font-light">
              Don't just dream of the wilderness. Experience it with Kolkata's most reliable tour partner. Private and group tours are now open.
            </p>
            <a 
              href="/#booking" 
              className="inline-block px-10 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Start Your Adventure
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}