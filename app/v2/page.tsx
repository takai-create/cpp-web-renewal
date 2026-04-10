"use client";

import { useEffect, useState, useCallback } from "react";
import "./v2.css";
import content from "../../data/content.json";

const { site, nav, hero, philosophy, businessSection, numbers, news, cta, footer } = content;

export default function HomeV2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % hero.slides.length), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("v2-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".v2-fade").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const slide = hero.slides[current];

  return (
    <>
      {/* ===== Header ===== */}
      <header className={`v2-header ${scrolled ? "v2-header--scrolled" : ""}`}>
        <div className="v2-header__inner">
          <a href="/v2" className="v2-header__logo">{site.name}</a>
          <nav className={`v2-header__nav ${menuOpen ? "v2-header__nav--open" : ""}`}>
            <a href="#about" className="v2-header__link" onClick={() => setMenuOpen(false)}>{nav.about}</a>
            <a href="/v2/business" className="v2-header__link" onClick={() => setMenuOpen(false)}>{nav.business}</a>
            <a href="#news" className="v2-header__link" onClick={() => setMenuOpen(false)}>{nav.news}</a>
            <a href="#careers" className="v2-header__link" onClick={() => setMenuOpen(false)}>{nav.careers}</a>
            <a href="#contact" className="v2-header__cta" onClick={() => setMenuOpen(false)}>{nav.contact}</a>
          </nav>
          <button className="v2-header__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>
        {/* ===== Hero Slider ===== */}
        <section
          className="v2-hero"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {hero.slides.map((s, i) => (
            <div
              key={i}
              className="v2-hero__bg"
              style={{ backgroundImage: `url(${s.image})`, opacity: i === current ? 1 : 0 }}
            />
          ))}
          <div className="v2-hero__overlay" />

          <div className="v2-hero__content" key={current}>
            <h1 className="v2-hero__title">{slide.copy}</h1>
            <p className="v2-hero__sub">
              {slide.sub.split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
            <div className="v2-hero__actions">
              <a href="#business" className="v2-btn v2-btn--ghost">{hero.ctaSecondary}</a>
              <a href="#contact" className="v2-btn v2-btn--primary">{hero.ctaPrimary}</a>
            </div>
          </div>

          <div className="v2-hero__dots">
            {hero.slides.map((_, i) => (
              <button
                key={i}
                className={`v2-hero__dot ${i === current ? "v2-hero__dot--active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`スライド ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ===== Philosophy ===== */}
        <section id="about" className="v2-philosophy">
          <div className="v2-philosophy__inner v2-fade">
            <p className="v2-philosophy__label">{philosophy.label}</p>
            {philosophy.paragraphs.map((p, i) => (
              <p key={i} className="v2-philosophy__text">
                {p.split("\n").map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </p>
            ))}
            <a href="/about" className="v2-philosophy__link">
              {philosophy.link} <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* ===== Business ===== */}
        <section id="business" className="v2-section v2-section--alt">
          <div className="v2-section__inner">
            <div className="v2-section__header v2-fade">
              <p className="v2-section__label">{businessSection.label}</p>
              <h2 className="v2-section__title">{businessSection.title}</h2>
            </div>

            <div className="v2-biz-list">
              {businessSection.items.map((biz, i) => (
                <a href={biz.href} key={i} className="v2-biz-item v2-fade">
                  <div className="v2-biz-item__img">
                    <img src={biz.image} alt={biz.name} loading="lazy" />
                  </div>
                  <div className="v2-biz-item__body">
                    <h3 className="v2-biz-item__name">{biz.name}</h3>
                    <p className="v2-biz-item__catch">{biz.catch}</p>
                    <p className="v2-biz-item__desc">{biz.desc}</p>
                  </div>
                  <div className="v2-biz-item__arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Numbers ===== */}
        <section className="v2-section v2-section--dark">
          <div className="v2-section__inner">
            <div className="v2-numbers v2-fade">
              {numbers.map((n) => (
                <div key={n.label} className="v2-number">
                  <div className="v2-number__value">{n.value}</div>
                  <div className="v2-number__label">{n.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== News ===== */}
        <section id="news" className="v2-section">
          <div className="v2-section__inner v2-fade">
            <div className="v2-news-header">
              <h2 className="v2-news-header__title">{news.title}</h2>
              <a href="/news" className="v2-news-header__more">{news.moreLink}</a>
            </div>
            <ul className="v2-news-list">
              {news.items.map((item, i) => (
                <li key={i} className="v2-news-item">
                  <span className="v2-news-item__date">{item.date}</span>
                  <span className="v2-news-item__tag">{item.tag}</span>
                  <span className="v2-news-item__title">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section id="contact" className="v2-cta">
          <div className="v2-section__inner v2-fade">
            <h2 className="v2-cta__title">{cta.title}</h2>
            <div className="v2-cta__grid">
              {cta.items.map((c) => (
                <a key={c.title} href={c.href} className="v2-cta-card" id={c.id}>
                  <h3 className="v2-cta-card__title">{c.title}</h3>
                  <p className="v2-cta-card__desc">{c.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="v2-footer">
        <div className="v2-footer__inner">
          <div className="v2-footer__grid">
            <div className="v2-footer__brand">
              <p className="v2-footer__logo">{site.name}</p>
              <p className="v2-footer__tagline">{site.tagline}</p>
            </div>
            {footer.columns.map((col) => (
              <div key={col.title} className="v2-footer__col">
                <p className="v2-footer__col-title">{col.title}</p>
                <ul className="v2-footer__links">
                  {col.links.map((link) => (
                    <li key={link.label}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="v2-footer__bottom">
            <div className="v2-footer__legal">
              {footer.legal.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
            <p className="v2-footer__copy">{site.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
