"use client";
/**
 * ContactUs component - Main contact section with form
 *
 * @component
 * @example
 * ```tsx
 * <ContactUs />
 * ```
 */

// ============================================
// Component Imports
// ============================================
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/ui/Button";
import { CONTACT_CONTENT, CONTACT_BACKGROUND_IMAGE } from "@/constants/content/contact";
import { FORM_LABELS, FORM_PLACEHOLDERS, BUTTON_TEXT } from "@/constants/config/ui";
import type { ContactUsProps, ContactFormData } from "@/types/contact";
import { useTranslation } from "@/contexts/TranslationContext";

// ============================================
// Component Implementation
// ============================================

/**
 * Contact section component with content and glassmorphism form
 *
 * @param props - ContactUs component props
 * @returns Contact section element
 */
export default function ContactUs({ className = "" }: ContactUsProps) {
  const { language } = useTranslation();
  const contactContent = CONTACT_CONTENT[language];
  const formLabels = FORM_LABELS[language];
  const formPlaceholders = FORM_PLACEHOLDERS[language];
  const buttonText = BUTTON_TEXT[language];

  // Form state management
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null
  );
  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.message.trim().length > 0;

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const formEndpoint = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : null;

  /**
   * Handles form input changes
   *
   * @param e - Change event
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles form submission
   *
   * @param e - Form submit event
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formEndpoint) {
      setStatusType("error");
      setStatusMessage(
        "Contact form is not configured. Please try again later."
      );
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      if (!payload.name || !payload.email || !payload.message) {
        throw new Error("Please fill out all fields before submitting.");
      }

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage =
          result?.errors?.[0]?.message ??
          "Oops, something went wrong while sending your message.";
        throw new Error(errorMessage);
      }

      setStatusType("success");
      setStatusMessage("Thanks for reaching out! We'll be in touch shortly.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatusType("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`flex flex-col items-center justify-center bg-white px-4 py-16 md:px-8 md:py-24 lg:px-[48px] lg:py-32 xl:px-[160px] ${className}`}
      id="contact"
    >
      {/* Container */}
      <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-16 md:gap-16 lg:flex-row lg:items-start lg:gap-16">
        {/* Content Section */}
        <div className="flex w-full flex-col items-center justify-center gap-12 md:items-center md:gap-12 lg:w-auto lg:items-start lg:gap-12">
          {/* Heading Section */}
          <div className="flex w-full flex-col items-center gap-6 md:items-center lg:items-start">
            {/* Contact Badge */}
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center justify-center gap-[6px] rounded-[32px] bg-porcelain py-[6px] px-4">
                <span className="font-poppins text-sm leading-[21px] text-corduroy">
                  {contactContent.badgeLabel}
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="flex w-full flex-col items-center lg:items-start">
              <h1 className="font-poppins text-center text-[51px] font-normal leading-[51px] tracking-[-2.55px] text-racing-green md:text-[64px] md:leading-[64px] md:tracking-[-3.2px] lg:text-left lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px]">
                {contactContent.heading}
              </h1>
            </div>

            {/* Description */}
            <div className="flex w-full max-w-[800px] flex-col items-center lg:items-start">
              <p className="font-poppins text-center text-base leading-6 text-corduroy lg:text-left">
                {contactContent.description}
              </p>
            </div>
          </div>

          {/* Consultation CTA Button */}
          <div className="flex w-full items-center justify-center lg:items-start lg:justify-start">
            <Link
              href={contactContent.consultationCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="primary" size="md">
                {contactContent.consultationCtaText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="relative w-full shrink-0 md:w-full lg:w-[632px] lg:shrink-0">
          {/* Background Image Container */}
          <div className="relative isolate flex min-h-[511px] w-full items-center justify-center overflow-hidden rounded-[20px] p-6">
            {/* Blurred Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={CONTACT_BACKGROUND_IMAGE.src}
                alt={CONTACT_BACKGROUND_IMAGE.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 632px, 632px"
                priority
              />
              {/* Blur overlay */}
              <div className="absolute inset-0 backdrop-blur-md" />
            </div>

            {/* Glassmorphism Form Overlay */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 flex h-full w-full flex-col gap-5 rounded-[12px] bg-[rgba(209,209,209,0.25)] p-5 backdrop-blur-[5px] md:gap-5 md:p-5"
            >
              {/* Name Field */}
              <div className="flex w-full flex-col gap-2.5">
                <label
                  htmlFor="name"
                  className="font-poppins text-sm leading-[21px] text-white"
                >
                  {formLabels.name}
                </label>
                <div className="relative isolate">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={formPlaceholders.name}
                    className="w-full rounded-[10px] border border-[rgba(136,136,136,0.1)] bg-[rgba(0,0,0,0.3)] px-3 py-2 font-poppins text-base leading-6 text-white placeholder:text-white/75 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex w-full flex-col gap-2.5">
                <label
                  htmlFor="email"
                  className="font-poppins text-sm leading-[21px] text-white"
                >
                  {formLabels.email}
                </label>
                <div className="relative isolate">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={formPlaceholders.email}
                    className="w-full rounded-[10px] border border-[rgba(136,136,136,0.1)] bg-[rgba(0,0,0,0.3)] px-3 py-2 font-poppins text-base leading-6 text-white placeholder:text-white/75 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex w-full flex-col gap-2.5">
                <label
                  htmlFor="message"
                  className="font-poppins text-sm leading-[21px] text-white"
                >
                  {formLabels.message}
                </label>
                <div className="relative isolate">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={formPlaceholders.message}
                    rows={6}
                    className="w-full min-h-[150px] resize-none rounded-[10px] border border-[rgba(136,136,136,0.1)] bg-[rgba(0,0,0,0.3)] px-3 py-3 font-poppins text-base leading-[19px] text-white placeholder:text-white/75 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-auto flex w-full">
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting || !isFormValid}
                >
                  {isSubmitting
                    ? "Sending..."
                    : buttonText.submit}
                </Button>
              </div>

              {statusMessage && (
                <p
                  className={`text-center text-sm font-medium ${
                    statusType === "success" ? "text-green-200" : "text-red-200"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
