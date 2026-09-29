import Image from "next/image";
import Link from "next/link";
import type { JuniorStage } from "@/content/site";
import { Icon } from "./Icon";

export function JuniorCard({ stage }: { stage: JuniorStage }) {
  return (
    <article className="card card--link">
      <div className="card__media">
        <Image src={stage.image} alt={stage.imageAlt} fill sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 25vw" />
      </div>
      <div className="card__body">
        <span className="meta">
          <span className={`dot dot--${stage.id}`} aria-hidden="true" />
          {stage.court}
        </span>
        <h3 className="card__title">
          <Link href={`/jelentkezes?program=junior&csoport=${stage.groups[0].id}`}>{stage.name}</Link>
        </h3>
        <p className="card__text">{stage.who}</p>
        <div className="rows" role="list">
          {stage.groups.map((g) => (
            <div key={g.id} role="listitem">
              {stage.groups.length > 1 && <p className="rows__group">{g.name}</p>}
              <ul style={{ listStyle: "none", display: "grid", gap: 4 }}>
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
            </div>
          ))}
        </div>
        <div className="card__foot">
          <span className="text-link">
            Jelentkezés: {stage.name} <Icon name="arrowRight" size={16} />
          </span>
        </div>
      </div>
    </article>
  );
}
