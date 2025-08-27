"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import AboutPage from "@/app/about/page"

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const isLegalPage = pathname === "/privacy-policy" || pathname === "/terms-of-service" || pathname === "/about"

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className={`${isLegalPage ? "bg-black text-white" : "bg-transparent"}`}>{isMobile ? <MobileHeader /> : <DesktopHeader />}</div>
    </header>
  )
}
