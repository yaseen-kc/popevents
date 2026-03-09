/**
 * About component - Mission highlight section for landing page
 *
 * @component
 * @example
 * ```tsx
 * <About />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import Link from "next/link";
import Button from "@/components/shared/ui/Button";
import { ABOUT_CONTENT } from "@/constants/content/landing";
import type { AboutHeadingSegment, AboutProps } from "@/types/landing";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * About section component featuring eyebrow badge, multi-line headline,
 * and call-to-action button.
 *
 * @param props - About component props
 * @returns About section element
 */
export default function About({ className = "" }: AboutProps) {
  const { language } = useTranslation();
  const content = ABOUT_CONTENT[language];

  /**
   * Returns tone-specific styles for the heading segments
   *
   * @param segment - Heading text segment
   * @returns Tailwind class string
   */
  const getToneStyles = (segment: AboutHeadingSegment) =>
    segment.tone === "accent" ? "text-racing-green" : "text-corduroy";

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-12 md:px-4 lg:px-12 ${className}`}
      id="about"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-12">
        {/* Eyebrow badge */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="rounded-full bg-porcelain px-4 py-1.5">
            <span className="font-poppins text-sm leading-[21px] text-corduroy">
              {content.badgeLabel}
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            {content.headingLines.map((line, lineIndex) => (
              <h2
                key={`about-heading-line-${lineIndex}`}
                className="font-poppins text-[40px] font-normal leading-[44px] tracking-[-1.6px] text-center text-corduroy md:text-[56px] md:leading-[60px] md:tracking-[-2.24px] lg:text-[64px] lg:leading-[68px] lg:tracking-[-2.56px]"
              >
                {line.map((segment, segmentIndex) => (
                  <span
                    key={`about-heading-segment-${lineIndex}-${segmentIndex}`}
                    className={getToneStyles(segment)}
                  >
                    {segment.text}
                  </span>
                ))}
              </h2>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative flex h-[160px] w-full max-w-[320px] items-start justify-center">
          <div
            aria-hidden="true"
            className="absolute top-8 h-[160px] w-[320px] rounded-[200px]"
          />
          <Link
            href={content.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="primary" size="md" className="min-w-[170px]">
              {content.ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
