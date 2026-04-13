"use client";

import { useEffect, useState, FormEvent } from "react";
import "./contact.css";
import content from "../../data/content.json";

const { contactPage } = content;
const { fields, types, offices } = contactPage;

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // URLパラメータから種別を初期選択（例: /contact?type=business）
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (type && types.some((t) => t.value === type)) {
      setSelectedType(type);
    }
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("v2-visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".v2-fade").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: フォーム送信先（Googleフォーム or 別サービス）が確定したら接続
    alert("お問い合わせフォームの送信先は現在準備中です。\n決定次第、こちらから送信できるようになります。");
    setSubmitting(false);
  };

  return (
    <main className="contact-page">
      {/* ===== Page Hero ===== */}
      <section className="contact-hero">
        <div className="contact-hero__inner v2-fade">
          <p className="contact-hero__label">{contactPage.label}</p>
          <h1 className="contact-hero__title">{contactPage.title}</h1>
          <p className="contact-hero__sub">{contactPage.subtitle}</p>
        </div>
      </section>

      {/* ===== Form ===== */}
      <section className="contact-form-section">
        <form className="contact-form v2-fade" onSubmit={handleSubmit} noValidate>
          {/* お名前 */}
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="name">
              {fields.name}
              <span className="contact-form__badge contact-form__badge--required">
                {fields.required}
              </span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="contact-form__input"
            />
          </div>

          {/* 会社名 */}
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="company">
              {fields.company}
              <span className="contact-form__badge contact-form__badge--optional">
                {fields.optional}
              </span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="contact-form__input"
            />
          </div>

          {/* URL */}
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="url">
              {fields.url}
              <span className="contact-form__badge contact-form__badge--optional">
                {fields.optional}
              </span>
            </label>
            <input
              id="url"
              name="url"
              type="url"
              autoComplete="url"
              placeholder="https://"
              className="contact-form__input"
            />
          </div>

          {/* メールアドレス */}
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="email">
              {fields.email}
              <span className="contact-form__badge contact-form__badge--required">
                {fields.required}
              </span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="contact-form__input"
            />
          </div>

          {/* 電話番号 */}
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="tel">
              {fields.tel}
              <span className="contact-form__badge contact-form__badge--optional">
                {fields.optional}
              </span>
            </label>
            <input
              id="tel"
              name="tel"
              type="tel"
              autoComplete="tel"
              className="contact-form__input"
            />
          </div>

          {/* お問い合わせ種別 */}
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="type">
              {fields.type}
              <span className="contact-form__badge contact-form__badge--required">
                {fields.required}
              </span>
            </label>
            <select
              id="type"
              name="type"
              required
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="contact-form__select"
            >
              <option value="" disabled>
                選択してください
              </option>
              {types.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* お問い合わせ内容 */}
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="message">
              {fields.message}
              <span className="contact-form__badge contact-form__badge--required">
                {fields.required}
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="contact-form__textarea"
            />
          </div>

          {/* プライバシーポリシー同意 */}
          <div className="contact-form__privacy">
            <label className="contact-form__privacy-label">
              <input
                type="checkbox"
                name="privacy"
                required
                className="contact-form__checkbox"
              />
              <span>
                <a href="/privacy" target="_blank" rel="noopener" className="contact-form__privacy-link">
                  プライバシーポリシー
                </a>
                {" "}
                に同意のうえ送信します。
              </span>
            </label>
          </div>

          <div className="contact-form__submit-wrap">
            <button type="submit" className="contact-form__submit" disabled={submitting}>
              {fields.submit}
            </button>
          </div>
        </form>
      </section>

      {/* ===== Offices ===== */}
      <section className="contact-offices">
        <div className="contact-offices__inner v2-fade">
          <h2 className="contact-offices__title">{contactPage.officesTitle}</h2>
          <div className="contact-offices__grid">
            {offices.map((o) => (
              <div key={o.name} className="contact-office">
                <h3 className="contact-office__name">{o.name}</h3>
                <p className="contact-office__zip">{o.zip}</p>
                <p className="contact-office__address">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
