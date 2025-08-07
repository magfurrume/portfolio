"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, Music, Headphones, Radio, ExternalLink, Github } from 'lucide-react'
import { ProjectDetail } from "@/data/projects"

interface PureSoundsDesignProps {
  project: ProjectDetail
}

export default function PureSoundsDesign({ project }: PureSoundsDesignProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [barHeights, setBarHeights] = useState<number[]>(Array(32).fill(10))
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animationFrameId = useRef<number | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const smoothingFactor = 0.7 // Higher = smoother

  const musicFeatures = [
    {
      icon: Music,
      title: "AI Music Generation",
      description: "Create original compositions with advanced AI algorithms"
    },
    {
      icon: Headphones,
      title: "High-Quality Streaming",
      description: "Crystal clear audio with adaptive bitrate streaming"
    },
    {
      icon: Radio,
      title: "Smart Playlists",
      description: "AI-curated playlists based on your taste and mood"
    },
    {
      icon: Volume2,
      title: "Audio Visualization",
      description: "Real-time visual representations of your music"
    }
  ]

  const demoTracks = [
    { name: "Ethereal Dreams", duration: "4:49", genre: "Ambient", url: "/audio/song1.mp3" },
    { name: "Digital Pulse", duration: "4:12", genre: "Electronic", url: "/audio/song1.mp3" },
    { name: "Cosmic Journey", duration: "5:08", genre: "Synthwave", url: "/audio/song1.mp3" }
  ]

  // Play audio when currentTrack or isPlaying changes (autoplay)
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrack])

  // Update progress bar during playback
  useEffect(() => {
    let animationFrame: number

    const updateProgress = () => {
      if (audioRef.current) {
        const current = audioRef.current.currentTime
        const total = audioRef.current.duration || 0
        setProgress(current / total)
        setDuration(total)
      }
      animationFrame = requestAnimationFrame(updateProgress)
    }

    if (isPlaying) {
      animationFrame = requestAnimationFrame(updateProgress)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [isPlaying])

  // Format time helper
  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" + secs : secs}`
  }

  // Setup AudioContext and Analyser once, reuse across track/play changes
  useEffect(() => {
    if (!audioRef.current) return

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    const audioCtx = audioContextRef.current

    if (!sourceRef.current) {
      sourceRef.current = audioCtx.createMediaElementSource(audioRef.current)
      analyserRef.current = audioCtx.createAnalyser()
      analyserRef.current.fftSize = 64
      sourceRef.current.connect(analyserRef.current)
      analyserRef.current.connect(audioCtx.destination)
    }

    const bufferLength = analyserRef.current!.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const updateVisualizer = () => {
      if (!analyserRef.current) return
      analyserRef.current.getByteFrequencyData(dataArray)

      setBarHeights(prev =>
        Array.from(dataArray.slice(0, 32)).map((val, i) =>
          prev[i] * smoothingFactor + val * (1 - smoothingFactor)
        )
      )

      animationFrameId.current = requestAnimationFrame(updateVisualizer)
    }

    if (isPlaying) {
      animationFrameId.current = requestAnimationFrame(updateVisualizer)
    } else {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
      setBarHeights(Array(32).fill(10)) // reset bars when paused
    }

    // Cleanup on unmount
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
      // Do NOT close or disconnect AudioContext here, keep it alive for reuse
    }
  }, [isPlaying])

  // When switching tracks reset progress and bars
  const switchTrack = (index: number) => {
    setCurrentTrack(index)
    setIsPlaying(false)
    setProgress(0)
    setBarHeights(Array(32).fill(10))

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current.load()
    }
  }

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <audio
        ref={audioRef}
        src={demoTracks[currentTrack].url}
        preload="metadata"
        onEnded={() => {
          setIsPlaying(false)
          setProgress(0)
          setBarHeights(Array(32).fill(10))
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration)
        }}
      />

      {/* Hero Section */}
      <div className="relative mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Music className="text-blue-400 mr-2" size={24} />
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
              AI Music Platform
            </span>
            <Music className="text-blue-400 ml-2" size={24} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PureSounds
            </span>
          </h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
            Where artificial intelligence meets musical creativity
          </p>
        </motion.div>

        {/* Audio Player */}
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-blue-400/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Visualizer */}
          <div className="relative h-64 bg-gradient-to-r from-blue-900/30 to-purple-900/30 flex items-center justify-center">
            <div className="flex items-end h-64 space-x-1">
              {barHeights.map((height, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded"
                  animate={{ height: `${(height / 255) * 100}%` }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold text-lg">{demoTracks[currentTrack].name}</h3>
                <p className="text-white/60">{demoTracks[currentTrack].genre} • {demoTracks[currentTrack].duration}</p>
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={togglePlay}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <Pause className="text-white" size={20} />
                  ) : (
                    <Play className="text-white ml-1" size={20} />
                  )}
                </motion.button>
                <Volume2 className="text-white/70" size={20} />
              </div>
            </div>

            <div className="w-full bg-white/10 rounded-full h-2 mb-4">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-200"
                style={{ width: `${(progress * 100).toFixed(2)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-white/60 mb-4">
              <span>{formatTime(progress * duration)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Track List */}
            <div className="grid grid-cols-3 gap-2">
              {demoTracks.map((track, index) => (
                <button
                  key={index}
                  onClick={() => switchTrack(index)}
                  className={`p-2 rounded-lg text-left transition-all duration-300 ${
                    currentTrack === index
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="text-white text-sm font-medium truncate">{track.name}</div>
                  <div className="text-white/60 text-xs">{track.duration}</div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} />
            <span>Listen Now</span>
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 border-2 border-blue-400/50 text-white rounded-full hover:border-blue-400 backdrop-blur-sm transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View Code</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {musicFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <feature.icon className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Built With</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-400/30 font-medium"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
