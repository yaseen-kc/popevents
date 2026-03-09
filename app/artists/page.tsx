/**
 * Artists page route
 *
 * @module app/artists/page
 */
import Artists from "@/components/artists/Artists";
import CTA from "@/components/artists/CTA";
import Hero from "@/components/artists/Hero";
import FAQ from "@/components/landing/FAQ";

// ============================================
// Component Imports
// ============================================

// ============================================
// Route Metadata
// ============================================
export const metadata = {
  title: "Artists | Pop Events",
  description:
    "Artists with Pop Events, the team bringing world-class entertainment experiences in GCC.",
};

// ============================================
// Page Implementation
// ============================================

/**
 * Artists page displaying artists information.
 *
 * @returns Artists page element
 */
export default function ArtistsPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Artists />
      <CTA />
      <FAQ />
    </main>
  );
}
