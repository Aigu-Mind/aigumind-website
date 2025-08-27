"use client"

import { useState } from "react"
import Image from "next/image"
import Button from "./Button"

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  const navItems = [
    { name: "Home", href: "/" },
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
      icon: (
        <Image src="/images/mega1.svg" alt="Digital Commerce Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Enterprise Application Development",
      description: "Develop scalable apps for complex business needs.",
      highlights: [
        { label: "Custom Software Development", href: "#" },
        { label: "Cloud Infrastructure Services", href: "#" },
        { label: "Security and Performance Engineering", href: "#" },
      ],
      icon: (
        <Image src="/images/mega2.svg" alt="Enterprise Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Intelligent Process Automation",
      description: "Automate workflows to save time and increase accuracy.",
      highlights: [
        { label: "Conversational AI Solutions", href: "#" },
        { label: "Workflow Automation Services", href: "#" },
        { label: "AI Integration and Strategy", href: "#" },
      ],
      icon: (
        <Image src="/images/mega3.svg" alt="Automation Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Revenue Technology Integration",
      description: "Connect revenue tools to drive growth.",
      highlights: [
        { label: "Analytics and Tracking Implementation", href: "#" },
        { label: "CRM and Customer Journey Optimization", href: "#" },
        { label: "Revenue Operations Consulting", href: "#" },
      ],
      icon: (
        <Image src="/images/mega4.svg" alt="Revenue Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Strategic Data Intelligence",
      description: "Turn data into clear, actionable insights.",
      highlights: [
        { label: "Competitive Intelligence Automation", href: "#" },
        { label: "Business Data Extraction", href: "#" },
        { label: "Data Integration and Pipeline Management", href: "#" },
      ],
      icon: (
        <Image src="/images/mega5.svg" alt="Data Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
    {
      title: "Creative Design and Brand Solutions",
      description: "Create designs that strengthen brand presence.",
      highlights: [
        { label: "Brand Identity and Visual Design", href: "#" },
        { label: "User Experience and Interface Design", href: "#" },
        { label: "Creative Advertising Design", href: "#" },
      ],
      icon: (
        <Image src="/images/mega6.svg" alt="Design Icon" width={24} height={24} className="h-6 w-6" />
      ),
    },
  ]

  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 bg-[#0B0D17]/95 backdrop-blur">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo_black.png"
            alt="Aigumind Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/10">
          <div className="flex flex-col space-y-4 pt-4">
            {/* Services dropdown trigger */}
            <div
              onClick={() => setIsServicesOpen((v) => !v)}
              aria-expanded={isServicesOpen}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-2 py-1 cursor-pointer select-none flex items-center justify-between"
            >
              <span>Services</span>
              <svg className={`h-4 w-4 text-gray-400 transition-transform ${isServicesOpen ? "rotate-90" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.22 14.78a.75.75 0 001.06 0l4.24-4.24a.75.75 0 000-1.06L8.28 5.24a.75.75 0 10-1.06 1.06L10.94 10l-3.72 3.7a.75.75 0 000 1.08z" clipRule="evenodd" /></svg>
            </div>

            {isServicesOpen && (
              <div className="rounded-xl">
                <div className="flex flex-col divide-y divide-white/10">
                  {services.map((svc) => {
                    const serviceSlug = svc.title.toLowerCase().replace(/\s+/g, '-')
                    return (
                      <div key={svc.title} className="group">
                        <button
                          type="button"
                          className="w-full flex items-start justify-between gap-3 px-2 py-3 text-left text-gray-200 hover:text-white"
                          onClick={() => setOpenIndex(openIndex === svc.title ? null : svc.title)}
                        >
                          <span className="flex items-start gap-3">
                            <span className="mt-0.5">{svc.icon}</span>
                            <span>
                              <div className="font-semibold">{svc.title}</div>
                              <div className="text-xs text-gray-400">{svc.description}</div>
                            </span>
                          </span>
                          <svg
                            className={`h-4 w-4 text-gray-400 transition-transform ${openIndex === svc.title ? "rotate-90" : "rotate-0"
                              }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.22 14.78a.75.75 0 001.06 0l4.24-4.24a.75.75 0 000-1.06L8.28 5.24a.75.75 0 10-1.06 1.06L10.94 10l-3.72 3.7a.75.75 0 000 1.08z"
                              clipRule="evenodd"
                            />
                          </svg>                        
                        </button>

                        {openIndex === svc.title && (
                          <div className="pl-11 pr-2 pb-3 mt-1 space-y-1">
                            {svc.highlights.map((h) => {
                              const hashId = h.label
                                .toLowerCase()
                                .replace(/[^a-z0-9\s-]/g, "")
                                .replace(/\s+/g, "-")
                                .trim()
                              return (
                                <a
                                  key={h.label}
                                  href={`/service-details/${serviceSlug}#${hashId}`}
                                  className="flex items-center justify-between text-sm text-gray-300 hover:text-white py-1"
                                  onClick={() => {
                                    setIsServicesOpen(false)
                                    setIsMenuOpen(false)
                                  }}
                                >
                                  <span>{h.label}</span>
                                  <svg
                                    className="h-4 w-4 text-gray-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.22 14.78a.75.75 0 001.06 0l4.24-4.24a.75.75 0 000-1.06L8.28 5.24a.75.75 0 10-1.06 1.06L10.94 10l-3.72 3.7a.75.75 0 000 1.08z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                              )
                            })}
                            <a
                              href={`/service-details/${serviceSlug}`}
                              className="block text-sm text-indigo-400 hover:text-indigo-300 pt-1"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              View service
                            </a>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* <div className="pt-4">
              <Button variant="primary" size="md" className="w-full">
                Talk to AI Expert
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  )
}
