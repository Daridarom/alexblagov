"use client";

import { Pause, Play } from "lucide-react";
import { type CSSProperties, useRef, useState } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const fallbackDuration = 56.8;

function formatTime(value: number) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  const minutes = Math.floor(safeValue / 60);
  const seconds = Math.floor(safeValue % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function BookAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(fallbackDuration);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const progressStyle = { "--audio-progress": `${progress}%` } as CSSProperties;

  return (
    <div className="book-audio-player" data-playing={isPlaying}>
      <button
        className="book-audio-toggle"
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Поставить аудиофрагмент на паузу" : "Послушать фрагмент аудиокниги"}
      >
        {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
      </button>
      <div className="book-audio-content">
        <strong>Зачем вам эта книга?</strong>
        <div className="book-audio-progress">
          <input
            type="range"
            min="0"
            max={duration}
            step="0.1"
            value={currentTime}
            onChange={(event) => {
              const nextTime = Number(event.target.value);
              if (audioRef.current) audioRef.current.currentTime = nextTime;
              setCurrentTime(nextTime);
            }}
            aria-label="Позиция воспроизведения"
            style={progressStyle}
          />
          <time>{formatTime(currentTime)} / {formatTime(duration)}</time>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={`${publicBasePath}/audio/zhizn-bez-straha-fragment.mp3`}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || fallbackDuration)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={(event) => {
          event.currentTarget.currentTime = 0;
          setCurrentTime(0);
          setIsPlaying(false);
        }}
      />
    </div>
  );
}
