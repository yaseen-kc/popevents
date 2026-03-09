// ============================================
// Route Metadata
// ============================================
import type { Metadata } from "next";
import { FAQ_CONTENT } from "@/constants/content/landing";
import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
// import Testimonials from "@/components/landing/Testimonials";
import PastEvents from "@/components/landing/PastEvents";
import UpcomingEvents from "@/components/landing/UpcomingEvents";
// import ResourcesAndInsights from "@/components/landing/ResourcesAndInsights";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";

export const metadata: Metadata = {
  title: "Unforgettable Entertainment Events in GCC & Worldwide",
  description:
    "Discover upcoming and past live events, concerts, comedy shows, celebrity appearances, and corporate entertainment experiences curated by Pop Events across GCC and worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Unforgettable Entertainment Events in GCC & Worldwide",
    description:
      "Discover upcoming and past live events, concerts, comedy shows, celebrity appearances, and corporate entertainment experiences curated by Pop Events across GCC and worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unforgettable Entertainment Events in GCC & Worldwide",
    description:
      "Join Pop Events for live entertainment across GCC, including concerts, comedy shows, celebrity appearances, and corporate events.",
  },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://popevents.com/#organization",
  name: "Pop Events",
  url: "https://popevents.com",
  description:
    "Pop Events is GCC's premier event management and live entertainment company, creating unforgettable concerts, comedy shows, celebrity appearances, and corporate events across GCC and worldwide.",
  logo: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/hero-image.webp",
  sameAs: [
    "https://www.instagram.com/popEvents.bh",
    "https://tiktok.com/@popevents.bh",
    "https://www.snapchat.com/@pop_events",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "popevents95@gmail.com",
      telephone: "+97339308861",
      availableLanguage: ["en", "ar"],
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CONTENT.en.questions.slice(0, 4).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
// ============================================
// Page Implementation
// ============================================

/**
 * Landing page component
 *
 * @returns Landing page element
 */
export default function Home() {
  return (
    <main>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([ORGANIZATION_SCHEMA, FAQ_SCHEMA]),
        }}
      />
      <Hero />
      <UpcomingEvents />
      <About />
      <PastEvents />
      <Services />
      {/* <Testimonials /> */}
      {/* <ResourcesAndInsights /> */}
      <FAQ />
      <CTA />
    </main>
  );
}
