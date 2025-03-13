"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Trang Chủ", href: "/" },
  { name: "Giới Thiệu", href: "/gioi-thieu" },
  { name: "Tin Tức", href: "/tin-tuc" },
  { name: "Sự Kiện", href: "/su-kien" },
  { name: "Đào Tạo", href: "/dao-tao" },
  { name: "Liên Hệ", href: "/lien-he" },
]

const subNavItems = {
  "/gioi-thieu": [
    { name: "Lịch sử", href: "/gioi-thieu/lich-su" },
    { name: "Điều lệ", href: "/gioi-thieu/dieu-le" },
    { name: "Ban chấp hành", href: "/gioi-thieu/ban-chap-hanh" },
    { name: "Các ban chức năng", href: "/gioi-thieu/cac-ban-chuc-nang" },
  ],
  "/tin-tuc": [
    { name: "Hoạt động", href: "/tin-tuc/hoat-dong" },
    { name: "Thông báo", href: "/tin-tuc/thong-bao" },
    { name: "Đơn vị trực thuộc", href: "/tin-tuc/don-vi-truc-thuoc" },
  ],
}

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-4">
              <Link href="https://www.facebook.com/vocotruyentphcmvn" className="hover:opacity-80">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@vothuatcotruyenvietnam" className="hover:opacity-80">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dang-ky" className="text-sm hover:opacity-80">
                Đăng ký
              </Link>
              <span className="text-sm">|</span>
              <Link href="/dang-nhap" className="text-sm hover:opacity-80">
                Đăng nhập
              </Link>
              <div className="flex items-center space-x-2 ml-4">
                <button className="flex items-center space-x-1 hover:opacity-80">
                  <Image
                    src="/vi.png?height=20&width=20"
                    alt="Tiếng Việt"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-sm">Tiếng Việt</span>
                </button>
                <button className="flex items-center space-x-1 hover:opacity-80">
                  <Image
                    src="/us.png?height=20&width=20"
                    alt="English"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-sm">English</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn("bg-white shadow-md transition-all duration-300", isScrolled ? "py-2" : "py-4")}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-16 mr-2">
                <Image
                  src="/vo-co-truyen-logo-new.png?height=64&width=64"
                  alt="Võ Cổ Truyền Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-red-700">Võ Cổ Truyền</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-red-600",
                    pathname === item.href ? "text-red-600" : "text-gray-800",
                  )}
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
              {isOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      {subNavItems[pathname as keyof typeof subNavItems] && (
        <div className="bg-gray-100 shadow-inner">
          <div className="container mx-auto px-4">
            <nav className="flex space-x-8 py-2 overflow-x-auto">
              {subNavItems[pathname as keyof typeof subNavItems]?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap font-medium transition-colors hover:text-red-600",
                    pathname === item.href ? "text-red-600" : "text-gray-600",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("px-4 py-3 hover:bg-gray-50", pathname === item.href ? "text-red-600" : "text-gray-800")}
                onClick={() => setIsOpen(false)}
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

