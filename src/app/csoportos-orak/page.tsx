import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Frame } from "@/components/Frame";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { faqDirections, faqGmc } from "@/content/faq";
import { formatFt, goodMorningClub, site, trainer } from "@/content/site";

export const metadata: Metadata = {
  title: "Csoportos órák: Köredzés és Good Morning Club",
  description:
    "Kiscsoportos funkcionális köredzés és reggeli Good Morning Club a Normafánál. Hétköznap 7:30-tól, mindenkit szeretettel várunk.",
  alternates: { canonical: "/csoportos-orak" },
};

export default function GroupClassesPage() {
  return (
    <>
      <PageHero
        title="Mozogj velünk, közösségben."
        lead="Kiscsoportos köredzés és reggeli közös mozgás a pályák melletti stúdióban és a friss levegőn. Nem kell hozzá teniszezned."
        image="/images/studio-corner.jpg"
        imageAlt="Edzőeszközök a mozgásstúdióban"
        position="50% 65%"
      >
        <div className="btn-row">
          <a className="btn btn--ghost-dark" href="#koredzes">
            Köredzés
          </a>
          <a className="btn btn--ghost-dark" href="#good-morning-club">
            Good Morning Club
          </a>
        </div>
      </PageHero>

      <section className="section" id="koredzes" aria-labelledby="kor-title">
        <div className="container detail">
          <div>
            <Frame
              src="/images/studio-wallbars.jpg"
              alt="Bordásfal, TRX és medicinlabdák a stúdióban"
              ratio="wide"
              position="50% 55%"
              sizes="(max-width: 960px) 100vw, 60vw"
            />
            <div className="stack-m" style={{ marginTop: 32 }}>
              <span className="meta">Kiscsoport · {trainer.name}</span>
              <h2 id="kor-title" className="h2">
                Köredzés
              </h2>
              <p className="lead">
                Funkcionális szemléletű, kiscsoportos edzés, amely a mozgásminőség, az erő, a mobilitás és az
                állóképesség harmonikus fejlesztésére épül.
              </p>
              <p className="prose">
                Minden gyakorlat azt szolgálja, hogy a hétköznapi mozgásaid hatékonyabbak és biztonságosabbak
                legyenek, támogató közösségben, személyes odafigyeléssel.
              </p>
              <ul className="checklist checklist--cols">
                {["Mozgásminőség", "Erő", "Mobilitás", "Állóképesség", "Biztonságosabb hétköznapi mozgás", "Személyes odafigyelés"].map((x) => (
                  <li key={x}>
                    <Icon name="check" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="detail__aside" aria-label="Köredzés röviden">
            <div className="aside-card">
              <h3 className="aside-card__title">Köredzés</h3>
              <ul className="facts">
                <li>
                  <Icon name="users" />
                  <span>Kiscsoport, vezeti <strong>{trainer.name}</strong></span>
                </li>
                <li>
                  <Icon name="pin" />
                  <span>Mozgásstúdió a pályák mellett</span>
                </li>
                <li>
                  <Icon name="calendar" />
                  <span>Az aktuális időpontokat a jelentkezés után küldjük</span>
                </li>
              </ul>
              <Link className="btn btn--block" href="/jelentkezes?program=koredzes">
                Jelentkezés köredzésre
              </Link>
              <a className="btn btn--ghost btn--block" href={trainer.phone.href}>
                <Icon name="phone" size={16} />
                {trainer.phone.display}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--sand" id="good-morning-club" aria-labelledby="gmc-title">
        <div className="container detail">
          <div>
            <Frame
              src="/images/studio-house.jpg"
              alt="A stúdió faháza reggel, előtte virágágyás és fű"
              ratio="wide"
              position="50% 60%"
              sizes="(max-width: 960px) 100vw, 60vw"
            />
            <div className="stack-m" style={{ marginTop: 32 }}>
              <span className="meta">Hétköznap reggel · mindenkinek</span>
              <h2 id="gmc-title" className="h2">
                Good Morning Club
              </h2>
              <p className="lead">
                <strong>Indítsd tudatosan a napot!</strong> Reggeli közös mozgás mobilizáló, nyújtó és
                keringésfokozó gyakorlatokkal, amelyek segítenek felfrissülni, csökkenteni a stresszt és
                energikusan kezdeni a napot.
              </p>
              <ul className="checklist checklist--cols">
                {["Mobilizáló gyakorlatok", "Nyújtás", "Keringésfokozás", "Kevesebb stressz, több energia"].map((x) => (
                  <li key={x}>
                    <Icon name="check" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="h4" style={{ color: "var(--teal)" }}>
                Ébredj. Mozdulj. Kapcsolódj.
              </p>
            </div>
          </div>
          <aside className="detail__aside" aria-label="Good Morning Club röviden">
            <div className="aside-card">
              <h3 className="aside-card__title">Good Morning Club</h3>
              <ul className="rows" style={{ marginTop: 0 }}>
                <li>
                  <span>Mikor</span>
                  <span>{goodMorningClub.when}</span>
                </li>
                <li>
                  <span>Részvételi díj</span>
                  <span>{formatFt(goodMorningClub.fee)} / alkalom</span>
                </li>
                <li>
                  <span>Kinek</span>
                  <span>Mindenkinek</span>
                </li>
              </ul>
              <ul className="facts">
                <li>
                  <Icon name="sun" />
                  <span>Hozd magaddal: {goodMorningClub.bring.toLowerCase()}.</span>
                </li>
                <li>
                  <Icon name="pin" />
                  <span>{site.address.line}, parkolni a pályák mellett lehet.</span>
                </li>
              </ul>
              <Link className="btn btn--block" href="/jelentkezes?program=good-morning-club">
                Jelentkezés
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="group-faq">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <h2 id="group-faq" className="h2">
              Gyakori kérdések
            </h2>
          </div>
          <Faq
            items={[
              faqGmc,
              {
                q: "Teniszeznem kell ahhoz, hogy jöhessek?",
                a: <p>Nem. A csoportos órák bárkinek szólnak, aki szeretne jobban mozogni, teniszezőknek és nem teniszezőknek egyaránt.</p>,
              },
              {
                q: "Személyi edzés is lehetséges?",
                a: (
                  <p>
                    Igen. Ha egyéni figyelmet szeretnél, nézd meg a{" "}
                    <Link className="inline-link" href="/szemelyi-edzes">
                      személyi edzést
                    </Link>
                    .
                  </p>
                ),
              },
              faqDirections,
            ]}
          />
        </div>
      </section>

      <CtaBand title="Hétköznap reggel, fél nyolckor kezdünk." image="/images/studio-mat.jpg" variant="trainer" />
    </>
  );
}
