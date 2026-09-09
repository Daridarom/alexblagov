import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site-url";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialPreviewUrl = "https://daridarom.github.io/alexblagov/og.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Александр Благов — консультации, программы ТОП и проекты в Крыму",
  description:
    "Консультации и авторские программы Александра Благова, направление ТОП, книга «Жизнь без страха». Покупка участков, инвестиционное участие и партнёрство в проектах Крыма.",
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Александр Благов — мастер, тренер и предприниматель в Крыму",
    description:
      "Консультации, программы ТОП, книга «Жизнь без страха» и проекты для жизни, отдыха и партнёрства в Крыму.",
    type: "profile",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Александр Благов",
    images: [{ url: socialPreviewUrl, width: 1200, height: 630, alt: "Александр Благов — мастер, тренер и предприниматель в Крыму" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Александр Благов — мастер, тренер и предприниматель в Крыму",
    description: "Консультации, программы ТОП, книга «Жизнь без страха» и проекты в Крыму.",
    images: [socialPreviewUrl],
  },
  icons: {
    icon: `${publicBasePath}/favicon.svg`,
    shortcut: `${publicBasePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
