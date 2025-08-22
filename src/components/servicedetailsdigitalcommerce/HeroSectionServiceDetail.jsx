import Header from "../Header.jsx"
import Button from "../Button.jsx"

export default function HeroSectionServiceDetail({ breadcrumb, titleLines = [], description, imageSrc, imageAlt = "" }) {
  return (
    <>
      <section className="relative desktop:min-h-[85vh] laptop:min-h-[95vh] md:min-h-[110vh] sm:min-h-[70vh] overflow-visible">
        <div
          className="absolute inset-0 bg-gradient-radial from-[#122941] to-[#060D14]"
          style={{
            background: "radial-gradient(ellipse at center, #122941 0%, #060D14 100%)",
          }}
        />
        <Header />
        <div className="relative z-10 max-w-7xl mx-auto desktop:pt-32 laptop:pt-24 md:pt-20 sm:pt-16 px-12 flex flex-col md:flex-row gap-12 pb-8">
          <div className="flex-1">
            <div className="breadcrumb-style mb-2 mt-8 laptop:mt-6 md:mt-4 sm:mt-3 laptop:text-xl md:text-lg sm:text-base">
              {breadcrumb}
            </div>
            <h1 className="heading-style text-white mb-6 laptop:mb-4 md:mb-3 sm:mb-2 leading-tight laptop:text-3xl md:text-2xl sm:text-xl">
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
          <div className="right-text-style flex-1 leading-relaxed laptop:text-sm md:text-sm sm:text-xs">
            {description}
          </div>
        </div>
      </section>

      <div className="relative desktop:-mt-75 laptop:-mt-36 md:-mt-70 sm:-mt-8 z-20 w-full max-w-7xl mx-auto">
        <img src={imageSrc} alt={imageAlt} className="w-full rounded-2xl laptop:rounded-xl md:rounded-lg sm:rounded-md" />
      </div>
    </>
  )
}
