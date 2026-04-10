"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in--visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== Header ===== */}
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__inner">
          <a href="/" className="header__logo">
            Crowd Power Partners
          </a>

          <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
            <a href="#philosophy" className="header__link" onClick={() => setMenuOpen(false)}>
              私たちについて
            </a>
            <a href="#business" className="header__link" onClick={() => setMenuOpen(false)}>
              事業紹介
            </a>
            <a href="#news" className="header__link" onClick={() => setMenuOpen(false)}>
              ニュース
            </a>
            <a href="#careers" className="header__link" onClick={() => setMenuOpen(false)}>
              採用
            </a>
            <a href="#contact" className="header__cta" onClick={() => setMenuOpen(false)}>
              お問い合わせ
            </a>
          </nav>

          <button
            className="header__menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* ===== Hero ===== */}
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">
              AIが動き、
              <br />
              人が深める。
            </h1>
            <p className="hero__subtitle">
              テクノロジーの力を、人の知恵で事業に変える。
              <br />
              Crowd Power Partnersは、DX・AI・場の力で
              <br />
              新しい働き方を創造します。
            </p>
            <div className="hero__actions">
              <a href="#business" className="btn btn--ghost">
                事業を見る
              </a>
              <a href="#contact" className="btn btn--primary">
                お問い合わせ
              </a>
            </div>
          </div>
        </section>

        {/* ===== Philosophy ===== */}
        <section id="philosophy" className="philosophy">
          <div className="philosophy__inner fade-in">
            <p className="philosophy__label">Philosophy</p>
            <p className="philosophy__text">
              AIは手段であり、目的ではない。
              <br />
              テクノロジーが動かす仕組みと、
              <br />
              人が深める関係の両方があって、
              <br />
              はじめて事業は意味を持つ。
            </p>
            <p className="philosophy__text">
              Crowd Power Partnersは、
              <br />
              その交差点に立ち続けます。
            </p>
            <a href="/about" className="philosophy__link">
              私たちについて <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* ===== Business ===== */}
        <section id="business" className="section section--alt">
          <div className="section__inner">
            <div className="section__header fade-in">
              <h2 className="section__title">事業</h2>
              <p className="section__subtitle">
                テクノロジー × 人 × 場 で、事業を創る
              </p>
            </div>

            <div className="business-grid">
              <div className="biz-card fade-in">
                <div className="biz-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                  </svg>
                </div>
                <h3 className="biz-card__name">DXコンサルティング</h3>
                <p className="biz-card__catch">テクノロジーで、組織の可能性を開く</p>
                <p className="biz-card__desc">
                  Google Workspace リセラーを含むDX支援で、
                  中小〜中堅企業の組織変革と業務効率化を実現します。
                </p>
                <a href="/business/dx" className="biz-card__link">
                  詳しく見る <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="biz-card fade-in">
                <div className="biz-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </div>
                <h3 className="biz-card__name">Talk Insights</h3>
                <p className="biz-card__catch">出会いを商談に変える。話すだけ。</p>
                <p className="biz-card__desc">
                  名刺交換後の音声メモをAIが要約し、
                  Gmailでフォローアップメールを自動生成。¥800/月〜
                </p>
                <a href="/business/talk-insights" className="biz-card__link">
                  詳しく見る <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="biz-card fade-in">
                <div className="biz-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="biz-card__name">コワーキング新潟弁天</h3>
                <p className="biz-card__catch">24時間、無人で動く。あなたの仕事場。</p>
                <p className="biz-card__desc">
                  24時間無人運営のコワーキングスペース。
                  地域とビジネスをつなぎ、新しい働き方の場を創出します。
                </p>
                <a href="/business/coworking" className="biz-card__link">
                  詳しく見る <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Numbers ===== */}
        <section className="section section--dark">
          <div className="section__inner">
            <div className="section__header fade-in">
              <h2 className="section__title">数字で見る Crowd Power Partners</h2>
            </div>
            <div className="numbers-grid fade-in">
              <div className="number-item">
                <div className="number-item__value">2013</div>
                <div className="number-item__label">年設立</div>
              </div>
              <div className="number-item">
                <div className="number-item__value">3</div>
                <div className="number-item__label">事業領域</div>
              </div>
              <div className="number-item">
                <div className="number-item__value">2</div>
                <div className="number-item__label">拠点</div>
              </div>
              <div className="number-item">
                <div className="number-item__value">24h</div>
                <div className="number-item__label">無人運営</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== News ===== */}
        <section id="news" className="section">
          <div className="section__inner fade-in">
            <div className="news__header">
              <h2 className="news__title">ニュース</h2>
              <a href="/news" className="news__more">
                一覧を見る <span aria-hidden="true">→</span>
              </a>
            </div>
            <ul className="news-list">
              <li className="news-item">
                <span className="news-item__date">2025.04.01</span>
                <span className="news-item__tag">お知らせ</span>
                <span className="news-item__title">
                  コーポレートサイトをリニューアルしました
                </span>
              </li>
              <li className="news-item">
                <span className="news-item__date">2025.03.15</span>
                <span className="news-item__tag">プレス</span>
                <span className="news-item__title">
                  Talk Insights 正式リリースのお知らせ
                </span>
              </li>
              <li className="news-item">
                <span className="news-item__date">2025.03.01</span>
                <span className="news-item__tag">お知らせ</span>
                <span className="news-item__title">
                  コワーキング新潟弁天がオープンしました
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section id="contact" className="cta-section">
          <div className="section__inner fade-in">
            <h2 className="cta-section__title">
              AIと人の交差点から、一緒に始めませんか。
            </h2>
            <div className="cta-grid">
              <a href="/contact?type=business" className="cta-card">
                <h3 className="cta-card__title">事業について相談する</h3>
                <p className="cta-card__desc">
                  パートナーシップや事業相談はこちらから。
                </p>
              </a>
              <a href="/contact?type=careers" className="cta-card" id="careers">
                <h3 className="cta-card__title">採用情報を見る</h3>
                <p className="cta-card__desc">
                  共に未来を創る仲間を募集しています。
                </p>
              </a>
              <a href="/contact?type=document" className="cta-card">
                <h3 className="cta-card__title">資料請求</h3>
                <p className="cta-card__desc">
                  サービスや事業について、詳しい資料をご用意します。
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__logo">Crowd Power Partners</p>
            <p className="footer__tagline">AIが動き、人が深める。</p>
          </div>

          <div>
            <p className="footer__nav-title">ページ</p>
            <ul className="footer__links">
              <li><a href="/about">私たちについて</a></li>
              <li><a href="/business">事業紹介</a></li>
              <li><a href="/news">ニュース</a></li>
              <li><a href="/careers">採用情報</a></li>
              <li><a href="/contact">お問い合わせ</a></li>
            </ul>
          </div>

          <div>
            <p className="footer__nav-title">会社情報</p>
            <ul className="footer__links">
              <li><a href="/about">Crowd Power Partners株式会社</a></li>
              <li>東京オフィス</li>
              <li>新潟オフィス</li>
              <li><a href="/privacy">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          © 2025 Crowd Power Partners Inc. All rights reserved.
        </div>
      </footer>
    </>
  );
}
