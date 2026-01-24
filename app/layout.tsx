import type React from "react"
import type { Metadata } from "next"
import { Saira } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const saira = Saira({ subsets: ["latin"], variable: "--font-saira" })

export const metadata: Metadata = {
  title: "EDTECH - AI-Powered Educational Platform for Africa | Student Learning Solutions",
  description: "EDTECH is Rwanda and Africa's leading AI-powered educational technology platform. Personalized learning, intelligent tutoring, and comprehensive exam preparation for students across all curricula.",
  keywords: "edtech, online learning, AI education, Rwanda education, African edtech, student tutoring, exam preparation, e-learning platform",
  generator: "v0.app",
  metadataBase: new URL("https://edtech.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edtech.vercel.app",
    siteName: "EDTECH",
    title: "EDTECH - AI-Powered Educational Platform for Africa",
    description: "Transform education with AI. Personalized learning, intelligent tutoring, and exam solutions for students across Rwanda and Africa.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "EDTECH - Educational Technology Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDTECH - AI-Powered Educational Platform",
    description: "AI-driven education solutions for African students. Learn smarter with personalized tutoring and comprehensive resources.",
    images: ["/placeholder.jpg"],
    creator: "@edtech_africa",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://edtech.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={saira.variable}>
      <head>
        <script src="https://getlaunchlist.com/js/widget.js" defer></script>
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
