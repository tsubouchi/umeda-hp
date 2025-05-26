"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Flower } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // メニューが開いているときはスクロールを無効化
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/order", label: "オンライン注文" },
    { href: "/consultation", label: "コンサルティング予約" },
    { href: "/corporate", label: "法人様サービス" },
    { href: "/gallery", label: "ギャラリー" },
    { href: "/store-info", label: "店舗情報" },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3" onClick={closeMenu}>
          <Flower className="h-6 w-6 sm:h-8 sm:w-8 text-rose-600" />
          <h1 className="text-lg sm:text-2xl font-serif text-gray-900 truncate">フローラルブティック 梅田</h1>
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* 電話番号 - デスクトップのみ表示 */}
          <div className="hidden md:flex items-center space-x-2 text-gray-700">
            <Phone className="h-4 w-4" />
            <span className="font-medium">06-1234-5678</span>
          </div>

          {/* ハンバーガーメニューボタン */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 h-10 w-10 sm:h-12 sm:w-12"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>
      </div>

      {/* モバイルナビゲーションメニュー */}
      {isMenuOpen && (
        <>
          {/* オーバーレイ */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu} />

          {/* メニューパネル */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* ヘッダー */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <Flower className="h-6 w-6 text-rose-600" />
                  <span className="font-serif text-lg text-gray-900">メニュー</span>
                </div>
              </div>

              {/* ナビゲーションリンク */}
              <nav className="flex-1 overflow-y-auto">
                <ul className="py-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-6 py-4 text-lg transition-colors border-l-4 ${
                          pathname === item.href
                            ? "text-rose-600 font-medium bg-rose-50 border-rose-600"
                            : "text-gray-700 hover:text-rose-600 hover:bg-gray-50 border-transparent"
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* フッター情報 */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">06-1234-5678</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    平日 11:00-19:00
                    <br />
                    土日祝 10:00-18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
