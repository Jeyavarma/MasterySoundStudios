"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import WhoWeAre from "@/components/who-we-are"
import Services from "@/components/services"
import LanguageIcons from "@/components/language-icons"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import JoinUs from "@/components/join-us"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "who-we-are",
        "services",
        "languages",
        "why-choose-us",
        "testimonials",
        "join-us",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <WhoWeAre />
        <Services /> 
        <WhyChooseUs />
        <LanguageIcons />
        <Testimonials />
        <JoinUs />
        <ContactForm />
      </main>
    </div>
  )
}
