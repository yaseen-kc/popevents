/**
 * Hero component - Main hero section for landing page
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

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/ui/Button";
import { HERO_CONTENT, HERO_IMAGES, HERO_BACKGROUND_IMAGE } from "@/constants/content/landing";
import type { HeroProps } from "@/types/landing";
import { useTranslation } from "@/contexts/TranslationContext";

/**
 * Shared responsive sizes map for hero gallery images.
 * Mirrors the fixed widths applied at each breakpoint to keep downloads lean.
 */
const HERO_IMAGE_SIZES =
  "(max-width: 600px) 50vw, (max-width: 1024px) 25vw, (max-width: 1600px) 20vw, 382px";

// ============================================
// Component Implementation
// ============================================

/**
 * Hero section component with scarcity badge, headline, description, CTA, and image grid
 *
 * @param props - Hero component props
 * @returns Hero section element
 */
export default function Hero({ className = "" }: HeroProps) {
  const { language } = useTranslation();
  const content = HERO_CONTENT[language];

  return (
    <section
      className={`relative flex min-h-fit flex-col items-center justify-center overflow-hidden pt-8 md:pt-12 lg:pt-16 2xl:pt-40 pb-8 md:pb-12 lg:pb-16 2xl:pb-20 ${className}`}
      id="hero"
    >
      {/* Background Image */}
      <Image
        src={HERO_BACKGROUND_IMAGE.src}
        alt={HERO_BACKGROUND_IMAGE.alt}
        fill
        priority
        className="absolute inset-0 object-cover z-0"
        sizes="100vw"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-white/80 z-10" />

      {/* Container */}
      <div className="relative z-20 flex w-full max-w-[1280px] 2xl:max-w-[1400px] flex-col items-center justify-center px-4 pb-8 md:px-12 md:pb-12 lg:px-[48px] lg:pb-16 xl:px-[160px] 2xl:px-[200px] 2xl:pb-20">
        {/* Content */}
        <div className="flex w-full max-w-[800px] 2xl:max-w-[900px] flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16 2xl:gap-20">
            {/* Heading Section */}
            <div className="flex w-full flex-col items-center justify-center gap-6">
            {/* Scarcity Badge */}
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center justify-center gap-[6px] rounded-[32px] bg-porcelain py-[6px] px-[10px] pr-4 w-[194px] h-[33px]">
                {/* Pulsing Dot */}
                <div className="flex flex-col items-start w-[18px] h-[18px]">
                  <div className="relative flex flex-row items-center justify-center w-[18px] h-[18px] isolate">
                    {/* Outer */}
                    <div className="absolute w-[10.62px] h-[10.62px] rounded-[5.31px] bg-corduroy opacity-75 pulse-dot z-0"></div>
                    {/* Center */}
                    <div className="absolute w-[6px] left-[calc(50%-6px/2)] top-[33.33%] rounded-[3px] bg-racing-green z-10"></div>
                  </div>
                </div>
                {/* Badge Text */}
                <div className="flex flex-col items-start w-[144px] h-[21px]">
                  <span className="font-poppins text-sm leading-[21px] text-corduroy flex items-center">
                    {content.badgeText}
                  </span>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="flex w-full flex-col items-center justify-center gap-6">
              {/* Heading */}
              <h1 className="font-poppins text-center text-[51px] font-normal leading-[51px] tracking-[-2.55px] text-racing-green md:text-[64px] md:leading-[64px] md:tracking-[-3.2px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px] 2xl:text-[96px] 2xl:leading-[96px] 2xl:tracking-[-4.8px]">
                <span className="block">{content.headlineLine1}</span>
                <span className="block">{content.headlineLine2}</span>
              </h1>

              {/* Description */}
              <div className="flex w-full max-w-[620px] 2xl:max-w-[700px] flex-col items-center">
                <p className="font-poppins text-center text-base leading-6 text-corduroy 2xl:text-lg 2xl:leading-7">
                  {content.description}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex w-full items-center justify-center">
              <Link
                href={content.ctaLink}
                target=""
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="primary" size="md">
                  {content.ctaText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Section - Image Grid */}
          {/* <div className="flex w-full flex-col items-center justify-center"> */}
            {/* Desktop Large (1920w+): Horizontal Row - 4 images */}
            {/* <div className="hidden w-full max-w-[1600px] items-center justify-center gap-6 rounded-[20px] p-0 2xl:flex 2xl:h-[509.33px] 2xl:w-[1600px]">
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[509.33px] w-[382px] flex-none grow overflow-hidden rounded-[20px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-[20px]"
                    priority={index < 2}
                    sizes={HERO_IMAGE_SIZES}
                  />
                </div>
              ))}
            </div> */}

            {/* Desktop (1440w): Horizontal Row - 4 images */}
            {/* <div className="hidden w-full max-w-[1344px] items-center justify-center gap-6 rounded-[20px] xl:flex xl:h-[424px] xl:w-[1344px] 2xl:hidden">
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[424px] w-[318px] shrink-0 overflow-hidden rounded-[20px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 2}
                    sizes={HERO_IMAGE_SIZES}
                  />
                </div>
              ))}
            </div> */}

            {/* Tablet Landscape (1024w): Horizontal Row - 4 images */}
            {/* <div className="hidden w-full max-w-[960px] items-center justify-center gap-4 rounded-[20px] lg:flex lg:h-[304px] lg:w-[960px] xl:hidden">
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[304px] w-[228px] shrink-0 overflow-hidden rounded-[20px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 2}
                    sizes={HERO_IMAGE_SIZES}
                  />
                </div>
              ))}
            </div> */}

            {/* Tablet Portrait (768w): 2x2 Grid */}
            {/* <div className="hidden w-full max-w-[600px] grid-cols-2 gap-3 rounded-[20px] md:grid md:h-[797.31px] md:w-[600px] lg:hidden">
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[394.66px] w-[296px] overflow-hidden rounded-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 2}
                    sizes={HERO_IMAGE_SIZES}
                  />
                </div>
              ))}
            </div> */}

            {/* Mobile (390w): 2x2 Grid */}
            {/* <div className="relative h-[474.66px] w-[358px] max-w-[600px] rounded-[20px] md:hidden">
              {HERO_IMAGES.map((image, index) => {
                // Position mapping based on CSS reference
                const positionClasses =
                  index === 0
                    ? "left-0 right-[183px] top-0" // Top-left
                    : index === 1
                    ? "left-[183px] right-0 top-0" // Top-right
                    : index === 2
                    ? "left-0 right-[183px] top-[241.33px]" // Bottom-left
                    : "left-[183px] right-0 top-[241.33px]"; // Bottom-right

                return (
                  <div
                    key={index}
                    className={`absolute h-[233.33px] ${positionClasses} overflow-hidden rounded-xl`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-xl"
                      priority={index < 2}
                      sizes={HERO_IMAGE_SIZES}
                    />
                  </div>
                );
              })}
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
