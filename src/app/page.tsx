"use client";

import CTA from "@/components/home/Cta";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import PopularBooks from "@/components/home/PopularBooks";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Hero />
      <Features />
      <PopularBooks />
      <Testimonials />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}