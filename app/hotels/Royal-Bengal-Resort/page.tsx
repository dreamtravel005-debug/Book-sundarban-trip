"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { 
  Wifi, Waves, Utensils, ConciergeBell, Sparkles, MapPin, 
  CheckCircle2, X, Phone, ChevronLeft, ChevronRight, User, Bed, Maximize, Wind, Star
} from "lucide-react";

export default function HotelDetailedPage() {
  const { slug } = useParams();
  
  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({ type: "", price: "" });
  const [formData, setFormData] = useState({ name: "", phone: "", checkIn: "", checkOut: "" });
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // 1. HOTEL DATABASE
  const hotelData: any = {
    "Royal-Bengal-Resort": {
      name: "Royal Bengal Resort",
      address: "Pakhiralay, Gosaba, West Bengal 743370",
      rating: "9.2",
      ratingText: "Superb",
      reviewsCount: "150+ reviews",
      stars: 5,
      whatsappNumber: "916295665770", 
      phoneNumber: "+916295665770",   
      facilities: [
        { name: "Free High-Speed WiFi", icon: <Wifi size={18} /> },
        { name: "Swimming Pool", icon: <Waves size={18} /> },
        { name: "Multi-Cuisine Restaurant", icon: <Utensils size={18} /> },
        { name: "24/7 Room Service", icon: <ConciergeBell size={18} /> },
        { name: "Luxury Spa", icon: <Sparkles size={18} /> },
        { name: "Tiger Safari", icon: <CheckCircle2 size={18} /> },
      ],
      images: [
        "/images/hotels/Royal-Bengal-Resort/Royal-Bengal-Resort.jpg",
        "/images/hotels/Royal-Bengal-Resort/Royal-Bengal-Resort1.jpg",
        "/images/hotels/Royal-Bengal-Resort/Royal-Bengal-Resort2.jpg",
        "/images/hotels/Royal-Bengal-Resort/Royal-Bengal-Resort4.jpg",
        "/images/hotels/Royal-Bengal-Resort/Royal-Bengal-Resort5.jpg",
        "/images/hotels/Royal-Bengal-Resort/Royal-Bengal-Resort6.jpg",
      ],
      description: `Royal Bengal Resort – A premium and elegant resort nestled in the natural beauty of the Sundarbans, offering a perfect blend of comfort, luxury, and nature. With spacious rooms, delicious Bengali cuisine, and warm hospitality, it ensures a memorable and relaxing stay experience.`,
      rooms: [
        { id: 1, type: "Deluxe Double Room", price: "2,499", area: "280 sq ft", bed: "1 Queen Bed", perks: "Free Breakfast", badge: "Best Seller" },
        { id: 2, type: "Deluxe Family Room", price: "2,999", area: "350 sq ft", bed: "1 King Bed", perks: "Free Breakfast", badge: "Highly Rated" },
      ],
      reviews: [
        { id: 1, name: "Rahul Sharma", rating: 5, comment: "Amazing experience! The location is just beside the forest. Staff are very friendly." },
        { id: 2, name: "Ananya Das", rating: 4, comment: "The room was very clean and the food was delicious. Loved the pool!" },
        { id: 3, name: "Vikram Singh", rating: 5, comment: "Best luxury resort in Sundarban. Highly recommended for family trips." },
        { id: 4, name: "Sneha Roy", rating: 5, comment: "The safari arrangement was perfect. We saw many birds and deer." },
        { id: 5, name: "John Doe", rating: 4, comment: "Peaceful atmosphere and great service. Will visit again soon." },
        { id: 6, name: "Priya Mehta", rating: 5, comment: "The river view from the premium room was spectacular!" },
        { id: 7, name: "Amit Kumar", rating: 5, comment: "Everything was well-managed. The WiFi speed was surprisingly good for a remote area." },
        { id: 8, name: "Surojit Mondal", rating: 4, comment: "Great place to relax. The local cultural program in the evening was very entertaining." },
      ]
    }
  };

  const hotel = hotelData[slug as string] || hotelData["Royal-Bengal-Resort"];
  const displayedReviews = showAllReviews ? hotel.reviews : hotel.reviews.slice(0, 3);

  // 2. WHATSAPP LOGIC
  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Booking Request*%0A%0A*Hotel:* ${hotel.name}%0A*Room:* ${selectedRoom.type}%0A*Price:* ₹${selectedRoom.price}%0A%0A*Client Details:*%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Check-in: ${formData.checkIn}%0A- Check-out: ${formData.checkOut}`;
    window.open(`https://wa.me/${hotel.whatsappNumber}?text=${message}`, "_blank");
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans text-gray-900">
      
      {/* --- PAGE CONTAINER (pt Fix) --- */}
      <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-28">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div className="order-1">
            <div className="flex items-center gap-2 mb-2">
               <span className="bg-[#003580] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Book Sundarban Trip</span>
               <div className="flex text-yellow-500 text-sm">{"★".repeat(hotel.stars)}</div>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a]">{hotel.name}</h1>
            <p className="text-sm text-blue-600 flex items-center gap-1 mt-1 font-medium">
              <MapPin size={16} /> {hotel.address}
            </p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto order-2">
             <a href={`tel:${hotel.phoneNumber}`} className="flex-1 md:flex-none px-6 py-3 bg-[#f0f5ff] text-[#006ce4] rounded-xl flex items-center justify-center gap-2 font-bold transition">
               <Phone size={18} /> Call Now
             </a>
             <button onClick={() => { setSelectedRoom(hotel.rooms[0]); setIsModalOpen(true); }} className="flex-2 md:flex-none bg-[#006ce4] text-white px-10 py-3 rounded-xl font-bold hover:bg-[#0051ad] transition shadow-lg">Reserve Your Stay</button>
          </div>
        </div>

        {/* --- DYNAMIC GALLERY --- */}
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-3 h-105 rounded-4xl overflow-hidden mb-12">
           <div className="col-span-2 h-full cursor-pointer" onClick={() => setActiveImageIndex(0)}><img src={hotel.images[0]} className="w-full h-full object-cover" alt="1" /></div>
           <div className="grid grid-rows-2 gap-3 h-full">
              <img src={hotel.images[1]} onClick={() => setActiveImageIndex(1)} className="w-full h-full object-cover cursor-pointer" alt="2" />
              <img src={hotel.images[2]} onClick={() => setActiveImageIndex(2)} className="w-full h-full object-cover cursor-pointer" alt="3" />
           </div>
           <div className="grid grid-rows-2 gap-3 h-full">
              <img src={hotel.images[3]} onClick={() => setActiveImageIndex(3)} className="w-full h-full object-cover cursor-pointer" alt="4" />
              <div className="relative cursor-pointer" onClick={() => setActiveImageIndex(4)}>
                <img src={hotel.images[4]} className="w-full h-full object-cover opacity-60" alt="5" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold text-xl">+{hotel.images.length - 4} Photos</div>
              </div>
           </div>
        </div>

        {/* Mobile Gallery (1 Big + 4 Thumbnails) */}
        <div className="md:hidden space-y-2 mb-10">
           <div className="w-full h-55 rounded-2xl overflow-hidden shadow-sm" onClick={() => setActiveImageIndex(0)}><img src={hotel.images[0]} className="w-full h-full object-cover" alt="Hero" /></div>
           <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`aspect-square rounded-lg overflow-hidden relative ${i === 4 ? 'bg-black' : ''}`} onClick={() => setActiveImageIndex(i)}>
                   <img src={hotel.images[i]} className={`w-full h-full object-cover ${i === 4 ? 'opacity-50' : ''}`} alt={`t${i}`} />
                   {i === 4 && <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">+{hotel.images.length - 4}</div>}
                </div>
              ))}
           </div>
        </div>

        {/* --- MAIN CONTENT & RATING SIDEBAR --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-4xl border border-gray-100 shadow-sm">
               <h2 className="text-xl font-bold mb-4">Description</h2>
               <p className="text-gray-600 leading-relaxed text-[15px]">{hotel.description}</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-4xl border border-gray-100 shadow-sm">
               <h2 className="text-xl font-bold mb-6">Popular Facilities</h2>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                 {hotel.facilities.map((f:any, i:number) => (
                   <div key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                      <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">{f.icon}</div>
                      {f.name}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* RATING BOX (SAME AS YOUR IMAGE) */}
          <div className="lg:col-span-4">
             <div className="bg-[#003580] text-white p-8 rounded-4xl shadow-lg sticky top-28">
                <div className="flex justify-between items-center mb-4">
                   <h4 className="font-bold text-2xl">{hotel.ratingText}</h4>
                   <div className="bg-white text-[#003580] w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl shadow-inner">
                      {hotel.rating}
                   </div>
                </div>
                <p className="text-sm opacity-80 font-medium tracking-wide">Top rated location by recent guests.</p>
             </div>
          </div>
        </div>

        {/* --- PREMIUM ROOM SELECTION --- */}
        <div className="mt-10 mb-20">
          <h2 className="text-2xl font-black mb-8">Available Room Options</h2>
          <div className="grid gap-6">
            {hotel.rooms.map((room: any) => (
              <div key={room.id} className="bg-white border border-gray-100 rounded-4xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col md:flex-row">
                 <div className="md:w-1/3 p-8 bg-gray-50 flex flex-col justify-center">
                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-2">{room.badge}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{room.type}</h3>
                    <div className="space-y-2 text-xs text-gray-500 font-medium">
                       <p className="flex items-center gap-2"><Maximize size={14}/> {room.area}</p>
                       <p className="flex items-center gap-2"><Bed size={14}/> {room.bed}</p>
                       <p className="flex items-center gap-2"><Wind size={14}/> Air Conditioning</p>
                    </div>
                 </div>
                 
                 <div className="flex-1 p-8 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="space-y-2">
                       <p className="text-emerald-600 font-bold text-sm">✓ {room.perks}</p>
                       <p className="text-[13px] text-gray-500">✓ Free High-Speed WiFi</p>
                       <p className="text-[13px] text-gray-500">✓ 24/7 Room Service</p>
                    </div>
                    
                    <div className="text-center md:text-right w-full md:w-auto">
                       <div className="flex items-baseline justify-center md:justify-end gap-1">
                          <span className="text-xs font-bold text-gray-400">₹</span>
                          <span className="text-3xl font-black text-gray-900">{room.price}</span>
                       </div>
                       <p className="text-[10px] text-gray-400 mb-4 tracking-wider">Per Night (Taxes Incl.)</p>
                       <button 
                         onClick={() => { setSelectedRoom(room); setIsModalOpen(true); }}
                         className="w-full md:w-auto bg-[#006ce4] text-white px-10 py-3 rounded-2xl font-bold uppercase text-[11px] tracking-widest hover:bg-[#0051ad] transition shadow-md"
                       >
                         Reserve
                       </button>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SEPARATE REVIEWS SECTION WITH READ MORE --- */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm mt-10">
           <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <h2 className="text-2xl md:text-3xl font-black">Guest Reviews</h2>
              <div className="flex items-center gap-2 text-[#003580] font-bold">
                 <Star className="fill-[#003580]" size={20}/>
                 <span>{hotel.rating} / 10 • {hotel.reviewsCount}</span>
              </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {displayedReviews.map((rev: any) => (
               <div key={rev.id} className="p-6 bg-gray-50 rounded-4xl border border-gray-100 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#003580] rounded-full flex items-center justify-center text-white font-bold"><User size={20}/></div>
                        <p className="font-bold text-sm text-gray-800">{rev.name}</p>
                     </div>
                     <div className="bg-[#003580] text-white px-2 py-0.5 rounded-lg text-xs font-bold">{rev.rating}.0</div>
                  </div>
                  <p className="text-gray-600 text-[13px] leading-relaxed italic">"{rev.comment}"</p>
               </div>
             ))}
           </div>

           <div className="text-center mt-10">
              <button 
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="bg-transparent border border-[#003580] text-[#003580] px-8 py-3 rounded-full font-bold hover:bg-[#003580] hover:text-white transition duration-300"
              >
                {showAllReviews ? "Show less" : "Read all reviews"}
              </button>
           </div>
        </div>

      </div>

      {/* --- LIGHTBOX & INQUIRY MODAL (Kept same as before) --- */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 bg-black z-2000 flex items-center justify-center p-4">
          <button onClick={() => setActiveImageIndex(null)} className="absolute top-8 right-8 text-white p-2 bg-white/10 rounded-full"><X size={30} /></button>
          <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
             <img src={hotel.images[activeImageIndex]} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" alt="Full" />
             <button onClick={() => setActiveImageIndex(activeImageIndex > 0 ? activeImageIndex - 1 : hotel.images.length - 1)} className="absolute left-2 text-white bg-black/40 p-3 rounded-full"><ChevronLeft size={30}/></button>
             <button onClick={() => setActiveImageIndex(activeImageIndex < hotel.images.length - 1 ? activeImageIndex + 1 : 0)} className="absolute right-2 text-white bg-black/40 p-3 rounded-full"><ChevronRight size={30}/></button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-999 flex items-center justify-center p-4">
           <div className="bg-white w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in duration-200">
              <div className="bg-[#003580] p-8 text-white flex justify-between items-center">
                 <div><h3 className="text-xl font-bold tracking-tight">Booking Inquiry</h3><p className="text-xs opacity-70 mt-1">{selectedRoom.type}</p></div>
                 <button onClick={() => setIsModalOpen(false)} className="bg-white/10 p-2 rounded-full"><X size={20} /></button>
              </div>
              <form onSubmit={sendToWhatsApp} className="p-8 space-y-4">
                 <input required type="text" placeholder="Full Name" className="w-full bg-gray-50 p-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 text-sm shadow-inner" onChange={(e)=>setFormData({...formData, name: e.target.value})} />
                 <input required type="tel" placeholder="WhatsApp Number" className="w-full bg-gray-50 p-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 text-sm shadow-inner" onChange={(e)=>setFormData({...formData, phone: e.target.value})} />
                 <div className="grid grid-cols-2 gap-4">
                    <input required type="date" className="w-full bg-gray-50 p-4 rounded-2xl border-none text-xs" onChange={(e)=>setFormData({...formData, checkIn: e.target.value})} />
                    <input required type="date" className="w-full bg-gray-50 p-4 rounded-2xl border-none text-xs" onChange={(e)=>setFormData({...formData, checkOut: e.target.value})} />
                 </div>
                 <div className="bg-blue-50 p-5 rounded-3xl flex justify-between items-center border border-blue-100 font-bold">
                    <span className="text-blue-900 text-sm">Price:</span><span className="text-2xl font-black text-blue-900">₹{selectedRoom.price}</span>
                 </div>
                 <button type="submit" className="w-full bg-[#25D366] text-white py-4 rounded-3xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-100 hover:scale-[1.02] transition">Inquiry on WhatsApp</button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
}