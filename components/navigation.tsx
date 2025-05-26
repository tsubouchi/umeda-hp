"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Phone, Menu, Flower } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/order", label: "オンライン注文" },
    { href: "/consultation", label: "コンサルティング予約" },
    { href: "/corporate", label: "法人様サービス" },
    { href: "/gallery", label: "ギャラリー" },
    { href: "/store-info", label: "店舗情報" },
  ]

  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Flower className="h-8 w-8 text-rose-600" />
          <h1 className="text-2xl font-serif text-gray-900">フローラルブティック 梅田</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center space-x-2 text-gray-700">
            <Phone className="h-4 w-4" />
            <span className="font-medium">06-1234-5678</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block transition-colors ${
                      pathname === item.href ? "text-rose-600 font-medium" : "text-gray-700 hover:text-rose-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
