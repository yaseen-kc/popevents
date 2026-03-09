/**
 * Culture component - Company culture values section for the About page
 *
 * @component
 * @example
 * ```tsx
 * <Culture />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import Image from "next/image";

import { CULTURE_SECTION_CONTENT } from "@/constants/content/about";
import type { CultureProps } from "@/types/about";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * Renders the Culture section with an eyebrow badge, heading,
 * and alternating culture cards that combine images with culture value descriptions.
 *
 * @param props - Culture component props
 * @returns Semantic section element for the Culture block
 */
export default function Culture({ className = "" }: CultureProps) {
  const { language } = useTranslation();
  const content = CULTURE_SECTION_CONTENT[language];

  return (
    <section
      id="culture"
      aria-labelledby="culture-heading"
      className={`flex w-full justify-center bg-white px-4 py-16 md:px-10 md:py-24 lg:px-20 ${className}`}
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="inline-flex min-h-[33px] items-center justify-center rounded-full bg-porcelain px-4 py-1.5">
            <span className="font-poppins text-sm font-normal leading-[21px] text-corduroy">
              {content.badgeLabel}
            </span>
          </div>
          <h2
            id="culture-heading"
            className="font-poppins text-[34px] font-medium leading-[37px] tracking-[-1.36px] text-racing-green md:text-[48px] md:leading-[50px] md:tracking-[-1.92px] lg:text-[64px] lg:leading-[66px] lg:tracking-[-2.56px]"
          >
            {content.heading}
          </h2>
        </div>

        <div className="flex w-full flex-col gap-12 md:gap-[48px] lg:gap-16">
          {content.items.map((cultureItem, index) => {
            const isEven = index % 2 === 0;
            const imageOrder = isEven ? "lg:order-0" : "lg:order-1";
            const textOrder = isEven ? "lg:order-1" : "lg:order-0";
            const isolationClass = isEven ? "isolate" : "";

            return (
              <article
                key={cultureItem.name}
                className={`flex flex-col items-center justify-center gap-6 rounded-[20px] md:gap-[23px] lg:flex-row lg:gap-12 xl:gap-12 ${isolationClass}`}
              >
                <div
                  className={`flex w-full justify-center md:w-full lg:w-auto ${imageOrder}`}
                >
                  <figure className="relative w-full overflow-hidden rounded-[20px] bg-[#0f1f17] h-[358px] md:h-[600px] lg:h-[456px] xl:h-[616px] md:w-[600px] lg:w-[456px] xl:w-[616px]">
                    <Image
                      src={cultureItem.image.src}
                      alt={cultureItem.image.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 456px"
                    />
                  </figure>
                </div>

                <div
                  className={`flex w-full flex-col items-start gap-6 md:gap-[24.01px] md:w-[600px] md:max-w-[600px] md:z-0 lg:w-[456px] lg:max-w-[456px] lg:z-auto xl:w-[616px] xl:max-w-[616px] h-[358px] md:h-auto ${textOrder}`}
                >
                  <div className="flex flex-col gap-[11px]">
                    <h3 className="font-poppins font-normal text-[24px] leading-[29px] tracking-[-0.48px] text-racing-green md:text-[24px] md:leading-[29px] md:tracking-[-0.48px] lg:text-[28px] lg:leading-[34px] lg:tracking-[-0.56px] xl:text-[32px] xl:leading-[38px] xl:tracking-[-0.64px]">
                      {cultureItem.name}
                    </h3>
                  </div>
                  <p className="font-poppins text-base leading-6 text-corduroy">
                    {cultureItem.description}
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
