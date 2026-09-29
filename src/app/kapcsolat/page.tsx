import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Frame } from "@/components/Frame";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { faqBooking, faqDirections, faqGmc, faqGroup, faqJuniorTimes, faqPrice, faqPtFirst } from "@/content/faq";
import { directions, openingHours, site, trainer } from "@/content/site";

export const metadata: Metadata = {
  title: "Kapcsolat és megközelítés",
  description: `Next Tenisz Akadémia, ${site.address.line}. Telefon: ${site.phone.display}. Megközelítés autóval és a 21-es busszal, parkolás a pályák mellett.`,
  alternates: { canonical: "/kapcsolat" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Pár perc sétára a Normafától."
        lead="Hívj, írj, vagy gyere fel hozzánk. Fent a hegyen, a fák között várunk."
        image="/images/aerial-budapest.jpg"
        imageAlt="Kilátás a pályák fölül a budai hegyekre és a városra"
      />

      <section className="section" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title" className="visually-hidden">
            Elérhetőségek
          </h2>
          <div className="card-grid">
            <div className="price-card">
              <h3 className="price-card__kind">Pályák és tenisz</h3>
              <ul className="facts" style={{ marginTop: 12 }}>
                <li>
                  <Icon name="phone" />
                  <a className="inline-link" href={site.phone.href}>
                    {site.phone.display}
                  </a>
                </li>
                <li>
                  <Icon name="mail" />
                  <a className="inline-link" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <Icon name="arrowUpRight" />
                  <a className="inline-link" href={site.hellaUrl} target="_blank" rel="noopener">
                    Pályafoglalás a Hellán
                  </a>
                </li>
              </ul>
            </div>
            <div className="price-card">
              <h3 className="price-card__kind">Személyi edzés</h3>
              <ul className="facts" style={{ marginTop: 12 }}>
                <li>
                  <Icon name="users" />
                  <span>
                    <strong>{trainer.name}</strong>, {trainer.role.toLowerCase()}
                  </span>
                </li>
                <li>
                  <Icon name="phone" />
                  <a className="inline-link" href={trainer.phone.href}>
                    {trainer.phone.display}
                  </a>
                </li>
                <li>
                  <Icon name="arrowRight" />
                  <Link className="inline-link" href="/jelentkezes?program=szemelyi-edzes">
                    Jelentkezés online
                  </Link>
                </li>
              </ul>
            </div>
            <div className="price-card">
              <h3 className="price-card__kind">Nyitvatartás</h3>
              <ul className="hours" style={{ marginTop: 14 }}>
                {openingHours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="small muted" style={{ marginTop: 12 }}>
                {site.season.label}: {site.season.until}-ig.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="route-title">
        <div className="container split">
          <div className="stack-m">
            <h2 id="route-title" className="h2">
              Megközelítés
            </h2>
            <p className="lead">
              <strong>{site.address.line}</strong>
            </p>
            <ul className="facts" style={{ fontSize: "1rem" }}>
              <li>
                <Icon name="pin" />
                <span>
                  <strong>Autóval.</strong> {directions.car}
                </span>
              </li>
              <li>
                <Icon name="check" />
                <span>
                  <strong>Parkolás.</strong> {directions.parking}
                </span>
              </li>
              <li>
                <Icon name="arrowRight" />
                <span>
                  <strong>Tömegközlekedéssel.</strong> {directions.transit}
                </span>
              </li>
            </ul>
            <div className="btn-row">
              <a className="btn" href={site.address.mapsUrl} target="_blank" rel="noopener">
                Útvonal a Google Térképen
                <Icon name="arrowUpRight" size={15} />
              </a>
            </div>
          </div>
          <Frame src="/images/aerial-club.jpg" alt="A klub felülről: a pályák, a parkoló és a faház" ratio="land" />
        </div>
      </section>

      <section className="section" id="gyik" aria-labelledby="faq-title">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <h2 id="faq-title" className="h2">
              Gyakori kérdések
            </h2>
          </div>
          <Faq items={[faqBooking, faqPrice, faqGroup, faqJuniorTimes, faqPtFirst, faqGmc, faqDirections]} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
