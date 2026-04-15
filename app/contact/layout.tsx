import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Crowd Power Partners",
  description:
    "事業相談・採用・取材・資料請求など、Crowd Power Partners株式会社へのお問い合わせはこちらから。お気軽にご連絡ください。",
  openGraph: {
    title: "お問い合わせ | Crowd Power Partners",
    description:
      "事業相談・採用・取材・資料請求など、お気軽にご連絡ください。",
    url: "https://crowdpower-partners.com/contact",
  },
  alternates: {
    canonical: "https://crowdpower-partners.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
