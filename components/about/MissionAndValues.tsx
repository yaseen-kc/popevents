/**
 * MissionAndValues component - Mission statement with values cards
 *
 * @component
 * @example
 * ```tsx
 * <MissionAndValues />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import { MISSION_AND_VALUES_CONTENT, VALUE_ICON_MAP } from "@/constants/content/about";
import type { MissionAndValuesProps } from "@/types/about";
import { useTranslation } from "@/contexts/TranslationContext";
// ============================================
// Component Implementation
// ============================================

/**
 * Displays the Mission & Values section with an eyebrow badge,
 * headline, supporting paragraph, and four value cards.
 *
 * @param props - Component props
 * @returns Mission & Values section element
 */
export default function MissionAndValues({
  className = "",
}: MissionAndValuesProps) {
  const { language } = useTranslation();
  const content = MISSION_AND_VALUES_CONTENT[language];

  return (
    <section
      id="mission-and-values"
      aria-labelledby="mission-values-heading"
      className={`flex w-full justify-center bg-white px-4 py-16 md:px-10 md:py-24 lg:px-20 ${className}`}
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-14">
        <div className="flex w-full max-w-[358px] flex-col items-center gap-6 text-center md:max-w-[600px] lg:max-w-[640px]">
          <div className="inline-flex min-h-[33px] items-center justify-center rounded-full bg-porcelain px-4 py-1.5">
            <span className="font-poppins text-sm font-normal leading-[21px] text-corduroy">
              {content.badgeLabel}
            </span>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <h2
              id="mission-values-heading"
              className="font-poppins text-[34px] font-medium leading-[37px] tracking-[-1.36px] text-racing-green md:text-[40px] md:leading-[44px] md:tracking-[-1.6px] lg:text-[48px] lg:leading-[53px] lg:tracking-[-1.92px]"
            >
              {content.heading}
            </h2>
            <p className="font-poppins text-base leading-6 text-corduroy">
              {content.description}
            </p>
          </div>
        </div>

        <div className="grid w-full max-w-[920px] justify-items-center gap-y-6 gap-x-6 md:grid-cols-2 md:gap-x-2 lg:gap-y-8 lg:gap-x-0">
          {content.values.map((value, index) => {
            // Map value to icon using index since values are in same order
            const enValue = MISSION_AND_VALUES_CONTENT.en.values[index];
            const Icon = VALUE_ICON_MAP[enValue.name as keyof typeof VALUE_ICON_MAP] || VALUE_ICON_MAP.Creative;
            return (
              <article
                key={value.name}
                className="relative flex h-[250px] w-full max-w-[438px] flex-col items-start gap-[84px] rounded-[20px] bg-porcelain p-6"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2"
                  style={{
                    boxShadow:
                      "0px 0.78363px 0.78363px -0.5px rgba(0, 0, 0, 0.14), 0px 1.91965px 1.91965px -1px rgba(0, 0, 0, 0.14), 0px 3.63745px 3.63745px -1.5px rgba(0, 0, 0, 0.13), 0px 6.35004px 6.35004px -2px rgba(0, 0, 0, 0.13), 0px 11.0519px 11.0519px -2.5px rgba(0, 0, 0, 0.12), 0px 20.2428px 20.2428px -3px rgba(0, 0, 0, 0.1), 0px 40px 40px -3.5px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center">
                    <Icon aria-hidden="true" className="h-8 w-8" />
                  </div>
                </div>
                <span className="sr-only">{value.name}</span>
                <div className="flex w-full max-w-[390px] flex-col gap-2">
                  <h3 className="font-poppins text-2xl font-normal leading-[29px] tracking-[-0.48px] text-racing-green md:text-[28px] md:leading-[34px] md:tracking-[-0.56px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.64px]">
                    {value.name}
                  </h3>
                  <p className="font-poppins text-base leading-6 text-corduroy">
                    {value.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
