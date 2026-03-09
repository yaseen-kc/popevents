"use client";

/**
 * Event tickets hero carousel component
 *
 * @component
 * @example
 * ```tsx
 * <EventHero slides={slides} badge="Exclusive" />
 * ```
 */

// ============================================
// Component Imports
// ============================================
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Share2, Heart } from "lucide-react";
import type { EventHeroProps } from "@/types/event-tickets";

// ============================================
// Component Implementation
// ============================================

/**
 * Event tickets hero carousel with responsive design and navigation controls
 *
 * @param props - Component props
 * @returns Hero carousel section element
 */
export default function EventHero({
  className = "",
  slides,
  badge,
}: EventHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth;
    const scrollPosition = index * cardWidth;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section
      className={`flex flex-col items-center w-full bg-white px-4 py-8 md:px-8 md:py-12 lg:px-12 xl:px-[160px] ${className}`}
      aria-label="Event hero carousel"
    >
      <div className="flex flex-col items-center w-full max-w-[1440px]">
        {/* Carousel Container */}
        <div className="relative flex flex-col items-center w-full isolate">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex flex-row items-start overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth w-full md:w-[688px] lg:w-[900px] xl:w-[1170px]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="relative shrink-0 w-full h-[375px] md:h-[265px] lg:h-[346px] xl:h-[450px] md:w-[688px] lg:w-[900px] xl:w-[1170px] snap-center rounded-[12px] md:rounded-[30px] overflow-hidden isolate"
              >
                {/* Background Image/Video */}
                <div className="absolute inset-0 w-full h-full">
                  {slide.video ? (
                    <video
                      src={slide.video.src}
                      className="w-full h-full object-cover"
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 375px, (max-width: 1024px) 688px, (max-width: 1440px) 900px, 1170px"
                    />
                  )}
                </div>

                {/* Gradient Overlays */}
                {/* <div
                  className="absolute inset-0 rounded-[12px] md:rounded-[30px]"
                  style={{
                    background:
                      "linear-gradient(360deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 25%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 25%)",
                  }}
                /> */}

                {/* Badge - Top Left */}
                {badge && (
                  <div className="absolute left-[20px] top-[12px] md:left-[64px] md:top-[24px] xl:left-[159px] z-1">
                    <div className="flex flex-row justify-center items-center px-[13px] py-[7px] md:px-4 md:py-[9px] bg-[#FFE000] rounded-[28px]">
                      <span
                        className="font-poppins font-semibold text-[13px] leading-[13px] md:text-base md:leading-5 text-[#0F0F15]"
                      >
                        {badge}
                      </span>
                    </div>
                  </div>
                )}

                {/* Share and Heart Buttons - Top Right */}
                <div className="absolute right-[20px] top-[12px] flex flex-row items-start gap-3 z-2">
                  <button
                    type="button"
                    className="flex items-center justify-center w-[30px] h-[30px] bg-white/40 backdrop-blur-xs rounded-[15px] transition hover:bg-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    aria-label="Share event"
                  >
                    <Share2 className="w-[14px] h-[14px] text-white" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center w-[30px] h-[30px] bg-white/40 backdrop-blur-xs rounded-[15px] transition hover:bg-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    aria-label="Save event"
                  >
                    <Heart className="w-[14px] h-[14px] text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Arrows */}
          {/* <div className="hidden lg:block">
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center bg-white rounded-full  transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F0F15] z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-[13px] text-[#0F0F15]" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center bg-white rounded-full  transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F0F15] z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-[13px] text-[#0F0F15]" aria-hidden="true" />
            </button>
          </div> */}

          {/* Mobile Navigation Arrows */}
          {/* <div className="lg:hidden">
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-[30px] h-[30px] flex items-center justify-center bg-white/20 backdrop-blur-[2px] rounded-[15px] transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 text-white" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-[30px] h-[30px] flex items-center justify-center bg-white/20 backdrop-blur-[2px] rounded-[15px] transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
          </div> */}

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex flex-row justify-center items-center gap-2 z-3">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-[2px] rounded-[2px] transition ${
                  index === currentIndex
                    ? "w-4 bg-white"
                    : "w-4 bg-white/60"
                }`}
                aria-label={`Slide ${index + 1} of ${slides.length}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

