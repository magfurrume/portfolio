export interface ProjectDetail {
  id: number
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  category: string
  github?: string
  live: string
  featured: boolean
  year: string
  duration: string
  team: string
  role: string
  challenges: string[]
  solutions: string[]
  features: string[]
  metrics?: {
    users?: string
    performance?: string
    coverage?: string
  }
  designType: 'default' | 'showcase' | 'minimal' | 'detailed'
  customDesign?: string 
}

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: "pixiai-platform",
    title: "PixiAI - AI-Powered Image & Video Platform",
    description: "Developed an AI-based platform enabling users to generate images and videos from text prompts using advanced machine learning models.",
    longDescription: "PixiAI is a cutting-edge platform that harnesses the power of artificial intelligence to transform text descriptions into stunning visual content. Built with Next.js and TypeScript, it features real-time generation, advanced editing tools, and seamless user experience.",
    image: "/projects/images/pixiai_thumb.png",
    images: [
      // "/pixiai_1.png",
      "/projects/images/project-management-kanban-board.png",
      "/projects/images/puresund_thumb.png"
    ],
    technologies: ["Next.js", "TypeScript", "Zustand", "PostgreSQL", "Spring Boot", "TensorFlow", "AWS"],
    category: "AI/ML",
    live: "https://pixiai.net",
    featured: true,
    year: "2023",
    duration: "8 months",
    team: "5 developers",
    role: "Lead Frontend Developer",
    challenges: [
      "Implementing real-time AI model integration with low latency",
      "Managing large file uploads and processing for video generation",
      "Creating intuitive UI for complex AI parameters",
      "Optimizing performance for resource-intensive operations"
    ],
    solutions: [
      "Implemented WebSocket connections for real-time updates",
      "Used chunked upload with progress tracking and resume capability",
      "Designed progressive disclosure UI with smart defaults",
      "Added client-side caching and lazy loading for better performance"
    ],
    features: [
      "Text-to-image generation with multiple AI models",
      "Video creation from text prompts",
      "Advanced editing tools and filters",
      "Real-time collaboration features",
      "Cloud storage integration",
      "API access for developers"
    ],
    metrics: {
      users: "10K+",
      performance: "2.3s Load",
      coverage: "95% Tests"
    },
    designType: "showcase",
    customDesign: "pixiai-custom"
  },
  {
    id: 2,
    slug: "puresounds-music",
    title: "PureSounds - AI Music Platform",
    description: "Developed a music streaming platform powered by AI, enabling users to generate and listen to original music tracks through advanced ML models.",
    longDescription: "PureSounds revolutionizes music creation by combining AI-generated compositions with traditional streaming features. The platform allows users to create, customize, and share AI-generated music while enjoying a premium listening experience.",
    image: "/projects/images/puresund_thumb.png",
    images: [
      "/projects/images/puresund_thumb.png",
      "/projects/images/placeholder.svg?height=400&width=600&text=PureSounds+Player",
      "/projects/images/placeholder.svg?height=400&width=600&text=Music+Generator"
    ],
    technologies: ["Next.js", "TypeScript", "Zustand", "PostgreSQL", "Spring Boot", "Web Audio API"],
    category: "AI/ML",
    live: "https://puresounds.cloud",
    featured: true,
    year: "2023",
    duration: "6 months",
    team: "4 developers",
    role: "Full-Stack Developer",
    challenges: [
      "Implementing high-quality audio streaming with minimal buffering",
      "Creating responsive audio visualizations",
      "Managing complex state for music player controls",
      "Integrating AI music generation APIs"
    ],
    solutions: [
      "Used Web Audio API with custom buffering strategies",
      "Implemented Canvas-based visualizations with WebGL acceleration",
      "Created custom audio player with Zustand state management",
      "Built robust API integration with fallback mechanisms"
    ],
    features: [
      "AI-powered music generation",
      "High-quality audio streaming",
      "Custom playlists and recommendations",
      "Real-time audio visualizations",
      "Social sharing features",
      "Offline listening capability"
    ],
    metrics: {
      users: "5K+",
      performance: "1.8s Load",
      coverage: "92% Tests"
    },
    designType: "detailed",
    customDesign: "puresounds-custom"
  },
  {
    id: 3,
    slug: "sanitation-dashboard",
    title: "National Sanitation Dashboard",
    description: "Developed the National Sanitation Dashboard for tracking faecal sludge and solid waste management across 329+ municipalities in Bangladesh.",
    longDescription: "A comprehensive government dashboard system that provides real-time insights into sanitation management across Bangladesh. Built with React.js and integrated with GIS mapping for visual data representation.",
    image: "/projects/images/project-management-kanban-board.png",
    images: [
      "/projects/images/project-management-kanban-board.png",
      "/projects/images/placeholder.svg?height=400&width=600&text=GIS+Mapping",
      "/projects/images/placeholder.svg?height=400&width=600&text=Analytics+Dashboard"
    ],
    technologies: ["React.js", "D3.js", "OpenLayers", "Spring Boot", "PostgreSQL", "PostGIS"],
    category: "GIS",
    live: "http://sanboard.gov.bd",
    featured: true,
    year: "2022",
    duration: "12 months",
    team: "8 developers",
    role: "Frontend Lead",
    challenges: [
      "Handling large datasets with 329+ municipalities",
      "Creating interactive GIS maps with real-time data",
      "Ensuring government-level security and compliance",
      "Building responsive design for various devices"
    ],
    solutions: [
      "Implemented data virtualization and pagination",
      "Used OpenLayers with PostGIS for efficient map rendering",
      "Added multi-layer security with role-based access",
      "Created adaptive layouts with Tailwind CSS"
    ],
    features: [
      "Interactive GIS mapping with PostGIS integration",
      "Real-time data visualization with D3.js",
      "Multi-level administrative access control",
      "Comprehensive reporting and analytics",
      "Mobile-responsive design",
      "Data export capabilities"
    ],
    designType: "default",
    customDesign: "sanitation-custom" 
  },
  {
    id: 4,
    slug: "planning-information-system",
    title: "Planning Information System",
    description: "Integrated climate risk information into public investment planning for the Bangladesh Planning Commission.",
    longDescription: "A sophisticated planning system that helps government officials make informed decisions by integrating climate risk data with investment planning tools.",
    image: "/projects/images/plis.png",
    images: [
      "/projects/images/plis.png"
    ],
    technologies: ["React.js", "OpenLayers", "Node.js", "Express.js", "PostgreSQL", "PostGIS"],
    category: "GIS",
    live: "http://plismap.plancomm.gov.bd",
    featured: true,
    year: "2021",
    duration: "10 months",
    team: "6 developers",
    role: "Senior Frontend Developer",
    challenges: [
      "Integrating complex climate data with planning tools",
      "Creating user-friendly interfaces for government officials",
      "Ensuring data accuracy and real-time updates",
      "Building scalable architecture for future expansion"
    ],
    solutions: [
      "Developed modular data integration pipelines",
      "Created intuitive dashboard with guided workflows",
      "Implemented automated data validation and alerts",
      "Used microservices architecture with Docker"
    ],
    features: [
      "Climate risk assessment tools",
      "Investment planning workflows",
      "Interactive mapping interface",
      "Automated report generation",
      "Multi-user collaboration",
      "Data visualization dashboards"
    ],
    designType: "minimal"
  }
]
