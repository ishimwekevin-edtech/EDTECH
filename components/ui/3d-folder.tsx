"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  image: string
  title: string
}

interface AnimatedFolderProps {
  title: string
  projects: Project[]
  className?: string
}

export function AnimatedFolder({ title, projects, className }: AnimatedFolderProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center",
        "p-8 rounded-2xl cursor-pointer",
        "bg-gray-900 border border-gray-800",
        "transition-all duration-500 ease-out",
        "hover:shadow-2xl hover:shadow-gray-700/20",
        "hover:border-gray-700",
        "group",
        className,
      )}
      style={{
        minWidth: "280px",
        minHeight: "320px",
        perspective: "1000px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at 50% 70%, rgb(55, 65, 81) 0%, transparent 70%)",
          opacity: isHovered ? 0.05 : 0,
        }}
      />

      <div className="relative flex items-center justify-center mb-4" style={{ height: "160px", width: "200px" }}>
        <div
          className="absolute w-32 h-24 bg-gray-800 rounded-lg shadow-md"
          style={{
            transformOrigin: "bottom center",
            transform: isHovered ? "rotateX(-15deg)" : "rotateX(0deg)",
            transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 10,
          }}
        />

        <div
          className="absolute w-12 h-4 bg-gray-700 rounded-t-md"
          style={{
            top: "calc(50% - 48px - 12px)",
            left: "calc(50% - 64px + 16px)",
            transformOrigin: "bottom center",
            transform: isHovered ? "rotateX(-25deg) translateY(-2px)" : "rotateX(0deg)",
            transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 10,
          }}
        />

        <div
          className="absolute w-32 h-24 bg-gray-700 rounded-lg shadow-lg"
          style={{
            top: "calc(50% - 48px + 4px)",
            transformOrigin: "bottom center",
            transform: isHovered ? "rotateX(25deg) translateY(8px)" : "rotateX(0deg)",
            transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 30,
          }}
        />

        <div
          className="absolute w-32 h-24 rounded-lg overflow-hidden pointer-events-none"
          style={{
            top: "calc(50% - 48px + 4px)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
            transformOrigin: "bottom center",
            transform: isHovered ? "rotateX(25deg) translateY(8px)" : "rotateX(0deg)",
            transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 31,
          }}
        />
      </div>

      <h3
        className="text-lg font-semibold text-white mt-4 transition-all duration-300"
        style={{
          transform: isHovered ? "translateY(4px)" : "translateY(0)",
        }}
      >
        {title}
      </h3>

      <p
        className="text-sm text-gray-400 transition-all duration-300"
        style={{
          opacity: isHovered ? 0.7 : 1,
        }}
      >
        {projects.length} items
      </p>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs text-gray-500 transition-all duration-300"
        style={{
          opacity: isHovered ? 0 : 0.6,
          transform: isHovered ? "translateY(10px)" : "translateY(0)",
        }}
      >
        <span>Hover to explore</span>
      </div>
    </div>
  )
}
