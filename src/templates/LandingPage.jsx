import React from 'react'
import HeroSection from '../components/HeroSection'

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <section className="bg-white py-16 md:py-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">What we Offer?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            End-to-end AI, automation, and digital solutions tailored to grow your business.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto" />
        </div>
      </section>
    </div>
  )
}
