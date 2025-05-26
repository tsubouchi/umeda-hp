import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Flower, Home } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Flower className="h-24 w-24 text-rose-600 mx-auto mb-6" />
              <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">ページが見つかりません</h2>
              <p className="text-xl text-gray-700 mb-8">
                申し訳ございません。お探しのページは存在しないか、移動された可能性があります。
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg">
                  <Home className="h-5 w-5 mr-2" />
                  ホームに戻る
                </Button>
              </Link>

              <div className="text-gray-600">
                <p>または以下のページをご利用ください：</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <Link href="/order" className="text-rose-600 hover:underline">
                    オンライン注文
                  </Link>
                  <Link href="/consultation" className="text-rose-600 hover:underline">
                    コンサルティング予約
                  </Link>
                  <Link href="/gallery" className="text-rose-600 hover:underline">
                    ギャラリー
                  </Link>
                  <Link href="/store-info" className="text-rose-600 hover:underline">
                    店舗情報
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
