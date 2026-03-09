"use client";

/**
 * FAQ component - Frequently asked questions section for landing page
 *
 * @component
 * @example
 * ```tsx
 * <FAQ />
 * ```
 */

// ============================================
// Component Imports
// ============================================
import { useState } from "react";
import { FAQ_CONTENT } from "@/constants/content/landing";
import { RACING_GREEN } from "@/constants/config/colors";
import type { FAQProps } from "@/types/landing";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * FAQ section component displaying expandable accordion questions
 *
 * @param props - FAQ component props
 * @returns FAQ section element
 */
export default function FAQ({ className = "" }: FAQProps) {
  const { language } = useTranslation();
  const { badgeLabel, heading, description, questions } = FAQ_CONTENT[language];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  /**
   * Toggles the expanded state of a question
   *
   * @param index - Index of the question to toggle
   */
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className={`flex flex-col items-center justify-center bg-white py-16 px-4 md:px-8 lg:px-8 ${className}`}
      id="faq"
    >
      {/* Container */}
      <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-12 md:gap-16 lg:gap-16">
        {/* Heading Section */}
        <div className="flex w-full flex-col items-center justify-center gap-6">
          {/* Badge */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center rounded-[32px] bg-porcelain px-4 py-[6px]">
              <span className="font-poppins text-sm leading-[21px] text-corduroy">
                {badgeLabel}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-[34px] font-normal leading-[37px] tracking-[-1.36px] text-racing-green text-center md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
            {heading}
          </h2>

          {/* Description */}
          <p className="font-poppins text-base leading-6 text-corduroy text-center max-w-[800px]">
            {description}
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="flex w-full max-w-[800px] flex-col items-start justify-center gap-0">
          {questions.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="relative isolate flex w-full flex-col items-start justify-center overflow-hidden"
              >
                {/* Question Item */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full flex-row items-center justify-between gap-6 py-3 text-left transition-colors hover:opacity-80"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}
                >
                  {/* Question Text */}
                  <span className="flex-1 font-poppins text-base font-medium leading-[19px] text-racing-green">
                    {item.question}
                  </span>

                  {/* Plus Icon Button */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-porcelain transition-transform">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${
                        isExpanded ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      {/* Horizontal line */}
                      <rect
                        x="0"
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        fill={RACING_GREEN}
                      />
                      {/* Vertical line */}
                      <rect
                        x="7"
                        y="0"
                        width="2"
                        height="16"
                        rx="1"
                        fill={RACING_GREEN}
                        className={`transition-opacity duration-300 ${
                          isExpanded ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isExpanded}
                >
                  <div className="pb-5 pt-0">
                    <p className="font-poppins text-base leading-6 text-corduroy">
                      {item.answer}
                    </p>
                  </div>
                </div>

                {/* Divider (except for last item) */}
                {index < questions.length - 1 && (
                  <div className="h-px w-full bg-light-gray" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
