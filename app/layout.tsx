import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/v2/Header";
import Footer from "../components/v2/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://crowdpower-partners.com"),
  title: {
    default: "Crowd Power Partners | AIが動き、人が深める。",
    template: "%s",
  },
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
  authors: [{ name: "Crowd Power Partners" }],
  creator: "Crowd Power Partners",
  publisher: "Crowd Power Partners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://crowdpower-partners.com",
    siteName: "Crowd Power Partners",
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
  twitter: {
    card: "summary_large_image",
    title: "Crowd Power Partners | AIが動き、人が深める。",
    description:
      "DXコンサルティング、AI営業プラットフォーム「First Touch by Talk Insights」、コワーキング新潟弁天を展開。",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://crowdpower-partners.com",
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
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
