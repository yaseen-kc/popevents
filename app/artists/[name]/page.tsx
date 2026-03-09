/**
 * Artist detail page route
 *
 * @module app/artists/[name]/page
 */

// ============================================
// Component Imports
// ============================================
import { notFound } from "next/navigation";
import ArtistsDetails from "@/components/artists/Detailed/ArtistsDetails";
import { getArtistDetailMap } from "@/constants/entities/artists";

const ARTIST_DETAIL_MAP = getArtistDetailMap();

// ============================================
// Type Definitions
// ============================================

interface ArtistPageProps {
  params: {
    name: string;
  };
}

// ============================================
// Route Metadata
// ============================================
export async function generateMetadata({ params }: ArtistPageProps) {
  const { name } = await Promise.resolve(params);
  const artistDetail = ARTIST_DETAIL_MAP[name];

  if (!artistDetail) {
    return {
      title: "Artist Not Found | Pop Events",
      description:
        "Artist with Pop Events, the team bringing world-class entertainment experiences in GCC.",
    };
  }

  return {
    title: `${artistDetail.name} | Pop Events`,
    description: artistDetail.biography,
  };
}

// ============================================
// Page Implementation
// ============================================

/**
 * Artist detail page displaying artist information.
 *
 * @param props - Route params wrapper
 * @returns Artist page element
 */
export default async function ArtistPage({ params }: ArtistPageProps) {
  const { name } = await Promise.resolve(params);

  if (!ARTIST_DETAIL_MAP[name]) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <ArtistsDetails name={name} />
    </main>
  );
}
