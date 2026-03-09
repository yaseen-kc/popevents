/**
 * Mock artist data (temporary - will be replaced by API)
 *
 * @module constants/entities/artists/mock
 */

import type { ArtistDetail } from "@/types/artists";

/**
 * Map of artist IDs to their detailed information (bilingual)
 * This is the single source of truth for all artist data
 */
export const mockArtistDetailMap: Record<string, { en: ArtistDetail; ar: ArtistDetail }> = {
  "mina-nader": {
    en: {
      id: "mina-nader",
      name: "Mina Nader",
      followers: "2M followers",
      biography:
        "Mina Nader is an Egyptian stand-up comedian and actor who began his career in the early 2000s performing with amateur theatre groups before transitioning into television and live comedy shows. He gained recognition through appearances on Arabic TV programs and series such as Kalabsh, Tiatro Masr, Cuffs, and Ali Baba, building a reputation for sharp observational humor and an engaging on-stage presence. In recent years, he has focused on large-scale Arabic stand-up specials and an interactive comedy tour across cities like Doha, Bahrain, Riyadh, Jeddah, Dubai, Amman, and other Middle Eastern hubs, where his crowd work and improvised bits are central to the experience. His shows are known for energetic storytelling, audience participation, and satirical takes on everyday life in the Arab world, which have helped him develop a strong regional fanbase.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/minanader.jpg",
        alt: "Mina Nader performing stand-up comedy",
      },
      events: [],
    },
    ar: {
      id: "mina-nader",
      name: "مينا نادر",
      followers: "مليوني متابع",
      biography:
        "مينا نادر هو كوميديان و ممثل مصري بدأ مسيرته في أوائل الألفية الثانية بأداء مع فرق مسرحية هواة قبل أن ينتقل إلى التلفزيون وعروض الكوميديا الحية. اكتسب شهرة من خلال ظهوره في البرامج والمسلسلات العربية مثل كلبش وتياترو مصر وكافس وعلي بابا، مما بنى له سمعة في الفكاهة الملاحظة الحادة والحضور الجذاب على المسرح. في السنوات الأخيرة، ركز على عروض الكوميديا العربية الكبيرة وجولة كوميديا تفاعلية عبر مدن مثل الدوحة والبحرين والرياض وجدة ودبي وعمان ومراكز أخرى في الشرق الأوسط، حيث يكون عمله مع الجمهور والقطع المرتجلة في قلب التجربة. عروضه معروفة بسرد القصص النشط ومشاركة الجمهور والنظرة الساخرة على الحياة اليومية في العالم العربي، مما ساعده على تطوير قاعدة معجبين إقليمية قوية.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/minanader.jpg",
        alt: "مينا نادر يؤدي كوميديا ارتجالية",
      },
      events: [],
    },
  },

  "omar-el-gamal": {
    en: {
      id: "omar-el-gamal",
      name: "Omar El Gamal",
      followers: "300K followers",
      biography:
        "Omar El Gamal is one of the most recognizable voices in modern Arabic stand up comedy, known for his clever observations, self aware humor, and sharp commentary on everyday Egyptian life. Originally from Egypt, he began performing stand up in the early days of the local comedy movement, quickly standing out for his confident delivery and relatable storytelling. His material often revolves around social norms, relationships, cultural contradictions, and personal experiences that resonate strongly with audiences across the Arab world.As his popularity grew, Omar became a core figure in the regional comedy scene, performing regularly in Cairo and expanding to major cities across the Middle East.His live shows are known for their high energy and strong audience connection, often selling out and drawing a diverse crowd.Beyond the stage, he built a strong digital presence through viral clips and online sketches, helping introduce Arabic stand up comedy to a wider and younger audience.Omar El Gamal has also collaborated with other leading comedians and comedy platforms, contributing to the growth of stand up as a mainstream form of entertainment in the region.With his consistent output, evolving material, and growing international exposure, he continues to push Arabic comedy forward, cementing his position as one of the genre's most influential performers today.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/artists/OmarElGamal.jpg",
        alt: "Omar El Gamal performing on stage",
      },
      events: [],
    },
    ar: {
      id: "omar-el-gamal",
      name: "عمر الجمال",
      followers: "300 ألف متابع",
      biography:
        "عمر الجمال هو أحد أكثر الأصوات المعروفة في الكوميديا العربية الحديثة، معروف بملاحظاته الذكية وفكاهته الواعية وتعليقاته الحادة على الحياة المصرية اليومية. من أصل مصري، بدأ أداء الكوميديا الارتجالية في الأيام الأولى لحركة الكوميديا المحلية، وبرز بسرعة بأدائه الواثق وسرد القصص القابل للتعاطف. غالباً ما تدور مواده حول الأعراف الاجتماعية والعلاقات والتناقضات الثقافية والتجارب الشخصية التي تتردد صدى قوياً مع الجماهير في جميع أنحاء العالم العربي. مع نمو شعبيته، أصبح عمر شخصية أساسية في مشهد الكوميديا الإقليمي، يؤدي بانتظام في القاهرة ويتوسع إلى المدن الكبرى في جميع أنحاء الشرق الأوسط. عروضه الحية معروفة بطاقتها العالية واتصالها القوي بالجمهور، وغالباً ما تباع بالكامل وتجذب جمهوراً متنوعاً. خارج المسرح، بنى حضوراً رقمياً قوياً من خلال المقاطع الفيروسية والاسكتشات عبر الإنترنت، مما ساعد في تقديم الكوميديا العربية الارتجالية لجمهور أوسع وأصغر سناً. تعاون عمر الجمال أيضاً مع كوميديين ومنصات كوميديا رائدة أخرى، مما ساهم في نمو الكوميديا الارتجالية كشكل ترفيهي سائد في المنطقة. مع إنتاجه المستمر ومواده المتطورة والتعرض الدولي المتزايد، يستمر في دفع الكوميديا العربية إلى الأمام، مما يعزز موقعه كواحد من أكثر المؤدين تأثيراً في هذا النوع اليوم.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/artists/OmarElGamal.jpg",
        alt: "عمر الجمال يؤدي على المسرح",
      },
      events: [],
    },
  },

  "mohamed-helmy": {
    en: {
      id: "mohamed-helmy",
      name: "Mohamed Helmy",
      followers: "1.5M followers",
      biography:
        "Mohamed Helmy is a rising star in Arabic stand up comedy, known for his witty takes on everyday life, family, and social issues. Originally from Egypt, he began performing around 2016 in Alexandria and quickly became one of the most recognizable figures in the regional comedy scene. With his bold style and sharp timing, he founded his own brand, HelmyMan Events, which produces comedy show formats that regularly sell out across the Middle East. The breakthrough came with his format The Roast League, launched in 2019, which set a new tone for Arabic humor. From there, Helmy embarked on several tours, including the Mama's Boy and Papa's Boy world tours, playing to packed audiences in Riyadh, Dubai, Abu Dhabi, and beyond. He later expanded internationally with his Globally Local tour, taking his unique style to stages across Europe and the U.S. Known not only for his stage presence but also for his sharp writing, he co-hosts the show Sold Out with Alaa El-Sheikh, streaming on WatchIt. The Mohamed Helmy podcast and online presence have helped solidify his influence beyond just live events. With a loyal following and growing international reach, fans of Mohamed Helmy stand up comedian work can expect even more ambitious projects ahead.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/artists/mohamed-helmy.jpg",
        alt: "Mohamed Helmy performing live on stage",
      },
      events: [
        {
          dateTime: "Sat, 22 Feb 2025, 8:00 PM",
          name: "Mohamed Helmy Live – Exhibition World Bahrain",
          venue: "Exhibition World Bahrain",
          price: "",
          location: "Manama, Bahrain",
          image: {
            src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/events/hemly.png",
            alt: "Mohamed Helmy live show poster",
          },
        },
      ],
    },
    ar: {
      id: "mohamed-helmy",
      name: "محمد حلمي",
      followers: "1.5 مليون متابع",
      biography:
        "محمد حلمي هو نجم صاعد في الكوميديا العربية الارتجالية، معروف بآرائه الذكية حول الحياة اليومية والعائلة والقضايا الاجتماعية. من أصل مصري، بدأ الأداء حوالي عام 2016 في الإسكندرية وأصبح بسرعة أحد أكثر الشخصيات المعروفة في مشهد الكوميديا الإقليمي. بأسلوبه الجريء وتوقيته الحاد، أسس علامته التجارية الخاصة، HelmyMan Events، التي تنتج صيغ عروض كوميديا تباع بانتظام في جميع أنحاء الشرق الأوسط. جاءت النقلة النوعية مع صيغته دوري الراست، التي أطلقت في عام 2019، والتي حددت نغمة جديدة للفكاهة العربية. من هناك، انطلق حلمي في عدة جولات، بما في ذلك جولات ماما بوي وبابا بوي العالمية، يؤدي أمام جماهير حاشدة في الرياض ودبي وأبوظبي وما بعدها. توسع لاحقاً دولياً مع جولته Globally Local، حيث أخذ أسلوبه الفريد إلى مسارح في جميع أنحاء أوروبا والولايات المتحدة. معروف ليس فقط بحضوره على المسرح ولكن أيضاً بكتاباته الحادة، يشارك في استضافة برنامج Sold Out مع علاء الشيخ، الذي يُبث على WatchIt. ساعدت بودكاست محمد حلمي وحضوره عبر الإنترنت في تعزيز تأثيره خارج الأحداث الحية فقط. مع قاعدة معجبين مخلصة ووصول دولي متزايد، يمكن لمحبي عمل الكوميديان محمد حلمي الارتجالي أن يتوقعوا مشاريع أكثر طموحاً في المستقبل.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/artists/mohamed-helmy.jpg",
        alt: "محمد حلمي يؤدي مباشرة على المسرح",
      },
      events: [
        {
          dateTime: "السبت، 22 فبراير 2025، 8:00 مساءً",
          name: "محمد حلمي مباشر – عالم المعارض البحرين",
          venue: "عالم المعارض البحرين",
          price: "",
          location: "المنامة، البحرين",
          image: {
            src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/popevents/events/hemly.png",
            alt: "ملصق عرض محمد حلمي المباشر",
          },
        },
      ],
    },
  },
} as const;
