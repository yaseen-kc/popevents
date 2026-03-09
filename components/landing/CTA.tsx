"use client";

/**
 * CTA component - Call-to-action section for landing page
 *
 * @component
 * @example
 * ```tsx
 * <CTA />
 * ```
 */

// ============================================
// Component Imports
// ============================================
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/ui/Button";
import { CTA_CONTENT } from "@/constants/content/landing";
import type { CTAProps } from "@/types/landing";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * CTA section component displaying call-to-action with text content and image grid
 *
 * @param props - CTA component props
 * @returns CTA section element
 */
export default function CTA({ className = "" }: CTAProps) {
  const { language } = useTranslation();
  const { heading, description, buttonText, buttonLink, imageColumns } =
    CTA_CONTENT[language];

  return (
    <section
      className={`flex flex-col items-center justify-center bg-white py-16 px-4 md:px-8 lg:px-20 ${className}`}
      id="cta"
    >
      {/* Container */}
      <div className="flex w-full max-w-[1280px] flex-col items-center justify-center">
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full max-w-[1280px] h-[500px] flex-row items-center justify-center gap-16 bg-porcelain rounded-[24px] px-12">
          {/* Content Section */}
          <div className="flex flex-col items-start justify-center gap-12 flex-none w-[700px] max-w-[700px] py-[128px]">
            {/* Text Wrapper */}
            <div className="flex flex-col items-start justify-center gap-6">
              {/* Heading */}
              <h2 className="font-poppins text-[48px] font-normal leading-[53px] tracking-[-1.92px] text-racing-green">
                {heading}
              </h2>

              {/* Description */}
              <p className="font-poppins text-base leading-6 text-corduroy">
                {description}
              </p>
            </div>

            {/* Button */}
            <div className="flex flex-row flex-wrap items-center align-top w-full max-w-[700px] h-[52px]">
              <Link
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-fit"
              >
                <Button variant="primary" size="md">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Section */}
          <div className="flex flex-col items-center justify-center flex-none w-[420px] h-[500px] relative isolate">
            {/* Image Columns Container */}
            <div className="flex flex-row items-start justify-center gap-4 w-full h-full relative">
              {imageColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="flex flex-col items-center justify-center gap-4 flex-1 h-full relative overflow-hidden rounded-[20px] w-[202px] max-w-[202px]"
                >
                  {/* Images Stack */}
                  <div
                    className={`flex flex-col items-center justify-center gap-4 absolute left-0 right-0 ${
                      columnIndex === 0 ? "top-[-144px]" : "top-[-62px]"
                    }`}
                  >
                    {column.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative w-full h-[269px] rounded-[20px] overflow-hidden"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 202px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="flex lg:hidden flex-row items-center justify-center w-[358px] max-w-[600px] h-[810.83px]">
          {/* Phone Container */}
          <div className="flex flex-col items-start justify-center w-[358px] h-[810.83px] min-h-[500px] pt-12 px-5 pb-5 gap-12 bg-porcelain rounded-[24px]">
            {/* Content */}
            <div className="flex flex-col items-start justify-center w-[318px] max-w-[700px] h-[294.83px] gap-12">
              {/* Text Wrapper */}
              <div className="flex flex-col items-center justify-center w-[318px] h-[194.82px] gap-6">
                {/* Heading */}
                <h2 className="font-poppins text-[34px] font-normal leading-[37px] tracking-[-1.36px] text-racing-green text-center">
                  {heading}
                </h2>

                {/* Description */}
                <p className="font-poppins text-base leading-6 text-corduroy text-center">
                  {description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-row items-center justify-center w-[318px] h-[52px]">
                <Link
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-fit"
                >
                  <Button variant="primary" size="md">
                    {buttonText}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="flex flex-col items-center justify-center w-[318px] h-[400px] rounded-[20px]">
              {/* Container */}
              <div className="flex flex-row items-start justify-center gap-2 w-[318px] h-[400px] isolate">
                {imageColumns.map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className={`flex flex-col items-center justify-center w-[155px] h-[400px] rounded-[20px] relative overflow-hidden flex-1 self-stretch ${
                      columnIndex === 0 ? "z-1" : "z-0"
                    }`}
                  >
                    {/* Images */}
                    <div
                      className={`flex flex-col items-center justify-center gap-2 absolute left-0 right-0 ${
                        columnIndex === 0 ? "top-[-94px]" : "top-[-112px]"
                      }`}
                    >
                      {column.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative w-[155px] h-[206.65px] rounded-[20px] overflow-hidden"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="155px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
