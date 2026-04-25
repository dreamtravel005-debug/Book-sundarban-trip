"use client";

export default function FloatingButtons() {
  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="fixed bottom-0 left-0 w-full z-9999 flex md:hidden">

        {/* WhatsApp (ORIGINAL ICON COLOR) */}
        <a
          href="https://wa.me/916295665770"
          target="_blank"
          className="w-1/2 bg-green-500 flex items-center justify-center gap-2 py-3"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-5 h-5"
          />
          <span className="text-white font-semibold text-sm">
            WhatsApp
          </span>
        </a>

        {/* Call (GRADIENT + WHITE ICON) */}
        <a
          href="tel:916295665770"
          className="w-1/2 bg-linear-to-r from-orange-500 to-orange-600 flex items-center justify-center gap-2 py-3"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
            alt="Call"
            className="w-5 h-5 brightness-0 invert"
          />
          <span className="text-white font-semibold text-sm">
            Call Now
          </span>
        </a>

      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex fixed right-6 bottom-24 flex-col gap-4 z-9999">

        {/* WhatsApp (ORIGINAL ICON COLOR) */}
        <a
          href="https://wa.me/916295665770"
          target="_blank"
          className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-green-400 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </a>

        {/* Call (GRADIENT + WHITE ICON) */}
        <a
          href="tel:916295665770"
          className="bg-linear-to-r from-orange-500 to-orange-600 p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-orange-400 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
            alt="Call"
            className="w-6 h-6 brightness-0 invert"
          />
        </a>

      </div>
    </>
  );
}