"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function WhoWeAre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="who-we-are"
      className="py-20 pt-36 bg-transparent" // ✅ Inherit global background

      // Optional: Uncomment below to add soft separator between sections
      // className="py-20 pt-36 bg-transparent border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Who We Are
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We are a premier AV post-production company specializing in voice localization, dubbing, and audio mixing
              services. Our team of native speakers and audio engineers brings stories to life across cultures and
              languages.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              With cutting-edge technology and a passion for storytelling, we ensure that every voice resonates
              authentically with its intended audience, preserving the emotional depth and cultural nuances of the
              original content.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Native speakers and certified audio engineers
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rigorous quality control and attention to detail
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Reach</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Serving clients worldwide with local expertise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
