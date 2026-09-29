import Image from "next/image";
import Link from "next/link";
import { site, trainer } from "@/content/site";
import { Icon } from "./Icon";

export function CtaBand({
  title = "Egy óra a pályán többet mond minden leírásnál.",
  image = "/images/coach-feeding.jpg",
  variant = "court",
}: {
  title?: string;
  image?: string;
  variant?: "court" | "trainer";
}) {
  return (
    <section className="cta-band on-dark" aria-labelledby="cta-title">
      <div className="cta-band__media">
        <Image src={image} alt="" fill sizes="100vw" quality={60} />
      </div>
      <div className="container cta-band__inner">
        <h2 id="cta-title" className="h2 h2--xl" style={{ maxWidth: "18ch" }}>
          {title}
        </h2>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn" href="/jelentkezes">
            Jelentkezés edzésre
          </Link>
          {variant === "trainer" ? (
            <a className="btn btn--ghost-dark" href={trainer.phone.href}>
              <Icon name="phone" size={16} />
              {trainer.phone.display}
            </a>
          ) : (
            <a className="btn btn--ghost-dark" href={site.hellaUrl} target="_blank" rel="noopener">
              Pályafoglalás
              <Icon name="arrowUpRight" size={15} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
