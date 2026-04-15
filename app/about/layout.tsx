import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "私たちについて | Crowd Power Partners",
  description:
    "2013年創業、東京・新潟の2拠点で事業展開するCrowd Power Partners株式会社の会社概要と代表メッセージ。挑戦する人のそばに、いつも。",
  openGraph: {
    title: "私たちについて | Crowd Power Partners",
    description:
      "2013年創業、東京・新潟の2拠点で事業展開するCrowd Power Partners株式会社の会社概要と代表メッセージ。",
    url: "https://crowdpower-partners.com/about",
  },
  alternates: {
    canonical: "https://crowdpower-partners.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
