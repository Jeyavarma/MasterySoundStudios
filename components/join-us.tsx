"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Mic, Headphones, Languages } from "lucide-react"

export default function JoinUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const roles = [
    {
      icon: Mic,
      title: "Voice Artists",
      description: "Native speakers with professional voice acting experience",
    },
    {
      icon: Headphones,
      title: "Audio Engineers",
      description: "Technical experts in audio mixing and post-production",
    },
    {
      icon: Languages,
      title: "Translators",
      description: "Linguistic professionals with cultural expertise",
    },
  ]

  return (
    <section id="join-us" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're seeking talented voice artists, audio engineers, and translators to join our growing team of creative
            professionals.
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Apply Now
            <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <role.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{role.title}</h3>

              <p className="text-gray-600 leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Remote</div>
                <div className="text-gray-600">Work from anywhere</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Flexible</div>
                <div className="text-gray-600">Choose your hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Growth</div>
                <div className="text-gray-600">Career development</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
