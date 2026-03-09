/**
 * Events page route
 *
 * @module app/events/page
 */
import type { Metadata } from "next";
import Events from "@/components/events/Events";
import CTA from "@/components/events/CTA";
import Hero from "@/components/events/Hero";
import FAQ from "@/components/landing/FAQ";

// ============================================
// Component Imports
// ============================================

// ============================================
// Route Metadata
// ============================================
export const metadata: Metadata = {
  title: "Live Events in GCC | Pop Events",
  description:
    "Explore all live events hosted by Pop Events across GCC, including concerts, comedy shows, celebrity appearances, and corporate entertainment experiences.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    type: "website",
    url: "/events",
    title: "Live Events in GCC | Pop Events",
    description:
      "Browse all live events from Pop Events across GCC, including concerts, comedy nights, celebrity appearances, and corporate entertainment experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Events in GCC | Pop Events",
    description:
      "View all upcoming and featured live events from Pop Events, covering concerts, comedy shows, celebrity appearances, and corporate entertainment across GCC.",
  },
};

// ============================================
// Page Implementation
// ============================================

/**
 * Events page displaying events information.
 *
 * @returns Events page element
 */
export default function EventsPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Events />
      <CTA />
      <FAQ />
    </main>
  );
}
