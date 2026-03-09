/**
 * Venue data exports and API-ready functions
 *
 * @module constants/entities/venues
 */

// TODO: Replace with API calls when backend is ready
import { mockVenueDetailMap } from "./mock";
import type { VenueDetail } from "@/types/venues";

/**
 * Venue data structure for platform page (simplified view)
 */
export type Venue = {
  /** Unique identifier for the venue */
  id: string;
  /** Venue name */
  title: string;
  /** Number of Top Events at this venue */
  upcomingEvents: number;
  /** Venue image data */
  image: {
    src: string;
    alt: string;
  };
  /** Optional link to venue page */
  href?: string;
};

/**
 * Get all venues
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Array of venues
 */
export async function getVenues(language: 'en' | 'ar' = 'en'): Promise<Venue[]> {
  // Future: return await api.get('/venues', { params: { lang: language } });
  return Object.values(mockVenueDetailMap).map((venueData) => {
    const detail = venueData[language];
    return {
      id: detail.id,
      title: detail.name,  // map name to title
      upcomingEvents: detail.events?.length || 0,
      href: "#",
      image: detail.image,
    };
  });
}

/**
 * Get venue by ID
 * 
 * @param id - Venue identifier
 * @param language - Language code ('en' or 'ar')
 * @returns Venue or null if not found
 */
export async function getVenueById(id: string, language: 'en' | 'ar' = 'en'): Promise<Venue | null> {
  // Future: return await api.get(`/venues/${id}`, { params: { lang: language } });
  const venueData = mockVenueDetailMap[id];
  if (!venueData) return null;
  const detail = venueData[language];
  return {
    id: detail.id,
    title: detail.name,
    upcomingEvents: detail.events?.length || 0,
    href: "#",
    image: detail.image,
  };
}

/**
 * Get venue detail by ID
 * 
 * @param id - Venue identifier
 * @param language - Language code ('en' or 'ar')
 * @returns Venue detail or null if not found
 */
export async function getVenueDetailById(id: string, language: 'en' | 'ar' = 'en'): Promise<VenueDetail | null> {
  // Future: return await api.get(`/venues/${id}/detail`, { params: { lang: language } });
  const venueData = mockVenueDetailMap[id];
  if (!venueData) return null;
  return venueData[language];
}

/**
 * Get all venue details map
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Map of venue IDs to their detailed information
 */
export function getVenueDetailMap(language: 'en' | 'ar' = 'en'): Record<string, VenueDetail> {
  // Future: This could be replaced with a function that fetches all venue details
  const result: Record<string, VenueDetail> = {};
  for (const [id, venueData] of Object.entries(mockVenueDetailMap)) {
    result[id] = venueData[language];
  }
  return result;
}

// Helper function to get VENUES array for a specific language
function getVenuesForLanguage(language: 'en' | 'ar'): Venue[] {
  return Object.values(mockVenueDetailMap).map((venueData) => {
    const detail = venueData[language];
    return {
      id: detail.id,
      title: detail.name,
      upcomingEvents: detail.events?.length || 0,
      href: "#",
      image: detail.image,
    };
  });
}

// Derive VENUES array from mockVenueDetailMap for backward compatibility (defaults to English)
export const VENUES: Venue[] = getVenuesForLanguage('en');

// Export venue detail map for convenience (defaults to English, use getVenueDetailMap for language support)
export const VENUE_DETAIL_MAP: Record<string, VenueDetail> = getVenueDetailMap('en');
