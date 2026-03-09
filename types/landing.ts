/**
 * Type definitions for landing page components
 *
 * @module types/landing
 */

/**
 * Props interface for Hero component
 *
 * @interface HeroProps
 */
export interface HeroProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Tone options for About heading segments
 */
export type AboutHeadingTone = "muted" | "accent";

/**
 * Structured segment definition for About heading content
 *
 * @interface AboutHeadingSegment
 */
export interface AboutHeadingSegment {
  /** Copy fragment for the heading */
  text: string;
  /** Styling tone for the fragment */
  tone: AboutHeadingTone;
}

/**
 * Props interface for About component
 *
 * @interface AboutProps
 */
export interface AboutProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Props interface for Services component
 *
 * @interface ServicesProps
 */
export interface ServicesProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Service image metadata
 *
 * @interface ServiceImage
 */
export interface ServiceImage {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
}

/**
 * Service offering definition used across landing and dynamic pages
 *
 * @interface ServiceOffering
 */
export interface ServiceOffering {
  /** Service title */
  title: string;
  /** Route-friendly identifier */
  slug: string;
  /** Service description text */
  description: string;
  /** Visual asset representing the service */
  image: ServiceImage;
}

/**
 * Structured content for the Services landing section
 *
 * @interface ServicesContent
 */
export interface ServicesContent {
  /** Eyebrow badge label */
  badgeLabel: string;
  /** Section heading */
  heading: string;
  /** Supporting description */
  description: string;
  /** Collection of available services */
  services: ServiceOffering[];
}

/**
 * Avatar image data structure
 *
 * @interface AvatarImage
 */
export interface AvatarImage {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
}

/**
 * Testimonial data structure
 *
 * @interface Testimonial
 */
export interface Testimonial {
  /** Testimonial quote text */
  quote: string;
  /** Client name */
  name: string;
  /** Client company name */
  company: string;
  /** Client avatar image data */
  avatar: AvatarImage;
}

/**
 * Props interface for Testimonials component
 *
 * @interface TestimonialsProps
 */
export interface TestimonialsProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Article category options
 */
export type ArticleCategory = "Planning" | "Industry" | "Tips" | "Trends";

/**
 * Article image data structure
 *
 * @interface ArticleImage
 */
export interface ArticleImage {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
}

/**
 * Article data structure
 *
 * @interface Article
 */
export interface Article {
  /** Article category */
  category: ArticleCategory;
  /** Publication date */
  date: string;
  /** Article title */
  title: string;
  /** Article description (optional) */
  description?: string;
  /** Article image data */
  image: ArticleImage;
}

/**
 * Props interface for ResourcesAndInsights component
 *
 * @interface ResourcesAndInsightsProps
 */
export interface ResourcesAndInsightsProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * FAQ question data structure
 *
 * @interface FAQQuestion
 */
export interface FAQQuestion {
  /** Question text */
  question: string;
  /** Answer text */
  answer: string;
}

/**
 * Props interface for FAQ component
 *
 * @interface FAQProps
 */
export interface FAQProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Props interface for CTA component
 *
 * @interface CTAProps
 */
export interface CTAProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Event image data structure
 *
 * @interface EventImage
 */
export interface EventImage {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
}

/**
 * Previous event data structure
 *
 * @interface PreviousEvent
 */
export interface PreviousEvent {
  /** Event date and time */
  dateTime: string;
  /** Event name */
  name: string;
  /** Event location */
  location: string;
  /** Event image data */
  image: EventImage;
}

/**
 * Structured content for the PastEvents landing section
 *
 * @interface PastEventsContent
 */
export interface PastEventsContent {
  /** Eyebrow badge label */
  badgeLabel: string;
  /** Main heading for the Past Events section */
  heading: string;
  /** Description text explaining the Past Events section */
  description: string;
  /** Collection of Past Events */
  events: readonly PreviousEvent[];
}

/**
 * Props interface for PastEvents component
 *
 * @interface PastEventsProps
 */
export interface PastEventsProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Upcoming event data structure
 *
 * @interface UpcomingEvent
 */
export interface UpcomingEvent {
  /** Event slug identifier for routing */
  slug: string;
  /** Event date and time */
  dateTime: string;
  /** Event name */
  name: string;
  /** Event location */
  location: string;
  /** Event image data */
  image: EventImage;
}

/**
 * Structured content for the UpcomingEvents landing section
 *
 * @interface UpcomingEventsContent
 */
export interface UpcomingEventsContent {
  /** Eyebrow badge label */
  badgeLabel: string;
  /** Main heading for the Upcoming Events section */
  heading: string;
  /** Description text explaining the Upcoming Events section */
  description: string;
  /** Collection of Upcoming Events */
  events: readonly UpcomingEvent[];
}

/**
 * Props interface for UpcomingEvents component
 *
 * @interface UpcomingEventsProps
 */
export interface UpcomingEventsProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

