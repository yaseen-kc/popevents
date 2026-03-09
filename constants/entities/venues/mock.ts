/**
 * Mock venue data (temporary - will be replaced by API)
 *
 * @module constants/entities/venues/mock
 */

import type { VenueDetail } from "@/types/venues";

/**
 * Map of venue IDs to their detailed information (bilingual)
 * This is the single source of truth for all venue data
 */
export const mockVenueDetailMap: Record<string, { en: VenueDetail; ar: VenueDetail }> = {
  "bahrain-national-theatre": {
    en: {
      id: "bahrain-national-theatre",
      name: "Bahrain National Theatre",
      location: "Manama, Bahrain",
      description:
        "The Bahrain National Theatre is a state-of-the-art cultural venue located in the heart of Manama. With a seating capacity of over 1,000, it serves as one of the premier performing arts centers in the Gulf region. The theatre hosts a diverse range of events including concerts, theatrical performances, dance shows, and cultural festivals. Its modern architecture and world-class acoustics make it an ideal destination for both local and international artists, providing audiences with exceptional entertainment experiences in a sophisticated setting.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/8618_upload659bad6d3795e_1704701293-01704701298.jpeg",
        alt: "Bahrain National Theatre exterior",
      },
    },
    ar: {
      id: "bahrain-national-theatre",
      name: "المسرح الوطني البحريني",
      location: "المنامة، البحرين",
      description:
        "المسرح الوطني البحريني هو مكان ثقافي حديث يقع في قلب المنامة. بسعة تتجاوز 1000 مقعد، يعد أحد أهم مراكز الفنون الأدائية في منطقة الخليج. يستضيف المسرح مجموعة متنوعة من الفعاليات بما في ذلك الحفلات الموسيقية والعروض المسرحية وعروض الرقص والمهرجانات الثقافية. تصميمه المعماري الحديث وأجهزة الصوت العالمية تجعله وجهة مثالية للفنانين المحليين والدوليين، مما يوفر للجماهير تجارب ترفيهية استثنائية في بيئة راقية.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/8618_upload659bad6d3795e_1704701293-01704701298.jpeg",
        alt: "واجهة المسرح الوطني البحريني",
      },
    },
  },

  "exhibition-world-bahrain": {
    en: {
      id: "exhibition-world-bahrain",
      name: "Exhibition World Bahrain",
      location: "Manama, Bahrain",
      description:
        "Exhibition World Bahrain is a premier exhibition and convention center that has become a landmark venue for large-scale events, concerts, and entertainment shows. With its expansive halls and flexible spaces, it can accommodate thousands of attendees, making it perfect for major concerts, comedy shows, and cultural events. The venue features cutting-edge facilities, excellent acoustics, and modern amenities, ensuring a memorable experience for both performers and audiences. Its strategic location and world-class infrastructure have made it a preferred destination for international artists and major entertainment productions in the region.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/8337_upload647582af47a0b_1685422767-01685422779.jpeg",
        alt: "Exhibition World Bahrain exterior",
      },
    },
    ar: {
      id: "exhibition-world-bahrain",
      name: "عالم المعارض البحرين",
      location: "المنامة، البحرين",
      description:
        "عالم المعارض البحرين هو مركز معارض ومؤتمرات رائد أصبح معلماً بارزاً للفعاليات الكبيرة والحفلات الموسيقية والعروض الترفيهية. بقاعاته الواسعة ومساحاته المرنة، يمكنه استيعاب آلاف الحضور، مما يجعله مثالياً للحفلات الموسيقية الكبرى وعروض الكوميديا والفعاليات الثقافية. يتميز المكان بمرافق حديثة وأجهزة صوت ممتازة ووسائل راحة عصرية، مما يضمن تجربة لا تُنسى للفنانين والجماهير على حد سواء. موقعه الاستراتيجي وبنيته التحتية العالمية جعلاه وجهة مفضلة للفنانين الدوليين والإنتاجات الترفيهية الكبرى في المنطقة.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/8337_upload647582af47a0b_1685422767-01685422779.jpeg",
        alt: "واجهة عالم المعارض البحرين",
      },
    },
  },

  "crowne-plaza-hotel-bahrain": {
    en: {
      id: "crowne-plaza-hotel-bahrain",
      name: "Crowne Plaza Hotel Bahrain",
      location: "Manama, Bahrain",
      description:
        "The Crowne Plaza Hotel Bahrain offers elegant event spaces and ballrooms that host intimate concerts, comedy shows, and cultural performances. Known for its sophisticated ambiance and excellent service, the venue provides a refined setting for entertainment events. The hotel's versatile event spaces can be configured to accommodate various performance styles, from acoustic concerts to stand-up comedy shows, making it a popular choice for both local and international artists seeking an upscale venue experience.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/2157_upload64e758d203e20_1692883154-01692883162.jpeg",
        alt: "Crowne Plaza Hotel Bahrain venue",
      },
    },
    ar: {
      id: "crowne-plaza-hotel-bahrain",
      name: "فندق كراون بلازا البحرين",
      location: "المنامة، البحرين",
      description:
        "يوفر فندق كراون بلازا البحرين مساحات فعاليات أنيقة وقاعات احتفالات تستضيف حفلات موسيقية حميمة وعروض كوميديا وعروضاً ثقافية. معروف بأجوائه الراقية وخدمته الممتازة، يوفر المكان بيئة راقية لفعاليات الترفيه. يمكن تكوين مساحات الفعاليات المتعددة في الفندق لاستيعاب أنماط أداء مختلفة، من الحفلات الموسيقية الصوتية إلى عروض الكوميديا الارتجالية، مما يجعله خياراً شائعاً للفنانين المحليين والدوليين الذين يبحثون عن تجربة مكان راقي.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/2157_upload64e758d203e20_1692883154-01692883162.jpeg",
        alt: "مكان فندق كراون بلازا البحرين",
      },
    },
  },

  "cultural-hall-bahrain": {
    en: {
      id: "cultural-hall-bahrain",
      name: "Cultural Hall Bahrain",
      location: "Manama, Bahrain",
      description:
        "Cultural Hall Bahrain is a prominent cultural center that serves as a hub for artistic expression and entertainment in the Kingdom. The venue regularly hosts concerts, theatrical performances, comedy shows, and cultural festivals that celebrate both local and international talent. With its traditional architecture and modern facilities, Cultural Hall provides a unique blend of heritage and contemporary entertainment, making it a beloved destination for audiences seeking diverse cultural experiences and world-class performances.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/7882_upload6478910f8d680_1685623055-01685623062.jpeg",
        alt: "Cultural Hall Bahrain",
      },
    },
    ar: {
      id: "cultural-hall-bahrain",
      name: "قاعة الثقافة البحرين",
      location: "المنامة، البحرين",
      description:
        "قاعة الثقافة البحرين هي مركز ثقافي بارز يخدم كمركز للتعبير الفني والترفيه في المملكة. يستضيف المكان بانتظام حفلات موسيقية وعروضاً مسرحية وعروض كوميديا ومهرجانات ثقافية تحتفل بالمواهب المحلية والدولية. بتصميمه المعماري التقليدي ومرافقه الحديثة، توفر قاعة الثقافة مزيجاً فريداً من التراث والترفيه المعاصر، مما يجعلها وجهة محبوبة للجماهير التي تسعى لتجارب ثقافية متنوعة وعروض عالمية المستوى.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/7882_upload6478910f8d680_1685623055-01685623062.jpeg",
        alt: "قاعة الثقافة البحرين",
      },
    },
  },

  "qncc-al-mayassa-theatre-qatar": {
    en: {
      id: "qncc-al-mayassa-theatre-qatar",
      name: "QNCC Al Mayassa Theatre, Qatar",
      location: "Doha, Qatar",
      description:
        "The QNCC Al Mayassa Theatre is one of Qatar's most prestigious performing arts venues, located within the Qatar National Convention Centre. Named after Her Excellency Sheikha Al Mayassa bint Hamad bin Khalifa Al Thani, this state-of-the-art theatre offers world-class facilities and exceptional acoustics. It hosts a wide range of international performances including concerts, theatrical productions, comedy shows, and cultural events. The venue's modern design and cutting-edge technology provide an unparalleled experience for both artists and audiences, establishing it as a premier destination for entertainment in the Middle East.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/10340_upload673f9a5835024_1732221528-01732221541.jpeg",
        alt: "QNCC Al Mayassa Theatre Qatar",
      },
    },
    ar: {
      id: "qncc-al-mayassa-theatre-qatar",
      name: "مسرح الشيخة المياسة، قطر",
      location: "الدوحة، قطر",
      description:
        "مسرح الشيخة المياسة هو أحد أرقى أماكن الفنون الأدائية في قطر، يقع ضمن مركز قطر الوطني للمؤتمرات. سُمي تكريماً لصاحبة السمو الشيخة المياسة بنت حمد بن خليفة آل ثاني، يوفر هذا المسرح الحديث مرافق عالمية المستوى وأجهزة صوت استثنائية. يستضيف مجموعة واسعة من العروض الدولية بما في ذلك الحفلات الموسيقية والإنتاجات المسرحية وعروض الكوميديا والفعاليات الثقافية. تصميمه الحديث وتقنيته المتطورة يوفران تجربة لا مثيل لها للفنانين والجماهير على حد سواء، مما يجعله وجهة رائدة للترفيه في الشرق الأوسط.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/10340_upload673f9a5835024_1732221528-01732221541.jpeg",
        alt: "مسرح الشيخة المياسة قطر",
      },
    },
  },

  "katara-opera-house-qatar": {
    en: {
      id: "katara-opera-house-qatar",
      name: "Katara Opera House, Qatar",
      location: "Doha, Qatar",
      description:
        "The Katara Opera House is a magnificent cultural landmark located in the Katara Cultural Village, designed to resemble a traditional Qatari architectural style. This world-class venue hosts opera performances, concerts, ballet, and various cultural events, attracting renowned international artists and performers. With its stunning design, exceptional acoustics, and capacity to seat over 500 guests, the Opera House provides an intimate yet grand setting for entertainment. It stands as a symbol of Qatar's commitment to arts and culture, offering audiences unforgettable experiences in an architecturally stunning environment.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/10335_upload673f9f8a0adc0_1732222858-01732222870.jpeg",
        alt: "Katara Opera House Qatar",
      },
    },
    ar: {
      id: "katara-opera-house-qatar",
      name: "دار الأوبرا في كتارا، قطر",
      location: "الدوحة، قطر",
      description:
        "دار الأوبرا في كتارا هي معلم ثقافي رائع يقع في القرية الثقافية كتارا، مصممة لتشبه الطراز المعماري القطري التقليدي. يستضيف هذا المكان العالمي عروض الأوبرا والحفلات الموسيقية والباليه وفعاليات ثقافية متنوعة، مما يجذب فنانين وأداءً دوليين مشهورين. بتصميمه المذهل وأجهزة الصوت الاستثنائية وقدرته على استيعاب أكثر من 500 ضيف، توفر دار الأوبرا بيئة حميمة وراقية للترفيه. تقف كرمز لالتزام قطر بالفنون والثقافة، مما يوفر للجماهير تجارب لا تُنسى في بيئة معمارية مذهلة.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/10335_upload673f9f8a0adc0_1732222858-01732222870.jpeg",
        alt: "دار الأوبرا في كتارا قطر",
      },
    },
  },

  "jaber-al-ahmad-cultural-centre-kuwait": {
    en: {
      id: "jaber-al-ahmad-cultural-centre-kuwait",
      name: "Jaber Al Ahmad Cultural Centre, Kuwait",
      location: "Kuwait City, Kuwait",
      description:
        "The Jaber Al Ahmad Cultural Centre is one of Kuwait's premier cultural and entertainment venues, named after the late Amir of Kuwait. This modern facility hosts a diverse array of events including concerts, theatrical performances, comedy shows, and cultural festivals. With its spacious halls and state-of-the-art facilities, the center can accommodate large audiences while maintaining an intimate atmosphere. The venue has become a cornerstone of Kuwait's cultural scene, regularly featuring both local talent and international artists, making it a beloved destination for entertainment enthusiasts across the region.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/Jaber+Al+Ahmad+Cultural+Centre+-+Kuwait.jpeg",
        alt: "Jaber Al Ahmad Cultural Centre Kuwait",
      },
    },
    ar: {
      id: "jaber-al-ahmad-cultural-centre-kuwait",
      name: "مركز جابر الأحمد الثقافي، الكويت",
      location: "مدينة الكويت، الكويت",
      description:
        "مركز جابر الأحمد الثقافي هو أحد أرقى الأماكن الثقافية والترفيهية في الكويت، سُمي تكريماً للأمير الراحل جابر الأحمد. يستضيف هذا المرفق الحديث مجموعة متنوعة من الفعاليات بما في ذلك الحفلات الموسيقية والعروض المسرحية وعروض الكوميديا والمهرجانات الثقافية. بقاعاته الواسعة ومرافقه الحديثة، يمكن للمركز استيعاب جماهير كبيرة مع الحفاظ على أجواء حميمة. أصبح المكان حجر أساس في المشهد الثقافي الكويتي، حيث يقدم بانتظام مواهب محلية وفنانين دوليين، مما يجعله وجهة محبوبة لعشاق الترفيه في جميع أنحاء المنطقة.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/Jaber+Al+Ahmad+Cultural+Centre+-+Kuwait.jpeg",
        alt: "مركز جابر الأحمد الثقافي الكويت",
      },
    },
  },

  "dubai-opera-uae": {
    en: {
      id: "dubai-opera-uae",
      name: "Dubai Opera, UAE",
      location: "Dubai, UAE",
      description:
        "Dubai Opera is a world-class multi-format performing arts center located in the heart of Downtown Dubai. This architectural masterpiece can transform from a 2,000-seat theatre to a concert hall, flat floor, or traditional theatre, making it one of the most versatile venues in the region. It hosts a wide range of performances including opera, ballet, concerts, comedy shows, and theatrical productions. With its stunning design inspired by a traditional dhow sailing vessel and cutting-edge technology, Dubai Opera has established itself as a premier destination for world-class entertainment, attracting internationally renowned artists and providing audiences with unforgettable cultural experiences.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/promo/1_upload6597b3a7decdd_1704440743-0-en1704440759.png.webp",
        alt: "Dubai Opera UAE",
      },
    },
    ar: {
      id: "dubai-opera-uae",
      name: "دار أوبرا دبي، الإمارات",
      location: "دبي، الإمارات",
      description:
        "دار أوبرا دبي هي مركز فنون أدائية متعدد الأشكال عالمي المستوى يقع في قلب وسط مدينة دبي. يمكن لهذه التحفة المعمارية أن تتحول من مسرح يتسع لـ 2000 مقعد إلى قاعة حفلات أو أرضية مستوية أو مسرح تقليدي، مما يجعلها واحدة من أكثر الأماكن تنوعاً في المنطقة. تستضيف مجموعة واسعة من العروض بما في ذلك الأوبرا والباليه والحفلات الموسيقية وعروض الكوميديا والإنتاجات المسرحية. بتصميمها المذهل المستوحى من سفينة الداو التقليدية وتقنيتها المتطورة، أصبحت دار أوبرا دبي وجهة رائدة للترفيه العالمي، مما يجذب فنانين دوليين مشهورين ويوفر للجماهير تجارب ثقافية لا تُنسى.",
      image: {
        src: "https://cdn.platinumlist.net/upload/venue/promo/1_upload6597b3a7decdd_1704440743-0-en1704440759.png.webp",
        alt: "دار أوبرا دبي الإمارات",
      },
    },
  },

  "uvenue-qatar": {
    en: {
      id: "uvenue-qatar",
      name: "UVENUE, Qatar",
      location: "Doha, Qatar",
      description:
        "UVENUE is a modern entertainment venue in Qatar that has quickly become a popular destination for concerts, comedy shows, and live performances. The venue offers a contemporary atmosphere with excellent sound and lighting systems, creating an immersive experience for audiences. Known for its intimate setting and vibrant energy, UVENUE attracts both emerging and established artists, making it a dynamic hub for entertainment in Doha. The venue's modern design and commitment to showcasing diverse talent have made it a favorite among entertainment enthusiasts seeking cutting-edge performances in a stylish environment.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/uvenue-qatar.jpeg",
        alt: "UVENUE Qatar",
      },
    },
    ar: {
      id: "uvenue-qatar",
      name: "يو فينو، قطر",
      location: "الدوحة، قطر",
      description:
        "يو فينو هو مكان ترفيهي حديث في قطر أصبح بسرعة وجهة شائعة للحفلات الموسيقية وعروض الكوميديا والعروض الحية. يوفر المكان أجواء عصرية مع أنظمة صوت وإضاءة ممتازة، مما يخلق تجربة غامرة للجماهير. معروف بإعداداته الحميمة وطاقته النابضة بالحياة، يجذب يو فينو فنانين ناشئين ومشهورين على حد سواء، مما يجعله مركزاً ديناميكياً للترفيه في الدوحة. تصميمه الحديث والتزامه بإبراز المواهب المتنوعة جعلا منه مفضلاً بين عشاق الترفيه الذين يبحثون عن عروض متطورة في بيئة أنيقة.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/uvenue-qatar.jpeg",
        alt: "يو فينو قطر",
      },
    },
  },

  "princess-noura-auditorium-saudi-arabia": {
    en: {
      id: "princess-noura-auditorium-saudi-arabia",
      name: "Princess Noura Auditorium, Saudi Arabia",
      location: "Riyadh, Saudi Arabia",
      description:
        "The Princess Noura Auditorium is a prestigious cultural venue in Saudi Arabia, named in honor of Princess Noura bint Abdulrahman. This elegant auditorium serves as a premier destination for concerts, theatrical performances, comedy shows, and cultural events. With its sophisticated design and excellent acoustics, the venue provides an ideal setting for both local and international artists. The auditorium's commitment to promoting arts and culture has made it a significant landmark in Saudi Arabia's growing entertainment scene, offering audiences world-class performances in a refined and welcoming atmosphere.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/Princess+Noura+Auditorium+-+Saudi+Arabia.jpeg",
        alt: "Princess Noura Auditorium Saudi Arabia",
      },
    },
    ar: {
      id: "princess-noura-auditorium-saudi-arabia",
      name: "قاعة الأميرة نورة، السعودية",
      location: "الرياض، السعودية",
      description:
        "قاعة الأميرة نورة هي مكان ثقافي مرموق في السعودية، سُميت تكريماً للأميرة نورة بنت عبدالرحمن. تخدم هذه القاعة الأنيقة كوجهة رائدة للحفلات الموسيقية والعروض المسرحية وعروض الكوميديا والفعاليات الثقافية. بتصميمها الراقي وأجهزة الصوت الممتازة، يوفر المكان بيئة مثالية للفنانين المحليين والدوليين على حد سواء. التزام القاعة بتعزيز الفنون والثقافة جعلها معلماً مهماً في المشهد الترفيهي المتنامي في السعودية، مما يوفر للجماهير عروضاً عالمية المستوى في أجواء راقية ومرحبة.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/Princess+Noura+Auditorium+-+Saudi+Arabia.jpeg",
        alt: "قاعة الأميرة نورة السعودية",
      },
    },
  },

  "king-fahad-cultural-center-saudi-arabia": {
    en: {
      id: "king-fahad-cultural-center-saudi-arabia",
      name: "King Fahad Cultural Center, Saudi Arabia",
      location: "Riyadh, Saudi Arabia",
      description:
        "The King Fahad Cultural Center is one of Saudi Arabia's most prominent cultural institutions, dedicated to promoting arts and entertainment. This expansive venue hosts a wide variety of events including concerts, theatrical productions, comedy shows, exhibitions, and cultural festivals. With its modern facilities and versatile spaces, the center can accommodate events of various scales, from intimate performances to large-scale productions. The venue's commitment to cultural enrichment and its role in showcasing both local and international talent has established it as a cornerstone of Saudi Arabia's vibrant entertainment landscape, providing audiences with diverse and enriching cultural experiences.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/King+Fahad+Cultural+Center+-+Saudi+Arabia.jpeg",
        alt: "King Fahad Cultural Center Saudi Arabia",
      },
    },
    ar: {
      id: "king-fahad-cultural-center-saudi-arabia",
      name: "مركز الملك فهد الثقافي، السعودية",
      location: "الرياض، السعودية",
      description:
        "مركز الملك فهد الثقافي هو أحد أبرز المؤسسات الثقافية في السعودية، مكرس لتعزيز الفنون والترفيه. يستضيف هذا المكان الواسع مجموعة متنوعة من الفعاليات بما في ذلك الحفلات الموسيقية والإنتاجات المسرحية وعروض الكوميديا والمعارض والمهرجانات الثقافية. بمرافقه الحديثة ومساحاته المتعددة، يمكن للمركز استيعاب فعاليات بمقاييس مختلفة، من العروض الحميمة إلى الإنتاجات الكبيرة. التزام المكان بالإثراء الثقافي ودوره في إبراز المواهب المحلية والدولية جعله حجر أساس في المشهد الترفيهي النابض بالحياة في السعودية، مما يوفر للجماهير تجارب ثقافية متنوعة وغنية.",
      image: {
        src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/product-images/King+Fahad+Cultural+Center+-+Saudi+Arabia.jpeg",
        alt: "مركز الملك فهد الثقافي السعودية",
      },
    },
  },
} as const;
