"use client";

import { useState } from "react";

const FONT_PATTERNS = [
  {
    id: "A",
    name: "Inter + Noto Sans JP",
    description: "定番。テック企業・SaaS系に最も多い組み合わせ。クリーンで信頼感。",
    impression: "モダン・テック・クリーン",
    heading: "'Inter', 'Noto Sans JP', sans-serif",
    body: "'Noto Sans JP', 'Inter', sans-serif",
    headingWeight: 700,
  },
  {
    id: "B",
    name: "Inter + BIZ UDPGothic",
    description: "UD（ユニバーサルデザイン）書体。可読性が高く、誠実な印象。",
    impression: "誠実・信頼・ビジネス",
    heading: "'Inter', 'BIZ UDPGothic', sans-serif",
    body: "'BIZ UDPGothic', 'Inter', sans-serif",
    headingWeight: 700,
  },
  {
    id: "C",
    name: "Poppins + Noto Sans JP",
    description: "幾何学的な丸みのある英字。LayerXやスタートアップに近い印象。",
    impression: "フレンドリー・先進的・スタートアップ",
    heading: "'Poppins', 'Noto Sans JP', sans-serif",
    body: "'Noto Sans JP', 'Poppins', sans-serif",
    headingWeight: 700,
  },
  {
    id: "D",
    name: "DM Sans + Noto Sans JP",
    description: "少しソフトで洗練された英字。ブランド感を出しやすい。",
    impression: "洗練・上品・ブランド",
    heading: "'DM Sans', 'Noto Sans JP', sans-serif",
    body: "'Noto Sans JP', 'DM Sans', sans-serif",
    headingWeight: 700,
  },
  {
    id: "E",
    name: "Inter + Zen Kaku Gothic New",
    description: "やや柔らかい日本語ゴシック。温かみと知性のバランス。",
    impression: "温かみ・知的・人間味",
    heading: "'Inter', 'Zen Kaku Gothic New', sans-serif",
    body: "'Zen Kaku Gothic New', 'Inter', sans-serif",
    headingWeight: 700,
  },
  {
    id: "F",
    name: "Space Grotesk + Noto Sans JP",
    description: "エッジの効いたモダン書体。テクノロジー感が強い。",
    impression: "テック・先鋭的・AI感",
    heading: "'Space Grotesk', 'Noto Sans JP', sans-serif",
    body: "'Noto Sans JP', 'Space Grotesk', sans-serif",
    headingWeight: 700,
  },
  {
    id: "G",
    name: "Noto Sans + Noto Sans JP / ヒラギノ角ゴ",
    description: "ラクスル・Sansan系。システムフォント寄りで安定感抜群。日本の大手企業に多い。",
    impression: "安定・日本企業・堅実",
    heading: "'Noto Sans', 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN', sans-serif",
    body: "'Noto Sans JP', 'Noto Sans', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN', sans-serif",
    headingWeight: 700,
  },
];

export default function FontTestPage() {
  const [activeFont, setActiveFont] = useState(0);
  const font = FONT_PATTERNS[activeFont];

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700&family=Noto+Sans:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=Poppins:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
        {/* Selector Bar */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "#fff",
            borderBottom: "1px solid #e5e7eb",
            padding: "1rem 2rem",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 8, fontFamily: "Inter, sans-serif" }}>
              フォントパターンを選んで比較してください（全{FONT_PATTERNS.length}パターン）
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {FONT_PATTERNS.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFont(i)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 8,
                    border: activeFont === i ? "2px solid #2563eb" : "1px solid #d1d5db",
                    background: activeFont === i ? "#eff6ff" : "#fff",
                    color: activeFont === i ? "#2563eb" : "#374151",
                    fontWeight: activeFont === i ? 700 : 500,
                    fontSize: 13,
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {f.id}. {f.name}
                </button>
              ))}
            </div>
            <div
              style={{
                marginTop: 8,
                display: "flex",
                gap: 16,
                alignItems: "center",
                fontSize: 13,
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span style={{ color: "#6b7280" }}>印象:</span>
              <span
                style={{
                  background: "#f0f9ff",
                  color: "#2563eb",
                  padding: "2px 10px",
                  borderRadius: 4,
                  fontWeight: 600,
                }}
              >
                {font.impression}
              </span>
              <span style={{ color: "#9ca3af" }}>— {font.description}</span>
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 2rem" }}>
          {/* Hero Preview */}
          <div
            style={{
              background: "#0A1628",
              borderRadius: 16,
              padding: "5rem 3rem",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            <h1
              style={{
                fontFamily: font.heading,
                fontWeight: font.headingWeight,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#fff",
                letterSpacing: "0.06em",
                lineHeight: 1.3,
                margin: "0 0 1.5rem",
              }}
            >
              AIが動き、
              <br />
              人が深める。
            </h1>
            <p
              style={{
                fontFamily: font.body,
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.9,
                maxWidth: 540,
                margin: "0 auto 2rem",
              }}
            >
              テクノロジーの力を、人の知恵で事業に変える。
              <br />
              Crowd Power Partnersは、DX・AI・場の力で
              <br />
              新しい働き方を創造します。
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <span
                style={{
                  fontFamily: font.body,
                  padding: "12px 28px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                事業を見る
              </span>
              <span
                style={{
                  fontFamily: font.body,
                  padding: "12px 28px",
                  borderRadius: 8,
                  background: "#2563eb",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                お問い合わせ
              </span>
            </div>
          </div>

          {/* Philosophy Preview */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "4rem 3rem",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            <p
              style={{
                fontFamily: font.heading,
                fontSize: 12,
                fontWeight: 700,
                color: "#2563eb",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Philosophy
            </p>
            <p
              style={{
                fontFamily: font.body,
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "#374151",
                lineHeight: 2.2,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              AIは手段であり、目的ではない。
              <br />
              テクノロジーが動かす仕組みと、
              <br />
              人が深める関係の両方があって、
              <br />
              はじめて事業は意味を持つ。
            </p>
          </div>

          {/* Card Preview */}
          <div
            style={{
              background: "#f9fafb",
              borderRadius: 16,
              padding: "3rem",
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                fontFamily: font.heading,
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                fontWeight: 700,
                color: "#0A1628",
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              事業
            </h2>
            <p
              style={{
                fontFamily: font.body,
                fontSize: 15,
                color: "#6b7280",
                textAlign: "center",
                marginBottom: 32,
              }}
            >
              テクノロジー × 人 × 場 で、事業を創る
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { name: "DXコンサルティング", catch: "テクノロジーで、組織の可能性を開く" },
                { name: "Talk Insights", catch: "出会いを商談に変える。話すだけ。" },
                { name: "コワーキング新潟弁天", catch: "24時間、無人で動く。あなたの仕事場。" },
              ].map((biz) => (
                <div
                  key={biz.name}
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 12,
                    padding: "2rem 1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: font.heading,
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#0A1628",
                      marginBottom: 6,
                    }}
                  >
                    {biz.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: font.body,
                      fontSize: 14,
                      color: "#2563eb",
                      fontWeight: 500,
                      marginBottom: 12,
                    }}
                  >
                    {biz.catch}
                  </p>
                  <p
                    style={{
                      fontFamily: font.body,
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.7,
                    }}
                  >
                    AIと人の力を掛け合わせ、組織と個人の成長を支援します。
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nav / Footer text preview */}
          <div
            style={{
              background: "#0A1628",
              borderRadius: 16,
              padding: "2.5rem 3rem",
              marginBottom: 32,
            }}
          >
            <p
              style={{
                fontFamily: font.heading,
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Navigation / Footer Preview
            </p>
            <div style={{ display: "flex", gap: 32 }}>
              {["私たちについて", "事業紹介", "ニュース", "採用情報", "お問い合わせ"].map(
                (label) => (
                  <span
                    key={label}
                    style={{
                      fontFamily: font.body,
                      fontSize: 14,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Typography Spec */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "2.5rem 3rem",
            }}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#9ca3af",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Typography Spec — Pattern {font.id}
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  {["要素", "フォント", "サンプル"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "8px 12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        color: "#6b7280",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "見出し（大）", family: font.heading, size: 36, weight: 700, sample: "AIが動き、人が深める。" },
                  { label: "見出し（中）", family: font.heading, size: 24, weight: 700, sample: "事業の柱 — Business" },
                  { label: "見出し（小）", family: font.heading, size: 18, weight: 700, sample: "DXコンサルティング" },
                  { label: "本文", family: font.body, size: 16, weight: 400, sample: "テクノロジーの力を、人の知恵で事業に変える。Crowd Power Partnersは新しい働き方を創造します。" },
                  { label: "ナビ/ボタン", family: font.body, size: 14, weight: 500, sample: "お問い合わせ — Contact Us — 詳しく見る" },
                  { label: "数字", family: "'Inter', sans-serif", size: 48, weight: 700, sample: "2013 / 24h / ¥800" },
                ].map((row) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td
                      style={{
                        padding: "12px",
                        fontFamily: "Inter, sans-serif",
                        color: "#6b7280",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                      }}
                    >
                      {row.label}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontFamily: "Inter, sans-serif",
                        color: "#9ca3af",
                        fontSize: 12,
                        verticalAlign: "top",
                      }}
                    >
                      {row.size}px / {row.weight}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontFamily: row.family,
                        fontSize: Math.min(row.size, 36),
                        fontWeight: row.weight,
                        color: "#0A1628",
                        lineHeight: 1.4,
                      }}
                    >
                      {row.sample}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
