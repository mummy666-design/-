import { Project, ProcessStep } from './types';

// Curated high-resolution Unsplash images for high-end feel
export const UNSPLASH_POOL = {
  luxuryShowroom: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  mercedesShowroom: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  lgDisplayPavilion: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  kccPavilion: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  shinsegaeAtrium: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  haagenDazsLounge: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
  
  details: [
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  ]
};

export const INITIAL_PROJECTS: Project[] = [
    {
    "id": "proj_1783586144738",
    "title": "Haagen-Dazs Stick Bar Offline Campaign",
    "client": "Haagendazs",
    "year": "2025",
    "category": "Brand Experience",
    "heroImage": "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585985/Untitled-1_0000_Layer_2_wc0ovp.jpg",
    "summary": "-",
    "concept": "-",
    "designStory": "-",
    "gallery": [
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585988/Untitled-1_0006_KakaoTalk_20250909_115908953_17_kfqm6f.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585986/Untitled-1_0003_KakaoTalk_20250909_115908953_10_crfram.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585985/Untitled-1_0001_KakaoTalk_20250909_115908953_22_urrqmj.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585986/Untitled-1_0002_KakaoTalk_20250909_115908953_16_nq2qkb.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585987/Untitled-1_0004_KakaoTalk_20250909_115908953_04_ab0ufv.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585987/Untitled-1_0005_KakaoTalk_20250909_115908953_01_ogdfht.jpg"
    ],
    "area": "250㎡",
    "period": "3 Months",
    "location": "Seoul, Korea",
    "scope": "Interior Design, Space Branding",
    "keywords": [
      "Branding"
    ],
    "featured": false,
    "videoUrl": "https://res.cloudinary.com/hvmnbjx1/video/upload/v1783586014/SaveInta.com_AQMVKqRoRvSW4altaMB5oIYiH0IhcPydBDXOaVpMRABRRWSBcaoIMg0pbVe4K72sGOwXEPe_XYbTw752Vsf-RhJlFgHvwzhjPdwWe3I_sxkmbv.mp4"
  },
  {
    "id": "proj_1783585205479",
    "title": "CES 2026 MS",
    "client": "LG Electronics",
    "year": "2026",
    "category": "Exhibition",
    "heroImage": "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585169/Untitled-1_0000_%EB%A9%94%EC%9D%B8%ED%8C%8C%EC%82%AC%EB%93%9C_copy_pnidev.jpg",
    "summary": "-",
    "concept": "-",
    "designStory": "-",
    "gallery": [
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585170/Untitled-1_0003_ss_5_copy_xspkqy.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585171/Untitled-1_0004_ss_4_copy_g1c0ei.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585170/Untitled-1_0002_ss_3_copy_xcmjjd.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783585169/Untitled-1_0001_xboom_copy_evyehy.jpg"
    ],
    "area": "250㎡",
    "period": "3 Months",
    "location": "Seoul, Korea",
    "scope": "Interior Design, Space Branding",
    "keywords": [
      "Branding"
    ],
    "featured": false
  },
  {
    "id": "proj_1783584844458",
    "title": "CES 2026 MS",
    "client": "LG Electronics",
    "year": "2026",
    "category": "Exhibition",
    "heroImage": "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783584702/ms1_0000_stage_copy_ttt6ay.jpg",
    "summary": "-\n",
    "concept": "-",
    "designStory": "-",
    "gallery": [
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783584703/ms1_0007_%EB%A9%94%EC%9D%B8%EC%B8%A1%EB%A9%B4_sxagp4.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783584702/ms1_0005_%EA%B0%A4%EB%9F%AC%EB%A6%AC%EB%B7%B0_jqstlb.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783584702/ms1_0002_KakaoTalk_20260108_033126588_08_copy_lmiauz.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783584703/ms1_0006_%EC%9E%85%EA%B5%AC_%EC%A2%8C%EC%B8%A1_qgmaio.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783584702/ms1_0004_stage_2_copy_crl5c6.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783584702/ms1_0001_life_copy_eh81d5.jpg"
    ],
    "area": "250㎡",
    "period": "3 Months",
    "location": "Seoul, Korea",
    "scope": "Interior Design, Space Branding",
    "keywords": [
      "Branding"
    ],
    "featured": false
  },
  {
    "id": "kcc",
    "title": "글로벌 6K for Water",
    "client": "worldvision",
    "year": "2023",
    "category": "Brand Experience",
    "heroImage": "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783666318/Untitled-1_0004_KakaoTalk_20230911_115810348_22_n9tpqk.jpg",
    "summary": "-",
    "concept": "-",
    "designStory": "-",
    "gallery": [
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783666319/Untitled-1_0003_KakaoTalk_20230911_115810348_01_g4b2eu.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783666318/Untitled-1_0002_KakaoTalk_20230911_115810348_03_mw8u5j.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783666317/Untitled-1_0001_KakaoTalk_20230911_115810348_09_zsjs3m.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783666318/Untitled-1_0000_KakaoTalk_20230911_115810348_14_mijwic.jpg"
    ],
    "area": "400㎡",
    "period": "2025.07 - 2025.12",
    "location": "Ilsan, South Korea (KINTEX)",
    "scope": "Concept Curation, Exhibition Identity, Spatial Architecture & Design",
    "keywords": [
      "Brand Experience",
      "Exhibition",
      "Material Art"
    ],
    "featured": false,
    "videoUrl": ""
  },
  {
    "id": "shinsegae-property",
    "title": "CES 2025 LG Display",
    "client": "LG Display",
    "year": "2024",
    "category": "Exhibition",
    "heroImage": "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783667242/Untitled-1_0000_KakaoTalk_20240117_161836325_07_shk2g5.jpg",
    "summary": "-",
    "concept": "-",
    "designStory": "-",
    "gallery": [
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783667242/Untitled-1_0001_Layer_2_a3upuo.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783667242/Untitled-1_0002_Layer_1_yig6bi.jpg"
    ],
    "area": "1,200㎡",
    "period": "2025.04 - 2025.11",
    "location": "Suwon, South Korea (Starfield)",
    "scope": "Space Master Planning, Furniture Styling, Interior Design & Supervision",
    "keywords": [
      "Commercial Space",
      "Public Atrium",
      "Lounge"
    ],
    "featured": false,
    "videoUrl": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/K71rOi-Oxq8?si=b8DkNm6aRirHTyu7\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
  },
  {
    "id": "the-whoo",
    "title": "ECCMID",
    "client": "Seegene",
    "year": "2022",
    "category": "Exhibition",
    "heroImage": "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515889/eccmid_0000_KakaoTalk_20220511_101611107_03_irknmc.jpg",
    "summary": "-",
    "concept": "-",
    "designStory": "Conceptual architectural development story.",
    "gallery": [
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515889/eccmid_0003_IMG_7754_ct3b1z.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515910/eccmid_0005_IMG_7697_oxtdm2.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515889/eccmid_0004_IMG_7749_idep5n.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515889/eccmid_0001_IMG_7762_feea0z.jpg"
    ],
    "area": "320㎡",
    "period": "2025.10 - 2026.02",
    "location": "Seoul, South Korea (Cheongdam-dong)",
    "scope": "Brand Strategy, Space Identity, Interior Design & Construction",
    "keywords": [],
    "featured": true
  },
  {
    "id": "mercedes-benz",
    "title": "BONVOY MARKET",
    "client": "MARRIOTT",
    "year": "2022",
    "category": "Brand Experience",
    "heroImage": "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515976/bo_0003_KakaoTalk_20220315_172153237_28_spgjt2.jpg",
    "summary": "-",
    "concept": "-",
    "designStory": "-",
    "gallery": [
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515974/bo_0000_KakaoTalk_20220315_172153237_18_khlpzx.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515974/bo_0001_KakaoTalk_20220315_172153237_07_cnuvxc.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783515975/bo_0002_KakaoTalk_20220315_172153237_01_e6iy4q.jpg"
    ],
    "area": "480㎡",
    "period": "2025.08 - 2026.01",
    "location": "Busan, South Korea (Haeundae)",
    "scope": "Interior Design, Creative Direction, Styling & Construction",
    "keywords": [
      "Retail",
      "Commercial Space",
      "High-End"
    ],
    "featured": true
  },
  {
    "id": "lg-display",
    "title": "AACC",
    "client": "Seegene",
    "year": "2022",
    "category": "Exhibition",
    "heroImage": "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783516108/Untitled-1_0000_KakaoTalk_20220801_140932218_17_prfq2p.jpg",
    "summary": "-",
    "concept": "-",
    "designStory": "-",
    "gallery": [
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783516106/Untitled-1_0001_KakaoTalk_20220801_140932218_05_lsgthf.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783516105/Untitled-1_0002_KakaoTalk_20220801_140747483_22_icn6wb.jpg",
      "https://res.cloudinary.com/hvmnbjx1/image/upload/v1783516107/Untitled-1_0003_Layer_1_qay9ey.jpg"
    ],
    "area": "600㎡",
    "period": "2025.11 - 2026.01",
    "location": "CES Pavilion, Las Vegas",
    "scope": "Exhibition Design, Media Planning, Spatial Strategy & Fabrication",
    "keywords": [
      "Exhibition",
      "Media Art",
      "Branding"
    ],
    "featured": true
  },
  {
    "id": "haagen-dazs",
    "title": "Häagen-Dazs Atelier Lounge",
    "client": "Häagen-Dazs Korea",
    "year": "2026",
    "category": "Brand Experience",
    "heroImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "summary": "하겐다즈의 고품격 리치 플레이버를 고딕 양식의 깊이 있는 예술적 차원으로 번역했습니다.\n벨벳 크림슨 컬러 및 묵직한 다크 초콜릿 빛 천연 대리석의 농밀한 밀도감.\n프리미엄 미식 및 최상의 예술적 조각품이 결합된 하이엔드 다이닝 플래그십.",
    "concept": "미각적 경험의 깊이를 시각적 밀도로 환원하는 작업이었습니다. 시그니처 딥 크림슨 Velvet 패브릭을 벽 전면에 수작업으로 마감하여 소리의 흐름을 차분히 제어했고, 조명을 받아 부드럽게 반짝이는 천연 황동 몰딩을 1mm 단위로 세밀하게 돌출시켜 공간 자체에서 농밀한 초콜릿 및 바닐라 풍미가 뿜어져 나오는 듯한 기품을 연출했습니다.",
    "designStory": "도심 속에서 오롯이 디저트 미식에만 집중할 수 있는 완벽한 아지트를 설계하고자 했습니다. 입구에서 메인 홀로 들어서는 좁고 굴절된 어두운 브릿지 복도는 외부 세계의 시끄러움을 차분히 가라앉히고, 복도가 끝나는 순간 압도적인 미학적 테이블 및 하이라이트 천장 장식물이 정서적 하이라이트를 맞이하도록 의도했습니다.",
    "gallery": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    "area": "260㎡",
    "period": "2025.06 - 2025.10",
    "location": "Seoul, South Korea (Hannandong)",
    "scope": "Brand Concept Translation, Art Direction, Furniture Customization & Build",
    "keywords": [
      "Brand Experience",
      "Retail",
      "Gourmet Lounge"
    ],
    "featured": false
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: '리서치',
    englishTitle: 'Research',
    description: '브랜드가 지닌 고유의 철학, 고객의 숨겨진 니즈, 타겟 심리 및 맥락을 깊이 분석하고 정의하여 공간의 기초 기저를 세웁니다.'
  },
  {
    step: '02',
    title: '컨셉 수립',
    englishTitle: 'Concept Development',
    description: '공간으로 번역할 브랜드의 뼈대 카피와 경험 테마를 도출합니다. 1mm 오차 없는 고유한 영감과 감각적 무드를 설계합니다.'
  },
  {
    step: '03',
    title: '디자인 설계',
    englishTitle: 'Spatial Design',
    description: '구체적인 3D 렌더링, 소재 보드 가공, 수치 도면화 작업을 통해 보이지 않는 감각을 유형의 도면과 스케일로 시각화합니다.'
  },
  {
    step: '04',
    title: '상세 제작',
    englishTitle: 'Detail Production',
    description: '경험을 완성하는 맞춤 집기, 조형 몰딩, 디테일 연출 라이팅 등을 고정밀 팩토리 가공을 통해 1mm 단차 없이 완벽 제작합니다.'
  },
  {
    step: '05',
    title: '시공 및 제어',
    englishTitle: 'Rigorous Construction',
    description: '현장 감리와 정밀 시공 엔지니어링을 통해 도면의 심미성과 자재의 질감을 완벽하게 현장에 구현하고 시공 품질을 밀착 제어합니다.'
  },
  {
    step: '06',
    title: '완성 및 아카이브',
    englishTitle: 'Completion & Book',
    description: '최상의 완성도를 확보하고 완공 촬영을 거쳐 브랜드 경험의 성과를 기록합니다. 하나의 완전한 소장가치 높은 아카이브 북을 완성합니다.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'LG Group', logoText: 'LG' },
  { name: 'Mercedes-Benz', logoText: 'MERCEDES-BENZ' },
  { name: 'Samsung Electronics', logoText: 'SAMSUNG' },
  { name: 'KCC Corporation', logoText: 'KCC' },
  { name: 'Shinsegae Property', logoText: 'SHINSEGAE' },
  { name: 'Häagen-Dazs', logoText: 'HÄAGEN-DAZS' },
  { name: 'Hyundai Motor', logoText: 'HYUNDAI' },
  { name: 'Amorepacific', logoText: 'AMOREPACIFIC' }
];