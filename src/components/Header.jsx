"use client"

import { useState, useEffect } from "react"
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="bg-transparent">{isMobile ? <MobileHeader /> : <DesktopHeader />}</div>
    </header>
  )
}
