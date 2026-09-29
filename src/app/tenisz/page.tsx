import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Frame } from "@/components/Frame";
import { Icon } from "@/components/Icon";
import { JuniorCard } from "@/components/JuniorCard";
import { PageHero } from "@/components/PageHero";
import { BallArc } from "@/components/Sketches";
import { Tournaments } from "@/components/Tournaments";
import { faqGroup, faqJuniorTimes } from "@/content/faq";
import { juniorStages } from "@/content/site";

export const metadata: Metadata = {
  title: "Tenisz: junior csoportok és felnőtt oktatás",
  description:
    "Junior teniszcsoportok négy szinten (Piros, Narancs, Zöld, Nagyok) hétköznap délutánonként, és teniszoktatás felnőtteknek a Normafánál. 2026 őszi órarend.",
  alternates: { canonical: "/tenisz" },
};

const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"] as const;

export default function TennisPage() {
  return (
    <>
      <PageHero
        title="Teniszedzés a salakon."
        lead="Junior csoportok négy szinten, hétköznap délutánonként, és órák felnőtteknek, kezdőtől versenyzőig. Négy felújított salakpályán, a Normafa mellett."
        image="/images/junior-group.jpg"
        imageAlt="A junior csoport közös fotója a salakpályán, ütőkkel a magasban"
        position="50% 40%"
      >
        <div className="btn-row">
          <Link className="btn" href="/jelentkezes?program=junior">
            Jelentkezés junior csoportba
          </Link>
          <a className="btn btn--ghost-dark" href="#orarend">
            Órarend
          </a>
        </div>
      </PageHero>

      <section className="section section--sand" id="junior" aria-labelledby="junior-title">
        <div className="container">
          <div className="section-head">
            <h2 id="junior-title" className="h2">
              Junior csoportok, 2026 ősz
            </h2>
            <p className="lead">
              <strong>A pálya és a labda együtt nő a gyerekkel.</strong> A nemzetközi Play &amp; Stay rendszerben
              a kicsik lassabb labdával, kisebb pályán kezdenek, így már az első órákon valódi labdamenetek
              születnek.
            </p>
          </div>
          <div className="card-grid card-grid--4">
            {juniorStages.map((stage) => (
              <JuniorCard key={stage.id} stage={stage} />
            ))}
          </div>
          <div className="callout mt-l">
            <strong>Erőnlét és koordináció a tenisz mellé.</strong> A jelentkezésnél jelezheted, ha a gyereket az
            erőnléti és koordinációs edzés is érdekli.{" "}
            <Link className="inline-link" href="/szemelyi-edzes">
              Mozgásstúdió és személyi edzés
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="orarend" aria-labelledby="schedule-title">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="stack-s">
              <h2 id="schedule-title" className="h2">
                Heti órarend
              </h2>
              <p className="lead">
                Minden csoportnak több időpontja van. A jelentkezésnél bejelölheted mindet, amelyik jó, és
                egyeztetjük, hány alkalommal jön a gyerek.
              </p>
            </div>
            <Link className="btn" href="/jelentkezes?program=junior">
              Jelentkezés
            </Link>
          </div>
          <div className="schedule-wrap" tabIndex={0} role="region" aria-label="Junior csoportok heti órarendje">
            <table className="schedule">
              <thead>
                <tr>
                  <th scope="col">Csoport</th>
                  {days.map((d) => (
                    <th key={d} scope="col">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {juniorStages.flatMap((stage) =>
                  stage.groups.map((g) => (
                    <tr key={g.id}>
                      <th scope="row">
                        <span className={`dot dot--${stage.id}`} aria-hidden="true" />
                        {g.name}
                      </th>
                      {days.map((d) => {
                        const times = g.slots.filter((s) => s.startsWith(d + " ")).map((s) => s.slice(d.length + 1));
                        return <td key={d}>{times.join(", ")}</td>;
                      })}
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
          <ul className="schedule-list" aria-label="Junior csoportok heti órarendje">
            {juniorStages.flatMap((stage) =>
              stage.groups.map((g) => (
                <li key={g.id}>
                  <p className="rows__group">
                    <span className={`dot dot--${stage.id}`} aria-hidden="true" />
                    {g.name}
                  </p>
                  <ul className="rows">
                    {g.slots.map((slot) => {
                      const [day, time] = slot.split(" ");
                      return (
                        <li key={slot}>
                          <span>{day}</span>
                          <span>{time}</span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )),
            )}
          </ul>
          <p className="small muted" style={{ marginTop: 14 }}>
            A 2026 őszi jelentkezési lap szerinti időpontok. Változás esetén a jelentkezés után értesítünk.
          </p>
        </div>
      </section>

      <section className="section section--white" id="felnott" aria-labelledby="adult-title">
        <div className="container split">
          <Frame
            src="/images/coach-feeding.jpg"
            alt="Edző labdát adogat a kosárból a salakpályán"
            ratio="land"
            position="50% 40%"
          />
          <div className="stack-m">
            <h2 id="adult-title" className="h2">
              Tenisz felnőtteknek
            </h2>
            <p className="lead">
              Most kezdenéd, évek után térnél vissza, vagy a versenyekre készülsz? Írd meg, hol tartasz és mit
              szeretnél, és ajánlunk hozzá edzőt és időpontot.
            </p>
            <ul className="checklist">
              <li>
                <Icon name="check" />
                Kezdőknek az alapoktól, türelemmel
              </li>
              <li>
                <Icon name="check" />
                Visszatérőknek, hogy újra magabiztos legyen a játék
              </li>
              <li>
                <Icon name="check" />
                Haladóknak és versenyzőknek, meccshelyzetekre
              </li>
            </ul>
            <div className="btn-row">
              <Link className="btn" href="/jelentkezes?program=felnott-tenisz">
                Jelentkezés felnőtt teniszre
              </Link>
              <Link className="text-link" href="/palyaberles">
                Csak pálya kell? <Icon name="arrowRight" size={16} />
              </Link>
            </div>
            <BallArc className="arc-sketch" />
          </div>
        </div>
      </section>

      <Tournaments id="versenyek" />

      <section className="section" aria-labelledby="tennis-faq">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <h2 id="tennis-faq" className="h2">
              Gyakori kérdések
            </h2>
          </div>
          <Faq
            items={[
              faqGroup,
              faqJuniorTimes,
              {
                q: "Mi kell az első edzésre?",
                a: (
                  <p>
                    Kényelmes sportruha, salakpályára való teniszcipő és egy kulacs víz. Ha még nincs saját
                    ütő, jelezd a jelentkezésnél, és megbeszéljük.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </section>

      <CtaBand image="/images/footwork-drill.jpg" />
    </>
  );
}
