"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Sparkles, Zap, Brain, Palette, ExternalLink, Github } from 'lucide-react'
import Image from "next/image"
import { ProjectDetail } from "@/data/projects"

interface PixiAIDesignProps {
  project: ProjectDetail
}

export default function PixiAIDesign({ project }: PixiAIDesignProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeTab, setActiveTab] = useState('features')

  const toggleVideo = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const aiFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Multiple state-of-the-art AI models for different creative styles"
    },
    {
      icon: Zap,
      title: "Real-time Generation",
      description: "Lightning-fast image and video generation with live previews"
    },
    {
      icon: Palette,
      title: "Style Transfer",
      description: "Apply artistic styles and filters to enhance your creations"
    },
    {
      icon: Sparkles,
      title: "Smart Enhancement",
      description: "AI-powered upscaling and quality enhancement tools"
    }
  ]

  const tabs = [
    { id: 'features', label: 'AI Features' },
    { id: 'process', label: 'How It Works' },
    { id: 'results', label: 'Results' }
  ]

return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section with Video Demo */}
      <div className="relative mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-purple-400 mr-2" size={24} />
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-400/30">
              AI-Powered Platform
            </span>
            <Sparkles className="text-purple-400 ml-2" size={24} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              PixiAI
            </span>
          </h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your imagination into stunning visuals with the power of artificial intelligence
          </p>

          <div className="flex justify-center space-x-4">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              <span>Try PixiAI</span>
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 border-2 border-purple-400/50 text-white rounded-full hover:border-purple-400 backdrop-blur-sm transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>View Code</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Interactive Video Section */}
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-purple-400/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <video
              ref={videoRef}
              src="/video/pixiai_demo.mp4"
              className="w-full h-auto object-cover"
              loop
              muted
              poster={project.image || "/placeholder.svg"}
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                onClick={toggleVideo}
                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? (
                  <Pause className="text-white" size={32} />
                ) : (
                  <Play className="text-white ml-1" size={32} />
                )}
              </motion.button>
            </div>
          </div>

          {/* Demo Controls */}
          <div className="p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold mb-1">Interactive Demo</h3>
                <p className="text-white/60 text-sm">See PixiAI in action - from text to stunning visuals</p>
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabbed Content Section */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-full p-2 border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'features' && (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <feature.icon className="text-purple-400 mb-4" size={32} />
                <h3 className="text-white font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'process' && (
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {[
                { step: 1, title: "Input Your Prompt", desc: "Describe your vision in natural language" },
                { step: 2, title: "AI Processing", desc: "Our advanced models interpret and generate" },
                { step: 3, title: "Real-time Preview", desc: "Watch your creation come to life instantly" },
                { step: 4, title: "Enhance & Export", desc: "Fine-tune and download in high quality" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'results' && (
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.metrics && Object.entries(project.metrics).map(([key, value], index) => (
              <motion.div
                key={key}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                  {value}
                </div>
                <div className="text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Technology Stack with Custom Styling */}
      <motion.div
        className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Powered By</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-400/30 font-medium"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
