"use client";

/**
 * How to get there component for event tickets page
 *
 * @component
 */

// ============================================
// Component Imports
// ============================================
import { useState } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { HowToGetThereProps } from "@/types/event-tickets";

// ============================================
// Component Implementation
// ============================================

/**
 * How to get there section component displaying directions and location information
 *
 * @param props - HowToGetThere component props
 * @returns How to get there section element
 */
export default function HowToGetThere({
  className = "",
  venueName,
  venueAddress,
  directionsUrl,
  mapEmbedUrl,
  byCarInstructions,
  byTaxiInstructions,
  isCompleted = false,
}: HowToGetThereProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-8 md:px-8 md:py-12 lg:px-12 xl:px-[160px] ${className}`}
    >
      <div className="flex w-full max-w-[1440px] flex-col items-start">
        {/* How to get there section */}
        <div className="flex w-full max-w-[350px] flex-col md:w-[405.91px] md:max-w-[405.91px] lg:w-[531px] lg:max-w-[531px] xl:w-[690.3px] xl:max-w-[690.3px]">
          {/* Collapsible button */}
          <button
            type="button"
            onClick={toggleExpanded}
            className="flex w-full items-center justify-between gap-2 text-left transition-colors hover:opacity-80"
            aria-expanded={isExpanded}
            aria-controls="how-to-get-there-content"
          >
            <h2 className="flex items-center font-poppins text-[28px] font-bold leading-[34px] tracking-[-0.84px] text-[#0F0F15] md:text-[36px] md:leading-[43px] md:tracking-[-1.08px]">
              How to get there
            </h2>
            <ChevronDownIcon
              className={`h-6 w-6 shrink-0 text-[#0F0F15] transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {/* Collapsible content */}
          <div
            id="how-to-get-there-content"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
            aria-hidden={!isExpanded}
          >
            <div className="flex flex-col items-start gap-0 pb-6 pt-4 md:gap-0 md:pb-6 md:pt-4 lg:pb-6 lg:pt-4">
              <div className="flex flex-col items-start gap-[17.4px] md:gap-[16.9px]">
                {/* By car instructions */}
                <div className="flex flex-col items-start">
                  <p className="font-poppins text-base leading-6 text-[#0F0F15] md:text-lg md:leading-7">
                    By car: {byCarInstructions}
                  </p>
                </div>

                {/* By taxi instructions */}
                <div className="flex flex-col items-start">
                  <p className="font-poppins text-base leading-6 text-[#0F0F15] md:text-lg md:leading-7">
                    By taxi: {byTaxiInstructions}
                  </p>
                </div>

                {/* Horizontal Divider */}
                <div className="h-[0.8px] w-full bg-[#E5E7EB]" />
              </div>
            </div>
          </div>
        </div>

        {/* Location section */}
        <div className="mt-10 flex w-full max-w-[350px] flex-col gap-4 md:mt-8 md:w-[405.91px] md:max-w-[405.91px] lg:w-[531px] lg:max-w-[531px] xl:w-[690.3px] xl:max-w-[690.3px]">
          {/* Location heading */}
          <h2 className="font-poppins text-[28px] font-bold leading-[34px] tracking-[-0.84px] text-[#0F0F15] md:text-[36px] md:leading-[43px] md:tracking-[-1.08px]">
            Location
          </h2>

          {/* Location card and map container */}
          <div className="flex flex-col items-start gap-4">
            {/* Location card */}
            {!isCompleted && (
              <div className="flex w-full max-w-[350.4px] flex-row items-center gap-4 rounded-[12px] bg-[#F5F5F8] p-px md:max-w-[405.91px] lg:max-w-[531px] xl:max-w-[690.3px]">
                {/* Icon card */}
                <div className="relative flex h-[100px] w-[96px] shrink-0 flex-col items-center justify-center rounded-[12px] bg-white shadow-[0px_2px_5px_rgba(131,23,151,0.04),0px_0px_2px_rgba(131,23,151,0.16)] md:h-[104px] lg:h-[87px]">
                  {/* Icon */}
                  <div className="absolute left-1/2 top-[calc(50%-37.4px/2-17px)] flex h-6 w-6 -translate-x-1/2 items-center justify-center lg:top-[calc(50%-37.4px/2-16.8px)]">
                    <MapPin
                      className="h-6 w-6 text-[#0F0F15]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  {/* Venue label */}
                  <div className="absolute left-1/2 top-[calc(50%-18.6px/2+10.4px)] -translate-x-1/2 lg:top-[calc(50%-18.6px/2+10.6px)]">
                    <span className="font-poppins text-sm font-semibold leading-[18px] text-[#0F0F15]">
                      Venue
                    </span>
                  </div>
                  {/* location label */}
                  <div className="absolute left-1/2 top-[calc(50%-16px/2+27.7px)] -translate-x-1/2 lg:top-[calc(50%-16px/2+27.9px)]">
                    <span className="font-poppins text-xs font-normal leading-4 text-[#6E6E81]">
                      location
                    </span>
                  </div>
                </div>

                {/* Venue details */}
                <div className="flex w-[236.4px] flex-col items-start gap-2 py-2 pl-0 pr-2 md:w-[291.91px] md:gap-2 md:py-[10px] md:pr-[10px] lg:w-[382px]">
                  {/* Venue name */}
                  <div className="flex flex-col items-start">
                    <span className="font-poppins text-base font-semibold leading-[17px] text-[#0F0F15]">
                      {venueName}
                    </span>
                  </div>

                  {/* Venue address */}
                  <div className="flex flex-col items-start">
                    <span className="font-poppins text-sm font-normal leading-[17px] text-[#0F0F15]">
                      {venueAddress}
                    </span>
                  </div>

                  {/* View directions link */}
                  {directionsUrl && (
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center gap-0"
                    >
                      <span className="font-poppins text-sm font-normal leading-[17px] text-[#0F0F15]">
                        View directions
                      </span>
                      <ChevronRight
                        className="h-4 w-4 text-[#0F0F15]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Google Maps embed */}
            {mapEmbedUrl && mapEmbedUrl.trim() !== "" && (
              <div className="w-full overflow-hidden rounded-[12px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="131.4"
                  className="h-[131.4px] w-full border-0 md:h-[240px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${venueName}`}
                />
              </div>
            )}
          </div>

          {/* Horizontal Divider */}
          <div className="h-[0.8px] w-full bg-[#E5E7EB]" />
        </div>
      </div>
    </section>
  );
}

