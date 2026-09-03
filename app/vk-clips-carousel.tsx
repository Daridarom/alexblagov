"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const clips = [
  {
    src: "https://vk.com/video_ext.php?oid=34314310&id=456239533&hd=2",
    title: "Личный взгляд",
    meta: "Александр Благов · VK Клипы",
  },
  {
    src: "https://vk.com/video_ext.php?oid=34314310&id=456239477&hd=2",
    title: "За кадром «Гладиаторов»",
    meta: "Телепроект · VK Клипы",
  },
];

export default function VkClipsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (nextIndex: number) => {
    const safeIndex = Math.max(0, Math.min(nextIndex, clips.length - 1));
    const track = trackRef.current;
    const cards = track?.querySelectorAll<HTMLElement>(".vk-clip-card");
    const card = cards?.[safeIndex];

    if (track && cards?.length && card) {
      track.scrollTo({ left: card.offsetLeft - cards[0].offsetLeft, behavior: "smooth" });
      setActiveIndex(safeIndex);
    }
  };

  const updateActiveIndex = () => {
    const track = trackRef.current;
    if (!track) return;

    const cards = [...track.querySelectorAll<HTMLElement>(".vk-clip-card")];
    const firstOffset = cards[0]?.offsetLeft ?? 0;
    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    const nearest = cards.reduce(
      (best, card, index) => {
        const cardCenter = card.offsetLeft - firstOffset + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );

    setActiveIndex(nearest.index);
  };

  return (
    <section className="vk-clips" aria-labelledby="vk-clips-title" aria-roledescription="карусель">
      <div className="vk-clips-copy">
        <span>Короткий формат</span>
        <h3 id="vk-clips-title">Клипы</h3>
        <p>Личные наблюдения, сцена и моменты из проектов Александра.</p>
        <div className="vk-clips-navigation" aria-label="Управление каруселью клипов">
          <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Предыдущий клип">
            <ChevronLeft size={21} />
          </button>
          <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(clips.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === clips.length - 1} aria-label="Следующий клип">
            <ChevronRight size={21} />
          </button>
        </div>
      </div>

      <div className="vk-clips-track" ref={trackRef} onScroll={updateActiveIndex} tabIndex={0} aria-label="Клипы Александра Благова">
        {clips.map((clip, index) => (
          <article className="vk-clip-card" key={clip.src} aria-label={`${index + 1} из ${clips.length}: ${clip.title}`}>
            <div className="vk-clip-frame">
              <iframe
                src={clip.src}
                title={clip.title}
                loading="lazy"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                allowFullScreen
              />
            </div>
            <div className="vk-clip-caption">
              <span>{clip.meta}</span>
              <h4>{clip.title}</h4>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
