import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { BookingFlow } from "@/components/BookingFlow";
import { Icon } from "@/components/Icon";
import { site, trainer } from "@/content/site";

export const metadata: Metadata = {
  title: "Jelentkezés edzésre",
  description:
    "Jelentkezz junior teniszcsoportba, felnőtt teniszórára, személyi edzésre, köredzésre vagy a Good Morning Clubra. Két perc, és visszajelzünk.",
  alternates: { canonical: "/jelentkezes" },
};

export default function BookingPage() {
  return (
    <>
      <section className="booking-hero on-dark">
        <div className="booking-hero__media">
          <Image src="/images/coach-feeding.jpg" alt="" fill preload sizes="100vw" quality={60} />
        </div>
        <div className="container booking-grid">
          <div className="booking-intro">
            <h1 className="page-hero__title">Jelentkezés, két perc alatt.</h1>
            <p className="lead">
              Válaszd ki, mire jelentkezel, jelöld be, mikor érsz rá, és hagyd meg az elérhetőséged. A többit
              telefonon vagy e-mailben egyeztetjük.
            </p>
            <ul className="checklist">
              <li>
                <Icon name="check" />A jelentkezés még nem kötelez semmire
              </li>
              <li>
                <Icon name="check" />
                Junior csoportoknál a 2026 őszi időpontok közül választasz
              </li>
              <li>
                <Icon name="check" />
                Ha bizonytalan vagy, segítünk dönteni
              </li>
            </ul>
            <p className="small" style={{ color: "var(--on-navy-soft)" }}>
              Pályát foglalnál?{" "}
              <a className="inline-link" href={site.hellaUrl} target="_blank" rel="noopener">
                Azt a Hellán teheted meg
              </a>
              .
            </p>
          </div>
          <Suspense fallback={<div className="flow" style={{ minHeight: 420 }} />}>
            <BookingFlow />
          </Suspense>
        </div>
      </section>

      <section className="section" aria-labelledby="after-title">
        <div className="container">
          <div className="section-head section-head--center">
            <h2 id="after-title" className="h2 h2--xl">
              A jelentkezés után
            </h2>
            <p className="lead">Nem kell fiókot létrehoznod. Így folytatjuk:</p>
          </div>
          <div className="card-grid">
            {[
              ["01", "Visszajelzünk", "Telefonon vagy e-mailben keresünk, hogy egyeztessük a részleteket."],
              ["02", "Megbeszéljük az időpontot", "Csoportot, napot és az első alkalmat. Ha más csoport illik jobban, azt is megmondjuk."],
              ["03", "Találkozunk a pályán", "Kényelmes sportruhában és teniszcipőben gyere, és hozz magaddal vizet."],
            ].map(([n, t, d]) => (
              <div className="price-card" key={n}>
                <span className="step__num">{n}</span>
                <h3 className="h4">{t}</h3>
                <p className="muted small">{d}</p>
              </div>
            ))}
          </div>
          <p className="center muted mt-l">
            Inkább telefonálnál? Tenisz és pályák: <a className="inline-link" href={site.phone.href}>{site.phone.display}</a> ·
            Személyi edzés és csoportos órák: <a className="inline-link" href={trainer.phone.href}>{trainer.phone.display}</a>
          </p>
          <p className="center mt-m">
            <Link className="text-link" href="/kapcsolat#gyik">
              Gyakori kérdések <Icon name="arrowRight" size={16} />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
