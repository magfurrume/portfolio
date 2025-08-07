import type { Metadata } from "next"
import { Space_Grotesk, Inter } from 'next/font/google'
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
  description: "Experienced Front-End Developer with over 6 years of expertise building modern, scalable, and high-performance web applications. Specialized in React.js, Next.js, and GIS applications.",
  keywords: ["Senior Software Engineer", "Frontend Developer", "React.js", "Next.js", "TypeScript", "GIS", "OpenLayers", "Bangladesh"],
  authors: [{ name: "Md Magfur Alam" }],
  creator: "Md Magfur Alam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://magfuralam.dev",
    title: "Md Magfur Alam - Senior Software Engineer",
    description: "Experienced Front-End Developer with over 6 years of expertise building modern, scalable, and high-performance web applications.",
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
    description: "Experienced Front-End Developer with over 6 years of expertise building modern, scalable, and high-performance web applications.",
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
        {children}
      </body>
    </html>
  )
}
