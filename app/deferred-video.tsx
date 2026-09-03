"use client";

import NextImage from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function DeferredVideo({ src, title, poster }: { src: string; title: string; poster: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-frame">
      {playing ? (
        <iframe src={`${src}&autoplay=1`} title={title} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" allowFullScreen />
      ) : (
        <button className="video-poster" type="button" onClick={() => setPlaying(true)} aria-label={`Смотреть видео: ${title}`}>
          <NextImage src={`${publicBasePath}${poster}`} alt="" fill unoptimized sizes="(max-width: 820px) 100vw, 58vw" />
          <span className="video-poster-shade" />
          <span className="video-play"><Play size={25} fill="currentColor" /><small>Смотреть</small></span>
        </button>
      )}
    </div>
  );
}
