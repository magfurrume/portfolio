"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { ExternalLink, Github, Filter } from 'lucide-react'
import Image from "next/image"
import MagneticButton from "@/components/MagneticButton"

const projects = [
  {
    id: 1,
    title: "PixiAI - AI-Powered Image & Video Platform",
    description: "Developed an AI-based platform enabling users to generate images and videos from text prompts using advanced machine learning models.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Zustand", "PostgreSQL", "Spring Boot"],
    category: "AI/ML",
    github: "https://github.com",
    live: "https://pixiai.net",
    featured: true
  },
  {
    id: 2,
    title: "PureSounds - AI Music Platform",
    description: "Developed a music streaming platform powered by AI, enabling users to generate and listen to original music tracks through advanced ML models.",
    image: "/ai-chat-dark-theme.png",
    technologies: ["Next.js", "TypeScript", "Zustand", "PostgreSQL", "Spring Boot"],
    category: "AI/ML",
    github: "https://github.com",
    live: "https://puresounds.cloud",
    featured: true
  },
  {
    id: 3,
    title: "National Sanitation Dashboard",
    description: "Developed the National Sanitation Dashboard for tracking faecal sludge and solid waste management across 329+ municipalities in Bangladesh.",
    image: "/project-management-kanban-board.png",
    technologies: ["React.js", "D3.js", "OpenLayers", "Spring Boot", "PostgreSQL", "PostGIS"],
    category: "GIS",
    github: "https://github.com",
    live: "http://sanboard.gov.bd",
    featured: true
  },
  {
    id: 4,
    title: "Planning Information System",
    description: "Integrated climate risk information into public investment planning for the Bangladesh Planning Commission.",
    image: "/weather-api-analytics-dashboard.png",
    technologies: ["React.js", "OpenLayers", "Node.js", "Express.js", "PostgreSQL", "PostGIS"],
    category: "GIS",
    github: "https://github.com",
    live: "http://plismap.plancomm.gov.bd",
    featured: true
  }
]

const categories = ["All", "AI/ML", "GIS", "Frontend"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
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
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    <MagneticButton
                      onClick={() => window.open(project.github, "_blank")}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View GitHub"
                    >
                      <Github className="text-white" size={20} />
                    </MagneticButton>
                    <MagneticButton
                      onClick={() => window.open(project.live, "_blank")}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="text-white" size={20} />
                    </MagneticButton>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-white/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
