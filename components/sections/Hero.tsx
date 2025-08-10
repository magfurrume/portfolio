"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import ParticleBackground from "@/components/ParticleBackground"
import MagneticButton from "@/components/MagneticButton"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Senior Software Engineer"

  useEffect(() => {
    let i = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const typeWriter = () => {
      if (!isDeleting && i <= fullText.length) {
        setText(fullText.slice(0, i))
        i++
        if (i > fullText.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true
            typeWriter()
          }, 2000)
          return
        }
      } else if (isDeleting && i >= 0) {
        setText(fullText.slice(0, i))
        i--
        if (i < 0) {
          isDeleting = false
          i = 0
          timeoutId = setTimeout(() => {
            typeWriter()
          }, 500)
          return
        }
      }

      const speed = isDeleting ? 50 : 100
      timeoutId = setTimeout(typeWriter, speed)
    }

    typeWriter()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [fullText])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/Md_Magfur_Alam_CV.pdf'
    link.download = 'Md_Magfur_Alam_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />
      

      <div className="relative z-10 text-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6 lg:space-y-8"
        >
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent block sm:inline">
              Md Magfur Alam
            </span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light h-8 sm:h-10 md:h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="min-h-[1em] flex items-center">
              {text}
              <motion.span
                className="ml-1 w-0.5 h-6 sm:h-7 md:h-8 bg-emerald-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
I build high-performance, scalable web applications that solve real problems. With 6+ years in React.js, Next.js, Node.js, and GIS solutions, I’ve delivered impactful products for governments, AI startups, and global enterprises.          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MagneticButton
              onClick={handleViewWork}
              className="w-auto bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              View My Work
            </MagneticButton>

            <MagneticButton
              onClick={downloadCV}
              className="w-auto border-2 border-emerald-400/50 hover:border-emerald-400 text-white px-6 sm:px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              <span>Download CV</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: Github, href: "https://github.com/magfurrumel", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/magfurrumel", label: "LinkedIn" },
              { icon: Mail, href: "mailto:magfurrumel@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton
                key={label}
                onClick={() => handleSocialClick(href)}
                className="p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label={label}
              >
                <Icon size={20} className="sm:w-6 sm:h-6 text-white" />
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>


      </div>
      <motion.button
        onClick={scrollToNext}
        className="z-10 mt-10 mb-10 self-center p-2 sm:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group focus:outline-none "
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to next section"
      >
        <ArrowDown className="text-white/70 group-hover:text-white transition-colors w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>
    </section>
  )
}
