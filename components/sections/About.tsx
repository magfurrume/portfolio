"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react'

const skills = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS", 
  "Material UI", "D3.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "PostGIS", 
  "OpenLayers", "GeoServer", "Docker", "Jest", "Cypress"
]

const highlights = [
  { icon: Code, title: "Clean Code", description: "Writing maintainable, scalable code" },
  { icon: Lightbulb, title: "Problem Solver", description: "Turning complex challenges into solutions" },
  { icon: Rocket, title: "Performance", description: "Optimizing for speed and efficiency" },
  { icon: Coffee, title: "Collaboration", description: "Working effectively in teams" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-6 sm:mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-4 sm:mb-6">
                I'm an experienced Front-End Developer with over 6 years of expertise 
                building modern, scalable, and high-performance web applications. I specialize 
                in React.js, Next.js, and creating responsive user interfaces that deliver 
                exceptional user experiences.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Based in Dhaka, Bangladesh, I've led frontend development teams, optimized 
                performance for large-scale platforms, and have strong knowledge in GIS-based 
                applications and RESTful APIs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  tabIndex={0}
                  whileHover={{ scale: 1.02 }}
                >
                  <item.icon className="text-emerald-400 mb-2 sm:mb-3 w-6 h-6 sm:w-8 sm:h-8" />
                  <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Technologies I Love</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-white font-medium hover:from-emerald-400/30 hover:to-blue-500/30 transition-all duration-300 cursor-pointer text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  tabIndex={0}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
