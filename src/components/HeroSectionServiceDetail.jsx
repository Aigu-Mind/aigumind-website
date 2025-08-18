import Header from "./Header.jsx"
import Button from "./Button.jsx"

export default function HeroSectionServiceDetail() {
  return (
    <>
      <section className="relative desktop:min-h-[85vh] laptop:min-h-[95vh] md:min-h-[110vh] sm:min-h-[70vh] overflow-visible">
        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 bg-gradient-radial from-[#122941] to-[#060D14]"
          style={{
            background: "radial-gradient(ellipse at center, #122941 0%, #060D14 100%)",
          }}
        />
        {/* Header - positioned absolutely over the gradient */}
        <Header />
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto desktop:pt-32 laptop:pt-24 md:pt-20 sm:pt-16 px-12 flex flex-col md:flex-row gap-12 pb-8">
          {/* Left Side */}
          <div className="flex-1">
            <div className="breadcrumb-style mb-2 mt-8 laptop:mt-6 md:mt-4 sm:mt-3 laptop:text-xl md:text-lg sm:text-base">
              Services / Digital Commerce Solutions
            </div>
            <h1 className="heading-style text-white mb-6 laptop:mb-4 md:mb-3 sm:mb-2 leading-tight laptop:text-3xl md:text-2xl sm:text-xl">
              Elevate Your Digital
              <br className="laptop:block md:block sm:hidden" />
              Commerce with End-to-End
              <br className="laptop:block md:block sm:hidden" />
              Revenue Optimization
            </h1>
            <Button>Talk to AI Expert</Button>
          </div>
          {/* Right Side */}
          <div className="right-text-style flex-1 leading-relaxed laptop:text-sm md:text-sm sm:text-xs">
            Transform your online store into a high-performing sales engine with our Digital Commerce Solutions. We go
            beyond basic platform customization to deliver comprehensive revenue optimization tailored for high-growth
            businesses.
            Leveraging our deep expertise in Shopify, WooCommerce, and BigCommerce, we provide end-to-end commerce
            transformation—from checkout optimization and conversion enhancement to scalable merchant solutions.
            Whether you're looking to streamline operations, maximize conversions, or future-proof your eCommerce
            strategy, our solutions are designed to drive sustainable growth and superior customer experiences. Partner
            with us to unlock the full potential of your digital storefront.
          </div>
        </div>
      </section>

      <div className="relative desktop:-mt-75 laptop:-mt-36 md:-mt-70 sm:-mt-8 z-20 w-full max-w-7xl mx-auto">
        <img src="/images/service1Hero.png" alt="Digital Commerce" className="w-full rounded-2xl laptop:rounded-xl md:rounded-lg sm:rounded-md" />
      </div>
    </>
  )
}
