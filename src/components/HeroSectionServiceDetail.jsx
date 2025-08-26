import React, { useState } from "react"
import Header from "./Header.jsx"
import Button from "./Button.jsx"

export default function HeroSectionServiceDetail({ breadcrumb, titleLines = [], description, imageSrc, imageAlt = "" }) {
  const [showMore, setShowMore] = useState(false);

  const shortDesc = description && description.length > 150 && !showMore
    ? description.slice(0, 150) + "..."
    : description;

  return (
    <>
      <section className="relative desktop:min-h-[85vh] laptop:min-h-[95vh] md:min-h-[110vh] sm:min-h-[70vh] overflow-visible pt-[40px]">
        <div
          className="absolute inset-0 bg-gradient-radial from-[#122941] to-[#060D14]"
          style={{
            background: "radial-gradient(ellipse at center, #122941 0%, #060D14 100%)",
          }}
        />
        <Header />
        <div className="relative z-10 max-w-7xl mx-auto desktop:pt-40 laptop:pt-32 md:pt-28 sm:pt-20 px-12 flex flex-col md:flex-row gap-12 pb-2">
          <div className="flex-1 ">
            <div className="breadcrumb-style mb-2 mt-8 laptop:mt-6 md:mt-4 sm:mt-3 laptop:text-xl md:text-lg sm:text-base">
              {breadcrumb}
            </div>
            <h1 className="heading-style text-white mb-8 laptop:mb-6 md:mb-4 sm:mb-3 leading-tight text-[40px] laptop:text-[36px] md:text-[32px] sm:text-[28px] font-bold">
              {titleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < titleLines.length - 1 && (
                    <br className="laptop:block md:block sm:hidden" />
                  )}
                </span>
              ))}
            </h1>
            <Button>Talk to AI Expert</Button>
          </div>
          <div className="right-text-style flex-1 leading-relaxed text-lg laptop:text-base md:text-base sm:text-sm">
            {/* Mobile: show short description with Load More */}
            <span className="block sm:hidden">
              {shortDesc}
              {description.length > 150 && !showMore && (
                <button
                  className="ml-2 text-[#4285F4] underline text-sm"
                  onClick={() => setShowMore(true)}
                >
                  Show more
                </button>
              )}
              {showMore && (
                <button
                  className="ml-2 text-[#4285F4] underline text-sm"
                  onClick={() => setShowMore(false)}
                >
                  Show less
                </button>
              )}
            </span>
            {/* Desktop: show full description */}
            <span className="hidden sm:block">
              {description}
            </span>
          </div>
        </div>
      </section>

      <div className="relative desktop:-mt-75 laptop:-mt-36 md:-mt-70 sm:-mt-8 z-20 w-full max-w-7xl mx-auto">
        <img src={imageSrc} alt={imageAlt} className="w-full rounded-2xl laptop:rounded-xl md:rounded-lg sm:rounded-md" />
      </div>
    </>
  )
}
