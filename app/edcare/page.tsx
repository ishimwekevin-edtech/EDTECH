"use client"

import VideoPlayer from "@/components/ui/video-player"

export default function EdCarePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-6xl font-bold mb-6 text-white">EDCARE</h1>
        <p className="text-xl text-gray-300 mb-4">Educational Care Platform</p>
      </div>

      <VideoPlayer src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4" />

      <div className="text-center max-w-2xl mx-auto mt-12">
        <div className="text-lg text-gray-300 leading-relaxed">
          <p className="mb-8">This platform is currently under maintenance.</p>
          <div className="space-y-2">
            <p>For more information, contact:</p>
            <p className="text-purple-400">📞 +250795695555</p>
            <p className="text-purple-400">✉️ ishimwekevin199@gmail.com</p>
            <p className="text-purple-400">✉️ ishimwekevin911@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
