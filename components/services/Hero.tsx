/**
 * Services Hero component - dynamic banner per service slug
 *
 * @component
 * @example
 * ```tsx
 * <Hero slug="stand-up-comedy-performances" />
 * ```
 */

"use client";

// ============================================
// Component Imports
// ============================================
import Image from "next/image";
import Link from "next/link";
import { SERVICE_HERO_CONTENT_MAP } from "@/constants/content/services";
import { useTranslation } from "@/contexts/TranslationContext";
import type { HeroBackgroundImage, HeroProps } from "@/types/services";

// ============================================
// Component Implementation
// ============================================

/**
 * Compute responsive visibility classes for each background source
 *
 * @param image - Breakpoint descriptor
 * @returns Tailwind class string controlling visibility
 */
const getVisibilityClasses = (image: HeroBackgroundImage): string => {
  if (image.minWidth >= 1280) {
    return "opacity-0 xl:opacity-100";
  }
  if (image.minWidth >= 768) {
    return "opacity-0 md:opacity-100 xl:opacity-0";
  }
  return "opacity-100 md:opacity-0";
};

/**
 * Services hero banner with responsive imagery and next-service link
 *
 * @param props - Hero component props
 * @returns Hero section element
 */
export default function Hero({ className = "", slug }: HeroProps) {
  const { language } = useTranslation();
  const heroContent = SERVICE_HERO_CONTENT_MAP[language][slug as keyof typeof SERVICE_HERO_CONTENT_MAP[typeof language]];

  if (!heroContent) {
    return (
      <section className={`flex w-full justify-center px-4 py-12 ${className}`}>
        <div className="flex w-full max-w-[1280px] items-center justify-center rounded-2xl bg-porcelain px-6 py-16">
          <p className="font-poppins text-center text-base text-corduroy">
            The requested service is unavailable. Please return to the services
            list.
          </p>
        </div>
      </section>
    );
  }

  const {
    titleLine1,
    titleLine2,
    description,
    backgroundImages,
    nextSlug,
    nextLabel,
  } = heroContent;

  return (
    <section
      className={`flex w-full flex-col items-center gap-4 bg-white px-4 pb-12 pt-[72px] md:gap-6 md:px-6 md:pb-16 md:pt-[72px] ${className}`}
    >
      <div className="relative isolate flex h-[350px] w-full max-w-[358px] items-center justify-center overflow-hidden rounded-[24px] bg-black md:h-[350px] md:max-w-[736px] lg:h-[400px] lg:max-w-[976px] xl:h-[450px] xl:max-w-[1280px]">
        {/* Background images */}
        {backgroundImages.map((image, index) => (
          <Image
            key={`${slug}-bg-${index}`}
            src={image.image}
            alt={`${titleLine1} background`}
            fill
            priority={index === 0}
            className={`absolute inset-0 object-cover ${getVisibilityClasses(
              image
            )}`}
            sizes={image.sizes}
          />
        ))}

        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.65)_75%)]" /> */}

        {/* Content */}
        <div className="relative z-10 flex max-w-[800px] flex-col items-center gap-6 px-6 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-poppins text-[51px] font-normal leading-[51px] tracking-[-2.55px] text-black md:text-[64px] md:leading-[64px] md:tracking-[-3.2px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px]">
              {titleLine1}
            </h1>
            <h1 className="font-poppins text-[51px] font-normal leading-[51px] tracking-[-2.55px] text-black md:text-[64px] md:leading-[64px] md:tracking-[-3.2px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px]">
              {titleLine2}
            </h1>
          </div>

          {description ? (
            <p className="font-poppins text-base leading-6 text-black/90  md:text-lg md:leading-7">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {/* Next service link row */}
      <div className="flex w-full max-w-[358px] justify-end md:max-w-[736px] lg:max-w-[976px] xl:max-w-[1280px]">
        {nextSlug ? (
          <Link
            href={`/services/${nextSlug}`}
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 font-poppins text-base font-semibold text-racing-green transition hover:translate-x-1 hover:text-racing-green-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-racing-green focus-visible:ring-offset-2"
            aria-label={nextLabel ?? "View the next service"}
          >
            <span>{nextLabel ?? "Next service"}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M4.5 9h9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75 5.25L13.5 9l-3.75 3.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
