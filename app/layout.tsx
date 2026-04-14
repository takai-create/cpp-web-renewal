import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/v2/Header";
import Footer from "../components/v2/Footer";

export const metadata: Metadata = {
  title: "Crowd Power Partners | AIが動き、人が深める。",
  description:
    "DXコンサルティング、AI営業プラットフォーム「First Touch by Talk Insights」、コワーキング新潟弁天を展開。テクノロジーと人の力で事業を創る。",
  keywords: [
    "Crowd Power Partners",
    "クラウドパワーパートナーズ",
    "DXコンサルティング",
    "AI営業",
    "First Touch",
    "Talk Insights",
    "コワーキング",
    "新潟",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://crowdpower-partners.com",
    title: "Crowd Power Partners | AIが動き、人が深める。",
    description:
      "DXコンサルティング、AI営業プラットフォーム「First Touch by Talk Insights」、コワーキング新潟弁天を展開。",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Crowd Power Partners | AIが動き、人が深める。",
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
