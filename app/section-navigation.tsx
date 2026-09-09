"use client";

import { BookOpen, MapPin, Mountain, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "journey", label: "Путь", Icon: Mountain },
  { id: "practice", label: "Работа", Icon: Sparkles },
  { id: "book", label: "Книга", Icon: BookOpen },
  { id: "portfolio", label: "Крым", Icon: MapPin },
  { id: "contact", label: "Связь", Icon: Mail },
];

const observedSections = [
  { id: "journey", active: "journey" },
  { id: "practice", active: "practice" },
  { id: "book", active: "book" },
  { id: "portfolio", active: "portfolio" },
  { id: "story", active: "journey" },
  { id: "family", active: "journey" },
  { id: "media", active: "journey" },
  { id: "contact", active: "contact" },
];

export default function SectionNavigation() {
  const [active, setActive] = useState(sections[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const page = document.documentElement;
      const scrollable = Math.max(1, page.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)));

      const marker = window.innerHeight * 0.42;
      let current = sections[0].id;
      for (const section of observedSections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= marker) current = section.active;
      }
      setActive(current);
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="mobile-section-dock" aria-label="Быстрая навигация по разделам">
      <span className="mobile-dock-progress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></span>
      {sections.map(({ id, label, Icon }) => (
        <a className={active === id ? "is-active" : ""} href={`#${id}`} key={id} aria-current={active === id ? "location" : undefined}>
          <Icon size={18} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
