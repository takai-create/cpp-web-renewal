import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "コーポレートサイト | 企業名",
  description: "企業の公式ウェブサイトです",
  keywords: ["企業", "サービス", "コーポレートサイト"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://example.com",
    title: "コーポレートサイト | 企業名",
    description: "企業の公式ウェブサイトです",
    images: [
      {
        url: "https://example.com/og-image.png",
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
