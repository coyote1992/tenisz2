import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  title,
  lead,
  image,
  imageAlt,
  children,
  position = "center",
}: {
  title: ReactNode;
  lead?: ReactNode;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  position?: string;
}) {
  return (
    <section className="page-hero on-dark">
      <div className="page-hero__media">
        <Image src={image} alt={imageAlt} fill preload sizes="100vw" quality={70} style={{ objectPosition: position }} />
      </div>
      <div className="container">
        <div className="page-hero__content">
          <h1 className="page-hero__title">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
