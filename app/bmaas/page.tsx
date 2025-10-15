"use client"

import { VideoPlayer } from "@/components/ui/video-player"

export default function BMaaSPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">BMAAS</h1>
          <p className="text-xl text-gray-300">Branding & Marketing as a Service</p>
        </div>

        <div className="w-full aspect-video">
          <VideoPlayer
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            poster="/placeholder.svg?height=720&width=1280"
            className="w-full h-full"
          />
        </div>

        <div className="text-center space-y-4 bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
          <p className="text-lg text-gray-300">This platform is currently under maintenance.</p>
          <div className="space-y-2">
            <p className="text-gray-400">For more information, contact:</p>
            <div className="space-y-1">
              <p className="text-green-400">📞 +250795695555</p>
              <p className="text-green-400">✉️ ishimwekevin199@gmail.com</p>
              <p className="text-green-400">✉️ ishimwekevin911@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
