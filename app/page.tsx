"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Contact from "@/components/sections/Contact"
import { ThemeProvider } from "@/components/ThemeProvider"
import dynamic from "next/dynamic"
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false })
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false })
const Experience = dynamic(() => import('@/components/sections/Experience'), { ssr: false })
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false })
const About = dynamic(() => import('@/components/sections/About'), { ssr: false })
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 z-50 origin-left"
          style={{ scaleX }}
        />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          
        </main>
      </div>
    </ThemeProvider>
  )
}
