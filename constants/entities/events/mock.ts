/**
 * Mock event data (temporary - will be replaced by API)
 *
 * @module constants/entities/events/mock
 */

import type { EventHeroContent, EventHeroSlide, EventInfoProps, HowToGetThereProps, TermsAndConditionData } from "@/types/event-tickets";

/**
 * Hero event data structure for the carousel
 */
export type HeroEvent = {
  /** Unique identifier for the event */
  id: string;
  /** Event title */
  title: string;
  /** Event date display string */
  date: string;
  /** Optional venue name */
  venue?: string;
  /** Event image data */
  image: {
    src: string;
    alt: string;
  };
  /** Optional video data */
  video?: {
    src: string;
  };
};

/**
 * Event status tone type
 */
export type UpcomingEventstatus = {
  /** Status label text */
  label: string;
  /** Visual tone for the status */
  tone: "primary" | "warning" | "info";
};

/**
 * Top event data structure
 */
export type TopEvent = {
  /** Unique identifier for the event */
  id: string;
  /** Event title */
  title: string;
  /** Ticket price display string */
  price: string;
  /** Date range display string */
  dateRange: string;
  /** Optional status information */
  status?: UpcomingEventstatus;
  /** Optional badge type */
  badge?: "Exclusive" | "New";
  /** Optional rating display */
  rating?: string;
  /** Event image data */
  image: {
    src: string;
    alt: string;
  };
};

/**
 * Complete event detail structure combining all event data
 */
export type EventDetail = {
  /** Unique identifier for the event */
  id: string;
  /** Event status */
  status: "completed" | "in-progress";
  /** Optional hero content for event detail page */
  heroContent?: EventHeroContent;
  /** Optional location and directions data */
  location?: HowToGetThereProps;
  /** Optional hero event data for carousel display */
  heroEvent?: HeroEvent;
  /** Optional top event data for listings */
  topEvent?: TopEvent;
  /** Optional terms and conditions data */
  termsAndCondition?: TermsAndConditionData;
};

/**
 * Map of event IDs to their detailed information (bilingual)
 * This is the single source of truth for all event data
 */
export const mockEventDetailMap: Record<string, { en: EventDetail; ar: EventDetail }> = {
  "mohamed-helmy-live-bahrain": {
    en: {
      id: "mohamed-helmy-live-bahrain",
      // status: "in-progress",
      status: "completed",
      heroContent: {
        slug: "mohamed-helmy-live-bahrain",
        slides: [
          {
            id: "mohamed-helmy-1",
            image: {
              src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/mohamed-helmy-banner.webp",
              alt: "Mohamed Helmy live stand-up comedy in Bahrain",
            },
          },
        ],
        badge: "",
        info: {
          title: "Mohamed Helmy Live in Bahrain",
          shortDescription:
            "Witness spontaneous comedy fueled by everyday stories and infectious energy.",
          location: "Exhibition World Bahrain, Sakhir, Bahrain",
          locationUrl:
            "https://www.google.com/maps/search/?api=1&query=Exhibition+World+Bahrain+Sakhir",
          ticketUrl:
            "https://manama.platinumlist.net/event-tickets/104197/mohamed-helmy-live-in-exhibition-world-bahrain/",
          date: "Sat, 7 Feb 2026",
          description: [
            "Get ready for an unforgettable night of comedy and nonstop laughter in Bahrain! Comedy star Mohamed Helmy is coming to Bahrain with a live stand-up comedy show filled with sharp observations, hilarious stories, and relatable humor inspired by everyday life.",
            "Known for his spontaneous performance style and strong audience connection, Mohamed Helmy guarantees an unforgettable night full of laughter, joy, and positive vibes.",
          ],
          priceFrom: "25 BHD",
        },
      },
      location: {
        venueName: "Exhibition World Bahrain",
        venueAddress:
          "Exhibition World Bahrain, Block 1062, Road 6204, Sakhir, Kingdom of Bahrain",
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Exhibition+World+Bahrain+Sakhir",
        mapEmbedUrl: "",
        byCarInstructions:
          "Take Sheikh Khalifa Bin Salman Highway and merge onto Al Fateh Highway. Continue to Sheikh Isa Bin Salman Highway and follow the signs for Exhibition Avenue until you reach Exhibition World Bahrain.",
        byTaxiInstructions:
          "Take a taxi to Exhibition World Bahrain. It is a well-known landmark and most drivers are familiar with the location.",
      },
      topEvent: {
        id: "mohamed-helmy-live-bahrain",
        title: "Mohamed Helmy Live in Bahrain",
        price: "25 BHD",
        dateRange: "Sat, 7 Feb 2026",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/events/hemly.png",
          alt: "Mohamed Helmy live comedy show poster",
        },
      },
      termsAndCondition: [
        {
          title: "Tickets and Entry",
          items: [
            "All tickets are non-refundable and non-transferable under any circumstances, except in case of event cancellation by the organizer.",
            "Entry is permitted only with a valid ticket and a matching ID.",
            "The organizer reserves the right to deny entry to guests who fail to comply with event rules or behave inappropriately.",
          ],
        },
        {
          title: "Event Schedule",
          items: [
            "The event start time will be announced in advance.",
            "Guests are advised to arrive at least 30 minutes before showtime.",
            "Late arrivals may be denied entry until a suitable break in the performance.",
          ],
        },
        {
          title: "Photography and Recording",
          items: [
            "Photography, video recording, and live streaming are strictly prohibited during the performance.",
            "Guests violating this rule may be removed from the venue.",
          ],
        },
        {
          title: "Age Restriction",
          items: [
            "The show is strictly for audiences aged 18 years and above.",
            "Guests under 18 will not be admitted, even if accompanied by an adult.",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Guests must behave respectfully toward the artist, staff, and fellow attendees.",
            "Disruptive or offensive behavior will result in immediate removal without refund.",
          ],
        },
        {
          title: "Liability Disclaimer",
          items: [
            "The organizer is not responsible for any personal injury, loss, or damage to personal belongings during the event.",
            "Attendance is entirely at the guest's own risk.",
          ],
        },
        {
          title: "Event Changes",
          items: [
            "The organizer reserves the right to change the event date, time, venue, or lineup due to unforeseen circumstances.",
            "In case of rescheduling, tickets will remain valid for the new date.",
          ],
        },
        {
          title: "Security and Safety",
          items: [
            "All guests are subject to security checks upon entry.",
            "Weapons, alcohol, and outside food or drinks are strictly prohibited inside the venue.",
          ],
        },
        {
          title: "Use of Media",
          items: [
            "By attending the event, guests consent to being photographed or recorded for promotional purposes related to the event or organizer.",
          ],
        },
        {
          title: "Organizer Information",
          items: [
            "Event organized by Bob Event's W.L.L, Kingdom of Bahrain.",
            "Contact: +973 39308861 | popevents95@gmail.com",
          ],
        },
      ],
    },
    ar: {
      id: "mohamed-helmy-live-bahrain",
      status: "in-progress",
      heroContent: {
        slug: "mohamed-helmy-live-bahrain",
        slides: [
          {
            id: "mohamed-helmy-1",
            image: {
              src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/mohamed-helmy-banner.webp",
              alt: "محمد حلمي كوميديا ارتجالية مباشرة في البحرين",
            },
          },
        ],
        badge: "",
        info: {
          title: "محمد حلمي مباشر في البحرين",
          shortDescription:
            "شاهد كوميديا تلقائية مدعومة بقصص يومية وطاقة معدية.",
          location: "عالم المعارض البحرين، الصخير، البحرين",
          locationUrl:
            "https://www.google.com/maps/search/?api=1&query=Exhibition+World+Bahrain+Sakhir",
          ticketUrl:
            "https://manama.platinumlist.net/event-tickets/104197/mohamed-helmy-live-in-exhibition-world-bahrain/",
          date: "السبت، 7 فبراير 2026",
          description: [
            "استعد لليلة لا تُنسى من الكوميديا والضحك المستمر في البحرين! نجم الكوميديا محمد حلمي قادم إلى البحرين بعرض كوميديا ارتجالية مباشرة مليء بملاحظات حادة وقصص مضحكة وفكاهة قابلة للتعاطف مستوحاة من الحياة اليومية.",
            "معروف بأسلوب أدائه التلقائي واتصاله القوي بالجمهور، يضمن محمد حلمي ليلة لا تُنسى مليئة بالضحك والفرح والطاقة الإيجابية.",
          ],
          priceFrom: "25 دينار بحريني",
        },
      },
      location: {
        venueName: "عالم المعارض البحرين",
        venueAddress:
          "عالم المعارض البحرين، قطعة 1062، طريق 6204، الصخير، مملكة البحرين",
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Exhibition+World+Bahrain+Sakhir",
        mapEmbedUrl: "",
        byCarInstructions:
          "خذ طريق الشيخ خليفة بن سلمان واتجه إلى طريق الفاتح. استمر إلى طريق الشيخ عيسى بن سلمان واتبع الإشارات لشارع المعارض حتى تصل إلى عالم المعارض البحرين.",
        byTaxiInstructions:
          "خذ سيارة أجرة إلى عالم المعارض البحرين. إنه معلم معروف ومعظم السائقين على دراية بالموقع.",
      },
      topEvent: {
        id: "mohamed-helmy-live-bahrain",
        title: "محمد حلمي مباشر في البحرين",
        price: "25 دينار بحريني",
        dateRange: "السبت، 7 فبراير 2026",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/events/hemly.png",
          alt: "ملصق عرض محمد حلمي الكوميدي المباشر",
        },
      },
      termsAndCondition: [
        {
          title: "التذاكر والدخول",
          items: [
            "جميع التذاكر غير قابلة للاسترجاع والتحويل تحت أي ظرف، باستثناء حالة إلغاء الحدث من قبل المنظم.",
            "يُسمح بالدخول فقط بتذكرة صالحة وبطاقة هوية مطابقة.",
            "يحتفظ المنظم بالحق في رفض دخول الضيوف الذين لا يمتثلون لقواعد الحدث أو يتصرفون بشكل غير لائق.",
          ],
        },
        {
          title: "جدول الحدث",
          items: [
            "سيتم الإعلان عن وقت بدء الحدث مسبقاً.",
            "ينصح الضيوف بالوصول قبل 30 دقيقة على الأقل من وقت العرض.",
            "قد يُرفض دخول المتأخرين حتى استراحة مناسبة في الأداء.",
          ],
        },
        {
          title: "التصوير والتسجيل",
          items: [
            "التصوير وتسجيل الفيديو والبث المباشر محظوران تماماً أثناء الأداء.",
            "قد يتم إزالة الضيوف الذين ينتهكون هذه القاعدة من المكان.",
          ],
        },
        {
          title: "قيود العمر",
          items: [
            "العرض مخصص حصرياً للجماهير الذين تبلغ أعمارهم 18 عاماً فما فوق.",
            "لن يُسمح بدخول الضيوف دون 18 عاماً، حتى لو كانوا برفقة بالغ.",
          ],
        },
        {
          title: "قواعد السلوك",
          items: [
            "يجب على الضيوف التصرف باحترام تجاه الفنان والموظفين والضيوف الآخرين.",
            "السلوك المزعج أو المسيء سيؤدي إلى الإزالة الفورية دون استرجاع.",
          ],
        },
        {
          title: "إخلاء المسؤولية",
          items: [
            "المنظم غير مسؤول عن أي إصابة شخصية أو خسارة أو ضرر للممتلكات الشخصية أثناء الحدث.",
            "الحضور بالكامل على مسؤولية الضيف الخاصة.",
          ],
        },
        {
          title: "تغييرات الحدث",
          items: [
            "يحتفظ المنظم بالحق في تغيير تاريخ أو وقت أو مكان أو تشكيلة الحدث بسبب ظروف غير متوقعة.",
            "في حالة إعادة الجدولة، ستبقى التذاكر صالحة للتاريخ الجديد.",
          ],
        },
        {
          title: "الأمن والسلامة",
          items: [
            "جميع الضيوف يخضعون لفحوصات أمنية عند الدخول.",
            "الأسلحة والكحول والطعام أو المشروبات الخارجية محظورة تماماً داخل المكان.",
          ],
        },
        {
          title: "استخدام الوسائط",
          items: [
            "بالحضور للحدث، يوافق الضيوف على تصويرهم أو تسجيلهم لأغراض ترويجية متعلقة بالحدث أو المنظم.",
          ],
        },
        {
          title: "معلومات المنظم",
          items: [
            "الحدث منظم من قبل Bob Event's W.L.L، مملكة البحرين.",
            "للتواصل: +973 39308861 | popevents95@gmail.com",
          ],
        },
      ],
    },
  },

  "aye-of-camel-omar-el-gamal": {
    en: {
      id: "aye-of-camel-omar-el-gamal",
      status: "completed",
      heroContent: {
        slug: "aye-of-camel-omar-el-gamal",
        slides: [
          {
            id: "aye-of-camel-1",
            image: {
              src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/Banner-omer-el-gamal.webp",
              alt: "Promotional poster for Aye of Camel by Omar El Gamal",
            },
          },
        ],
        badge: "Comedy Night",
        info: {
          title: "Aye of Camel - Omar El Gamal",
          shortDescription:
            "A high energy interactive comedy night featuring Omar El Gamal.",
          location: "Crown Plaza Hotel, Manama, Bahrain",
          locationUrl:
            "https://www.google.com/maps/search/?api=1&query=Crown+Plaza+Hotel+Manama+Bahrain",
          date: "Sat, 8 November 2025",
          description: [
            "Aye of Camel brings Omar El Gamal live on stage with sharp observational humor and audience interaction.",
            "The show promises an evening of laughter, storytelling, and spontaneous moments.",
          ],
          priceFrom: "10 BHD",
        },
      },
      location: {
        venueName: "Crown Plaza Hotel",
        venueAddress: "Crown Plaza Hotel, Manama, Bahrain",
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Crown+Plaza+Hotel+Manama+Bahrain",
        mapEmbedUrl: "",
        byCarInstructions:
          "Drive towards Manama city center and follow signs to Crown Plaza Hotel.",
        byTaxiInstructions:
          "Ask the driver for Crown Plaza Hotel in Manama. The venue is well known.",
      },
      topEvent: {
        id: "aye-of-camel-omar-el-gamal",
        title: "Aye of Camel - Omar El Gamal",
        price: "10 BHD",
        dateRange: "Sat, 8 November 2025",
        badge: "Exclusive",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/Omar+Al-Jamel.webp",
          alt: "Omar El Gamal live comedy poster",
        },
      },
      termsAndCondition: [
        {
          title: "General Information",
          items: [
            "The Bahrain Coffee Festival is organized by DXB Live - Dubai World Trade Centre and will take place at Exhibition World Bahrain from 9-13 December 2025.",
            "By purchasing a ticket or attending the event, visitors agree to abide by all festival terms and conditions.",
          ],
        },
        {
          title: "Tickets & Admissions",
          items: [
            "All tickets are non-refundable and non-transferable.",
            "Tickets must be presented (digital or printed) at the entrance for validation.",
            "Early Bird, Regular, and VIP tickets provide different levels of access as described on the ticketing platform.",
            "Each ticket is valid for the specified number of days (1, 3, or 5 days).",
            "The organizer reserves the right to verify ticket authenticity. Invalid or duplicate tickets will not be accepted.",
          ],
        },
        {
          title: "Age Policy",
          items: [
            "The festival is open to all ages.",
            "Children under 12 must be accompanied by an adult at all times.",
            "Certain zones (such as VIP Coffee Lounge, Mocktail Corner) are restricted to 18+ visitors.",
            "Caffeine tasting areas may have age recommendations (16+).",
          ],
        },
        {
          title: "Conduct & Safety",
          items: [
            "Visitors must follow all instructions from festival staff and security personnel.",
            "The organizer reserves the right to refuse entry or remove any guest behaving inappropriately or endangering others.",
            "Outside food and beverages are not allowed inside the venue.",
            "Smoking is permitted only in designated areas.",
            "Pets are not permitted, except certified service animals.",
          ],
        },
        {
          title: "Photography & Media",
          items: [
            "By entering the festival, visitors grant the organizer permission to use photos or videos taken during the event for marketing and promotional purposes.",
            "Professional photography or videography requires prior approval.",
          ],
        },
        {
          title: "Event Modifications",
          items: [
            "The organizer reserves the right to change event schedules, features, or exhibitors without prior notice.",
            "In case of force majeure (e.g., weather, government regulation, safety concerns), the organizer may postpone or cancel the event. Ticket policies will follow applicable regulations.",
          ],
        },
        {
          title: "Liability",
          items: [
            "The organizer is not responsible for any loss, theft, injury, or damage occurring during the event.",
            "Visitors attend the festival at their own risk and are responsible for their personal belongings.",
          ],
        },
        {
          title: "Privacy",
          items: [
            "Personal information collected during ticket purchase will be used solely for event management, communication, and future updates related to Bahrain Coffee Festival.",
          ],
        },
        {
          title: "Contact",
          items: [
            "For inquiries, please contact: +971 4 308 6145 | dxblive@dwtc.com",
          ],
        },
      ],
    },
    ar: {
      id: "aye-of-camel-omar-el-gamal",
      status: "completed",
      heroContent: {
        slug: "aye-of-camel-omar-el-gamal",
        slides: [
          {
            id: "aye-of-camel-1",
            image: {
              src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/Banner-omer-el-gamal.webp",
              alt: "ملصق ترويجي لـ Aye of Camel لعمر الجمال",
            },
          },
        ],
        badge: "ليلة كوميديا",
        info: {
          title: "عين الجمل - عمر الجمال",
          shortDescription:
            "ليلة كوميديا تفاعلية عالية الطاقة مع عمر الجمال.",
          location: "فندق كراون بلازا، المنامة، البحرين",
          locationUrl:
            "https://www.google.com/maps/search/?api=1&query=Crown+Plaza+Hotel+Manama+Bahrain",
          date: "السبت، 8 نوفمبر 2025",
          description: [
            "عين الجمل يجلب عمر الجمال مباشرة على المسرح مع فكاهة ملاحظة حادة وتفاعل مع الجمهور.",
            "يعد العرض بأمسية من الضحك وسرد القصص واللحظات التلقائية.",
          ],
          priceFrom: "10 دينار بحريني",
        },
      },
      location: {
        venueName: "فندق كراون بلازا",
        venueAddress: "فندق كراون بلازا، المنامة، البحرين",
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Crown+Plaza+Hotel+Manama+Bahrain",
        mapEmbedUrl: "",
        byCarInstructions:
          "اسلك نحو وسط مدينة المنامة واتبع الإشارات إلى فندق كراون بلازا.",
        byTaxiInstructions:
          "اطلب من السائق فندق كراون بلازا في المنامة. المكان معروف جيداً.",
      },
      topEvent: {
        id: "aye-of-camel-omar-el-gamal",
        title: "عين الجمل - عمر الجمال",
        price: "10 دينار بحريني",
        dateRange: "السبت، 8 نوفمبر 2025",
        badge: "Exclusive",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/Omar+Al-Jamel.webp",
          alt: "ملصق كوميديا مباشرة لعمر الجمال",
        },
      },
      termsAndCondition: [
        {
          title: "معلومات عامة",
          items: [
            "مهرجان البحرين للقهوة منظم من قبل DXB Live - مركز دبي التجاري العالمي وسيقام في عالم المعارض البحرين من 9-13 ديسمبر 2025.",
            "بشراء تذكرة أو حضور الحدث، يوافق الزوار على الالتزام بجميع شروط وأحكام المهرجان.",
          ],
        },
        {
          title: "التذاكر والدخول",
          items: [
            "جميع التذاكر غير قابلة للاسترجاع والتحويل.",
            "يجب تقديم التذاكر (رقمية أو مطبوعة) عند المدخل للتحقق.",
            "تذاكر Early Bird والعادية وVIP توفر مستويات مختلفة من الوصول كما هو موضح على منصة التذاكر.",
            "كل تذكرة صالحة للعدد المحدد من الأيام (1 أو 3 أو 5 أيام).",
            "يحتفظ المنظم بالحق في التحقق من صحة التذكرة. لن يتم قبول التذاكر غير الصالحة أو المكررة.",
          ],
        },
        {
          title: "سياسة العمر",
          items: [
            "المهرجان مفتوح لجميع الأعمار.",
            "يجب أن يكون الأطفال دون 12 عاماً برفقة بالغ في جميع الأوقات.",
            "بعض المناطق (مثل صالة القهوة VIP وركن المشروبات غير الكحولية) مقتصرة على زوار 18+.",
            "مناطق تذوق الكافيين قد يكون لها توصيات عمرية (16+).",
          ],
        },
        {
          title: "السلوك والسلامة",
          items: [
            "يجب على الزوار اتباع جميع التعليمات من موظفي المهرجان وأفراد الأمن.",
            "يحتفظ المنظم بالحق في رفض الدخول أو إزالة أي ضيف يتصرف بشكل غير لائق أو يعرض الآخرين للخطر.",
            "الطعام والمشروبات الخارجية غير مسموحة داخل المكان.",
            "التدخين مسموح فقط في المناطق المخصصة.",
            "الحيوانات الأليفة غير مسموحة، باستثناء حيوانات الخدمة المعتمدة.",
          ],
        },
        {
          title: "التصوير والوسائط",
          items: [
            "بدخول المهرجان، يمنح الزوار المنظم الإذن لاستخدام الصور أو الفيديوهات المأخوذة أثناء الحدث لأغراض التسويق والترويج.",
            "التصوير أو تسجيل الفيديو الاحترافي يتطلب موافقة مسبقة.",
          ],
        },
        {
          title: "تعديلات الحدث",
          items: [
            "يحتفظ المنظم بالحق في تغيير جداول الأحداث أو الميزات أو المعارضين دون إشعار مسبق.",
            "في حالة القوة القاهرة (مثل الطقس، التنظيم الحكومي، مخاوف السلامة)، قد يؤجل المنظم أو يلغي الحدث. ستتبع سياسات التذاكر اللوائح المعمول بها.",
          ],
        },
        {
          title: "المسؤولية",
          items: [
            "المنظم غير مسؤول عن أي خسارة أو سرقة أو إصابة أو ضرر يحدث أثناء الحدث.",
            "يحضر الزوار المهرجان على مسؤوليتهم الخاصة وهم مسؤولون عن ممتلكاتهم الشخصية.",
          ],
        },
        {
          title: "الخصوصية",
          items: [
            "المعلومات الشخصية المجمعة أثناء شراء التذكرة ستُستخدم فقط لإدارة الحدث والتواصل والتحديثات المستقبلية المتعلقة بمهرجان البحرين للقهوة.",
          ],
        },
        {
          title: "الاتصال",
          items: [
            "للاستفسارات، يرجى الاتصال: +971 4 308 6145 | dxblive@dwtc.com",
          ],
        },
      ],
    },
  },

  "mina-nader-comedy-manama": {
    en: {
      id: "mina-nader-comedy-manama",
      status: "completed",
      heroContent: {
        slug: "mina-nader-comedy-manama",
        slides: [
          {
            id: "mina-nader-manama-1",
            image: {
              src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader.webp",
              alt: "Poster for Mina Nader Interactive Comedy Show in Manama",
            },
          },
        ],
        badge: "Live Comedy",
        info: {
          title: "Mina Nader Interactive Comedy Show",
          shortDescription:
            "An interactive stand up comedy experience with Mina Nader.",
          location: "Crown Plaza Hotel, Manama, Bahrain",
          locationUrl:
            "https://www.google.com/maps/search/?api=1&query=Crown+Plaza+Hotel+Manama+Bahrain",
          date: "Sat, 4 Oct 2025",
          description: [
            "Mina Nader brings his signature interactive comedy style to Manama.",
            "Expect crowd work, relatable humor, and an engaging live performance.",
          ],
          priceFrom: "12 BHD",
        },
      },
      location: {
        venueName: "Crown Plaza Hotel",
        venueAddress: "Crown Plaza Hotel, Manama, Bahrain",
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Crown+Plaza+Hotel+Manama+Bahrain",
        mapEmbedUrl: "",
        byCarInstructions:
          "Follow directions to central Manama and proceed to Crown Plaza Hotel.",
        byTaxiInstructions:
          "Most taxi drivers recognize Crown Plaza Hotel in Manama.",
      },
      topEvent: {
        id: "mina-nader-comedy-manama",
        title: "Mina Nader Interactive Comedy Show",
        price: "12 BHD",
        dateRange: "Sat, 4 Oct 2025",
        badge: "Exclusive",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader.webp",
          alt: "Mina Nader live comedy poster in Manama",
        },
      },
      termsAndCondition: [
        {
          title: "General Information",
          items: [
            "The Bahrain Coffee Festival is organized by DXB Live - Dubai World Trade Centre and will take place at Exhibition World Bahrain from 9-13 December 2025.",
            "By purchasing a ticket or attending the event, visitors agree to abide by all festival terms and conditions.",
          ],
        },
        {
          title: "Tickets & Admissions",
          items: [
            "All tickets are non-refundable and non-transferable.",
            "Tickets must be presented (digital or printed) at the entrance for validation.",
            "Early Bird, Regular, and VIP tickets provide different levels of access as described on the ticketing platform.",
            "Each ticket is valid for the specified number of days (1, 3, or 5 days).",
            "The organizer reserves the right to verify ticket authenticity. Invalid or duplicate tickets will not be accepted.",
          ],
        },
        {
          title: "Age Policy",
          items: [
            "The festival is open to all ages.",
            "Children under 12 must be accompanied by an adult at all times.",
            "Certain zones (such as VIP Coffee Lounge, Mocktail Corner) are restricted to 18+ visitors.",
            "Caffeine tasting areas may have age recommendations (16+).",
          ],
        },
        {
          title: "Conduct & Safety",
          items: [
            "Visitors must follow all instructions from festival staff and security personnel.",
            "The organizer reserves the right to refuse entry or remove any guest behaving inappropriately or endangering others.",
            "Outside food and beverages are not allowed inside the venue.",
            "Smoking is permitted only in designated areas.",
            "Pets are not permitted, except certified service animals.",
          ],
        },
        {
          title: "Photography & Media",
          items: [
            "By entering the festival, visitors grant the organizer permission to use photos or videos taken during the event for marketing and promotional purposes.",
            "Professional photography or videography requires prior approval.",
          ],
        },
        {
          title: "Event Modifications",
          items: [
            "The organizer reserves the right to change event schedules, features, or exhibitors without prior notice.",
            "In case of force majeure (e.g., weather, government regulation, safety concerns), the organizer may postpone or cancel the event. Ticket policies will follow applicable regulations.",
          ],
        },
        {
          title: "Liability",
          items: [
            "The organizer is not responsible for any loss, theft, injury, or damage occurring during the event.",
            "Visitors attend the festival at their own risk and are responsible for their personal belongings.",
          ],
        },
        {
          title: "Privacy",
          items: [
            "Personal information collected during ticket purchase will be used solely for event management, communication, and future updates related to Bahrain Coffee Festival.",
          ],
        },
        {
          title: "Contact",
          items: [
            "For inquiries, please contact: +971 4 308 6145 | dxblive@dwtc.com",
          ],
        },
      ],
    },
    ar: {
      id: "mina-nader-comedy-manama",
      status: "completed",
      heroContent: {
        slug: "mina-nader-comedy-manama",
        slides: [
          {
            id: "mina-nader-manama-1",
            image: {
              src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader.webp",
              alt: "ملصق عرض مينا نادر الكوميدي التفاعلي في المنامة",
            },
          },
        ],
        badge: "كوميديا مباشرة",
        info: {
          title: "عرض مينا نادر الكوميدي التفاعلي",
          shortDescription:
            "تجربة كوميديا ارتجالية تفاعلية مع مينا نادر.",
          location: "فندق كراون بلازا، المنامة، البحرين",
          locationUrl:
            "https://www.google.com/maps/search/?api=1&query=Crown+Plaza+Hotel+Manama+Bahrain",
          date: "السبت، 4 أكتوبر 2025",
          description: [
            "مينا نادر يجلب أسلوبه الكوميدي التفاعلي المميز إلى المنامة.",
            "توقع عملاً مع الجمهور وفكاهة قابلة للتعاطف وأداء مباشر جذاب.",
          ],
          priceFrom: "12 دينار بحريني",
        },
      },
      location: {
        venueName: "فندق كراون بلازا",
        venueAddress: "فندق كراون بلازا، المنامة، البحرين",
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Crown+Plaza+Hotel+Manama+Bahrain",
        mapEmbedUrl: "",
        byCarInstructions:
          "اتبع الاتجاهات إلى وسط المنامة وتابع إلى فندق كراون بلازا.",
        byTaxiInstructions:
          "معظم سائقي سيارات الأجرة يعرفون فندق كراون بلازا في المنامة.",
      },
      topEvent: {
        id: "mina-nader-comedy-manama",
        title: "عرض مينا نادر الكوميدي التفاعلي",
        price: "12 دينار بحريني",
        dateRange: "السبت، 4 أكتوبر 2025",
        badge: "Exclusive",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader.webp",
          alt: "ملصق كوميديا مباشرة لمينا نادر في المنامة",
        },
      },
      termsAndCondition: [
        {
          title: "معلومات عامة",
          items: [
            "مهرجان البحرين للقهوة منظم من قبل DXB Live - مركز دبي التجاري العالمي وسيقام في عالم المعارض البحرين من 9-13 ديسمبر 2025.",
            "بشراء تذكرة أو حضور الحدث، يوافق الزوار على الالتزام بجميع شروط وأحكام المهرجان.",
          ],
        },
        {
          title: "التذاكر والدخول",
          items: [
            "جميع التذاكر غير قابلة للاسترجاع والتحويل.",
            "يجب تقديم التذاكر (رقمية أو مطبوعة) عند المدخل للتحقق.",
            "تذاكر Early Bird والعادية وVIP توفر مستويات مختلفة من الوصول كما هو موضح على منصة التذاكر.",
            "كل تذكرة صالحة للعدد المحدد من الأيام (1 أو 3 أو 5 أيام).",
            "يحتفظ المنظم بالحق في التحقق من صحة التذكرة. لن يتم قبول التذاكر غير الصالحة أو المكررة.",
          ],
        },
        {
          title: "سياسة العمر",
          items: [
            "المهرجان مفتوح لجميع الأعمار.",
            "يجب أن يكون الأطفال دون 12 عاماً برفقة بالغ في جميع الأوقات.",
            "بعض المناطق (مثل صالة القهوة VIP وركن المشروبات غير الكحولية) مقتصرة على زوار 18+.",
            "مناطق تذوق الكافيين قد يكون لها توصيات عمرية (16+).",
          ],
        },
        {
          title: "السلوك والسلامة",
          items: [
            "يجب على الزوار اتباع جميع التعليمات من موظفي المهرجان وأفراد الأمن.",
            "يحتفظ المنظم بالحق في رفض الدخول أو إزالة أي ضيف يتصرف بشكل غير لائق أو يعرض الآخرين للخطر.",
            "الطعام والمشروبات الخارجية غير مسموحة داخل المكان.",
            "التدخين مسموح فقط في المناطق المخصصة.",
            "الحيوانات الأليفة غير مسموحة، باستثناء حيوانات الخدمة المعتمدة.",
          ],
        },
        {
          title: "التصوير والوسائط",
          items: [
            "بدخول المهرجان، يمنح الزوار المنظم الإذن لاستخدام الصور أو الفيديوهات المأخوذة أثناء الحدث لأغراض التسويق والترويج.",
            "التصوير أو تسجيل الفيديو الاحترافي يتطلب موافقة مسبقة.",
          ],
        },
        {
          title: "تعديلات الحدث",
          items: [
            "يحتفظ المنظم بالحق في تغيير جداول الأحداث أو الميزات أو المعارضين دون إشعار مسبق.",
            "في حالة القوة القاهرة (مثل الطقس، التنظيم الحكومي، مخاوف السلامة)، قد يؤجل المنظم أو يلغي الحدث. ستتبع سياسات التذاكر اللوائح المعمول بها.",
          ],
        },
        {
          title: "المسؤولية",
          items: [
            "المنظم غير مسؤول عن أي خسارة أو سرقة أو إصابة أو ضرر يحدث أثناء الحدث.",
            "يحضر الزوار المهرجان على مسؤوليتهم الخاصة وهم مسؤولون عن ممتلكاتهم الشخصية.",
          ],
        },
        {
          title: "الخصوصية",
          items: [
            "المعلومات الشخصية المجمعة أثناء شراء التذكرة ستُستخدم فقط لإدارة الحدث والتواصل والتحديثات المستقبلية المتعلقة بمهرجان البحرين للقهوة.",
          ],
        },
        {
          title: "الاتصال",
          items: [
            "للاستفسارات، يرجى الاتصال: +971 4 308 6145 | dxblive@dwtc.com",
          ],
        },
      ],
    },
  },

  "mina-nader-comedy-qatar": {
    en: {
      id: "mina-nader-comedy-qatar",
      status: "completed",
      heroContent: {
        slug: "mina-nader-comedy-qatar",
        slides: [
          {
            id: "mina-nader-qatar-1",
            image: {
              src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader1.jpg",
              alt: "Event poster for Mina Nader Comedy Show at QNCC",
            },
          },
        ],
        badge: "International Show",
        info: {
          title: "Mina Nader Interactive Comedy Show",
          shortDescription:
            "Mina Nader performs live in Qatar with his interactive comedy set.",
          location: "Qatar National Convention Centre (QNCC)",
          locationUrl:
            "https://www.google.com/maps/search/?api=1&query=Qatar+National+Convention+Centre",
          date: "Sat, 27 Sep 2025",
          description: [
            "A special Qatar edition of Mina Nader's interactive comedy show.",
            "A night filled with laughter, audience interaction, and sharp humor.",
          ],
          priceFrom: "120 QAR",
        },
      },
      location: {
        venueName: "Qatar National Convention Centre",
        venueAddress: "QNCC, Doha, Qatar",
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Qatar+National+Convention+Centre",
        mapEmbedUrl: "",
        byCarInstructions:
          "Drive towards Education City and follow signs for QNCC.",
        byTaxiInstructions:
          "Taxi drivers in Doha are familiar with QNCC.",
      },
      topEvent: {
        id: "mina-nader-comedy-qatar",
        title: "Mina Nader Interactive Comedy Show",
        price: "120 QAR",
        dateRange: "Sat, 27 Sep 2025",
        badge: "Exclusive",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader1.jpg",
          alt: "Mina Nader live comedy show at QNCC",
        },
      },
      heroEvent: {
        id: "mina-nader-comedy-qatar",
        title: "Mina Nader Interactive Comedy Show",
        date: "Sat, 27 Sep 2025",
        venue: "Qatar National Convention Centre",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader1.jpg",
          alt: "Mina Nader live comedy show at QNCC",
        },
      },
      termsAndCondition: [
        {
          title: "General Information",
          items: [
            "The Bahrain Coffee Festival is organized by DXB Live - Dubai World Trade Centre and will take place at Exhibition World Bahrain from 9-13 December 2025.",
            "By purchasing a ticket or attending the event, visitors agree to abide by all festival terms and conditions.",
          ],
        },
        {
          title: "Tickets & Admissions",
          items: [
            "All tickets are non-refundable and non-transferable.",
            "Tickets must be presented (digital or printed) at the entrance for validation.",
            "Early Bird, Regular, and VIP tickets provide different levels of access as described on the ticketing platform.",
            "Each ticket is valid for the specified number of days (1, 3, or 5 days).",
            "The organizer reserves the right to verify ticket authenticity. Invalid or duplicate tickets will not be accepted.",
          ],
        },
        {
          title: "Age Policy",
          items: [
            "The festival is open to all ages.",
            "Children under 12 must be accompanied by an adult at all times.",
            "Certain zones (such as VIP Coffee Lounge, Mocktail Corner) are restricted to 18+ visitors.",
            "Caffeine tasting areas may have age recommendations (16+).",
          ],
        },
        {
          title: "Conduct & Safety",
          items: [
            "Visitors must follow all instructions from festival staff and security personnel.",
            "The organizer reserves the right to refuse entry or remove any guest behaving inappropriately or endangering others.",
            "Outside food and beverages are not allowed inside the venue.",
            "Smoking is permitted only in designated areas.",
            "Pets are not permitted, except certified service animals.",
          ],
        },
        {
          title: "Photography & Media",
          items: [
            "By entering the festival, visitors grant the organizer permission to use photos or videos taken during the event for marketing and promotional purposes.",
            "Professional photography or videography requires prior approval.",
          ],
        },
        {
          title: "Event Modifications",
          items: [
            "The organizer reserves the right to change event schedules, features, or exhibitors without prior notice.",
            "In case of force majeure (e.g., weather, government regulation, safety concerns), the organizer may postpone or cancel the event. Ticket policies will follow applicable regulations.",
          ],
        },
        {
          title: "Liability",
          items: [
            "The organizer is not responsible for any loss, theft, injury, or damage occurring during the event.",
            "Visitors attend the festival at their own risk and are responsible for their personal belongings.",
          ],
        },
        {
          title: "Privacy",
          items: [
            "Personal information collected during ticket purchase will be used solely for event management, communication, and future updates related to Bahrain Coffee Festival.",
          ],
        },
        {
          title: "Contact",
          items: [
            "For inquiries, please contact: +971 4 308 6145 | dxblive@dwtc.com",
          ],
        },
      ],
    },
    ar: {
      id: "mina-nader-comedy-qatar",
      status: "completed",
      heroContent: {
        slug: "mina-nader-comedy-qatar",
        slides: [
          {
            id: "mina-nader-qatar-1",
            image: {
              src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader1.jpg",
              alt: "ملصق حدث عرض مينا نادر الكوميدي في QNCC",
            },
          },
        ],
        badge: "عرض دولي",
        info: {
          title: "عرض مينا نادر الكوميدي التفاعلي",
          shortDescription:
            "مينا نادر يؤدي مباشرة في قطر مع مجموعته الكوميدية التفاعلية.",
          location: "مركز قطر الوطني للمؤتمرات (QNCC)",
          locationUrl:
            "https://www.google.com/maps/search/?api=1&query=Qatar+National+Convention+Centre",
          date: "السبت، 27 سبتمبر 2025",
          description: [
            "طبعة قطر خاصة من عرض مينا نادر الكوميدي التفاعلي.",
            "ليلة مليئة بالضحك وتفاعل الجمهور والفكاهة الحادة.",
          ],
          priceFrom: "120 ريال قطري",
        },
      },
      location: {
        venueName: "مركز قطر الوطني للمؤتمرات",
        venueAddress: "QNCC، الدوحة، قطر",
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Qatar+National+Convention+Centre",
        mapEmbedUrl: "",
        byCarInstructions:
          "اسلك نحو مدينة التعليم واتبع الإشارات لـ QNCC.",
        byTaxiInstructions:
          "سائقي سيارات الأجرة في الدوحة على دراية بـ QNCC.",
      },
      topEvent: {
        id: "mina-nader-comedy-qatar",
        title: "عرض مينا نادر الكوميدي التفاعلي",
        price: "120 ريال قطري",
        dateRange: "السبت، 27 سبتمبر 2025",
        badge: "Exclusive",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader1.jpg",
          alt: "عرض كوميديا مباشرة لمينا نادر في QNCC",
        },
      },
      heroEvent: {
        id: "mina-nader-comedy-qatar",
        title: "عرض مينا نادر الكوميدي التفاعلي",
        date: "السبت، 27 سبتمبر 2025",
        venue: "مركز قطر الوطني للمؤتمرات",
        image: {
          src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/mina-nader1.jpg",
          alt: "عرض كوميديا مباشرة لمينا نادر في QNCC",
        },
      },
      termsAndCondition: [
        {
          title: "معلومات عامة",
          items: [
            "مهرجان البحرين للقهوة منظم من قبل DXB Live - مركز دبي التجاري العالمي وسيقام في عالم المعارض البحرين من 9-13 ديسمبر 2025.",
            "بشراء تذكرة أو حضور الحدث، يوافق الزوار على الالتزام بجميع شروط وأحكام المهرجان.",
          ],
        },
        {
          title: "التذاكر والدخول",
          items: [
            "جميع التذاكر غير قابلة للاسترجاع والتحويل.",
            "يجب تقديم التذاكر (رقمية أو مطبوعة) عند المدخل للتحقق.",
            "تذاكر Early Bird والعادية وVIP توفر مستويات مختلفة من الوصول كما هو موضح على منصة التذاكر.",
            "كل تذكرة صالحة للعدد المحدد من الأيام (1 أو 3 أو 5 أيام).",
            "يحتفظ المنظم بالحق في التحقق من صحة التذكرة. لن يتم قبول التذاكر غير الصالحة أو المكررة.",
          ],
        },
        {
          title: "سياسة العمر",
          items: [
            "المهرجان مفتوح لجميع الأعمار.",
            "يجب أن يكون الأطفال دون 12 عاماً برفقة بالغ في جميع الأوقات.",
            "بعض المناطق (مثل صالة القهوة VIP وركن المشروبات غير الكحولية) مقتصرة على زوار 18+.",
            "مناطق تذوق الكافيين قد يكون لها توصيات عمرية (16+).",
          ],
        },
        {
          title: "السلوك والسلامة",
          items: [
            "يجب على الزوار اتباع جميع التعليمات من موظفي المهرجان وأفراد الأمن.",
            "يحتفظ المنظم بالحق في رفض الدخول أو إزالة أي ضيف يتصرف بشكل غير لائق أو يعرض الآخرين للخطر.",
            "الطعام والمشروبات الخارجية غير مسموحة داخل المكان.",
            "التدخين مسموح فقط في المناطق المخصصة.",
            "الحيوانات الأليفة غير مسموحة، باستثناء حيوانات الخدمة المعتمدة.",
          ],
        },
        {
          title: "التصوير والوسائط",
          items: [
            "بدخول المهرجان، يمنح الزوار المنظم الإذن لاستخدام الصور أو الفيديوهات المأخوذة أثناء الحدث لأغراض التسويق والترويج.",
            "التصوير أو تسجيل الفيديو الاحترافي يتطلب موافقة مسبقة.",
          ],
        },
        {
          title: "تعديلات الحدث",
          items: [
            "يحتفظ المنظم بالحق في تغيير جداول الأحداث أو الميزات أو المعارضين دون إشعار مسبق.",
            "في حالة القوة القاهرة (مثل الطقس، التنظيم الحكومي، مخاوف السلامة)، قد يؤجل المنظم أو يلغي الحدث. ستتبع سياسات التذاكر اللوائح المعمول بها.",
          ],
        },
        {
          title: "المسؤولية",
          items: [
            "المنظم غير مسؤول عن أي خسارة أو سرقة أو إصابة أو ضرر يحدث أثناء الحدث.",
            "يحضر الزوار المهرجان على مسؤوليتهم الخاصة وهم مسؤولون عن ممتلكاتهم الشخصية.",
          ],
        },
        {
          title: "الخصوصية",
          items: [
            "المعلومات الشخصية المجمعة أثناء شراء التذكرة ستُستخدم فقط لإدارة الحدث والتواصل والتحديثات المستقبلية المتعلقة بمهرجان البحرين للقهوة.",
          ],
        },
        {
          title: "الاتصال",
          items: [
            "للاستفسارات، يرجى الاتصال: +971 4 308 6145 | dxblive@dwtc.com",
          ],
        },
      ],
    },
  },
} as const;

/**
 * Hero events data for carousel display (bilingual)
 */
export const mockHeroEvents: Record<'en' | 'ar', HeroEvent[]> = {
  en: [
    {
      id: "mohamed-helmy-live",
      title: "Mohamed Helmy live in Exhibition World Bahrain",
      date: "Sat, 7 Feb 2026",
      venue: "Crown Plaza Hotel",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/mohamed-helmy-banner.webp",
        alt: "Mina Nader live comedy poster in Manama",
      },
    },
    {
      id: "aye-of-camel-omar-el-gamal",
      title: "Aye of Camel - Omar El Gamal",
      date: "Sat, 8 November 2025",
      venue: "Crown Plaza Hotel",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/Banner-omer-el-gamal.webp",
        alt: "Omar El Gamal live comedy poster",
      },
    },
    {
      id: "mina-nader-comedy-qatar",
      title: "Mina Nader Interactive Comedy Show",
      date: "Sat, 27 Sep 2025",
      venue: "Qatar National Convention Centre (QNCC)",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/banner-minanader.webp",
        alt: "Mina Nader live comedy poster in Manama",
      },
    },
  ],
  ar: [
    {
      id: "mohamed-helmy-live",
      title: "محمد حلمي مباشر في عالم المعارض البحرين",
      date: "السبت، 7 فبراير 2026",
      venue: "فندق كراون بلازا",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/mohamed-helmy-banner.webp",
        alt: "ملصق كوميديا مباشرة لمينا نادر في المنامة",
      },
    },
    {
      id: "aye-of-camel-omar-el-gamal",
      title: "عين الجمل - عمر الجمال",
      date: "السبت، 8 نوفمبر 2025",
      venue: "فندق كراون بلازا",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/Banner-omer-el-gamal.webp",
        alt: "ملصق كوميديا مباشرة لعمر الجمال",
      },
    },
    {
      id: "mina-nader-comedy-qatar",
      title: "عرض مينا نادر الكوميدي التفاعلي",
      date: "السبت، 27 سبتمبر 2025",
      venue: "مركز قطر الوطني للمؤتمرات (QNCC)",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/banner/banner-minanader.webp",
        alt: "ملصق كوميديا مباشرة لمينا نادر في المنامة",
      },
    },
  ],
} as const;

/**
 * Status tone to CSS class mapping
 */
export const STATUS_CLASSES: Record<UpcomingEventstatus["tone"], string> = {
  primary: "text-[#7C3AED]",
  warning: "text-[#D92D20]",
  info: "text-[#155EEF]",
} as const;
