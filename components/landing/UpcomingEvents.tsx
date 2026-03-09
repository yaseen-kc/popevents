/**
 * UpcomingEvents component - Upcoming Events section for landing page
 *
 * @component
 * @example
 * ```tsx
 * <UpcomingEvents />
 * ```
 */

"use client";

// ============================================
// Component Imports
// ============================================
import Image from "next/image";
import Link from "next/link";
import { UPCOMING_EVENTS_CONTENT_WITH_DATA } from "@/constants/content/landing";
import type { UpcomingEventsProps } from "@/types/landing";
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
 * Upcoming Events section component featuring heading and event cards
 * with images and event details (date, time, name, location, price).
 *
 * @param props - UpcomingEvents component props
 * @returns Upcoming Events section element
 */
export default function UpcomingEvents({ className = "" }: UpcomingEventsProps) {
  const { language } = useTranslation();
  const content = UPCOMING_EVENTS_CONTENT_WITH_DATA[language];

  const hasEvents = content.events.length > 0;

  if (!hasEvents) {
    return null;
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Upcoming events",
    itemListElement: content.events.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://popevents.com/events/${event.slug}`,
      name: event.name,
    })),
  };

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-24 md:px-8 lg:px-12 ${className}`}
      id="upcoming-events"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-12">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
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
            <Link
              key={`event-${index}`}
              href={`/events/${event.slug}`}
              className="group flex w-full flex-col gap-4 rounded-xl bg-porcelain overflow-hidden transition-transform duration-200 hover:-translate-y-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED]"
              aria-label={event.name}
            >
              {/* Event Image */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={event.image.src}
                  alt={event.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
