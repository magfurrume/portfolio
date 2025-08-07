"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import MagneticButton from "@/components/MagneticButton"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual email service
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleContactClick = (href: string) => {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "magfurrumel@gmail.com",
      href: "mailto:magfurrumel@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1929 661667",
      href: "tel:+8801929661667"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#"
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/magfurrumel", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/magfurrumel", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/magfurrumel", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get In <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 font-medium mb-2 text-sm sm:text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 font-medium mb-2 text-sm sm:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/80 font-medium mb-2 text-sm sm:text-base">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 font-medium mb-2 text-sm sm:text-base">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send size={18} className="sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </MagneticButton>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center font-medium text-sm sm:text-base"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.button
                    key={info.label}
                    onClick={() => handleContactClick(info.href)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleContactClick(info.href)
                      }
                    }}
                    className="flex items-center space-x-3 sm:space-x-4 text-white/80 hover:text-white transition-colors group w-full text-left p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    disabled={info.href === '#'}
                  >
                    <div className="p-2.5 sm:p-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg group-hover:from-emerald-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <info.icon size={20} className="sm:w-6 sm:h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{info.label}</p>
                      <p className="text-white/60 text-xs sm:text-sm">{info.value}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Follow Me</h3>
              
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.label}
                    onClick={() => handleSocialClick(social.href)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleSocialClick(social.href)
                      }
                    }}
                    className="p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
