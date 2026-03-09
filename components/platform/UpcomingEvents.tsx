import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { IN_PROGRESS_EVENTS, STATUS_CLASSES, type TopEvent, type UpcomingEventstatus } from "@/constants/entities/events";

function EventCard(event: TopEvent) {
  const statusTone =
    event.status?.tone && STATUS_CLASSES[event.status.tone]
      ? STATUS_CLASSES[event.status.tone]
      : STATUS_CLASSES.primary;

  return (
    <Link
      href={`/events/${event.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-porcelain transition-transform duration-200 hover:-translate-y-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED]"
      aria-label={event.title}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-xl">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* {event.badge && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-[#FFE066] px-3 py-1 text-sm font-semibold leading-[18px] text-[#3D2C00] shadow-sm">
            {event.badge}
          </span>
        )} */}

        {event.rating && (
          <span className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold leading-[18px] text-[#16A34A] shadow-sm">
            {event.rating}
          </span>
        )}

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
          {event.title}
        </h3>

        <div className="flex flex-col gap-1">
          <div className="font-poppins text-sm font-semibold leading-[21px] text-corduroy">
            {event.price}
          </div>

          {/* {event.status ? (
            <span
              className={`font-poppins text-sm font-semibold leading-[20px] ${statusTone}`}
            >
              {event.status.label}
            </span>
          ) : null} */}
        </div>

        <span className="font-poppins text-sm leading-[21px] text-corduroy">
          {event.dateRange}
        </span>
      </div>
    </Link>
  );
}

export default function UpcomingEvents({ className = "" }: { className?: string }) {
  const hasEvents = IN_PROGRESS_EVENTS.length > 0;

  if (!hasEvents) {
    return null;
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured upcoming events",
    itemListElement: IN_PROGRESS_EVENTS.slice(0, 4).map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://popevents.com/events/${event.id}`,
      name: event.title,
    })),
  };

  return (
    <section
      className={`flex flex-col items-center bg-white px-4 py-12 md:px-8 md:py-16 lg:px-[48px] xl:px-[160px] ${className}`}
      id="upcoming-events"
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-8">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-poppins text-[34px] font-semibold leading-[37px] tracking-[-1.36px] text-racing-green md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
              Upcoming Events
            </h2>
          </div>

          <Link
            href="/events"
            className="font-poppins text-base font-semibold leading-6 text-racing-green transition hover:opacity-80"
          >
            Show all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {IN_PROGRESS_EVENTS.slice(0, 4).map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
