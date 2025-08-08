import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Radial Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-[#122941] to-[#060D14]"
        style={{
          background: 'radial-gradient(ellipse at center, #122941 0%, #060D14 100%)'
        }}
      />
      
      {/* Header placeholder - will be called here later */}
      <div className="relative z-20">
        {/* Header component will go here */}
      </div>
      
      {/* Main content area */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Content will go here later */}
        </div>
      </div>
      
      {/* Polygon Images - Layered at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        {/* Polygon 1 - Largest, bottom layer */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/polygon_1.png"
            alt=""
            width={1200}
            height={400}
            className="object-contain opacity-80"
            priority
          />
        </div>
        
        {/* Polygon 2 - Middle layer */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
          <Image
            src="/images/polygon_2.png"
            alt=""
            width={900}
            height={300}
            className="object-contain opacity-90"
            priority
          />
        </div>
        
        {/* Polygon 3 - Top layer, smallest */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src="/images/polygon_3.png"
            alt=""
            width={600}
            height={200}
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 z-5" />
    </section>
  )
}
