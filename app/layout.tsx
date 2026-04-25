// আপনার পেইজের মেইন সেকশন বা হিরো সেকশনে এভাবে লিখুন:

export default function HeroSection() {
  return (
    <section className="relative py-16 px-6 md:py-24 md:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Eye-catching Badge */}
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-green-700 uppercase bg-green-100 rounded-full">
          The Ultimate Forest Adventure
        </span>

        {/* main title - মোবাইলে ছোট, ডেক্সটপে বড় এবং বোল্ড */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          Experience the <span className="text-green-600">Wild Luxury</span> in Sundarbans
        </h1>

        {/* description - রিডিবিলিটি বাড়ানোর জন্য gray-600 ব্যবহার করা হয়েছে */}
        <p className="text-base md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Premium residency, delicious local food, and expert-guided jungle safaris. 
          Discover the magic of the mangrove forest with our budget-friendly tour packages.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all">
            Book My Trip
          </button>
          <button className="px-8 py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
            View Packages
          </button>
        </div>

      </div>
    </section>
  );
}
