"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Map, BarChart3, Users, Database, Globe, Shield, ExternalLink, Github } from 'lucide-react'
import Image from "next/image"
import { ProjectDetail } from "@/data/projects"

interface SanitationDashboardDesignProps {
  project: ProjectDetail
}

export default function SanitationDashboardDesign({ project }: SanitationDashboardDesignProps) {
  const [activeMetric, setActiveMetric] = useState(0)

  const govFeatures = [
    {
      icon: Map,
      title: "GIS Integration",
      description: "Interactive mapping with PostGIS for real-time data visualization"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and data analysis tools"
    },
    {
      icon: Users,
      title: "Multi-level Access",
      description: "Role-based access control for different administrative levels"
    },
    {
      icon: Shield,
      title: "Government Security",
      description: "Enterprise-grade security meeting government standards"
    }
  ]

  const impactMetrics = [
    { label: "Municipalities", value: "329+", description: "Across Bangladesh" },
    { label: "Data Points", value: "50K+", description: "Real-time tracking" },
    { label: "Users", value: "1000+", description: "Government officials" },
    { label: "Reports", value: "500+", description: "Generated monthly" }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="text-green-400 mr-2" size={24} />
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 rounded-full text-sm font-medium border border-green-400/30">
              Government Dashboard
            </span>
            <Database className="text-blue-400 ml-2" size={24} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              National Sanitation
            </span>
            <br />
            Dashboard
          </h1>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive tracking and management system for faecal sludge and solid waste 
            management across all municipalities in Bangladesh
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              <span>View Dashboard</span>
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 border-2 border-green-400/50 text-white rounded-full hover:border-green-400 backdrop-blur-sm transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>View Code</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-xl border border-green-400/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt="Sanitation Dashboard"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            
            {/* Interactive Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {/* Dashboard Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {impactMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeMetric === index 
                          ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30' 
                          : 'hover:bg-white/10'
                      }`}
                      onClick={() => setActiveMetric(index)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-green-400">{metric.value}</div>
                      <div className="text-white text-sm font-medium">{metric.label}</div>
                      <div className="text-white/60 text-xs">{metric.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Government Features */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Government-Grade Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {govFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <feature.icon className="text-green-400 mb-4" size={32} />
              <h3 className="text-white font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Impact */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-gradient-to-br from-green-900/10 to-blue-900/10 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Nationwide Coverage</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Municipalities Covered</span>
                  <span className="text-green-400 font-bold">329+</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Data Accuracy</span>
                  <span className="text-green-400 font-bold">98.5%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "98.5%" }}
                    transition={{ duration: 2, delay: 1.2 }}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Key Achievements</h3>
              <div className="space-y-3">
                {[
                  "Real-time monitoring across all districts",
                  "Automated report generation for officials",
                  "Mobile-responsive design for field workers",
                  "Integration with existing government systems"
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Technology Stack */}
      <motion.div
        className="bg-gradient-to-br from-green-900/10 to-blue-900/10 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Built With Enterprise Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 rounded-full border border-green-400/30 font-medium"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
