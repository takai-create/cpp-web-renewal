export default function ServicesPage() {
  return (
    <main>
      <section className="section-inner">
        <h1 className="section-title">事業紹介</h1>
        <p className="section-copy">
          Crowd Power Partnersが展開する3つの事業をご紹介します。
          それぞれが連携し、組織と人の価値を深める仕組みを支えます。
        </p>
        <div className="grid-3">
          <article className="card">
            <h3>DXコンサルティング</h3>
            <p>
              企業のビジネス成長を目的としたデジタルトランスフォーメーションの
              戦略設計・実行支援を行います。
            </p>
          </article>
          <article className="card">
            <h3>Talk Insights</h3>
            <p>
              名刺交換後の会話をAIで分析・自ロー化し、
              次のアクションにつなげるSaaSサービスです。
            </p>
          </article>
          <article className="card">
            <h3>コワーキング新潟弁天</h3>
            <p>
              24時間無人運営のワークスペース。地域とビジネスをつなぎ、
              新しい働き方を創造します。
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
