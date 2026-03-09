/**
 * Hero component - Intro section for the About page
 *
 * @component
 * @example
 * ```tsx
 * <Hero />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import { ABOUT_HERO_CONTENT } from "@/constants/content/about";
import type { AboutHeroProps } from "@/types/about";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * About hero section with eyebrow badge, headline, and supporting copy.
 *
 * @param props - About hero component props
 * @returns Semantic section element for the About hero
 */
export default function Hero({ className = "" }: AboutHeroProps) {
  const { language } = useTranslation();
  const content = ABOUT_HERO_CONTENT[language];

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-16 md:px-10 md:py-20 lg:px-20 lg:py-[136px] ${className}`}
      id="about-hero"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-8 text-center">
        {/* Eyebrow badge */}
        <div className="rounded-full bg-porcelain px-6 py-[10px]">
          <span className="font-poppins text-sm leading-[21px] text-corduroy">
            {content.badgeLabel}
          </span>
        </div>

        {/* Heading and description */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-6">
          <h1 className="font-poppins text-[48px] font-normal leading-tight tracking-[-2.4px] text-racing-green sm:text-[56px] sm:tracking-[-2.8px] md:text-[64px] md:leading-[64px] md:tracking-[-3.2px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px]">
            {content.heading}
          </h1>
          <p className="font-poppins text-base leading-6 text-corduroy md:text-lg md:leading-7 lg:text-xl lg:leading-8 max-w-[500px]">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
