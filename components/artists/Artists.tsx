import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ARTISTS, type Artist } from "@/constants/entities/artists";

function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
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

export default function Artists({ className = "" }: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center bg-white px-4 py-12 md:px-8 md:py-16 lg:px-[48px] xl:px-[160px] ${className}`}
      id="artists"
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-poppins text-[34px] font-semibold leading-[37px] tracking-[-1.36px] text-[#221327] md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
              Our Artists
            </h2>
            <ChevronRight className="h-6 w-6 text-[#0F0F15]" aria-hidden="true" />
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-[28px]">
          {ARTISTS.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
