import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">

      {/* Background blur glow */}
      <div className="absolute inset-0 bg-linear-to-br from-green-900/20 via-black to-black"></div>

      {/* Glass container */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 grid gap-12 md:grid-cols-4 shadow-2xl">

          {/* LOGO */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              🌴 Sundarban Trip
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the wild beauty of Sundarbans with premium tours and unforgettable adventures.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-green-600 transition hover:scale-110">
                🌐
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-green-600 transition hover:scale-110">
                📘
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-green-600 transition hover:scale-110">
                📸
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link href="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-green-400 transition">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-green-400 transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>📍 Village: Gosaba , Post Office: Gosaba , Dist: South 24 Pgs , Gosaba Market Durga Mandir Road, Pin - 743370, West Bengal, India</li>

              <li>
                <a href="tel:+916295665770" className="hover:text-green-400">
                  📞 +91 629566 5770 / 9339703384
                </a>
              </li>

              <li>
                <a href="mailto:info@booksundarbantrip.com" className="hover:text-green-400">
                  📧 info@booksundarbantrip.com
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>

            <p className="text-gray-300 text-sm mb-4">
              Get updates, offers & travel tips.
            </p>

            <div className="flex bg-white/10 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-4 py-2 w-full text-sm outline-none text-white placeholder-gray-400"
              />
              <button className="bg-green-600 px-4 text-sm hover:bg-green-500 transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="text-center text-gray-400 text-sm mt-10">
          © 2026 Book Sundarban Trip — All Rights Reserved
        </div>

      </div>
    </footer>
  );
}