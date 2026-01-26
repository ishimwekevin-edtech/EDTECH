"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/ui/auth-modal"
import {
  Menu,
  X,
} from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)

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
            <a href="/" className="text-sm font-medium text-white hover:text-muted-foreground transition-colors">
              Home
            </a>
            <a href="/exam-papers" className="text-sm font-medium text-white hover:text-muted-foreground transition-colors">
              Exam Papers
            </a>
            <a href="#" className="text-sm font-medium text-white hover:text-muted-foreground transition-colors">
              Enterprise
            </a>
            <a href="#" className="text-sm font-medium text-white hover:text-muted-foreground transition-colors">
              Docs
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </a>
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
              <a href="/" className="text-sm font-medium text-white">
                Home
              </a>
              <a href="/exam-papers" className="text-sm font-medium text-white">
                Exam Papers
              </a>
              <a href="#" className="text-sm font-medium text-white">
                Enterprise
              </a>
              <a href="#" className="text-sm font-medium text-white">
                Docs
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <a href="/contact">
                  <Button variant="ghost" size="sm" className="justify-start">
                    Contact
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </header>
  )
}
