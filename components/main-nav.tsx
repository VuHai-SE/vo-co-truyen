"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Võ Cổ Truyền Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className={cn("font-bold text-xl transition-colors", isScrolled ? "text-red-700" : "text-white")}>
              Võ Cổ Truyền
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Events", href: "#events" },
              { name: "Training", href: "#training" },
              { name: "News", href: "#news" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-red-600",
                  isScrolled ? "text-gray-800" : "text-white",
                )}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Events", href: "#events" },
              { name: "Training", href: "#training" },
              { name: "News", href: "#news" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

