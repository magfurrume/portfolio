"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle()
    }
  }

  return (
    <motion.button
className="p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors focus:outline-none "
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      tabIndex={0}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        ) : (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
        )}
      </motion.div>
    </motion.button>
  )
}
