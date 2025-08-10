"use client"

import { useEffect, useState } from "react"
import Head from "next/head"
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
         //"testimonials",
        "why-choose-us",
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
    <>
      <Head>
        <title>Mastery Sound Studios | Professional Music Recording</title>
        <meta
          name="description"
          content="Mastery Sound Studios offers world-class music recording, mixing, and mastering services for artists, bands, and creators."
        />
        <meta
          name="keywords"
          content="Mastery Sound Studios, music recording, mixing, mastering, sound engineering, professional studio"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mastery Sound Studios" />
        <link rel="canonical" href="https://masterysoundstudios.vercel.app" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Mastery Sound Studios" />
        <meta
          property="og:description"
          content="Professional music recording, mixing, and mastering services."
        />
        <meta property="og:image" content="https://masterysoundstudios.vercel.app/og-image.jpg" />
        <meta property="og:url" content="https://masterysoundstudios.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Structured Data for Google */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicRecording",
            name: "Mastery Sound Studios",
            description: "Professional music recording, mixing, and mastering services.",
            url: "https://masterysoundstudios.vercel.app",
            publisher: {
              "@type": "Organization",
              name: "Mastery Sound Studios"
            }
          })
        }} />
      </Head>

      <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <WhoWeAre />
          <Services />
          <WhyChooseUs />
          <LanguageIcons />
          <JoinUs />
          <ContactForm />
        </main>
      </div>
    </>
  )
}
