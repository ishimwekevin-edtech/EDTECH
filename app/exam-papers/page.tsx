"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Plus, Copy, FileText, Home } from "lucide-react"
import { AnimatedFolder } from "@/components/ui/3d-folder"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function ExamPapersPage() {
  const folders = [
    {
      name: "Mathematics",
      projects: [
        { id: "math-1", image: "/math-exam-paper.jpg", title: "Algebra Exam 2024" },
        { id: "math-2", image: "/calculus-solutions.jpg", title: "Calculus Solutions" },
        { id: "math-3", image: "/geometry-problems.png", title: "Geometry Problems" },
      ],
    },
    {
      name: "Science",
      projects: [
        { id: "sci-1", image: "/biology-exam.jpg", title: "Biology Final Exam" },
        { id: "sci-2", image: "/chemistry-lab.png", title: "Chemistry Lab Guide" },
        { id: "sci-3", image: "/physics-questions.jpg", title: "Physics Q&A" },
      ],
    },
    {
      name: "Literature",
      projects: [
        { id: "lit-1", image: "/essay-writing.png", title: "Essay Writing Guide" },
        { id: "lit-2", image: "/poetry-analysis.png", title: "Poetry Analysis" },
        { id: "lit-3", image: "/novel-study.jpg", title: "Novel Study Notes" },
      ],
    },
    {
      name: "History",
      projects: [
        { id: "hist-1", image: "/world-history-collage.png", title: "World History Notes" },
        { id: "hist-2", image: "/timeline-events.jpg", title: "Timeline & Events" },
        { id: "hist-3", image: "/historical-figures.jpg", title: "Key Figures" },
      ],
    },
    {
      name: "Economics",
      projects: [
        { id: "econ-1", image: "/microeconomics.jpg", title: "Microeconomics" },
        { id: "econ-2", image: "/macroeconomics.jpg", title: "Macroeconomics" },
        { id: "econ-3", image: "/market-analysis-board.png", title: "Market Analysis" },
      ],
    },
    {
      name: "Physics",
      projects: [
        { id: "phys-1", image: "/mechanics-exam.jpg", title: "Mechanics Exam" },
        { id: "phys-2", image: "/thermodynamics.jpg", title: "Thermodynamics" },
        { id: "phys-3", image: "/waves-sound.jpg", title: "Waves & Sound" },
      ],
    },
  ]

  const files = [
    { name: "Mathematics-2024-Final-Exam.pdf", addedBy: "admin@edtech.com", date: "Jan 15, 2024" },
    { name: "Solution-Guide-Math-2024.docx", addedBy: "teacher@edtech.com", date: "Jan 16, 2024" },
    { name: "Science-Practical-Exam-2024.pdf", addedBy: "admin@edtech.com", date: "Jan 18, 2024" },
    { name: "Q&A-Science-Exam-2024.docx", addedBy: "educator@edtech.com", date: "Jan 19, 2024" },
    { name: "Literature-Essay-Questions.pdf", addedBy: "faculty@edtech.com", date: "Jan 20, 2024" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="inline-flex items-center gap-1.5">
                      <Home size={16} strokeWidth={2} aria-hidden="true" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Previous Exam Papers & Solution Guides</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Knowledge Base</h1>
                  <p className="text-muted-foreground mt-2">Previous Exam Papers & Solution Guides</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                    <Plus className="h-4 w-4" />
                    <span className="text-sm">Add</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Folders Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Folders</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {folders.map((folder, idx) => (
                  <AnimatedFolder key={idx} title={folder.name} projects={folder.projects} />
                ))}
              </div>
            </div>

            {/* Files Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Files</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Added By</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file, idx) => (
                      <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{file.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{file.addedBy}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{file.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
