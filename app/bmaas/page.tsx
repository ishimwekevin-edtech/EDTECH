"use client"

import { useState, useEffect } from "react"
import { Toast } from "@/components/ui/toast"

export default function BMaaSPage() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    setShowToast(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-8 text-white">BMAAS</h1>
        <div className="text-xl text-gray-300 leading-relaxed">
          <p className="mb-6">Welcome to BMAAS - Branding &amp; Marketing as a Service</p>
          <p className="mb-8">This platform is currently under maintenance.</p>
          <div className="space-y-2 text-lg">
            <p>For more information, contact:</p>
            <p className="text-green-400">📞 +250795695555</p>
            <p className="text-green-400">✉️ ishimwekevin199@gmail.com</p>
            <p className="text-green-400">✉️ ishimwekevin911@gmail.com</p>
          </div>
        </div>
      </div>

      {showToast && (
        <Toast
          title="Welcome to BMAAS"
          description="It's Still Under Maintenance for more contact: +250795695555 or ishimwekevin199@gmail.com or ishimwekevin911@gmail.com"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}
