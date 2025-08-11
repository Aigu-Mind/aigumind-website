import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export default function OfferCard({ title, description, features, imageSrc, isImageOnLeft }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-12 md:py-20 px-4 max-w-7xl mx-auto ${
        isImageOnLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={500}
          height={350}
          className="object-contain w-full h-auto max-w-md md:max-w-full"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{title}</h3>
        <p className="text-base md:text-lg text-[#6E6E6E] mb-8 leading-relaxed">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 border border-gray-200 rounded-lg p-2 bg-white">
              <Sparkles className="h-5 w-5 text-gradient-intelligence" />
              <p className="text-[#6E6E6E]">{feature}</p> 
            </div>
          ))}
        </div>
        <a href="#" className="inline-flex items-center text-blue-500 font-medium hover:underline group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}
