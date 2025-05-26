"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, User, Heart, Flower, Phone } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function ConsultationPage() {
  const [selectedService, setSelectedService] = useState("")

  const consultationServices = [
    {
      id: "gift-consultation",
      title: "ギフト相談",
      duration: "30分",
      price: "無料",
      description: "贈り物の用途やご予算に応じた最適なフラワーギフトをご提案いたします。",
      icon: <Heart className="h-8 w-8 text-rose-600" />,
    },
    {
      id: "custom-design",
      title: "オーダーメイド相談",
      duration: "60分",
      price: "無料",
      description: "完全オリジナルのフラワーアレンジメントについて詳しくご相談いただけます。",
      icon: <Flower className="h-8 w-8 text-rose-600" />,
    },
    {
      id: "corporate-consultation",
      title: "法人様向け相談",
      duration: "60分",
      price: "無料",
      description: "定期装花、イベント装飾、ビジネスギフトについてご相談いただけます。",
      icon: <User className="h-8 w-8 text-rose-600" />,
    },
  ]

  const timeSlots = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ]

  const breadcrumbItems = [{ href: "/", label: "ホーム" }, { label: "コンサルティング予約" }]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif text-gray-900 mb-4">コンサルティング予約</h1>
              <p className="text-xl text-gray-700">
                専門フローリストがお客様のご要望を丁寧にお伺いし、最適なご提案をいたします
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12">
              <Image
                src="/images/consultation-hero.png"
                alt="コンサルティング風景"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Service Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">ご相談内容をお選びください</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {consultationServices.map((service) => (
                  <Card
                    key={service.id}
                    className={`border-2 cursor-pointer transition-all hover:shadow-lg ${
                      selectedService === service.id
                        ? "border-rose-600 bg-rose-50"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium text-rose-600">{service.price}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-rose-600" />
                  ご予約フォーム
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">お客様情報</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="lastName">姓 *</Label>
                        <Input id="lastName" placeholder="山田" required />
                      </div>
                      <div>
                        <Label htmlFor="firstName">名 *</Label>
                        <Input id="firstName" placeholder="太郎" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input id="email" type="email" placeholder="example@email.com" required />
                    </div>

                    <div>
                      <Label htmlFor="phone">電話番号 *</Label>
                      <Input id="phone" placeholder="090-1234-5678" required />
                    </div>

                    <div>
                      <Label htmlFor="customerType">お客様区分</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">個人のお客様</SelectItem>
                          <SelectItem value="corporate">法人のお客様</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">ご予約詳細</h3>

                    <div>
                      <Label htmlFor="consultationType">相談内容 *</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger>
                          <SelectValue placeholder="相談内容を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          {consultationServices.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="preferredDate">ご希望日 *</Label>
                      <Input id="preferredDate" type="date" required />
                    </div>

                    <div>
                      <Label htmlFor="preferredTime">ご希望時間 *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="時間を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget">ご予算（任意）</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="予算を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5000">5,000円未満</SelectItem>
                          <SelectItem value="5000-10000">5,000円〜10,000円</SelectItem>
                          <SelectItem value="10000-20000">10,000円〜20,000円</SelectItem>
                          <SelectItem value="20000-50000">20,000円〜50,000円</SelectItem>
                          <SelectItem value="over-50000">50,000円以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="occasion">ご利用シーン・ご要望（任意）</Label>
                  <Textarea
                    id="occasion"
                    placeholder="誕生日プレゼント、結婚記念日、開店祝いなど、詳しい用途やご要望をお聞かせください"
                    rows={4}
                  />
                </div>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">ご予約について</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• コンサルティングは完全予約制となっております</li>
                    <li>• ご予約確定後、確認メールをお送りいたします</li>
                    <li>• 当日は店舗にてお待ちしております</li>
                    <li>• ご不明な点がございましたら、お気軽にお電話ください</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" />
                  <Label htmlFor="privacy" className="text-sm">
                    <Link href="/privacy" className="text-rose-600 hover:underline">
                      プライバシーポリシー
                    </Link>
                    に同意します
                  </Label>
                </div>

                <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 text-lg">予約を確定する</Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <Card className="border-0 shadow-lg bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">お急ぎの場合はお電話でも承ります</h3>
                  <div className="flex items-center justify-center space-x-2 text-gray-700 mb-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-lg font-medium">06-1234-5678</span>
                  </div>
                  <p className="text-gray-600">受付時間：11:00〜19:00（定休日除く）</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
