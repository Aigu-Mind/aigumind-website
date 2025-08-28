import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      <Header />
      <section className="relative !bg-[#F3F7FF63] pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-3xl md:text-5xl font-bold mb-4 text-gradient-intelligence">About Aigumind</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We help companies build intelligent, scalable products by combining design, engineering, and data to deliver outcomes that matter.Ready to transform your business with AI-powered solutions? Let's discuss how we can help you achieve your goals.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#BC91F6] to-[#5087ED] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-36 md:py-36">
        {/* Hero */}
        
        

        {/* Values / Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="text-3xl font-bold">10+ yrs</div>
            <div className="text-gray-600">Combined leadership experience</div>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="text-3xl font-bold">50+ </div>
            <div className="text-gray-600">Projects delivered</div>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-gray-600">Global collaboration</div>
          </div>
        </section>

        {/* What we do */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 md:mb-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">What we do</h2>
            <p className="text-gray-700 mb-4">
              From commerce to enterprise apps, we design and build solutions that scale. Our teams
              integrate AI where it drives real value: automation, analytics, and better user
              experiences.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>AI-driven automation and integration</li>
              <li>Cloud-native engineering and performance</li>
              <li>UX/UI design and brand systems</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <Image src="/images/enterprisemain.png" alt="Team at work" width={900} height={600} className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* How we work */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <Image src="/images/intelligentmain.png" alt="Process" width={900} height={600} className="w-full h-auto object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">How we work</h2>
            <p className="text-gray-700 mb-4">
              We partner closely with clients in agile sprints, validating early and often. Our
              north star is measurable outcomes: conversion lift, cost savings, and better customer
              experiences.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Discovery-first, ROI-focused engagements</li>
              <li>Transparent roadmaps and delivery</li>
              <li>Security, reliability, and scalability by default</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


