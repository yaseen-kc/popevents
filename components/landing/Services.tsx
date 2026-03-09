/**
 * Services component - Services section for landing page
 *
 * @component
 * @example
 * ```tsx
 * <Services />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES_CONTENT } from "@/constants/content/landing";
import type { ServicesProps } from "@/types/landing";
import { useTranslation } from "@/contexts/TranslationContext";

/**
 * Responsive sizes descriptor for service card imagery.
 * Cards are full-width on mobile/tablet and 608px wide on large screens.
 */
const SERVICE_CARD_IMAGE_SIZES =
  "(max-width: 1024px) 100vw, (max-width: 1280px) 75vw, 608px";

// ============================================
// Component Implementation
// ============================================

/**
 * Services section component featuring eyebrow badge, heading, description,
 * and three service cards with images.
 *
 * @param props - Services component props
 * @returns Services section element
 */
export default function Services({ className = "" }: ServicesProps) {
  const { language } = useTranslation();
  const content = SERVICES_CONTENT[language];

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-12 md:px-4 lg:px-12 ${className}`}
      id="services"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:gap-16">
        {/* Content Section - Left Side */}
        <div className="flex w-full flex-col items-start gap-6 lg:sticky lg:top-16 lg:self-start lg:pt-12 lg:w-[608px]">
          {/* Eyebrow badge */}
          <div className="rounded-full bg-porcelain px-4 py-1.5">
            <span className="font-poppins text-sm leading-[21px] text-corduroy">
              {content.badgeLabel}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-[34px] font-normal leading-[37px] tracking-[-1.36px] text-racing-green md:text-[48px] md:leading-[53px] md:tracking-[-1.92px]">
            {content.heading}
          </h2>

          {/* Description */}
          <p className="font-poppins text-base leading-6 text-corduroy">
            {content.description}
          </p>
        </div>

        {/* Services Cards Section - Right Side */}
        <div className="flex w-full flex-col gap-12 lg:w-[608px]">
          {content.services.map((service, index) => (
            <Link
              key={`service-${index}`}
              href="/platform"
              className="group flex flex-col gap-5 rounded-2xl transition duration-200 hover:-translate-y-1 hover:bg-light-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-racing-green focus-visible:ring-offset-4"
              aria-label={`View upcoming events related to ${service.title}`}
            >
              {/* Service Image */}
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px] lg:h-[467.69px]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes={SERVICE_CARD_IMAGE_SIZES}
                />
              </div>

              {/* Service Content */}
              <div className="flex flex-col gap-2 pr-6">
                {/* Service Heading */}
                <h3 className="font-poppins text-[28px] font-normal leading-[34px] tracking-[-0.56px] text-racing-green md:text-[32px] md:leading-[38px] md:tracking-[-0.64px]">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="font-poppins text-base leading-6 text-corduroy">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
