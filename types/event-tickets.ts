/**
 * Type definitions for event tickets page components
 *
 * @module types/event-tickets
 */

/**
 * Image data structure for carousel slides
 */
export interface EventHeroSlideImage {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
}

/**
 * Optional video data for carousel slides
 */
export interface EventHeroSlideVideo {
  /** Video source URL */
  src: string;
}

/**
 * Carousel slide data structure
 */
export interface EventHeroSlide {
  /** Unique identifier for the slide */
  id: string;
  /** Slide image data */
  image: EventHeroSlideImage;
  /** Optional video data */
  video?: EventHeroSlideVideo;
}

/**
 * Props interface for the EventHero component
 */
export interface EventHeroProps {
  /** Optional custom className for styling overrides */
  className?: string;
  /** Array of carousel slides to display */
  slides: EventHeroSlide[];
  /** Optional badge text (e.g., "Exclusive") */
  badge?: string;
}

/**
 * Props for the EventInfo component
 */
export interface EventInfoProps {
  /** Main event title */
  title: string;
  /** Short introductory description */
  shortDescription: string;
  /** Event location label */
  location: string;
  /** Optional URL for the location */
  locationUrl?: string;
  /** Optional external URL for ticket selection */
  ticketUrl?: string;
  /** Date range text (e.g., "Fri 12 Dec - Sat 13 Dec") */
  date: string;
  /** Detailed description paragraphs */
  description: string[];
  /** Starting price label (e.g., "2 BHD") */
  priceFrom: string;
  /** Optional custom className for styling overrides */
  className?: string;
  /** Whether the event is completed (hides booking card) */
  isCompleted?: boolean;
}

/**
 * Event hero content structure
 */
export interface EventHeroContent {
  /** Unique slug used by the route */
  slug: string;
  /** Array of carousel slides */
  slides: EventHeroSlide[];
  /** Optional badge text */
  badge?: string;
  /** Event info block data */
  info: EventInfoProps;
}

/**
 * Map structure for constant lookup
 */
export type EventHeroContentMap = Record<string, EventHeroContent>;

/**
 * Individual terms section structure
 */
export interface TermsSection {
  /** Section title */
  title: string;
  /** Array of terms items for this section */
  items: string[];
}

/**
 * Terms and conditions data structure
 */
export type TermsAndConditionData = TermsSection[];

/**
 * Props for the TermsAndCondition component
 */
export interface TermsAndConditionProps {
  /** Optional custom className for styling overrides */
  className?: string;
  /** Terms and conditions sections data */
  termsAndCondition?: TermsAndConditionData;
}

/**
 * Props for the HowToGetThere component
 */
export interface HowToGetThereProps {
  /** Optional custom className for styling overrides */
  className?: string;
  /** Venue name */
  venueName: string;
  /** Full venue address */
  venueAddress: string;
  /** Optional URL for "View directions" link */
  directionsUrl?: string;
  /** Google Maps embed URL or query string */
  mapEmbedUrl: string;
  /** Instructions for getting there by car */
  byCarInstructions: string;
  /** Instructions for getting there by taxi */
  byTaxiInstructions: string;
  /** Whether the event is completed (hides location card) */
  isCompleted?: boolean;
}

