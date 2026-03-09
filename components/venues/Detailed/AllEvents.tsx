/**
 * AllEvents component - displays all events for a venue
 *
 * @component
 * @example
 * ```tsx
 * <AllEvents events={venueEvents} />
 * ```
 */

// ============================================
// Component Imports
// ============================================
import Image from "next/image";
import type { VenueEvent } from "@/types/venues";

// ============================================
// Type Definitions
// ============================================

interface AllEventsProps {
  /** Array of events to display */
  events: VenueEvent[];
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
          {events.map((event, index) => (
            <div
              key={`event-${index}`}
              className="relative isolate flex min-w-[268px] max-w-[270.39px] flex-none flex-col items-start gap-[3.2px] rounded-2xl border border-black/8 lg:min-w-[296px] lg:max-w-[296px] lg:gap-1"
            >
              {/* Poster Image Section */}
              <div className="relative h-[357px] w-full overflow-hidden rounded-t-2xl lg:h-[420px]">
                <Image
                  src={event.image.src}
                  alt={event.image.alt}
                  fill
                  sizes="(max-width: 768px) 270px, (max-width: 1024px) 270px, 296px"
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Location Badge Overlay */}
                <div className="absolute left-[13px] top-[13px] box-border flex flex-col items-start rounded-[7px] border border-black/10 bg-white px-[11.8px] py-[4.8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                  <span className="font-be-vietnam-pro text-base font-normal leading-6 text-[#131316]">
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Event Details Section */}
              <div className="flex w-full flex-col items-start gap-0.5 px-3 pb-3 pt-3 md:pr-[21.39px] lg:px-3 lg:pr-12">
                {/* Date and Time */}
                <p className="font-be-vietnam-pro text-xs font-medium leading-4 text-[#8B8123]">
                  {event.dateTime}
                </p>

                {/* Event Title */}
                <h3 className="font-be-vietnam-pro text-base font-semibold leading-[22px] tracking-[-0.4px] text-[#131316]">
                  {event.name}
                </h3>

                {/* Artist */}
                <p className="font-be-vietnam-pro text-xs font-medium leading-4 text-[#131316]">
                  {event.artist}
                </p>

                {/* Price */}
                <p className="font-be-vietnam-pro text-xs font-medium leading-4 text-[#545459]">
                  {event.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

