"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"
import Navigation from "@/components/Navigation"
import { ThemeProvider } from "@/components/ThemeProvider"

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
