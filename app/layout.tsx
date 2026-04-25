import "./globals.css";
import { Poppins } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Script from "next/script";
import { Metadata } from "next";

// ফন্ট কনফিগারেশন: এখানে ৪০০ থেকে ৮০০ পর্যন্ত সব ওয়েট নেওয়া হয়েছে যাতে মোবাইলে বোল্ড কাজ করে
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://booksundarbantrip.com"),
  title: "Sundarban Tour Package | Best Price Premium Residency",
  description: "Experience the wild luxury in Sundarbans with AC Resorts, delicious local food, and experienced tour guides. Best budget-friendly packages available.",
  keywords: [
    "Sundarban Tour", "Sundarban Tourism", "Sundarban Tour Package", 
    "Best Sundarban Trip", "Sundarban Hilsha Festival", "Luxury Sundarban Resort", 
    "Sundarban Travel Agency", "Sundarban Package from Kolkata", "Sundarban Tour guide", 
    "Sundarban Wildlife Tour", "Sundarban Eco-Tourism", "Book Sundarban Trip", "Sundarban Budget Tour"
  ],
  icons: {
    icon: "/book-sundarban-trip.ico",
    shortcut: "/book-sundarban-trip.ico",
    apple: "/book-sundarban-trip.ico",
  },
  openGraph: {
    title: "Sundarban Tour - Premium Forest Residency",
    description: "Experience the wild luxury in Sundarbans with our expert-guided tours.",
    url: "https://booksundarbantrip.com",
    siteName: "Book Sundarban Trip",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Sundarban Tour Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
    "priceRange": "INR",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressCountry": "IN"
    },
    "telephone": "+91-XXXXXXXXXX" // আপনার কন্টাক্ট নম্বরটি এখানে দিতে পারেন
  };

  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-123456789"
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
      {/* antialiased ক্লাসটি মোবাইলে লেখা আরও স্মুথ করে */}
      <body className={`${poppins.className} antialiased flex flex-col min-h-screen text-slate-900 bg-white`}>
        <Navbar />
        <main className="grow">{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
