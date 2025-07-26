"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "service", href: "#services" },
    { name: "why mastery works", href: "#why-choose-us" },
    { name: "our projects", href: "#languages" },
    //{ name: "see what our clients say", href: "#testimonials" },
    { name: "hiring", href: "#join-us" },
    { name: "contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            <img src="/logo.png" alt="Logo" className="w-8 h-8 sm:w-9 sm:h-9" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              Mastery Sound Studios
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-full ${
                  item.name === "contact"
                    ? "bg-black text-white hover:bg-gray-900"
                    : activeSection === item.href.slice(1)
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-3 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-2 text-base font-medium rounded-full transition-all ${
                    item.name === "contact"
                      ? "bg-black text-white hover:bg-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
