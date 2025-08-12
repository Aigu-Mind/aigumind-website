

import Image from "next/image";

export default function Footer() {
    const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <footer className="bg-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo and navigation */}
        <div className="w-full flex items-center justify-between mb-2 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/footer-logo.png"
              alt="AIGUMIND Logo"
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
              className="text-black hover:text-gray-400 transition-colors duration-300 font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
          {/* Social icons */}
          <div className="flex gap-4 text-[#8B8DF7]">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        {/* Purple line */}
        <div className="w-full">
          <div className="h-[2px] w-full bg-[#C6B8F7] opacity-60 rounded"></div>
        </div>
        {/* Copyright */}
        <div className="mt-2 text-xs text-gray-400 text-center w-full">
          Copyright © Brands.io creative
        </div>
      </div>
    </footer>
  );
}
