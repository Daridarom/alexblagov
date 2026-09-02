import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Александр Благов — предприниматель, инвестор, проекты в Крыму",
  description:
    "Личный сайт Александра Благова: «Точка Притяжения», TOP THAI SPA, проекты в Крыму, «Жизнь без страха», телесные практики, спорт и творческий путь.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Александр Благов",
    description:
      "Проекты Александра Благова: территории Крыма, TOP THAI SPA и работа с сообществами.",
    type: "profile",
    locale: "ru_RU",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
