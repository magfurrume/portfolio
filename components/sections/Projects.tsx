"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { ExternalLink, Github, Filter, ArrowRight, Eye } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import MagneticButton from "@/components/MagneticButton"
import { projects } from "@/data/projects"

const categories = ["All", "AI/ML", "GIS", "Frontend"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-6 sm:mb-8">
            A showcase of my recent work and personal projects
          </p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3 sm:space-x-4">
                    <MagneticButton
                      onClick={() => window.open(project.github, "_blank")}
                      className="p-2.5 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                      aria-label="View GitHub"
                    >
                      <Eye className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </MagneticButton>
                    <MagneticButton
                      onClick={() => window.open(project.live, "_blank")}
                      className="p-2.5 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </MagneticButton>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-white/70 mb-4 line-clamp-3 text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-white/10 text-white/60 rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs sm:text-sm">{project.year}</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors group/link focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
                  >
                    <span className="text-xs sm:text-sm font-medium">View Details</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
