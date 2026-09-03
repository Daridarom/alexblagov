"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { useMemo, useState } from "react";

const topics = ["Девелопмент", "Партнёрство", "Выступление", "Книга", "Другое"];

const topicLinks: Record<string, { href: string; label: string }[]> = {
  Девелопмент: [
    { href: "https://t.me/CrimeaPoint", label: "Канал «Точка Притяжения»" },
    { href: "https://t.me/top_crimea_manager", label: "Связаться с менеджером" },
  ],
  Партнёрство: [
    { href: "https://t.me/CrimeaPoint", label: "Канал «Точка Притяжения»" },
    { href: "https://t.me/top_crimea_manager", label: "Связаться с менеджером" },
  ],
  Выступление: [
    { href: "https://t.me/blagovstyle", label: "Написать Александру" },
  ],
  Книга: [
    { href: "https://t.me/blagovstyle", label: "Написать Александру" },
  ],
  Другое: [
    { href: "https://t.me/blagovstyle", label: "Написать Александру" },
  ],
};

export default function ContactComposer() {
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");
  const mailHref = useMemo(
    () => `mailto:info@alexblagov.ru?subject=${encodeURIComponent(`${topic} — обращение с сайта`)}&body=${encodeURIComponent(message)}`,
    [topic, message],
  );

  return (
    <div className="contact-composer">
      <div className="contact-topics" aria-label="Тема обращения">
        {topics.map((item) => <button type="button" key={item} className={topic === item ? "active" : ""} aria-pressed={topic === item} onClick={() => setTopic(item)}>{item}</button>)}
      </div>
      <label><span>Коротко о задаче</span><textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={4} placeholder="Например: хочу обсудить участие в проекте…" /></label>
      <a className="button contact-send" href={mailHref}>Подготовить письмо <Send size={17} /></a>
      <div className="context-contact-actions" aria-label={`Контакты по теме «${topic}»`}>
        {topicLinks[topic].map((link) => (
          <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
            {link.label} <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}
