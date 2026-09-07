import { ArrowUpRight } from "lucide-react";

export default function DeferredVideo({ src, title }: { src: string; title: string }) {
  const params = new URL(src).searchParams;
  const videoUrl = `https://vkvideo.ru/video${params.get("oid")}_${params.get("id")}`;

  return (
    <div className="media-player">
      <div className="video-frame">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          allowFullScreen
        />
      </div>
      <div className="video-links">
        <a href={videoUrl} target="_blank" rel="noreferrer">Открыть в VK Видео <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
  );
}
