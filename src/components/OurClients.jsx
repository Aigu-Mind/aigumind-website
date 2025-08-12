"use client"
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    stars: 5,
    text: "Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.",
    name: "Chris Evans",
    location: "Client from USA",
  },
  {
    stars: 5,
    text: "Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.",
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

  const prev = () => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F8FAFF] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          What Our Clients<br />Say About Us
        </h2>
        <div className="flex justify-center items-center gap-6 mb-12">
          {/* Left faded card */}
          <div className="bg-white rounded-xl p-6 w-80 opacity-40 shadow transition">
            <div className="text-blue-400 mb-2">{"★".repeat(testimonials[(active + testimonials.length - 1) % testimonials.length].stars)}</div>
            <p className="text-gray-600 text-sm mb-4">
              {testimonials[(active + testimonials.length - 1) % testimonials.length].text}
            </p>
            <div className="text-gray-500 text-xs">
              {testimonials[(active + testimonials.length - 1) % testimonials.length].name}<br />
              {testimonials[(active + testimonials.length - 1) % testimonials.length].location}
            </div>
          </div>
          {/* Center active card */}
          <div className="bg-white rounded-xl p-6 w-80 shadow-lg transition">
            <div className="text-blue-500 mb-2">{"★".repeat(testimonials[active].stars)}</div>
            <p className="text-gray-700 text-sm mb-4">
              {testimonials[active].text}
            </p>
            <div className="text-gray-700 text-xs font-semibold">
              {testimonials[active].name}<br />
              <span className="font-normal">{testimonials[active].location}</span>
            </div>
          </div>
          {/* Right faded card */}
          <div className="bg-white rounded-xl p-6 w-80 opacity-40 shadow transition">
            <div className="text-blue-400 mb-2">{"★".repeat(testimonials[(active + 1) % testimonials.length].stars)}</div>
            <p className="text-gray-600 text-sm mb-4">
              {testimonials[(active + 1) % testimonials.length].text}
            </p>
            <div className="text-gray-500 text-xs">
              {testimonials[(active + 1) % testimonials.length].name}<br />
              {testimonials[(active + 1) % testimonials.length].location}
            </div>
          </div>
        </div>
        {/* Navigation buttons group */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 border-dotted border-[#4B6A88] rounded-xl px-6 py-3 bg-white">
            {/* Left arrow button */}
            <button
              onClick={prev}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent cursor-pointer"
              aria-label="Previous"
            >
              <span className="text-blue-500 text-xl">&#8592;</span>
            </button>
            {/* Right arrow button */}
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4285F4] shadow text-white cursor-pointer"
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