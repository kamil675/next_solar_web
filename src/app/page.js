"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "@/styles/Home.css";

// components
import Dashboard from "@/components/Dashboard";
import SolarProduct from "@/components/SolarProduct";
import SolarCostCalculator from "@/components/SolarCostCalculator";
import FaqSection from "@/components/FaqSection";
import SolarPortfolio from "@/components/SolarPortfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatbotToggle from "@/components/ChatbotToggle";
import SolarSolutions from "@/components/SolarSolutions";
import ChatUI1 from "@/components/ChatUI1";
import PageOne from "@/components/PageOne";
import Conversation from "@/components/Conversation";
import HomeStart2 from "@/components/HomeStart2";
import HoverVideoCard1 from "@/components/HoverVideoCard1";
import FiguringOut1 from "@/components/FiguringOut1";
import ExactMatchPage1 from "@/components/ExactMatchPage1";
import FullScreenVideo from "@/components/FullScreenVideo";
import RatingWorks from "@/components/RatingWorks";
import Navbar2 from "@/components/Navbar2";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-full mx-auto overflow-x-hidden">
      {/* ChatbotToggle */}
      <ChatbotToggle />

      {/* Hero Section */}
      <section className="About relative w-full">
        <FullScreenVideo />
        <div className="relative z-10">
          <HomeStart2 />
        </div>
      </section>
      {/* Conversation Section */}
      <section className="px-4 sm:px-6 lg:px-12 mt-24 relative z-10">
        <Conversation />
      </section>

      {/* Solar Cost Calculator Section */}
      <section className="mt-12 px-4 sm:px-6 lg:px-12 relative z-10">
        <SolarCostCalculator />
        <div className="flex justify-center mt-8">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              Adhik jaankari ke liye click krein
            </button>
          </Link>
        </div>
      </section>

      {/* Solar Solutions Section */}
      {/* Solar Solutions */}
      <section className="About px-4 sm:px-6 lg:px-12 mt-24 relative z-10">
        <SolarSolutions />
      </section>

      {/* Contact Form */}
      <section className="About1 px-4 sm:px-6 lg:px-12 mt-32 md:mt-40 relative z-10">
        <div className="pt-10">
          <ContactForm />
        </div>
      </section>

      {/* PageOne & ChatUI */}
      <section className="About mt-24 relative z-10">
        <PageOne />
      </section>
      <section className="About px-4 sm:px-6 lg:px-12 mt-12 relative z-10">
        <ChatUI1 />
      </section>

      {/* Products Section */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-16 mt-24 relative z-10">
        <SolarProduct />
      </section>

      {/* Floating Image */}
      {/* Floating Image Full Width */}
      <section className="mt-20 relative w-full h-[400px] z-10">
        <Image
          src="/DivyRedesign.webp"
          alt="Design"
          fill
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </section>

      {/* Other Sections */}
      <section className="mt-24 sm:mt-32 md:mt-40 px-4 sm:px-6 lg:px-12 relative z-10">
        <FiguringOut1 />
      </section>
      <section className="mt-16 px-4 sm:px-6 lg:px-12 relative z-10">
        <ExactMatchPage1 />
      </section>

      {/* HoverVideo + FAQ */}
      <section className="mt-1 px-4 sm:px-6 lg:px-12 py-20 relative z-10">
        {/* Hover Video Card with full width */}
        <div className="w-full">
          <HoverVideoCard1 className="w-full" />
        </div>

        {/* FAQ Section with spacing */}
        <div className="mt-16 sm:mt-20">
          <FaqSection />
        </div>
      </section>

      {/* Footer */}
      <section className="About mt-24 relative z-10">
        <Footer />
      </section>
    </div>
  );
}
