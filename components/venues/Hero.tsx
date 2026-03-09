"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Calendar, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { HERO_EVENTS, type HeroEvent } from "@/constants/entities/events";
import { useTranslation } from "@/contexts/TranslationContext";

type HeroProps = {
  className?: string;
};

export default function Hero({ className = "" }: HeroProps) {
  const { language } = useTranslation();
  const heroEvents = HERO_EVENTS[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
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
    const newIndex = currentIndex > 0 ? currentIndex - 1 : heroEvents.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < heroEvents.length - 1 ? currentIndex + 1 : 0;
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

  return (
    <section
      className={`flex flex-col items-center w-full bg-white px-4 py-8 md:px-8 md:py-12 lg:px-12 xl:px-[160px] ${className}`}
      aria-label="Featured events carousel"
    >
      <div className="flex flex-col items-center w-full max-w-[1440px]">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative flex flex-col items-center w-full isolate"
        >
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex flex-row items-start overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth w-full md:w-[900px] lg:w-[1170px]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {heroEvents.map((event, index) => (
              <div
                key={event.id}
                className="relative shrink-0 w-full h-[265px] md:h-[346px] lg:h-[450px] md:w-[900px] lg:w-[1170px] snap-center rounded-[30px] overflow-hidden isolate"
              >
                {/* Background Image/Video */}
                <div className="absolute inset-0 w-full h-full">
                  {event.video ? (
                    <video
                      src={event.video.src}
                      className="w-full h-full object-cover"
                      muted={isMuted}
                      autoPlay
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={event.image.src}
                      alt={event.image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 900px, 1170px"
                    />
                  )}
                </div>

                {/* Gradient Overlay */}
                {/* <div
                  className="absolute inset-0 rounded-[12px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(1, 15, 40, 0.4) 0%, rgba(1, 15, 40, 0.1) 35%, rgba(1, 15, 40, 0) 100%)",
                  }}
                /> */}

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end items-start p-8">
                  <div className="flex flex-row justify-between items-end w-full gap-5">
                    {/* Mute Button (only show if video exists) */}
                    {event.video && (
                      <button
                        type="button"
                        onClick={() => setIsMuted(!isMuted)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shrink-0"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <VolumeX
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        ) : (
                          <Volume2
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Arrows */}
          {/* <div className="hidden lg:block">
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 z-10"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-5 h-5 text-white" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 z-10"
              aria-label="Next event"
            >
              <ChevronRight className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div> */}

          {/* Mobile Navigation Arrows */}
          {/* <div className="lg:hidden">
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 z-10"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-5 h-5 text-white" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 z-10"
              aria-label="Next event"
            >
              <ChevronRight className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div> */}
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

