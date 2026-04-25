"use client";

import { useEffect, useState } from "react";

export default function SundarbanFinalPage() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({ fullName: "", phone: "", date: "", persons: "", message: "" });
  const [status, setStatus] = useState("");

  // ১. হিরো স্লাইডার ডাটা (ছবি এবং টেক্সট এখানেই পরিবর্তন করবেন)
  const slides = [
    { text: "The Wild Nature", image: "/images/packages/sundarban-1night (2).webp" },
    { text: "1 Night 2 Days", image: "/images/packages/sundarban-1night.webp" },
  ];

  const packages = [
    {
      name: "Canning To Canning Plan",
      price: "3,099",
      oldPrice: "3,500",
      features: ["Non-AC Shared Stay", "Boat Safari (Sajnekhali)", "All Meals (Bengali)", "Certified Guide", "Science City Pickup"],
      accent: "bg-blue-600",
      popular: false
    },
    {
      name: "Kolktata To Kolkata Deluxe Plan",
      price: "4,499",
      oldPrice: "5,000",
      features: ["AC Attached Cottage", "Deep Jungle Safari", "Buffet Menu + Snacks", "Expert Guide", "Home/Hotel Pickup"],
      accent: "bg-green-600",
      popular: true
    },
    {
      name: "Luxury Plan",
      price: "8,999",
      oldPrice: "10,000",
      features: ["Premium Resort Stay", "Private Boat Safari", "Seafood Special Menu", "Evening Folk Show", "VIP Car Transfer"],
      accent: "bg-orange-600",
      popular: false
    }
  ];

  // ২. ফুড মেনু ডিটেইলস (নতুন যোগ করা হয়েছে)
  const foodMenu = [
    {
      day: "Day 01",
      menu: [
        { type: "Welcome Drink", items: "Cold-Drinks or Welcome Tea/Coffee" },
        { type: "Lunch", items: "Rice, Dal, Bhaja, Veg Curry, Fish Curry (Parshe/Vetki), Salad, Chutney, Papad" },
        { type: "Evening Snacks", items: "Chicken Pakora / Veg Pakora with Tea" },
        { type: "Dinner", items: "Fried Rice/Roti, Mix Sabji & Chicken Kosa, Chatni" }
      ]
    },
    {
      day: "Day 02",
      menu: [
        { type: "Breakfast", items: "Kachori & Alur Dom or Luchi & Chana Dal, Sweet, Tea" },
        { type: "Lunch", items: "Rice, Dal, Bhaja, Mix Veg, Special Crab Curry or Prawn Malaikari, Salad, Papad" },
        { type: "Departure", items: "Special Tea & Biscuits during return journey" }
      ]
    }
  ];

  const itinerary = [
    {
      day: "Day 01",
      title: "Journey Towards The Mangroves",
      activities: [
        { time: "11:30 AM", detail: "Arrival at Gothkhali & boarding our boat." },
        { time: "01:30 PM", detail: "Enjoy a freshly cooked lunch on the boat while cruising through the scenic waterways." },
        { time: "01:30 PM", detail: "Visit the Bird Jungle to witness a breathtaking sunset over the forest." },
        { time: "07:00 PM", detail: "Local Folk Dance (Tusu Dance) with tea and snacks at the Resort/Hotel." }
      ]
    },
    {
      day: "Day 02",
      title: "Deep Jungle & Wildlife Safari",
      activities: [
        { time: "07:30 AM", detail: "Board the safari boat and head to the Sajnekhali Tiger Reserve ( government guide included )." },
        { time: "10:30 AM", detail: "Thrilling cruise through Pirkhali and Gajikhali creeks; visit Sudhanyakhali Watch Tower for a chance to spot tigers, crocodiles, and spotted deer." },
        { time: "01:30 PM", detail: "Delicious lunch served on the boat amidst the forest silence." },
        { time: "03:30 PM", detail: "Dobanki Watch Tower & adventurous Canopy Walk." },
        { time: "05:00 PM", detail: "Arrival at Gothkhali and return journey to Kolkata." },
        { time: "08:00 PM", detail: "Reach Kolkata safely with wonderful memories." }
      ]
    },
  ];

  const policies = {
    included: ["Kolkata to Kolkata Transport", "Accommodation in Resort", "All Meals (Bengali Style)", "Forest Permit & Guide Charges", "Boat Safari Fees"],
    excluded: ["Personal Camera Fees", "Soft Drinks/Liquor", "Personal Porter Charges", "Tips to Guide/Driver"],
    child: [
      { age: "Under 4 Years", cost: "Free" },
      { age: "5 to 9 Years", cost: "50% Charge" },
      { age: "10+ Years", cost: "Full Charge" }
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending Inquiry...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("Success! We will contact you shortly.");
        setFormData({ fullName: "", phone: "", date: "", persons: "", message: "" });
      } else { setStatus("Error: Try again."); }
    } catch (err) { setStatus("Submission failed."); }
  };

  useEffect(() => {
    const currentFullText = slides[index].text;
    let speed = isDeleting ? 50 : 100;
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
    <div className="bg-[#fcfcfc] text-gray-900 font-sans selection:bg-green-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            key={index}
            src={slides[index].image} 
            className="w-full h-full object-cover scale-100 transition-all duration-1000 animate-in fade-in zoom-in-105" 
            alt="Sundarban Expedition" 
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-yellow-400 uppercase bg-black/20 backdrop-blur-md rounded-full border border-white/10">
            Official 1N/2D Wildlife Expedition
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
            Discover <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">{displayText}</span>
            <span className="text-white animate-pulse">|</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Explore the world's largest mangrove forest with our premium all-inclusive tour starting from Kolkata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#packages" className="px-10 py-4 bg-yellow-500 text-black font-black rounded-xl hover:bg-yellow-400 transition-all shadow-xl hover:scale-105 active:scale-95">Explore Packages</a>
            <a href="#booking" className="px-10 py-4 border border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-md">Quick Inquiry</a>
          </div>
        </div>
      </section>

      {/* --- PACKAGES SECTION --- */}
      <section id="packages" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">Tour Packages</h2>
          <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`bg-white rounded-[2.5rem] border border-gray-100 p-8 transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col ${pkg.popular ? 'ring-2 ring-green-600 shadow-xl' : 'shadow-sm'}`}>
              <div className="mb-6">
                {pkg.popular && <span className="bg-green-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block tracking-widest">Recommended</span>}
                <h3 className="text-2xl font-black mb-2 text-gray-800">{pkg.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-gray-900">₹{pkg.price}</span>
                  <span className="text-gray-400 line-through font-bold text-sm">₹{pkg.oldPrice}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 grow border-t border-gray-50 pt-8">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                    <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#booking" className={`block w-full py-4 text-center rounded-2xl font-black text-white transition-all ${pkg.accent} shadow-lg active:scale-95`}>Book This Plan</a>
            </div>
          ))}
        </div>
      </section>

      {/* --- DETAILED ITINERARY SECTION --- */}
      <section id="itinerary" className="py-24 bg-gray-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Day-by-Day Journey</h2>
            <p className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-[10px]">Kolkata To Kolkata Complete Plan</p>
          </div>

          <div className="space-y-24">
            {itinerary.map((dayPlan, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3 w-full">
                  <div className="inline-block px-6 py-2 bg-yellow-500 text-black font-black rounded-full mb-6">
                    {dayPlan.day}
                  </div>
                  <h3 className="text-3xl font-black mb-4 leading-tight uppercase tracking-tighter">{dayPlan.title}</h3>
                </div>

                <div className="lg:w-2/3 w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                  <div className="space-y-10">
                    {dayPlan.activities.map((act, idx) => (
                      <div key={idx} className="flex gap-6 relative group">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full ring-4 ring-yellow-500/20 z-10"></div>
                          {idx !== dayPlan.activities.length - 1 && <div className="w-px h-full bg-white/10 absolute top-3"></div>}
                        </div>
                        <div className="pb-2">
                          <span className="text-[10px] font-black text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded uppercase">{act.time}</span>
                          <p className="text-gray-200 mt-2 font-medium leading-relaxed group-hover:text-white transition-colors">
                            {act.detail}
                          </p>
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

         {/* --- FOOD MENU SECTION (NEW) --- */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter italic">Delicious Food Menu</h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">Authentic Bengali Cuisine Prepared with Love</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {foodMenu.map((item, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-black text-orange-500">{item.day}</span>
                  <div className="h-px bg-orange-100 grow ml-4"></div>
                </div>
                <div className="space-y-8">
                  {item.menu.map((m, idx) => (
                    <div key={idx}>
                      <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{m.type}</h5>
                      <p className="text-gray-800 font-bold leading-relaxed">{m.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- POLICIES SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h4 className="text-lg font-black text-green-600 mb-8 uppercase flex items-center gap-3">Included</h4>
            <ul className="space-y-4">
              {policies.included.map((x, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold text-gray-500">
                  <span className="text-green-500 font-bold">✓</span> {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h4 className="text-lg font-black text-red-500 mb-8 uppercase flex items-center gap-3">Excluded</h4>
            <ul className="space-y-4">
              {policies.excluded.map((x, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold text-gray-500">
                  <span className="text-red-500 font-bold">×</span> {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h4 className="text-lg font-black text-blue-600 mb-8 uppercase">Child Policy</h4>
            <div className="space-y-6">
              {policies.child.map((x, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0">
                  <span className="text-sm font-bold text-gray-700">{x.age}</span>
                  <span className="text-xs font-black bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full">{x.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INQUIRY FORM SECTION --- */}
      <section id="booking" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Book Your Escape</h3>
            <p className="text-gray-400 font-bold text-xs tracking-widest uppercase">Fast Response Guaranteed</p>
          </div>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Full Name</label>
              <input required type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full p-4 rounded-xl bg-white border border-gray-200 outline-none font-bold focus:border-green-500 transition-all" placeholder="Enter name" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Phone Number</label>
              <input required type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full p-4 rounded-xl bg-white border border-gray-200 outline-none font-bold focus:border-green-500 transition-all" placeholder="+91" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Date of Travel</label>
              <input required type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full p-4 rounded-xl bg-white border border-gray-200 outline-none font-bold focus:border-green-500 transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">No. of Persons</label>
              <input required type="number" value={formData.persons} onChange={(e) => setFormData({...formData, persons: e.target.value})} className="w-full p-4 rounded-xl bg-white border border-gray-200 outline-none font-bold focus:border-green-500 transition-all" placeholder="2" />
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Pickup point / Message</label>
              <textarea required rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-4 rounded-xl bg-white border border-gray-200 outline-none font-bold focus:border-green-500 transition-all" placeholder="Tell us about your trip..."></textarea>
            </div>
            <button type="submit" className="md:col-span-2 py-5 bg-black text-white rounded-2xl font-black text-lg hover:shadow-2xl transition-all active:scale-95 transform">
              {status ? status : "Send Inquiry Now"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}