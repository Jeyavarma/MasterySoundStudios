"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote:
        "VoiceBridge transformed our global content strategy. Their dubbing quality is exceptional and culturally authentic.",
      name: "Sarah Johnson",
      title: "Content Director",
      company: "StreamMax Studios",
      rating: 5,
    },
    {
      quote:
        "The fastest turnaround time without compromising quality. Their team understands the nuances of regional languages perfectly.",
      name: "Raj Patel",
      title: "Producer",
      company: "Bollywood Productions",
      rating: 5,
    },
    {
      quote:
        "Professional audio mixing that elevated our documentary series. Highly recommend their post-production services.",
      name: "Maria Garcia",
      title: "Director",
      company: "Documentary Films Inc",
      rating: 5,
    },
    {
      quote: "Outstanding localization services that helped us reach new markets. The cultural adaptation was spot-on.",
      name: "David Chen",
      title: "Marketing Head",
      company: "Global Media Corp",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by top brands and content creators worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-blue-200" size={32} />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
