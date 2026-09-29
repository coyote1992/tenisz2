import Image from "next/image";
import { formatFt, site, tournaments2026 } from "@/content/site";
import { Icon } from "./Icon";

const images = ["/images/forehand-pink.jpg", "/images/aerial-courts.jpg", "/images/junior-rally.jpg"];

export function Tournaments({ id }: { id?: string }) {
  return (
    <section className="section section--navy on-dark" id={id} aria-labelledby="events-title">
      <div className="contours" aria-hidden="true" />
      <div className="container">
        <div className="section-head section-head--split">
          <div className="stack-s">
            <h2 id="events-title" className="h2 h2--xl">
              Versenyek a saját pályáinkon
            </h2>
            <p className="lead">
              2026-ban három amatőr versenyt rendeztünk a Normafánál. A következőt a Facebook-oldalunkon
              hirdetjük meg.
            </p>
          </div>
          <a className="btn btn--ghost-dark" href={site.facebookUrl} target="_blank" rel="noopener">
            Kövess a Facebookon
            <Icon name="arrowUpRight" size={15} />
          </a>
        </div>
        <div className="card-grid">
          {tournaments2026.map((t, i) => (
            <article className="event-card" key={t.name}>
              <div className="event-card__media">
                <Image src={images[i]} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" />
                <span className="tag" style={{ position: "absolute", top: 14, left: 14, zIndex: 1 }}>
                  Lezajlott
                </span>
                <h3 className="event-card__title">{t.name}</h3>
              </div>
              <div className="event-card__body">
                <span className="event-card__row">
                  <Icon name="calendar" size={16} />
                  <strong>{t.date}</strong>
                </span>
                <span className="event-card__row">
                  <Icon name="ball" size={16} />
                  Nevezési díj volt: {formatFt(t.fee)} / fő
                </span>
                {"note" in t && t.note && <span className="event-card__row small">{t.note}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
