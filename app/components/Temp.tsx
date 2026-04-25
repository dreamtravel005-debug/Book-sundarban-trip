export default function About() {
  return (
    <section className="py-20 px-6 bg-[#f8f7f4]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">

          <img
            src="/images/home/sundarban-tiger-view.webp"
            className="rounded-2xl w-full h-100 object-cover shadow-lg"
          />

          {/* FLOATING BADGE */}
          <div className="absolute -bottom-8 left-6 bg-white shadow-xl rounded-xl px-5 py-3 flex items-center gap-4">

            <div className="bg-yellow-100 text-yellow-600 text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full">
              15+
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Years of Excellence
              </p>
              <p className="text-sm text-gray-500">
                In Tourism
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="text-sm text-yellow-600 font-semibold mb-2 uppercase">
            About Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
            Your Gateway to the Mystical Sundarbans
          </h2>

          <p className="text-gray-600 mb-4">
            For over 15 years, we have been offering unforgettable Sundarban tours
            with safety, comfort, and real wildlife experience.
          </p>

          <p className="text-gray-600 mb-8">
            From thrilling tiger safaris to peaceful river cruises, we create
            memorable journeys for every traveler.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-6">

            <div className="flex gap-3">
              <span className="text-xl">🛡️</span>
              <div>
                <h4 className="font-semibold">Safety First</h4>
                <p className="text-sm text-gray-500">
                  Secure & guided tours
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">🏆</span>
              <div>
                <h4 className="font-semibold">15+ Years</h4>
                <p className="text-sm text-gray-500">
                  Trusted experience
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">🌿</span>
              <div>
                <h4 className="font-semibold">Eco Friendly</h4>
                <p className="text-sm text-gray-500">
                  Sustainable tourism
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">📍</span>
              <div>
                <h4 className="font-semibold">Local Experts</h4>
                <p className="text-sm text-gray-500">
                  Best travel spots
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}