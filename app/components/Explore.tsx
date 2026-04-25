"use client";

import React from "react";
import { 
  MapPin, 
  Clock, 
  Users, 
  Compass, 
  ArrowRight, 
  Map as MapIcon, 
  ChevronRight, 
  ShieldCheck,
  Globe,
  Navigation as NavIcon // এখানে রিনেম করা হয়েছে সমস্যা এড়াতে
} from "lucide-react";

export default function Explore() {
  return (
    <section id="explore" className="py-24 px-6 bg-linear-to-b from-[#f0f5f3] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6 border border-orange-200">
            <Compass className="w-4 h-4 text-orange-600 animate-spin-slow" />
            <span className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase">
              The Gateway to Wilderness
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-green-950 mb-6 tracking-tighter leading-[0.95] uppercase italic">
            Kolkata <span className="text-orange-500">to</span> <br /> 
            Sundarban Jungle
          </h2>
          
          <div className="w-24 h-1.5 bg-green-800 rounded-full mb-8"></div>
          
          <p className="text-gray-500 max-w-2xl text-base md:text-lg font-medium leading-relaxed">
            Leave the city noise behind. Embark on a soulful journey from the streets of Kolkata to the silent, 
            mysterious mangroves of the world's largest tiger reserve.
          </p>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          <div className="lg:col-span-7 space-y-10">
            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: <MapPin className="w-6 h-6" />, 
                  title: "100 KM Drive", 
                  desc: "A smooth 3-hour journey from the heart of Kolkata.",
                  color: "bg-emerald-50 text-emerald-700",
                  hover: "group-hover:bg-emerald-700"
                },
                { 
                  icon: <Clock className="w-6 h-6" />, 
                  title: "Weekend Ready", 
                  desc: "Perfectly timed 2N/3D itineraries for every traveler.",
                  color: "bg-orange-50 text-orange-700",
                  hover: "group-hover:bg-orange-700"
                },
                { 
                  icon: <Users className="w-6 h-6" />, 
                  title: "Private & Group", 
                  desc: "Solo explorer or family group? We cater to everyone.",
                  color: "bg-blue-50 text-blue-700",
                  hover: "group-hover:bg-blue-700"
                },
                { 
                  icon: <ShieldCheck className="w-6 h-6" />, 
                  title: "Forest Permits", 
                  desc: "Hassle-free entry permits and licensed local guides.",
                  color: "bg-purple-50 text-purple-700",
                  hover: "group-hover:bg-purple-700"
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${item.hover} group-hover:text-white group-hover:rotate-12`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-black text-green-950 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-bold leading-relaxed tracking-tight">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* EXPERIENCE BOX */}
            <div className="relative bg-green-950 rounded-[3rem] p-10 md:p-16 overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-800/20 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-orange-500/10 transition-colors duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">
                  The <span className="text-orange-500 underline decoration-2 underline-offset-8">Royal</span> Experience
                </h3>
                <div className="space-y-6 mb-12 text-green-100/80 font-medium text-lg leading-relaxed">
                  <p>Our tour starts with a premium AC/NON AC pickup from Kolkata toward Godkhali—the entry point of the mystery.</p>
                  <p>Group & Private tours available with luxury boats, full safety, authentic Bengali cuisine, and expert tiger trackers for a complete Sundarban experience.</p>
                </div>
                <a 
                  href="packages" 
                  className="inline-flex items-center gap-4 bg-orange-500 hover:bg-white hover:text-green-950 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95 group/btn"
                >
                  EXPLORE TOUR PACKAGES
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: MAP & SPOTS */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
                <div className="relative h-100">
                  <iframe
                    src="https://maps.google.com/maps?q=sundarban&t=k&z=10&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                    title="Sundarban Navigation"
                  ></iframe>
                </div>

                <div className="p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
                      <h4 className="text-2xl font-black text-green-950 uppercase tracking-tighter italic">Major Safaris</h4>
                    </div>
                    <div className="bg-green-950 text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.15em] shadow-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                      Satellite View: STR
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { name: "Sajnekhali Tiger Reserve", icon: <ShieldCheck size={14}/> },
                      { name: "Pirkhali Sighting", icon: <ShieldCheck size={14}/> },               
                      { name: "Sudhanyakhali Watch Tower", icon: <Compass size={14}/> },
                      { name: "Dobanki Canopy Walk (20ft)", icon: <NavIcon size={14} className="rotate-45"/> },
                      { name: "Jhorkhali Watch Tower", icon: <ShieldCheck size={14}/> },
                      { name: "Burir Dabri Mud Walk", icon: <MapPin size={14}/> },
                      { name: "Netidhopani Historic Core", icon: <Globe size={14}/> }
                    ].map((spot, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-green-900 group/item transition-all duration-300 cursor-default shadow-sm border border-transparent hover:border-green-800"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-black text-orange-500 group-hover/item:text-orange-400">0{index + 1}</span>
                          <span className="text-[13px] font-black text-gray-700 group-hover/item:text-white uppercase tracking-tight">
                            {spot.name}
                          </span>
                        </div>
                        <div className="text-gray-300 group-hover/item:text-orange-400">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}