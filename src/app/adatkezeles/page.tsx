import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató",
  description: "Hogyan kezeljük a jelentkezési űrlapon megadott személyes adatokat.",
  alternates: { canonical: "/adatkezeles" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <h1 className="page-hero__title" style={{ color: "var(--ink)" }}>
          Adatkezelési tájékoztató
        </h1>
        <div className="prose lead" style={{ marginTop: 28 }}>
          <p>
            Ez a tájékoztató arról szól, mit kezdünk azokkal az adatokkal, amelyeket a weboldal jelentkezési
            űrlapján megadsz.
          </p>
        </div>
        <div className="prose stack-m" style={{ marginTop: 40 }}>
          <h2 className="h3">Az adatkezelő</h2>
          <p>
            {site.name}, {site.address.line}. E-mail:{" "}
            <a className="inline-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            , telefon: {site.phone.display}.
          </p>
          <h2 className="h3">Milyen adatokat kérünk, és miért</h2>
          <p>
            A jelentkezéshez a neved, az e-mail-címed, a telefonszámod, gyerek jelentkezése esetén a gyerek
            nevét és korát, valamint a választott programot, az alkalmas időpontokat és az általad megírt
            megjegyzést kérjük. Ezeket kizárólag arra használjuk, hogy felvegyük veled a kapcsolatot, és
            egyeztessük az edzést. Az adatkezelés jogalapja a hozzájárulásod, amelyet az űrlap elküldésekor adsz
            meg.
          </p>
          <h2 className="h3">Meddig őrizzük</h2>
          <p>
            A jelentkezést addig őrizzük, amíg az edzés egyeztetéséhez és a részvételhez szükséges, de legfeljebb
            a jelentkezés évét követő év végéig, hacsak jogszabály hosszabb megőrzést nem ír elő.
          </p>
          <h2 className="h3">Kik férnek hozzá</h2>
          <p>
            Az adataidat az akadémia edzői és munkatársai látják. A jelentkezést e-mailben továbbítjuk, ehhez
            e-mail-küldő szolgáltatót veszünk igénybe. Harmadik félnek marketingcélra nem adjuk át.
          </p>
          <h2 className="h3">Sütik</h2>
          <p>
            A weboldal nem használ követő- vagy reklámsütiket, és nem futtat látogatottságmérést. A
            pályafoglalási rendszer (Hella) külön szolgáltatás, saját adatkezelési feltételekkel.
          </p>
          <h2 className="h3">A jogaid</h2>
          <p>
            Bármikor kérhetsz tájékoztatást az adataidról, kérheted azok helyesbítését vagy törlését, és
            visszavonhatod a hozzájárulásodat a fenti elérhetőségeken. Panasszal a Nemzeti Adatvédelmi és
            Információszabadság Hatósághoz (NAIH, naih.hu) fordulhatsz.
          </p>
          <p className="small muted">Hatályos: 2026. október 1-től.</p>
        </div>
      </div>
    </section>
  );
}
