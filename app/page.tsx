"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import dynamic from "next/dynamic"

const WhoWeAre = dynamic(() => import("@/components/who-we-are"), { ssr: false, loading: () => <div>Loading...</div> })
const Services = dynamic(() => import("@/components/services"), { ssr: false, loading: () => <div>Loading...</div> })
const WhyChooseUs = dynamic(() => import("@/components/why-choose-us"), { ssr: false, loading: () => <div>Loading...</div> })
const LanguageIcons = dynamic(() => import("@/components/language-icons"), { ssr: false, loading: () => <div>Loading...</div> })
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: false, loading: () => <div>Loading...</div> })
const JoinUs = dynamic(() => import("@/components/join-us"), { ssr: false, loading: () => <div>Loading...</div> })
const ContactForm = dynamic(() => import("@/components/contact-form"), { ssr: false, loading: () => <div>Loading...</div> })

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
        //"testimonials",
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
    <div
      className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300"
    >
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <WhyChooseUs />
        <LanguageIcons />
        {/*<Testimonials />*/} 
        <JoinUs />
        <ContactForm />
      </main>
    </div>
  )
}
