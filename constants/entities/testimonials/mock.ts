/**
 * Mock testimonial data (temporary - will be replaced by API)
 *
 * @module constants/entities/testimonials/mock
 */

import type { Testimonial } from "@/types/landing";

/**
 * Array of client testimonials
 */
export const mockTestimonials = {
  en: [
    {
      /** Testimonial quote */
      quote:
        "Pop Events transformed our corporate gathering into an unforgettable night. The comedy show was perfectly curated, and our team is still talking about it months later.",
      /** Client name */
      name: "Ahmed Al-Mansoori",
      /** Client company */
      company: "Bahrain Tech Solutions",
      /** Client avatar image data */
      avatar: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=88&h=88&fit=crop",
        alt: "Portrait of Ahmed Al-Mansoori, a professional businessman.",
      },
    },
    {
      /** Testimonial quote */
      quote:
        "The live music concert they organized was absolutely spectacular. Every detail was handled flawlessly, from sound quality to stage production. Our guests were blown away.",
      /** Client name */
      name: "Fatima Al-Khalifa",
      /** Client company */
      company: "Manama Events Venue",
      /** Client avatar image data */
      avatar: {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=88&h=88&fit=crop",
        alt: "Portrait of Fatima Al-Khalifa, a professional woman.",
      },
    },
    {
      /** Testimonial quote */
      quote:
        "Working with Pop Events was seamless from start to finish. They understood our vision and delivered a themed night that exceeded all expectations. Highly professional and creative.",
      /** Client name */
      name: "Khalid Al-Dosari",
      /** Client company */
      company: "Island Hospitality Group",
      /** Client avatar image data */
      avatar: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=88&h=88&fit=crop",
        alt: "Portrait of Khalid Al-Dosari, a professional businessman.",
      },
    },
  ] as Testimonial[],
  ar: [
    {
      quote:
        "حولت Pop Events تجمعنا المؤسسي إلى ليلة لا تُنسى. كان عرض الكوميديا منتقى بشكل مثالي، وفريقنا لا يزال يتحدث عنه بعد أشهر.",
      name: "أحمد المنصوري",
      company: "حلول البحرين التقنية",
      avatar: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=88&h=88&fit=crop",
        alt: "صورة لأحمد المنصوري، رجل أعمال محترف.",
      },
    },
    {
      quote:
        "كانت الحفلة الموسيقية الحية التي نظموها مذهلة تمامًا. تم التعامل مع كل تفصيل بلا عيوب، من جودة الصوت إلى إنتاج المسرح. ضيوفنا كانوا مندهشين.",
      name: "فاطمة الخليفة",
      company: "مكان فعاليات المنامة",
      avatar: {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=88&h=88&fit=crop",
        alt: "صورة لفاطمة الخليفة، امرأة محترفة.",
      },
    },
    {
      quote:
        "كان العمل مع Pop Events سلسًا من البداية إلى النهاية. فهموا رؤيتنا وقدموا ليلة مواضيعية تجاوزت كل التوقعات. احترافية وإبداعية للغاية.",
      name: "خالد الدوسري",
      company: "مجموعة جزيرة الضيافة",
      avatar: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=88&h=88&fit=crop",
        alt: "صورة لخالد الدوسري، رجل أعمال محترف.",
      },
    },
  ] as Testimonial[],
} as const;

