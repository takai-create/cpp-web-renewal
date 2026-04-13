"use client";

import "./privacy.css";
import content from "../../data/content.json";

const { privacyPage } = content;

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      {/* ===== Page Hero ===== */}
      <section className="legal-hero">
        <div className="legal-hero__inner">
          <p className="legal-hero__label">{privacyPage.label}</p>
          <h1 className="legal-hero__title">{privacyPage.title}</h1>
        </div>
      </section>

      {/* ===== Body ===== */}
      <section className="legal-body">
        <div className="legal-body__inner">
          <p className="legal-intro">{privacyPage.intro}</p>
          <p className="legal-effective">{privacyPage.effectiveDate}</p>

          {privacyPage.sections.map((sec, i) => (
            <section key={i} className="legal-section">
              <h2 className="legal-section__title">{sec.title}</h2>

              {sec.body?.map((p, j) => (
                <p key={j} className="legal-section__body">
                  {p}
                </p>
              ))}

              {sec.list && (
                <ul className="legal-section__list">
                  {sec.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}

              {sec.subsections?.map((sub, j) => (
                <div key={j} className="legal-subsection">
                  <p className="legal-subsection__title">{sub.subtitle}</p>
                  <ul className="legal-section__list">
                    {sub.list.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {sec.links && (
                <ul className="legal-section__links">
                  {sec.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}：{link.href}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {sec.footer && <p className="legal-section__footer">{sec.footer}</p>}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
