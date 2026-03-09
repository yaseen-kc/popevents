/**
 * About page route
 *
 * @module app/about/page
 */

// ============================================
// Component Imports
// ============================================
import type { Metadata } from "next";
import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionAndValues from "@/components/about/MissionAndValues";
import Culture from "@/components/about/Culture";
import CTA from "@/components/landing/CTA";

// ============================================
// Route Metadata
// ============================================
export const metadata: Metadata = {
  title: "About Pop Events | Event Management in GCC",
  description:
    "Learn about Pop Events, GCC's premier event management company creating world-class live entertainment, corporate shows, and unforgettable experiences across the region.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Pop Events | GCC Event Management & Live Entertainment",
    description:
      "Meet Pop Events, a GCC-based event management and live entertainment company delivering concerts, comedy shows, celebrity appearances, and corporate events across the region.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pop Events | Event Management in GCC",
    description:
      "Discover the story, mission, and values behind Pop Events, GCC's premier live entertainment and event management company.",
  },
};

// ============================================
// Page Implementation
// ============================================

/**
 * About page displaying company story and mission.
 *
 * @returns About page element
 */
export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <WhoWeAre />
      <MissionAndValues />
      <Culture />
      <CTA />
    </main>
  );
}
