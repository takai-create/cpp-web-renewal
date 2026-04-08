export default function Home() {
  return (
    <main>
      <header>
        <div className="navbar">
          <div className="logo">Crowd Power Partners</div>
          <nav className="nav-links">
            <a href="#about">企業・ブランド</a>
            <a href="#services">事業</a>
            <a href="#news">ニュース</a>
            <a href="#careers">採用</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="hero-inner">
          <p className="hero-highlight">AI × 人 × 信頼</p>
          <h1>AIが動き、<br />人が深める。</h1>
          <p>
            企業の思想を軸に、DX・AI SaaS・コワーキングをつなぐ
            コーポレートサイト。出会いをビジネスへと変える価値の循環を
            デザインします。
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">
              お問い合わせ
            </a>
            <a className="btn-secondary" href="#services">
              事業を見る
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section-inner">
        <h2 className="section-title">企業・ブランドストーリー</h2>
        <p className="section-copy">
          Crowd Power Partnersは、2013年設立以来、東京と新潟を拠点にDXとAIを
          中心とした事業とブランドを育ててきました。技術と人の創造力を掛け合わせて、
          企業の新しい価値づくりを支えます。
        </p>
        <div className="split-row">
          <div className="split-card">
            <h3>哲学としてのAI</h3>
            <p>
              AIは単なる技術ではなく、人と組織を深めるための共創パートナーです。
            </p>
          </div>
          <div className="split-card">
            <h3>傘としてのコーポレート</h3>
            <p>
              プロダクト説明ではなく、思想と事業を束ねる場所として、
              コーポレートサイトを設計します。
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-inner">
        <h2 className="section-title">事業の柱</h2>
        <p className="section-copy">
          Crowd Power Partnersは、DXコンサルティング、AI SaaS、コワーキングの3つの事業を
          並走させ、組織と個人の成長を支援します。
        </p>
        <div className="grid-3">
          <article className="card">
            <h3>DXコンサルティング</h3>
            <p>
              経営課題をデジタルで解きほぐし、現場と経営をつなぐ
              戦略と実行支援を提供します。
            </p>
          </article>
          <article className="card">
            <h3>Talk Insights</h3>
            <p>
              商談後の会話をAIで分析し、次のアクションを自動生成する
              フォローアップサービスです。
            </p>
          </article>
          <article className="card">
            <h3>コワーキング新潟弁天</h3>
            <p>
              24時間無人運営の拠点で、地域とビジネスをつなぎ、
              新しい働き方と出会いの場を創出します。
            </p>
          </article>
        </div>
      </section>

      <section id="talk-insights" className="section-inner">
        <h2 className="section-title">Talk Insights</h2>
        <p className="section-copy">
          「出会いを商談に変える。話すだけ。」
          名刺交換後の会話を起点に、次の一歩を逃さずつなぐAI SaaSです。
        </p>
        <div className="grid-3">
          <article className="card">
            <h3>音声から自動生成</h3>
            <p>
              名刺交換後の会話を自動で要約し、フォローアップメールを準備します。
            </p>
          </article>
          <article className="card">
            <h3>貴重な出会いを活用</h3>
            <p>
              ネットワークを商談につなげる流れを強化し、成果創出をサポートします。
            </p>
          </article>
          <article className="card">
            <h3>中小企業・士業向け</h3>
            <p>
              交流が多い経営者、士業、専門職の業務効率と追客力を高めます。
            </p>
          </article>
        </div>
      </section>

      <section id="coworking" className="section-inner">
        <h2 className="section-title">コワーキング新潟弁天</h2>
        <p className="section-copy">
          新潟に根ざした無人運営拠点。24時間利用できる環境で、
          個人と企業のクリエイティブな出会いを生み出します。
        </p>
        <div className="split-row">
          <div className="card">
            <h3>24時間利用</h3>
            <p>時間や場所に縛られない、柔軟な働き方を支えます。</p>
          </div>
          <div className="card">
            <h3>コミュニティ拠点</h3>
            <p>地域とビジネスのつながりを促進し、新しい価値を創造します。</p>
          </div>
        </div>
      </section>

      <section id="trust" className="section-inner">
        <h2 className="section-title">信頼と実績</h2>
        <p className="section-copy">
          DX推進、AI導入、無人運営の経験をもとに、
          企業と地域の価値創造を支援しています。
        </p>
        <div className="trust-list">
          <div className="trust-item">
            <h4>DX支援実績</h4>
            <p>組織改革と業務効率化による導入成果を積み重ねています。</p>
          </div>
          <div className="trust-item">
            <h4>AIサービス化</h4>
            <p>Talk Insights で出会いの価値を可視化し、実践的なフォローを実現します。</p>
          </div>
          <div className="trust-item">
            <h4>地域拠点の運営</h4>
            <p>新潟での無人コワーキング運営により、新しい働き方を提供します。</p>
          </div>
        </div>
      </section>

      <section id="news" className="section-inner">
        <h2 className="section-title">最新情報</h2>
        <p className="section-copy">
          事業の最新情報、サービスのアップデート、
          地域連携の取り組みをお届けします。
        </p>
        <div className="news-list">
          <div className="news-item">
            <h4>2026年4月 - 新サービス案内</h4>
            <p>Talk Insights のアップデートと連携機能の強化を発表しました。</p>
          </div>
          <div className="news-item">
            <h4>2026年3月 - コワーキング弁天オープン</h4>
            <p>24時間無人運営拠点の利用開始と地域連携を開始しました。</p>
          </div>
          <div className="news-item">
            <h4>2026年2月 - DX支援事例公開</h4>
            <p>中小企業の業務改革を支援した成果をご紹介します。</p>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-banner">
        <div className="section-inner">
          <h2 className="section-title">お問い合わせ</h2>
          <p className="section-copy" style={{ color: "#e2e8f0" }}>
            事業連携、採用、資料請求など、
            まずはお気軽にご相談ください。
          </p>
          <div className="cta-grid">
            <div className="cta-card">
              <h3>お問い合わせ</h3>
              <p>パートナーシップや事業相談はこちらから。</p>
            </div>
            <div className="cta-card">
              <h3>採用応募</h3>
              <p>共に未来を創る仲間を募集しています。</p>
            </div>
            <div className="cta-card">
              <h3>資料請求</h3>
              <p>サービスや事業について、詳しい資料をご用意します。</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div>
            <p>Crowd Power Partners</p>
            <p>東京・新潟</p>
          </div>
          <div className="footer-links">
            <a href="#about">企業・ブランド</a>
            <a href="#services">事業</a>
            <a href="#news">ニュース</a>
            <a href="#careers">採用</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
