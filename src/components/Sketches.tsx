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

// Four clay courts seen from the drone: the club's plan, sketched.
export function CourtsSketch({ className = "" }: { className?: string }) {
  const court = (x: number, y: number, i: number) => (
    <g key={i} transform={`translate(${x} ${y})`}>
      <rect className="s-clay" x="0" y="0" width="120" height="230" rx="2" pathLength={1} style={{ ["--d" as string]: i * 180 }} stroke="currentColor" />
      <path pathLength={1} style={{ ["--d" as string]: i * 180 + 300 }} d="M14 0v230M106 0v230M14 56h92M14 174h92M60 56v118" />
      <path pathLength={1} style={{ ["--d" as string]: i * 180 + 500 }} d="M-6 115h132" strokeWidth="2" strokeDasharray="0" />
    </g>
  );
  return (
    <svg
      className={`sketch ${className}`}
      viewBox="-20 -30 620 330"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Vázlat: négy salakpálya egymás mellett"
    >
      {[0, 1, 2, 3].map((i) => court(i * 142, 20, i))}
      <path
        className="s-clay"
        pathLength={1}
        style={{ ["--d" as string]: 900 }}
        d="M40 262c80 26 190 34 290 20s170-36 230-30"
        stroke="currentColor"
        strokeDasharray="0"
      />
      <text x="0" y="-6" fill="currentColor" stroke="none" style={{ fontFamily: "var(--font-display)", fontSize: 19, fontStyle: "italic" }}>
        négy salakpálya, a hegy tetején
      </text>
    </svg>
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
