/**
 * Event data exports and API-ready functions
 *
 * @module constants/entities/events
 */

// TODO: Replace with API calls when backend is ready
import { 
  mockEventDetailMap,
  mockHeroEvents,
  STATUS_CLASSES,
  type HeroEvent,
  type TopEvent,
  type UpcomingEventstatus,
  type EventDetail,
} from "./mock";
import type { EventHeroContent, EventHeroContentMap, HowToGetThereProps, TermsAndConditionData } from "@/types/event-tickets";
import type { PreviousEvent } from "@/types/landing";

/**
 * Derive event hero content array from the detail map for a specific language
 */
function getEventHeroContentForLanguage(language: 'en' | 'ar'): EventHeroContent[] {
  return Object.values(mockEventDetailMap)
    .map(eventData => eventData[language])
    .filter((event): event is EventDetail & { heroContent: EventHeroContent } => 
      event.heroContent !== undefined
    )
    .map(event => event.heroContent);
}

/**
 * Derive top events array from the detail map for a specific language
 */
function getTopEventsForLanguage(language: 'en' | 'ar'): TopEvent[] {
  return Object.values(mockEventDetailMap)
    .map(eventData => eventData[language])
    .filter((event): event is EventDetail & { topEvent: TopEvent } => 
      event.topEvent !== undefined
    )
    .map(event => event.topEvent);
}

/**
 * Derive Past Events array from the detail map (completed events only) for a specific language
 */
function getPastTopEventsForLanguage(language: 'en' | 'ar'): TopEvent[] {
  return Object.values(mockEventDetailMap)
    .map(eventData => eventData[language])
    .filter((event): event is EventDetail & { topEvent: TopEvent } => 
      event.status === "completed" && event.topEvent !== undefined
    )
    .map(event => event.topEvent);
}

/**
 * Derive in-progress events array from the detail map (in-progress events only) for a specific language
 */
function getInProgressTopEventsForLanguage(language: 'en' | 'ar'): TopEvent[] {
  return Object.values(mockEventDetailMap)
    .map(eventData => eventData[language])
    .filter((event): event is EventDetail & { topEvent: TopEvent } => 
      event.status === "in-progress" && event.topEvent !== undefined
    )
    .map(event => event.topEvent);
}

/**
 * Get all event hero content entries
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Array of event hero content
 */
export async function getEventHeroContent(language: 'en' | 'ar' = 'en'): Promise<EventHeroContent[]> {
  // Future: return await api.get('/events/hero', { params: { lang: language } });
  return getEventHeroContentForLanguage(language);
}

/**
 * Get event hero content by slug
 * 
 * @param slug - Event slug identifier
 * @param language - Language code ('en' or 'ar')
 * @returns Event hero content or null if not found
 */
export async function getEventHeroContentBySlug(slug: string, language: 'en' | 'ar' = 'en'): Promise<EventHeroContent | null> {
  // Future: return await api.get(`/events/${slug}/hero`, { params: { lang: language } });
  const eventData = mockEventDetailMap[slug];
  if (!eventData) return null;
  const event = eventData[language];
  return event?.heroContent || null;
}

/**
 * Get utility map for constant-time lookups for a specific language
 */
function getEventHeroContentMapForLanguage(language: 'en' | 'ar'): EventHeroContentMap {
  const heroContent = getEventHeroContentForLanguage(language);
  return heroContent.reduce<EventHeroContentMap>((acc, entry) => {
    acc[entry.slug] = entry;
    return acc;
  }, {});
}

/**
 * Utility map for constant-time lookups (defaults to English)
 */
export const EVENT_HERO_CONTENT_MAP: EventHeroContentMap = getEventHeroContentMapForLanguage('en');

/**
 * Get all Past Events
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Array of Past Events
 */
export async function getPastEvents(language: 'en' | 'ar' = 'en'): Promise<PreviousEvent[]> {
  // Future: return await api.get('/events/previous', { params: { lang: language } });
  return Object.values(mockEventDetailMap)
    .map(eventData => eventData[language])
    .filter((event): event is EventDetail & { heroContent: NonNullable<EventDetail['heroContent']> } => 
      event.status === "completed" && event.heroContent !== undefined && event.heroContent.slides.length > 0
    )
    .map(event => ({
      dateTime: event.heroContent.info.date,
      name: event.heroContent.info.title,
      location: event.heroContent.info.location,
      image: event.heroContent.slides[0].image,
    }));
}

/**
 * Get location data for an event
 * 
 * @param slug - Event slug identifier
 * @param language - Language code ('en' or 'ar')
 * @returns Location data or null if not found
 */
export async function getEventLocation(slug: string, language: 'en' | 'ar' = 'en'): Promise<HowToGetThereProps | null> {
  // Future: return await api.get(`/events/${slug}/location`, { params: { lang: language } });
  const eventData = mockEventDetailMap[slug];
  if (!eventData) return null;
  const event = eventData[language];
  return event?.location || null;
}

/**
 * Get terms and conditions data for an event
 * 
 * @param slug - Event slug identifier
 * @param language - Language code ('en' or 'ar')
 * @returns Terms and conditions data or null if not found
 */
export async function getEventTerms(slug: string, language: 'en' | 'ar' = 'en'): Promise<TermsAndConditionData | null> {
  // Future: return await api.get(`/events/${slug}/terms`, { params: { lang: language } });
  const eventData = mockEventDetailMap[slug];
  if (!eventData) return null;
  const event = eventData[language];
  return event?.termsAndCondition || null;
}

/**
 * Get event status for an event
 * 
 * @param slug - Event slug identifier
 * @returns Event status ("completed" | "in-progress") or null if not found
 */
export async function getEventStatus(slug: string): Promise<"completed" | "in-progress" | null> {
  // Future: return await api.get(`/events/${slug}/status`);
  const eventData = mockEventDetailMap[slug];
  if (!eventData) return null;
  // Status is the same across languages, so we can use either
  return eventData.en.status || null;
}

/**
 * Get hero events for platform page
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Array of hero events
 */
export async function getHeroEvents(language: 'en' | 'ar' = 'en'): Promise<HeroEvent[]> {
  // Future: return await api.get('/events/hero-carousel', { params: { lang: language } });
  return mockHeroEvents[language];
}

/**
 * Get top events for platform page
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Array of top events
 */
export async function getUpcomingEvents(language: 'en' | 'ar' = 'en'): Promise<TopEvent[]> {
  // Future: return await api.get('/events/top', { params: { lang: language } });
  return getTopEventsForLanguage(language);
}

/**
 * Get in-progress top events for platform page
 *
 * @param language - Language code ('en' or 'ar')
 * @returns Array of in-progress top events
 */
export async function getInProgressEvents(language: 'en' | 'ar' = 'en'): Promise<TopEvent[]> {
  // Future: return await api.get('/events/in-progress', { params: { lang: language } });
  return getInProgressTopEventsForLanguage(language);
}

/**
 * Get past (completed) top events for platform page
 *
 * @param language - Language code ('en' or 'ar')
 * @returns Array of past top events
 */
export async function getPastTopEvents(language: 'en' | 'ar' = 'en'): Promise<TopEvent[]> {
  // Future: return await api.get('/events/past', { params: { lang: language } });
  return getPastTopEventsForLanguage(language);
}

// Helper functions for backward compatibility (defaults to English)
const mockUpcomingEvents = getTopEventsForLanguage('en');
const mockPreviousTopEvents = getPastTopEventsForLanguage('en');
const mockInProgressTopEvents = getInProgressTopEventsForLanguage('en');

// Re-export types and constants
export type { HeroEvent, TopEvent, UpcomingEventstatus, EventDetail };
export { STATUS_CLASSES, mockHeroEvents as HERO_EVENTS, mockUpcomingEvents as EVENTS, mockPreviousTopEvents as PREVIOUS_EVENTS, mockInProgressTopEvents as IN_PROGRESS_EVENTS };
