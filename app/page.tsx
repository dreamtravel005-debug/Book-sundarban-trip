"use client";

import Hero from "./components/Hero"; 
import Packages from "./components/Packages";
import Foods from "./components/Foods";         
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";
import Gallery from "./components/Gallery"; 
import Temp from "./components/Temp";
import Page from "./components/Page";
import Hotels from "./components/hotels"; // Importing the Hotels component
// Baki ja ja component ache segulo import korun

export default function Home() {
  return (
    <div className="w-full">
      {/* Navbar ekhane hobe na, seta layout-e ache */}
      <Hero />
      <Temp/>     
      <Packages />
      <Foods/>
      <Gallery/>
      <Explore/>
      <Hotels/>
      <Testimonial />
      <Page/>
      
    </div>
  );
}