import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Gallery } from "@/components/Gallery";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Galéria",
  description: "Képek és drónvideó a Next Tenisz Akadémia salakpályáiról, edzéseiről és mozgásstúdiójáról a Normafánál.",
  alternates: { canonical: "/galeria" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="container">
          <div className="section-head">
            <h1 className="page-hero__title" style={{ color: "var(--ink)" }}>
              Galéria
            </h1>
            <p className="lead">A pályák, az edzések és a hegy, ahol mindez történik.</p>
          </div>
          <div className="frame frame--wide">
            <video
              src="/video/dron.mp4"
              poster="/images/hero-poster.jpg"
              controls
              muted
              playsInline
              preload="none"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              aria-label="Drónfelvétel a pályákról és a környékről"
            />
          </div>
          <p className="frame__caption">Drónfelvétel a pályákról és a környékről.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Gallery images={galleryImages} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
