/**
 * Service detail content section - displays service-specific detailed content
 *
 * @component
 * @example
 * ```tsx
 * <Content slug="stand-up-comedy-performances" />
 * ```
 */

"use client";

// ============================================
// Component Imports
// ============================================

import { SERVICE_DETAIL_CONTENT_MAP } from "@/constants/content/services";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Type Definitions
// ============================================

interface ContentProps {
  /** Service slug to display content for */
  slug: string;
}

// ============================================
// Component Implementation
// ============================================

/**
 * Detailed service content including summary, benefits, and workflow overview
 *
 * @param props - Component props
 * @returns Section element describing the service
 */
export default function Content({ slug }: ContentProps) {
  const { language } = useTranslation();
  const serviceContent = SERVICE_DETAIL_CONTENT_MAP[language][slug as keyof typeof SERVICE_DETAIL_CONTENT_MAP[typeof language]];

  if (!serviceContent) {
    return (
      <section className="flex w-full justify-center bg-white px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <div className="w-full max-w-[358px] md:max-w-[600px]">
          <p className="font-poppins text-base leading-6 text-corduroy">
            Content for this service is not available.
          </p>
        </div>
      </section>
    );
  }

  const { summaryParagraphs, benefits, whyItMatters, workflowSteps } =
    serviceContent;
  return (
    <section className="flex w-full justify-center bg-white px-4 py-16 md:px-6 md:py-20 lg:py-24">
      <div className="w-full max-w-[358px] space-y-12 md:max-w-[600px] md:space-y-16">
        <div className="space-y-5">
          <h2 className="font-poppins text-[34px] font-normal leading-[37px] tracking-[-1.36px] text-racing-green md:text-[40px] md:leading-[44px] md:tracking-[-1.6px] lg:text-[48px] lg:leading-[53px] lg:tracking-[-1.92px]">
            Summary
          </h2>

          {summaryParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-poppins text-base leading-6 text-corduroy"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="font-poppins text-[24px] font-normal leading-[29px] tracking-[-0.96px] text-racing-green md:text-[28px] md:leading-[34px] md:tracking-[-1.12px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-1.28px]">
            What you get
          </h3>

          <ul className="space-y-5">
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex gap-3 font-poppins text-base leading-6 text-corduroy"
              >
                <span
                  aria-hidden="true"
                  className="mt-[2px] text-lg text-corduroy"
                >
                  •
                </span>
                <p className="flex-1">
                  <span className="font-semibold text-racing-green">
                    {benefit.title}
                  </span>
                  {" — "}
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="font-poppins text-[24px] font-normal leading-[29px] tracking-[-0.96px] text-racing-green md:text-[28px] md:leading-[34px] md:tracking-[-1.12px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-1.28px]">
            Why it matters
          </h3>
          <p className="font-poppins text-base leading-6 text-corduroy">
            {whyItMatters}
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="font-poppins text-[24px] font-normal leading-[29px] tracking-[-0.96px] text-racing-green md:text-[28px] md:leading-[34px] md:tracking-[-1.12px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-1.28px]">
            How it works
          </h3>

          <ul className="space-y-4">
            {workflowSteps.map((step) => (
              <li
                key={step.title}
                className="font-poppins text-base leading-6 text-corduroy"
              >
                <span className="font-semibold text-racing-green">
                  {step.title}
                </span>
                {" — "}
                {step.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
