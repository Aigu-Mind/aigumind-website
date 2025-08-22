import React from 'react'
import Footer from '@/components/Footer'
import ServiceDetailCarosal from '@/components/servicedetailsdigitalcommerce/ServiceDetailCarosal'
import HeroSectionServiceDetail from '@/components/servicedetailsdigitalcommerce/HeroSectionServiceDetail'
import DetailRow from '@/components/servicedetailsdigitalcommerce/DetailRow'

export default function ServiceDetail({ hero, rows }) {
  return (
    <>
      <HeroSectionServiceDetail
        breadcrumb={hero.breadcrumb}
        titleLines={hero.titleLines}
        description={hero.description}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
      />
      <section className="bg-white py-16 px-4">
        {rows.map((row, index) => (
          <DetailRow
            key={index}
            imageSrc={row.imageSrc}
            imageAlt={row.imageAlt}
            imageOnLeft={row.imageOnLeft}
            heading={row.heading}
            blocks={row.blocks}
          />
        ))}
      </section>
      <ServiceDetailCarosal/>
      <Footer/>
    </>
  )
}
