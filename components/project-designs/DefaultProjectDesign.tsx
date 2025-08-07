"use client"

import { motion } from "framer-motion"
import { Calendar, Users } from 'lucide-react'
import Image from "next/image"
import { ProjectDetail } from "@/data/projects"

interface DefaultProjectDesignProps {
  project: ProjectDetail
}

export default function DefaultProjectDesign({ project }: DefaultProjectDesignProps) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center mb-6">
          <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-400/30">
            {project.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          {project.longDescription}
        </p>
      </motion.div>

      {/* Project Image */}
      <motion.div
        className="relative mb-16 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>

      {/* Project Info Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="text-emerald-400" size={20} />
              <span className="text-white/80">{project.year} • {project.duration}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="text-emerald-400" size={20} />
              <span className="text-white/80">{project.team} • {project.role}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-400/30 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
