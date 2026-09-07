"use client";

import { LoaderCircle, Pause, Play, RotateCcw } from "lucide-react";
import { type CSSProperties, useEffect, useId, useRef, useState } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const audioSource = `${publicBasePath}/audio/zhizn-bez-straha-fragment.mp3`;
type PlaybackStatus = "idle" | "loading" | "playing" | "paused" | "error";

function formatTime(value: number) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  const minutes = Math.floor(safeValue / 60);
  const seconds = Math.floor(safeValue % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function BookAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playRequestRef = useRef(0);
  const statusId = useId();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState<PlaybackStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const syncMetadata = () => {
      setDuration(Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0);
    };
    audio.addEventListener("loadedmetadata", syncMetadata);
    audio.addEventListener("durationchange", syncMetadata);
    const frame = requestAnimationFrame(syncMetadata);
    return () => {
      cancelAnimationFrame(frame);
      audio.removeEventListener("loadedmetadata", syncMetadata);
      audio.removeEventListener("durationchange", syncMetadata);
      playRequestRef.current += 1;
      audio?.pause();
    };
  }, []);

  const reportError = (message: string) => {
    playRequestRef.current += 1;
    setErrorMessage(message);
    setStatus("error");
  };

  const updateDuration = (audio: HTMLAudioElement) => {
    setDuration(Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0);
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const requestId = ++playRequestRef.current;
    if (!audio.paused || status === "loading") {
      audio.pause();
      setStatus("paused");
      return;
    }

    const reload = status === "error" || Boolean(audio.error);
    setErrorMessage("");
    setStatus("loading");

    try {
      if (reload) {
        audio.load();
        setCurrentTime(0);
        setDuration(0);
      }
      await audio.play();
      updateDuration(audio);
      if (requestId === playRequestRef.current) {
        setStatus(audio.paused ? "paused" : "playing");
      }
    } catch (error) {
      if (requestId !== playRequestRef.current) return;
      const blocked = error instanceof Error && error.name === "NotAllowedError";
      reportError(blocked
        ? "Браузер не запустил аудио. Нажмите кнопку повтора или откройте аудиофрагмент ниже."
        : "Не удалось воспроизвести аудио. Проверьте соединение и нажмите кнопку повтора.");
    }
  };

  const isPlaying = status === "playing";
  const isLoading = status === "loading";
  const hasError = status === "error";
  const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;
  const progressStyle = { "--audio-progress": `${progress}%` } as CSSProperties;
  const statusMessage = hasError ? errorMessage : isLoading ? "Загружаем аудиофрагмент…" : "";
  const toggleLabel = hasError ? "Повторить воспроизведение аудиофрагмента"
    : isLoading ? "Отменить загрузку аудиофрагмента"
    : isPlaying ? "Поставить аудиофрагмент на паузу" : "Послушать фрагмент аудиокниги";

  return (
    <div className="book-audio-player" data-playing={isPlaying} data-status={status}>
      <button
        className="book-audio-toggle"
        type="button"
        onClick={togglePlayback}
        aria-label={toggleLabel}
        aria-describedby={statusMessage ? statusId : undefined}
      >
        {hasError ? <RotateCcw size={22} aria-hidden="true" />
          : isLoading ? <LoaderCircle size={22} className="book-audio-spinner" aria-hidden="true" />
          : isPlaying ? <Pause size={22} fill="currentColor" aria-hidden="true" />
          : <Play size={22} fill="currentColor" aria-hidden="true" />}
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
            disabled={duration <= 0 || hasError}
            onChange={(event) => {
              const nextTime = Math.min(duration, Math.max(0, Number(event.target.value)));
              if (audioRef.current) audioRef.current.currentTime = nextTime;
              setCurrentTime(nextTime);
            }}
            aria-label="Позиция воспроизведения"
            aria-valuetext={`${formatTime(currentTime)} из ${formatTime(duration)}`}
            style={progressStyle}
          />
          <time>{formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : "—:—"}</time>
        </div>
        <p id={statusId} className="book-audio-status" role="status" aria-live="polite" aria-atomic="true">{statusMessage}</p>
        {hasError && <a className="book-audio-fallback" href={audioSource} target="_blank" rel="noreferrer">Открыть аудиофрагмент</a>}
      </div>
      <audio
        ref={audioRef}
        src={audioSource}
        preload="metadata"
        onLoadedMetadata={(event) => updateDuration(event.currentTarget)}
        onDurationChange={(event) => updateDuration(event.currentTarget)}
        onPlaying={(event) => { updateDuration(event.currentTarget); setErrorMessage(""); setStatus("playing"); }}
        onWaiting={(event) => { if (!event.currentTarget.paused) setStatus("loading"); }}
        onPause={() => setStatus((previous) => previous === "error" ? previous : "paused")}
        onError={() => reportError("Не удалось загрузить аудио. Проверьте соединение и нажмите кнопку повтора.")}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={(event) => {
          event.currentTarget.currentTime = 0;
          setCurrentTime(0);
          setStatus("idle");
        }}
      />
    </div>
  );
}
