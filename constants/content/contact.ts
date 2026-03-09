/**
 * Contact page static text content
 *
 * @module constants/content/contact
 */

/**
 * Contact section content constants
 */
export const CONTACT_CONTENT = {
    en: {
        /** Eyebrow label for the section badge */
        badgeLabel: "Contact us",
        /** Main heading for the contact section */
        heading: "We'd love to hear from you",
        /** Description text explaining the contact section */
        description:
            "Ready to bring your event vision to life? Get in touch to discuss your entertainment needs. Alternatively, drop us a message and we'll respond within 48 hours.",
        /** Call-to-action button text for consultation */
        consultationCtaText: "Book your tickets",
        /** Booking link for consultation CTA */
        consultationCtaLink: "/platform",
    },
    ar: {
        badgeLabel: "اتصل بنا",
        heading: "نود أن نسمع منك",
        description:
            "هل أنت مستعد لتحويل رؤية حدثك إلى واقع؟ تواصل معنا لمناقشة احتياجاتك الترفيهية. بدلاً من ذلك، أرسل لنا رسالة وسنرد خلال 48 ساعة.",
        consultationCtaText: "احجز تذاكرك",
        consultationCtaLink: "/platform",
    },
} as const;

/**
 * Contact form background image
 */
export const CONTACT_BACKGROUND_IMAGE = {
    /** Background image URL from Unsplash - live concert stage */
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop&q=80",
    /** Background image alt text */
    alt: "Live concert stage with vibrant stage lights and audience silhouettes in the background.",
} as const;

/**
 * Social media links for Pop Events
 */
export const SOCIAL_MEDIA_LINKS = [
    {
        /** Platform name */
        platform: "Instagram",
        /** Link URL */
        url: "https://www.instagram.com/popEvents.bh",
    },
    {
        /** Platform name */
        platform: "Email",
        /** Link URL */
        url: "mailto:popevents95@gmail.com",
    },
    {
        /** Platform name */
        platform: "TikTok",
        /** Link URL */
        url: "https://tiktok.com/@popevents.bh",
    },
    {
        /** Platform name */
        platform: "WhatsApp",
        /** Link URL */
        url: "https://api.whatsapp.com/send?phone=97335114292",
    },
    {
        /** Platform name */
        platform: "Snapchat",
        /** Link URL */
        url: "https://www.snapchat.com/@pop_events",
    },
] as const;

