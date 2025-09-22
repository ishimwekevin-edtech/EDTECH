"use client"

import Prism from "@/components/ui/prism"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [showWidget, setShowWidget] = useState(false)

  const handleJoinMission = () => {
    // Load the LaunchList script if not already loaded
    if (!document.querySelector('script[src="https://getlaunchlist.com/js/widget.js"]')) {
      const script = document.createElement("script")
      script.src = "https://getlaunchlist.com/js/widget.js"
      script.defer = true
      document.head.appendChild(script)
    }

    // Show the widget
    setShowWidget(true)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="hover"
          timeScale={0.3}
          height={4}
          baseWidth={6}
          scale={4}
          hueShift={0.5}
          colorFrequency={1.2}
          noise={0.3}
          glow={1.5}
          bloom={1.2}
          hoverStrength={1.5}
          inertia={0.08}
          suspendWhenOffscreen={true}
        />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">{"Learn the Learning in AI Era"}</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/80 text-pretty max-w-2xl mx-auto">
          {"Adopting a mindset of continuous adaptation, focusing on uniquely human skills, and leveraging AI as a learning partner."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
            onClick={handleJoinMission}
          >
            Join Mission
          </Button>
        </div>

        {showWidget && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative animate-in zoom-in-95 duration-300 ease-out">
              <button
                onClick={() => setShowWidget(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
              <div className="pt-4">
                <div className="launchlist-widget" data-key-id="9Z5nkM" data-height="180px"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
