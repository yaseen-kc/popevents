import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { VENUES, type Venue } from "@/constants/entities/venues";

function VenueCard({ venue }: { venue: Venue }) {
  const content = (
    <>
      <div className="relative isolate aspect-16/10 w-full overflow-hidden rounded-[16px]">
        <Image
          src={venue.image.src}
          alt={venue.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={venue.id === "exhibition-world-bahrain"}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-poppins text-[22px] font-semibold leading-[28px] tracking-[-0.2px] text-racing-green line-clamp-2">
          {venue.title}
        </h3>
        <span className="font-poppins text-base leading-[22px] text-[#9B9B9B]">
          {venue.upcomingEvents} Top Events
        </span>
      </div>
    </>
  );

  return (
    <Link
      href={`/venues/${venue.id}`}
      className="group flex w-full flex-col gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED]"
      aria-label={venue.title}
    >
      {content}
    </Link>
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
          <div className="flex items-center gap-3">
            <h2 className="font-poppins text-[34px] font-semibold leading-[37px] tracking-[-1.36px] text-[#221327] md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
              Our Venues
            </h2>
            <ChevronRight className="h-6 w-6 text-[#0F0F15]" aria-hidden="true" />
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[28px]">
          {VENUES.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
}

