import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Crowd Power Partners",
  description:
    "Crowd Power Partners株式会社のプライバシーポリシー。個人情報の取扱い・Cookieの利用・第三者提供・開示請求等について。",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "プライバシーポリシー | Crowd Power Partners",
    description: "Crowd Power Partners株式会社のプライバシーポリシー。",
    url: "https://crowdpower-partners.com/privacy",
  },
  alternates: {
    canonical: "https://crowdpower-partners.com/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
