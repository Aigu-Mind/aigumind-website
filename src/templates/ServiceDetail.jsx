"use client"
import React, { useEffect } from 'react'
import Footer from '@/components/Footer'
import ServiceDetailCarosal from '@/components/ServiceDetailCarosal'
import DetailRow from '@/components/DetailRow'
import HeroSectionServiceDetail from '@/components/HeroSectionServiceDetail'

export default function ServiceDetail({ hero, rows }) {
  useEffect(() => {
    const scrollToHash = () => {
      if (typeof window === 'undefined') return
      const hash = window.location.hash?.replace('#', '')
      if (!hash) return
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    // Scroll on initial mount
    const timer = setTimeout(scrollToHash, 0)

    // Scroll on hash change (in-page navigation)
    window.addEventListener('hashchange', scrollToHash)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  const toId = (heading) => heading.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim()
  return (
    <>
      <HeroSectionServiceDetail
        breadcrumb={hero.breadcrumb}
        titleLines={hero.titleLines}
        description={hero.description}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
      />
      <section className={`bg-white py-16 px-4 ${rows.length > 1 ? 'space-y-12' : ''}`}>
        {rows.map((row, index) => (
          <DetailRow
            key={index}
            id={toId(row.heading)}
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
