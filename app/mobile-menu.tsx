"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Сегодня", "#today"],
  ["Территории", "#portfolio"],
  ["Семья", "#family"],
  ["Путь и спорт", "#story"],
  ["Книга", "#book"],
  ["Видео", "#media"],
  ["Контакты", "#contact"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className={open ? "mobile-menu is-open" : "mobile-menu"}>
      <button
        className="mobile-menu-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-site-nav"
        aria-label={open ? "Закрыть меню разделов" : "Открыть меню разделов"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={19} /> : <Menu size={19} />}
        <span>Разделы</span>
      </button>
      {open && (
        <nav id="mobile-site-nav" className="mobile-site-nav" aria-label="Разделы сайта">
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </div>
  );
}
