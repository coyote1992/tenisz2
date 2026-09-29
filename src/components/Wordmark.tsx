import Link from "next/link";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`wordmark${light ? " wordmark--light" : ""}`} aria-label="Next Tenisz Akadémia, kezdőlap">
      <svg className="wordmark__mark" width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.2 9.6c4.6 2 6.6 6.4 5.3 13.6M25.8 22.4c-4.6-2-6.6-6.4-5.3-13.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="wordmark__text">
        <span className="wordmark__name">Next Tenisz</span>
        <span className="wordmark__sub">Akadémia · Normafa</span>
      </span>
    </Link>
  );
}
