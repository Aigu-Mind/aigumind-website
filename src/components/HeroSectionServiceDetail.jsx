import React from "react";
import Header from "./Header";
import Button from "./Button";
import Image from "next/image";

export default function HeroSectionServiceDetail() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-radial from-[#122941] to-[#060D14]"
        style={{
          background:
            "radial-gradient(ellipse at center, #122941 0%, #060D14 100%)",
        }}
      />
      {/* Header - positioned absolutely over the gradient */}
      <Header />
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-32 px-6 flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <div className="flex-1">
          <div className="text-[#8B8DF7] text-base font-medium mb-2 mt-8 font-[Satoshi]">
            Services / Digital Commerce Solutions
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight font-[Satoshi-Bold]">
            Elevate Your Digital
            <br />
            Commerce with End-to-End
            <br />
            Revenue Optimization
          </h1>
          <Button>Talk to AI Expert</Button>
        </div>
        {/* Right Side */}
        <div className="flex-1 text-gray-300 text-sm md:text-base leading-relaxed mb-2 mt-8 font-[Satoshi]">
          Transform your online store into a high-performing sales engine with
          our Digital Commerce Solutions. We go beyond basic platform
          customization to deliver comprehensive revenue optimization tailored
          for high-growth businesses.
          <br />
          <br />
          Leveraging our deep expertise in Shopify, WooCommerce, and
          BigCommerce, we provide end-to-end commerce transformation—from
          checkout optimization and conversion enhancement to scalable merchant
          solutions.
          <br />
          <br />
          Whether you're looking to streamline operations, maximize conversions,
          or future-proof your eCommerce strategy, our solutions are designed to
          drive sustainable growth and superior customer experiences. Partner
          with us to unlock the full potential of your digital storefront.
        </div>
        {/* Absolute Image Section */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20 w-[790px] max-w-full">
          <Image
            src="/images/service1Hero.png"
            alt="Digital Commerce"
            width={790}
            height={232}
            className="w-full rounded-2xl shadow-lg"
            style={{
              borderBottom: "4px solid #4285F4",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
