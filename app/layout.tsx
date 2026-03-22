import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { MouseGlow } from "@/components/mouse-glow"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rishabh Pandey — Software Developer & MERN Stack Engineer",
  description:
    "Aspiring Software Developer | MERN Stack Developer passionate about building scalable full-stack applications and exploring AI-powered solutions.",
  generator: "v0.app",
  keywords: ["Rishabh Pandey", "Software Developer", "MERN Stack", "React", "Node.js", "Full Stack", "Portfolio"],
  authors: [{ name: "Rishabh Pandey" }],
  openGraph: {
    title: "Rishabh Pandey — Software Developer",
    description: "Aspiring Software Developer | MERN Stack Developer",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground">
        <MouseGlow />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
