import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Geist, Geist_Mono, Poppins, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/layout/Navbar";
import Footer from "@/components/shared/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { TranslationProvider } from "@/contexts/TranslationContext";
import TranslationWrapper from "@/components/providers/TranslationWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://popevents.com/#website",
  name: "Pop Events",
  url: "https://popevents.com",
  inLanguage: ["en", "ar"],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://popevents.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const SITE_NAVIGATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pop Events main navigation",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Home",
      url: "https://popevents.com/",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Services",
      url: "https://popevents.com/#services",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "About",
      url: "https://popevents.com/about",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Contact",
      url: "https://popevents.com/contact",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Events",
      url: "https://popevents.com/platform",
    },
  ],
};

const LANGUAGE_STORAGE_KEY = "popevents-language";

async function getInitialLanguage(): Promise<"en" | "ar"> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get(LANGUAGE_STORAGE_KEY)?.value;
  if (cookieLang === "en" || cookieLang === "ar") {
    return cookieLang;
  }

  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language") || "";
  if (acceptLanguage.toLowerCase().includes("ar")) {
    return "ar";
  }

  return "en";
}

export const metadata: Metadata = {
  metadataBase: new URL("https://popevents.com"),
  title: {
    default: "Pop Events | Unforgettable Entertainment in GCC & Worldwide",
    template: "%s | Pop Events",
  },
  description:
    "Pop Events is a GCC-based event management and live entertainment company delivering concerts, comedy shows, celebrity appearances, and corporate events across the region and worldwide.",
  applicationName: "Pop Events",
  creator: "Pop Events",
  publisher: "Pop Events",
  category: "Entertainment",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Pop Events",
    title: "Pop Events | Unforgettable Entertainment in GCC & Worldwide",
    description:
      "Pop Events creates unforgettable entertainment experiences across GCC and worldwide, from live concerts and comedy shows to celebrity appearances and corporate events.",
    images: [
      {
        url: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Live music concert with vibrant stage lighting and enthusiastic crowd creating an energetic atmosphere.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pop Events | Unforgettable Entertainment in GCC & Worldwide",
    description:
      "Pop Events curates world-class entertainment experiences across GCC, including live music concerts, celebrity appearances, comedy shows, and corporate events.",
    images: [
      "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/hero-image.webp",
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLanguage = await getInitialLanguage();

  return (
    <html
      lang={initialLanguage}
      dir={initialLanguage === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${beVietnamPro.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([WEBSITE_SCHEMA, SITE_NAVIGATION_SCHEMA]),
          }}
        />
        <TranslationProvider initialLanguage={initialLanguage}>
          <ThemeProvider>
            <TranslationWrapper>
              <Navbar />
              {children}
              <Footer />
            </TranslationWrapper>
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
