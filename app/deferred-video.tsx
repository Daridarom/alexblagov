"use client";

export default function DeferredVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="video-frame">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        allowFullScreen
      />
    </div>
  );
}
