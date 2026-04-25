import Link from "next/link";

export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-[#eef3f1]">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm text-orange-500 uppercase font-semibold mb-2">
            Gallery
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
            Moments from the Wild
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of Sundarban through real experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* BIG IMAGE */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src="/images/sundarban.jpg"
              className="w-full h-100 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* TEXT */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Only Nature Lover</h3>
              <p className="text-sm text-gray-200">Comfort in the wild</p>
            </div>
          </div>

          {/* SMALL GRID */}
          <div className="grid grid-cols-2 gap-6">

            {/* ITEM */}
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/sundarbanhome.webp"
                className="w-full h-47.5 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                Powerful Hunters
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/packages/sundarban-2-night-3--days.webp"
                className="w-full h-47.5 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                Houseboat
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/sundarban-tiger.webp"
                className="w-full h-47.5 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                Tiger Spotting
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/home/12.webp"
                className="w-full h-47.5 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                Local Village Folk Dance
              </div>
            </div>

          </div>

        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <Link href="/gallery">
            <button className="border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-800 hover:text-white transition">
              View Full Gallery
            </button>
          </Link>
        </div>

      </div>

    </section>
  );
}