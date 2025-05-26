"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Truck, Users, Heart } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LuxuryFlowerShop() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-gray-900 mb-6">「心を贈る」感動を、梅田から。</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              高品質で洗練された、あなただけのギフトフラワー専門店。
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-12">
            <Image
              src="/images/hero-luxury-bouquet.png"
              alt="最高級の花材を使った美しいブーケ"
              width={800}
              height={500}
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg">
                オンラインでオーダーする
              </Button>
            </Link>
            <Link href="/consultation">
              <Button
                size="lg"
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg"
              >
                コンサルティングを予約する
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif text-gray-900 mb-8">フローラルブティック 梅田について</h3>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                私たちは、大阪梅田エリアの富裕層（個人・法人）を主要ターゲットとする、ギフトフラワー専門店です。
                平均単価4,000円以上の高品質で洗練されたアレンジメントやブーケを通じ、「心を贈る」体験を何よりも大切にしています。
              </p>
              <p>
                お客様一人ひとりの想いを汲み取ったパーソナルな提案と、きめ細やかなオーダーメイド対応、
                梅田エリアに特化した迅速かつ丁寧な自社配達で、利便性と信頼性において差別化を図ります。
              </p>
              <div className="bg-rose-50 p-8 rounded-xl mt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">経営理念・ビジョン</h4>
                <p className="text-gray-800 italic">
                  「花を通じて、贈る人、贈られる人の心に永く記憶される感動と喜びを創造する。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">わたしたちの提供価値</h3>
            <p className="text-xl text-gray-700">平均単価4,000円以上に相応しい、五感で感じる本物の価値</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">１．高品質・希少な花材</h4>
                <p className="text-gray-700">
                  国内外から厳選した、市場ではあまり見られない珍しい品種や最高級品質の花材を安定的に仕入れ、
                  常に新鮮で魅力的なラインナップを提供。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">２．洗練されたデザイン</h4>
                <p className="text-gray-700">
                  経験豊富なフローリストによる、トレンドを取り入れつつも普遍的な美しさを追求したアート性の高いデザイン。
                  お客様のイメージを具現化するオーダーメイド対応も可能です。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">３．専門的なコンサルティング</h4>
                <p className="text-gray-700">
                  用途、贈る相手、予算に応じた最適な提案だけでなく、花言葉や花を美しく保つケア方法まで、
                  丁寧にアドバイスいたします。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Truck className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">４．卓越した利便性</h4>
                <p className="text-gray-700">
                  梅田エリアに特化した、自社配送スタッフによる迅速・丁寧な配達。
                  急なご依頼にも柔軟に対応し、贈り物のタイミングを逃しません。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">５．比類なきブランド体験</h4>
                <p className="text-gray-700">
                  上質な店舗空間での接客、パーソナルな顧客管理、購入後のアフターフォローまで一貫した高いサービスレベルで、
                  特別な体験を提供します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">商品・サービス</h3>
            <p className="text-xl text-gray-700">お客様の「想い」を形にする、特別なフラワーギフト</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col md:flex-row gap-6">
              <Image
                src="/images/gift-arrangement.png"
                alt="ギフトアレンジメント"
                width={300}
                height={200}
                className="w-full md:w-1/2 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">ギフトアレンジメント</h4>
                <p className="text-gray-700 mb-4">
                  誕生日、記念日、お祝い、お見舞いなど、用途に応じたサイズ・デザインをご用意。
                  器にもこだわり、美しさを長持ちさせます。
                </p>
                <p className="text-rose-600 font-semibold mb-4">平均単価：4,000円～</p>
                <Link href="/products/gift-arrangement">
                  <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                    詳細を見る
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <Image
                src="/images/designer-bouquet.png"
                alt="デザイナーズブーケ"
                width={300}
                height={200}
                className="w-full md:w-1/2 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">デザイナーズブーケ</h4>
                <p className="text-gray-700 mb-4">
                  お客様の要望や季節の花材を活かした、フローリストが手掛ける一点物の花束。
                  贈る方の個性やシーンに合わせてお作りします。
                </p>
                <p className="text-rose-600 font-semibold mb-4">平均単価：5,000円～</p>
                <Link href="/products/designer-bouquet">
                  <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                    詳細を見る
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <Image
                src="/images/custom-arrangement.png"
                alt="オーダーメイドフラワー"
                width={400}
                height={250}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">オーダーメイドフラワー</h4>
                <p className="text-gray-700 mb-4">
                  お客様との丁寧なヒアリングに基づき、コンセプトから花材、器まで完全にオリジナルで制作する、
                  唯一無二のフラワーギフトです。
                </p>
                <p className="text-rose-600 font-semibold mb-4">平均単価：10,000円～</p>
                <Link href="/products/custom-arrangement">
                  <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                    詳細を見る
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">法人様向けサービス</h4>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">定期装花</h5>
                  <p className="text-gray-700 text-sm">
                    オフィス、店舗、クリニックのエントランスや受付などを定期的に装飾。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">イベント装飾</h5>
                  <p className="text-gray-700 text-sm">
                    パーティー、展示会、セミナー、レセプションなどの会場を華やかに演出。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">ビジネスギフト</h5>
                  <p className="text-gray-700 text-sm">開店・開業祝い、役員就任祝い、VIP顧客への贈答など。</p>
                </div>
              </div>
              <Link href="/corporate">
                <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                  法人様向けサービスの詳細を見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">ギャラリー</h3>
            <p className="text-xl text-gray-700">わたしたちが手がけた作品の一部をご覧ください</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <Image
              src="/images/gallery-1.png"
              alt="作品1"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <Image
              src="/images/gallery-2.png"
              alt="作品2"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <Image
              src="/images/gallery-3.png"
              alt="作品3"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                もっと見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">お問い合わせ・ご相談・ご注文</h3>
            <p className="text-xl text-gray-700">お客様の「心を贈る」お手伝いをさせていただきます。</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <Link href="/order">
              <Button size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 text-lg">
                オンラインでオーダーする
              </Button>
            </Link>
            <Link href="/consultation">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-rose-600 text-rose-600 hover:bg-rose-50 py-4 text-lg"
              >
                来店・コンサルティング予約をする
              </Button>
            </Link>
            <Link href="/corporate">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-4 text-lg"
              >
                法人様お問い合わせフォーム
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
