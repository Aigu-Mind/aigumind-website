"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Button from "./Button"

export default function DesktopHeader() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const servicesMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ]

  const services = [
    {
      title: "Digital Commerce Solutions",
      description: "Build seamless platforms that boost online sales.",
      highlights: [
        { label: "Commerce Platform Engineering", href: "#" },
        { label: "Commerce Infrastructure", href: "#" },
      ],
      image: "/images/servicedetail1.png",
      icon: (
        <Image src="/images/mega1.svg" alt="Digital Commerce Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Enterprise Application Development",
      description: "Develop scalable apps for complex business needs.",
      highlights: [
        { label: "Cloud-Native Systems", href: "#" },
        { label: "Legacy Modernization", href: "#" },
      ],
      image: "/images/enterprise1.png",
      icon: (
        <Image src="/images/mega2.svg" alt="Enterprise Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Intelligent Process Automation",
      description: "Automate workflows to save time and increase accuracy.",
      highlights: [
        { label: "RPA & Orchestration", href: "#" },
        { label: "AI Agents", href: "#" },
      ],
      image: "/images/intelligent1.png",
      icon: (
        <Image src="/images/mega3.svg" alt="Automation Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Revenue Technology Integration",
      description: "Connect revenue tools to drive growth.",
      highlights: [
        { label: "CRM & Billing", href: "#" },
        { label: "Attribution & Analytics", href: "#" },
      ],
      image: "/images/revenue3.png",
      icon: (
        <Image src="/images/mega4.svg" alt="Revenue Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Strategic Data Intelligence",
      description: "Turn data into clear, actionable insights.",
      highlights: [
        { label: "Data Platforms", href: "#" },
        { label: "ML & Forecasting", href: "#" },
      ],
      image: "/images/data4.png",
      icon: (
        <Image src="/images/mega5.svg" alt="Data Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Creative Design and Brand Solutions",
      description: "Create designs that strengthen brand presence.",
      highlights: [
        { label: "Brand Systems", href: "#" },
        { label: "Product Design", href: "#" },
      ],
      image: "/images/design2.png",
      icon: (
        <Image src="/images/mega6.svg" alt="Design Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
  ]

  return (
    <nav className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo_black.png"
            alt="Aigumind Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Services with Mega Menu */}
          <div className="relative" ref={servicesMenuRef}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setIsOpen((v) => !v)
              }}
              aria-expanded={isOpen}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium inline-flex items-center"
            >
              Services
              <svg className={`ml-1 h-4 w-4 transition-colors ${isOpen ? "text-white" : "text-gray-400"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd"/></svg>
            </a>

            {/* Dropdown Panel */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[980px] rounded-2xl bg-[#F4F6FB] shadow-2xl ring-1 ring-black/5 transition-opacity duration-200 z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
              <div className="grid grid-cols-12 gap-0">
                {/* Left List */}
                <div className="col-span-6 p-6 pr-4">
                  <div className="space-y-2">
                    {services.map((svc, idx) => {
                      const isActive = idx === activeIndex
                      return (
                        <button
                          key={svc.title}
                          onMouseEnter={() => setActiveIndex(idx)}
                          className={`w-full text-left rounded-xl px-4 py-3 flex items-start justify-between cursor-pointer transition-all ${isActive ? "bg-white shadow-sm" : "hover:bg-white/60"}`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5">{svc.icon}</span>
                            <div>
                              <div className={`font-semibold ${isActive ? "text-gray-900" : "text-gray-800"}`}>{svc.title}</div>
                              <div className="text-sm text-gray-500">{svc.description}</div>
                            </div>
                          </div>
                          <svg className={`h-5 w-5 mt-1 ${isActive ? "text-indigo-500" : "text-gray-400"}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.22 14.78a.75.75 0 001.06 0l4.24-4.24a.75.75 0 000-1.06L8.28 5.24a.75.75 0 10-1.06 1.06L10.94 10l-3.72 3.7a.75.75 0 000 1.08z" clipRule="evenodd"/></svg>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="col-span-1 flex"><span className="w-px bg-gray-200 my-6 mx-auto" /></div>

                {/* Right Details */}
                <div className="col-span-5 p-6 pl-2">
                  <div className="text-xl font-semibold text-gray-900">{services[activeIndex].title}</div>
                  <div className="mt-2 space-y-2">
                    {services[activeIndex].highlights.map((h) => (
                      <a key={h.label} href={h.href} className="flex items-center justify-between py-2 text-gray-700 hover:text-gray-900">
                        <span>{h.label}</span>
                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.22 14.78a.75.75 0 001.06 0l4.24-4.24a.75.75 0 000-1.06L8.28 5.24a.75.75 0 10-1.06 1.06L10.94 10l-3.72 3.7a.75.75 0 000 1.08z" clipRule="evenodd"/></svg>
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl">
                    <Image src={services[activeIndex].image} alt={services[activeIndex].title} width={520} height={320} className="w-full h-44 object-cover grayscale rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button variant="primary" size="md">
            Talk to AI Expert
          </Button>
        </div>
      </div>
    </nav>
  )
}
