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
  "disco-misr": {
    en: {
      id: "disco-misr",
      name: "Disco Misr",
      followers: "5.8K followers",
      biography:
        "Disco Misr is one of Egypt's most exciting electronic music acts, a Cairo-based DJ trio made up of Amr Emad, Mostafa El Sherif, and Schady Wasfy. Known for their distinctive fusion of nostalgic Egyptian classics with nu-disco, funk, deep house, Arabic pop, and modern electronic production, the trio has become a major force in the region's contemporary music scene. The project began around 2013 through performances at proms and private events before officially launching as DJ Disco Misr in 2014, when their creative mashups and remixes began gaining widespread attention. Disco Misr's signature sound transforms iconic songs by legendary Egyptian artists such as Om Kalthoum, Abdelhalim Hafez, Warda, and Sabah into energetic modern dance tracks. Their popular releases include Alf Leila We Leila Remix, Ahla Wahda, Keify Keda, Ana Negm Remix, Fe Eineh, and El Donia Risha F Hawa. Their music combines the nostalgia of Egypt's golden musical era with contemporary club energy, creating a live experience built around dancing, sing-alongs, and powerful electronic grooves. The trio has performed at major events across Egypt, Saudi Arabia, Europe, and the wider Middle East, including Balad Beast in Jeddah, A Thousand and One in Riyadh, Marbella Arena in Spain, and numerous major festivals and venues. With their distinctive ability to reinvent beloved Arabic classics for a new generation, Disco Misr continues to expand its international audience and establish itself as one of the region's most recognizable electronic music acts.",
      image: {
        src: "/artists/disco_misr.jpg",
        alt: "Disco Misr performing live on stage",
      },
      events: [],
    },
    ar: {
      id: "disco-misr",
      name: "ديسكو مصر",
      followers: "5.8 ألف متابع",
      biography:
        "ديسكو مصر هي واحدة من أبرز الفرق الموسيقية الإلكترونية في مصر، وهي فرقة دي جي مقرها القاهرة وتتكون من عمرو عماد ومصطفى الشريف وشادي وصفي. تشتهر الفرقة بمزيجها المميز من الكلاسيكيات المصرية والنو ديسكو والفانك والديب هاوس والبوب العربي والإنتاج الإلكتروني الحديث، وأصبحت واحدة من أبرز الأسماء في المشهد الموسيقي المعاصر في المنطقة. بدأت الرحلة حوالي عام 2013 من خلال حفلات التخرج والمناسبات الخاصة، قبل أن تنطلق الفرقة رسمياً باسم DJ Disco Misr في عام 2014، عندما بدأت الميكسات والريمكسات الخاصة بها في الانتشار بشكل واسع. يعتمد أسلوب ديسكو مصر المميز على إعادة تقديم الأغاني الشهيرة لأساطير الموسيقى المصرية مثل أم كلثوم وعبد الحليم حافظ ووردة وصباح في شكل مقطوعات راقصة حديثة وحيوية. ومن أشهر أعمالهم Alf Leila We Leila Remix وAhla Wahda وKeify Keda وAna Negm Remix وFe Eineh وEl Donia Risha F Hawa. تجمع موسيقاهم بين الحنين إلى العصر الذهبي للموسيقى المصرية والطاقة الحديثة للموسيقى الإلكترونية، لتقديم تجربة حية مليئة بالرقص والغناء والإيقاعات الإلكترونية القوية. وقد أحيت الفرقة حفلات وشاركت في فعاليات كبرى في مصر والسعودية وأوروبا والشرق الأوسط، بما في ذلك Balad Beast في جدة وA Thousand and One في الرياض وMarbella Arena في إسبانيا، إلى جانب العديد من المهرجانات والمسارح الكبرى. وبفضل قدرتها المميزة على إعادة تقديم الكلاسيكيات العربية المحبوبة لجيل جديد، تواصل ديسكو مصر توسيع جمهورها الدولي وترسيخ مكانتها كواحدة من أشهر الفرق الموسيقية الإلكترونية في المنطقة.",
      image: {
        src: "/artists/disco_misr.jpg",
        alt: "ديسكو مصر تؤدي مباشرة على المسرح",
      },
      events: [],
    },
  },

  "shawn-chidiac": {
    en: {
      id: "shawn-chidiac",
      name: "Shawn Chidiac",
      followers: "2.9K followers",
      biography:
        "Shawn Chidiac is a Canadian-Lebanese comedian and content creator known for his sharp observational humor, relatable storytelling, and viral comedy persona My Parents Are Divorced. Born in Canada and raised in a Lebanese family, Shawn's comedy draws heavily from his experiences navigating family relationships, cultural differences, dating, and everyday life across different cultures. His unique perspective as a Canadian-Lebanese comedian has helped him connect with audiences throughout the Middle East and internationally, particularly in Dubai, where he has built a strong presence in the comedy scene. Shawn's performances combine stand-up comedy, sketch comedy, and personal storytelling, turning familiar cultural experiences and family situations into highly relatable and entertaining material. His work frequently explores the contrast between Lebanese family culture and life in a multicultural environment, giving audiences a humorous perspective on identity, relationships, and modern life. Known for his viral online content as My Parents Are Divorced, Shawn has expanded his audience from social media into major live comedy venues and festivals. His notable performances include Laughing in Translation at the Shaw Theatre in London, Dubai's Most Wanted at Cadogan Hall in London, Same Same But Different at VOX Cinemas in Dubai, and WAEW at Zabeel Theatre. With a growing international audience and a distinctive comedic voice, Shawn Chidiac continues to establish himself as one of the region's promising comedy performers, bringing his raw, unfiltered, and culturally observant style to audiences around the world.",
      image: {
        src: "/artists/shawn_chidiac.jpeg",
        alt: "Shawn Chidiac performing live on stage",
      },
      events: [],
    },
    ar: {
      id: "shawn-chidiac",
      name: "شون شيدياك",
      followers: "2.9 ألف متابع",
      biography:
        "شون شيدياك هو كوميديان وصانع محتوى كندي من أصول لبنانية، معروف بكوميدياه القائمة على الملاحظات الذكية والقصص الواقعية وشخصيته الكوميدية الشهيرة My Parents Are Divorced. وُلد شون في كندا ونشأ في عائلة لبنانية، ويستمد الكثير من أعماله الكوميدية من تجاربه الشخصية في العلاقات العائلية والاختلافات الثقافية والمواعدة والحياة اليومية بين ثقافات متعددة. ساعده منظوره الفريد ككوميديان كندي لبناني على التواصل مع الجماهير في الشرق الأوسط وعلى المستوى الدولي، وخاصة في دبي حيث بنى حضوراً قوياً في مشهد الكوميديا. تجمع عروض شون بين الكوميديا الارتجالية والاسكتشات والقصص الشخصية، حيث يحول المواقف العائلية والتجارب الثقافية المألوفة إلى محتوى كوميدي قريب من الجمهور وممتع. وتتناول أعماله بشكل متكرر التباين بين الثقافة العائلية اللبنانية والحياة في بيئة متعددة الثقافات، مقدماً للجمهور منظوراً فكاهياً حول الهوية والعلاقات والحياة الحديثة. واشتهر شون بمحتواه المنتشر على وسائل التواصل الاجتماعي تحت شخصية My Parents Are Divorced، ثم وسع جمهوره من الإنترنت إلى المسارح الكبرى ومهرجانات الكوميديا. ومن أبرز عروضه Laughing in Translation في Shaw Theatre بلندن، وDubai's Most Wanted في Cadogan Hall بلندن، وSame Same But Different في VOX Cinemas بدبي، وWAEW في Zabeel Theatre. ومع نمو جمهوره الدولي وامتلاكه أسلوباً كوميدياً مميزاً، يواصل شون شيدياك ترسيخ مكانته كأحد الأصوات الكوميدية الواعدة في المنطقة، مقدماً أسلوبه العفوي والصريح وملاحظاته الثقافية الذكية للجماهير حول العالم.",
      image: {
        src: "/artists/shawn_chidiac.jpeg",
        alt: "شون شيدياك يؤدي مباشرة على المسرح",
      },
      events: [],
    },
  },
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
