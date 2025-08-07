"use client"

import { ProjectDetail } from "@/data/projects"
import DefaultProjectDesign from "./DefaultProjectDesign"
// Custom project designs
import PixiAIDesign from "./custom/PixiAIDesign"
import PureSoundsDesign from "./custom/PureSoundsDesign"

interface ProjectDesignFactoryProps {
  project: ProjectDetail
}

export default function ProjectDesignFactory({ project }: ProjectDesignFactoryProps) {
  // Check if project has a custom design first
  if (project.customDesign) {
    switch (project.customDesign) {
      case 'pixiai-custom':
        return <PixiAIDesign project={project} />
      case 'puresounds-custom':
        return <PureSoundsDesign project={project} />
      case 'sanitation-custom':
        // For now, fall back to default until we create the custom design
        return <DefaultProjectDesign project={project} />
      default:
        console.warn(`Custom design "${project.customDesign}" not found, falling back to designType`)
    }
  }

  // For now, all design types use the default template
  // We can add more templates later as needed
  switch (project.designType) {
    case 'showcase':
      return <ShowcaseProjectDesign project={project} />
    case 'minimal':
      return <MinimalProjectDesign project={project} />
    case 'detailed':
      return <DetailedProjectDesign project={project} />
    default:
      return <DefaultProjectDesign project={project} />
  }
}

// Inline template components for now - can be moved to separate files later
function ShowcaseProjectDesign({ project }: { project: ProjectDetail }) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero with Image Gallery */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="flex items-center mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-400/30 mr-4">
              {project.category}
            </span>
            <span className="text-white/60 text-sm">{project.year}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <p className="text-white/80">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MinimalProjectDesign({ project }: { project: ProjectDetail }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-white/70 text-lg">{project.longDescription}</p>
      </div>

      <div className="mb-12">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function DetailedProjectDesign({ project }: { project: ProjectDetail }) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">{project.title}</h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">{project.longDescription}</p>
      </div>

      {/* Main Image */}
      <div className="mb-16">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>

      {/* Challenges & Solutions */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Challenges</h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-white/80">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Solutions</h2>
          <div className="space-y-4">
            {project.solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-white/80">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics */}
      {project.metrics && (
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{value}</div>
              <div className="text-white/60 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
