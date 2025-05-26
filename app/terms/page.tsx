import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function TermsPage() {
  const breadcrumbItems = [{ href: "/", label: "ホーム" }, { label: "特定商取引法に基づく表記" }]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center">特定商取引法に基づく表記</h1>

            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">販売業者</div>
                <div className="md:col-span-2 text-gray-700">フローラルブティック梅田</div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">運営責任者</div>
                <div className="md:col-span-2 text-gray-700">代表 田中 花子</div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">所在地</div>
                <div className="md:col-span-2 text-gray-700">
                  〒530-0001 大阪市北区梅田1丁目2番3号 梅田フラワービル1F
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">電話番号</div>
                <div className="md:col-span-2 text-gray-700">06-1234-5678</div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">メールアドレス</div>
                <div className="md:col-span-2 text-gray-700">info@floral-boutique-umeda.com</div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">営業時間</div>
                <div className="md:col-span-2 text-gray-700">
                  平日：11:00～19:00
                  <br />
                  土日祝：10:00～18:00
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">定休日</div>
                <div className="md:col-span-2 text-gray-700">不定休（市場休業日に準ずる）</div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">商品代金以外の必要料金</div>
                <div className="md:col-span-2 text-gray-700">
                  配送料：梅田エリア内無料、その他地域は別途お見積もり
                  <br />
                  消費税：商品代金に含む
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">支払方法</div>
                <div className="md:col-span-2 text-gray-700">
                  現金、クレジットカード（VISA、MasterCard、JCB、AMEX）、銀行振込、請求書払い（法人様のみ）
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">支払時期</div>
                <div className="md:col-span-2 text-gray-700">
                  店頭購入：商品受け渡し時
                  <br />
                  オンライン注文：注文確定時
                  <br />
                  請求書払い：月末締め翌月末払い
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">商品の引渡時期</div>
                <div className="md:col-span-2 text-gray-700">
                  在庫商品：即日～3日以内
                  <br />
                  オーダーメイド：3～10日（商品により異なる）
                  <br />
                  ※詳細は注文時にご案内いたします
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">返品・交換について</div>
                <div className="md:col-span-2 text-gray-700">
                  生花という商品の性質上、お客様都合による返品・交換はお受けできません。
                  <br />
                  ただし、配送中の事故や商品不良の場合は、商品到着後24時間以内にご連絡ください。
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">キャンセルについて</div>
                <div className="md:col-span-2 text-gray-700">
                  制作開始前：無料
                  <br />
                  制作開始後：商品代金の50%
                  <br />
                  配送開始後：キャンセル不可
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="font-semibold text-gray-900">その他</div>
                <div className="md:col-span-2 text-gray-700">
                  ・商品の色合いは、お使いのモニターにより実際と異なる場合があります
                  <br />
                  ・花材は季節や入荷状況により変更になる場合があります
                  <br />
                  ・配送日時の指定は承りますが、交通事情等により遅れる場合があります
                </div>
              </div>
            </div>

            <div className="text-center text-gray-600 text-sm mt-12">
              <p>制定日：2024年1月1日</p>
              <p>最終更新日：2024年1月1日</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
