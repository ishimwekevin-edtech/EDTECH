"use client"

import { Footer } from "@/components/footer"
import { FileText, Home, ChevronRight } from "lucide-react"
import { AnimatedFolder } from "@/components/ui/3d-folder"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SearchDemo } from "@/components/ui/search-demo"
import Link from "next/link"
import { useState } from "react"

export default function ExamPapersPage() {
  const [expandedCurriculum, setExpandedCurriculum] = useState<string | null>(null)

  const curriculums = [
    {
      name: "Rwanda National Curriculum",
      id: "rwanda",
      classes: [
        {
          name: "TVET (Vocational Training)",
          id: "tvet",
          levels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
          folders: [
            {
              name: "Level 1 Exams",
              projects: [
                { id: "tvet-l1-1", image: "/math-exam-paper.jpg", title: "TVET L1 Practical" },
                { id: "tvet-l1-2", image: "/calculus-solutions.jpg", title: "TVET L1 Theory" },
              ],
            },
            {
              name: "Level 2 Exams",
              projects: [{ id: "tvet-l2-1", image: "/geometry-problems.png", title: "TVET L2 Practical" }],
            },
            {
              name: "Level 3 Exams",
              projects: [{ id: "tvet-l3-1", image: "/biology-exam.jpg", title: "TVET L3 Practical" }],
            },
            {
              name: "Level 4 Exams",
              projects: [{ id: "tvet-l4-1", image: "/chemistry-lab.png", title: "TVET L4 Practical" }],
            },
            {
              name: "Level 5 Exams",
              projects: [{ id: "tvet-l5-1", image: "/physics-questions.jpg", title: "TVET L5 Practical" }],
            },
          ],
        },
        {
          name: "General Education",
          id: "general",
          levels: [
            "Primary (6 years)",
            "Lower Secondary O-Level (3 years)",
            "Upper Secondary A-Level (3 years with pathways)",
            "Bachelor's Degree (4 years)",
          ],
          folders: [
            {
              name: "Primary (Years 1-6)",
              projects: [
                { id: "primary-1", image: "/essay-writing.png", title: "Primary Year 1-3" },
                { id: "primary-2", image: "/poetry-analysis.png", title: "Primary Year 4-6" },
              ],
            },
            {
              name: "Lower Secondary O-Level (Years 7-9)",
              projects: [
                { id: "olevel-1", image: "/novel-study.jpg", title: "O-Level Science" },
                { id: "olevel-2", image: "/world-history-collage.png", title: "O-Level Mathematics" },
                { id: "olevel-3", image: "/timeline-events.jpg", title: "O-Level Languages" },
              ],
            },
            {
              name: "Upper Secondary A-Level (Years 10-12)",
              projects: [
                { id: "alevel-1", image: "/historical-figures.jpg", title: "A-Level Math/Science Path" },
                { id: "alevel-2", image: "/microeconomics.jpg", title: "A-Level Arts/Humanities Path" },
                { id: "alevel-3", image: "/macroeconomics.jpg", title: "A-Level Languages Path" },
              ],
            },
            {
              name: "Bachelor's Degree (4 years)",
              projects: [
                { id: "bach-1", image: "/market-analysis-board.png", title: "Bachelor Engineering" },
                { id: "bach-2", image: "/mechanics-exam.jpg", title: "Bachelor Business" },
                { id: "bach-3", image: "/thermodynamics.jpg", title: "Bachelor Arts & Science" },
              ],
            },
          ],
        },
        {
          name: "Cambridge International",
          id: "cambridge",
          levels: ["Early Years", "Primary", "Lower Secondary", "Upper Secondary IGCSE", "Advanced AS & A Levels"],
          folders: [
            {
              name: "Cambridge Early Years",
              projects: [{ id: "camb-ey-1", image: "/waves-sound.jpg", title: "Cambridge EY Foundation" }],
            },
            {
              name: "Cambridge Primary",
              projects: [
                { id: "camb-p-1", image: "/math-exam-paper.jpg", title: "Cambridge Primary Math" },
                { id: "camb-p-2", image: "/calculus-solutions.jpg", title: "Cambridge Primary English" },
              ],
            },
            {
              name: "Cambridge Lower Secondary",
              projects: [{ id: "camb-ls-1", image: "/geometry-problems.png", title: "Cambridge Lower Secondary" }],
            },
            {
              name: "Cambridge Upper Secondary IGCSE",
              projects: [
                { id: "camb-igcse-1", image: "/biology-exam.jpg", title: "IGCSE Science" },
                { id: "camb-igcse-2", image: "/chemistry-lab.png", title: "IGCSE Mathematics" },
                { id: "camb-igcse-3", image: "/physics-questions.jpg", title: "IGCSE Languages" },
              ],
            },
            {
              name: "Cambridge Advanced (AS & A Levels)",
              projects: [
                { id: "camb-as-1", image: "/essay-writing.png", title: "AS Level Subjects" },
                { id: "camb-a-1", image: "/poetry-analysis.png", title: "A Level Subjects" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "International Curricula",
      id: "international",
      classes: [
        {
          name: "IB (International Baccalaureate)",
          id: "ib",
          levels: ["Primary Years", "Middle Years", "Diploma Program"],
          folders: [
            {
              name: "IB Primary Years Programme",
              projects: [{ id: "ib-pyp-1", image: "/novel-study.jpg", title: "IB PYP Curriculum" }],
            },
            {
              name: "IB Middle Years Programme",
              projects: [{ id: "ib-myp-1", image: "/world-history-collage.png", title: "IB MYP Subjects" }],
            },
            {
              name: "IB Diploma Programme",
              projects: [
                { id: "ib-dp-1", image: "/timeline-events.jpg", title: "IB DP Higher Level" },
                { id: "ib-dp-2", image: "/historical-figures.jpg", title: "IB DP Standard Level" },
              ],
            },
          ],
        },
        {
          name: "British National Curriculum",
          id: "british",
          levels: ["Key Stage 1", "Key Stage 2", "Key Stage 3", "GCSE", "A-Levels"],
          folders: [
            {
              name: "GCSE Exams",
              projects: [{ id: "gcse-1", image: "/microeconomics.jpg", title: "GCSE All Subjects" }],
            },
            {
              name: "A-Level Exams",
              projects: [
                { id: "alevel-1", image: "/macroeconomics.jpg", title: "A-Level Sciences" },
                { id: "alevel-2", image: "/market-analysis-board.png", title: "A-Level Humanities" },
              ],
            },
          ],
        },
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
    <div className="min-h-screen bg-black text-white">
      <main>
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white">
                      <Home size={16} strokeWidth={2} aria-hidden="true" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-400">Previous Exam Papers & Solution Guides</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SearchDemo />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Folders Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Folders</h2>
              <div className="space-y-6">
                {curriculums.map((curriculum) => (
                  <div key={curriculum.id} className="border border-gray-800 rounded-lg bg-gray-950">
                    <button
                      onClick={() => setExpandedCurriculum(expandedCurriculum === curriculum.id ? null : curriculum.id)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-900 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white">{curriculum.name}</h3>
                      <ChevronRight
                        size={20}
                        className={`transition-transform text-gray-400 ${expandedCurriculum === curriculum.id ? "rotate-90" : ""}`}
                      />
                    </button>

                    {expandedCurriculum === curriculum.id && (
                      <div className="border-t border-gray-800 p-6 space-y-6">
                        {curriculum.classes.map((classItem) => (
                          <div key={classItem.id} className="space-y-4">
                            <h4 className="text-base font-semibold text-white">{classItem.name}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {classItem.folders.map((folder, idx) => (
                                <AnimatedFolder key={idx} title={folder.name} projects={folder.projects} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Files Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Files</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Added By</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file, idx) => (
                      <tr key={idx} className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                        <td className="px-4 py-3 text-sm text-gray-100">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-gray-500" />
                            <span>{file.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-400">{file.addedBy}</td>
                        <td className="px-4 py-3 text-sm text-gray-400">{file.date}</td>
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
