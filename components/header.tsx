"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/ui/auth-modal"
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  BookOpen,
  PenTool,
  Brain,
  MapPin,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Users2,
  Building2,
  UserCheck,
  Zap,
} from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const productsRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false)
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center"></div>
              <span className="text-xl font-thin">{"EDTECH"}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div
              ref={productsRef}
              className="relative"
            >
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-[600px] p-6 bg-background border border-border rounded-lg shadow-lg backdrop-blur-md bg-background/95 z-50 transition-all duration-300 ease-out ${
                  productsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Frameworks</h3>
                    <div className="space-y-4">
                      <a
                        href="https://personal-intelligent-v5.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <Brain className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="font-medium text-sm text-white">Personal Intelligent</div>
                          <div className="text-xs text-muted-foreground">Educational AI Platform</div>
                        </div>
                      </a>
                      <a
                        href="https://schoolfinder.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <MapPin className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium text-sm text-white">SchoolFinder</div>
                          <div className="text-xs text-muted-foreground">Find and discover schools</div>
                        </div>
                      </a>
                      <a
                        href="https://bmaas.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <Briefcase className="h-5 w-5 text-orange-500" />
                        <div>
                          <div className="font-medium text-sm text-white">BMAAS</div>
                          <div className="text-xs text-muted-foreground">Branding & Marketing as a Service</div>
                        </div>
                      </a>
                      <a
                        href="https://vibelearning.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <Zap className="h-5 w-5 text-purple-500" />
                        <div>
                          <div className="font-medium text-sm text-white">Vibe Learning</div>
                          <div className="text-xs text-muted-foreground">Dynamic interactive learning platform</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={solutionsRef}
              className="relative"
            >
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-[600px] p-6 bg-background border border-border rounded-lg shadow-lg backdrop-blur-md bg-background/95 z-50 transition-all duration-300 ease-out ${
                  solutionsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">
                      Education Powered by AI Use Cases
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Lightbulb className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Students Simulator</div>
                          <div className="text-xs text-muted-foreground">Adaptive AI-driven education</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Personalised Learning</div>
                          <div className="text-xs text-muted-foreground">AI-powered academic support</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Grades Simulator</div>
                          <div className="text-xs text-muted-foreground">Automated grading and feedback</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Content Generation</div>
                          <div className="text-xs text-muted-foreground">AI-created learning materials</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Virtual Schools</div>
                          <div className="text-xs text-muted-foreground">Complete digital learning environments</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Users</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Students</div>
                          <div className="text-xs text-muted-foreground">Learn with AI assistance</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <PenTool className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Teachers</div>
                          <div className="text-xs text-muted-foreground">Enhance classroom experiences</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <UserCheck className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">School Admins</div>
                          <div className="text-xs text-muted-foreground">Manage educational platforms</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Users2 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Parents</div>
                          <div className="text-xs text-muted-foreground">Monitor student progress</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">Education Institutions</div>
                          <div className="text-xs text-muted-foreground">Transform learning ecosystems</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={resourcesRef}
              className="relative"
            >
              <button 
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-[400px] p-6 bg-background border border-border rounded-lg shadow-lg backdrop-blur-md bg-background/95 z-50 transition-all duration-300 ease-out ${
                  resourcesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Past Papers With Q&A</h3>
                    <div className="space-y-2">
                      <a
                        href="/exam-papers"
                        onClick={() => setResourcesOpen(false)}
                        className="block text-sm text-white hover:text-muted-foreground transition-colors"
                      >
                        Previous Exam Papers & Solution Guides
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Courses</h3>
                    <div className="space-y-2">
                      <a href="#" onClick={() => setResourcesOpen(false)} className="block text-sm text-white hover:text-muted-foreground transition-colors">
                        Online Courses
                      </a>
                      <a href="#" onClick={() => setResourcesOpen(false)} className="block text-sm text-white hover:text-muted-foreground transition-colors">
                        Learning Paths
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="text-sm font-medium text-white hover:text-muted-foreground transition-colors">
              Enterprise
            </a>
            <a href="#" className="text-sm font-medium text-white hover:text-muted-foreground transition-colors">
              Docs
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/contact">Contact</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium text-white">
                Products
              </a>
              <a href="#" className="text-sm font-medium text-white">
                Solutions
              </a>
              <a href="#" className="text-sm font-medium text-white">
                Resources
              </a>
              <a href="#" className="text-sm font-medium text-white">
                Enterprise
              </a>
              <a href="#" className="text-sm font-medium text-white">
                Docs
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start" asChild>
                  <a href="/contact">Contact</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </header>
  )
}
