'use client'
import Image from "next/image"
import Header from "./Header"
import Button from "./Button"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const clientLogos = [
    "/images/c1.png",
    "/images/c2.png",
    "/images/c3.png",
    "/images/c4.png",
    "/images/c5.png",
    "/images/c6.png",
    "/images/c7.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length)
    }, 3000) 

    return () => clearInterval(interval)
  }, [clientLogos.length])

  const extendedLogos = [...clientLogos, ...clientLogos.slice(0, 4)]

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] xl:min-h-[80vh] overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-radial from-[#122941] to-[#060D14]"
        style={{
          background: "radial-gradient(ellipse at center, #122941 0%, #060D14 100%)",
        }}
      />
      {/* Header - positioned absolutely over the gradient */}
      <Header /> 
      {/* Main content area */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] lg:min-h-[85vh] xl:min-h-[80vh] px-4 pt-20 lg:pt-16 xl:pt-12 pb-12 lg:pb-8 xl:pb-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4 lg:mb-6 xl:mb-8">
            Plugging <span className="text-gradient-intelligence">Intelligence</span> Into Your Business
          </h1>

          {/* Description */}
          <p className="text-[#C4C4C4] text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-6 lg:mb-8 xl:mb-10 max-w-2xl mx-auto text-balance">
            Empower your business with AI bots, intelligent automation, and scalable digital infrastructure. From
            eCommerce to enterprise tools — we design systems that think, adapt, and grow with you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 lg:mb-12 xl:mb-16">
            <Button variant="primary" size="lg">
              Talk to AI Expert
            </Button>
            <Button variant="secondary" size="lg">
              View Services
            </Button>
          </div>

          {/* Companies Section */}
          <p className="text-[#C4C4C4] text-sm sm:text-base mb-6 lg:mb-8">Trusted by 200+ Clients</p>
          
          {/* Mobile Carousel - Hidden on larger screens */}
          <div className="md:hidden w-full max-w-md mx-auto mb-6">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / 8}%)`,
                  width: `${(extendedLogos.length / 8) * 100}%`
                }}
              >
                {extendedLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 w-1/4 px-1">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`Client Logo ${(index % clientLogos.length) + 1}`}
                      width={100}
                      height={40}
                      className="object-contain h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid - Hidden on mobile/tablet */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-6 max-w-4xl mx-auto">
            {clientLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo || "/placeholder.svg"}
                alt={`Client Logo ${index + 1}`}
                width={100}
                height={40}
                className="object-contain h-6 sm:h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
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
          <Image src="/images/polygon_3.png" alt="" width={600} height={200} className="object-contain" priority />
        </div>
      </div>
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 z-5" />
    </section>
  )
}
