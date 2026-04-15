"use client";

import { useEffect } from "react";
import "./about.css";
import content from "../../data/content.json";

const { aboutPage } = content;

export default function AboutPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("v2-visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".v2-fade").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* ===== Page Hero ===== */}
      <section className="about-hero">
        <div className="about-hero__inner v2-fade">
          <p className="about-hero__label">{aboutPage.label}</p>
          <h1 className="about-hero__title">{aboutPage.title}</h1>
          <p className="about-hero__sub">{aboutPage.subtitle}</p>
        </div>
      </section>

      {/* ===== Company Info ===== */}
      <section className="about-company">
        <div className="about-company__inner v2-fade">
          <h2 className="about-company__title">{aboutPage.companyInfoTitle}</h2>
          <dl className="about-company__list">
            {aboutPage.companyInfo.map((item) => (
              <div key={item.label} className="about-company__row">
                <dt className="about-company__label">{item.label}</dt>
                <dd className="about-company__value">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="v2-cta">
        <div className="v2-section__inner v2-fade">
          <h2 className="v2-cta__title">{aboutPage.ctaTitle}</h2>
          <div className="v2-cta__grid">
            {aboutPage.ctaItems.map((c) => (
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
