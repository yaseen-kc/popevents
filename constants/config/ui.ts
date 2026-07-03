/**
 * Shared UI labels, placeholders, and button text constants
 *
 * @module constants/config/ui
 */

/**
 * Form labels for contact and other forms
 */
export const FORM_LABELS = {
  en: {
    /** Name input label */
    name: "Name",
    /** Email input label */
    email: "Email",
    /** Message textarea label */
    message: "Message",
  },
  ar: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
  },
} as const;

/**
 * Form placeholders for contact and other forms
 */
export const FORM_PLACEHOLDERS = {
  en: {
    /** Name input placeholder */
    name: "Enter your name",
    /** Email input placeholder */
    email: "user@gmail.com",
    /** Message textarea placeholder */
    message: "Message here...",
  },
  ar: {
    name: "أدخل اسمك",
    email: "user@gmail.com",
    message: "اكتب رسالتك هنا...",
  },
} as const;

/**
 * Common button text constants
 */
export const BUTTON_TEXT = {
  en: {
    /** Submit button text */
    submit: "Send Message",
    /** Book tickets button text */
    bookTickets: "Book your tickets",
    /** Learn more button text */
    learnMore: "Learn more",
    /** View all button text */
    viewAll: "View all",
    /** Next service button text */
    nextService: "Next service",
    /** Back to start button text */
    backToStart: "Back to start",
  },
  ar: {
    submit: "إرسال الرسالة",
    bookTickets: "احجز تذاكرك",
    learnMore: "اعرف المزيد",
    viewAll: "عرض الكل",
    nextService: "الخدمة التالية",
    backToStart: "العودة للبداية",
  },
} as const;

/**
 * Footer newsletter constants
 */
export const FOOTER_NEWSLETTER = {
  en: {
    stayUpdated: "Stay updated",
    subscribeDescription: "Subscribe to our newsletter to get the latest events and updates.",
    enterEmail: "Enter your email",
    subscribe: "Subscribe",
    privacyNote: "We respect your privacy. Unsubscribe at any time.",
    emailError: "Please enter a valid email address.",
    subscribeSuccess: "You have been subscribed to the newsletter.",
  },
  ar: {
    stayUpdated: "ابق على اطلاع",
    subscribeDescription: "اشترك في نشرتنا الإخبارية للحصول على أحدث الفعاليات والتحديثات.",
    enterEmail: "أدخل بريدك الإلكتروني",
    subscribe: "اشترك",
    privacyNote: "نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.",
    emailError: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
    subscribeSuccess: "تم الاشتراك في النشرة الإخبارية.",
  },
} as const;

/**
 * Platform page constants
 */
export const BRAND_TAGLINE = {
  en: "Entertainment discovery and monetisation platform.",
  ar: "منصة اكتشاف الترفيه والاستثمار.",
} as const;
export const HOTLINE_NUMBER = "+973 35114292" as const;
export const HOTLINE_HOURS = {
  en: "Sun - Thu 9:00 - 17:00",
  ar: "الأحد - الخميس 9:00 - 17:00",
} as const;

/**
 * Platform page static UI labels (section headings, links, CTA text)
 */
export const PLATFORM_LABELS = {
  en: {
    /** Upcoming Events section heading */
    upcomingEvents: "Upcoming Events",
    /** Past Events section heading */
    pastEvents: "Past Events",
    /** Venues section heading */
    venues: "Venues",
    /** Popular artists section heading */
    popularArtists: "Popular artists",
    /** Shared "show all" link label */
    showAll: "Show all",
    /** CTA contact heading */
    ctaHeading: "Do you have any questions? Please contact us",
    /** CTA chat online button */
    chatOnline: "Chat online",
    /** CTA ticket hotline label */
    ticketHotline: "ticket hotline",
  },
  ar: {
    upcomingEvents: "الفعاليات القادمة",
    pastEvents: "الفعاليات السابقة",
    venues: "الأماكن",
    popularArtists: "الفنانون المشهورون",
    showAll: "عرض الكل",
    ctaHeading: "هل لديك أي أسئلة؟ يرجى التواصل معنا",
    chatOnline: "الدردشة عبر الإنترنت",
    ticketHotline: "الخط الساخن للتذاكر",
  },
} as const;

