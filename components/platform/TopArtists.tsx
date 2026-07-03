"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getArtists, type Artist } from "@/constants/entities/artists";
import { PLATFORM_LABELS } from "@/constants/config/ui";
import { useTranslation } from "@/contexts/TranslationContext";

function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="flex w-[120px] flex-col items-center gap-3 sm:w-[134px] lg:w-[167px]">
      <Link
        href={`/artists/${artist.id}`}
        className="relative block h-[120px] w-[120px] overflow-hidden rounded-full bg-[#E9E9E9] sm:h-[134px] sm:w-[134px] lg:h-[167px] lg:w-[167px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7C3AED]"
        aria-label={artist.name}
      >
        <Image
          src={artist.image.src}
          alt={artist.image.alt}
          fill
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 134px, 167px"
          className="object-cover"
          priority={artist.id === "tyla"}
        />
      </Link>

      <div className="flex w-full flex-col items-center gap-1">
        <span className="text-center font-poppins text-[18px] font-semibold leading-[22px] text-[#0F0F15] sm:text-[18px] sm:leading-[22px] lg:text-[18px]">
          {artist.name}
        </span>
        {/* <span className="text-center font-poppins text-[14px] leading-[17px] text-[#9B9B9B]">
          {artist.followers}
        </span> */}
      </div>
    </div>
  );
}

export default function TopArtists({ className = "" }: { className?: string }) {
  const { language } = useTranslation();
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    let active = true;
    async function load() {
      const data = await getArtists(language);
      if (active) {
        setArtists(data);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [language]);

  if (artists.length === 0) {
    return null;
  }

  const labels = PLATFORM_LABELS[language];

  return (
    <section
      className={`flex flex-col items-center bg-white px-4 py-12 md:px-8 md:py-16 lg:px-[48px] xl:px-[160px] ${className}`}
      id="top-artists"
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-poppins text-[34px] font-semibold leading-[37px] tracking-[-1.36px] text-[#221327] md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
              {labels.popularArtists}
            </h2>
            <ChevronRight className="h-6 w-6 text-[#0F0F15]" aria-hidden="true" />
          </div>

          <Link
            href="/artists"
            className="hidden items-center gap-1 font-poppins text-base font-semibold leading-6 text-[#6E6E81] transition hover:opacity-80 md:inline-flex"
            aria-label="Show all popular artists"
          >
            {labels.showAll}
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex w-full gap-6 overflow-x-auto pb-2 sm:gap-8 md:gap-10 lg:gap-[28px]">
          {artists.slice(0, 4).map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
