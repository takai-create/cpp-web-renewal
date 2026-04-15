"use client";

import { useEffect, useState, FormEvent } from "react";
import "./contact.css";
import content from "../../data/content.json";

const { contactPage } = content;
const { fields, types, offices } = contactPage;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorDetail, setErrorDetail] = useState<string>("");

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 送信先未設定時: 準備中メッセージ
    if (!contactPage.formAction) {
      alert(
        "お問い合わせフォームは現在準備中です。\n恐れ入りますが、しばらくお待ちください。"
      );
      return;
    }

    setStatus("submitting");
    setErrorDetail("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 種別を人間が読めるラベルに変換して送信
    const typeValue = formData.get("type") as string;
    const typeLabel = types.find((t) => t.value === typeValue)?.label || typeValue;
    formData.set("typeLabel", typeLabel);

    try {
      const response = await fetch(contactPage.formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setSelectedType("");
        // 成功メッセージエリアへスクロール
        setTimeout(() => {
          document
            .querySelector(".contact-form__status")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        if (data && Array.isArray((data as { errors?: Array<{ message: string }> }).errors)) {
          setErrorDetail(
            (data as { errors: Array<{ message: string }> }).errors
              .map((err) => err.message)
              .join(" / ")
          );
        }
      }
    } catch (err) {
      setStatus("error");
      setErrorDetail(err instanceof Error ? err.message : "不明なエラー");
    }
  };

  const isSubmitting = status === "submitting";
  const showForm = status !== "success";

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
        {status === "success" && (
          <div className="contact-form contact-form__status contact-form__status--success v2-fade">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h2 className="contact-form__status-title">送信が完了しました</h2>
            <p className="contact-form__status-text">{contactPage.successMessage}</p>
            <a href="/" className="contact-form__status-link">
              トップページへ戻る
            </a>
          </div>
        )}

        {showForm && (
          <form className="contact-form v2-fade" onSubmit={handleSubmit} noValidate>
            {status === "error" && (
              <div className="contact-form__alert contact-form__alert--error" role="alert">
                <strong>送信エラー</strong>
                <p>{contactPage.errorMessage}</p>
                {errorDetail && <p className="contact-form__alert-detail">{errorDetail}</p>}
              </div>
            )}

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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  className="contact-form__checkbox"
                />
                <span>
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener"
                    className="contact-form__privacy-link"
                  >
                    プライバシーポリシー
                  </a>
                  {" "}
                  に同意のうえ送信します。
                </span>
              </label>
            </div>

            {/* ハニーポット（スパムbot対策：人間は見えない） */}
            <div
              className="contact-form__honeypot"
              aria-hidden="true"
            >
              <label htmlFor="website">このフィールドは空のままにしてください</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="contact-form__submit-wrap">
              <button
                type="submit"
                className="contact-form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "送信中..." : fields.submit}
              </button>
            </div>
          </form>
        )}
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
