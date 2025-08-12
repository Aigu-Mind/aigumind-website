"use client"
import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    stars: 5,
    text: "Abcssdufsdijsd ifhsilsd joji asdjio asciajck as. Hill sold ham men made lose case. Views abode law heard jokes too.",
    name: "Chris Evans",
    location: "Client from USA",
  },
  {
    stars: 5,
    text: "Hill sold ham men made lose case. Views abode law heard jokes too.",
    name: "Andrew Chris",
    location: "Client from Uganda",
  },
  {
    stars: 5,
    text: "Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.",
    name: "Chris Evans",
    location: "Client from USA",
  },
];

export default function OurClients() {
  const [active, setActive] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const getTestimonialIndex = (offset) => {
    return (active + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section className="bg-[#F8FAFF] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          What Our Clients<br />Say About Us
        </h2>
        <div className="flex justify-center items-center gap-6 mb-12">
          {/* Left faded card */}
          <TestimonialCard 
            testimonial={testimonials[getTestimonialIndex(-1)]}
            isActive={false}
          />
          {/* Center active card */}
          <TestimonialCard 
            testimonial={testimonials[active]}
            isActive={true}
          />
          {/* Right faded card */}
          <TestimonialCard 
            testimonial={testimonials[getTestimonialIndex(1)]}
            isActive={false}
          />
        </div>
        {/* Navigation buttons group */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 border-dotted border-[#4B6A88] rounded-full px-4 py-2 bg-white">
            {/* Left arrow button */}
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              aria-label="Previous"
            >
              <span className="text-blue-500 text-xl">&#8592;</span>
            </button>
            {/* Right arrow button */}
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4285F4] shadow text-white cursor-pointer hover:bg-blue-600 transition-colors duration-200"
              aria-label="Next"
            >
              <span className="text-xl">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}