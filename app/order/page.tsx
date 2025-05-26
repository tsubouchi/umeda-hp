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
import { Plus, Minus, ShoppingCart } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function OrderPage() {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  const products = [
    {
      id: "gift-arrangement",
      name: "ギフトアレンジメント",
      price: 4000,
      image: "/images/gift-arrangement.png",
      description: "誕生日、記念日、お祝いに最適",
    },
    {
      id: "designer-bouquet",
      name: "デザイナーズブーケ",
      price: 5000,
      image: "/images/designer-bouquet.png",
      description: "フローリスト手作りの一点物",
    },
    {
      id: "custom-arrangement",
      name: "オーダーメイドフラワー",
      price: 10000,
      image: "/images/custom-arrangement.png",
      description: "完全オリジナルの特別な作品",
    },
  ]

  const addToCart = (product: any) => {
    const quantity = quantities[product.id] || 1
    const existingIndex = selectedProducts.findIndex((p) => p.id === product.id)

    if (existingIndex >= 0) {
      const updated = [...selectedProducts]
      updated[existingIndex].quantity += quantity
      setSelectedProducts(updated)
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity }])
    }
  }

  const updateQuantity = (productId: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }))
  }

  const getTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + product.price * product.quantity, 0)
  }

  const breadcrumbItems = [{ href: "/", label: "ホーム" }, { label: "オンライン注文" }]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <main className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-3 sm:mb-4">オンライン注文</h1>
              <p className="text-lg sm:text-xl text-gray-700 px-4">
                お客様の想いを込めた特別なフラワーギフトをお選びください
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Product Selection */}
              <div className="lg:col-span-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">商品を選択</h2>

                <div className="space-y-4 sm:space-y-6">
                  {products.map((product) => (
                    <Card key={product.id} className="border-0 shadow-lg">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={200}
                            height={150}
                            className="w-full sm:w-48 h-36 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{product.description}</p>
                            <p className="text-xl sm:text-2xl font-bold text-rose-600 mb-3 sm:mb-4">
                              ¥{product.price.toLocaleString()}〜
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                              <div className="flex items-center space-x-2">
                                <Label htmlFor={`quantity-${product.id}`} className="text-sm">
                                  数量:
                                </Label>
                                <div className="flex items-center space-x-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => updateQuantity(product.id, -1)}
                                  >
                                    <Minus className="h-4 w-4" />
                                  </Button>
                                  <span className="w-8 text-center text-sm">{quantities[product.id] || 1}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => updateQuantity(product.id, 1)}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <Button
                                onClick={() => addToCart(product)}
                                className="bg-rose-600 hover:bg-rose-700 text-white w-full sm:w-auto"
                              >
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                カートに追加
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Order Summary & Form */}
              <div className="space-y-4 sm:space-y-6">
                {/* Cart Summary */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-gray-900">ご注文内容</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedProducts.length === 0 ? (
                      <p className="text-gray-500 text-center py-4 text-sm">商品を選択してください</p>
                    ) : (
                      <div className="space-y-4">
                        {selectedProducts.map((product, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                            <div>
                              <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                              <p className="text-xs text-gray-600">数量: {product.quantity}</p>
                            </div>
                            <p className="font-semibold text-gray-900 text-sm">
                              ¥{(product.price * product.quantity).toLocaleString()}
                            </p>
                          </div>
                        ))}
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <p className="text-base sm:text-lg font-semibold text-gray-900">合計金額</p>
                            <p className="text-lg sm:text-xl font-bold text-rose-600">
                              ¥{getTotalPrice().toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Order Form */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-gray-900">お客様情報</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="lastName" className="text-sm">
                          姓
                        </Label>
                        <Input id="lastName" placeholder="山田" className="text-sm" />
                      </div>
                      <div>
                        <Label htmlFor="firstName" className="text-sm">
                          名
                        </Label>
                        <Input id="firstName" placeholder="太郎" className="text-sm" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm">
                        メールアドレス
                      </Label>
                      <Input id="email" type="email" placeholder="example@email.com" className="text-sm" />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm">
                        電話番号
                      </Label>
                      <Input id="phone" placeholder="090-1234-5678" className="text-sm" />
                    </div>

                    <div>
                      <Label htmlFor="deliveryDate" className="text-sm">
                        お届け希望日
                      </Label>
                      <Input id="deliveryDate" type="date" className="text-sm" />
                    </div>

                    <div>
                      <Label htmlFor="deliveryTime" className="text-sm">
                        お届け時間帯
                      </Label>
                      <Select>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="時間帯を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">午前中（9:00-12:00）</SelectItem>
                          <SelectItem value="afternoon">午後（13:00-17:00）</SelectItem>
                          <SelectItem value="evening">夕方（17:00-19:00）</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-sm">
                        お届け先住所
                      </Label>
                      <Textarea id="address" placeholder="大阪市北区梅田..." className="text-sm" />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm">
                        メッセージカード（任意）
                      </Label>
                      <Textarea id="message" placeholder="お祝いのメッセージをご記入ください" className="text-sm" />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" className="mt-1" />
                      <Label htmlFor="terms" className="text-xs sm:text-sm leading-relaxed">
                        <Link href="/terms" className="text-rose-600 hover:underline">
                          利用規約
                        </Link>
                        に同意します
                      </Label>
                    </div>

                    <Button
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 text-base sm:text-lg"
                      disabled={selectedProducts.length === 0}
                    >
                      ご注文を確定する
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
