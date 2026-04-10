import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crowd Power Partners | AIが動き、人が深める。",
  description:
    "DXコンサルティング、AI SaaS、コワーキングを展開。テクノロジーと人の力で事業を創る。",
  keywords: [
    "Crowd Power Partners",
    "DX",
    "AI",
    "コワーキング",
    "コーポレートサイト",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://crowdpower-partners.com",
    title: "Crowd Power Partners | AIが動き、人が深める。",
    description:
      "DXコンサルティング、AI SaaS、コワーキングを展開。テクノロジーと人の力で事業を創る。",
    images: [
      {
        url: "https://crowdpower-partners.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
