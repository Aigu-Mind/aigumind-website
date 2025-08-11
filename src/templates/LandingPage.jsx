import HeroSection from "../components/HeroSection"
import OfferCard from "../components/OfferCard"

export default function LandingPage() {
  const offers = [
    {
      title: "Digital Commerce Solutions",
      description:
        "Our Digital Commerce Solutions go beyond basic scripts—delivering full-fledge optimization across Shopify, WooCommerce, and BigCommerce. From checkout enhancements to scalable merchant systems, we help high-growth brands streamline operations, boost conversions, and future-proof their eCommerce strategy.",
      features: ["Commerce Platform Engineering", "Commerce Infrastructure"],
      imageSrc: "/images/offer1.png",
    },
    {
      title: "Enterprise Application Development",
      description:
        "Our Enterprise Application Development services cover everything from custom software and internal tools to cloud infrastructure on AWS/GCP. We specialize in serverless architecture, database optimization, and robust security engineering—ensuring your systems are scalable, compliant, and built for performance.",
      features: [
        "Custom Software Development",
        "Cloud Infrastructure Services",
        "Security and Performance Engineering",
      ],
      imageSrc: "/images/offer2.png",
    },
    {
      title: "Intelligent Process Automation",
      description:
        "We build custom AI solutions—like chatbots, workflow automation, and decision-support tools—that cut costs, boost efficiency, and integrate seamlessly into your business. Using platforms like n8n, Make.com, and advanced LLMs, we turn manual processes into intelligent, self-running systems.",
      features: ["Conversational AI Solutions", "Workflow Automation Services", "AI Integration and Strategy"],
      imageSrc: "/images/offer3.png",
    },
    {
      title: "Revenue Technology Integration",
      description:
        "We help businesses unlock smarter marketing through expert analytics setup (GA4, GTM, server-side tracking), CRM optimization with HubSpot and Zoho, and revenue operations consulting that aligns marketing, sales, and success teams for scalable growth.",
      features: [
        "Analytics and Tracking Implementation",
        "CRM and Customer Journey Optimization",
        "Revenue Operations Consulting",
      ],
      imageSrc: "/images/offer4.png",
    },
    {
      title: "Strategic Data Intelligence",
      description:
        "We automate competitor tracking, extract critical data from varied sources, and build clean, connected data pipelines, giving your business the insights needed for confident, strategic planning and sustained growth.",
      features: [
        "Competitive Intelligence Automation",
        "Business Data Extraction",
        "Data Integration and Pipeline Management",
      ],
      imageSrc: "/images/offer5.png",
    },
    {
      title: "Creative Design and Brand Solutions",
      description:
        "We craft brand identities, UI/UX designs, and digital assets that boost aesthetics with strategic insights. From websites to marketing visuals, our solutions elevate your brand presence, enhance user experiences, and fuel business success across every touchpoint.",
      features: [
        "Brand Identity and Visual Design",
        "User Experience and Interface Design",
        "Creative Advertising Design",
      ],
      imageSrc: "/images/offer6.png",
    },
  ]

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

      {/* Offerings Section */}
      <section className="bg-white">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            description={offer.description}
            features={offer.features}
            imageSrc={offer.imageSrc}
            isImageOnLeft={index % 2 == 0} // Alternates true/false for image on left
          />
        ))}
      </section>
    </div>
  )
}
