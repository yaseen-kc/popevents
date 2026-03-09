/**
 * PastEvents component - Past Events section for landing page
 *
 * @component
 * @example
 * ```tsx
 * <PastEvents />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import Image from "next/image";
import { PREVIOUS_EVENTS_CONTENT_WITH_DATA as PREVIOUS_EVENTS_CONTENT } from "@/constants/content/landing";
import type { PastEventsProps } from "@/types/landing";
import { useTranslation } from "@/contexts/TranslationContext";

/**
 * Responsive sizes descriptor for event card imagery.
 * Cards are full-width on mobile and approximately 1/4 width on large screens.
 */
const EVENT_CARD_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 300px";

// ============================================
// Component Implementation
// ============================================

/**
 * Past Events section component featuring heading and event cards
 * with images and event details (date, time, name, location, price).
 *
 * @param props - PastEvents component props
 * @returns Past Events section element
 */
export default function PastEvents({
  className = "",
}: PastEventsProps) {
  const { language } = useTranslation();
  const content = PREVIOUS_EVENTS_CONTENT[language];

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-24 md:px-8 lg:px-12 ${className}`}
      id="previous-events"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-12">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Eyebrow badge */}
          <div className="rounded-full bg-porcelain px-4 py-1.5">
            <span className="font-poppins text-sm leading-[21px] text-corduroy">
              {content.badgeLabel}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-[34px] font-normal leading-[37px] tracking-[-1.36px] text-racing-green md:text-[40px] md:leading-[44px] md:tracking-[-1.6px] lg:text-[48px] lg:leading-[53px] lg:tracking-[-1.92px]">
            {content.heading}
          </h2>

          {/* Description */}
          <p className="font-poppins text-base leading-6 text-corduroy max-w-[600px]">
            {content.description}
          </p>
        </div>

        {/* Events Cards Grid */}
        <div className="flex w-full flex-col gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6">
          {content.events.map((event, index) => (
            <div
              key={`event-${index}`}
              className="flex w-full flex-col gap-4 rounded-xl bg-porcelain overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={event.image.src}
                  alt={event.image.alt}
                  fill
                  className="object-cover"
                  sizes={EVENT_CARD_IMAGE_SIZES}
                />
              </div>

              {/* Event Details */}
              <div className="flex flex-col gap-2 px-3 pb-3">
                {/* Date & Time */}
                <p className="font-poppins text-sm leading-[21px] text-corduroy">
                  {event.dateTime}
                </p>

                {/* Event Name */}
                <h3 className="font-poppins text-[22px] font-normal leading-[26px] tracking-[-0.44px] text-racing-green md:text-2xl md:leading-[29px] md:tracking-[-0.48px] line-clamp-2">
                  {event.name}
                </h3>

                {/* Location */}
                <p className="font-poppins text-sm leading-[21px] text-corduroy line-clamp-1">
                  {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
