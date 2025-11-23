"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin, Award, TrendingUp, Code, Users, Target, Zap } from 'lucide-react'

const experiences = [
  {
    type: "work",
    title: "Senior Software Engineer",
    company: "Tiller",
    location: "Dhaka, Bangladesh",
    period: "Dec 2020 - Present",
    duration: "4+ years",
    description: "Led frontend development for national dashboards enhancing urban sanitation and planning. Integrated GIS data with OpenLayers and PostGIS for dynamic map visualizations.",
    technologies: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "OpenLayers", "PostGIS"],
    achievements: [
      "Led frontend development for national dashboards serving 329+ municipalities",
      "Integrated complex GIS data with OpenLayers and PostGIS for dynamic visualizations",
      "Mentored 5+ junior engineers and established coding standards",
      "Improved frontend performance by 40% through optimized render cycles"
    ],
    metrics: {
      impact: "329+ Municipalities",
      performance: "40% Faster",
      team: "10+ Engineers"
    }
  },
  {
    type: "work",
    title: "Junior Software Engineer",
    company: "Peoples IT Solutions",
    location: "Dhaka, Bangladesh",
    period: "Jul 2019 - Nov 2020",
    duration: "1.5 years",
    description: "Developed secure web applications for government agencies. Built reusable components in React and integrated RESTful APIs.",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs"],
    achievements: [
      "Developed secure web applications for 10+ government agencies",
      "Built 50+ reusable React components reducing development time",
      "Contributed to full-stack development with Node.js and Express",
      "Successfully integrated 20+ RESTful APIs"
    ],
    metrics: {
      projects: "10+ Agencies",
      components: "50+ Components",
      apis: "20+ APIs"
    }
  }
]

const education = [
  {
    type: "education",
    title: "B.Sc. in Computer Science and Engineering",
    company: "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
    location: "Gopalganj, Bangladesh",
    period: "2013 - 2017",
    duration: "4 years",
    description: "Specialized in Computer Science and Engineering with focus on software development and cybersecurity.",
    technologies: ["Programming", "Software Engineering", "Database Systems", "Algorithms"],
    achievements: [
      "Thesis: Cyber Security Knowledge Prediction Using Multiple Linear Regression",
      "Strong foundation in software engineering principles and best practices",
      "Active participation in programming competitions and hackathons",
      "Graduated with honors in Computer Science and Engineering"
    ],
    metrics: {
      gpa: "3.8/4.0",
      thesis: "ML Research",
      competitions: "5+ Events"
    }
  }
]

const allItems = [...experiences, ...education].sort((a, b) => {
  const yearA = parseInt(a.period.split(" - ")[0])
  const yearB = parseInt(b.period.split(" - ")[0])
  return yearB - yearA
})

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden ">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TrendingUp className="text-cyan-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Journey & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Growth</span>
            </h2>
            <Award className="text-purple-400" size={32} />
          </motion.div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto mb-8 rounded-full" />
          <motion.p
            className="text-xl text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My professional evolution and educational foundation in software engineering
          </motion.p>
        </motion.div>

        <div className="relative mr-10 lg:mr-0">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/20" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          <div className="space-y-16">
            {allItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:flex-row group`}
              >
                {/* Enhanced Timeline Icon */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-cyan-400/50 flex items-center justify-center shadow-xl">
                      {item.type === "work" ? (
                        <Briefcase className="text-cyan-400" size={28} />
                      ) : (
                        <GraduationCap className="text-purple-400" size={28} />
                      )}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl"
                      animate={{
                        scale: hoveredItem === index ? [1, 1.2, 1] : 1,
                        opacity: hoveredItem === index ? [0.5, 1, 0.5] : 0
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Enhanced Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-20 md:ml-0`}>
                  <motion.div
                    className="relative group/card bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Floating Badge */}
                    <motion.div
                      className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                    >
                      {item.duration}
                    </motion.div>

                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className={`hidden sm:block p-3 rounded-xl ${item.type === "work"
                              ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                              : "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                              }`}
                            whileHover={{ rotate: 15 }}
                          >
                            {item.type === "work" ? (
                              <Code className="text-cyan-400" size={24} />
                            ) : (
                              <Target className="text-purple-400" size={24} />
                            )}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-cyan-400 group-hover/card:to-purple-400 group-hover/card:bg-clip-text transition-all duration-300">
                              {item.title}
                            </h3>
                            <p className="text-cyan-400 font-semibold text-lg">{item.company}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-4 text-white/60">
                        <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                          <Calendar size={14} />
                          <span className="text-sm font-medium">{item.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                          <MapPin size={14} />
                          <span className="text-sm font-medium">{item.location}</span>
                        </div>
                      </div>

                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-6 leading-relaxed">{item.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 ">
                      {Object.entries(item.metrics).map(([key, value], metricIndex) => (
                        <motion.div
                          key={key}
                          className="flex flex-col justify-center items-center h-full text-center p-3 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.3 + metricIndex * 0.1 + 0.8 }}
                        >
                          <div className="text-cyan-400 font-bold text-sm">{value}</div>
                          <div className="text-white/60 text-xs uppercase tracking-wide">{key}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Zap className="text-emerald-400" size={20} />
                        <h4 className="text-white font-semibold">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-white/70 text-sm flex items-start group/achievement"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.3 + i * 0.1 + 1 }}
                          >
                            <motion.span
                              className="text-emerald-400 mr-3 mt-1"
                              whileHover={{ scale: 1.5, rotate: 360 }}
                            >
                              •
                            </motion.span>
                            <span className="group-hover/achievement:text-white transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.3 + techIndex * 0.05 + 1.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Hover Effect Particles */}
                    {hoveredItem === index && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            initial={{
                              x: Math.random() * 400,
                              y: Math.random() * 300,
                              opacity: 0
                            }}
                            animate={{
                              y: [null, -30, -60],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0]
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
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Years Experience", value: "6+" },
              { icon: Code, label: "Projects Completed", value: "50+" },
              { icon: Award, label: "Technologies Mastered", value: "20+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
              >
                <stat.icon className="text-cyan-400 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
