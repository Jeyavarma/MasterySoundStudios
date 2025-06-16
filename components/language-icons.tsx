import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const movies = [
  {
    title: "Movie One",
    work: "ST",
    image: "/movies/movie1.jpg",
  },
  {
    title: "Movie Two",
    work: "VO",
    image: "/movies/movie2.jpg",
  },
  {
    title: "Movie Three",
    work: "TR",
    image: "/movies/movie3.jpg",
  },
  {
    title: "Movie Four",
    work: "TS",
    image: "/movies/movie4.jpg",
  },
  {
    title: "Movie Five",
    work: "VM",
    image: "/movies/movie5.jpg",
  },
  {
    title: "Movie Six",
    work: "DD",
    image: "/movies/movie6.jpg",
  },
  {
    title: "Movie Seven",
    work: "KD",
    image: "/movies/movie7.jpg",
  },
  {
    title: "Movie Eight",
    work: "NR",
    image: "/movies/movie8.jpg",
  },
  {
    title: "Movie Nine",
    work: "LS",
    image: "/movies/movie9.jpg",
  },
]

export default function ProjectShowcase() {
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const visibleMovies = showAll ? movies : movies.slice(0, 6)

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Project Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our creative journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleMovies.map((movie, index) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-2xl p-4 shadow hover:shadow-md transition-all duration-300 text-center"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-900">{movie.title}</h3>
              <p className="text-sm text-gray-600">{movie.work}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </section>
  )
}
