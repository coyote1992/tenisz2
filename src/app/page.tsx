import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Frame } from "@/components/Frame";
import { HeroVideo } from "@/components/HeroVideo";
import { Icon } from "@/components/Icon";
import { JuniorCard } from "@/components/JuniorCard";
import { PriceCards } from "@/components/PriceCards";
import { Tournaments } from "@/components/Tournaments";
import { CourtsSketch, HeroUnderline } from "@/components/Sketches";
import { homeFaq } from "@/content/faq";
import { courtPrices, formatFt, goodMorningClub, juniorStages, site, trainer } from "@/content/site";

export default function HomePage() {
  const cheapest = Math.min(...courtPrices.flatMap((c) => c.rows.map((r) => r.price)));
  return (
    <>
      {/* Hero */}
      <section className="hero on-dark" aria-labelledby="hero-title">
        <HeroVideo
          src="/video/dron.mp4"
          poster="/images/hero-poster.jpg"
          alt="Légifelvétel a Next Tenisz Akadémia salakpályáiról a Budai-hegységben"
        />
        <div className="container hero__content">
          <h1 id="hero-title" className="display hero__title">
            <span className="line hero-in" style={{ ["--i" as string]: 0 }}>
              Tenisz a hegyen,
            </span>
            <span className="line hero-in" style={{ ["--i" as string]: 1 }}>
              a{" "}
              <span className="hero__scribble">
                Normafánál
                <HeroUnderline />
              </span>
              .
            </span>
          </h1>
          <p className="hero__lede hero-in" style={{ ["--i" as string]: 3 }}>
            Négy felújított salakpálya a Budai-hegység szívében, erdő és friss levegő között. Pályát a Hellán
            foglalsz, edzésre itt jelentkezel.
          </p>
          <div className="hero__paths hero-in" style={{ ["--i" as string]: 5 }}>
            <a className="path-card" href={site.hellaUrl} target="_blank" rel="noopener">
              <span className="path-card__title">
                Pályát foglalnék
                <Icon name="arrowUpRight" className="arrow-ur" />
              </span>
              <span className="path-card__text">
                Óradíj {formatFt(cheapest)}-tól. Szabad időpontok és foglalás a Hella rendszerében.
              </span>
            </a>
            <Link className="path-card" href="/jelentkezes">
              <span className="path-card__title">
                Edzeni szeretnék
                <Icon name="arrowRight" />
              </span>
              <span className="path-card__text">
                Junior csoportok, tenisz felnőtteknek, személyi edzés és kiscsoportos órák.
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How to start */}
      <section className="section" aria-labelledby="start-title">
        <div className="container split">
          <div>
            <h2 id="start-title" className="h2">
              Az őszi szezon, három lépésben
            </h2>
            <div className="stack-s" style={{ marginTop: 20 }}>
              <p className="lead">
                <strong>A junior csoportok hétköznap délutánonként edzenek,</strong> 15 és 19 óra között, négy
                szinten. A felnőtt órák és a személyi edzés időpontját veled egyeztetjük.
              </p>
              <p className="lead">
                A teniszórák mellé erőnléti és koordinációs edzés is választható, ugyanitt, a pályák melletti
                mozgásstúdióban.
              </p>
            </div>
            <ol className="steps">
              <li className="step">
                <span className="step__num">01</span>
                <h3 className="step__title">Válaszd ki a programot</h3>
                <p className="step__text">
                  Gyerekeknek a Piros, Narancs, Zöld vagy Nagyok csoport. Felnőtteknek tenisz, személyi edzés,
                  Köredzés vagy a reggeli Good Morning Club.
                </p>
              </li>
              <li className="step">
                <span className="step__num">02</span>
                <h3 className="step__title">Jelöld be, mikor érsz rá</h3>
                <p className="step__text">
                  A junior csoportoknál a meghirdetett időpontok közül választasz, a többi programnál megadod,
                  mely napok és napszakok jók neked.
                </p>
              </li>
              <li className="step">
                <span className="step__num">03</span>
                <h3 className="step__title">Visszajelzünk</h3>
                <p className="step__text">
                  Telefonon vagy e-mailben egyeztetjük a csoportot, az időpontot és az első alkalmat.
                </p>
                <p className="step__text" style={{ marginTop: 10 }}>
                  <a className="text-link" href="#utana">
                    Mi történik a jelentkezés után
                    <Icon name="arrowDown" size={16} />
                  </a>
                </p>
              </li>
            </ol>
            <p className="muted" style={{ marginTop: 32, maxWidth: "52ch" }}>
              Nem tudod, melyik csoport illik a gyerekedhez? <strong style={{ color: "var(--ink)" }}>Jelöld a „Még
              nem tudom” lehetőséget</strong>, és segítünk dönteni.{" "}
              <Link className="inline-link" href="/jelentkezes">
                Jelentkezés
              </Link>
            </p>
          </div>
          <div className="photo-pair">
            <Frame
              src="/images/junior-portrait.jpg"
              alt="Kisfiú tenyeres ütésre készül a salakpályán"
              ratio="portrait"
              sizes="(max-width: 900px) 50vw, 25vw"
            />
            <Frame
              src="/images/coach-lesson.jpg"
              alt="Edző figyeli a kislány ütését a háló túloldaláról"
              ratio="portrait"
              sizes="(max-width: 900px) 50vw, 25vw"
              position="35% 50%"
            />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section section--sand" id="programok" aria-labelledby="junior-title">
        <div className="container">
          <div className="section-head">
            <h2 id="junior-title" className="h2">
              Junior csoportok, 2026 ősz
            </h2>
            <p className="lead">
              <strong>Négy szint, a labda színe szerint,</strong> a nemzetközi Play &amp; Stay rendszerben: a
              pálya és a labda együtt nő a gyerekkel. A pluszos csoportok az adott szinten haladóbbaknak
              szólnak.
            </p>
          </div>
          <div className="card-grid card-grid--4">
            {juniorStages.map((stage) => (
              <JuniorCard key={stage.id} stage={stage} />
            ))}
          </div>

          <div className="section-head" style={{ marginTop: "clamp(64px, 8vw, 96px)" }}>
            <h2 className="h2">Felnőtteknek: tenisz és mozgás</h2>
            <p className="lead">Egyéni edzés, kiscsoport vagy reggeli közös mozgás, ugyanott, a pályák mellett.</p>
          </div>
          <div className="card-grid">
            <article className="card card--link">
              <div className="card__media">
                <Image src="/images/studio-kettlebells.jpg" alt="Kettlebellek sorban a mozgásstúdió padlóján" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectPosition: "50% 70%" }} />
              </div>
              <div className="card__body">
                <span className="meta">Egyéni · {trainer.name}</span>
                <h3 className="card__title">
                  <Link href="/szemelyi-edzes">Személyi edzés</Link>
                </h3>
                <p className="card__text">
                  A saját állapotodhoz, céljaidhoz és tempódhoz igazítva: erő, mobilitás, állóképesség,
                  fájdalommentesebb mozgás.
                </p>
                <ul className="rows">
                  <li>
                    <span>Helyszín</span>
                    <span>Mozgásstúdió</span>
                  </li>
                  <li>
                    <span>Időpont</span>
                    <span>Egyeztetés szerint</span>
                  </li>
                </ul>
                <div className="card__foot">
                  <span className="text-link">
                    A személyi edzésről <Icon name="arrowRight" size={16} />
                  </span>
                </div>
              </div>
            </article>
            <article className="card card--link">
              <div className="card__media">
                <Image src="/images/studio-corner.jpg" alt="Medicinlabdák, kettlebellek, kötél és gimnasztikai labda a stúdió sarkában" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectPosition: "50% 65%" }} />
              </div>
              <div className="card__body">
                <span className="meta">Kiscsoport</span>
                <h3 className="card__title">
                  <Link href="/csoportos-orak#koredzes">Köredzés</Link>
                </h3>
                <p className="card__text">
                  Funkcionális kiscsoportos edzés: mozgásminőség, erő, mobilitás és állóképesség, személyes
                  odafigyeléssel.
                </p>
                <ul className="rows">
                  <li>
                    <span>Létszám</span>
                    <span>Kiscsoport</span>
                  </li>
                  <li>
                    <span>Időpont</span>
                    <span>Jelentkezéskor</span>
                  </li>
                </ul>
                <div className="card__foot">
                  <span className="text-link">
                    A Köredzésről <Icon name="arrowRight" size={16} />
                  </span>
                </div>
              </div>
            </article>
            <article className="card card--link">
              <div className="card__media">
                <Image src="/images/studio-house.jpg" alt="A mozgásstúdió faháza a fák alatt, előtte virágokkal" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectPosition: "50% 55%" }} />
              </div>
              <div className="card__body">
                <span className="meta">Reggel · Mindenkinek</span>
                <h3 className="card__title">
                  <Link href="/csoportos-orak#good-morning-club">Good Morning Club</Link>
                </h3>
                <p className="card__text">
                  Reggeli közös mozgás: mobilizálás, nyújtás, keringésfokozás. Frissen és energikusan indulsz
                  neki a napnak.
                </p>
                <ul className="rows">
                  <li>
                    <span>Mikor</span>
                    <span>{goodMorningClub.when}</span>
                  </li>
                  <li>
                    <span>Részvételi díj</span>
                    <span>{formatFt(goodMorningClub.fee)}</span>
                  </li>
                </ul>
                <div className="card__foot">
                  <span className="text-link">
                    A Good Morning Clubról <Icon name="arrowRight" size={16} />
                  </span>
                </div>
              </div>
            </article>
          </div>
          <div className="strip">
            <span className="meta">Tenisz felnőtteknek · kezdőtől versenyzőig</span>
            <p className="card__text" style={{ maxWidth: "70ch" }}>
              Most kezdenéd, vagy évek után térnél vissza? Írd meg a jelentkezésben, hol tartasz és mit
              szeretnél, és ajánlunk hozzá edzőt és időpontot.
            </p>
            <div className="strip__items">
              <Link href="/jelentkezes?program=felnott-tenisz">Jelentkezés felnőtt teniszre</Link>
              <Link href="/tenisz#versenyek">Versenyek a pályáinkon</Link>
              <Link href="/regeneracio">Masszázs és softlaser · hamarosan</Link>
            </div>
          </div>
          <div className="btn-row mt-l">
            <Link className="btn" href="/tenisz">
              Teljes órarend
            </Link>
            <Link className="inline-link" href="/jelentkezes">
              Jelentkezés
            </Link>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section section--navy on-dark" id="utana" aria-labelledby="next-title">
        <div className="contours" aria-hidden="true" />
        <div className="container next-grid">
          <div>
            <h2 id="next-title" className="h2 h2--xl">
              Mi történik, miután elküldöd?
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              <strong>A jelentkezés még nem kötelez semmire.</strong> Elküldöd, amit tudnunk kell, mi pedig
              visszajelzünk.
            </p>
            <ol className="ruled-steps">
              <li>
                <span className="step__num">01</span>
                <h3>Megkapjuk a jelentkezésed</h3>
                <p>
                  Látjuk, melyik programot választottad, mikor érsz rá, és mindent, amit még fontosnak tartottál
                  megírni.
                </p>
              </li>
              <li>
                <span className="step__num">02</span>
                <h3>Egyeztetjük a részleteket</h3>
                <p>
                  Telefonon vagy e-mailben megbeszéljük a csoportot, az időpontot és az első alkalmat. Ha a
                  gyerekednek másik csoport illik jobban, azt is megmondjuk.
                </p>
              </li>
              <li>
                <span className="step__num">03</span>
                <h3>Találkozunk a pályán</h3>
                <p>
                  Az első alkalomra kényelmes sportruhában és teniszcipőben gyere, és hozz magaddal vizet.
                </p>
              </li>
            </ol>
          </div>
          <aside className="side-card" aria-labelledby="hella-title">
            <h3 id="hella-title">Pályát foglalnál?</h3>
            <p>
              A pályákat a Hella foglalási rendszerében foglalod, a szabad időpontok ott látszanak. Első
              alkalommal regisztrálnod kell.
            </p>
            <a className="btn btn--block" href={site.hellaUrl} target="_blank" rel="noopener">
              Pályafoglalás a Hellán
              <Icon name="arrowUpRight" size={15} />
            </a>
            <hr />
            <p>
              Rendszeresen játszol? Kedvezményes bérletárakért írj a{" "}
              <a className="inline-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              címre, vagy hívj a{" "}
              <a className="inline-link" href={site.phone.href}>
                {site.phone.display}
              </a>{" "}
              számon.
            </p>
            <p>
              Az árakat a{" "}
              <Link className="inline-link" href="/palyaberles">
                pályabérlés
              </Link>{" "}
              oldalon találod.
            </p>
          </aside>
        </div>
      </section>

      {/* Setting */}
      <section className="section" aria-labelledby="setting-title">
        <div className="container split">
          <Frame
            src="/images/aerial-hills.jpg"
            alt="A négy salakpálya felülről, körülötte erdő, a háttérben a Budai-hegység"
            ratio="land"
          />
          <div className="stack-m">
            <h2 id="setting-title" className="h2">
              Pályák a Budai-hegység szívében
            </h2>
            <p className="lead">
              Négy teljesen felújított szabadtéri salakpálya, erdő ölelésében, pár perc sétára a Normafától.
              Fent tisztább a levegő, csendesebb a környék, és a játék után ott a hegy.
            </p>
            <p className="lead">
              Kocsival az Istenhegyi úton jössz fel, és a pályák mellett parkolsz. Busszal a Széll Kálmán térről
              nagyjából húsz perc.
            </p>
            <Link className="text-link" href="/kapcsolat">
              Megközelítés <Icon name="arrowRight" size={16} />
            </Link>
            <CourtsSketch className="setting-sketch" />
          </div>
        </div>
      </section>

      {/* Statement band */}
      <section className="band band--shade on-dark" aria-labelledby="band-title">
        <div className="band__media">
          <Image src="/images/aerial-tower.jpg" alt="" fill sizes="100vw" quality={70} />
        </div>
        <div className="container band__content">
          <h2 id="band-title" className="h2 h2--xl" style={{ maxWidth: "16ch" }}>
            Komoly tenisz, a város fölött.
          </h2>
          <p>
            Elég közel ahhoz, hogy hetente többször is feljöjj, és elég magasan ahhoz, hogy a pályán ne a várost
            halld.
          </p>
        </div>
      </section>

      {/* Personal training feature */}
      <section className="section section--white" aria-labelledby="feature-title">
        <div className="container">
          <div className="feature on-dark">
            <div className="feature__body">
              <h2 id="feature-title" className="visually-hidden">
                Személyi edzés {trainer.name} vezetésével
              </h2>
              <blockquote className="feature__quote" style={{ margin: 0 }}>
                „Minden ember egyedi, ezért hiszek abban, hogy a hatékony edzés személyre szabott.”
              </blockquote>
              <p style={{ color: "var(--on-navy-soft)", fontSize: "0.9688rem" }}>
                András funkcionális mozgásfejlesztéssel, koordinációs gyakorlatokkal és fokozatos terheléssel
                dolgozik, olimpiai rúddal, kettlebellel, TRX-szel és medicinlabdával. A cél, hogy az edzés hosszú
                távon is beleférjen az életedbe.
              </p>
              <p className="feature__who">
                {trainer.name} · {trainer.role}
              </p>
              <div className="btn-row">
                <Link className="btn" href="/jelentkezes?program=szemelyi-edzes">
                  Jelentkezés személyi edzésre
                </Link>
                <Link className="text-link" href="/szemelyi-edzes">
                  Részletek <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
            <div className="feature__media">
              <Image src="/images/studio-wallbars.jpg" alt="Bordásfal, TRX és medicinlabdák a mozgásstúdióban" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectPosition: "50% 60%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Court prices */}
      <section className="section section--sand" id="palyaberlet" aria-labelledby="prices-title">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="stack-s">
              <h2 id="prices-title" className="h2">
                Pályabérleti díjak
              </h2>
              <p className="lead">
                {site.season.label}, <strong>{site.season.until}-ig</strong>. Óradíjak pályánként, a foglalás
                időpontja szerint.
              </p>
            </div>
            <a className="btn" href={site.hellaUrl} target="_blank" rel="noopener">
              Foglalás a Hellán
              <Icon name="arrowUpRight" size={15} />
            </a>
          </div>
          <PriceCards />
        </div>
      </section>

      <Tournaments />

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <h2 id="faq-title" className="h2">
              Kérdésed van? Szívesen segítünk.
            </h2>
          </div>
          <Faq items={homeFaq} />
          <div className="center mt-m">
            <Link className="btn btn--ghost" href="/kapcsolat#gyik">
              További kérdések
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
