"use client";
import Link from "next/link"
import { Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background py-16 relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Left section - Name and title */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Ranjit Bobade</h2>
            <p className="text-muted-foreground">Full stack developer</p>
          </div>

          {/* Middle section - Navigation */}
          <nav className="flex justify-center gap-6">
            <Link 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              href="#skills" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link 
              href="#projects" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
          </nav>

          {/* Right section - Social links */}
          <div className="flex justify-center md:justify-end gap-4">
            <Link 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/* Copyright text */}
        <div className="text-center text-sm text-muted-foreground">
          © Ranjit Bobade. All rights reserved
        </div>

        {/* Scroll to top button */}
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-4 right-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  )
}

