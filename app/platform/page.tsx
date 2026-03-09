/**
 * Events platform page route
 *
 * @module app/platform/page
 */
import type { Metadata } from "next";
import CTA from "@/components/platform/CTA";
import Hero from "@/components/platform/Hero";
import TopArtists from "@/components/platform/TopArtists";
import UpcomingEvents from "@/components/platform/UpcomingEvents";
import PastEvents from "@/components/platform/PastEvents";
import Venues from "@/components/platform/Venues";
// ============================================
// Component Imports
// ============================================

// ============================================
// Route Metadata
// ============================================
export const metadata: Metadata = {
  title: "Upcoming Events & Tickets | Pop Events Platform",
  description:
    "Browse upcoming and past events, discover venues and artists, and book tickets through the Pop Events platform for live entertainment across GCC.",
  alternates: {
    canonical: "/platform",
  },
  openGraph: {
    type: "website",
    url: "/platform",
    title: "Upcoming Events & Tickets | Pop Events Platform",
    description:
      "Explore upcoming and past events, venues, and artists, and securely book tickets via the Pop Events platform for live entertainment across GCC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Events & Tickets | Pop Events Platform",
    description:
      "Use the Pop Events platform to discover live entertainment in GCC and book tickets for concerts, comedy shows, and more.",
  },
};

// ============================================
// Page Implementation
// ============================================

/**
 * Book Tickets page displaying book tickets information.
 *
 * @returns Book Tickets page element
 */
export default function BookTicketsPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <UpcomingEvents />
      <PastEvents />
      <Venues />
      <TopArtists />
      <CTA />
    </main>
  );
}
