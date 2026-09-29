import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Masszázs, köpölyözés és softlaser",
  description: "Hamarosan: masszázs, köpölyözés és softlaser kezelés a Next Tenisz Akadémián, a Normafánál.",
  alternates: { canonical: "/regeneracio" },
};

const services = [
  {
    title: "Masszázs és köpölyözés",
    text: "Regeneráció edzés vagy meccs után. A részleteket az indulás előtt közzétesszük.",
  },
  {
    title: "Softlaser",
    text: "Lágylézeres kezelés. Az időpontokról és díjakról az indulás előtt értesítünk.",
  },
];

export default function RecoveryPage() {
  return (
    <>
      <PageHero
        title="Regeneráció, hamarosan."
        lead="Masszázzsal, köpölyözéssel és softlaser kezeléssel bővülünk. Ha szeretnél elsőként értesülni az indulásról, jelezd nekünk."
        image="/images/studio-room.jpg"
        imageAlt="A mozgásstúdió világos terme"
        position="50% 60%"
      >
        <div className="btn-row">
          <Link className="btn" href="/jelentkezes?program=regeneracio">
            Értesítést kérek
          </Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--2">
            {services.map((s) => (
              <div className="price-card" key={s.title}>
                <span className="tag tag--light" style={{ justifySelf: "start" }}>
                  Hamarosan
                </span>
                <h2 className="price-card__kind" style={{ marginTop: 8 }}>
                  {s.title}
                </h2>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="lead mt-l">
            Addig is: <Link className="inline-link" href="/szemelyi-edzes">személyi edzés</Link> és{" "}
            <Link className="inline-link" href="/csoportos-orak">csoportos órák</Link> a mozgásstúdióban.
          </p>
        </div>
      </section>
    </>
  );
}
