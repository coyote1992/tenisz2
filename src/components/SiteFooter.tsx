import Link from "next/link";
import { openingHours, site, trainer } from "@/content/site";
import { Icon } from "./Icon";

const columns = [
  {
    title: "Edzések",
    links: [
      { href: "/tenisz", label: "Junior tenisz" },
      { href: "/tenisz#felnott", label: "Tenisz felnőtteknek" },
      { href: "/szemelyi-edzes", label: "Személyi edzés" },
      { href: "/csoportos-orak#koredzes", label: "Köredzés" },
      { href: "/csoportos-orak#good-morning-club", label: "Good Morning Club" },
      { href: "/regeneracio", label: "Masszázs és softlaser" },
    ],
  },
  {
    title: "Pályák",
    links: [
      { href: "/palyaberles", label: "Pályabérleti díjak" },
      { href: site.hellaUrl, label: "Foglalás a Hellán", external: true },
      { href: "/tenisz#versenyek", label: "Versenyek" },
      { href: "/galeria", label: "Galéria" },
    ],
  },
  {
    title: "Információ",
    links: [
      { href: "/jelentkezes", label: "Jelentkezés" },
      { href: "/kapcsolat", label: "Megközelítés" },
      { href: "/kapcsolat#gyik", label: "Gyakori kérdések" },
      { href: "/adatkezeles", label: "Adatkezelés" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2 className="footer-title">Szeretnél többet tudni?</h2>
            <ul className="footer-contact">
              <li>
                <Icon name="phone" />
                <span>
                  <a href={site.phone.href}>{site.phone.display}</a>
                  <small>Pályabérlés, tenisz</small>
                </span>
              </li>
              <li>
                <Icon name="phone" />
                <span>
                  <a href={trainer.phone.href}>{trainer.phone.display}</a>
                  <small>Személyi edzés, csoportos órák · {trainer.name}</small>
                </span>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="pin" />
                <span>
                  <a href={site.address.mapsUrl} target="_blank" rel="noopener">
                    {site.address.line}
                  </a>
                  <small>Pár perc sétára a Normafától</small>
                </span>
              </li>
              <li>
                <Icon name="clock" />
                <span>
                  {openingHours.map((h) => (
                    <small key={h.days} className="tnum">
                      {h.days}: {h.hours}
                    </small>
                  ))}
                </span>
              </li>
            </ul>
            <div className="social">
              <a href={site.facebookUrl} target="_blank" rel="noopener" aria-label="Next Tenisz Akadémia a Facebookon">
                <Icon name="facebook" />
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    {"external" in l && l.external ? (
                      <a href={l.href} target="_blank" rel="noopener">
                        {l.label}
                        <Icon name="arrowUpRight" size={13} style={{ display: "inline", verticalAlign: "-1px", marginLeft: 3 }} />
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name} · Budapest, Normafa
          </span>
          <nav aria-label="Lábléc">
            <span className="footer-bottom__motto">Tenisz · Mozgás · Közösség</span>
            <Link href="/adatkezeles">Adatkezelés</Link>
            <Link href="/kapcsolat">Kapcsolat</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
