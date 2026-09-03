import type { Metadata } from "next";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexblagov.ru"),
  title: "Александр Благов — предприниматель, инвестор, проекты в Крыму",
  description:
    "Личный сайт Александра Благова: «Точка Притяжения», TOP THAI SPA, проекты в Крыму, «Жизнь без страха», телесные практики, спорт и творческий путь.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Александр Благов",
    description:
      "Проекты Александра Благова: территории Крыма, TOP THAI SPA и работа с сообществами.",
    type: "profile",
    locale: "ru_RU",
    url: "/",
    images: [{ url: "/images/alexander-hero-coast-v6.webp", width: 1600, height: 1200, alt: "Александр Благов в Крыму" }],
  },
  twitter: { card: "summary_large_image", title: "Александр Благов", description: "Предприниматель, инвестор и проекты в Крыму.", images: ["/images/alexander-hero-coast-v6.webp"] },
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
