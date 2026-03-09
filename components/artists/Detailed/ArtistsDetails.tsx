/**
 * Artist detail component - displays artist portrait and biography
 *
 * @component
 * @example
 * ```tsx
 * <ArtistsDetails name="carl-cox" />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getArtistDetailById } from "@/constants/entities/artists";
import { useTranslation } from "@/contexts/TranslationContext";
import AllEvents from "./AllEvents";
import type { ArtistDetail } from "@/types/artists";

// ============================================
// Type Definitions
// ============================================

interface ArtistsDetailsProps {
  /** Artist ID/slug to display details for */
  name: string;
}

// ============================================
// Component Implementation
// ============================================

/**
 * Artist details component displaying portrait image and biography
 *
 * @param props - Component props
 * @returns Artist details section element
 */
export default function ArtistsDetails({ name }: ArtistsDetailsProps) {
  const { language } = useTranslation();
  const [artistDetail, setArtistDetail] = useState<ArtistDetail | null>(null);

  useEffect(() => {
    async function loadArtistDetail() {
      const detail = await getArtistDetailById(name, language);
      setArtistDetail(detail);
    }
    loadArtistDetail();
  }, [name, language]);

  if (!artistDetail) {
    return null;
  }

  const { name: artistName, biography, image, events } = artistDetail;

  return (
    <>
      <section className="flex w-full justify-center bg-white px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <div className="flex w-full max-w-[984px] flex-col items-start gap-[65px] md:flex-row lg:max-w-[1244px]">
          {/* Image Container */}
          <div className="relative h-[527px] w-full shrink-0 overflow-hidden rounded-[13.86px] md:w-[527px] md:min-w-[527px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 527px"
              className="object-cover"
              priority
            />
          </div>

          {/* Text Container */}
          <div className="flex w-full flex-col items-start gap-[26px] pt-[14px] md:w-[389px] md:flex-none lg:w-[647px]">
            {/* Title */}
            <h1 className="font-be-vietnam-pro text-[28px] font-bold leading-[34px] tracking-[-0.84px] text-[#131316]">
              {artistName}
            </h1>

            {/* Biography */}
            <p className="font-be-vietnam-pro text-base font-normal leading-6 text-[#545459]">
              {biography}
            </p>
          </div>
        </div>
      </section>

      {/* All Events Section */}
      {events && events.length > 0 && (
        <section className="flex w-full justify-center bg-white pb-16 md:pb-20 lg:pb-24">
          <div className="w-full max-w-[390.4px] md:max-w-[728px] lg:max-w-[984px] xl:max-w-[1244px] px-4 md:px-0">
            <AllEvents events={events} />
          </div>
        </section>
      )}
    </>
  );
}

