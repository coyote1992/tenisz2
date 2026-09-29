"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

export function HeroVideo({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduce || conn?.saveData) {
      setPaused(true);
      return;
    }
    setEnabled(true);
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!enabled) {
      setEnabled(true);
      setPaused(false);
      return;
    }
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <>
      <div className="hero__media">
        <Image src={poster} alt={alt} fill preload sizes="100vw" quality={70} />
        {enabled && (
          <video
            ref={ref}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            data-ready={ready}
            onPlaying={() => setReady(true)}
          />
        )}
      </div>
      <button type="button" className="hero__pause" onClick={toggle} aria-pressed={paused}>
        <Icon name={paused ? "play" : "pause"} size={16} fill={paused ? "currentColor" : "none"} />
        <span className="visually-hidden">{paused ? "Háttérvideó lejátszása" : "Háttérvideó megállítása"}</span>
      </button>
    </>
  );
}
