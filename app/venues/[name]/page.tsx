/**
 * Venue detail page route
 *
 * @module app/venues/[name]/page
 */

// ============================================
// Component Imports
// ============================================
import { notFound } from "next/navigation";
import VenuesDetails from "@/components/venues/Detailed/VenuesDetails";
import { getVenueDetailMap } from "@/constants/entities/venues";

const VENUE_DETAIL_MAP = getVenueDetailMap();

// ============================================
// Type Definitions
// ============================================

interface VenuePageProps {
  params: {
    name: string;
  };
}

// ============================================
// Route Metadata
// ============================================
export async function generateMetadata({ params }: VenuePageProps) {
  const { name } = await Promise.resolve(params);
  const venueDetail = VENUE_DETAIL_MAP[name];

  if (!venueDetail) {
    return {
      title: "Venue Not Found | Pop Events",
      description:
        "Venue with Pop Events, the team bringing world-class entertainment experiences in GCC.",
    };
  }

  return {
    title: `${venueDetail.name} | Pop Events`,
    description: venueDetail.description,
  };
}

// ============================================
// Page Implementation
// ============================================

/**
 * Venue detail page displaying venue information.
 *
 * @param props - Route params wrapper
 * @returns Venue page element
 */
export default async function VenuePage({ params }: VenuePageProps) {
  const { name } = await Promise.resolve(params);

  if (!VENUE_DETAIL_MAP[name]) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <VenuesDetails name={name} />
    </main>
  );
}

