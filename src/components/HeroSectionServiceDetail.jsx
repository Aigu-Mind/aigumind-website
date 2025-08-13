import Header from "./Header.jsx"
import Button from "./Button.jsx"

export default function HeroSectionServiceDetail() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-visible">
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
        <div className="relative z-10 max-w-7xl mx-auto pt-32 px-6 flex flex-col md:flex-row gap-12 pb-8">
          {/* Left Side */}
          <div className="flex-1">
            <div className="text-[#8B8DF7] text-base font-medium mb-2 mt-8 font-[Satoshi]">
              Services / Digital Commerce Solutions
            </div>
            <h1 className="text-[40px] font-bold text-white mb-6 leading-tight font-[Satoshi-Bold]">
              Elevate Your Digital
              <br />
              Commerce with End-to-End
              <br />
              Revenue Optimization
            </h1>
            <Button>Talk to AI Expert</Button>
          </div>
          {/* Right Side */}
          <div className="flex-1 text-gray-300 text-sm md:text-base leading-relaxed mt-10 font-[Satoshi]">
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

      <div className="relative -mt-75 z-20 w-full max-w-7xl mx-auto">
        <img src="/images/service1Hero.png" alt="Digital Commerce" className="w-full rounded-2xl" />
      </div>
    </>
  )
}
