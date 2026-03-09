/**
 * Artist detail data structure
 *
 * @module types/artists
 */

/**
 * Artist event data structure
 *
 * @interface ArtistEvent
 */
export interface ArtistEvent {
  /** Event date and time display string */
  dateTime: string;
  /** Event name/title */
  name: string;
  /** Venue name or "Venue to be announced" */
  venue: string;
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
 * Artist detail information for detailed artist pages
 *
 * @interface ArtistDetail
 */
export interface ArtistDetail {
  /** Unique identifier for the artist */
  id: string;
  /** Artist display name */
  name: string;
  /** Follower count display string */
  followers: string;
  /** Artist biography text */
  biography: string;
  /** Artist portrait image data */
  image: {
    /** Image source URL */
    src: string;
    /** Image alt text */
    alt: string;
  };
  /** Optional array of events for this artist */
  events?: ArtistEvent[];
}

