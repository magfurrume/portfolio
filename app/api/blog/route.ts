import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
const BLOG_DATA_PATH = path.join(process.cwd(), 'data', 'blog.json')

// Default blog data
const defaultBlogData = {
  posts: [
    {
      id: "1",
      title: "Building Modern Web Applications with Next.js 14",
      excerpt: "Explore the latest features in Next.js 14 and how they can revolutionize your web development workflow. From App Router to Server Components, discover what makes Next.js the go-to framework for modern React applications.",
      content: "Next.js 14 has introduced groundbreaking features that are reshaping how we build web applications. In this comprehensive guide, we'll explore the App Router, Server Components, and the new streaming capabilities.\n\nThe App Router represents a paradigm shift in how we structure Next.js applications. Unlike the traditional Pages Router, the App Router leverages React's latest features including Server Components, Suspense, and streaming.\n\nServer Components allow us to render components on the server, reducing the JavaScript bundle size sent to the client. This results in faster initial page loads and better performance overall.\n\nStreaming enables us to progressively render parts of the page as they become ready, providing a better user experience with faster perceived loading times.\n\nKey benefits of Next.js 14:\n- Improved performance with Server Components\n- Better developer experience with the App Router\n- Enhanced SEO capabilities\n- Automatic code splitting and optimization\n- Built-in TypeScript support\n\nWhether you're building a simple blog or a complex e-commerce platform, Next.js 14 provides the tools and optimizations needed to create exceptional web experiences.",
      author: "Md Magfur Alam",
      date: "2024-01-15T10:00:00.000Z",
      readTime: "8 min read",
      tags: ["Next.js", "React", "Web Development", "JavaScript"],
      image: "/placeholder.svg?height=400&width=600&text=Next.js+14",
      published: true
    },
    {
      id: "2",
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      excerpt: "Dive deep into advanced TypeScript patterns that will make your code more robust, maintainable, and type-safe. Learn about utility types, conditional types, and advanced generics.",
      content: "TypeScript has become an essential tool for modern JavaScript development, providing static type checking and enhanced developer experience. In this article, we'll explore advanced patterns that can elevate your TypeScript skills.\n\nUtility Types are powerful built-in types that help transform existing types. Some of the most useful ones include:\n\n- Partial<T>: Makes all properties optional\n- Required<T>: Makes all properties required\n- Pick<T, K>: Creates a type with selected properties\n- Omit<T, K>: Creates a type without specified properties\n- Record<K, T>: Creates an object type with specific keys and values\n\nConditional Types allow you to create types that depend on conditions. They follow the pattern T extends U ? X : Y, enabling powerful type transformations.\n\nAdvanced Generics can make your functions and classes more flexible and reusable. By using constraints, default parameters, and mapped types, you can create sophisticated type definitions.\n\nBest Practices:\n- Use strict mode for better type safety\n- Leverage type guards for runtime type checking\n- Implement proper error handling with Result types\n- Use branded types for domain-specific values\n- Apply the principle of least privilege with readonly modifiers\n\nBy mastering these advanced patterns, you'll write more maintainable and bug-free TypeScript code.",
      author: "Md Magfur Alam",
      date: "2024-01-10T14:30:00.000Z",
      readTime: "12 min read",
      tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
      image: "/placeholder.svg?height=400&width=600&text=TypeScript+Advanced",
      published: true
    },
    {
      id: "3",
      title: "The Future of Frontend Development: Trends to Watch in 2024",
      excerpt: "Explore the emerging trends and technologies that are shaping the future of frontend development. From AI-powered tools to new frameworks, discover what's coming next.",
      content: "The frontend development landscape is constantly evolving, with new tools, frameworks, and methodologies emerging regularly. As we progress through 2024, several key trends are shaping the future of how we build user interfaces.\n\nAI-Powered Development Tools are revolutionizing how we write code. Tools like GitHub Copilot, Tabnine, and ChatGPT are helping developers write code faster and with fewer bugs. These tools can generate boilerplate code, suggest optimizations, and even help with debugging.\n\nMicro-Frontends are gaining traction as organizations look to scale their frontend applications. This architectural approach allows teams to work independently on different parts of an application, improving development velocity and maintainability.\n\nWeb Assembly (WASM) is enabling high-performance applications in the browser. Languages like Rust, C++, and Go can now run in the browser with near-native performance, opening up new possibilities for web applications.\n\nEdge Computing is bringing computation closer to users, reducing latency and improving performance. Frameworks like Next.js and Remix are embracing edge deployment, making it easier to build fast, globally distributed applications.\n\nSustainable Web Development is becoming increasingly important. Developers are focusing on creating more efficient, environmentally friendly websites that consume less energy and resources.\n\nKey trends to watch:\n- Progressive Web Apps (PWAs) becoming mainstream\n- Increased adoption of TypeScript\n- Growth of headless CMS solutions\n- Enhanced focus on web accessibility\n- Rise of no-code/low-code platforms\n\nStaying ahead of these trends will help you build better, more efficient, and more user-friendly applications.",
      author: "Md Magfur Alam",
      date: "2024-01-05T09:15:00.000Z",
      readTime: "10 min read",
      tags: ["Frontend", "Trends", "Web Development", "Technology"],
      image: "/placeholder.svg?height=400&width=600&text=Frontend+Trends+2024",
      published: true
    }
  ]
}

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Read blog data
async function readBlogData() {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(BLOG_DATA_PATH, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, create it with default data
    console.log('Creating default blog data file...')
    await writeBlogData(defaultBlogData)
    return defaultBlogData
  }
}

// Write blog data
async function writeBlogData(data: any) {
  try {
    await ensureDataDirectory()
    await fs.writeFile(BLOG_DATA_PATH, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error writing blog data:', error)
    throw error
  }
}

// Verify JWT token
function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    return null
  }
}

// GET - Fetch all blog posts
export async function GET() {
  try {
    const data = await readBlogData()
    return NextResponse.json(data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error in GET /api/blog:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const user = verifyToken(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const postData = await request.json()
    const data = await readBlogData()

    // Generate unique ID
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9)

    const newPost = {
      id,
      ...postData,
      date: postData.date || new Date().toISOString()
    }

    data.posts.unshift(newPost)
    await writeBlogData(data)

    return NextResponse.json({
      success: true,
      post: newPost,
      message: 'Post created successfully'
    })
  } catch (error) {
    console.error('Error in POST /api/blog:', error)
    return NextResponse.json(
      { error: 'Failed to create post', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// PUT - Update existing blog post
export async function PUT(request: NextRequest) {
  try {
    // Verify authentication
    const user = verifyToken(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const postData = await request.json()
    const data = await readBlogData()

    const postIndex = data.posts.findIndex((post: any) => post.id === postData.id)
    if (postIndex === -1) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    data.posts[postIndex] = { ...data.posts[postIndex], ...postData }
    await writeBlogData(data)

    return NextResponse.json({
      success: true,
      post: data.posts[postIndex],
      message: 'Post updated successfully'
    })
  } catch (error) {
    console.error('Error in PUT /api/blog:', error)
    return NextResponse.json(
      { error: 'Failed to update post', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// DELETE - Delete blog post
export async function DELETE(request: NextRequest) {
  try {
    // Verify authentication
    const user = verifyToken(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await request.json()
    const data = await readBlogData()

    const postIndex = data.posts.findIndex((post: any) => post.id === id)
    if (postIndex === -1) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    data.posts.splice(postIndex, 1)
    await writeBlogData(data)

    return NextResponse.json({
      success: true,
      message: 'Post deleted successfully'
    })
  } catch (error) {
    console.error('Error in DELETE /api/blog:', error)
    return NextResponse.json(
      { error: 'Failed to delete post', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
