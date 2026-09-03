import type { Metadata } from "next";
import DirectionPage from "../direction-page";

export const metadata: Metadata = { title: "TOP THAI SPA — семейный проект Александра Благова", description: "Пространство тайского массажа и SPA-программ в Керчи.", alternates: { canonical: "/top-thai-spa" } };

export default function SpaPage() { return <DirectionPage kicker="Семейный бизнес · Керчь" title="TOP THAI SPA" lead="Пространство восстановления, традиционных тайских практик и спокойного внимательного сервиса." image="/images/alexander-top-thai-together-harmonized.webp" imageAlt="Александр и Наталья в TOP THAI SPA" facts={["Мастера из Таиланда", "Массаж и SPA-ритуалы", "Семейный подход"]} paragraphs={["Проект развивается как живой сервисный бизнес: с вниманием к атмосфере, профессиональной команде и качеству каждого визита.", "Александр и семья соединяют традиционные техники восстановления с современным клиентским опытом."]} contactLabel="Написать менеджеру" />; }
