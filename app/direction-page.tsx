import NextImage from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type ContactLink = { href: string; label: string };

export default function DirectionPage({ kicker, title, lead, image, imageAlt, facts, paragraphs, contactLabel = "Обсудить направление", contactLinks }: { kicker: string; title: string; lead: string; image: string; imageAlt: string; facts: string[]; paragraphs: string[]; contactLabel?: string; contactLinks?: ContactLink[] }) {
  const resolvedContactLinks = contactLinks ?? [
    { href: `mailto:info@alexblagov.ru?subject=${encodeURIComponent(contactLabel)}`, label: contactLabel },
  ];

  return (
    <main className="detail-page">
      <header className="detail-header"><Link href="/"><ArrowLeft size={18} /> Александр Благов</Link><a href="mailto:info@alexblagov.ru">Связаться <ArrowUpRight size={16} /></a></header>
      <section className="detail-hero">
        <div className="detail-copy"><p className="section-kicker">{kicker}</p><h1>{title}</h1><p>{lead}</p><div className="detail-facts">{facts.map((fact) => <span key={fact}>{fact}</span>)}</div></div>
        <div className="detail-image"><NextImage src={`${publicBasePath}${image}`} alt={imageAlt} fill unoptimized priority sizes="(max-width: 820px) 100vw, 54vw" /></div>
      </section>
      <section className="detail-body"><div><span>Подход</span><h2>От идеи — к живому результату.</h2></div><div>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="detail-actions">{resolvedContactLinks.map((link) => <a className="button button-dark" href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={17} /></a>)}<Link className="detail-all-contacts" href="/#contact">Все контакты</Link></div></div></section>
      <footer><span>© 2026 Александр Благов</span><span><MapPin size={14} /> Крым · Керчь</span><Link href="/">На главную ↑</Link></footer>
    </main>
  );
}
