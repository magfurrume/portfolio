"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Server, Cloud, Wrench, Smartphone, Database, GitBranch, Monitor, Zap, Layers, Cpu, Globe } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "from-emerald-400 via-teal-400 to-cyan-400",
    bgGradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    borderColor: "border-emerald-400/30",
    skills: [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "Redux Toolkit", level: 85, icon: "🔄" },
    ]
  },
  {
    title: "Styling & UI/UX",
    icon: Layers,
    color: "from-blue-400 via-indigo-400 to-purple-400",
    bgGradient: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
    borderColor: "border-blue-400/30",
    skills: [
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Material UI", level: 88, icon: "🎭" },
      { name: "D3.js", level: 82, icon: "📊" },
      { name: "Responsive Design", level: 95, icon: "📱" },
      { name: "CSS3", level: 90, icon: "🎪" },
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "from-purple-400 via-pink-400 to-rose-400",
    bgGradient: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    borderColor: "border-purple-400/30",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MongoDB", level: 82, icon: "🍃" },
      { name: "PostGIS", level: 80, icon: "🗺️" },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    color: "from-orange-400 via-red-400 to-pink-400",
    bgGradient: "from-orange-500/10 via-red-500/10 to-pink-500/10",
    borderColor: "border-orange-400/30",
    skills: [
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "Git/GitHub", level: 90, icon: "🔧" },
      { name: "CI/CD", level: 80, icon: "⚡" },
      { name: "Jest", level: 85, icon: "🧪" },
      { name: "Cypress", level: 82, icon: "🌲" },
    ]
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="text-emerald-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Technical <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <Zap className="text-blue-400" size={32} />
          </motion.div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 mx-auto mb-8 rounded-full" />
          <motion.p
            className="text-xl text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cutting-edge technologies and tools I use to craft exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredCategory(categoryIndex)}
              onHoverEnd={() => setHoveredCategory(null)}
              className={`relative group bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl rounded-3xl p-6 border ${category.borderColor} hover:border-opacity-60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10`}
              style={{
                background: hoveredCategory === categoryIndex 
                  ? `linear-gradient(135deg, ${category.bgGradient.split(' ')[1]}, ${category.bgGradient.split(' ')[3]}, ${category.bgGradient.split(' ')[5]})`
                  : undefined
              }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ padding: '1px' }}
              >
                <div className="w-full h-full rounded-3xl bg-slate-900/90 backdrop-blur-xl" />
              </motion.div>

              <div className="relative z-10">
                {/* Header */}
                <motion.div 
                  className="flex items-center mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="text-white" size={28} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                    <div className={`w-0 h-0.5 bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-500`} />
                  </div>
                </motion.div>

                {/* Skills */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                      }}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-white/90 font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span 
                          className="text-white/60 text-sm font-semibold px-2 py-1 rounded-full bg-white/10"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8,
                              ease: "easeOut"
                            }}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatDelay: 3,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating particles effect */}
                {hoveredCategory === categoryIndex && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                        initial={{ 
                          x: Math.random() * 300, 
                          y: Math.random() * 400,
                          opacity: 0 
                        }}
                        animate={{ 
                          y: [null, -20, -40],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Cpu className="text-emerald-400" size={20} />
            <span className="text-white/80 font-medium">Always learning, always growing</span>
            <Globe className="text-blue-400" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
