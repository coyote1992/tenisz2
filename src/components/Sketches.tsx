// Hand-drawn line sketches. Paths carry pathLength so CSS can draw them in once.

export function HeroUnderline() {
  return (
    <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
      <path
        pathLength={1}
        d="M3 13.5C52 7.8 118 5.2 176 6.4c42 .9 83 3.6 121 8.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Deterministic "pen" so the sketch looks hand-drawn but renders identically on server and client.
function pen(seed: number) {
  let t = seed;
  const rand = () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
  const j = (n: number) => (rand() - 0.5) * 2 * n;
  // A stroke that overshoots its ends a little and bows slightly, like a pencil line.
  return (x1: number, y1: number, x2: number, y2: number) => {
    const len = Math.hypot(x2 - x1, y2 - y1) || 1;
    const ux = (x2 - x1) / len;
    const uy = (y2 - y1) / len;
    const o1 = 2 + rand() * 4;
    const o2 = 2 + rand() * 4;
    const sx = x1 - ux * o1 + j(1);
    const sy = y1 - uy * o1 + j(1);
    const ex = x2 + ux * o2 + j(1);
    const ey = y2 + uy * o2 + j(1);
    const bow = j(Math.min(3, len / 40));
    const cx = (sx + ex) / 2 - uy * bow;
    const cy = (sy + ey) / 2 + ux * bow;
    return `M${sx.toFixed(1)} ${sy.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  };
}

// Four clay courts seen from the drone: the club's plan, sketched.
export function CourtsSketch({ className = "" }: { className?: string }) {
  const W = 120;
  const H = 230;
  const courts = [0, 1, 2, 3].map((i) => {
    const line = pen(11 + i * 7);
    const x = i * 142;
    const y = 10;
    const outline = [
      line(x, y, x + W, y),
      line(x + W, y, x + W, y + H),
      line(x + W, y + H, x, y + H),
      line(x, y + H, x, y),
    ];
    const marks = [
      line(x + 14, y, x + 14, y + H),
      line(x + 106, y, x + 106, y + H),
      line(x + 14, y + 56, x + 106, y + 56),
      line(x + 14, y + 174, x + 106, y + 174),
      line(x + 60, y + 56, x + 60, y + 174),
    ];
    const net = line(x - 6, y + H / 2, x + W + 6, y + H / 2);
    return { outline, marks, net, i };
  });
  return (
    <figure className={className}>
      <svg
        className="sketch"
        viewBox="-20 -6 620 300"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="Vázlat: négy salakpálya egymás mellett"
      >
        {courts.map(({ outline, marks, net, i }) => (
          <g key={i}>
            {outline.map((d, k) => (
              <path key={k} d={d} pathLength={1} className="s-clay" strokeWidth={1.6} style={{ ["--d" as string]: i * 160 + k * 90 }} />
            ))}
            {marks.map((d, k) => (
              <path key={k} d={d} pathLength={1} strokeWidth={1.1} style={{ ["--d" as string]: i * 160 + 360 + k * 70 }} />
            ))}
            <path d={net} pathLength={1} strokeWidth={2} style={{ ["--d" as string]: i * 160 + 700 }} />
          </g>
        ))}
        <path
          className="s-clay"
          pathLength={1}
          strokeWidth={1.3}
          style={{ ["--d" as string]: 1200 }}
          d="M40 268c80 22 190 28 290 16s170-30 230-26"
        />
      </svg>
      <figcaption className="sketch-caption">Négy salakpálya, a hegy tetején.</figcaption>
    </figure>
  );
}

// A ball's flight over the net: used as a quiet divider.
export function BallArc({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`sketch ${className}`}
      viewBox="0 0 600 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path pathLength={1} d="M10 108h580" style={{ ["--d" as string]: 0 }} />
      <path pathLength={1} d="M300 108V70" strokeWidth="2" style={{ ["--d" as string]: 200 }} />
      <path pathLength={1} d="M30 100C140 10 420 -6 560 96" strokeDasharray="0" className="s-clay" stroke="currentColor" style={{ ["--d" as string]: 400 }} />
      <circle cx="560" cy="96" r="7" pathLength={1} style={{ ["--d" as string]: 1500 }} />
    </svg>
  );
}
