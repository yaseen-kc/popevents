/**
 * WhoWeAre component - About page section describing the team
 *
 * @component
 * @example
 * ```tsx
 * <WhoWeAre />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import Image from "next/image";

import { WHO_WE_ARE_CONTENT } from "@/constants/content/about";
import type { WhoWeAreOverlayPosition, WhoWeAreProps } from "@/types/about";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Constants
// ============================================

const OVERLAY_POSITION_STYLES: Record<WhoWeAreOverlayPosition, string> = {
  "bottom-left": "left-6 bottom-8 sm:left-10 sm:bottom-10",
  "bottom-right": "right-6 bottom-6 sm:right-10 sm:bottom-10",
};

// ============================================
// Component Implementation
// ============================================

/**
 * Displays the “Who we are” section with supporting copy, trusted partners,
 * and a hero portrait with overlay tags.
 *
 * @param props - Component props
 * @returns Semantic section element for the WhoWeAre block
 */
export default function WhoWeAre({ className = "" }: WhoWeAreProps) {
  const { language } = useTranslation();
  const content = WHO_WE_ARE_CONTENT[language];

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-16 md:px-10 md:py-24 lg:px-20 ${className}`}
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
    >
      <div className="grid w-full max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(480px,560px)] lg:items-center lg:gap-16">
        <div className="flex w-full flex-col items-center gap-8 text-center md:items-start md:text-left">
          {/* Eyebrow + heading */}
          <div className="flex w-full max-w-[600px] flex-col items-center gap-6 md:items-start">
            <div className="inline-flex items-center justify-center rounded-full bg-porcelain px-4 py-1.5">
              <span className="font-poppins text-sm leading-[21px] text-corduroy">
                {content.badgeLabel}
              </span>
            </div>

            <div className="flex w-full flex-col gap-5">
              <h2
                id="who-we-are-heading"
                className="font-poppins text-[34px] font-normal leading-[38px] tracking-[-1.36px] text-racing-green md:text-[48px] md:leading-[50px] md:tracking-[-1.92px] lg:text-[64px] lg:leading-[66px] lg:tracking-[-2.56px]"
              >
                {content.heading}
              </h2>
              <p className="font-poppins text-base leading-6 text-corduroy text-center md:text-left md:text-lg md:leading-8">
                {content.description}
              </p>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <figure className="relative flex justify-center">
          <div
            className="relative w-full max-w-[520px] overflow-hidden rounded-[20px] bg-[#0f1f17]"
            style={{
              aspectRatio: `${content.expertImage.width} / ${content.expertImage.height}`,
            }}
          >
            <div
              role="img"
              aria-label={content.expertImage.alt}
              style={{
                backgroundImage: `url(${content.expertImage.src})`,
              }}
              className="absolute inset-0 rounded-[20px] bg-cover bg-center"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[20px] bg-linear-to-b from-white/5 to-black/40"
            />

            {/* {content.overlayTags.map((tag) => (
              <span
                key={tag.label}
                className={`absolute flex items-center rounded-full bg-white/80 px-5 py-2 font-poppins text-sm text-[#4a4f4d] backdrop-blur ${
                  OVERLAY_POSITION_STYLES[tag.position]
                }`}
              >
                {tag.label}
              </span>
            ))} */}
          </div>
          <figcaption className="sr-only">
            {content.expertImage.alt}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
