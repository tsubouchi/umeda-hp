import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Star, Users, Sparkles } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function DesignerBouquetPage() {
  const bouquets = [
    {
      name: "クラシックブーケ",
      price: "5,000円〜",
      style: "伝統的なラウンドブーケ",
      description: "時代を超えて愛される定番スタイル",
      image: "/images/bouquet-classic.png",
    },
    {
      name: "モダンブーケ",
      price: "7,000円〜",
      style: "スタイリッシュなデザイン",
      description: "現代的な感性を取り入れた洗練されたスタイル",
      image: "/images/bouquet-modern.png",
    },
    {
      name: "アーティスティックブーケ",
      price: "10,000円〜",
      style: "芸術性を追求したデザイン",
      description: "フローリストの創造性が光る一点物",
      image: "/images/bouquet-artistic.png",
    },
  ]

  const designProcess = [
    {
      step: "1",
      title: "ヒアリング",
      description: "お客様のご要望、贈る相手、シーンを詳しくお伺いします",
    },
    {
      step: "2",
      title: "花材選定",
      description: "季節の花材から最適なものを厳選いたします",
    },
    {
      step: "3",
      title: "デザイン制作",
      description: "経験豊富なフローリストが心を込めて制作します",
    },
    {
      step: "4",
      title: "仕上げ・包装",
      description: "美しいラッピングで特別感を演出いたします",
    },
  ]

  const features = [
    {
      icon: <Palette className="h-8 w-8 text-rose-600" />,
      title: "オリジナルデザイン",
      description: "お客様だけの特別なデザインを制作",
    },
    {
      icon: <Star className="h-8 w-8 text-rose-600" />,
      title: "厳選花材",
      description: "国内外から仕入れた最高品質の花材を使用",
    },
    {
      icon: <Users className="h-8 w-8 text-rose-600" />,
      title: "熟練フローリスト",
      description: "経験豊富な専門スタッフが制作を担当",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-rose-600" />,
      title: "特別な仕上げ",
      description: "ラッピングやリボンにもこだわりを",
    },
  ]

  const breadcrumbItems = [
    { href: "/", label: "ホーム" },
    { href: "/#services", label: "商品・サービス" },
    { label: "デザイナーズブーケ" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-6">デザイナーズブーケ</h1>
            <p className="text-xl text-gray-700 mb-8">
              フローリストの感性と技術が生み出す、世界に一つだけの特別なブーケ。お客様の想いを美しい花束に込めてお届けします。
            </p>
            <Image
              src="/images/designer-bouquet-hero.png"
              alt="デザイナーズブーケ"
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
              <h2 className="text-3xl font-serif text-gray-900 mb-4">スタイル別ラインナップ</h2>
              <p className="text-xl text-gray-700">お好みのスタイルからお選びいただけます</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {bouquets.map((bouquet, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <Image
                      src={bouquet.image || "/placeholder.svg"}
                      alt={bouquet.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{bouquet.name}</h3>
                      <p className="text-2xl font-bold text-rose-600 mb-2">{bouquet.price}</p>
                      <p className="text-gray-600 mb-2">{bouquet.style}</p>
                      <p className="text-gray-700 mb-4">{bouquet.description}</p>
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

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">制作プロセス</h2>
              <p className="text-xl text-gray-700">お客様だけの特別なブーケができるまで</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {designProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">デザイナーズブーケの特徴</h2>
              <p className="text-xl text-gray-700">プロフェッショナルが手がける特別なブーケ</p>
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

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">制作実例</h2>
              <p className="text-xl text-gray-700">これまでに制作したデザイナーズブーケの一部をご紹介</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/images/designer-example-${i}.png`}
                  alt={`制作実例${i}`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/gallery">
                <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                  ギャラリーで更に見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">ご注文・ご相談</h2>
            <p className="text-xl text-gray-700 mb-8">お客様のイメージを形にする、特別なブーケを制作いたします</p>

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
                  デザイン相談
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
