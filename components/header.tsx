"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/ui/auth-modal"
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Cpu,
  Eye,
  Sparkles,
  ShoppingCart,
  TrendingUp,
  Grid3X3,
  FileText,
  Wrench,
  Palette,
  BookOpen,
  Store,
  HelpCircle,
  Users,
  PenTool,
  Calendar,
  Newspaper,
  GitBranch,
  Sun,
  Moon,
} from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

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
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-[800px] p-6 bg-background border border-border rounded-lg shadow-lg backdrop-blur-md bg-background/95 z-50 transition-all duration-300 ease-out ${
                  productsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Frameworks</h3>
                    <div className="space-y-4">
                      <a
                        href="/masterclass"
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex h-8 w-8 items-center justify-center bg-blue-600 text-white rounded text-xs font-bold">
                          MC
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            MasterClass
                          </div>
                          <div className="text-xs text-muted-foreground">Premium educational platform</div>
                        </div>
                      </a>
                      <a
                        href="/bmaas"
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex h-8 w-8 items-center justify-center bg-green-600 text-white rounded text-xs font-bold">
                          BM
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>BMAAS</div>
                          <div className="text-xs text-muted-foreground">Branding & Marketing as a Service</div>
                        </div>
                      </a>
                      <a
                        href="/edcare"
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex h-8 w-8 items-center justify-center bg-purple-600 text-white rounded text-xs font-bold">
                          EC
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            EDCARE
                          </div>
                          <div className="text-xs text-muted-foreground">Educational Care Platform</div>
                        </div>
                      </a>
                      <a
                        href="https://personal-intelligent-v3.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex h-8 w-8 items-center justify-center bg-orange-600 text-white rounded text-xs font-bold">
                          PI
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Personal Intelligent
                          </div>
                          <div className="text-xs text-muted-foreground">AI-powered personal assistant</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Infrastructure</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <BarChart3 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>CI/CD</div>
                          <div className="text-xs text-muted-foreground">Helping teams ship 6x faster</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Globe className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Delivery network
                          </div>
                          <div className="text-xs text-muted-foreground">Fast, scalable, and reliable</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Fluid compute
                          </div>
                          <div className="text-xs text-muted-foreground">Servers, in serverless form</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            AI Infrastructure
                          </div>
                          <div className="text-xs text-muted-foreground">AI Gateway, Sandbox, and more</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Eye className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Observability
                          </div>
                          <div className="text-xs text-muted-foreground">Trace every step</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Security</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Shield className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Platform security
                          </div>
                          <div className="text-xs text-muted-foreground">DDoS Protection, Firewall</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Shield className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Web Application Firewall
                          </div>
                          <div className="text-xs text-muted-foreground">Granular, custom protection</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Shield className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Bot management
                          </div>
                          <div className="text-xs text-muted-foreground">BotID, Bot Protection</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
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
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Use Cases</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            AI Apps
                          </div>
                          <div className="text-xs text-muted-foreground">Deploy at the speed of AI</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <ShoppingCart className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Composable Commerce
                          </div>
                          <div className="text-xs text-muted-foreground">Power storefronts that convert</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Marketing Sites
                          </div>
                          <div className="text-xs text-muted-foreground">Launch campaigns fast</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Grid3X3 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Multi-tenant Platforms
                          </div>
                          <div className="text-xs text-muted-foreground">Scale apps with one codebase</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Web Apps
                          </div>
                          <div className="text-xs text-muted-foreground">Ship features, not infrastructure</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Users</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Wrench className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Platform Engineers
                          </div>
                          <div className="text-xs text-muted-foreground">Automate away repetition</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Palette className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Design Engineers
                          </div>
                          <div className="text-xs text-muted-foreground">Deploy for every idea</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-[600px] p-6 bg-background border border-border rounded-lg shadow-lg backdrop-blur-md bg-background/95 z-50 transition-all duration-300 ease-out ${
                  resourcesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Tools</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Resource Center
                          </div>
                          <div className="text-xs text-muted-foreground">Today's best practices</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Store className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Marketplace
                          </div>
                          <div className="text-xs text-muted-foreground">Extend and automate workflows</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Templates
                          </div>
                          <div className="text-xs text-muted-foreground">Jumpstart app development</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <HelpCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Guides
                          </div>
                          <div className="text-xs text-muted-foreground">Find help quickly</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <PenTool className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Partner Finder
                          </div>
                          <div className="text-xs text-muted-foreground">Get help from solution partners</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Company</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Customers
                          </div>
                          <div className="text-xs text-muted-foreground">Trusted by the best teams</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <PenTool className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>Blog</div>
                          <div className="text-xs text-muted-foreground">The latest posts and changes</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <GitBranch className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Changelog
                          </div>
                          <div className="text-xs text-muted-foreground">See what shipped</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Newspaper className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>Press</div>
                          <div className="text-xs text-muted-foreground">Read the latest news</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex h-8 w-8 items-center justify-center">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
                            Events
                          </div>
                          <div className="text-xs text-muted-foreground">Join us at an event</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"} hover:text-muted-foreground transition-colors`}
            >
              Enterprise
            </a>
            <a
              href="#"
              className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"} hover:text-muted-foreground transition-colors`}
            >
              Docs
            </a>
            <a
              href="#"
              className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"} hover:text-muted-foreground transition-colors`}
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <Button size="sm">Dashboard</Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setAuthModalOpen(true)}
              className="bg-green-500 text-white hover:bg-green-600"
            >
              Sign In
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
              <a href="#" className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                Products
              </a>
              <a href="#" className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                Solutions
              </a>
              <a href="#" className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                Resources
              </a>
              <a href="#" className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                Enterprise
              </a>
              <a href="#" className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                Docs
              </a>
              <a href="#" className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start" onClick={toggleTheme}>
                  {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  Contact
                </Button>
                <Button size="sm" className="justify-start">
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setAuthModalOpen(true)}
                  className="justify-start bg-green-500 text-white hover:bg-green-600"
                >
                  Sign In
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
