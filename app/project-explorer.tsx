"use client";

import NextImage from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
  { name: "Горизонт 45", type: "Рекреация и экотуризм", text: "Размещение, SPA, панорамное кафе, открытый берег и экотропы у Бухты Космонавтов.", image: "/images/project-horizon-45.webp" },
  { name: "Элиос", type: "Туристический проект", text: "Территория в восточном Крыму с туристической и социальной составляющей.", image: "/images/project-elios.webp" },
  { name: "Боспор", type: "Клубный формат", text: "Камерный земельный проект для сообщества собственников и спокойной жизни в Крыму.", image: "/images/project-bospor.webp" },
  { name: "Благодар", type: "Аграрное направление", text: "Территория для виноградарства, сельского хозяйства и частных земельных проектов.", image: "/images/project-blagodar.webp" },
  { name: "СКИФ", type: "Земля и агротуризм", text: "Проект в районе Щёлкино и Семёновки: земля, отдых и агротуристический формат.", image: "/images/project-skif.webp" },
];

export default function ProjectExplorer() {
  const [active, setActive] = useState(0);
  const selected = projects[active];

  return (
    <div className="project-explorer">
      <div className="project-route" aria-label="Выберите проект">
        <div className="project-route-line" aria-hidden="true" />
        {projects.map((project, index) => (
          <button type="button" className={active === index ? "active" : ""} onClick={() => setActive(index)} key={project.name} aria-pressed={active === index}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{project.name}</strong>
          </button>
        ))}
      </div>
      <article className="project-explorer-card">
        <div className="project-explorer-image"><NextImage src={`${publicBasePath}${selected.image}`} alt={`Проект ${selected.name}`} fill unoptimized sizes="(max-width: 820px) 100vw, 48vw" /></div>
        <div className="project-explorer-copy"><span><MapPin size={16} /> Восточный Крым · 45°</span><small>{selected.type}</small><h3>{selected.name}</h3><p>{selected.text}</p><Link href="/projects">Все территории <ArrowUpRight size={17} /></Link></div>
      </article>
    </div>
  );
}
