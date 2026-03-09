/**
 * Services page static text content
 *
 * @module constants/content/services
 */

import type {
    HeroBackgroundImage,
    ServiceHeroContent,
    ServiceHeroContentMap,
} from "@/types/services";

/**
 * Helper to build shared background descriptors for unsplash sources
 */
const buildBackgroundImages = (baseUrl: string): HeroBackgroundImage[] => {
    const separator = baseUrl.includes("?") ? "&" : "?";
    const baseParams = `${separator}auto=format&`;

    return [
        {
            minWidth: 1280,
            image: `${baseUrl}${baseParams}w=1920&h=820&fit=crop&q=80`,
            sizes: "(min-width: 1280px) 1280px, 100vw",
        },
        {
            minWidth: 768,
            maxWidth: 1279,
            image: `${baseUrl}${baseParams}w=1440&h=660&fit=crop&q=80`,
            sizes: "(min-width: 768px) 100vw, 100vw",
        },
        {
            minWidth: 0,
            maxWidth: 767,
            image: `${baseUrl}${baseParams}w=768&h=900&fit=crop&q=80`,
            sizes: "100vw",
        },
    ];
};

/**
 * Ordered hero entries used by the services route
 */
export const SERVICE_HERO_CONTENT = {
    en: [
        {
            slug: "live-music-concerts",
            titleLine1: "Live music",
            titleLine2: "concerts",
            description:
                "Stunning production, world-class sound systems, and electrifying performances that transform every venue into an unforgettable experience.",
            backgroundImages: buildBackgroundImages(
                "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/music-concert.webp"
            ),
            nextSlug: "celebrity-appearances",
            nextLabel: "Next service",
        },
        {
            slug: "celebrity-appearances",
            titleLine1: "Celebrity",
            titleLine2: "appearances",
            description:
                "Exclusive access to top-tier talent, seamless meet-and-greets, and star-powered moments that elevate your brand.",
            backgroundImages: buildBackgroundImages(
                "https://images.unsplash.com/photo-1511578314322-379afb476865"
            ),
            nextSlug: "open-mic-nights",
            nextLabel: "Next service",
        },
        {
            slug: "open-mic-nights",
            titleLine1: "Open mic",
            titleLine2: "nights",
            description:
                "Welcoming stages where emerging talent shines, communities connect, and the next big star might just take the mic.",
            backgroundImages: buildBackgroundImages(
                "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/open-mic.webp"
            ),
            nextSlug: "themed-entertainment-nights",
            nextLabel: "Next service",
        },
        {
            slug: "stand-up-comedy-performances",
            titleLine1: "Stand-up comedy",
            titleLine2: "performances",
            description:
                "Intimate venues, world-class comedians, and unforgettable nights of laughter tailored for GCC's entertainment scene.",
            backgroundImages: buildBackgroundImages(
                "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/stand-up-comedy.webp"
            ),
            nextSlug: "live-music-concerts",
            nextLabel: "Next service",
        },
        {
            slug: "themed-entertainment-nights",
            titleLine1: "Themed",
            titleLine2: "entertainment",
            description:
                "Immersive experiences with creative themes, stunning decor, and entertainment that transports guests to another world.",
            backgroundImages: buildBackgroundImages(
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            ),
            nextSlug: "corporate-entertainment-shows",
            nextLabel: "Next service",
        },
        {
            slug: "corporate-entertainment-shows",
            titleLine1: "Corporate",
            titleLine2: "entertainment",
            description:
                "Professional productions that blend business excellence with show-stopping entertainment for your most important events.",
            backgroundImages: buildBackgroundImages(
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
            ),
            nextSlug: "stand-up-comedy-performances",
            nextLabel: "Back to start",
        },
    ] as ServiceHeroContent[],
    ar: [
        {
            slug: "live-music-concerts",
            titleLine1: "حفلات",
            titleLine2: "موسيقية حية",
            description:
                "إنتاج مذهل، أنظمة صوت عالمية المستوى، وعروض كهربائية تحول كل مكان إلى تجربة لا تُنسى.",
            backgroundImages: buildBackgroundImages(
                "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/music-concert.webp"
            ),
            nextSlug: "celebrity-appearances",
            nextLabel: "الخدمة التالية",
        },
        {
            slug: "celebrity-appearances",
            titleLine1: "حضور",
            titleLine2: "المشاهير",
            description:
                "وصول حصري لمواهب من الطراز الأول، لقاءات سلسة، ولحظات مدعومة بالنجوم ترفع من علامتك التجارية.",
            backgroundImages: buildBackgroundImages(
                "https://images.unsplash.com/photo-1511578314322-379afb476865"
            ),
            nextSlug: "open-mic-nights",
            nextLabel: "الخدمة التالية",
        },
        {
            slug: "open-mic-nights",
            titleLine1: "أمسيات",
            titleLine2: "الميكروفون المفتوح",
            description:
                "مسارات ترحيبية حيث يتألق المواهب الناشئة، تتصل المجتمعات، وقد يأخذ النجم الكبير القادم الميكروفون.",
            backgroundImages: buildBackgroundImages(
                "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/landing/open-mic.webp"
            ),
            nextSlug: "themed-entertainment-nights",
            nextLabel: "الخدمة التالية",
        },
        {
            slug: "stand-up-comedy-performances",
            titleLine1: "عروض",
            titleLine2: "الكوميديا الارتجالية",
            description:
                "أماكن حميمة، كوميديون عالميون، وأمسيات ضحك لا تُنسى مصممة خصيصًا لمشهد الترفيه في دول مجلس التعاون.",
            backgroundImages: buildBackgroundImages(
                "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/stand-up-comedy.webp"
            ),
            nextSlug: "live-music-concerts",
            nextLabel: "الخدمة التالية",
        },
        {
            slug: "themed-entertainment-nights",
            titleLine1: "ترفيه",
            titleLine2: "مواضيعي",
            description:
                "تجارب غامرة مع مواضيع إبداعية، ديكور مذهل، وترفيه ينقل الضيوف إلى عالم آخر.",
            backgroundImages: buildBackgroundImages(
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            ),
            nextSlug: "corporate-entertainment-shows",
            nextLabel: "الخدمة التالية",
        },
        {
            slug: "corporate-entertainment-shows",
            titleLine1: "ترفيه",
            titleLine2: "مؤسسي",
            description:
                "إنتاجات احترافية تمزج بين التميز التجاري والترفيه المذهل لأهم فعالياتك.",
            backgroundImages: buildBackgroundImages(
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
            ),
            nextSlug: "stand-up-comedy-performances",
            nextLabel: "العودة للبداية",
        },
    ] as ServiceHeroContent[],
} as const;

/**
 * Utility map for constant-time lookups
 */
export const SERVICE_HERO_CONTENT_MAP = {
    en: SERVICE_HERO_CONTENT.en.reduce<ServiceHeroContentMap>((acc, entry) => {
        acc[entry.slug] = entry;
        return acc;
    }, {}),
    ar: SERVICE_HERO_CONTENT.ar.reduce<ServiceHeroContentMap>((acc, entry) => {
        acc[entry.slug] = entry;
        return acc;
    }, {}),
} as const;

/**
 * Service detail content structure
 */
export interface ServiceDetailContent {
    summaryParagraphs: readonly string[];
    benefits: readonly {
        title: string;
        description: string;
    }[];
    whyItMatters: string;
    workflowSteps: readonly {
        title: string;
        description: string;
    }[];
}

/**
 * Stand-up comedy performances detailed content
 */
const STAND_UP_COMEDY_CONTENT = {
    en: {
        summaryParagraphs: [
            "Laughter is universal, but great comedy is curated.",
            "Our stand-up comedy performances bring world-class comedians to intimate venues across GCC, creating unforgettable nights where every punchline lands and every audience member feels part of the show.",
        ],
        benefits: [
            {
                title: "Curated talent selection",
                description:
                    "We handpick comedians who understand diverse audiences and deliver performances that resonate with GCC's vibrant community.",
            },
            {
                title: "Intimate venue experience",
                description:
                    "Smaller spaces mean better connection—every seat feels like front row, and every laugh is part of the energy.",
            },
            {
                title: "Professional production",
                description:
                    "From sound quality to stage lighting, we ensure every technical detail enhances the comedic experience.",
            },
            {
                title: "Flexible event formats",
                description:
                    "Whether it's a single headliner, a comedy showcase, or a themed night, we tailor the format to your vision.",
            },
        ],
        whyItMatters:
            "Comedy brings people together like nothing else. In GCC's growing entertainment scene, stand-up comedy offers a fresh, engaging way to connect with audiences, build community, and create memorable experiences that keep people coming back.",
        workflowSteps: [
            {
                title: "Concept & booking",
                description: "We discuss your vision and secure the perfect comedian for your event.",
            },
            {
                title: "Venue coordination",
                description: "We handle venue selection, setup, and technical requirements.",
            },
            {
                title: "Promotion & marketing",
                description: "We create buzz through targeted campaigns across social media and local channels.",
            },
            {
                title: "Event execution",
                description: "On the night, we manage everything so you can enjoy the show.",
            },
        ],
    } as ServiceDetailContent,
    ar: {
        summaryParagraphs: [
            "الضحك عالمي، لكن الكوميديا العظيمة منتقاة.",
            "تجلب عروض الكوميديا الارتجالية لدينا كوميديين عالميين إلى أماكن حميمة في جميع أنحاء دول مجلس التعاون، مما يخلق أمسيات لا تُنسى حيث تصل كل نكتة ويشعر كل عضو في الجمهور بأنه جزء من العرض.",
        ],
        benefits: [
            {
                title: "اختيار موهبة منتقاة",
                description:
                    "نختار بعناية الكوميديين الذين يفهمون الجماهير المتنوعة ويقدمون عروضًا تتردد صداها مع مجتمع دول مجلس التعاون النابض بالحياة.",
            },
            {
                title: "تجربة مكان حميم",
                description:
                    "المساحات الأصغر تعني اتصالًا أفضل—كل مقعد يشعر وكأنه الصف الأمامي، وكل ضحكة جزء من الطاقة.",
            },
            {
                title: "إنتاج احترافي",
                description:
                    "من جودة الصوت إلى إضاءة المسرح، نضمن أن كل تفصيل تقني يعزز التجربة الكوميدية.",
            },
            {
                title: "صيغ فعاليات مرنة",
                description:
                    "سواء كان ذلك فنانًا رئيسيًا واحدًا، أو عرض كوميديا، أو ليلة مواضيعية، نخصص الصيغة لرؤيتك.",
            },
        ],
        whyItMatters:
            "الكوميديا تجمع الناس مثل أي شيء آخر. في مشهد الترفيه المتنامي في دول مجلس التعاون، تقدم الكوميديا الارتجالية طريقة جديدة وجذابة للتواصل مع الجماهير وبناء المجتمع وخلق تجارب لا تُنسى تجعل الناس يعودون.",
        workflowSteps: [
            {
                title: "المفهوم والحجز",
                description: "نناقش رؤيتك ونضمن الكوميدي المثالي لحدثك.",
            },
            {
                title: "تنسيق المكان",
                description: "نتعامل مع اختيار المكان والإعداد والمتطلبات التقنية.",
            },
            {
                title: "الترويج والتسويق",
                description: "نخلق ضجة من خلال حملات مستهدفة عبر وسائل التواصل الاجتماعي والقنوات المحلية.",
            },
            {
                title: "تنفيذ الحدث",
                description: "في الليلة، ندير كل شيء حتى تتمكن من الاستمتاع بالعرض.",
            },
        ],
    } as ServiceDetailContent,
} as const;

/**
 * Live music concerts detailed content
 */
const LIVE_MUSIC_CONCERTS_CONTENT = {
    en: {
        summaryParagraphs: [
            "Music moves people, but production moves mountains.",
            "Our live music concerts combine world-class artists with stunning production values—from crystal-clear sound systems to cinematic lighting that transforms any venue into a concert hall experience.",
        ],
        benefits: [
            {
                title: "Premium sound systems",
                description:
                    "We invest in professional-grade audio equipment to ensure every note, beat, and lyric reaches your audience with perfect clarity.",
            },
            {
                title: "Cinematic lighting design",
                description:
                    "Our lighting designers create visual experiences that enhance the music and elevate the entire performance.",
            },
            {
                title: "Artist management",
                description:
                    "We handle all artist logistics, from booking to sound checks, ensuring smooth performances every time.",
            },
            {
                title: "Venue transformation",
                description:
                    "We turn any space into a concert-ready venue with staging, sound, and lighting that rivals major music halls.",
            },
        ],
        whyItMatters:
            "Live music creates connections that streaming can't match. In GCC, where music culture is thriving, professional concerts offer venues and brands a powerful way to engage audiences, build loyalty, and create experiences that people talk about long after the last note.",
        workflowSteps: [
            {
                title: "Artist selection",
                description: "We match artists to your audience and event goals.",
            },
            {
                title: "Production planning",
                description: "We design sound, lighting, and staging layouts for optimal experience.",
            },
            {
                title: "Technical setup",
                description: "We coordinate equipment, sound checks, and venue preparation.",
            },
            {
                title: "Show management",
                description: "We oversee the entire event from doors open to encore.",
            },
        ],
    } as ServiceDetailContent,
    ar: {
        summaryParagraphs: [
            "الموسيقى تحرك الناس، لكن الإنتاج يحرك الجبال.",
            "تجمع حفلاتنا الموسيقية الحية فنانين عالميين مع قيم إنتاج مذهلة—من أنظمة صوت واضحة كالبلور إلى إضاءة سينمائية تحول أي مكان إلى تجربة قاعة حفلات موسيقية.",
        ],
        benefits: [
            {
                title: "أنظمة صوت متميزة",
                description:
                    "نستثمر في معدات صوت احترافية لضمان وصول كل نغمة وإيقاع وكلمة إلى جمهورك بوضوح مثالي.",
            },
            {
                title: "تصميم إضاءة سينمائي",
                description:
                    "يخلق مصممو الإضاءة لدينا تجارب بصرية تعزز الموسيقى وترفع الأداء بأكمله.",
            },
            {
                title: "إدارة الفنانين",
                description:
                    "نتعامل مع جميع الخدمات اللوجستية للفنانين، من الحجز إلى فحوصات الصوت، مما يضمن عروضًا سلسة في كل مرة.",
            },
            {
                title: "تحويل المكان",
                description:
                    "نحول أي مساحة إلى مكان جاهز للحفلات مع المسرح والصوت والإضاءة التي تنافس قاعات الموسيقى الكبرى.",
            },
        ],
        whyItMatters:
            "الموسيقى الحية تخلق روابط لا يمكن للبث المباشر أن يضاهيها. في دول مجلس التعاون، حيث تزدهر ثقافة الموسيقى، تقدم الحفلات الاحترافية للأماكن والعلامات التجارية طريقة قوية لإشراك الجماهير وبناء الولاء وخلق تجارب يتحدث عنها الناس لفترة طويلة بعد آخر نغمة.",
        workflowSteps: [
            {
                title: "اختيار الفنان",
                description: "نطابق الفنانين مع جمهورك وأهداف حدثك.",
            },
            {
                title: "تخطيط الإنتاج",
                description: "نصمم تخطيطات الصوت والإضاءة والمسرح للحصول على تجربة مثالية.",
            },
            {
                title: "الإعداد التقني",
                description: "ننسق المعدات وفحوصات الصوت وإعداد المكان.",
            },
            {
                title: "إدارة العرض",
                description: "نشرف على الحدث بأكمله من فتح الأبواب إلى الإعادة.",
            },
        ],
    } as ServiceDetailContent,
} as const;

/**
 * Celebrity appearances detailed content
 */
const CELEBRITY_APPEARANCES_CONTENT = {
    en: {
        summaryParagraphs: [
            "Stars draw crowds, but strategy draws results.",
            "Our celebrity appearance services connect you with top-tier talent for meet-and-greets, brand activations, and exclusive events that turn moments into headlines and audiences into advocates.",
        ],
        benefits: [
            {
                title: "Exclusive talent access",
                description:
                    "We leverage our network to secure appearances from regional and international celebrities who align with your brand.",
            },
            {
                title: "Seamless coordination",
                description:
                    "We handle all logistics, from travel arrangements to security, ensuring smooth experiences for celebrities and guests.",
            },
            {
                title: "Brand alignment",
                description:
                    "We match celebrities to your brand values and audience, creating authentic connections that resonate.",
            },
            {
                title: "Media coverage",
                description:
                    "We coordinate with press and social media to maximize visibility and impact of your celebrity event.",
            },
        ],
        whyItMatters:
            "Celebrity appearances create instant buzz and lasting impressions. Whether you're launching a product, celebrating a milestone, or building brand awareness, the right celebrity can elevate your event from memorable to unforgettable—and generate media coverage that extends far beyond the event itself.",
        workflowSteps: [
            {
                title: "Talent sourcing",
                description: "We identify and secure celebrities who match your brand and audience.",
            },
            {
                title: "Contract negotiation",
                description: "We handle all agreements, schedules, and requirements.",
            },
            {
                title: "Event design",
                description: "We plan meet-and-greets, appearances, and activations that maximize impact.",
            },
            {
                title: "Execution & media",
                description: "We manage the event and coordinate media coverage for maximum visibility.",
            },
        ],
    } as ServiceDetailContent,
    ar: {
        summaryParagraphs: [
            "النجوم تجذب الحشود، لكن الاستراتيجية تجذب النتائج.",
            "تربط خدمات حضور المشاهير لدينا مع مواهب من الطراز الأول للقاءات، وتفعيل العلامات التجارية، وفعاليات حصرية تحول اللحظات إلى عناوين والجماهير إلى مؤيدين.",
        ],
        benefits: [
            {
                title: "وصول حصري للمواهب",
                description:
                    "نستفيد من شبكتنا لتأمين ظهورات من مشاهير إقليميين ودوليين يتماشون مع علامتك التجارية.",
            },
            {
                title: "تنسيق سلس",
                description:
                    "نتعامل مع جميع الخدمات اللوجستية، من ترتيبات السفر إلى الأمن، مما يضمن تجارب سلسة للمشاهير والضيوف.",
            },
            {
                title: "محاذاة العلامة التجارية",
                description:
                    "نطابق المشاهير مع قيم علامتك التجارية وجمهورك، مما يخلق روابط أصيلة تتردد صداها.",
            },
            {
                title: "التغطية الإعلامية",
                description:
                    "ننسق مع الصحافة ووسائل التواصل الاجتماعي لتعظيم الرؤية وتأثير حدث المشاهير الخاص بك.",
            },
        ],
        whyItMatters:
            "حضور المشاهير يخلق ضجة فورية وانطباعات دائمة. سواء كنت تطلق منتجًا، أو تحتفل بمعلم، أو تبني الوعي بالعلامة التجارية، يمكن للمشهور المناسب أن يرفع حدثك من لا يُنسى إلى لا يُنسى—ويولد تغطية إعلامية تمتد إلى ما بعد الحدث نفسه.",
        workflowSteps: [
            {
                title: "است sourcing المواهب",
                description: "نحدد ونؤمن المشاهير الذين يطابقون علامتك التجارية وجمهورك.",
            },
            {
                title: "تفاوض العقد",
                description: "نتعامل مع جميع الاتفاقيات والجداول والمتطلبات.",
            },
            {
                title: "تصميم الحدث",
                description: "نخطط للقاءات والظهورات والتفعيلات التي تعظم التأثير.",
            },
            {
                title: "التنفيذ والإعلام",
                description: "ندير الحدث وننسق التغطية الإعلامية للحصول على أقصى رؤية.",
            },
        ],
    } as ServiceDetailContent,
} as const;

/**
 * Open mic nights detailed content
 */
const OPEN_MIC_NIGHTS_CONTENT = {
    en: {
        summaryParagraphs: [
            "Every star starts somewhere, and every stage needs a spotlight.",
            "Our open mic nights create welcoming spaces where emerging talent can shine, communities can connect, and the next big act might just take the mic. We handle the production so you can focus on discovery.",
        ],
        benefits: [
            {
                title: "Community building",
                description:
                    "We create inclusive environments where artists and audiences come together to support local talent.",
            },
            {
                title: "Professional production",
                description:
                    "Even open mic nights deserve quality sound, lighting, and stage management—we provide it all.",
            },
            {
                title: "Talent discovery",
                description:
                    "Regular open mic nights help you identify rising stars and build relationships with emerging artists.",
            },
            {
                title: "Flexible formats",
                description:
                    "We adapt to your venue and vision, whether it's music, comedy, poetry, or mixed performances.",
            },
        ],
        whyItMatters:
            "Open mic nights are the heartbeat of local entertainment scenes. They give emerging artists a platform, venues a regular draw, and communities a place to connect. In GCC's growing creative scene, these events build the foundation for a thriving entertainment culture.",
        workflowSteps: [
            {
                title: "Format planning",
                description: "We design the open mic structure that fits your venue and goals.",
            },
            {
                title: "Promotion & sign-ups",
                description: "We handle marketing and artist registration to build a regular audience.",
            },
            {
                title: "Production setup",
                description: "We provide professional sound, lighting, and stage management.",
            },
            {
                title: "Event hosting",
                description: "We manage the night, from sign-ups to performances, ensuring smooth flow.",
            },
        ],
    } as ServiceDetailContent,
    ar: {
        summaryParagraphs: [
            "كل نجم يبدأ من مكان ما، وكل مسرح يحتاج إلى ضوء.",
            "تخلق أمسيات الميكروفون المفتوح لدينا مساحات ترحيبية حيث يمكن للمواهب الناشئة أن تتألق، ويمكن للمجتمعات أن تتصل، وقد يأخذ العرض الكبير القادم الميكروفون. نتعامل مع الإنتاج حتى تتمكن من التركيز على الاكتشاف.",
        ],
        benefits: [
            {
                title: "بناء المجتمع",
                description:
                    "نخلق بيئات شاملة حيث يجتمع الفنانون والجماهير لدعم المواهب المحلية.",
            },
            {
                title: "إنتاج احترافي",
                description:
                    "حتى أمسيات الميكروفون المفتوح تستحق صوتًا وإضاءة وإدارة مسرح عالية الجودة—نوفر كل ذلك.",
            },
            {
                title: "اكتشاف المواهب",
                description:
                    "تساعد أمسيات الميكروفون المفتوح المنتظمة في تحديد النجوم الصاعدة وبناء علاقات مع الفنانين الناشئين.",
            },
            {
                title: "صيغ مرنة",
                description:
                    "نتكيف مع مكانك ورؤيتك، سواء كانت موسيقى أو كوميديا أو شعر أو عروض مختلطة.",
            },
        ],
        whyItMatters:
            "أمسيات الميكروفون المفتوح هي نبض مشاهد الترفيه المحلية. إنها تعطي الفنانين الناشئين منصة، والأماكن جذبًا منتظمًا، والمجتمعات مكانًا للتواصل. في المشهد الإبداعي المتنامي في دول مجلس التعاون، تبني هذه الأحداث الأساس لثقافة ترفيهية مزدهرة.",
        workflowSteps: [
            {
                title: "تخطيط الصيغة",
                description: "نصمم هيكل الميكروفون المفتوح الذي يناسب مكانك وأهدافك.",
            },
            {
                title: "الترويج والتسجيل",
                description: "نتعامل مع التسويق وتسجيل الفنانين لبناء جمهور منتظم.",
            },
            {
                title: "إعداد الإنتاج",
                description: "نوفر صوتًا وإضاءة وإدارة مسرح احترافية.",
            },
            {
                title: "استضافة الحدث",
                description: "ندير الليلة، من التسجيلات إلى العروض، مما يضمن تدفقًا سلسًا.",
            },
        ],
    } as ServiceDetailContent,
} as const;

/**
 * Themed entertainment nights detailed content
 */
const THEMED_ENTERTAINMENT_NIGHTS_CONTENT = {
    en: {
        summaryParagraphs: [
            "Themes transport guests, but execution makes memories.",
            "Our themed entertainment nights combine creative concepts with stunning decor, immersive experiences, and entertainment that transforms venues into other worlds—from retro parties to futuristic celebrations and everything in between.",
        ],
        benefits: [
            {
                title: "Creative concept development",
                description:
                    "We work with you to design unique themes that resonate with your audience and create memorable experiences.",
            },
            {
                title: "Immersive decor & design",
                description:
                    "We transform spaces with custom decor, lighting, and set design that brings themes to life.",
            },
            {
                title: "Coordinated entertainment",
                description:
                    "We curate entertainment—from DJs to performers—that aligns with your theme and enhances the atmosphere.",
            },
            {
                title: "Complete event production",
                description:
                    "We handle every detail, from invitations to cleanup, ensuring seamless themed experiences.",
            },
        ],
        whyItMatters:
            "Themed events create shareable moments and lasting memories. In GCC's competitive entertainment market, unique themed nights help venues stand out, attract diverse audiences, and build a reputation for creativity and innovation that keeps guests coming back for the next experience.",
        workflowSteps: [
            {
                title: "Theme development",
                description: "We collaborate to create a unique theme concept and visual identity.",
            },
            {
                title: "Design & decor",
                description: "We source and install decor, lighting, and props that bring the theme to life.",
            },
            {
                title: "Entertainment curation",
                description: "We select and coordinate performers, music, and activities that match the theme.",
            },
            {
                title: "Event execution",
                description: "We manage the entire night, ensuring every detail supports the immersive experience.",
            },
        ],
    } as ServiceDetailContent,
    ar: {
        summaryParagraphs: [
            "المواضيع تنقل الضيوف، لكن التنفيذ يصنع الذكريات.",
            "تجمع أمسيات الترفيه المواضيعية لدينا مفاهيم إبداعية مع ديكور مذهل وتجارب غامرة وترفيه يحول الأماكن إلى عوالم أخرى—من حفلات الستينيات إلى احتفالات مستقبلية وكل شيء بينهما.",
        ],
        benefits: [
            {
                title: "تطوير مفهوم إبداعي",
                description:
                    "نعمل معك لتصميم مواضيع فريدة تتردد صداها مع جمهورك وتخلق تجارب لا تُنسى.",
            },
            {
                title: "ديكور وتصميم غامر",
                description:
                    "نحول المساحات بديكور مخصص وإضاءة وتصميم مجموعة يجلب المواضيع إلى الحياة.",
            },
            {
                title: "ترفيه منسق",
                description:
                    "ننتقي الترفيه—من DJs إلى المؤدين—الذي يتماشى مع موضوعك ويعزز الجو.",
            },
            {
                title: "إنتاج حدث كامل",
                description:
                    "نتعامل مع كل تفصيل، من الدعوات إلى التنظيف، مما يضمن تجارب مواضيعية سلسة.",
            },
        ],
        whyItMatters:
            "الأحداث المواضيعية تخلق لحظات قابلة للمشاركة وذكريات دائمة. في سوق الترفيه التنافسي في دول مجلس التعاون، تساعد الأمسيات المواضيعية الفريدة الأماكن على التميز وجذب جماهير متنوعة وبناء سمعة للإبداع والابتكار تجعل الضيوف يعودون للتجربة التالية.",
        workflowSteps: [
            {
                title: "تطوير الموضوع",
                description: "نتعاون لإنشاء مفهوم موضوع وهوية بصرية فريدة.",
            },
            {
                title: "التصميم والديكور",
                description: "نستورد ونثبت الديكور والإضاءة والدعائم التي تجلب الموضوع إلى الحياة.",
            },
            {
                title: "انتقاء الترفيه",
                description: "نختار وننسق المؤدين والموسيقى والأنشطة التي تطابق الموضوع.",
            },
            {
                title: "تنفيذ الحدث",
                description: "ندير الليلة بأكملها، مما يضمن أن كل تفصيل يدعم التجربة الغامرة.",
            },
        ],
    } as ServiceDetailContent,
} as const;

/**
 * Corporate entertainment shows detailed content
 */
const CORPORATE_ENTERTAINMENT_SHOWS_CONTENT = {
    en: {
        summaryParagraphs: [
            "Business needs polish, but events need personality.",
            "Our corporate entertainment shows blend professional production values with show-stopping performances, creating events that impress stakeholders, motivate teams, and celebrate achievements with the energy of a main-stage production.",
        ],
        benefits: [
            {
                title: "Professional production",
                description:
                    "We deliver corporate events with the same production quality as major entertainment shows—polished, professional, and impressive.",
            },
            {
                title: "Brand alignment",
                description:
                    "We ensure all entertainment aligns with your brand values and corporate culture, creating authentic experiences.",
            },
            {
                title: "Flexible formats",
                description:
                    "From product launches to annual galas, we adapt our entertainment to fit any corporate occasion.",
            },
            {
                title: "End-to-end management",
                description:
                    "We handle everything from concept to execution, allowing you to focus on your guests and business objectives.",
            },
        ],
        whyItMatters:
            "Corporate events are investments in relationships—with clients, partners, and teams. Professional entertainment elevates these moments from standard gatherings to memorable experiences that strengthen connections, celebrate achievements, and reinforce your brand's commitment to excellence.",
        workflowSteps: [
            {
                title: "Needs assessment",
                description: "We understand your objectives, audience, and brand requirements.",
            },
            {
                title: "Entertainment design",
                description: "We create a program that balances professionalism with engaging performances.",
            },
            {
                title: "Production coordination",
                description: "We manage all technical, logistical, and performance elements.",
            },
            {
                title: "Event delivery",
                description: "We execute flawlessly, ensuring your event reflects your brand's excellence.",
            },
        ],
    } as ServiceDetailContent,
    ar: {
        summaryParagraphs: [
            "الأعمال تحتاج إلى صقل، لكن الأحداث تحتاج إلى شخصية.",
            "تمزج عروض الترفيه المؤسسية لدينا قيم الإنتاج الاحترافية مع عروض مذهلة، مما يخلق أحداثًا تثير إعجاب أصحاب المصلحة وتحفز الفرق وتحتفل بالإنجازات بطاقة إنتاج المسرح الرئيسي.",
        ],
        benefits: [
            {
                title: "إنتاج احترافي",
                description:
                    "نقدم فعاليات مؤسسية بنفس جودة الإنتاج مثل عروض الترفيه الكبرى—مصقولة واحترافية ومثيرة للإعجاب.",
            },
            {
                title: "محاذاة العلامة التجارية",
                description:
                    "نضمن أن كل الترفيه يتماشى مع قيم علامتك التجارية وثقافتك المؤسسية، مما يخلق تجارب أصيلة.",
            },
            {
                title: "صيغ مرنة",
                description:
                    "من إطلاق المنتجات إلى الحفلات السنوية، نتكيف مع ترفيهنا ليتناسب مع أي مناسبة مؤسسية.",
            },
            {
                title: "إدارة شاملة",
                description:
                    "نتعامل مع كل شيء من المفهوم إلى التنفيذ، مما يسمح لك بالتركيز على ضيوفك وأهداف عملك.",
            },
        ],
        whyItMatters:
            "الأحداث المؤسسية هي استثمارات في العلاقات—مع العملاء والشركاء والفرق. يرفع الترفيه الاحترافي هذه اللحظات من التجمعات القياسية إلى تجارب لا تُنسى تعزز الروابط وتحتفل بالإنجازات وتعزز التزام علامتك التجارية بالتميز.",
        workflowSteps: [
            {
                title: "تقييم الاحتياجات",
                description: "نفهم أهدافك وجمهورك ومتطلبات علامتك التجارية.",
            },
            {
                title: "تصميم الترفيه",
                description: "ننشئ برنامجًا يوازن بين الاحترافية والعروض الجذابة.",
            },
            {
                title: "تنسيق الإنتاج",
                description: "ندير جميع العناصر التقنية واللوجستية والأدائية.",
            },
            {
                title: "تسليم الحدث",
                description: "ننفذ بلا عيوب، مما يضمن أن حدثك يعكس تميز علامتك التجارية.",
            },
        ],
    } as ServiceDetailContent,
} as const;

/**
 * Map of service slugs to their detailed content
 */
export const SERVICE_DETAIL_CONTENT_MAP = {
    en: {
        "stand-up-comedy-performances": STAND_UP_COMEDY_CONTENT.en,
        "live-music-concerts": LIVE_MUSIC_CONCERTS_CONTENT.en,
        "celebrity-appearances": CELEBRITY_APPEARANCES_CONTENT.en,
        "open-mic-nights": OPEN_MIC_NIGHTS_CONTENT.en,
        "themed-entertainment-nights": THEMED_ENTERTAINMENT_NIGHTS_CONTENT.en,
        "corporate-entertainment-shows": CORPORATE_ENTERTAINMENT_SHOWS_CONTENT.en,
    },
    ar: {
        "stand-up-comedy-performances": STAND_UP_COMEDY_CONTENT.ar,
        "live-music-concerts": LIVE_MUSIC_CONCERTS_CONTENT.ar,
        "celebrity-appearances": CELEBRITY_APPEARANCES_CONTENT.ar,
        "open-mic-nights": OPEN_MIC_NIGHTS_CONTENT.ar,
        "themed-entertainment-nights": THEMED_ENTERTAINMENT_NIGHTS_CONTENT.ar,
        "corporate-entertainment-shows": CORPORATE_ENTERTAINMENT_SHOWS_CONTENT.ar,
    },
} as const;

