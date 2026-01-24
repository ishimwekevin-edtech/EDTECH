import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "EDTECH - AI-Powered Education Platform | Rwanda & Africa",
  description: "Discover EDTECH: Personalized AI learning, intelligent tutoring systems, and comprehensive exam preparation. Empowering students across Rwanda and Africa with innovative educational technology.",
  keywords: "AI education, personalized learning, intelligent tutoring, exam prep, African edtech, Rwanda education technology, student learning platform",
  openGraph: {
    title: "EDTECH - Transform Education with AI",
    description: "Personalized learning and intelligent tutoring powered by AI for students across Africa.",
    url: "https://edtech.vercel.app",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  )
}
