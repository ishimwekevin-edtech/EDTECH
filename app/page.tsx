import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <main className="container mx-auto px-4 py-16">
        <iframe
          src="https://ai-sdk-preview-pdf-support.vercel.app/"
          className="w-full h-[800px] border-0 rounded-lg shadow-lg"
          title="AI SDK Preview PDF Support"
        />
      </main>
      <Footer />
    </div>
  )
}
