"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Clock, Users, Award, Zap, Shield } from "lucide-react"

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Users,
      title: "Native Speakers",
      description: "Authentic voices from native speakers who understand cultural nuances",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality standards",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
    },
    {
      icon: Zap,
      title: "Cutting-edge Tech",
      description: "Latest audio technology and professional-grade equipment",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes for every project",
    },
    {
      icon: CheckCircle,
      title: "Client Satisfaction",
      description: "99% client satisfaction rate with ongoing support",
    },
  ]

  const tools = ["Adobe Audition", "Pro Tools", "Logic Pro", "Nuendo", "Reaper", "Cubase"]

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-leading expertise and technology for exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>

              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Tools We Use</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <span className="text-gray-700 font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
