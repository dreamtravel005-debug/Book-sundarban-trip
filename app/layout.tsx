import "./globals.css";
import { Poppins } from 'next/font/google'; // ১. ফন্ট ইমপোর্ট
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Script from "next/script";
import { Metadata } from "next";

// ২. ফন্ট কনফিগারেশন (Weight অবশ্যই দিতে হবে)
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], // এখানে ৭০০ হলো বোল্ড
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://booksundarbantrip.com"),
  title: "Sundarban Tour Package | Best Price Premium Residency",
  description: "Experience the wild luxury in Sundarbans with AC Resorts, delicious local food, and experienced tour guides. Best budget-friendly packages available.",
  // ... বাকি মেটাডাটা ঠিক আছে
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Sundarban Tour",
    "description": "Experience the wild luxury in Sundarbans with Premium Forest Residency.",
    "url": "https://booksundarbantrip.com", 
    "image": "https://booksundarbantrip.com/og-image.jpg", 
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-123456789" // URL ঠিক করা হয়েছে
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-123456789');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* ৩. body ট্যাগে poppins.className যোগ করা হয়েছে */}
      <body className={`${poppins.className} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="grow">{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
