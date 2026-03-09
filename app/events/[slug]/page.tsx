/**
 * Event tickets page route
 *
 * @module app/events/[slug]/page
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import type { EventHeroContent, HowToGetThereProps, TermsAndConditionData } from "@/types/event-tickets";

const DEFAULT_LANGUAGE: "en" | "ar" = "en";
const SITE_BASE_URL = "https://popevents.com";

interface EventPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const slug = params.slug;
  const language = DEFAULT_LANGUAGE;

  const [heroContent, status] = await Promise.all([
    getEventHeroContentBySlug(slug, language),
    getEventStatus(slug),
  ]);

  if (!heroContent) {
    return {
      title: "Event not found | Pop Events",
      description: "The event you are looking for could not be found on Pop Events.",
    };
  }

  const { title, location, date, shortDescription, description } = heroContent.info;
  const isCompleted = status === "completed";
  const statusPhrase = isCompleted ? "Past event" : "Upcoming event";

  const metaDescription =
    shortDescription ||
    (Array.isArray(description) ? description.join(" ") : undefined) ||
    `${statusPhrase} in ${location} on ${date} curated by Pop Events.`;

  const image = heroContent.slides[0]?.image;

  return {
    title: `${title} in ${location} | Pop Events`,
    description: metaDescription,
    alternates: {
      canonical: `/events/${slug}`,
    },
    openGraph: {
      type: "event",
      url: `/events/${slug}`,
      title: `${title} | Pop Events`,
      description: metaDescription,
      images: image
        ? [
            {
              url: image.src,
              alt: image.alt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Pop Events`,
      description: metaDescription,
      images: image ? [image.src] : undefined,
    },
  };
}

/**
 * Event tickets page displaying event tickets details.
 *
 * @returns Event tickets page element
 */
export default async function EventTicketsPage({ params }: EventPageProps) {
  const slug = params.slug;
  const language = DEFAULT_LANGUAGE;

  const [eventContent, location, terms, status] = await Promise.all([
    getEventHeroContentBySlug(slug, language),
    getEventLocation(slug, language),
    getEventTerms(slug, language),
    getEventStatus(slug),
  ]);

  if (!eventContent) {
    notFound();
  }

  const isCompleted = status === "completed";

  const { title, location: infoLocation, date, shortDescription, description } = (
    eventContent as EventHeroContent
  ).info;

  const structuredDescription =
    shortDescription || (Array.isArray(description) ? description.join(" ") : undefined);

  const imageUrls = eventContent.slides.map((slide) => slide.image.src);

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: title,
    description: structuredDescription,
    startDate: date,
    eventStatus: isCompleted ? "EventCompleted" : "EventScheduled",
    eventAttendanceMode: "OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: location?.venueName || infoLocation,
      address: location?.venueAddress,
    },
    image: imageUrls,
    offers: [
      {
        "@type": "Offer",
        url:
          (eventContent as EventHeroContent).info.ticketUrl ||
          `${SITE_BASE_URL}/events/${slug}`,
        availability: isCompleted
          ? "https://schema.org/SoldOut"
          : "https://schema.org/InStock",
      },
    ],
    organizer: {
      "@type": "Organization",
      "@id": "https://popevents.com/#organization",
      name: "Pop Events",
      url: SITE_BASE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Events",
        item: `${SITE_BASE_URL}/events`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_BASE_URL}/events/${slug}`,
      },
    ],
  };

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify([eventSchema, breadcrumbSchema]) }}
      />
      <EventHero slides={eventContent.slides} badge={eventContent.badge} />
      <EventInfo {...eventContent.info} isCompleted={isCompleted} />
      {!isCompleted && terms && <TermsAndCondition termsAndCondition={terms as TermsAndConditionData} />}
      {!isCompleted && location && <HowToGetThere {...(location as HowToGetThereProps)} isCompleted={isCompleted} />}
    </main>
  );
}
