import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業紹介 | Crowd Power Partners",
  description:
    "DXコンサルティング、AI営業プラットフォーム「First Touch by Talk Insights」、コワーキング新潟弁天の3事業をご紹介。デジタル × 人 × 場 で、事業を創る。",
  openGraph: {
    title: "事業紹介 | Crowd Power Partners",
    description:
      "DXコンサルティング、AI営業プラットフォーム「First Touch by Talk Insights」、コワーキング新潟弁天の3事業をご紹介。",
    url: "https://crowdpower-partners.com/business",
  },
  alternates: {
    canonical: "https://crowdpower-partners.com/business",
  },
};

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
