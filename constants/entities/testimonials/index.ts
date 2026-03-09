/**
 * Testimonial data exports and API-ready functions
 *
 * @module constants/entities/testimonials
 */

// TODO: Replace with API calls when backend is ready
import { mockTestimonials } from "./mock";
import type { Testimonial } from "@/types/landing";

/**
 * Get all testimonials
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Array of testimonials
 */
export async function getTestimonials(language: 'en' | 'ar' = 'en'): Promise<Testimonial[]> {
  // Future: return await api.get('/testimonials', { params: { lang: language } });
  return mockTestimonials[language];
}

