import Image from "next/image";

export function Frame({
  src,
  alt,
  ratio = "land",
  sizes = "(max-width: 900px) 100vw, 50vw",
  caption,
  position,
  preload = false,
}: {
  src: string;
  alt: string;
  ratio?: "portrait" | "land" | "wide";
  sizes?: string;
  caption?: string;
  position?: string;
  preload?: boolean;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div className={`frame frame--${ratio}`} data-reveal>
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} style={position ? { objectPosition: position } : undefined} />
      </div>
      {caption && <figcaption className="frame__caption">{caption}</figcaption>}
    </figure>
  );
}
