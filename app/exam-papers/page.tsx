'use client';

import { BreadcrumbPage } from "@/components/ui/breadcrumb"
import { BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { BreadcrumbLink } from "@/components/ui/breadcrumb"
import { BreadcrumbItem } from "@/components/ui/breadcrumb"
import { BreadcrumbList } from "@/components/ui/breadcrumb"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useState } from "react"
import type { Metadata } from "next"
import { ExamPapersContent } from "./client"
import Home from "@/components/icons/Home"
import SearchDemo from "@/components/SearchDemo"
import ChevronRight from "@/components/icons/ChevronRight"
import AnimatedFolder from "@/components/AnimatedFolder"
import FileText from "@/components/icons/FileText"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Previous Exam Papers & Solutions | EDTECH Knowledge Base",
  description: "Access comprehensive previous exam papers with solutions for TVET, General Education, and Cambridge International curricula. Covering Rwanda and international education systems.",
  keywords: "exam papers, previous papers, solutions, TVET exams, Cambridge IGCSE, O-Level, A-Level, exam prep, study materials",
  openGraph: {
    title: "Previous Exam Papers & Solutions",
    description: "Complete collection of exam papers with detailed solutions for all curricula.",
    url: "https://edtech.vercel.app/exam-papers",
    type: "website",
  },
}

export default function ExamPapersPage() {
  // Placeholder for the rest of the code
}
