import Link from "next/link";
import { BallArc } from "@/components/Sketches";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container--narrow center" style={{ display: "grid", justifyItems: "center", gap: 20 }}>
        <BallArc className="arc-sketch" />
        <h1 className="page-hero__title" style={{ color: "var(--ink)" }}>
          Ez a labda kiment.
        </h1>
        <p className="lead">A keresett oldal nem létezik, vagy elköltözött. Innen biztosan továbbjutsz:</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn" href="/">
            Vissza a kezdőlapra
          </Link>
          <Link className="btn btn--ghost" href="/jelentkezes">
            Jelentkezés
          </Link>
        </div>
      </div>
    </section>
  );
}
