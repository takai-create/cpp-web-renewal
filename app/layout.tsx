import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crowd Power Partners | AIが動き、人が深める。",
  description: "Crowd Power Partnersのコーポレートサイト。DX、AI SaaS、コワーキングの事業を思想でつなぐ。",
  keywords: ["Crowd Power Partners", "DX", "AI", "コワーキング", "コーポレートサイト"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://crowdpower-partners.com",
    title: "Crowd Power Partners | AIが動き、人が深める。",
    description: "Crowd Power Partnersのコーポレートサイト。DX、AI SaaS、コワーキングの事業を思想でつなぐ。",
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
      <body>{children}</body>
    </html>
  );
}
