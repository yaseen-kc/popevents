/**
 * Venues page route
 *
 * @module app/venues/page
 */
import Venues from "@/components/venues/Venues";
import CTA from "@/components/venues/CTA";
import Hero from "@/components/venues/Hero";
import FAQ from "@/components/landing/FAQ";

// ============================================
// Component Imports
// ============================================

// ============================================
// Route Metadata
// ============================================
export const metadata = {
  title: "Venues | Pop Events",
  description:
    "Venues with Pop Events, the team bringing world-class entertainment experiences in GCC.",
};

// ============================================
// Page Implementation
// ============================================

/**
 * Venues page displaying venues information.
 *
 * @returns Venues page element
 */
export default function VenuesPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Venues />
      <CTA />
      <FAQ />
    </main>
  );
}

