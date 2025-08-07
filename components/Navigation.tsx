"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/components/ThemeToggle"
import { useRouter } from "next/navigation" // <-- add this at the top


const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "/blog" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const pathname = usePathname()
const router = useRouter() // <-- inside component

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return

      const sections = navItems
        .filter((item) => item.href.startsWith('#'))
        .map((item) => item.href.substring(1))

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

const handleNavClick = async (href: string) => {
  setIsOpen(false)

  if (href.startsWith('#')) {
    if (pathname !== '/') {
      router.push('/' + href)
    } else {
      // Wait a bit for mobile menu to close
      setTimeout(() => {
        const element = document.getElementById(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300) // Slight delay
    }
  } else {
    router.push(href)
  }
}

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleNavClick(href)
    }
  }

  const isActive = (item: any) => {
    if (item.href === '/blog' && pathname.startsWith('/blog')) return true
    if (item.href.startsWith('#') && pathname === '/' && activeSection === item.href.substring(1)) return true
    return false
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-white/5 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 gap-4">
          {/* Logo */}
          <motion.button
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent cursor-pointer px-2 py-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            onKeyDown={(e) => handleKeyDown(e, '/')}
            tabIndex={0}
          >
            Magfur
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive(item)
                  ? "text-emerald-400"
                  : "text-white/70 hover:text-white"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                tabIndex={0}
                aria-current={isActive(item) ? "page" : undefined}
              >
                {item.name}
                {isActive(item) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500"
                    layoutId="activeSection"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side (Theme + Hamburger) */}
          <div className="flex items-center gap-2 lg:gap-4">
            <ThemeToggle />
            <motion.button
              className="block lg:hidden p-2 text-white rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Positioned outside for full width */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden w-full bg-black px-4 sm:px-6 md:px-8"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div className="py-4 space-y-1 border-t border-white/10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors rounded-md ${isActive(item)
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                  tabIndex={0}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
