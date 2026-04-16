"use client";

import { useEffect, useState, useCallback } from "react";
import content from "../data/content.json";

const { hero, philosophy, businessSection, numbers, news, cta } = content;

export default function HomeV2() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % hero.slides.length), []);

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
        {!slide.noOverlay && <div className="v2-hero__overlay" />}

        <div className="v2-hero__content" key={current}>
          <h1 className="v2-hero__title">{slide.copy}</h1>
          <p className="v2-hero__sub">
            {slide.sub.split("\n").map((line, i) => (
              <span key={i}>
                {line.split(/(First Touch)/).map((part, j) =>
                  part === "First Touch" ? (
                    <span key={j} className="v2-hero__sub-highlight">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
                <br />
              </span>
            ))}
          </p>
          <div className="v2-hero__actions">
            <a href="#business" className="v2-btn v2-btn--ghost">
              {hero.ctaSecondary}
            </a>
            <a href="#contact" className="v2-btn v2-btn--primary">
              {hero.ctaPrimary}
            </a>
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

      {/* ===== Philosophy / Message ===== */}
      <section id="message" className="v2-philosophy">
        <div className="v2-philosophy__inner v2-fade">
          <p className="v2-philosophy__label">{philosophy.label}</p>
          {philosophy.paragraphs.map((p, i) => (
            <p key={i} className="v2-philosophy__text">
              {p.split("\n").map((line, j) => (
                <span key={j}>
                  {line}
                  <br />
                </span>
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
                  {biz.category && <p className="v2-biz-item__category">{biz.category}</p>}
                  <h3 className="v2-biz-item__name">
                    {biz.name}
                    {biz.nameNote && (
                      <span className="v2-biz-item__name-note"> {biz.nameNote}</span>
                    )}
                  </h3>
                  <p className="v2-biz-item__catch">{biz.catch}</p>
                  <p className="v2-biz-item__desc">{biz.desc}</p>
                </div>
                <div className="v2-biz-item__arrow">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
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
  );
}
