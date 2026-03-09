import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";
import { EVENTS, STATUS_CLASSES, type TopEvent } from "@/constants/entities/events";

function EventCard({ event }: { event: TopEvent }) {
  return (
    <div className="flex w-full flex-col gap-3">
      <Link
        href="#"
        className="relative block h-[180px] w-full overflow-hidden rounded-[12px] bg-[#E9E9E9] sm:h-[200px] lg:h-[220px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED]"
        aria-label={event.title}
      >
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={event.id === "majid-al-mohandis"}
        />
        {/* {event.badge && (
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-[6px] text-xs font-semibold ${
              event.badge === "Exclusive" 
                ? "bg-[#7C3AED] text-white" 
                : "bg-[#155EEF] text-white"
            }`}>
              {event.badge}
            </span>
          </div>
        )} */}
      </Link>

      <div className="flex w-full flex-col gap-2">
        <h3 className="font-poppins text-[18px] font-semibold leading-[22px] text-[#0F0F15] line-clamp-2">
          {event.title}
        </h3>
        
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-1">
            <Calendar className="w-4 h-4 text-[#9B9B9B]" aria-hidden="true" />
            <span className="font-poppins text-[14px] leading-[17px] text-[#9B9B9B]">
              {event.dateRange}
            </span>
          </div>
          
          <div className="flex flex-row items-center justify-between">
            <span className="font-poppins text-[16px] font-semibold leading-[20px] text-racing-green">
              {event.price}
            </span>
            {event.rating && (
              <span className="font-poppins text-[14px] leading-[17px] text-[#9B9B9B]">
                ⭐ {event.rating}
              </span>
            )}
          </div>
          
          {/* {event.status && (
            <span className={`font-poppins text-[14px] leading-[17px] ${STATUS_CLASSES[event.status.tone]}`}>
              {event.status.label}
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default function Events({ className = "" }: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center bg-white px-4 py-12 md:px-8 md:py-16 lg:px-[48px] xl:px-[160px] ${className}`}
      id="events"
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-poppins text-[34px] font-semibold leading-[37px] tracking-[-1.36px] text-[#221327] md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
              Our Events
            </h2>
            <ChevronRight className="h-6 w-6 text-[#0F0F15]" aria-hidden="true" />
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[28px]">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

