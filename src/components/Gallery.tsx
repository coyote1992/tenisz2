"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

export type GalleryImage = { src: string; alt: string; w: number; h: number };

export function Gallery({ images }: { images: GalleryImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const open = (i: number, el: HTMLButtonElement) => {
    lastTrigger.current = el;
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => {
      setIndex(null);
      lastTrigger.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    d.addEventListener("close", onClose);
    d.addEventListener("keydown", onKey);
    return () => {
      d.removeEventListener("close", onClose);
      d.removeEventListener("keydown", onKey);
    };
  }, [step]);

  const current = index === null ? null : images[index];

  return (
    <>
      <div className="masonry">
        {images.map((img, i) => (
          <button key={img.src} type="button" onClick={(e) => open(i, e.currentTarget)} aria-label={`Nagyítás: ${img.alt}`}>
            <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw" />
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="lightbox on-dark"
        aria-label="Képnézegető"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current && (
          <figure onClick={(e) => e.target === e.currentTarget && close()}>
            <Image key={current.src} src={current.src} alt={current.alt} width={current.w} height={current.h} sizes="94vw" quality={85} />
            <figcaption>
              {current.alt} · {(index ?? 0) + 1} / {images.length}
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox__close" onClick={close} autoFocus>
          <Icon name="close" size={20} />
          <span className="visually-hidden">Bezárás</span>
        </button>
        <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)}>
          <Icon name="arrowLeft" size={20} />
          <span className="visually-hidden">Előző kép</span>
        </button>
        <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)}>
          <Icon name="arrowRight" size={20} />
          <span className="visually-hidden">Következő kép</span>
        </button>
      </dialog>
    </>
  );
}
