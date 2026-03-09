/**
 * About page static text content
 *
 * @module constants/content/about
 */

import type { LucideIcon } from "lucide-react";
import { Sparkles, Shield, Star, Flame } from "lucide-react";

/**
 * Hero section content for the About page
 */
export const ABOUT_HERO_CONTENT = {
  en: {
    /** Eyebrow badge text */
    badgeLabel: "About us",
    /** Main heading */
    heading: "Our story as GCC entertainment leaders",
    /** Supporting description */
    description:
      "Meet the Pop Events team and learn about our mission to deliver unforgettable live entertainment and event experiences across GCC.",
  },
  ar: {
    badgeLabel: "من نحن",
    heading: "قصتنا حتى الآن",
    description: "تعرف على الفريق وتعلم عن مهمتنا.",
  },
} as const;

/**
 * Who we are section content for the About page
 */
export const WHO_WE_ARE_CONTENT = {
  en: {
    /** Eyebrow badge label */
    badgeLabel: "Who we are",
    /** Section heading */
    heading: "About Pop Events",
    /** Supporting paragraph */
    description:
      "Pop Events is GCC's premier event management company bringing world-class entertainment experiences to life. We specialize in live music concerts, celebrity appearances, stand-up comedy, and themed entertainment—creating unforgettable moments that bring people together.",
    /** Portrait image information */
    expertImage: {
      src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&h=1500&fit=crop",
      alt: "Live concert performance with stage lights and audience in the background.",
      width: 1200,
      height: 1500,
    },
    /** Overlay pill labels rendered on top of the portrait image */
    overlayTags: [
      { label: "Entertainment-focused", position: "bottom-left" },
      { label: "Event experts", position: "bottom-right" },
    ],
  },
  ar: {
    badgeLabel: "من نحن",
    heading: "حول Pop Events",
    description:
      "Pop Events هي شركة إدارة الفعاليات الرائدة في دول مجلس التعاون التي تجلب تجارب ترفيهية عالمية المستوى إلى الحياة. نتخصص في الحفلات الموسيقية الحية، وحضور المشاهير، والكوميديا الارتجالية، والترفيه المواضيعي—نخلق لحظات لا تُنسى تجمع الناس معًا.",
    expertImage: {
      src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&h=1500&fit=crop",
      alt: "أداء حفلة موسيقية حية مع أضواء المسرح والجمهور في الخلفية.",
      width: 1200,
      height: 1500,
    },
    overlayTags: [
      { label: "مركز على الترفيه", position: "bottom-left" },
      { label: "خبراء الفعاليات", position: "bottom-right" },
    ],
  },
} as const;

/**
 * Mission & values section content for the About page
 */
export const MISSION_AND_VALUES_CONTENT = {
  en: {
    /** Eyebrow badge label */
    badgeLabel: "Mission & values",
    /** Section heading */
    heading: "We're on a mission...",
    /** Supporting description */
    description:
      "...to bring world-class entertainment to GCC and create unforgettable experiences that connect people through laughter, music, and celebration. Along the way, we hold these values true.",
    /** Values list rendered as cards */
    values: [
      {
        name: "Creative",
        description: "We craft unique experiences that stand out and inspire",
      },
      {
        name: "Reliable",
        description: "Consistent delivery that you can count on every time",
      },
      {
        name: "Memorable",
        description: "Designed to create moments that last a lifetime",
      },
      {
        name: "Passionate",
        description: "Built on love for entertainment and bringing joy to others",
      },
    ],
  },
  ar: {
    badgeLabel: "المهمة والقيم",
    heading: "نحن في مهمة...",
    description:
      "...لجلب ترفيه عالمي المستوى إلى دول مجلس التعاون وخلق تجارب لا تُنسى تربط الناس من خلال الضحك والموسيقى والاحتفال. على طول الطريق، نحافظ على هذه القيم.",
    values: [
      {
        name: "إبداعي",
        description: "نصمم تجارب فريدة تبرز وملهمة",
      },
      {
        name: "موثوق",
        description: "تقديم متسق يمكنك الاعتماد عليه في كل مرة",
      },
      {
        name: "لا يُنسى",
        description: "مصمم لخلق لحظات تدوم مدى الحياة",
      },
      {
        name: "شغوف",
        description: "مبني على حب الترفيه وإسعاد الآخرين",
      },
    ],
  },
} as const;

/**
 * Culture section content for the About page
 */
export const CULTURE_SECTION_CONTENT = {
  en: {
    /** Eyebrow badge label */
    badgeLabel: "Our Culture",
    /** Section heading */
    heading: "What drives us",
    /** Culture values/principles */
    items: [
      {
        name: "Collaboration & Teamwork",
        description: "We believe in the power of working together. Our team thrives on open communication, shared goals, and mutual support. Every event is a collective effort where each team member's contribution matters, creating a collaborative environment that brings out the best in everyone.",
        image: {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&h=1180&fit=crop",
          alt: "Team members collaborating and working together on event planning in a modern office space.",
          width: 960,
          height: 1180,
        },
      },
      {
        name: "Innovation & Creativity",
        description: "We constantly push boundaries to create unique and memorable experiences. Our culture encourages creative thinking, experimentation, and embracing new ideas. We're not afraid to try something different if it means delivering an extraordinary experience for our audience.",
        image: {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=960&h=1180&fit=crop",
          alt: "Creative workspace with event planning materials, colorful designs, and innovative event concepts being developed.",
          width: 960,
          height: 1180,
        },
      },
    ],
  },
  ar: {
    badgeLabel: "ثقافتنا",
    heading: "ما يدفعنا",
    items: [
      {
        name: "التعاون والعمل الجماعي",
        description: "نؤمن بقوة العمل معًا. يزدهر فريقنا على التواصل المفتوح والأهداف المشتركة والدعم المتبادل. كل حدث هو جهد جماعي حيث يهم مساهمة كل عضو في الفريق، مما يخلق بيئة تعاونية تبرز أفضل ما في الجميع.",
        image: {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&h=1180&fit=crop",
          alt: "أعضاء الفريق يتعاونون ويعملون معًا على تخطيط الفعاليات في مساحة مكتبية حديثة.",
          width: 960,
          height: 1180,
        },
      },
      {
        name: "الابتكار والإبداع",
        description: "ندفع باستمرار الحدود لخلق تجارب فريدة ولا تُنسى. تشجع ثقافتنا التفكير الإبداعي والتجريب واعتماد أفكار جديدة. لسنا خائفين من تجربة شيء مختلف إذا كان ذلك يعني تقديم تجربة استثنائية لجمهورنا.",
        image: {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=960&h=1180&fit=crop",
          alt: "مساحة عمل إبداعية مع مواد تخطيط الفعاليات وتصاميم ملونة ومفاهيم فعاليات مبتكرة قيد التطوير.",
          width: 960,
          height: 1180,
        },
      },
    ],
  },
} as const;

/**
 * Icon mapping for values in the Mission & Values section
 */
export const VALUE_ICON_MAP: Record<string, LucideIcon> = {
  Creative: Sparkles,
  Reliable: Shield,
  Memorable: Star,
  Passionate: Flame,
} as const;

