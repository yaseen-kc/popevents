/**
 * ResourcesAndInsights component - Resources & insights section for landing page
 *
 * @component
 * @example
 * ```tsx
 * <ResourcesAndInsights />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import Image from "next/image";
import Link from "next/link";
import { RESOURCES_AND_INSIGHTS_CONTENT_WITH_DATA as RESOURCES_AND_INSIGHTS_CONTENT } from "@/constants/content/landing";
import type { Article, ResourcesAndInsightsProps } from "@/types/landing";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * Resources & Insights section component displaying article cards
 *
 * @param props - ResourcesAndInsights component props
 * @returns Resources & Insights section element
 */
export default function ResourcesAndInsights({
  className = "",
}: ResourcesAndInsightsProps) {
  const { language } = useTranslation();
  const { badgeLabel, heading, viewAllText, articles, categoryColors } =
    RESOURCES_AND_INSIGHTS_CONTENT[language];

  // Split articles into featured (first 2) and secondary (remaining 3)
  const featuredArticles = articles.slice(0, 2);
  const secondaryArticles = articles.slice(2);

  return (
    <section
      className={`flex flex-col items-center justify-center bg-white py-16 px-4 md:px-12 lg:px-12 xl:px-12 ${className}`}
      id="resources-and-insights"
    >
      {/* Container */}
      <div className="flex w-full max-w-[1280px] flex-col items-start justify-center gap-12 md:gap-16 lg:gap-24">
        {/* Top Section - Badge, Heading, and View All Link */}
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-end">
          {/* Left Side - Badge and Heading */}
          <div className="flex flex-col items-start justify-center gap-[22.9px] grow">
            {/* Badge */}
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center justify-center rounded-[32px] bg-porcelain px-4 py-[6px] w-[176px] h-[33px]">
                <span className="font-poppins text-sm leading-[21px] text-corduroy">
                  {badgeLabel}
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-start max-w-[600px]">
              <h2 className="font-poppins text-[34px] font-normal leading-[37px] tracking-[-1.36px] text-racing-green md:text-[40px] md:leading-[44px] md:tracking-[-1.6px] lg:text-[48px] lg:leading-[53px] lg:tracking-[-1.92px]">
                {heading}
              </h2>
            </div>
          </div>

          {/* Right Side - View All Link */}
          <div className="flex items-center justify-center w-[88px] h-[20px]">
            <Link
              href="/blog"
              className="group flex flex-row items-center justify-center rounded-[37px] px-0"
            >
              <span className="font-poppins text-base font-semibold leading-[19px] tracking-[-0.16px] text-racing-green pr-2">
                {viewAllText}
              </span>
            </Link>
          </div>
        </div>

        {/* Blog Items */}
        <div className="flex w-full flex-col items-center justify-center gap-12 md:gap-12 lg:gap-12">
          {/* Featured Articles - Two Column Layout (Desktop) */}
          <div className="hidden w-full grid-cols-1 gap-12 lg:grid lg:grid-cols-2">
            {featuredArticles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                categoryColors={categoryColors}
                isFeatured={true}
                articleIndex={index}
              />
            ))}
          </div>

          {/* Featured Articles - Single Column (Mobile/Tablet) */}
          <div className="flex w-full flex-col gap-12 lg:hidden">
            {featuredArticles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                categoryColors={categoryColors}
                isFeatured={true}
                articleIndex={index}
              />
            ))}
          </div>

          {/* Secondary Articles - Three Column Layout (Desktop) */}
          <div className="hidden w-full grid-cols-1 gap-12 lg:grid lg:grid-cols-3">
            {secondaryArticles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                categoryColors={categoryColors}
                isFeatured={false}
                articleIndex={index}
              />
            ))}
          </div>

          {/* Secondary Articles - Single Column (Mobile/Tablet) */}
          <div className="flex w-full flex-col gap-12 lg:hidden">
            {secondaryArticles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                categoryColors={categoryColors}
                isFeatured={false}
                articleIndex={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Article Card Component
// ============================================

/**
 * Article card component
 *
 * @param props - Article card props
 * @returns Article card element
 */
function ArticleCard({
  article,
  categoryColors,
  isFeatured,
  articleIndex,
}: {
  article: Article;
  categoryColors: typeof RESOURCES_AND_INSIGHTS_CONTENT.en.categoryColors;
  isFeatured: boolean;
  articleIndex: number;
}) {
  const categoryColor = categoryColors[article.category];
  // Second featured article (index 1) should be flipped on desktop
  const isFlipped = isFeatured && articleIndex === 1;

  // Content component to avoid duplication
  const ContentSection = ({
    isAboveImage = false,
  }: {
    isAboveImage?: boolean;
  }) => (
    <div
      className={`flex w-full flex-col items-start justify-center ${
        isFeatured ? "gap-4" : "gap-[15px]"
      } ${isAboveImage ? "pb-6" : "pt-6"}`}
    >
      {/* Category Badge and Date */}
      <div className="flex flex-row items-center gap-6">
        {/* Category Badge */}
        <div className="relative isolate flex flex-row items-center justify-center rounded-[69px] px-2 py-1">
          <div
            className="absolute inset-0 rounded-[69px] opacity-50"
            style={{ backgroundColor: categoryColor }}
          />
          <span className="relative z-10 font-poppins text-sm leading-[21px] text-white">
            {article.category}
          </span>
        </div>

        {/* Date */}
        <span className="font-poppins text-sm leading-[21px] text-corduroy">
          {article.date}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-poppins font-normal text-racing-green ${
          isFeatured
            ? "text-2xl leading-[29px] tracking-[-0.48px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.64px]"
            : "text-2xl leading-[29px] tracking-[-0.48px]"
        }`}
      >
        {article.title}
      </h3>

      {/* Description (if available) */}
      {article.description && (
        <p className="font-poppins text-base leading-6 text-corduroy">
          {article.description}
        </p>
      )}
    </div>
  );

  return (
    <Link
      href="/blog"
      className="group flex flex-col items-start justify-center rounded-2xl"
    >
      {/* Flipped layout: Content first, then image (desktop only) */}
      {isFlipped && (
        <>
          {/* Desktop: Content above image */}
          <div className="hidden lg:block">
            <ContentSection isAboveImage={true} />
          </div>
          {/* Image Container */}
          <div className="relative w-full overflow-hidden rounded-[12px] lg:rounded-[20px]">
            <div className="relative w-full h-[238.66px] md:h-[309.33px] lg:h-[410.66px]">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
          {/* Mobile/Tablet: Content below image (normal layout) */}
          <div className="lg:hidden">
            <ContentSection isAboveImage={false} />
          </div>
        </>
      )}

      {/* Normal layout: Image first, then content */}
      {!isFlipped && (
        <>
          {/* Image Container */}
          <div
            className={`relative w-full overflow-hidden ${
              isFeatured ? "rounded-[12px] md:rounded-[20px]" : "rounded-xl"
            }`}
          >
            <div
              className={`relative w-full ${
                isFeatured
                  ? "h-[238.66px] md:h-[309.33px] lg:h-[410.66px]"
                  : "h-[238.66px] md:h-[199.11px] lg:h-[263.11px]"
              }`}
            >
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
          <ContentSection isAboveImage={false} />
        </>
      )}
    </Link>
  );
}
