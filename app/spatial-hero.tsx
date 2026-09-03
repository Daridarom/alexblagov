"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

type SpatialHeroProps = {
  children: ReactNode;
};

export default function SpatialHero({ children }: SpatialHeroProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  const setDepth = (x: number, y: number, active = true) => {
    const frame = frameRef.current;
    if (!frame) return;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      frame.style.setProperty("--spatial-x", `${x * 10}px`);
      frame.style.setProperty("--spatial-y", `${y * 7}px`);
      frame.style.setProperty("--spatial-bg-x", `${x * -15}px`);
      frame.style.setProperty("--spatial-bg-y", `${y * -10}px`);
      frame.style.setProperty("--spatial-mid-x", `${x * 4.5}px`);
      frame.style.setProperty("--spatial-mid-y", `${y * 3}px`);
      frame.style.setProperty("--spatial-near-x", `${x * 7}px`);
      frame.style.setProperty("--spatial-near-y", `${y * 5}px`);
      frame.style.setProperty("--spatial-rotate-x", `${y * -1.7}deg`);
      frame.style.setProperty("--spatial-rotate-y", `${x * 2.4}deg`);
      frame.style.setProperty("--spatial-light-x", `${50 + x * 15}%`);
      frame.style.setProperty("--spatial-light-y", `${38 + y * 12}%`);
      if (active) frame.dataset.spatialActive = "true";
      else delete frame.dataset.spatialActive;
    });
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1));
    const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));
    setDepth(x, y);
  };

  const resetDepth = () => {
    const frame = frameRef.current;
    if (!frame) return;

    setDepth(0, 0, false);
  };

  return (
    <div
      className="hero-visual spatial-hero"
      ref={frameRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetDepth}
      onPointerCancel={resetDepth}
      onPointerUp={resetDepth}
    >
      {children}
    </div>
  );
}
