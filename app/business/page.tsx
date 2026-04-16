"use client";

import { useEffect } from "react";
import "./business.css";
import content from "../../data/content.json";

const { businessPage } = content;

export default function BusinessPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("v2-visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".v2-fade").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  return (
    <main className="biz-page">
      {/* ===== Page Hero ===== */}
      <section className="biz-hero">
        <div className="biz-hero__inner">
          <p className="biz-hero__label">{businessPage.label}</p>
          <h1 className="biz-hero__title">{businessPage.title}</h1>
          <p className="biz-hero__sub">{businessPage.subtitle}</p>
        </div>
      </section>

      {/* ===== Service Sections ===== */}
      {businessPage.services.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`biz-service ${idx % 2 === 1 ? "biz-service--alt" : ""}`}
        >
          <div className="biz-service__inner">
            <div className="biz-service__top v2-fade">
              <div className="biz-service__meta">
                <span className="biz-service__number">{svc.number}</span>
                <h2 className="biz-service__name">
                  {svc.name}
                  {svc.nameNote && (
                    <span className="biz-service__name-note"> {svc.nameNote}</span>
                  )}
                </h2>
              </div>
              <div className="biz-service__image">
                <img src={svc.image} alt={svc.name} loading="lazy" />
              </div>
            </div>

            <div className="biz-service__body v2-fade">
              <div className="biz-service__info">
                <p className="biz-service__category">{svc.category}</p>
                <h3 className="biz-service__headline">{svc.headline}</h3>
                <p className="biz-service__desc">{svc.description}</p>
                <a href={svc.link} className="biz-service__link" {...(svc.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {svc.linkLabel}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <div className="biz-service__features">
                {svc.features.map((f, i) => (
                  <div key={i} className="biz-feature">
                    <h4 className="biz-feature__title">{f.title}</h4>
                    <p className="biz-feature__desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {svc.news.length > 0 && (
              <div className="biz-service__news v2-fade">
                <p className="biz-service__news-label">Service News</p>
                <ul className="biz-service__news-list">
                  {svc.news.map((n, i) => (
                    <li key={i} className="biz-service__news-item">
                      <span className="biz-service__news-date">{n.date}</span>
                      <span className="biz-service__news-title">{n.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="v2-cta">
        <div className="v2-section__inner v2-fade">
          <h2 className="v2-cta__title">{businessPage.ctaTitle}</h2>
          <div className="v2-cta__grid">
            {businessPage.ctaItems.map((c) => (
              <a key={c.title} href={c.href} className="v2-cta-card">
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
