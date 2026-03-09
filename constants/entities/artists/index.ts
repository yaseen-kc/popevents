/**
 * Artist data exports and API-ready functions
 *
 * @module constants/entities/artists
 */

// TODO: Replace with API calls when backend is ready
import { mockArtistDetailMap } from "./mock";
import type { ArtistDetail } from "@/types/artists";

/**
 * Artist data structure for platform page (simplified view)
 */
export type Artist = {
  /** Unique identifier for the artist */
  id: string;
  /** Artist name */
  name: string;
  /** Follower count display string */
  followers: string;
  /** Artist image data */
  image: { src: string; alt: string };
};

/**
 * Get all artists
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Array of artists
 */
export async function getArtists(language: 'en' | 'ar' = 'en'): Promise<Artist[]> {
  // Future: return await api.get('/artists', { params: { lang: language } });
  return Object.values(mockArtistDetailMap).map((artistData) => {
    const detail = artistData[language];
    return {
      id: detail.id,
      name: detail.name,
      followers: detail.followers,
      image: detail.image,
    };
  });
}

/**
 * Get artist by ID
 * 
 * @param id - Artist identifier
 * @param language - Language code ('en' or 'ar')
 * @returns Artist or null if not found
 */
export async function getArtistById(id: string, language: 'en' | 'ar' = 'en'): Promise<Artist | null> {
  // Future: return await api.get(`/artists/${id}`, { params: { lang: language } });
  const artistData = mockArtistDetailMap[id];
  if (!artistData) return null;
  const detail = artistData[language];
  return {
    id: detail.id,
    name: detail.name,
    followers: detail.followers,
    image: detail.image,
  };
}

/**
 * Get artist detail by ID
 * 
 * @param id - Artist identifier
 * @param language - Language code ('en' or 'ar')
 * @returns Artist detail or null if not found
 */
export async function getArtistDetailById(id: string, language: 'en' | 'ar' = 'en'): Promise<ArtistDetail | null> {
  // Future: return await api.get(`/artists/${id}/detail`, { params: { lang: language } });
  const artistData = mockArtistDetailMap[id];
  if (!artistData) return null;
  return artistData[language];
}

/**
 * Get all artist details map
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Map of artist IDs to their detailed information
 */
export function getArtistDetailMap(language: 'en' | 'ar' = 'en'): Record<string, ArtistDetail> {
  // Future: This could be replaced with a function that fetches all artist details
  const result: Record<string, ArtistDetail> = {};
  for (const [id, artistData] of Object.entries(mockArtistDetailMap)) {
    result[id] = artistData[language];
  }
  return result;
}

// Helper function to get ARTISTS array for a specific language
function getArtistsForLanguage(language: 'en' | 'ar'): Artist[] {
  return Object.values(mockArtistDetailMap).map((artistData) => {
    const detail = artistData[language];
    return {
      id: detail.id,
      name: detail.name,
      followers: detail.followers,
      image: detail.image,
    };
  });
}

// Derive ARTISTS array from mockArtistDetailMap for backward compatibility (defaults to English)
export const ARTISTS: Artist[] = getArtistsForLanguage('en');

// Export artist detail map for convenience (defaults to English, use getArtistDetailMap for language support)
export const ARTIST_DETAIL_MAP: Record<string, ArtistDetail> = getArtistDetailMap('en');
