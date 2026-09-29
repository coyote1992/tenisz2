import { courtPrices, formatNumber, openingHours, site } from "@/content/site";

export function PriceCards() {
  return (
    <div className="card-grid">
      {courtPrices.map((group) => (
        <div className="price-card" key={group.kind}>
          <h3 className="price-card__kind">{group.kind}</h3>
          <p className="small muted">{group.note}</p>
          <ul className="price-table">
            {group.rows.map((row) => (
              <li key={row.band}>
                <span className="price-table__band">{row.band}</span>
                <span className="price-table__detail">{row.detail}</span>
                <span className="price-table__price">
                  {formatNumber(row.price)}
                  <small>Ft / óra</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="price-card">
        <h3 className="price-card__kind">Nyitvatartás</h3>
        <p className="small muted">A pályák a szezonban minden nap nyitva vannak.</p>
        <ul className="hours" style={{ marginTop: 14 }}>
          {openingHours.map((h) => (
            <li key={h.days}>
              <span>{h.days}</span>
              <span>{h.hours}</span>
            </li>
          ))}
        </ul>
        <p className="small muted" style={{ marginTop: 18 }}>
          Kedvezményes bérletárakért írj a{" "}
          <a className="inline-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          címre, vagy hívj: <a className="inline-link" href={site.phone.href}>{site.phone.display}</a>.
        </p>
        <p className="small muted" style={{ marginTop: 10 }}>
          Az egyesület bankszámlaszáma: {site.bank.name},{" "}
          <span className="tnum" style={{ color: "var(--ink)", whiteSpace: "nowrap" }}>
            {site.bank.account}
          </span>
        </p>
      </div>
    </div>
  );
}
