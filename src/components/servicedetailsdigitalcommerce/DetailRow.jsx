import React from "react"

export default function DetailRow({ imageSrc, imageAlt = "", imageOnLeft = false, heading, blocks = [] }) {
  return (
    <div className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12${imageOnLeft ? " mt-16" : ""}`}>
      {imageOnLeft ? (
        <>
          <div className="flex justify-start items-start relative">
            <div className="relative w-full max-w-[370px]">
              <img src={imageSrc} alt={imageAlt} className="cursor-pointer hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">{heading}</h2>
            {blocks.map((block, index) => (
              <div key={index} className="mb-3 font-[satoshi]">
                <span className="font-bold">{block.title}</span>
                <p className="text-gray-700 text-sm mt-1">{block.text}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-[satoshi]">{heading}</h2>
            {blocks.map((block, index) => (
              <div key={index} className="mb-3 font-[satoshi]">
                <span className="font-bold">{block.title}</span>
                <p className="text-gray-700 text-sm mt-1">{block.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end items-start relative">
            <div className="relative w-full max-w-[370px]">
              <img src={imageSrc} alt={imageAlt} className="cursor-pointer hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </>
      )}
    </div>
  )
}


