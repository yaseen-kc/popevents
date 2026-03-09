/**
 * AllEvents component - displays all events for an artist
 *
 * @component
 * @example
 * ```tsx
 * <AllEvents events={artistEvents} />
 * ```
 */

// ============================================
// Component Imports
// ============================================
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { ArtistEvent } from "@/types/artists";

// ============================================
// Type Definitions
// ============================================

interface AllEventsProps {
  /** Array of events to display */
  events: ArtistEvent[];
}

// ============================================
// Component Implementation
// ============================================

/**
 * AllEvents component displaying a horizontal scrollable list of event cards
 *
 * @param props - Component props
 * @returns AllEvents section element
 */
export default function AllEvents({ events }: AllEventsProps) {
  // Don't render if no events
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className="flex w-full flex-col items-start gap-6">
      {/* Header Section */}
      <div className="flex w-full flex-row items-center gap-4 px-4 md:px-0">
        {/* ALL EVENTS Title */}
        <h2 className="font-be-vietnam-pro text-lg font-medium uppercase leading-[23px] tracking-[1.5px] text-black">
          ALL EVENTS
        </h2>

        {/* Horizontal Divider */}
        <div className="h-px flex-1 bg-[#EAEAEB]" />
      </div>

      {/* Scrollable Events Container */}
      <div className="flex w-full flex-row items-start overflow-x-scroll pl-[11.8px] pr-[108.85px] md:pr-[446.45px] lg:pl-0 lg:pr-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex flex-row gap-4">
          {events.map((event, index) => {
            // Generate a slug from event name for the href
            const eventSlug = event.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
            
            return (
              <Link
                key={`event-${index}`}
                href={`/events/${eventSlug}`}
                className="group flex h-full min-w-[268px] max-w-[270.39px] flex-none flex-col overflow-hidden rounded-xl bg-porcelain transition-transform duration-200 hover:-translate-y-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED] lg:min-w-[296px] lg:max-w-[296px]"
                aria-label={event.name}
              >
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={event.image.src}
                    alt={event.image.alt}
                    fill
                    sizes="(max-width: 768px) 270px, (max-width: 1024px) 270px, 296px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    priority={index === 0}
                  />

                  <button
                    type="button"
                    aria-label="Save event"
                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 backdrop-blur transition hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                  >
                    <Heart className="h-5 w-5 text-white" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex flex-1 flex-col gap-2 px-3 pb-3 pt-3">
                  <h3 className="font-poppins text-[22px] font-normal leading-[26px] tracking-[-0.44px] text-racing-green md:text-2xl md:leading-[29px] md:tracking-[-0.48px] line-clamp-2">
                    {event.name}
                  </h3>

                  <div className="flex flex-col gap-1">
                    <div className="font-poppins text-sm font-semibold leading-[21px] text-corduroy">
                      {event.price}
                    </div>
                  </div>

                  <span className="font-poppins text-sm leading-[21px] text-corduroy">
                    {event.dateTime}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

