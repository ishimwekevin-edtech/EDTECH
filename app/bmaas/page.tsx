"use client"

import { VideoPlayer } from "@/components/ui/video-player"

export default function BMaaSPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-6xl font-bold text-center mb-8 text-white">BMAAS</h1>

        <VideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="/placeholder.svg?height=720&width=1280"
          className="w-full aspect-video"
        />

        <div className="text-center space-y-4 mt-8">
          <p className="text-xl text-gray-300">Welcome to BMAAS - Branding & Marketing as a Service</p>
          <p className="text-lg text-gray-400">This platform is currently under maintenance.</p>
          <div className="space-y-2 text-lg pt-4">
            <p className="text-gray-300">For more information, contact:</p>
            <p className="text-green-400">📞 +250795695555</p>
            <p className="text-green-400">✉️ ishimwekevin199@gmail.com</p>
            <p className="text-green-400">✉️ ishimwekevin911@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
