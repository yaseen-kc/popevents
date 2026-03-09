/**
 * Type definitions for About page components
 *
 * @module types/about
 */

/**
 * Props interface for the About Hero component
 *
 * @interface AboutHeroProps
 */
export interface AboutHeroProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Partner logo data structure
 *
 * @interface PartnerLogo
 */
export interface PartnerLogo {
  /** Partner brand name */
  name: string;
}

/**
 * Overlay tag position options
 */
export type WhoWeAreOverlayPosition = "bottom-left" | "bottom-right";

/**
 * Overlay tag definition
 *
 * @interface WhoWeAreOverlayTag
 */
export interface WhoWeAreOverlayTag {
  /** Display label */
  label: string;
  /** Placement relative to the portrait */
  position: WhoWeAreOverlayPosition;
}

/**
 * Portrait image data
 *
 * @interface WhoWeAreImage
 */
export interface WhoWeAreImage {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
  /** Intrinsic width */
  width: number;
  /** Intrinsic height */
  height: number;
}

/**
 * Props interface for the WhoWeAre component
 *
 * @interface WhoWeAreProps
 */
export interface WhoWeAreProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Mission & values value item
 *
 * @interface MissionValue
 */
export interface MissionValue {
  /** Value headline */
  name: string;
  /** Supporting description */
  description: string;
}

/**
 * Mission & values content structure
 *
 * @interface MissionAndValuesContent
 */
export interface MissionAndValuesContent {
  /** Eyebrow label */
  badgeLabel: string;
  /** Section heading */
  heading: string;
  /** Supporting description */
  description: string;
  /** Values list */
  values: MissionValue[];
}

/**
 * Props interface for MissionAndValues component
 *
 * @interface MissionAndValuesProps
 */
export interface MissionAndValuesProps {
  /** Optional custom className for styling overrides */
  className?: string;
}

/**
 * Culture item image metadata
 *
 * @interface CultureItemImage
 */
export interface CultureItemImage {
  /** Image source URL */
  src: string;
  /** Accessible description */
  alt: string;
  /** Intrinsic width */
  width: number;
  /** Intrinsic height */
  height: number;
}

/**
 * Individual culture value/principle data
 *
 * @interface CultureItem
 */
export interface CultureItem {
  /** Culture value/principle name */
  name: string;
  /** Description/explanation */
  description: string;
  /** Image metadata */
  image: CultureItemImage;
}

/**
 * Culture section content structure
 *
 * @interface CultureSectionContent
 */
export interface CultureSectionContent {
  /** Eyebrow label */
  badgeLabel: string;
  /** Section heading */
  heading: string;
  /** Culture items list */
  items: CultureItem[];
}

/**
 * Props interface for Culture component
 *
 * @interface CultureProps
 */
export interface CultureProps {
  /** Optional custom className for styling overrides */
  className?: string;
}


