"use client";

import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function DeferredVideo({ src, title, poster }: { src: string; title: string; poster: string }) {
  const [active, setActive] = useState(false);
  const params = new URL(src).searchParams;
  const videoUrl = `https://vkvideo.ru/video${params.get("oid")}_${params.get("id")}`;

  return (
    <div className="media-player">
      <div className="video-frame">
        {active ? <iframe
          src={`${src}&autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          allowFullScreen
        /> : <button className="video-poster" type="button" onClick={() => setActive(true)} aria-label={`Смотреть: ${title}`}>
          <Image src={`${publicBasePath}${poster}`} alt="" fill unoptimized sizes="(max-width: 820px) 100vw, 55vw" />
          <span className="video-play"><Play size={26} fill="currentColor" aria-hidden="true" /></span>
          <span className="video-poster-label">Смотреть видео</span>
        </button>}
      </div>
      <div className="video-links">
        <a href={videoUrl} target="_blank" rel="noreferrer">Открыть в VK Видео <ArrowUpRight size={16} aria-hidden="true" /></a>
        {active && <button type="button" onClick={() => setActive(false)}>Закрыть плеер</button>}
      </div>
    </div>
  );
}
