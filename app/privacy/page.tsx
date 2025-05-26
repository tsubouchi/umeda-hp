import Navigation from "@/components/navigation"
import Breadcrumb from "@/components/breadcrumb"

export default function PrivacyPage() {
  const breadcrumbItems = [
    { href: "/", label: "ホーム" },
    { label: "プライバシーポリシー" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center">プライバシーポリシー</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8">
                フローラルブティック梅田（以下「当店」）は、お客様の個人情報の保護に関して、以下のプライバシーポリシーを定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">個人情報の管理</h2>
                <p className="text-gray-700">
                  当店は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">個人情報の利用目的</h2>
                <p className="text-gray-700 mb-4">お客様からお預かりした個人情報は、当店からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>商品の配送・サービスの提供</li>
                  <li>お客様からのお問い合わせへの対応</li>
                  <li>アフターサービス・メンテナンスのご案内</li>
                  <li>新商品・サービスのご案内</li>
                  <li>各種キャンペーン・イベントのご案内</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">個人情報の第三者への開示・提供の禁止</h2>
                <p className="text-gray-700">
                  当店は、お客様よりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                  <li>お客様の同意がある場合</li>
                  <li>お客様が希望されるサービスを行なうために当店が業務を委託する業者に対して開示する場合</li>
                  <li>法令に基づき開示することが必要である場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">個人情報の安全対策</h2>
                <p className="text-gray-700">
                  当店は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。また、当店は個人情報の取扱いを適切に行う会社として、プライバシーマークの使用を認められた認定事業者です。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">ご本人の照会</h2>
                <p className="text-gray-700">
                  お客様がご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">法令、規範の遵守と見直し</h2>
                <p className="text-gray-700">
                  当店は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">お問い合せ</h2>
                <p className="text-gray-700 mb-4">
                  当店の個人情報の取扱に関するお問い合せは下記までご連絡ください。
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>フ\
