"use client";

/**
 * Event information section for the event tickets page
 *
 * @component
 */

import { Calendar, MapPin } from "lucide-react";
import type { EventInfoProps } from "@/types/event-tickets";

export default function EventInfo({
  className = "",
  title,
  shortDescription,
  location,
  locationUrl,
  ticketUrl,
  date,
  description,
  priceFrom,
  isCompleted = false,
}: EventInfoProps) {
  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-8 md:px-8 md:py-12 lg:px-12 xl:px-[160px] ${className}`}
    >
      <div className="relative flex w-full max-w-[1440px] flex-col gap-6  md:flex-row md:items-start md:justify-between md:gap-10 md:pb-0 lg:gap-14 xl:gap-16">
        {/* Event Details */}
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          <h1 className="font-poppins text-[48px] font-bold leading-[52px] tracking-[-1.2px] text-[#0F0F15] md:text-[56px] md:leading-[60px] md:tracking-[-1.4px] lg:text-[64px] lg:leading-[68px] lg:tracking-[-1.6px]">
            {title}
          </h1>

          <p className="font-poppins text-base leading-6 text-[#0F0F15] md:max-w-[640px] md:text-lg md:leading-7">
            {shortDescription}
          </p>

          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex flex-row items-center gap-2">
              <MapPin
                aria-hidden="true"
                className="h-4 w-4 text-[#0F0F15] md:text-[#1A56FF]"
                strokeWidth={1.5}
              />
              {locationUrl ? (
                <a
                  href={locationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-poppins text-base leading-6 text-[#0F0F15] transition hover:underline md:text-[#1A56FF]"
                >
                  {location}
                </a>
              ) : (
                <span className="font-poppins text-base leading-6 text-[#0F0F15] md:text-[#1A56FF]">
                  {location}
                </span>
              )}
            </div>

            <div className="flex flex-row items-center gap-2">
              <Calendar
                aria-hidden="true"
                className="h-4 w-4 text-[#0F0F15]"
                strokeWidth={1.5}
              />
              <span className="font-poppins text-base leading-6 text-[#0F0F15]">
                {date}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            {description.map((paragraph, index) => (
              <p
                key={`${title}-paragraph-${index}`}
                className="font-poppins text-base leading-6 text-[#0F0F15] md:text-lg md:leading-7"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Booking Card */}
        {!isCompleted && (
          <div className=" md:static md:translate-y-0 md:w-[260px] md:max-w-[360px] lg:w-[320px] xl:w-[360px]">
            <div className="fixed bottom-0 left-0 right-0 z-20 md:static md:px-0 md:pb-0">
              <div className="flex flex-row items-center justify-between gap-[37.4px] rounded-none  bg-white/80 py-3 pl-5 pr-3 shadow-[0_-3px_6px_rgba(0,0,0,0.04)] backdrop-blur-[5px] md:flex-col md:gap-4 md:rounded-[12px] md:bg-white md:p-6 md:shadow-[0px_2px_4px_rgba(0,0,0,0.04),0px_0px_4px_rgba(0,0,0,0.06)]">
                <div className="hidden md:flex md:flex-row md:items-center md:gap-2 md:border-b md:border-[#E5E7EB] md:pb-4 md:w-full">
                  <Calendar
                    aria-hidden="true"
                    className="h-4 w-4 text-[#221327]"
                    strokeWidth={1.5}
                  />
                  <span className="font-poppins text-base leading-6 text-[#0F0F15]">
                    {date}
                  </span>
                </div>

                <div className="flex flex-col gap-[2px]">
                  <span className="font-poppins text-xl leading-5 text-[#6E6E81] md:text-base md:leading-6">
                    Price from:
                  </span>
                  <span className="font-poppins text-xl font-semibold leading-7 text-[#0F0F15] md:text-2xl md:leading-8">
                    {priceFrom}
                  </span>
                </div>

                <button
                  type="button"
                  className="h-[43.6px] rounded-[8px] border border-[#0F0F15] bg-[#221327] px-[17.8px] py-[9.8px] text-center font-poppins text-base font-semibold leading-6 text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#221327] md:w-full md:px-6 md:py-3"
                  onClick={() => {
                    if (!ticketUrl) return;
                    window.open(ticketUrl, "_blank", "noopener,noreferrer");
                  }}
                  disabled={!ticketUrl}
                >
                  Select tickets
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

