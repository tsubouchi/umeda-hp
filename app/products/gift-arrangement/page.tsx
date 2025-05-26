import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Gift, Clock, Truck } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function GiftArrangementPage() {
  const arrangements = [
    {
      name: "スタンダードアレンジメント",
      price: "4,000円〜",
      size: "高さ約20cm",
      description: "日常のお祝いに最適なサイズ",
      image: "/images/arrangement-standard.png",
    },
    {
      name: "プレミアムアレンジメント",
      price: "6,000円〜",
      size: "高さ約30cm",
      description: "特別な記念日におすすめ",
      image: "/images/arrangement-premium.png",
    },
    {
      name: "ラグジュアリーアレンジメント",
      price: "10,000円〜",
      size: "高さ約40cm",
      description: "最高級の花材を使用した豪華版",
      image: "/images/arrangement-luxury.png",
    },
  ]

  const occasions = [
    "誕生日プレゼント",
    "結婚記念日",
    "母の日・父の日",
    "敬老の日",
    "お見舞い",
    "新築祝い",
    "昇進祝い",
    "退職祝い",
  ]

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-rose-600" />,
      title: "心を込めたデザイン",
      description: "お客様の想いを形にする、オリジナルデザイン",
    },
    {
      icon: <Gift className="h-8 w-8 text-rose-600" />,
      title: "上質な器",
      description: "アレンジメント後も使える美しい器を厳選",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-600" />,
      title: "長持ち設計",
      description: "特殊な保水技術で美しさを長期間キープ",
    },
    {
      icon: <Truck className="h-8 w-8 text-rose-600" />,
      title: "安心配送",
      description: "専門スタッフによる丁寧な配送サービス",
    },
  ]

  const breadcrumbItems = [
    { href: "/", label: "ホーム" },
    { href: "/#services", label: "商品・サービス" },
    { label: "ギフトアレンジメント" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-6">ギフトアレンジメント</h1>
            <p className="text-xl text-gray-700 mb-8">
              特別な日を彩る、心を込めたフラワーアレンジメント。器にもこだわり、長く美しさをお楽しみいただけます。
            </p>
            <Image
              src="/images/gift-arrangement-hero.png"
              alt="ギフトアレンジメント"
              width={600}
              height={400}
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">商品ラインナップ</h2>
              <p className="text-xl text-gray-700">ご予算とシーンに合わせてお選びいただけます</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {arrangements.map((arrangement, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <Image
                      src={arrangement.image || "/placeholder.svg"}
                      alt={arrangement.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{arrangement.name}</h3>
                      <p className="text-2xl font-bold text-rose-600 mb-2">{arrangement.price}</p>
                      <p className="text-gray-600 mb-2">{arrangement.size}</p>
                      <p className="text-gray-700 mb-4">{arrangement.description}</p>
                      <Link href="/order">
                        <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">注文する</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">ギフトアレンジメントの特徴</h2>
              <p className="text-xl text-gray-700">お客様に喜んでいただくための4つのこだわり</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">こんなシーンにおすすめ</h2>
              <p className="text-xl text-gray-700">様々なお祝いの場面でご利用いただけます</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {occasions.map((occasion, index) => (
                <div
                  key={index}
                  className="bg-rose-50 text-center py-4 px-3 rounded-lg hover:bg-rose-100 transition-colors"
                >
                  <span className="text-gray-800 font-medium">{occasion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">ご注文・ご相談</h2>
            <p className="text-xl text-gray-700 mb-8">
              お客様のご要望に合わせて、最適なアレンジメントをご提案いたします
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg">
                  オンラインで注文
                </Button>
              </Link>
              <Link href="/consultation">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg"
                >
                  相談予約
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
