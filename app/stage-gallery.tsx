"use client";

import NextImage from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const photos = [
  { src: "/images/alexander-stage-entrance-v2.webp", alt: "Александр Благов выходит на сцену перед большим залом", eyebrow: "Выход к аудитории", title: "Масштаб зала", className: "live-shot-entrance" },
  { src: "/images/alexander-stage-microphone-v2.webp", alt: "Александр Благов выступает с микрофоном", eyebrow: "Выступление", title: "Прямой разговор", className: "live-shot-microphone" },
  { src: "/images/alexander-community-tunnel-v2.webp", alt: "Участники программы создают живой коридор поддержки", eyebrow: "Группа", title: "Движение вместе", className: "live-shot-tunnel" },
  { src: "/images/alexander-community-circle-v2.webp", alt: "Участники программы работают в кругу в панорамном зале", eyebrow: "Пространство", title: "Живое сообщество", className: "live-shot-circle" },
  { src: "/images/alexander-stage-emotion-v2.webp", alt: "Эмоциональный эпизод выступления Александра Благова на сцене", eyebrow: "Сцена", title: "Работа с состоянием", className: "live-shot-emotion" },
];

export default function StageGallery() {
  const [active, setActive] = useState<number | null>(null);
  const touchStart = useRef(0);

  const move = (direction: number) => {
    setActive((current) => current === null ? 0 : (current + direction + photos.length) % photos.length);
  };

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  const selected = active === null ? null : photos[active];

  return (
    <>
      <div className="live-mosaic">
        {photos.map((photo, index) => (
          <button className={`live-shot ${photo.className}`} type="button" key={photo.src} onClick={() => setActive(index)} aria-label={`Открыть фотографию: ${photo.title}`}>
            <NextImage src={`${publicBasePath}${photo.src}`} alt={photo.alt} fill unoptimized sizes="(max-width: 820px) 100vw, 42vw" />
            <span className="live-shot-caption"><span>{photo.eyebrow}</span><strong>{photo.title}</strong></span>
          </button>
        ))}
      </div>

      {selected && active !== null && (
        <div className="gallery-dialog" role="dialog" aria-modal="true" aria-label={`${selected.eyebrow}: ${selected.title}`} onClick={() => setActive(null)}>
          <button className="gallery-close" type="button" onClick={() => setActive(null)} aria-label="Закрыть галерею"><X size={24} /></button>
          <button className="gallery-arrow gallery-arrow-left" type="button" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Предыдущая фотография"><ChevronLeft size={30} /></button>
          <figure className="gallery-dialog-figure" onClick={(event) => event.stopPropagation()} onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? 0; }} onTouchEnd={(event) => { const end = event.changedTouches[0]?.clientX ?? 0; const distance = end - touchStart.current; if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1); }}>
            <div className="gallery-dialog-image"><NextImage src={`${publicBasePath}${selected.src}`} alt={selected.alt} fill unoptimized sizes="100vw" priority /></div>
            <figcaption><span>{selected.eyebrow}</span><strong>{selected.title}</strong><small>{String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</small></figcaption>
          </figure>
          <button className="gallery-arrow gallery-arrow-right" type="button" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Следующая фотография"><ChevronRight size={30} /></button>
        </div>
      )}
    </>
  );
}
