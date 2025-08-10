import type { Metadata } from "next"
import { Space_Grotesk, Inter } from 'next/font/google'
import CustomCursor from "@/components/CustomCursor";
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Md Magfur Alam - Senior Software Engineer",
    description: "I craft high-performance, scalable, and visually compelling web applications that drive real impact.With over 6 years of expertise in React.js, Next.js, Node.js, and GIS-driven solutions, I’ve delivered innovative products for government agencies, AI-powered startups, and global enterprises. I specialize in transforming complex challenges into intuitive, user-centric experiences, blending clean design, robust architecture, and measurable performance gains to create solutions that last.",
  keywords: ["Senior Software Engineer", "Frontend Developer", "React.js", "Next.js", "TypeScript", "GIS", "OpenLayers", "Bangladesh"],
  authors: [{ name: "Md Magfur Alam" }],
  creator: "Md Magfur Alam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://magfuralam.dev",
    title: "Md Magfur Alam - Senior Software Engineer",
    description: "I craft high-performance, scalable, and visually compelling web applications that drive real impact.With over 6 years of expertise in React.js, Next.js, Node.js, and GIS-driven solutions, I’ve delivered innovative products for government agencies, AI-powered startups, and global enterprises. I specialize in transforming complex challenges into intuitive, user-centric experiences, blending clean design, robust architecture, and measurable performance gains to create solutions that last.",
    siteName: "Md Magfur Alam Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md Magfur Alam - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Magfur Alam - Senior Software Engineer",
    description: "I craft high-performance, scalable, and visually compelling web applications that drive real impact.With over 6 years of expertise in React.js, Next.js, Node.js, and GIS-driven solutions, I’ve delivered innovative products for government agencies, AI-powered startups, and global enterprises. I specialize in transforming complex challenges into intuitive, user-centric experiences, blending clean design, robust architecture, and measurable performance gains to create solutions that last.",
    creator: "@magfurrumel",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
          <div className="cursor-none relative">
            <CustomCursor />
             {children}
          </div>
      </body>
    </html>
  )
}
