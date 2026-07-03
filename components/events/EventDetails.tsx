/**
 * Event detail client component - loads language-aware event content and
 * renders the event tickets sections.
 *
 * @component
 * @example
 * ```tsx
 * <EventDetails slug="mohamed-helmy-live-bahrain" />
 * ```
 */

"use client";

import { useEffect, useState } from "react";
import EventHero from "@/components/events/EventHero";
import EventInfo from "@/components/events/EventInfo";
import HowToGetThere from "@/components/events/HowToGetThere";
import TermsAndCondition from "@/components/events/TermsAndCondition";
import {
  getEventHeroContentBySlug,
  getEventLocation,
  getEventStatus,
  getEventTerms,
} from "@/constants/entities/events";
import { useTranslation } from "@/contexts/TranslationContext";
import type {
  EventHeroContent,
  HowToGetThereProps,
  TermsAndConditionData,
} from "@/types/event-tickets";

interface EventDetailsProps {
  /** Event slug to display details for */
  slug: string;
}

/**
 * Loads event content for the active language and re-fetches on language change,
 * mirroring the client-delegation pattern used by artist/venue detail pages.
 *
 * @param props - Component props
 * @returns Event detail sections, or null while content is loading
 */
export default function EventDetails({ slug }: EventDetailsProps) {
  const { language } = useTranslation();
  const [heroContent, setHeroContent] = useState<EventHeroContent | null>(null);
  const [location, setLocation] = useState<HowToGetThereProps | null>(null);
  const [terms, setTerms] = useState<TermsAndConditionData | null>(null);
  const [status, setStatus] = useState<"completed" | "in-progress" | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      const [content, loc, termsData, eventStatus] = await Promise.all([
        getEventHeroContentBySlug(slug, language),
        getEventLocation(slug, language),
        getEventTerms(slug, language),
        getEventStatus(slug),
      ]);
      if (active) {
        setHeroContent(content);
        setLocation(loc);
        setTerms(termsData);
        setStatus(eventStatus);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [slug, language]);

  if (!heroContent) {
    return null;
  }

  const isCompleted = status === "completed";

  return (
    <>
      <EventHero slides={heroContent.slides} badge={heroContent.badge} />
      <EventInfo {...heroContent.info} isCompleted={isCompleted} />
      {!isCompleted && terms && (
        <TermsAndCondition termsAndCondition={terms} />
      )}
      {!isCompleted && location && (
        <HowToGetThere {...location} isCompleted={isCompleted} />
      )}
    </>
  );
}
