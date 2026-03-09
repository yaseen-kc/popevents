/**
 * Landing page static text content
 *
 * @module constants/content/landing
 */

import type { ServicesContent } from "@/types/landing";

/**
 * Hero section content constants
 */
export const HERO_CONTENT = {
  en: {
    /** Scarcity badge text */
    badgeText: "Limited availability",
    /** Main headline - first line */
    headlineLine1: "Unforgettable",
    /** Main headline - second line */
    headlineLine2: "experiences in GCC & Worldwide",
    /** Main headline - third line */
    description:
      "We bring world-class live entertainment and event management to GCC. From live concerts and celebrity appearances to comedy shows and corporate events, we create unforgettable moments that audiences remember.",
    /** Call-to-action button text */
    ctaText: "Book your tickets",
    /** External booking link */
    ctaLink: "/platform",
  },
  ar: {
    badgeText: "توفر محدود",
    headlineLine1: "تجارب",
    headlineLine2: "لا تُنسى في دول مجلس التعاون",
    description:
      "نقدم ترفيهًا عالمي المستوى إلى دول مجلس التعاون. من الحفلات الموسيقية الحية، وحضور المشاهير، وعروض الكوميديا إلى الفعاليات المؤسسية. نخلق لحظات سيذكرها الجميع.",
    ctaText: "احجز تذاكرك",
    ctaLink: "/platform",
  },
} as const;

/**
 * Hero section image data
 */
export const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=992&h=1200&fit=crop",
    alt: "Live music concert with vibrant stage lighting and enthusiastic crowd in the background.",
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=992&h=1200&fit=crop",
    alt: "Stand-up comedian performing on stage with microphone, engaging with the audience.",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=992&h=1200&fit=crop",
    alt: "Energetic live performance on stage with dynamic lighting and crowd atmosphere.",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=992&h=1200&fit=crop",
    alt: "Professional event setup with stage, lighting, and entertainment equipment ready for a performance.",
  },
] as const;

/**
 * Hero section background image
 */
export const HERO_BACKGROUND_IMAGE = {
  /** Background image URL from Unsplash - live concert/event atmosphere */
  src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/hero-image.webp",
  /** Background image alt text */
  alt: "Live music concert with vibrant stage lighting and enthusiastic crowd creating an energetic atmosphere.",
} as const;

/**
 * About section content constants
 */
export const ABOUT_CONTENT = {
  en: {
    /** Eyebrow label for the section badge */
    badgeLabel: "About",
    /**
     * Structured heading lines with tone metadata so we can emphasize
     * specific words per the design reference
     */
    headingLines: [
      [
        { text: "We're a passionate team of ", tone: "muted" },
        { text: "entertainment ", tone: "accent" },
        { text: "experts bringing ", tone: "accent" },
      ],
      [
        { text: "world-class entertainment ", tone: "accent" },
        { text: "across the ", tone: "muted" },
        { text: "GCC.", tone: "accent" },
      ],
    ],
    /** Primary call-to-action label */
    ctaText: "Learn more",
    /** Primary call-to-action link */
    ctaLink: "/about",
  },
  ar: {
    badgeLabel: "من نحن",
    headingLines: [
      [
        { text: "نحن فريق شغوف من ", tone: "muted" },
        { text: "خبراء الترفيه ", tone: "accent" },
        { text: "الذين يجلبون ", tone: "accent" },
      ],
      [
        { text: "فعاليات عالمية المستوى ", tone: "accent" },
        { text: "إلى ", tone: "muted" },
        { text: "دول مجلس التعاون.", tone: "accent" },
      ],
    ],
    ctaText: "اعرف المزيد",
    ctaLink: "/about",
  },
} as const;

/**
 * Services section content constants
 */
export const SERVICES_CONTENT = {
  en: {
    /** Eyebrow label for the section badge */
    badgeLabel: "Services",
    /** Main heading for the services section */
    heading: "Entertainment experiences in GCC that captivate",
    /** Description text explaining the services */
    description:
      "From intimate comedy nights to grand concerts, we curate unforgettable entertainment experiences across GCC. Every event is crafted with precision, passion, and an unwavering commitment to excellence.",
    /** Array of service offerings */
    services: [
    {
      /** Service title */
      title: "Live music concerts",
      /** Route-friendly identifier */
      slug: "live-music-concerts",
      /** Service description */
      description:
        "Electrifying live performances from local and international artists. We handle everything from sound to stage production.",
      /** Service image data */
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/music-concert.webp",
        alt: "Live music concert with vibrant stage lighting, musicians performing, and enthusiastic crowd.",
      },
    },
    {
      /** Service title */
      title: "Celebrity appearances",
      /** Route-friendly identifier */
      slug: "celebrity-appearances",
      /** Service description */
      description:
        "Exclusive access to celebrity talent for meet-and-greets, performances, and special appearances that elevate your event.",
      /** Service image data */
      image: {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1024&h=1024&fit=crop",
        alt: "Celebrity on red carpet with camera flashes and media attention, creating an exciting atmosphere.",
      },
    },
    {
      /** Service title */
      title: "Open mic nights",
      /** Route-friendly identifier */
      slug: "open-mic-nights",
      /** Service description */
      description:
        "Platform for emerging talent to shine. We create welcoming spaces where artists can showcase their skills and connect with audiences.",
      /** Service image data */
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/open-mic.webp",
        alt: "Open mic night performance with artist on stage, microphone, and intimate audience setting.",
      },
    },
    {
      /** Service title */
      title: "Themed entertainment nights",
      /** Route-friendly identifier */
      slug: "themed-entertainment-nights",
      /** Service description */
      description:
        "Immersive themed experiences that transport your guests. From retro nights to cultural celebrations, we bring concepts to life.",
      /** Service image data */
      image: {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1024&h=1024&fit=crop",
        alt: "Themed party event with decorative lighting, colorful atmosphere, and guests enjoying the entertainment.",
      },
    },
    {
      /** Service title */
      title: "Stand up comedy performances",
      /** Route-friendly identifier */
      slug: "stand-up-comedy-performances",
      /** Service description */
      description:
        "Laugh-out-loud experiences featuring top comedians. Perfect for venues looking to entertain and engage their audience with humor.",
      /** Service image data */
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/stand-up-comedy.webp",
        alt: "Stand-up comedian on stage with microphone, performing to an engaged audience in a comedy club setting.",
      },
    },
    {
      /** Service title */
      title: "Corporate entertainment shows",
      /** Route-friendly identifier */
      slug: "corporate-entertainment-shows",
      /** Service description */
      description:
        "Professional entertainment solutions for corporate events, conferences, and business gatherings that impress clients and motivate teams.",
      /** Service image data */
      image: {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1024&h=1024&fit=crop",
        alt: "Corporate event with professional stage setup, business audience, and entertainment performance.",
      },
    },
  ],
  },
  ar: {
    badgeLabel: "الخدمات",
    heading: "تجارب ترفيهية آسرة",
    description:
      "من أمسيات الكوميديا الحميمة إلى الحفلات الكبرى، نقدم تجارب ترفيهية لا تُنسى في جميع أنحاء دول مجلس التعاون. يتم تصميم كل حدث بدقة وشغف والتزام ثابت بالتميز.",
    services: [
      {
        title: "حفلات موسيقية حية",
        slug: "live-music-concerts",
        description:
          "عروض حية مذهلة من فنانين محليين ودوليين. نتعامل مع كل شيء من الصوت إلى إنتاج المسرح.",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/music-concert.webp",
          alt: "حفلة موسيقية حية مع إضاءة مسرحية نابضة بالحياة، موسيقيون يؤدون، وجمهور متحمس.",
        },
      },
      {
        title: "حضور المشاهير",
        slug: "celebrity-appearances",
        description:
          "وصول حصري لمواهب المشاهير للقاءات، والعروض، والظهورات الخاصة التي ترفع من مستوى حدثك.",
        image: {
          src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1024&h=1024&fit=crop",
          alt: "مشهور على السجادة الحمراء مع ومضات الكاميرا واهتمام الإعلام، مما يخلق أجواء مثيرة.",
        },
      },
      {
        title: "أمسيات الميكروفون المفتوح",
        slug: "open-mic-nights",
        description:
          "منصة للمواهب الناشئة للتألق. نخلق مساحات ترحيبية حيث يمكن للفنانين عرض مواهبهم والتواصل مع الجماهير.",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/open-mic.webp",
          alt: "أداء في أمسية الميكروفون المفتوح مع فنان على المسرح، ميكروفون، وإعداد جمهور حميم.",
        },
      },
      {
        title: "أمسيات ترفيهية مواضيعية",
        slug: "themed-entertainment-nights",
        description:
          "تجارب مواضيعية غامرة تنقل ضيوفك. من أمسيات الستينيات إلى الاحتفالات الثقافية، نحول المفاهيم إلى واقع.",
        image: {
          src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1024&h=1024&fit=crop",
          alt: "حدث حفلة مواضيعية مع إضاءة زخرفية، أجواء ملونة، وضيوف يستمتعون بالترفيه.",
        },
      },
      {
        title: "عروض الكوميديا الارتجالية",
        slug: "stand-up-comedy-performances",
        description:
          "تجارب مضحكة للغاية تضم أفضل الكوميديين. مثالية للأماكن التي تبحث عن الترفيه وإشراك جمهورها بالفكاهة.",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/stand-up-comedy.webp",
          alt: "كوميدي ارتجالي على المسرح مع ميكروفون، يؤدي أمام جمهور منخرط في إعداد نادي كوميديا.",
        },
      },
      {
        title: "عروض ترفيهية مؤسسية",
        slug: "corporate-entertainment-shows",
        description:
          "حلول ترفيهية احترافية للفعاليات المؤسسية والمؤتمرات والتجمعات التجارية التي تثير إعجاب العملاء وتحفز الفرق.",
        image: {
          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1024&h=1024&fit=crop",
          alt: "حدث مؤسسي مع إعداد مسرحي احترافي، جمهور أعمال، وأداء ترفيهي.",
        },
      },
    ],
  },
} as const;

/**
 * Testimonials section content constants (static text only)
 */
export const TESTIMONIALS_CONTENT = {
  en: {
    /** Eyebrow label for the section badge */
    badgeLabel: "Testimonials",
    /** Main heading for the testimonials section */
    heading: "What our clients say",
    /** Description text explaining the testimonials section */
    description:
      "We don't just organize events—we create memorable experiences that keep clients coming back and audiences talking.",
    /** Call-to-action button text */
    ctaText: "Book your tickets",
    /** Call-to-action booking link */
    ctaLink: "/platform",
  },
  ar: {
    badgeLabel: "الشهادات",
    heading: "ماذا يقول عملاؤنا",
    description:
      "نحن لا ننظم الفعاليات فحسب—نحن نخلق تجارب لا تُنسى تجعل العملاء يعودون والجماهير تتحدث.",
    ctaText: "احجز تذاكرك",
    ctaLink: "/platform",
  },
} as const;

// Import entity data for combined export
// TODO: Components should import directly from entities when ready
import { mockTestimonials } from "@/constants/entities/testimonials/mock";
import type { Testimonial } from "@/types/landing";

/**
 * Combined testimonials content (static + dynamic data)
 * TODO: Replace with async data fetching from entities
 */
export const TESTIMONIALS_CONTENT_WITH_DATA = {
  en: {
    ...TESTIMONIALS_CONTENT.en,
    testimonials: mockTestimonials.en,
  },
  ar: {
    ...TESTIMONIALS_CONTENT.ar,
    testimonials: mockTestimonials.ar,
  },
} as const;

/**
 * Resources & Insights section content constants (static text only)
 */
export const RESOURCES_AND_INSIGHTS_CONTENT = {
  en: {
    /** Eyebrow label for the section badge */
    badgeLabel: "Resources & insights",
    /** Main heading for the resources section */
    heading: "Insights for exceptional events",
    /** View all link text */
    viewAllText: "View all",
  },
  ar: {
    badgeLabel: "الموارد والرؤى",
    heading: "رؤى للفعاليات الاستثنائية",
    viewAllText: "عرض الكل",
  },
} as const;

// Import entity data for combined export
// TODO: Components should import directly from entities when ready
import { mockArticles } from "@/constants/entities/articles/mock";
import { CATEGORY_COLORS } from "@/constants/config/colors";
import type { Article } from "@/types/landing";

/**
 * Combined resources and insights content (static + dynamic data)
 * TODO: Replace with async data fetching from entities
 */
export const RESOURCES_AND_INSIGHTS_CONTENT_WITH_DATA = {
  en: {
    ...RESOURCES_AND_INSIGHTS_CONTENT.en,
    articles: mockArticles.en,
    categoryColors: CATEGORY_COLORS,
  },
  ar: {
    ...RESOURCES_AND_INSIGHTS_CONTENT.ar,
    articles: mockArticles.ar,
    categoryColors: CATEGORY_COLORS,
  },
} as const;

/**
 * FAQ section content constants
 */
export const FAQ_CONTENT = {
  en: {
    /** Eyebrow label for the section badge */
    badgeLabel: "FAQ",
    /** Main heading for the FAQ section */
    heading: "Frequently asked questions",
    /** Description text explaining the FAQ section */
    description:
      "Here are the top questions our clients ask before booking their event.",
    /** Array of frequently asked questions */
    questions: [
    {
      /** Question text */
      question: "How far in advance should we book an event?",
      /** Answer text */
      answer:
        "We recommend booking at least 4-6 weeks in advance to ensure availability of your preferred talent and venue. For larger events or celebrity appearances, we suggest 8-12 weeks notice. However, we understand that sometimes events come together quickly, and we'll do our best to accommodate last-minute requests when possible.",
    },
    {
      /** Question text */
      question: "What types of venues do you work with?",
      /** Answer text */
      answer:
        "We work with a wide range of venues across GCC, from intimate comedy clubs and music halls to large concert venues and corporate spaces. Whether you have your own venue or need recommendations, we can help find the perfect space that matches your event's size, style, and requirements.",
    },
    {
      /** Question text */
      question: "Do you handle all technical aspects like sound and lighting?",
      /** Answer text */
      answer:
        "Yes, absolutely. We provide end-to-end event management, including professional sound systems, stage lighting, stage setup, and all technical requirements. Our team ensures everything runs smoothly so you can focus on enjoying the event. We work with trusted local vendors to deliver professional-grade production quality.",
    },
    {
      /** Question text */
      question: "Can you customize entertainment for corporate events?",
      /** Answer text */
      answer:
        "Definitely. We specialize in tailoring entertainment to match your company's brand, audience, and event objectives. Whether you need family-friendly comedy, sophisticated live music, or themed entertainment that aligns with your corporate culture, we'll work with you to create a customized experience that resonates with your guests.",
    },
    {
      /** Question text */
      question: "What happens if an artist or performer cancels?",
      /** Answer text */
      answer:
        "While cancellations are rare, we always have backup plans in place. We maintain relationships with multiple talented performers and can quickly arrange suitable replacements. Our contracts include cancellation policies, and we'll work transparently with you to find the best solution, ensuring your event proceeds successfully.",
    },
  ],
  },
  ar: {
    badgeLabel: "الأسئلة الشائعة",
    heading: "الأسئلة الأكثر شيوعًا",
    description: "إليك أهم الأسئلة التي يطرحها عملاؤنا قبل حجز فعاليتهم.",
    questions: [
      {
        question: "كم مقدماً يجب أن نحجز حدثًا؟",
        answer:
          "نوصي بالحجز قبل 4-6 أسابيع على الأقل لضمان توفر الموهبة والموقع المفضل لديك. للفعاليات الكبيرة أو حضور المشاهير، نقترح إشعارًا قبل 8-12 أسبوعًا. ومع ذلك، نفهم أن الأحداث أحيانًا تتشكل بسرعة، وسنبذل قصارى جهدنا لاستيعاب الطلبات في اللحظة الأخيرة عندما يكون ذلك ممكنًا.",
      },
      {
        question: "ما أنواع الأماكن التي تعملون معها؟",
        answer:
          "نعمل مع مجموعة واسعة من الأماكن في جميع أنحاء دول مجلس التعاون، من نوادي الكوميديا الحميمة وقاعات الموسيقى إلى أماكن الحفلات الكبيرة والمساحات المؤسسية. سواء كان لديك مكانك الخاص أو تحتاج إلى توصيات، يمكننا المساعدة في العثور على المساحة المثالية التي تطابق حجم حدثك وأسلوبه ومتطلباته.",
      },
      {
        question: "هل تتعاملون مع جميع الجوانب التقنية مثل الصوت والإضاءة؟",
        answer:
          "نعم، بالتأكيد. نقدم إدارة فعاليات شاملة، بما في ذلك أنظمة الصوت الاحترافية، وإضاءة المسرح، وإعداد المسرح، وجميع المتطلبات التقنية. يضمن فريقنا أن كل شيء يعمل بسلاسة حتى تتمكن من التركيز على الاستمتاع بالحدث. نعمل مع موردين محليين موثوقين لتقديم جودة إنتاج احترافية.",
      },
      {
        question: "هل يمكنكم تخصيص الترفيه للفعاليات المؤسسية؟",
        answer:
          "بالتأكيد. نتخصص في تخصيص الترفيه ليتطابق مع علامتك التجارية وجمهورك وأهداف حدثك. سواء كنت بحاجة إلى كوميديا مناسبة للعائلة، أو موسيقى حية راقية، أو ترفيه مواضيعي يتماشى مع ثقافتك المؤسسية، سنعمل معك لإنشاء تجربة مخصصة تتردد صداها مع ضيوفك.",
      },
      {
        question: "ماذا يحدث إذا ألغى فنان أو مؤدي؟",
        answer:
          "بينما الإلغاءات نادرة، لدينا دائمًا خطط احتياطية. نحافظ على علاقات مع مؤدين موهوبين متعددين ويمكننا ترتيب بدائل مناسبة بسرعة. تتضمن عقودنا سياسات الإلغاء، وسنعمل بشفافية معك لإيجاد أفضل حل، مما يضمن نجاح حدثك.",
      },
    ],
  },
} as const;

/**
 * CTA section content constants
 */
export const CTA_CONTENT = {
  en: {
    /** Main heading for the CTA section */
    heading: "Ready to join an unforgettable event?",
    /** Description text explaining the CTA */
    description:
      "Join us at our upcoming events across GCC. From intimate comedy nights to grand concerts, we host unforgettable entertainment experiences that audiences remember. Check out our upcoming events and book your tickets.",
    /** Call-to-action button text */
    buttonText: "Book your tickets",
    /** External booking link for Cal.com scheduling */
    buttonLink: "/platform",
  /** Array of image columns for the visual grid */
  imageColumns: [
    [
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1024&h=1024&fit=crop",
        alt: "Live music concert with vibrant stage lighting and enthusiastic crowd enjoying the performance.",
      },
      {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1024&h=1024&fit=crop",
        alt: "Stand-up comedian performing on stage with microphone, creating laughter and engagement with the audience.",
      },
      {
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1024&h=1024&fit=crop",
        alt: "Energetic live performance on stage with dynamic lighting, showcasing the excitement of live entertainment.",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1024&h=1024&fit=crop",
        alt: "Themed entertainment night with creative decorations, colorful atmosphere, and guests having a great time.",
      },
      {
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1024&h=1024&fit=crop",
        alt: "Professional event setup with stage, lighting equipment, and entertainment production ready for a performance.",
      },
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1024&h=1024&fit=crop",
        alt: "Corporate entertainment event with professional stage setup and business audience enjoying the show.",
      },
    ],
  ],
  },
  ar: {
    heading: "هل أنت مستعد للانضمام إلى حدث لا يُنسى؟",
    description:
      "انضم إلينا في فعالياتنا القادمة في جميع أنحاء دول مجلس التعاون. من أمسيات الكوميديا الحميمة إلى الحفلات الكبرى، نستضيف تجارب ترفيهية لا تُنسى يتذكرها الجمهور. تحقق من فعالياتنا القادمة واحجز تذاكرك.",
    buttonText: "احجز تذاكرك",
    buttonLink: "/platform",
    imageColumns: [
      [
        {
          src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1024&h=1024&fit=crop",
          alt: "حفلة موسيقية حية مع إضاءة مسرحية نابضة بالحياة وجمهور متحمس يستمتع بالأداء.",
        },
        {
          src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1024&h=1024&fit=crop",
          alt: "كوميدي ارتجالي يؤدي على المسرح مع ميكروفون، يخلق الضحك والتفاعل مع الجمهور.",
        },
        {
          src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1024&h=1024&fit=crop",
          alt: "أداء حي نشط على المسرح مع إضاءة ديناميكية، يعرض إثارة الترفيه الحي.",
        },
      ],
      [
        {
          src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1024&h=1024&fit=crop",
          alt: "ليلة ترفيهية مواضيعية مع ديكورات إبداعية، أجواء ملونة، وضيوف يستمتعون بوقتهم.",
        },
        {
          src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1024&h=1024&fit=crop",
          alt: "إعداد حدث احترافي مع مسرح، معدات إضاءة، وإنتاج ترفيهي جاهز للأداء.",
        },
        {
          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1024&h=1024&fit=crop",
          alt: "حدث ترفيهي مؤسسي مع إعداد مسرحي احترافي وجمهور أعمال يستمتع بالعرض.",
        },
      ],
    ],
  },
} as const;

/**
 * Past Events section content constants (static text only)
 */
export const PREVIOUS_EVENTS_CONTENT = {
  en: {
    /** Eyebrow label for the section badge */
    badgeLabel: "Past Events",
    /** Main heading for the Past Events section */
    heading: "Events that shaped the moment",
    /** Description text explaining the Past Events section */
    description:
      "A showcase of our most memorable events that brought unforgettable experiences to audiences across GCC.",
  },
  ar: {
    badgeLabel: "الفعاليات السابقة",
    heading: "فعاليات صنعت التاريخ",
    description:
      "عرض لأكثر فعالياتنا التي لا تُنسى والتي جلبت تجارب لا تُنسى للجماهير في جميع أنحاء دول مجلس التعاون.",
  },
} as const;

/**
 * Upcoming Events section content constants (static text only)
 */
export const UPCOMING_EVENTS_CONTENT = {
  en: {
    /** Eyebrow label for the section badge */
    badgeLabel: "Upcoming Events",
    /** Main heading for the Upcoming Events section */
    heading: "Upcoming Events",
    /** Description text explaining the Upcoming Events section */
    description:
      "Discover our upcoming lineup of unforgettable entertainment experiences across GCC.",
  },
  ar: {
    badgeLabel: "الفعاليات القادمة",
    heading: "الفعاليات القادمة",
    description:
      "اكتشف قائمة فعالياتنا القادمة من التجارب الترفيهية التي لا تُنسى في جميع أنحاء دول مجلس التعاون.",
  },
} as const;

// Import entity data for combined export
// TODO: Components should import directly from entities when ready
import { mockEventDetailMap } from "@/constants/entities/events/mock";
import type { PreviousEvent, UpcomingEvent } from "@/types/landing";
import type { EventDetail } from "@/constants/entities/events";

/**
 * Derive past events from mockEventDetailMap (completed events only)
 */
const derivedPastEvents: PreviousEvent[] = Object.values(mockEventDetailMap)
  .map(eventData => eventData.en)
  .filter((event): event is EventDetail & { heroContent: NonNullable<EventDetail['heroContent']> } => 
    event.status === "completed" && event.heroContent !== undefined && event.heroContent.slides.length > 0
  )
  .map(event => ({
    dateTime: event.heroContent.info.date,
    name: event.heroContent.info.title,
    location: event.heroContent.info.location,
    image: event.heroContent.slides[0].image,
  }));

/**
 * Combined Past Events content (static + dynamic data)
 * TODO: Replace with async data fetching from entities
 */
export const PREVIOUS_EVENTS_CONTENT_WITH_DATA = {
  en: {
    ...PREVIOUS_EVENTS_CONTENT.en,
    events: derivedPastEvents,
  },
  ar: {
    ...PREVIOUS_EVENTS_CONTENT.ar,
    events: derivedPastEvents,
  },
} as const;

/**
 * Derive upcoming events from mockEventDetailMap (in-progress events only)
 */
const derivedUpcomingEvents: UpcomingEvent[] = Object.values(mockEventDetailMap)
  .map(eventData => eventData.en)
  .filter((event): event is EventDetail & { heroContent: NonNullable<EventDetail['heroContent']>; topEvent: NonNullable<EventDetail['topEvent']> } => 
    event.status === "in-progress" && event.heroContent !== undefined && event.topEvent !== undefined
  )
  .map(event => ({
    slug: event.id,
    dateTime: event.heroContent.info.date,
    name: event.heroContent.info.title,
    location: event.heroContent.info.location,
    image: event.topEvent.image,
  }));

/**
 * Combined Upcoming Events content (static + dynamic data)
 * TODO: Replace with async data fetching from entities
 */
export const UPCOMING_EVENTS_CONTENT_WITH_DATA = {
  en: {
    ...UPCOMING_EVENTS_CONTENT.en,
    events: derivedUpcomingEvents,
  },
  ar: {
    ...UPCOMING_EVENTS_CONTENT.ar,
    events: derivedUpcomingEvents,
  },
} as const;

