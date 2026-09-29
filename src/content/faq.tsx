import Link from "next/link";
import type { FaqItem } from "@/components/Faq";
import { directions, formatFt, goodMorningClub, site } from "./site";

export const faqBooking: FaqItem = {
  q: "Hogyan foglalhatok pályát?",
  a: (
    <>
      <p>
        Online, a Hella foglalási rendszerében:{" "}
        <a className="inline-link" href={site.hellaUrl} target="_blank" rel="noopener">
          hella.next-tenisz.hu
        </a>
        . Első alkalommal regisztrálnod kell, utána néhány kattintással foglalhatsz.
      </p>
      <p>
        Kedvezményes bérletről a{" "}
        <a className="inline-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>{" "}
        címen vagy telefonon, a {site.phone.display} számon érdeklődj.
      </p>
    </>
  ),
};

export const faqPrice: FaqItem = {
  q: "Mennyibe kerül egy óra a pályán?",
  a: (
    <p>
      Alkalmi játékra {formatFt(4900)} és {formatFt(6000)} között, a napszaktól függően, bérlettel{" "}
      {formatFt(4400)} és {formatFt(5500)} között. A legkedvezőbb a hétköznap 10 és 14 óra közötti sáv és a
      hétvége. A pontos sávokat a{" "}
      <Link className="inline-link" href="/palyaberles">
        pályabérlés
      </Link>{" "}
      oldalon találod.
    </p>
  ),
};

export const faqGroup: FaqItem = {
  q: "Melyik csoportba való a gyerekem?",
  a: (
    <>
      <p>
        A csoportokat a labda színe jelöli. A Piros az első lépésekhez való, a Narancs és a Zöld a fokozatos
        átmenethez, a Nagyok pedig már sárga labdával, teljes pályán játszanak. A pluszos csoportok (Piros+,
        Narancs+) az adott szinten haladóbbaknak szólnak.
      </p>
      <p>Ha bizonytalan vagy, a jelentkezésnél jelöld a „Még nem tudom” lehetőséget, és segítünk dönteni.</p>
    </>
  ),
};

export const faqJuniorTimes: FaqItem = {
  q: "Mikor vannak a junior edzések?",
  a: (
    <p>
      Hétköznap délutánonként, 15 és 19 óra között. Minden csoportnak több időpontja van, a jelentkezésnél
      bejelölheted mindet, amelyik jó. A teljes órarendet a{" "}
      <Link className="inline-link" href="/tenisz#orarend">
        tenisz
      </Link>{" "}
      oldalon találod.
    </p>
  ),
};

export const faqDirections: FaqItem = {
  q: "Hogyan jutok fel a pályákhoz?",
  a: (
    <>
      <p>
        <strong>Autóval:</strong> {directions.car} {directions.parking}
      </p>
      <p>
        <strong>Tömegközlekedéssel:</strong> {directions.transit}
      </p>
    </>
  ),
};

export const faqGmc: FaqItem = {
  q: "Mit hozzak a Good Morning Clubra?",
  a: (
    <p>
      Saját matracot, vizet és jókedvet. Az alkalmak {goodMorningClub.when.toLowerCase()}-kor kezdődnek, a
      részvételi díj {formatFt(goodMorningClub.fee)}, és mindenkit szeretettel várunk.
    </p>
  ),
};

export const faqPtFirst: FaqItem = {
  q: "Hogyan zajlik az első személyi edzés?",
  a: (
    <p>
      Megbeszéljük, mit szeretnél elérni, és megnézzük, honnan indulsz: milyen most a mozgásod, mi esik
      jól, és mire kell figyelni. Ebből épül fel a programod, amit a fejlődésedhez igazítunk.
    </p>
  ),
};

export const homeFaq: FaqItem[] = [faqBooking, faqPrice, faqGroup, faqJuniorTimes, faqDirections, faqGmc];
