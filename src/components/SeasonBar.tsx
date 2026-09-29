import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "./Icon";

export function SeasonBar() {
  return (
    <div className="season-bar">
      <span className="season-bar__long">
        {site.season.label} {site.season.until}-ig · Őszi junior csoportok és személyi edzés ·{" "}
      </span>
      <Link href="/jelentkezes">
        Jelentkezés online
        <Icon name="arrowRight" size={14} style={{ display: "inline", verticalAlign: "-2px", marginLeft: 4 }} />
      </Link>
    </div>
  );
}
