import Image from "next/image"
import Button from "./Button"

export default function DesktopHeader() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
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
