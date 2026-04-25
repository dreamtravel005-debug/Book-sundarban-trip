"use client";

import { useEffect, useState } from "react";

export default function SundarbanJungleExpedition() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({ fullName: "", phone: "", date: "", persons: "", message: "" });
  const [status, setStatus] = useState("");

  const slides = [
    { text: "World's Largest Mangrove Forest", image: "/images/sundarban-home.webp" },
    { text: "The Land of Royal Bengal Tiger", image: "/images/sundarban.jpg" },
    { text: "Mystery of the Deep Jungle", image: "/images/sundarbanhome.webp" },
  ];

  const packages = [
    {
      name: "Mangrove Starter",
      price: "7,499",
      oldPrice: "8,500",
      features: ["Non-AC Cottage Stay", "Shared Boat Safari", "Local Bengali Cuisine", "Forest Permit Included", "Sajnekhali Watchtower"],
      accent: "bg-green-700",
      popular: false
    },
    {
      name: "Tiger Territory (Best)",
      price: "8,999",
      oldPrice: "9,500",
      features: ["AC Forest Resort", "Deep Jungle Safari (6 AM Start)", "Sudhanyakhali & Dobanki", "Expert Tiger Tracker", "Evening Folk Performance"],
      accent: "bg-yellow-600",
      popular: true
    },
    {
      name: "Royal Wilderness",
      price: "11,999",
      oldPrice: "12,000",
      features: ["Luxury River-view Stay", "Private Premium Boat", "Seafood & Crab Special", "Canopy Walk Experience", "Private Car Transfer"],
      accent: "bg-emerald-800",
      popular: false
    }
  ];

  const itinerary = [
    {
      day: "Day 01",
      title: "Gateway to the Wild",
      activities: [
        { time: "08:30 AM", detail: "Start from Kolkata toward Gothkhali (The Gateway)." },
        { time: "12:00 PM", detail: "Board the engine boat, cruise through Hogol, Gomor, and Durgaduani rivers." },
        { time: "01:30 PM", detail: "Lunch on boat with fresh river fish curry." },
        { time: "04:30 PM", detail: "Pakhiralay visit and sunset view from the riverbank." }
      ]
    },
    {
      day: "Day 02",
      title: "Deep Into Tiger Reserve",
      activities: [
        { time: "06:30 AM", detail: "Enter Sundarban Tiger Reserve through Sajnekhali." },
        { time: "09:00 AM", detail: "Sudhanyakhali Watchtower (High chance of Tiger & Deer sighting)." },
        { time: "01:00 PM", detail: "Thrilling boat lunch while cruising through narrow creeks (Pirkhali, Gazikhali)." },
        { time: "03:30 PM", detail: "Dobanki Canopy Walk (20 ft high caged walkway inside the jungle)." }
      ]
    },
    {
      day: "Day 03",
      title: "Local Life & Farewell",
      activities: [
        { time: "08:00 AM", detail: "Village walk to understand the human-tiger conflict and local life." },
        { time: "11:00 AM", detail: "Visit to the historic Hamilton Bungalow and Beacon Bungalow." },
        { time: "01:30 PM", detail: "Grand Farewell Lunch (Basmati Rice & Mutton/Prawn)." },
        { time: "06:30 PM", detail: "Back to Kolkata with a heart full of memories." }
      ]
    }
  ];

  const policies = {
    included: ["Kolkata to Gothkhali Transport", "Government Forest Permits", "All Meals (B/L/D + Snacks)", "Licensed Forest Guide", "Accommodation as per Plan"],
    excluded: ["Personal Camera Charges", "Bottled Water/Cold Drinks", "Tips & Gratitude", "Anything not in the plan"],
    rules: ["Avoid Plastic", "No Loud Music", "Don't feed wild animals", "Carry ID proof"]
  };

  // --- ইনকোয়ারি ফর্মের আসল কাজ এখানে ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Success! We will call you soon.");
        setFormData({ fullName: "", phone: "", date: "", persons: "", message: "" });
      } else {
        setStatus("Error: Something went wrong.");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("Error: Connection failed.");
    }

    // ৫ সেকেন্ড পর মেসেজটি সরিয়ে দেওয়ার জন্য
    setTimeout(() => setStatus(""), 5000);
  };

  useEffect(() => {
    const currentFullText = slides[index]?.text || "";
    let speed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((p) => (p + 1) % slides.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <div className="bg-[#f4f7f2] text-gray-900 font-sans selection:bg-yellow-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            key={index}
            src={slides[index].image} 
            className="w-full h-full object-cover transition-all duration-1000 scale-105" 
            alt="Sundarban Jungle" 
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-black tracking-[0.3em] text-yellow-400 uppercase bg-green-900/50 backdrop-blur-md rounded-full border border-yellow-500/30">
            Official UNESCO Heritage Tour
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
            Sundarban <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">{displayText}</span>
            <span className="text-white animate-bounce">|</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            Explore the mystery of the Royal Bengal Tiger in the heart of the world's deepest mangroves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#packages" className="px-12 py-4 bg-yellow-500 text-black font-black rounded-full hover:bg-yellow-400 transition-all shadow-2xl hover:scale-105">Book My Safari</a>
            <a href="#itinerary" className="px-12 py-4 border-2 border-white/60 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">View Itinerary</a>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <div className="bg-green-900 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl font-black text-yellow-500">100+</p><p className="text-xs text-green-100 uppercase font-bold">Bengal Tigers</p></div>
          <div><p className="text-3xl font-black text-yellow-500">450+</p><p className="text-xs text-green-100 uppercase font-bold">Bird Species</p></div>
          <div><p className="text-3xl font-black text-yellow-500">10k+</p><p className="text-xs text-green-100 uppercase font-bold">Sq. KM Mangroves</p></div>
          <div><p className="text-3xl font-black text-yellow-500">UNESCO</p><p className="text-xs text-green-100 uppercase font-bold">Heritage Site</p></div>
        </div>
      </div>

      {/* --- PACKAGES SECTION --- */}
      <section id="packages" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-green-900 mb-4 tracking-tighter">Wild Expedition Plans</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`group bg-white rounded-[3rem] border border-gray-100 p-10 transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col ${pkg.popular ? 'ring-4 ring-yellow-500 shadow-xl' : 'shadow-sm'}`}>
              <div className="mb-6">
                {pkg.popular && <span className="bg-yellow-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase mb-4 inline-block tracking-widest">Most Sighted</span>}
                <h3 className="text-2xl font-black mb-2 text-green-900">{pkg.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-gray-900">₹{pkg.price}</span>
                  <span className="text-gray-400 line-through font-bold text-sm">₹{pkg.oldPrice}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 grow border-t border-gray-50 pt-8">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                    <div className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-[10px]">✓</div> {f}
                  </li>
                ))}
              </ul>
              <a href="#booking" className={`block w-full py-5 text-center rounded-2xl font-black text-white transition-all ${pkg.accent} shadow-lg group-hover:scale-105 active:scale-95`}>Confirm My Spot</a>
            </div>
          ))}
        </div>
      </section>

      {/* --- ITINERARY SECTION --- */}
      <section id="itinerary" className="py-24 bg-[#081a08] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Safari Journey</h2>
          </div>
          <div className="space-y-24 relative">
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-white/10 hidden md:block"></div>
            {itinerary.map((dayPlan, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 w-full text-center md:text-left">
                  <div className="inline-block px-8 py-3 bg-yellow-500 text-black font-black rounded-xl mb-6 shadow-xl">{dayPlan.day}</div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase text-yellow-50">{dayPlan.title}</h3>
                </div>
                <div className="lg:w-1/2 w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-12 hover:border-yellow-500/50 transition-colors">
                  <div className="space-y-10">
                    {dayPlan.activities.map((act, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        <div className="flex flex-col items-center"><div className="w-4 h-4 bg-yellow-500 rounded-full"></div></div>
                        <div>
                          <span className="text-[10px] font-black text-yellow-500 border border-yellow-500/30 px-3 py-1 rounded-full uppercase">{act.time}</span>
                          <p className="text-gray-300 mt-3 font-medium leading-relaxed">{act.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INQUIRY FORM --- */}
      <section id="booking" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-green-950 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">Start Your Adventure</h3>
            {status && (
              <div className={`p-4 rounded-xl font-bold mb-4 ${status.includes("Success") ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                {status}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 grid md:grid-cols-2 gap-8">
            <input required type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-yellow-500 font-bold transition-all" placeholder="Enter Full Name" />
            <input required type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-yellow-500 font-bold transition-all" placeholder="Phone Number" />
            <input required type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="p-5 rounded-2xl bg-white/10 border border-white/20 text-white outline-none focus:border-yellow-500 font-bold transition-all" />
            <input required type="number" value={formData.persons} onChange={(e) => setFormData({...formData, persons: e.target.value})} className="p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-yellow-500 font-bold transition-all" placeholder="Number of Persons" />
            <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="md:col-span-2 p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-yellow-500 font-bold transition-all" placeholder="Any special requests?"></textarea>
            
            <button 
              type="submit" 
              disabled={status === "Sending..."}
              className="md:col-span-2 py-6 bg-yellow-500 text-black rounded-2xl font-black text-xl hover:bg-yellow-400 disabled:bg-gray-400 transition-all transform active:scale-95"
            >
              {status === "Sending..." ? "Sending..." : "Send Expedition Inquiry"}
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center bg-white border-t border-gray-100">
        <p className="text-4xl font-black text-green-950 mb-4 tracking-tighter uppercase italic">Sundarban Expedition<span className="text-yellow-500">.</span></p>
      </footer>

    </div>
  );
}