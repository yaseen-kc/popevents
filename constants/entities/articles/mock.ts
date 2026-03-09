/**
 * Mock article data (temporary - will be replaced by API)
 *
 * @module constants/entities/articles/mock
 */

import type { Article } from "@/types/landing";

/**
 * Array of article/blog post items
 */
export const mockArticles = {
  en: [
    {
      /** Article category */
      category: "Planning" as const,
      /** Publication date */
      date: "May 11, 2025",
      /** Article title */
      title: "How to choose the perfect entertainment for your event",
      /** Article description */
      description:
        "From understanding your audience to matching the right talent, here's your guide to selecting entertainment that resonates.",
      /** Article image data */
      image: {
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1024&h=1024&fit=crop",
        alt: "Event planning meeting with professionals discussing entertainment options and event details.",
      },
    },
    {
      /** Article category */
      category: "Industry" as const,
      /** Publication date */
      date: "May 4, 2025",
      /** Article title */
      title: "The rise of live entertainment in GCC's event scene",
      /** Article description */
      description:
        "Exploring how live performances and entertainment are reshaping the events landscape across the Kingdom.",
      /** Article image data */
      image: {
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1024&h=1024&fit=crop",
        alt: "Vibrant live entertainment scene with stage performance and enthusiastic audience in GCC.",
      },
    },
    {
      /** Article category */
      category: "Tips" as const,
      /** Publication date */
      date: "Mar 16, 2025",
      /** Article title */
      title: "5 ways to make your corporate event unforgettable",
      /** Article description */
      description:
        "Transform your business gathering from ordinary to extraordinary with these proven entertainment strategies.",
      /** Article image data */
      image: {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1024&h=1024&fit=crop",
        alt: "Successful corporate event with professional entertainment and engaged business audience.",
      },
    },
    {
      /** Article category */
      category: "Trends" as const,
      /** Publication date */
      date: "Apr 6, 2025",
      /** Article title */
      title: "Themed nights: Creating immersive event experiences",
      /** Article description */
      description:
        "Discover how themed entertainment nights are becoming the go-to choice for venues looking to stand out.",
      /** Article image data */
      image: {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1024&h=1024&fit=crop",
        alt: "Themed entertainment night with creative decorations, lighting, and guests enjoying the immersive experience.",
      },
    },
    {
      /** Article category */
      category: "Planning" as const,
      /** Publication date */
      date: "Mar 28, 2025",
      /** Article title */
      title: "Open mic nights: Building community through entertainment",
      /** Article description */
      description:
        "How open mic events are creating spaces for local talent to thrive and audiences to discover new voices.",
      /** Article image data */
      image: {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1024&h=1024&fit=crop",
        alt: "Intimate open mic night setting with performer on stage and engaged audience in cozy venue.",
      },
    },
  ] as Article[],
  ar: [
    {
      category: "Planning" as const,
      date: "11 مايو 2025",
      title: "كيفية اختيار الترفيه المثالي لحدثك",
      description:
        "من فهم جمهورك إلى مطابقة الموهبة المناسبة، إليك دليلك لاختيار الترفيه الذي يتردد صداه.",
      image: {
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1024&h=1024&fit=crop",
        alt: "اجتماع تخطيط حدث مع محترفين يناقشون خيارات الترفيه وتفاصيل الحدث.",
      },
    },
    {
      category: "Industry" as const,
      date: "4 مايو 2025",
      title: "صعود الترفيه الحي في مشهد فعاليات دول مجلس التعاون",
      description:
        "استكشاف كيف تعيد العروض الحية والترفيه تشكيل مشهد الفعاليات في جميع أنحاء المملكة.",
      image: {
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1024&h=1024&fit=crop",
        alt: "مشهد ترفيه حي نابض بالحياة مع أداء مسرحي وجمهور متحمس في دول مجلس التعاون.",
      },
    },
    {
      category: "Tips" as const,
      date: "16 مارس 2025",
      title: "5 طرق لجعل فعاليتك المؤسسية لا تُنسى",
      description:
        "حول تجمعك التجاري من عادي إلى استثنائي باستخدام استراتيجيات الترفيه المثبتة هذه.",
      image: {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1024&h=1024&fit=crop",
        alt: "حدث مؤسسي ناجح مع ترفيه احترافي وجمهور أعمال منخرط.",
      },
    },
    {
      category: "Trends" as const,
      date: "6 أبريل 2025",
      title: "الأمسيات المواضيعية: خلق تجارب فعاليات غامرة",
      description:
        "اكتشف كيف أصبحت أمسيات الترفيه المواضيعية الخيار المفضل للأماكن التي تبحث عن التميز.",
      image: {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1024&h=1024&fit=crop",
        alt: "ليلة ترفيه مواضيعية مع ديكورات إبداعية وإضاءة وضيوف يستمتعون بالتجربة الغامرة.",
      },
    },
    {
      category: "Planning" as const,
      date: "28 مارس 2025",
      title: "أمسيات الميكروفون المفتوح: بناء المجتمع من خلال الترفيه",
      description:
        "كيف تخلق أحداث الميكروفون المفتوح مساحات للمواهب المحلية لتزدهر والجماهير لاكتشاف أصوات جديدة.",
      image: {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1024&h=1024&fit=crop",
        alt: "إعداد أمسية ميكروفون مفتوح حميم مع مؤدي على المسرح وجمهور منخرط في مكان مريح.",
      },
    },
  ] as Article[],
} as const;

