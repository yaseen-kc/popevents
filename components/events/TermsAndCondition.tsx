/**
 * Terms & Conditions component for event tickets page
 *
 * @component
 */

"use client";

// ============================================
// Component Imports
// ============================================
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { TermsAndConditionProps } from "@/types/event-tickets";

// ============================================
// Component Implementation
// ============================================

/**
 * Terms & Conditions section component displaying event terms and conditions
 *
 * @param props - TermsAndCondition component props
 * @returns Terms & Conditions section element
 */
export default function TermsAndCondition({
  className = "",
  termsAndCondition,
}: TermsAndConditionProps) {
  const [isOpen, setIsOpen] = useState(true);

  /**
   * Toggles the expanded state of the terms content
   */
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Early return if no terms data is provided
  if (!termsAndCondition || termsAndCondition.length === 0) {
    return null;
  }

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-8 md:px-8 md:py-12 lg:px-12 xl:px-[160px] ${className}`}
    >
      <div className="flex w-full max-w-[1440px] flex-col items-start">
        {/* Terms & Conditions section */}
        <div className="flex w-full max-w-[350px] flex-col md:w-[405.91px] md:max-w-[405.91px] lg:w-[531px] lg:max-w-[531px] xl:w-[690.3px] xl:max-w-[690.3px]">
          {/* Collapsible button */}
          <button
            type="button"
            onClick={handleToggle}
            className="flex w-full items-center justify-between gap-2 text-left transition-colors hover:opacity-80"
            aria-expanded={isOpen}
            aria-controls="terms-content"
          >
            <h2 className="flex items-center font-poppins text-[28px] font-bold leading-[34px] tracking-[-0.84px] text-[#0F0F15] md:text-[36px] md:leading-[43px] md:tracking-[-1.08px]">
              Terms & Conditions
            </h2>
            <ChevronDownIcon
              className={`h-6 w-6 shrink-0 text-[#0F0F15] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {/* Collapsible content */}
          <div
            id="terms-content"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-[5000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
            aria-hidden={!isOpen}
          >
            <div className="flex flex-col items-start gap-0 pb-6 pt-4 md:gap-0 md:pb-6 md:pt-4 lg:pb-6 lg:pt-4">
              <div className="flex flex-col items-start gap-[17.4px] md:gap-[16.9px]">
                {termsAndCondition?.map((section, index) => (
                  <div key={section.title} className="flex flex-col items-start">
                    <h3 className="mb-2 font-poppins text-lg font-semibold leading-7 text-[#0F0F15] md:text-xl md:leading-8">
                      {index + 1}. {section.title}:
                    </h3>
                    <ul className="ml-4 list-none space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={`${section.title}-${itemIndex}`}
                          className="font-poppins text-base leading-6 text-[#0F0F15] md:text-lg md:leading-7 before:mr-2 before:content-['•']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Horizontal Divider */}
                <div className="h-[0.8px] w-full bg-[#E5E7EB]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

