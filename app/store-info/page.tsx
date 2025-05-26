import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, Train, Car } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function StoreInfoPage() {
  const accessMethods = [
    {
      icon: <Train className="h-6 w-6 text-rose-600" />,
      title: "電車でお越しの場合",
      details: ["JR大阪駅 徒歩5分", "阪急梅田駅 徒歩3分", "阪神梅田駅 徒歩4分", "地下鉄御堂筋線梅田駅 徒歩6分"],
    },
    {
      icon: <Car className="h-6 w-6 text-rose-600" />,
      title: "お車でお越しの場合",
      details: [
        "阪神高速道路 梅田出口より3分",
        "近隣コインパーキング多数あり",
        "提携駐車場割引サービス有り",
        "配送車両用駐車スペース完備",
      ],
    },
  ]

  const storeFeatures = [
    {
      title: "上質な店舗空間",
      description: "落ち着いた雰囲気の中で、ゆっくりとお花をお選びいただけます",
    },
    {
      title: "専門スタッフ常駐",
      description: "経験豊富なフローリストが常駐し、専門的なアドバイスを提供",
    },
    {
      title: "完全予約制コンサルティング",
      description: "お客様だけの特別な時間で、じっくりとご相談いただけます",
    },
    {
      title: "配送サービス",
      description: "梅田エリア限定で、当日配送サービスも承っております",
    },
  ]

  const breadcrumbItems = [{ href: "/", label: "ホーム" }, { label: "店舗情報・アクセス" }]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-6">店舗情報・アクセス</h1>
            <p className="text-xl text-gray-700">
              梅田の中心地に位置する当店へのアクセス方法と店舗情報をご案内いたします
            </p>
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Store Image */}
              <div>
                <Image
                  src="/images/store-exterior.png"
                  alt="店舗外観"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Store Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif text-gray-900 mb-6">店舗情報</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-rose-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">住所</h3>
                        <p className="text-gray-700">〒530-0001 大阪市北区梅田1丁目2番3号 梅田フラワービル1F</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-rose-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">営業時間</h3>
                        <div className="text-gray-700">
                          <p>平日：11:00～19:00</p>
                          <p>土日祝：10:00～18:00</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-rose-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">電話番号</h3>
                        <p className="text-gray-700">06-1234-5678</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-rose-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">メールアドレス</h3>
                        <p className="text-gray-700">info@floral-boutique-umeda.com</p>
                      </div>
                    </div>

                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">定休日</h3>
                      <p className="text-gray-700">不定休（市場休業日に準ずる）</p>
                      <p className="text-sm text-gray-600 mt-1">※臨時休業の場合は事前にお知らせいたします</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-gray-900 text-center mb-8">アクセスマップ</h2>
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg">梅田駅からのアクセス経路</p>
                  <p className="text-sm">（実際の地図がここに表示されます）</p>
                </div>
              </div>
            </div>

            {/* Access Methods */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">アクセス方法</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {accessMethods.map((method, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {method.icon}
                        <h3 className="text-xl font-semibold text-gray-900 ml-3">{method.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {method.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-rose-600 rounded-full mr-3" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Store Features */}
            <div>
              <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">店舗の特徴</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {storeFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
