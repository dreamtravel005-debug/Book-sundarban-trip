import "./globals.css";
import { Poppins } from 'next/font/google'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://booksundarbantrip.com"),
  title: "Sundarban Tour Package | Best Price Premium Residency",
  description: "Experience the wild luxury in Sundarbans with AC Resorts, delicious local food, and experienced tour guides. Best budget-friendly packages available.",
  
  keywords: [
    "Sundarban Tour", "Sundarban Tourism", "Sundarban Tour Package", 
    "Best Sundarban Trip", "Sundarban Hilsha Festival", "Luxury Sundarban Resort", 
    "Sundarban Travel Agency", "Sundarban Package from Kolkata", "Sundarban Tour guide", 
    "Sundarban Wildlife Tour", "Sundarban Eco-Tourism", "Book Sundarban Trip","Sundarban Budget Tour", 
    "Sundarban 2N/3D Tour", "Sundarban 1N/2D Tour"
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
    "image": "https://booksundarbantrip.com", // এখানে ছবির ফুল পাথ দিলে ভালো
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
        {/* Google Ads ট্র্যাকিং কোড - এখানে লিংকটি আপডেট করা হয়েছে */}
        <Script
          src="https://googletagmanager.com"
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
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
