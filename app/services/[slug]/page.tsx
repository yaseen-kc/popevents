/**
 * About page route
 *
 * @module app/about/page
 */

// ============================================
// Component Imports
// ============================================
import { notFound } from "next/navigation";
import Hero from "@/components/services/Hero";
import { SERVICE_HERO_CONTENT_MAP } from "@/constants/content/services";
import CTA from "@/components/landing/CTA";
import Content from "@/components/services/Content";

// ============================================
// Type Definitions
// ============================================
interface ServicePageProps {
  params: {
    slug: string;
  };
}

// ============================================
// Page Implementation
// ============================================

/**
 * Services page displaying service details.
 *
 * @param props - Route params wrapper
 * @returns Services page element
 */
export default async function ServicesPage({ params }: ServicePageProps) {
  const { slug } = await Promise.resolve(params);

  // Check if slug exists in either language version
  if (!SERVICE_HERO_CONTENT_MAP.en[slug] && !SERVICE_HERO_CONTENT_MAP.ar[slug]) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <Hero slug={slug} />
      <Content slug={slug} />
      <CTA />
    </main>
  );
}
