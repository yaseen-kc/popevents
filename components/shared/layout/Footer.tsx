"use client";

/**
 * Footer component - Site footer with branding, navigation links, and copyright
 *
 * @component
 * @example
 * ```tsx
 * <Footer />
 * ```
 */

// ============================================
// Component Imports
// ============================================
import { useState } from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import {
  FOOTER_BRANDING,
  FOOTER_PAGES_LINKS,
  FOOTER_BOTTOM,
} from "@/constants/config/navigation";
import { useTranslation } from "@/contexts/TranslationContext";
import { FOOTER_NEWSLETTER } from "@/constants/config/ui";

// ============================================
// Component Implementation
// ============================================

/**
 * Footer section component with branding, navigation links, and copyright information
 *
 * @returns Footer element
 */
export default function Footer() {
  const { language } = useTranslation();
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const newsletterContent = FOOTER_NEWSLETTER[language];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailValid) {
      setTouched(true);
      setStatus("error");
      return;
    }

    // TODO: send email to newsletter subscription API
    console.log("Newsletter subscription:", email);

    setStatus("success");
    setEmail("");
    setTouched(false);

    // Reset status after a short delay
    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  };

  return (
    <footer
      data-stay-light
      className="flex flex-col items-center justify-center bg-[#050E3C] rounded-t-[20px] py-16 px-4 md:py-24 md:px-8 lg:py-24 lg:px-12"
    >
      {/* Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1280px] gap-16">
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-12 lg:gap-0">
          {/* Left Column - Branding */}
          <div className="flex flex-col items-start gap-6 w-full md:w-auto">
            {/* Company Name */}
            <Link
              href="/"
              className="font-poppins text-[36px] font-normal leading-[43px] tracking-[-1.08px] text-white hover:opacity-80 transition-opacity"
            >
              {FOOTER_BRANDING[language].companyName}
            </Link>

            {/* Tagline */}
            <p className="font-poppins text-base font-normal leading-6 text-white">
              {FOOTER_BRANDING[language].tagline}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <SocialIcon
                url="https://www.instagram.com/popEvents.bh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 32, width: 32 }}
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon
                url="mailto:popevents95@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 32, width: 32 }}
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon
                url="https://tiktok.com/@popevents.bh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 32, width: 32 }}
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon
                url="https://api.whatsapp.com/send?phone=97335114292"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 32, width: 32 }}
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.snapchat.com/@pop_events"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 32, width: 32 }}
                bgColor="transparent"
                fgColor="white"
              />
            </div>

            {/* Newsletter Subscription */}
            <form
              className="mt-4 flex w-full max-w-md flex-col gap-3"
              onSubmit={handleSubmit}
              noValidate
            >
              <label
                htmlFor="footer-email"
                className="font-poppins text-sm font-medium leading-[21px] text-white"
              >
                {newsletterContent.stayUpdated}
              </label>
              <p className="font-poppins text-xs font-normal leading-[18px] text-white/70">
                {newsletterContent.subscribeDescription}
              </p>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row">
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder={newsletterContent.enterEmail}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={() => setTouched(true)}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2 font-poppins text-sm text-white placeholder:text-white/50 outline-none focus:border-white/60"
                  aria-invalid={touched && !isEmailValid}
                  aria-describedby="footer-email-helper footer-email-error"
                />
                <button
                  type="submit"
                  disabled={!isEmailValid}
                  className="whitespace-nowrap rounded-full bg-white px-6 py-2 font-poppins text-sm font-semibold text-[#050E3C] transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-white/40"
                >
                  {newsletterContent.subscribe}
                </button>
              </div>
              <p
                id="footer-email-helper"
                className="font-poppins text-xs font-normal leading-[18px] text-white/60"
              >
                {newsletterContent.privacyNote}
              </p>
              {touched && !isEmailValid && email.length > 0 && (
                <p
                  id="footer-email-error"
                  className="font-poppins text-xs font-normal leading-[18px] text-red-400"
                >
                  {newsletterContent.emailError}
                </p>
              )}
              {status === "success" && (
                <p className="font-poppins text-xs font-normal leading-[18px] text-emerald-400">
                  {newsletterContent.subscribeSuccess}
                </p>
              )}
            </form>
          </div>

          {/* Right Columns - Navigation Links */}
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 lg:gap-16 w-full lg:w-auto">
            {/* Pages Column */}
            <div className="flex flex-col items-start gap-4">
              <nav
                className="flex flex-col items-start gap-4"
                aria-label="Footer navigation"
              >
                {FOOTER_PAGES_LINKS[language].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-poppins text-base font-normal leading-6 text-white hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-0 pt-8 border-t border-gray-border">
          {/* Copyright */}
          <p className="font-poppins text-sm font-normal leading-[21px] text-white">
            {FOOTER_BOTTOM[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
