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
    title: "Александр Благов — создавать то, что остаётся",
    description:
      "Личный сайт Александра Благова: проекты в Крыму, предпринимательство, книга, спорт и работа с сообществами.",
    type: "profile",
    locale: "ru_RU",
    url: "/",
    siteName: "Александр Благов",
    images: [{ url: "https://daridarom.github.io/alexblagov/og.png", width: 1200, height: 630, alt: "Александр Благов — создавать то, что остаётся" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Александр Благов — создавать то, что остаётся",
    description: "Проекты в Крыму, предпринимательство, книга, спорт и работа с сообществами.",
    images: ["https://daridarom.github.io/alexblagov/og.png"],
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
