"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPastTopEvents, type TopEvent } from "@/constants/entities/events";
import { PLATFORM_LABELS } from "@/constants/config/ui";
import { useTranslation } from "@/contexts/TranslationContext";

/**
 * Responsive sizes descriptor for event card imagery.
 * Cards are full-width on mobile and approximately 1/4 width on large screens.
 */
const EVENT_CARD_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 300px";

function EventCard(event: TopEvent) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="flex h-full flex-col gap-4 rounded-xl bg-porcelain overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED]"
      aria-label={event.title}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-xl">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes={EVENT_CARD_IMAGE_SIZES}
          className="object-cover"
          priority={event.id === "majid-al-mohandis"}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 px-3 pb-3">
        <h3 className="font-poppins text-[22px] font-normal leading-[26px] tracking-[-0.44px] text-racing-green md:text-2xl md:leading-[29px] md:tracking-[-0.48px] line-clamp-2">
          {event.title}
        </h3>

        {/* <div className="flex flex-col gap-1">
          <div className="font-poppins text-base font-semibold leading-[22px] text-racing-green">
            {event.price}
          </div>
        </div> */}

        <span className="font-poppins text-sm leading-[20px] text-corduroy">
          {event.dateRange}
        </span>
      </div>
    </Link>
  );
}

export default function PastEvents({
  className = "",
}: {
  className?: string;
}) {
  const { language } = useTranslation();
  const [events, setEvents] = useState<TopEvent[]>([]);

  useEffect(() => {
    let active = true;
    async function load() {
      const data = await getPastTopEvents(language);
      if (active) {
        setEvents(data);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [language]);

  if (events.length === 0) {
    return null;
  }

  const labels = PLATFORM_LABELS[language];

  return (
    <section
      className={`flex flex-col items-center bg-white px-4 py-12 md:px-8 md:py-16 lg:px-[48px] xl:px-[160px] ${className}`}
      id="previous-events"
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-poppins text-[34px] font-semibold leading-[37px] tracking-[-1.36px] text-racing-green md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
              {labels.pastEvents}
            </h2>
          </div>

          <Link
            href="/events"
            className="font-poppins text-base font-semibold leading-6 text-racing-green transition hover:opacity-80"
          >
            {labels.showAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {events.slice(0, 4).map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
