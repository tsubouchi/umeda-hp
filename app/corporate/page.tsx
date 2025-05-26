import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Calendar, Gift, Sparkles, Users, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function CorporatePage() {
  const services = [
    {
      icon: <Calendar className="h-12 w-12 text-rose-600" />,
      title: "定期装花",
      description: "オフィス、店舗、クリニックのエントランスや受付を定期的に装飾",
      features: ["週1回〜月1回の定期配送", "季節に応じたデザイン変更", "メンテナンス込み", "予算に応じたプラン設計"],
      price: "月額 15,000円〜",
    },
    {
      icon: <Sparkles className="h-12 w-12 text-rose-600" />,
      title: "イベント装飾",
      description: "パーティー、展示会、セミナー、レセプションなどの会場を華やかに演出",
      features: [
        "会場の雰囲気に合わせたデザイン",
        "設営・撤去まで一貫対応",
        "大型装飾も対応可能",
        "事前打ち合わせ込み",
      ],
      price: "50,000円〜",
    },
    {
      icon: <Gift className="h-12 w-12 text-rose-600" />,
      title: "ビジネスギフト",
      description: "開店・開業祝い、役員就任祝い、VIP顧客への贈答など",
      features: ["法人様専用デザイン", "のし・メッセージカード対応", "複数箇所への一括配送", "請求書払い対応"],
      price: "8,000円〜",
    },
  ]

  const benefits = [
    "専任担当者による一貫したサポート",
    "法人様専用の特別価格でご提供",
    "請求書払い・月末締め翌月払い対応",
    "急なご依頼にも柔軟に対応",
    "定期契約による安定したサービス提供",
    "イベントカレンダーに基づく提案",
  ]

  const breadcrumbItems = [{ href: "/", label: "ホーム" }, { label: "法人様サービス" }]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-6">法人様向けサービス</h1>
            <p className="text-xl text-gray-700 mb-8">
              企業様のブランドイメージ向上と、特別な瞬間を彩るフラワーサービスをご提供いたします
            </p>
            <div className="flex justify-center">
              <Building className="h-16 w-16 text-rose-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">サービス内容</h2>
              <p className="text-xl text-gray-700">企業様のニーズに合わせた3つの主要サービス</p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        {service.icon}
                        <h3 className="text-2xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-rose-600 mr-3" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-rose-600">{service.price}</p>
                    </div>
                    <div className="bg-gray-100 flex items-center justify-center p-8">
                      <Image
                        src={`/images/corporate-${index + 1}.png`}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">法人様だけの特別なメリット</h2>
              <p className="text-xl text-gray-700">ビジネスシーンに最適化されたサービス体制</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-rose-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">導入事例</h2>
              <p className="text-xl text-gray-700">様々な業界の企業様にご利用いただいております</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">高級ホテル様</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    ロビーとレストランの定期装花を担当。季節感を大切にした上品なアレンジメントで、お客様に特別な体験を提供。
                  </p>
                  <p className="text-sm text-gray-600">導入サービス: 定期装花</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">IT企業様</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    新オフィス開設記念パーティーの会場装飾を担当。モダンで洗練されたデザインで企業イメージを演出。
                  </p>
                  <p className="text-sm text-gray-600">導入サービス: イベント装飾</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">法律事務所様</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    VIP顧客への贈答品として高級フラワーギフトを定期利用。信頼関係の構築に貢献。
                  </p>
                  <p className="text-sm text-gray-600">導入サービス: ビジネスギフト</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">お問い合わせ・ご相談</h2>
            <p className="text-xl text-gray-700 mb-8">
              まずはお気軽にご相談ください。お客様のニーズに合わせた最適なプランをご提案いたします。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">対面でのご相談</h3>
                  <p className="text-gray-700 mb-6">
                    店舗にお越しいただき、実際の花材やデザインサンプルをご覧いただきながらご相談いただけます。
                  </p>
                  <Link href="/consultation">
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white">コンサルティング予約</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <Building className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">お見積もり依頼</h3>
                  <p className="text-gray-700 mb-6">
                    具体的なご要望をお聞かせいただければ、詳細なお見積もりを作成いたします。
                  </p>
                  <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                    お見積もり依頼
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">お電話でのお問い合わせ</h3>
              <div className="flex items-center justify-center space-x-2 text-gray-700 mb-2">
                <span className="text-lg font-medium">06-1234-5678</span>
              </div>
              <p className="text-gray-600">受付時間：11:00〜19:00（定休日除く）</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
