/**
 * Helpers for interacting with service content data.
 *
 * @module lib/services
 */

// ============================================
// Imports
// ============================================
import { SERVICES_CONTENT } from "@/constants/content/landing";
import type { ServiceOffering } from "@/types/landing";

// ============================================
// Helpers
// ============================================

/**
 * Retrieve all service offerings.
 *
 * @returns Array of service offerings
 */
export function getAllServices(): ServiceOffering[] {
  // Create a mutable copy to satisfy the return type
  // Use English version as default (services are language-agnostic)
  return [...SERVICES_CONTENT.en.services];
}

/**
 * Lookup a service by its slug identifier.
 *
 * @param slug - Route segment representing the service
 * @returns Matching service or undefined when not found
 */
export function getServiceBySlug(slug: string): ServiceOffering | undefined {
  // Use English version as default (services are language-agnostic)
  return SERVICES_CONTENT.en.services.find(
    (service) => service.slug === slug
  );
}

