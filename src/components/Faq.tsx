import type { ReactNode } from "react";
import { Icon } from "./Icon";

export type FaqItem = { q: string; a: ReactNode };

export function Faq({ items, openFirst = true }: { items: FaqItem[]; openFirst?: boolean }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={item.q} name="faq" open={openFirst && i === 0}>
          <summary>
            {item.q}
            <Icon name="plus" />
          </summary>
          <div className="faq__answer">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
