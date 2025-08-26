"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const studies = [
  {
    image: "/images/offer1.png",
    title: "GlowWear — eCommerce",
    stat: "+28% checkout conversions",
    description:
      "We built a product recommendation chatbot for GlowWear that learned from customer behavior and boosted sales through personalized AI interactions.We built a product recommendation chatbot for GlowWear that learned from customer behavior and boosted sales through personalized AI interactions.We built a product recommendation chatbot for GlowWear that learned from customer behavior and boosted sales through personalized AI interactions.We built a product recommendation chatbot for GlowWear that learned from customer behavior and boosted sales through personalized AI interactions.",
  },
  {
    image: "/images/offer2.png",
    title: "GlowWear — Fashion eCommerce",
    stat: "+28% checkout conversions",
    description:
      "We built a product recommendation chatbot for GlowWear that learned from customer behavior and boosted sales through personalized AI interactions.",
  },
  {
    image: "/images/offer3.png",
    title: "GlowWear — Fashion",
    stat: "+28% checkout conversions",
    description:
      "We built a product recommendation chatbot for GlowWear that learned from customer behavior and boosted sales through personalized AI interactions.",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef();

  const prev = () =>
    setActive((prev) => (prev === 0 ? studies.length - 1 : prev - 1));
  const next = () =>
    setActive((prev) => (prev === studies.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-slide effect with pause on hover
  useEffect(() => {
    intervalRef.current = setInterval(next, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(next, 2500);
  };

  // Helper to get card data by index with wrap-around
  const getCard = (index) => studies[(index + studies.length) % studies.length];

  if (isMobile) {
    return (
      <section className="bg-white py-20 px-4 relative overflow-hidden">
        <div className="flex justify-center items-center mb-12">
          <div className="flex flex-col items-start w-full max-w-[370px]">
            <div className="w-full h-[200px] rounded-xl mb-6 overflow-hidden relative">
              <Image
                src={getCard(active).image}
                alt={getCard(active).title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-1">
              {getCard(active).title}
            </h3>
            <div className="text-sm text-black font-medium mb-2">
              {getCard(active).stat}
            </div>
            <div className="h-20 overflow-y-auto custom-scrollbar">
              <p className="text-gray-500 text-sm pr-2">
                {getCard(active).description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-2 bg-white">
          <div className="inline-flex items-center gap-4 border border-dotted border-[#8B8DF7] rounded-4xl px-8 py-3 bg-white">
            <button
              onClick={prev}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent cursor-pointer"
              aria-label="Previous"
            >
              <span className="text-[#4285F4] text-xl">&#8592;</span>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4285F4] shadow text-white cursor-pointer"
              aria-label="Next"
            >
              <span className="text-xl">&#8594;</span>
            </button>
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #4285F4;
            border-radius: 2px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #3367d6;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #4285F4 transparent;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section
      className="bg-white py-20 px-4 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-end gap-8 mb-12 transition-all duration-500">
        {/* Left faded card */}
        <div className="flex flex-col items-start w-[370px] opacity-40">
          <div className="w-full h-[200px] rounded-xl mb-6 overflow-hidden relative">
            <Image
              src={getCard(active - 1).image}
              alt={getCard(active - 1).title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-lg font-semibold text-black mb-1">
            {getCard(active - 1).title}
          </h3>
          <div className="text-sm text-black font-medium mb-2">
            {getCard(active - 1).stat}
          </div>
          <div className="h-20 overflow-y-auto custom-scrollbar">
            <p className="text-gray-500 text-sm pr-2">
              {getCard(active - 1).description}
            </p>
          </div>
        </div>

        {/* Center active card */}
        <div className="flex flex-col items-start w-[370px]">
          <div className="w-full h-[200px] rounded-xl mb-6 overflow-hidden relative">
            <Image
              src={getCard(active).image}
              alt={getCard(active).title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-lg font-semibold text-black mb-1">
            {getCard(active).title}
          </h3>
          <div className="text-sm text-black font-medium mb-2">
            {getCard(active).stat}
          </div>
          <div className="h-20 overflow-y-auto custom-scrollbar">
            <p className="text-gray-500 text-sm pr-2">{getCard(active).description}</p>
          </div>
        </div>

        {/* Right faded card */}
        <div className="flex flex-col items-start w-[370px] opacity-40">
          <div className="w-full h-[200px] rounded-xl mb-6 overflow-hidden relative">
            <Image
              src={getCard(active + 1).image}
              alt={getCard(active + 1).title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-lg font-semibold text-black mb-1">
            {getCard(active + 1).title}
          </h3>
          <div className="text-sm text-black font-medium mb-2">
            {getCard(active + 1).stat}
          </div>
          <div className="h-20 overflow-y-auto custom-scrollbar">
            <p className="text-gray-500 text-sm pr-2">
              {getCard(active + 1).description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-2 bg-white">
        <div className="inline-flex items-center gap-4 border border-dotted border-[#8B8DF7] rounded-4xl px-8 py-3 bg-white ">
          <button
            onClick={prev}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent cursor-pointer"
            aria-label="Previous"
          >
            <span className="text-[#4285F4] text-xl">&#8592;</span>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4285F4] shadow text-white cursor-pointer"
            aria-label="Next"
          >
            <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          display: none;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4285F4;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3367d6;
        }
        .custom-scrollbar::-webkit-scrollbar-button {
          display: none;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4285F4 transparent;
        }
      `}</style>
    </section>
  );
}
