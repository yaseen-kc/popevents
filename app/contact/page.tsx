/**
 * Contact page route
 *
 * @module app/contact/page
 */
import type { Metadata } from "next";
import ContactUs from "@/components/contact/ContactUs";
import FAQ from "@/components/landing/FAQ";
// ============================================
// Component Imports
// ============================================

// ============================================
// Route Metadata
// ============================================
export const metadata: Metadata = {
  title: "Contact Pop Events | Book Entertainment in GCC",
  description:
    "Get in touch with Pop Events to plan live music concerts, comedy shows, celebrity appearances, and corporate entertainment experiences across GCC.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact Pop Events | Book Live Entertainment in GCC",
    description:
      "Contact Pop Events to book live concerts, comedy shows, celebrity appearances, and corporate entertainment experiences across GCC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pop Events | Book Entertainment in GCC",
    description:
      "Reach out to Pop Events to discuss your next live event, from concerts and comedy shows to celebrity appearances and corporate entertainment.",
  },
};

// ============================================
// Page Implementation
// ============================================

/**
 * Contact page displaying contact information.
 *
 * @returns Contact page element
 */
export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <ContactUs />
      <FAQ />
    </main>
  );
}
