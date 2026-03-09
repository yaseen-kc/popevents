"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import {
  BRAND_TAGLINE,
  HOTLINE_NUMBER,
  HOTLINE_HOURS,
} from "@/constants/config/ui";
import { useTranslation } from "@/contexts/TranslationContext";

type CTAProps = {
  className?: string;
};

export default function CTA({ className = "" }: CTAProps) {
  const { language } = useTranslation();

  return (
    <section
      className={`flex w-full justify-center bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 xl:px-16 ${className}`}
      aria-labelledby="venues-cta-heading"
    >
      <div className="flex w-full max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        {/* Left: Brand */}
        <div className="flex flex-col gap-4 lg:min-w-[320px]">
          <div className="flex items-center gap-3">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0F0F15]">
              <Image
                src="/window.svg"
                alt="Pop Events logo"
                width={32}
                height={32}
                className="h-8 w-8"
                priority
              />
            </div> */}
            <span className="font-poppins text-[34px] font-semibold leading-[38px] tracking-[-1px] text-[#0F0F15] md:text-[36px] md:leading-[40px]">
              Pop Events
            </span>
          </div>

          <p className="max-w-[520px] font-poppins text-base font-normal leading-6 text-[#0F0F15] md:text-[17px] md:leading-[24px]">
            {BRAND_TAGLINE[language]}
          </p>
        </div>

        {/* Middle: Contact */}
        <div className="flex flex-col gap-4 lg:flex-1 lg:items-center">
          <h2
            id="venues-cta-heading"
            className="text-left font-poppins text-[22px] font-semibold leading-[28px] text-[#0F0F15] md:text-[24px] md:leading-[30px] lg:text-[24px]"
          >
            Do you have any questions?
            <br className="hidden lg:block" />
            <span className="md:hidden lg:inline"> </span>
            Please contact us
          </h2>

          <div className="flex flex-row items-center gap-3 md:gap-4 lg:gap-5">
            <SocialIcon
              url="https://api.whatsapp.com/send?phone=97335114292"
              network="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us via WhatsApp"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#221327]"
              bgColor="transparent"
              fgColor="white"
            />

            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-[12px] border border-[#0F0F15] px-4 py-[10px] text-center font-poppins text-[16px] font-semibold leading-[20px] text-[#0F0F15] transition hover:bg-[#0F0F15] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#221327]"
              aria-label="Chat online"
            >
              <MessageSquareText
                className="h-5 w-5 text-[#221327]"
                aria-hidden
              />
              Chat online
            </Link>
          </div>
        </div>

        {/* Right: Hotline */}
        <div className="flex flex-col gap-2 text-left lg:min-w-[220px] lg:items-end">
          <span className="font-poppins text-[16px] font-semibold leading-[20px] text-[#0F0F15]">
            ticket hotline
          </span>
          <span className="font-poppins text-[28px] font-semibold leading-[34px] tracking-[-0.5px] text-[#0F0F15] md:text-[32px] md:leading-[36px]">
            {HOTLINE_NUMBER}
          </span>
          <span className="font-poppins text-[16px] leading-[20px] text-[#6E6E81]">
            {HOTLINE_HOURS[language]}
          </span>
        </div>
      </div>
    </section>
  );
}

