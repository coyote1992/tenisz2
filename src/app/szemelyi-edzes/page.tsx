import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Frame } from "@/components/Frame";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { faqDirections, faqPtFirst } from "@/content/faq";
import { formatFt, goodMorningClub, site, trainer } from "@/content/site";

export const metadata: Metadata = {
  title: "Személyi edzés",
  description:
    "Személyi edzés Juhász Andrással a Normafánál: funkcionális mozgásfejlesztés, koordináció, erő és mobilitás, a saját állapotodhoz és céljaidhoz igazítva.",
  alternates: { canonical: "/szemelyi-edzes" },
};

const goals = [
  "Az egészség megőrzése",
  "Fájdalommentesebb mozgás",
  "Erőfejlesztés",
  "Robbanékonyság",
  "Állóképesség",
  "Koordinációs képességek",
  "Az ülő életmód ellensúlyozása",
  "Több tudatosság a testedben",
];

const tools = ["Olimpiai súlyemelőrúd", "Kettlebell", "TRX", "Medicinlabda", "Szabadsúlyok", "Koordinációs eszközök"];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        title="Mozgás, ami rólad szól."
        lead={`Személyi edzés ${trainer.name}sal, a pályák melletti mozgásstúdióban. Az edzés a mostani állapotodhoz, a céljaidhoz és az életedhez igazodik.`}
        image="/images/studio-kettlebells.jpg"
        imageAlt="Színes kettlebellek sorban a mozgásstúdió padlóján"
        position="50% 70%"
      >
        <div className="btn-row">
          <Link className="btn" href="/jelentkezes?program=szemelyi-edzes">
            Jelentkezés személyi edzésre
          </Link>
          <a className="btn btn--ghost-dark" href={trainer.phone.href}>
            <Icon name="phone" size={16} />
            {trainer.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container detail">
          <div>
            <h2 className="h2">Minden ember egyedi.</h2>
            <div className="prose lead" style={{ marginTop: 20 }}>
              <p>
                Ezért hiszek abban, hogy a hatékony edzés személyre szabott. Az edzéseket mindig az aktuális
                fizikai állapotodhoz, a mozgásminőségedhez és az egyéni igényeidhez igazítom.
              </p>
              <p>
                A közös munka során a teljes embert figyelembe véve dolgozunk. Nem egy-egy izomcsoportot
                fejlesztünk, hanem azt, hogy a mozgásod egésze hatékonyabb, tudatosabb és fenntarthatóbb
                legyen.
              </p>
              <p>
                A funkcionális mozgásfejlesztés mellett az idegrendszer alkalmazkodását támogató koordinációs
                gyakorlatokat is használok. Fontos a megfelelő terhelés, a fokozatosság, és hogy az edzés hosszú
                távon is beleférjen az életedbe.
              </p>
            </div>

            <h3 className="h3" style={{ marginTop: 48 }}>
              Amiben segíthetek
            </h3>
            <ul className="checklist checklist--cols" style={{ marginTop: 20 }}>
              {goals.map((g) => (
                <li key={g}>
                  <Icon name="check" />
                  {g}
                </li>
              ))}
            </ul>

            <h3 className="h3" style={{ marginTop: 48 }}>
              Amivel dolgozunk
            </h3>
            <p className="prose" style={{ marginTop: 12 }}>
              A saját testsúlyos gyakorlatok mellett változatos eszközökkel, hogy a mozgás hatékony, élvezetes és
              a hétköznapokban is jól használható legyen.
            </p>
            <div className="chips" style={{ marginTop: 16 }}>
              {tools.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>

            <blockquote className="callout" style={{ margin: "40px 0 0" }}>
              <p>
                „Fontos számomra, hogy az edzések jó hangulatban teljenek, ahol edző és sportoló egyszerre van
                jelen a folyamatban.”
              </p>
              <p className="meta" style={{ marginTop: 10 }}>
                {trainer.name}
              </p>
            </blockquote>

            <hr className="divider" />

            <h3 className="h3">Így kezdünk</h3>
            <ol className="steps" style={{ marginTop: 24 }}>
              <li className="step">
                <span className="step__num">01</span>
                <h4 className="step__title">Jelentkezel</h4>
                <p className="step__text">
                  Megírod, mit szeretnél elérni, mikor érsz rá, és ha van sérülésed vagy fájdalmad, azt is.
                </p>
              </li>
              <li className="step">
                <span className="step__num">02</span>
                <h4 className="step__title">Az első alkalom</h4>
                <p className="step__text">
                  Beszélgetünk, és megnézzük, honnan indulsz: hogyan mozogsz most, mi esik jól, mire kell
                  figyelni.
                </p>
              </li>
              <li className="step">
                <span className="step__num">03</span>
                <h4 className="step__title">A saját programod</h4>
                <p className="step__text">
                  Ebből épül fel az edzésed, a terhelést pedig a fejlődésedhez igazítjuk.
                </p>
              </li>
            </ol>

            <div className="callout" style={{ marginTop: 40 }}>
              <strong>Teniszezőknek is.</strong> A junior csoportokba jelentkezők a teniszórák mellé erőnléti és
              koordinációs edzést is kérhetnek, a jelentkezésnél egyetlen pipával.{" "}
              <Link className="inline-link" href="/tenisz">
                Junior tenisz
              </Link>
            </div>
          </div>

          <aside className="detail__aside" aria-label="Személyi edzés röviden">
            <div className="aside-card">
              <h2 className="aside-card__title">Személyi edzés</h2>
              <ul className="facts">
                <li>
                  <Icon name="users" />
                  <span>
                    <strong>{trainer.name}</strong>, {trainer.role.toLowerCase()}
                  </span>
                </li>
                <li>
                  <Icon name="pin" />
                  <span>Mozgásstúdió a pályák mellett, {site.address.line}</span>
                </li>
                <li>
                  <Icon name="calendar" />
                  <span>Időpont egyeztetés szerint, egyénileg vagy kiscsoportban</span>
                </li>
              </ul>
              <Link className="btn btn--block" href="/jelentkezes?program=szemelyi-edzes">
                Jelentkezés
              </Link>
              <a className="btn btn--ghost btn--block" href={trainer.phone.href}>
                <Icon name="phone" size={16} />
                {trainer.phone.display}
              </a>
              <p className="small muted">A díjakról és a bérletekről a jelentkezés után egyeztetünk.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="studio-title">
        <div className="container">
          <div className="section-head">
            <h2 id="studio-title" className="h2">
              A mozgásstúdió
            </h2>
            <p className="lead">
              Világos, csendes terem a pályák mellett, a fák alatt. Bordásfal, TRX, kettlebellek, medicinlabdák és
              szabadsúlyok: minden, ami egy jó edzéshez kell.
            </p>
          </div>
          <div className="card-grid card-grid--4">
            <Frame src="/images/studio-room.jpg" alt="A mozgásstúdió világos terme, a falon bordásfal" ratio="portrait" sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 25vw" />
            <Frame src="/images/studio-wallbars.jpg" alt="Bordásfal, TRX és medicinlabdák" ratio="portrait" sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 25vw" />
            <Frame src="/images/studio-foam.jpg" alt="SMR henger egy edzőmatracon" ratio="portrait" sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 25vw" />
            <Frame src="/images/studio-house.jpg" alt="A stúdió faháza kívülről, virágágyással" ratio="portrait" sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 25vw" />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="groups-title">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="stack-s">
              <h2 id="groups-title" className="h2">
                Inkább társaságban mozognál?
              </h2>
              <p className="lead">Ugyanez a szemlélet kiscsoportban és reggelente, közösen.</p>
            </div>
            <Link className="btn btn--ghost" href="/csoportos-orak">
              Csoportos órák
            </Link>
          </div>
          <div className="card-grid" style={{ ["--cols" as string]: 2 }}>
            <article className="card card--link">
              <div className="card__media">
                <Image src="/images/studio-corner.jpg" alt="Edzőeszközök a stúdió sarkában" fill sizes="(max-width: 620px) 100vw, 50vw" style={{ objectPosition: "50% 65%" }} />
              </div>
              <div className="card__body">
                <span className="meta">Kiscsoport</span>
                <h3 className="card__title">
                  <Link href="/csoportos-orak#koredzes">Köredzés</Link>
                </h3>
                <p className="card__text">Mozgásminőség, erő, mobilitás és állóképesség, támogató közösségben.</p>
              </div>
            </article>
            <article className="card card--link">
              <div className="card__media">
                <Image src="/images/studio-mat.jpg" alt="Edzőmatrac és gimnasztikai labda a stúdióban" fill sizes="(max-width: 620px) 100vw, 50vw" style={{ objectPosition: "50% 60%" }} />
              </div>
              <div className="card__body">
                <span className="meta">
                  {goodMorningClub.when} · {formatFt(goodMorningClub.fee)}
                </span>
                <h3 className="card__title">
                  <Link href="/csoportos-orak#good-morning-club">Good Morning Club</Link>
                </h3>
                <p className="card__text">Reggeli mobilizálás, nyújtás és keringésfokozás, hogy frissen indulj.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="pt-faq">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <h2 id="pt-faq" className="h2">
              Gyakori kérdések
            </h2>
          </div>
          <Faq
            items={[
              faqPtFirst,
              {
                q: "Kell előzetes edzéstapasztalat?",
                a: (
                  <p>
                    Nem. Az edzés ahhoz igazodik, ahonnan indulsz, legyen szó az első edzésedről vagy egy hosszabb
                    kihagyás utáni visszatérésről. Ha fájdalommal vagy sérüléssel érkezel, a jelentkezésnél jelezd.
                  </p>
                ),
              },
              {
                q: "Mit hozzak az edzésre?",
                a: <p>Kényelmes sportruhát és vizet. A többit az első alkalommal megbeszéljük.</p>,
              },
              faqDirections,
            ]}
          />
        </div>
      </section>

      <CtaBand title="Az első lépés egy beszélgetés." image="/images/studio-corner.jpg" variant="trainer" />
    </>
  );
}
