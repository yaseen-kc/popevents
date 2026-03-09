/**
 * Venue detail data structure
 *
 * @module types/venues
 */

/**
 * Venue event data structure
 *
 * @interface VenueEvent
 */
export interface VenueEvent {
  /** Event date and time display string */
  dateTime: string;
  /** Event name/title */
  name: string;
  /** Artist name or "Artist to be announced" */
  artist: string;
  /** Price display string */
  price: string;
  /** Location name for badge display */
  location: string;
  /** Event poster image data */
  image: {
    /** Image source URL */
    src: string;
    /** Image alt text */
    alt: string;
  };
}

/**
 * Venue detail information for detailed venue pages
 *
 * @interface VenueDetail
 */
export interface VenueDetail {
  /** Unique identifier for the venue */
  id: string;
  /** Venue display name */
  name: string;
  /** Venue description text */
  description: string;
  /** Venue location */
  location: string;
  /** Venue image data */
  image: {
    /** Image source URL */
    src: string;
    /** Image alt text */
    alt: string;
  };
  /** Optional array of events at this venue */
  events?: VenueEvent[];
}

