"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { useMemo, useState } from "react";

const topics = ["Девелопмент", "Партнёрство", "Выступление", "Книга", "Другое"];

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
      <div className="telegram-contact-grid">
        <a href="https://t.me/CrimeaPoint" target="_blank" rel="noreferrer"><small>Проекты в Крыму</small><strong>Точка Притяжения</strong><span>Telegram-канал <ArrowUpRight size={15} /></span></a>
        <a href="https://t.me/top_crimea_manager" target="_blank" rel="noreferrer"><small>Быстрая связь</small><strong>Менеджер проектов</strong><span>@top_crimea_manager <ArrowUpRight size={15} /></span></a>
        <a href="https://t.me/blagovstyle" target="_blank" rel="noreferrer"><small>Личный канал</small><strong>Александр Благов</strong><span>@blagovstyle <ArrowUpRight size={15} /></span></a>
      </div>
    </div>
  );
}
