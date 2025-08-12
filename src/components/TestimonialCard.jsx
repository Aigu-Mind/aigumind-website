import React from "react";

const TestimonialCard = ({ testimonial, isActive, className = "" }) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 w-80 min-h-[200px] shadow transition-all duration-500 ease-in-out ${
        isActive 
          ? "opacity-100 shadow-lg scale-100" 
          : "opacity-40 shadow scale-95"
      } ${className}`}
    >
      <div className={`mb-2 ${isActive ? "text-blue-500" : "text-blue-400"}`}>
        {"★".repeat(testimonial.stars)}
      </div>
      <p className={`text-sm mb-4 ${
        isActive ? "text-gray-700" : "text-gray-600"
      }`}>
        {testimonial.text}
      </p>
      <div className={`text-xs ${
        isActive ? "text-gray-700 font-semibold" : "text-gray-500"
      }`}>
        {testimonial.name}<br />
        <span className={isActive ? "font-normal" : ""}>
          {testimonial.location}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
