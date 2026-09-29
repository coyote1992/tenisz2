import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Frame } from "@/components/Frame";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { PriceCards } from "@/components/PriceCards";
import { CourtsSketch } from "@/components/Sketches";
import { faqBooking, faqDirections, faqPrice } from "@/content/faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pályabérlés és árak",
  description:
    "Teniszpálya-bérlés a Normafánál: négy felújított salakpálya, óradíj 4 400 Ft-tól. Online foglalás a Hella rendszerében, kedvezményes bérletek.",
  alternates: { canonical: "/palyaberles" },
};

export default function CourtRentalPage() {
  return (
    <>
      <PageHero
        title="Pályabérlés a Normafánál."
        lead={`Négy felújított szabadtéri salakpálya, erdő ölelésében. A szabad időpontokat a Hellán látod, és ott is foglalsz. ${site.season.label}: ${site.season.until}-ig.`}
        image="/images/aerial-courts-2.jpg"
        imageAlt="A négy salakpálya felülről, játékosokkal"
      >
        <div className="btn-row">
          <a className="btn" href={site.hellaUrl} target="_blank" rel="noopener">
            Foglalás a Hellán
            <Icon name="arrowUpRight" size={15} />
          </a>
          <a className="btn btn--ghost-dark" href="#arak">
            Árak
          </a>
        </div>
      </PageHero>

      <section className="section section--sand" id="arak" aria-labelledby="prices-title">
        <div className="container">
          <div className="section-head">
            <h2 id="prices-title" className="h2">
              Pályabérleti díjak
            </h2>
            <p className="lead">
              {site.season.label}, <strong>{site.season.until}-ig</strong>. Az óradíj pályánként értendő, és a
              foglalás időpontjától függ. A legkedvezőbb a hétköznap 10 és 14 óra közötti sáv és a hétvége.
            </p>
          </div>
          <PriceCards />
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container split">
          <div>
            <h2 id="how-title" className="h2">
              Foglalás a Hellán, három lépésben
            </h2>
            <ol className="steps">
              <li className="step">
                <span className="step__num">01</span>
                <h3 className="step__title">Nyisd meg a Hellát</h3>
                <p className="step__text">
                  A foglalási rendszer a{" "}
                  <a className="inline-link" href={site.hellaUrl} target="_blank" rel="noopener">
                    hella.next-tenisz.hu
                  </a>{" "}
                  címen érhető el, telefonról is.
                </p>
              </li>
              <li className="step">
                <span className="step__num">02</span>
                <h3 className="step__title">Lépj be vagy regisztrálj</h3>
                <p className="step__text">Első alkalommal létre kell hoznod egy fiókot, utána már csak belépsz.</p>
              </li>
              <li className="step">
                <span className="step__num">03</span>
                <h3 className="step__title">Válassz pályát és időpontot</h3>
                <p className="step__text">A szabad időpontok ott látszanak, a foglalás néhány kattintás.</p>
              </li>
            </ol>
            <div className="callout mt-l">
              <strong>Rendszeresen játszol?</strong> Kedvezményes bérletárakért írj a{" "}
              <a className="inline-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              címre, vagy hívj a{" "}
              <a className="inline-link" href={site.phone.href}>
                {site.phone.display}
              </a>{" "}
              számon.
            </div>
          </div>
          <div className="stack-l">
            <Frame src="/images/aerial-courts.jpg" alt="A pályák felülről, a kék szélfogókkal" ratio="land" />
            <CourtsSketch className="setting-sketch" />
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="court-faq">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <h2 id="court-faq" className="h2">
              Gyakori kérdések
            </h2>
          </div>
          <Faq items={[faqBooking, faqPrice, faqDirections]} />
          <div className="center mt-m">
            <Link className="btn btn--ghost" href="/kapcsolat">
              Megközelítés és elérhetőség
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Pálya van. Csak az időpont hiányzik." image="/images/aerial-club.jpg" />
    </>
  );
}
