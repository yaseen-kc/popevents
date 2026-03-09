import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VENUES, type Venue } from "@/constants/entities/venues";

function VenueCard(venue: Venue) {
  const content = (
    <>
      <div className="relative isolate aspect-16/10 w-full overflow-hidden rounded-[16px]">
        <Image
          src={venue.image.src}
          alt={venue.image.alt}
          fill
          sizes="(max-width: 768px) 70vw, (max-width: 1440px) 25vw, 260px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={venue.id === "exhibition-world-bahrain"}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-poppins text-[22px] font-semibold leading-[28px] tracking-[-0.2px] text-racing-green line-clamp-2">
          {venue.title}
        </h3>
        {/* <span className="font-poppins text-base leading-[22px] text-[#9B9B9B]">
          {venue.upcomingEvents} Upcoming Events
        </span> */}
      </div>
    </>
  );

  if (venue.id) {
    return (
      <Link
        href={`/venues/${venue.id}`}
        className="group flex w-[240px] shrink-0 flex-col gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED] md:w-full"
        aria-label={venue.title}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className="group flex w-[240px] shrink-0 flex-col gap-3 md:w-full"
      aria-label={venue.title}
    >
      {content}
    </div>
  );
}

export default function Venues({ className = "" }: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center bg-white px-4 py-12 md:px-8 md:py-16 lg:px-[48px] xl:px-[160px] ${className}`}
      id="venues"
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-poppins text-[34px] font-semibold leading-[37px] tracking-[-1.36px] text-racing-green md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
              Venues
            </h2>
            <ArrowRight className="h-5 w-5 text-racing-green" aria-hidden />
          </div>

          <Link
            href="/venues"
            className="flex items-center gap-2 font-poppins text-base font-semibold leading-6 text-[#6E6E81] transition hover:text-racing-green"
          >
            Show all
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-3 xl:grid-cols-4">
            {VENUES.slice(0, 4).map((venue) => (
              <VenueCard key={venue.id} {...venue} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
