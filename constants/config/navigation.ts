/**
 * Navigation and footer content constants
 *
 * @module constants/config/navigation
 */

/**
 * Footer branding content constants
 */
export const FOOTER_BRANDING = {
  en: {
    /** Company name */
    companyName: "Pop Events",
    /** Company tagline */
    tagline: "Creating unforgettable entertainment experiences in GCC .",
  },
  ar: {
    companyName: "Pop Events",
    tagline: "خلق تجارب ترفيهية لا تُنسى في دول مجلس التعاون.",
  },
} as const;

/**
 * Footer navigation links - Pages section
 */
export const FOOTER_PAGES_LINKS = {
  en: [
    {
      /** Link label */
      label: "Home",
      /** Link URL path */
      href: "/",
    },
    {
      /** Link label */
      label: "About",
      /** Link URL path */
      href: "/about",
    },
    {
      /** Link label */
      label: "Services",
      /** Link URL path */
      href: "/#services",
    },
    // {
    //   /** Link label */
    //   label: "Blog",
    //   /** Link URL path */
    //   href: "/blog",
    // },
    {
      /** Link label */
      label: "Events",
      /** Link URL path */
      href: "/platform",
    },
  ],
  ar: [
    {
      label: "الرئيسية",
      href: "/",
    },
    {
      label: "من نحن",
      href: "/about",
    },
    {
      label: "الخدمات",
      href: "/#services",
    },
    {
      label: "الفعاليات",
      href: "/platform",
    },
  ],
} as const;


/**
 * Footer bottom section content constants
 */
export const FOOTER_BOTTOM = {
  en: {
    /** Copyright text */
    copyright: "© 2025 Pop Events, All rights reserved",
  },
  ar: {
    copyright: "© 2025 Pop Events، جميع الحقوق محفوظة",
  },
} as const;

/**
 * Navigation bar links - Main navigation menu
 */
export const NAVBAR_LINKS = {
  en: [
    {
      /** Link label */
      label: "Home",
      /** Link URL path */
      href: "/",
    },
    {
      /** Link label */
      label: "Services",
      /** Link URL path */
      href: "/#services",
    },
    {
      /** Link label */
      label: "About",
      /** Link URL path */
      href: "/about",
    },
    // {
    //   /** Link label */
    //   label: "Blog",
    //   /** Link URL path */
    //   href: "/blog",
    // },
    {
      /** Link label */
      label: "Contact",
      /** Link URL path */
      href: "/contact",
    },
    {
      /** Link label */
      label: "Events",
      /** Link URL path */
      href: "/platform",
    },
  ],
  ar: [
    {
      label: "الرئيسية",
      href: "/",
    },
    {
      label: "الخدمات",
      href: "/#services",
    },
    {
      label: "من نحن",
      href: "/about",
    },
    {
      label: "اتصل بنا",
      href: "/contact",
    },
    {
      label: "الفعاليات",
      href: "/platform",
    },
  ],
} as const;

