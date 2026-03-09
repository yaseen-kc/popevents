/**
 * Article data exports and API-ready functions
 *
 * @module constants/entities/articles
 */

// TODO: Replace with API calls when backend is ready
import { mockArticles } from "./mock";
import type { Article } from "@/types/landing";

/**
 * Get all articles
 * 
 * @param language - Language code ('en' or 'ar')
 * @returns Array of articles
 */
export async function getArticles(language: 'en' | 'ar' = 'en'): Promise<Article[]> {
  // Future: return await api.get('/articles', { params: { lang: language } });
  return mockArticles[language];
}

/**
 * Get article by slug or ID
 * 
 * @param identifier - Article identifier
 * @returns Article or null if not found
 */
export async function getArticleById(identifier: string): Promise<Article | null> {
  // Future: return await api.get(`/articles/${identifier}`);
  // For now, we don't have a slug field, so this is a placeholder
  return null;
}

