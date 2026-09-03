import type { Metadata } from "next";
import DirectionPage from "../direction-page";

export const metadata: Metadata = { title: "Проекты в Крыму — Александр Благов", description: "Земельные, рекреационные и туристические проекты Александра Благова в Восточном Крыму.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() { return <DirectionPage kicker="Точка Притяжения · Восточный Крым" title="Территории с потенциалом." lead="Проекты, где земля, рекреация, сервис и сообщество соединяются в понятную концепцию развития." image="/images/project-horizon-45.webp" imageAlt="Панорама рекреационного проекта в Восточном Крыму" facts={["Горизонт 45", "Элиос", "Боспор", "Благодар", "СКИФ"]} paragraphs={["Команда работает с территориями разного масштаба и назначения: от камерных клубных форматов до рекреационных и агротуристических концепций.", "Каждый проект начинается с характера места, сценариев использования и долгосрочной ценности для собственников, гостей и региона."]} contactLinks={[{ href: "https://t.me/CrimeaPoint", label: "Канал «Точки Притяжения»" }, { href: "https://t.me/top_crimea_manager", label: "Связаться с менеджером" }]} />; }
