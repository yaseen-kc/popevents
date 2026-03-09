/**
 * Testimonials component - Client testimonials section for landing page
 *
 * @component
 * @example
 * ```tsx
 * <Testimonials />
 * ```
 */

// ============================================
// Component Imports
// ============================================
"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/ui/Button";
import { TESTIMONIALS_CONTENT_WITH_DATA as TESTIMONIALS_CONTENT } from "@/constants/content/landing";
import type { TestimonialsProps } from "@/types/landing";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * Star rating component - displays 5 filled stars
 *
 * @returns Star rating element
 */
// function StarRating() {
//   return (
//     <div className="flex items-center gap-[3px]">
//       {[...Array(5)].map((_, i) => (
//         <svg
//           key={i}
//           width="20"
//           height="20"
//           viewBox="0 0 20 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="flex-none"
//         >
//           <path
//             d="M10 1L12.09 7.26L19 8.27L14 12.14L15.18 19.02L10 15.77L4.82 19.02L6 12.14L1 8.27L7.91 7.26L10 1Z"
//             fill="#5e6b64"
//             stroke="#5e6b64"
//             strokeWidth="0.5"
//           />
//         </svg>
//       ))}
//     </div>
//   );
// }

/**
 * Testimonials section component featuring eyebrow badge, heading, description,
 * three testimonial cards with quotes, star ratings, avatars, client info,
 * and a call-to-action button.
 *
 * @param props - Testimonials component props
 * @returns Testimonials section element
 */
export default function Testimonials({ className = "" }: TestimonialsProps) {
  const { language } = useTranslation();
  const content = TESTIMONIALS_CONTENT[language];

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-24 md:px-8 lg:px-12 ${className}`}
      id="testimonials"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-12">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Eyebrow badge */}
          <div className="rounded-full bg-porcelain px-4 py-1.5">
            <span className="font-poppins text-sm leading-[21px] text-corduroy">
              {content.badgeLabel}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-[34px] font-normal leading-[37px] tracking-[-1.36px] text-racing-green md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
            {content.heading}
          </h2>

          {/* Description */}
          <p className="font-poppins text-base leading-6 text-corduroy max-w-[600px]">
            {content.description}
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="flex w-full flex-row gap-6 overflow-x-auto md:flex-row md:gap-6 lg:gap-6">
          {content.testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="relative flex w-[400px] min-w-[400px] h-[300px] md:w-auto md:min-w-0 md:h-auto flex-col justify-between rounded-xl bg-porcelain p-6 gap-6 md:flex-1 md:min-h-[300px]"
            >
              {/* Card Content */}
              <div className="flex flex-col gap-6 flex-1 w-[352px] mx-auto md:w-auto md:mx-0">
                {/* Quote */}
                <p className="font-poppins text-base leading-6 text-corduroy">
                  "{testimonial.quote}"
                </p>

                {/* Star Rating */}
                {/* <StarRating /> */}
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative h-11 w-11 flex-none overflow-hidden rounded-full border-2 border-white shadow-[0px_0.78363px_0.78363px_-0.5px_rgba(0,0,0,0.14),0px_1.91965px_1.91965px_-1px_rgba(0,0,0,0.14),0px_3.63745px_3.63745px_-1.5px_rgba(0,0,0,0.13),0px_6.35004px_6.35004px_-2px_rgba(0,0,0,0.13),0px_11.0519px_11.0519px_-2.5px_rgba(0,0,0,0.12),0px_20.2428px_20.2428px_-3px_rgba(0,0,0,0.1),0px_40px_40px_-3.5px_rgba(0,0,0,0.06)]">
                  <Image
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                {/* Client Info */}
                <div className="flex flex-col">
                  <span className="font-poppins text-[22px] leading-[26px] md:text-2xl md:leading-[29px] font-normal tracking-[-0.44px] text-racing-green">
                    {testimonial.name}
                  </span>
                  <span className="font-poppins text-sm leading-[21px] text-corduroy">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href={content.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="primary" size="md">
              {content.ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
