import Link from "next/link"
import { Flower, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Flower className="h-8 w-8 text-rose-400" />
            <h2 className="text-2xl font-serif">フローラルブティック 梅田</h2>
          </div>

          <div className="flex justify-center space-x-6">
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>

          <div className="border-t border-gray-700 pt-6 space-y-2">
            <p className="text-gray-400">© 2024 フローラルブティック 梅田. All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
