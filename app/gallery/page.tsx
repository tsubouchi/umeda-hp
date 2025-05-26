"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery-1.png",
      title: "エレガントローズブーケ",
      category: "ブーケ",
      description: "深紅のバラを中心とした上品なブーケ",
    },
    {
      id: 2,
      src: "/images/gallery-2.png",
      title: "季節のアレンジメント",
      category: "アレンジメント",
      description: "春の花材を使った華やかなアレンジメント",
    },
    {
      id: 3,
      src: "/images/gallery-3.png",
      title: "ウェディングブーケ",
      category: "ブーケ",
      description: "白いバラとカスミソウの清楚なブーケ",
    },
    {
      id: 4,
      src: "/images/gallery-4.png",
      title: "コーポレート装花",
      category: "装花",
      description: "オフィスエントランスの定期装花",
    },
    {
      id: 5,
      src: "/images/gallery-5.png",
      title: "記念日アレンジメント",
      category: "アレンジメント",
      description: "特別な記念日のためのオーダーメイド",
    },
    {
      id: 6,
      src: "/images/gallery-6.png",
      title: "イベント装飾",
      category: "装花",
      description: "パーティー会場の華やかな装飾",
    },
    {
      id: 7,
      src: "/images/gallery-7.png",
      title: "プレミアムブーケ",
      category: "ブーケ",
      description: "希少な花材を使用した特別なブーケ",
    },
    {
      id: 8,
      src: "/images/gallery-8.png",
      title: "お祝いアレンジメント",
      category: "アレンジメント",
      description: "開店祝いの豪華なアレンジメント",
    },
    {
      id: 9,
      src: "/images/gallery-9.png",
      title: "シーズナルブーケ",
      category: "ブーケ",
      description: "秋の色合いを活かしたブーケ",
    },
  ]

  const categories = ["すべて", "ブーケ", "アレンジメント", "装花"]
  const [selectedCategory, setSelectedCategory] = useState("すべて")

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "すべて" || image.category === selectedCategory,
  )

  const breadcrumbItems = [{ href: "/", label: "ホーム" }, { label: "ギャラリー" }]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-6">ギャラリー</h1>
            <p className="text-xl text-gray-700">
              これまでに手がけた作品の数々をご覧ください。お客様の想いを形にした特別なフラワーギフトをご紹介いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className={
                      selectedCategory === category
                        ? "bg-rose-600 hover:bg-rose-700 text-white"
                        : "text-gray-700 hover:text-rose-600"
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                        <span className="text-sm text-rose-600 bg-rose-50 px-2 py-1 rounded">{image.category}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{image.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="拡大画像"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
