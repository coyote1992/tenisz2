import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { RevealObserver } from "@/components/RevealObserver";
import { SeasonBar } from "@/components/SeasonBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Next Tenisz Akadémia · Teniszpályák és edzés a Normafánál",
    template: "%s · Next Tenisz Akadémia",
  },
  description:
    "Négy felújított salakpálya a Budai-hegységben, pár perc sétára a Normafától. Pályabérlés online, junior teniszcsoportok, személyi edzés és kiscsoportos órák.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: site.name,
    images: [{ url: "/images/aerial-hills.jpg", width: 1920, height: 1280, alt: "A Next Tenisz Akadémia salakpályái a Budai-hegységben" }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#tartalom">
          Ugrás a tartalomhoz
        </a>
        <SeasonBar />
        <SiteHeader />
        <main id="tartalom">{children}</main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
