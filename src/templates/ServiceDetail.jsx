"use client"
import React, { useEffect } from 'react'
import Footer from '@/components/Footer'
import ServiceDetailCarosal from '@/components/ServiceDetailCarosal'
import DetailRow from '@/components/DetailRow'
import HeroSectionServiceDetail from '@/components/HeroSectionServiceDetail'

export default function ServiceDetail({ hero, rows }) {
  useEffect(() => {
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
    const smoothScrollTo = (targetY, duration = 900) => {
      const startY = window.pageYOffset
      const distance = targetY - startY
      let startTime = null

      const step = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const eased = easeInOutQuad(progress)
        window.scrollTo(0, startY + distance * eased)
        if (timeElapsed < duration) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const scrollToHash = () => {
      if (typeof window === 'undefined') return
      const hash = window.location.hash?.replace('#', '')
      if (!hash) return
      const el = document.getElementById(hash)
      if (el) {
        const headerOffset = 80
        const elementTop = el.getBoundingClientRect().top + window.pageYOffset
        const targetY = Math.max(elementTop - headerOffset, 0)
        smoothScrollTo(targetY)
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
