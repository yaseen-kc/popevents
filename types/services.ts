/**
 * Type definitions for services page components
 *
 * @module types/services
 */

import type { StaticImageData } from "next/image";

/**
 * Props interface for the Services Hero component
 */
export interface HeroProps {
    /** Optional custom className for styling overrides */
    className?: string;
    /** Current service slug sourced from the route */
    slug: string;
}

/**
 * Background image descriptor for the services hero banner
 */
export interface HeroBackgroundImage {
    /** Minimum viewport width (in px) where this asset should be used */
    minWidth: number;
    /** Optional maximum viewport width (in px) for this asset */
    maxWidth?: number;
    /** Next.js static image reference */
    image: StaticImageData | string;
    /** Breakpoint-specific sizes attribute override */
    sizes: string;
}

/**
 * Content blueprint for each services hero banner
 */
export interface ServiceHeroContent {
    /** Unique slug used by the route */
    slug: string;
    /** Primary heading first line */
    titleLine1: string;
    /** Primary heading second line */
    titleLine2: string;
    /** Optional supporting description */
    description?: string;
    /** Responsive background image descriptor list */
    backgroundImages: HeroBackgroundImage[];
    /** Slug for the next service in sequence */
    nextSlug?: string;
    /** Accessible label for the next link */
    nextLabel?: string;
}

/**
 * Map structure for constant lookup
 */
export type ServiceHeroContentMap = Record<string, ServiceHeroContent>;


