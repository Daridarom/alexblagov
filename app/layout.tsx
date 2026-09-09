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
    title: "Александр Благов — создавать то, что остаётся",
    description:
      "Личный сайт Александра Благова: проекты в Крыму, предпринимательство, книга, спорт и работа с сообществами.",
    type: "profile",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Александр Благов",
    images: [{ url: socialPreviewUrl, width: 1200, height: 630, alt: "Александр Благов — создавать то, что остаётся" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Александр Благов — создавать то, что остаётся",
    description: "Проекты в Крыму, предпринимательство, книга, спорт и работа с сообществами.",
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
