/**
 * Not Found (404) page component
 *
 * @component
 * @example
 * ```tsx
 * <NotFound />
 * ```
 */

// ============================================
// Component Imports
// ============================================
import Link from "next/link";
import Button from "@/components/shared/ui/Button";

// ============================================
// Component Implementation
// ============================================

/**
 * 404 Not Found page component displaying error message and navigation option
 *
 * @returns Not Found page element
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white py-16 px-4 md:px-8 lg:px-20">
      {/* Container */}
      <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-12 md:gap-16">
        {/* Content Section */}
        <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-8 md:gap-12">
          {/* Heading Section */}
          <div className="flex w-full flex-col items-center justify-center gap-6">
            {/* 404 Heading */}
            <div className="relative flex w-full flex-col items-center justify-center">
              <h1 className="font-poppins text-center text-[80px] font-normal leading-[80px] tracking-[-4px] text-[#13261b] md:text-[100px] md:leading-[100px] md:tracking-[-5px] lg:text-[120px] lg:leading-[120px] lg:tracking-[-6px]">
                404
              </h1>
            </div>

            {/* Description */}
            <div className="flex w-full max-w-[620px] flex-col items-center gap-4">
              <h2 className="font-poppins text-center text-[28px] font-normal leading-[34px] tracking-[-0.84px] text-[#13261b] md:text-[36px] md:leading-[43px] md:tracking-[-1.08px]">
                Page Not Found
              </h2>
              <p className="font-poppins text-center text-base leading-6 text-[#5e6b64]">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex w-full items-center justify-center">
            <Link href="/" aria-label="Go to home page">
              <Button variant="primary" size="md">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

