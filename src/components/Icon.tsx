import type { SVGProps } from "react";

const paths = {
  arrowRight: <path d="M4 12h15m-5-5 5 5-5 5" />,
  arrowUpRight: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  arrowLeft: <path d="M20 12H5m5-5-5 5 5 5" />,
  arrowDown: <path d="M12 4v15m-5-5 5 5 5-5" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  phone: (
    <path d="M6.6 4h2.6l1.4 3.8-1.9 1.3a10.6 10.6 0 0 0 5.2 5.2l1.3-1.9 3.8 1.4v2.6A1.6 1.6 0 0 1 17.4 18 13.4 13.4 0 0 1 5 5.6 1.6 1.6 0 0 1 6.6 4Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M15.5 5.8a3 3 0 0 1 0 5.4M17 14.2a5.5 5.5 0 0 1 3.5 4.8" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M5.2 7.8c3.2 1.4 4.6 4.4 3.7 9.4M18.8 16.2c-3.2-1.4-4.6-4.4-3.7-9.4" />
    </>
  ),
  pause: <path d="M9 6.5v11M15 6.5v11" />,
  play: <path d="M8.5 6.2v11.6L18 12 8.5 6.2Z" />,
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  facebook: (
    <path d="M13.5 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.3-1.4 1.4-1.4h1.5V4.6a19 19 0 0 0-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v2h-2.4V13h2.4v7" />
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 18, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
