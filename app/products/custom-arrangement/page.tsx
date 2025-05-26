import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Gem, Paintbrush, Clock } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function CustomArrangementPage() {
  const customOptions = [
    {
      name: "プレミアムカスタム",
      price: "10,000円〜",
      duration: "3-5日",
      description: "お客様のご要望に合わせた完全オリジナル",
      image: "/images/custom-premium.png",
    },
    {
      name: "ラグジュアリーカスタム",
      price: "20,000円〜",
      duration: "5-7日",
      description: "最高級花材を使用した特別仕様",
      image: "/images/custom-luxury.png",
    },
    {
      name: "アートピースカスタム",
      price: "30,000円〜",
      duration: "7-10日",
      description: "芸術作品レベルの唯一無二の作品",
      image: "/images/custom-art.png",
    },
  ]

  const customProcess = [
    {
      step: "1",
      title: "詳細ヒアリング",
      description: "ご要望、イメージ、予算を詳しくお伺いします（60分程度）",
      duration: "初回相談",
    },
    {
      step: "2",
      title: "デザイン提案",
      description: "コンセプトスケッチと花材サンプルをご提示",
      duration: "2-3日後",
    },
    {
      step: "3",
      title: "最終確認",
      description: "デザイン・花材・器の最終確認とお見積もり",
      duration: "提案後1-2日",
    },
    {
      step: "4",
      title: "制作・完成",
      description: "熟練フローリストが心を込めて制作いたします",
      duration: "確認後3-7日",
    },
  ]

  const features = [
    {
      icon: <Crown className="h-8 w-8 text-rose-600" />,
      title: "完全オーダーメイド",
      description: "コンセプトから花材、器まで全てオリジナル",
    },
    {
      icon: <Gem className="h-8 w-8 text-rose-600" />,
      title: "最高級花材",
      description: "希少な花材や特別な品種も取り寄せ可能",
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-rose-600" />,
      title: "アート性",
      description: "フラワーアートとしての価値も追求",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-600" />,
      title: "じっくり制作",
      description: "時間をかけて丁寧に仕上げます",
    },
  ]

  const occasions = [
    {
      title: "特別な記念日",
      examples: ["結婚記念日", "誕生日", "プロポーズ"],
    },
    {
      title: "人生の節目",
      examples: ["結婚式", "出産祝い", "新築祝い"],
    },
    {
      title: "ビジネスシーン",
      examples: ["開店祝い", "上場記念", "VIP贈答"],
    },
    {
      title: "追悼・供養",
      examples: ["お別れの花", "一周忌", "特別な供花"],
    },
  ]

  const breadcrumbItems = [
    { href: "/", label: "ホーム" },
    { href: "/#services", label: "商品・サービス" },
    { label: "オーダーメイドフラワー" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-6">オーダーメイドフラワー</h1>
            <p className="text-xl text-gray-700 mb-8">
              お客様の想いを形にする、世界に一つだけの特別なフラワーアート。コンセプトから花材、器まで、全てをオリジナルで制作いたします。
            </p>
            <Image
              src="/images/custom-arrangement-hero.png"
              alt="オーダーメイドフラワー"
              width={600}
              height={400}
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Custom Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">カスタムプラン</h2>
              <p className="text-xl text-gray-700">ご予算とご要望に応じて3つのプランをご用意</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {customOptions.map((option, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.name}</h3>
                      <p className="text-2xl font-bold text-rose-600 mb-2">{option.price}</p>
                      <p className="text-gray-600 mb-2">制作期間: {option.duration}</p>
                      <p className="text-gray-700 mb-4">{option.description}</p>
                      <Link href="/consultation">
                        <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">相談予約</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">オーダーメイドの流れ</h2>
              <p className="text-xl text-gray-700">お客様との対話を重視した丁寧なプロセス</p>
            </div>

            <div className="space-y-8">
              {customProcess.map((process, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-700 mb-2">{process.description}</p>
                    <p className="text-rose-600 font-medium">{process.duration}</p>
                  </div>
                  {index < customProcess.length - 1 && <div className="hidden md:block w-16 h-0.5 bg-gray-300" />}
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
              <h2 className="text-3xl font-serif text-gray-900 mb-4">オーダーメイドの特徴</h2>
              <p className="text-xl text-gray-700">他では手に入らない特別な価値をお届け</p>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">ご利用シーン</h2>
              <p className="text-xl text-gray-700">人生の特別な瞬間にふさわしい、唯一無二の作品を</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {occasions.map((occasion, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{occasion.title}</h3>
                    <ul className="space-y-2">
                      {occasion.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-rose-600 rounded-full mr-3" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">制作実例</h2>
              <p className="text-xl text-gray-700">これまでに制作したオーダーメイド作品の一部</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group">
                  <Image
                    src={`/images/custom-example-${i}.png`}
                    alt={`制作実例${i}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform cursor-pointer"
                  />
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900">作品タイトル {i}</h4>
                    <p className="text-gray-600 text-sm">制作期間: 7日間</p>
                  </div>
                </div>
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
            <h2 className="text-3xl font-serif text-gray-900 mb-6">ご相談・お見積もり</h2>
            <p className="text-xl text-gray-700 mb-8">
              まずはお気軽にご相談ください。お客様のイメージを形にするお手伝いをいたします
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">初回相談は無料です</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 詳細なヒアリング（60分程度）</li>
                <li>• コンセプト提案</li>
                <li>• 概算お見積もり</li>
                <li>• 制作スケジュール相談</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg">
                  無料相談予約
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg"
              >
                お電話で相談: 06-1234-5678
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
