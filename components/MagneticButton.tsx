"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  "aria-label"?: string
  tabIndex?: number
}

export default function MagneticButton({ 
  children, 
  className = "", 
  onClick, 
  onKeyDown,
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
  tabIndex = 0,
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    if (disabled) return
    
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
    if ((e.key === 'Enter' || e.key === ' ') && !disabled && onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 5, mass: 0.5 }}
      className={`${className} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} focus:outline-none`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
