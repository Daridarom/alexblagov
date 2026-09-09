"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Мой путь", "#journey"],
  ["Консультации и программы", "#practice"],
  ["Заказать книгу", "#book"],
  ["Проекты в Крыму", "#portfolio"],
  ["Опыт и выступления", "#story"],
  ["Видео", "#media"],
  ["Обратиться", "#contact"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const firstLink = navRef.current?.querySelector<HTMLAnchorElement>("a");
    const focusTimer = window.setTimeout(() => firstLink?.focus(), 50);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
        return;
      }
      if (event.key !== "Tab") return;
      const items = [
        triggerRef.current,
        ...Array.from(navRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []),
      ].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className={open ? "mobile-menu is-open" : "mobile-menu"}>
      <button
        ref={triggerRef}
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
        <nav ref={navRef} id="mobile-site-nav" className="mobile-site-nav" aria-label="Разделы сайта">
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </div>
  );
}
