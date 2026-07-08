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
    id: 'the-whoo',
    title: 'THE WHOO Boutique',
    client: 'LG Household & Health Care',
    year: '2026',
    category: 'Brand Experience',
    heroImage: UNSPLASH_POOL.luxuryShowroom,
    summary: '왕후의 고결한 궁중 유산과 현대 미술의 조화로운 융합을 탐구합니다.\n공간 곳곳에 투영된 우아한 금빛 스크린과 정교한 빛의 대비.\n브랜드 고유의 고결하고 현대적인 헤리티지를 오감으로 체험하는 시그니처 부티크입니다.',
    concept: '왕후의 신비로운 공간 철학에서 영감을 받았습니다. 어둠 속에서 조용히 빛나는 궁중의 미학을 극대화하기 위해 다크 톤의 천연 대리석과 황동 골드 스크린을 교차 적용하였습니다.\n가장 깊은 안쪽의 프라이빗 룸은 비단과 옻칠 마감을 활용해 전통과 현대가 완전히 하나가 되는 신비로운 브랜드 경험을 완성했습니다.',
    designStory: '우리는 "한국적인 우아함이란 무엇인가"라는 질문에서 시작했습니다. 복잡한 한옥 문양의 기하학적 비례를 현대적인 1mm 두께의 금속 그리드로 재가공하였고, 매입형 선형 간접 조명을 통해 공간 전체가 은은한 달빛을 머금은 듯한 신비로운 분위기를 발산하도록 디자인했습니다.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    area: '320㎡',
    period: '2025.10 - 2026.02',
    location: 'Seoul, South Korea (Cheongdam-dong)',
    scope: 'Brand Strategy, Space Identity, Interior Design & Construction',
    keywords: ['Branding', 'Retail', 'Brand Experience'],
    featured: true
  },
  {
    id: 'mercedes-benz',
    title: 'Mercedes-Benz Brand Lounge',
    client: 'Mercedes-Benz Korea',
    year: '2026',
    category: 'Commercial Space',
    heroImage: UNSPLASH_POOL.mercedesShowroom,
    summary: '럭셔리 모빌리티의 미래적 디테일과 하이 테크놀로지를 아우르는 프리미엄 전시 공간입니다.\n날렵한 직선 조명과 어두운 텍스처 가죽, 세련된 무광 알루미늄의 교차점.\n고객에게 주행 그 이상의 감동적인 정서적 안식처를 선사합니다.',
    concept: '미래지향적인 주행 영감을 물리적인 형태의 공간으로 번역했습니다. 어두운 무광의 금속 마감재와 인더스트리얼 콘크리트 질감을 정교하게 정돈하여 신뢰감 넘치는 독일 정밀 공학의 정신을 구현했습니다. 공간 중앙의 키네틱 라이팅 오브제는 메르세데스-벤츠만의 역동성을 상징적으로 대변합니다.',
    designStory: '메르세데스-벤츠의 세련된 실루엣에서 뿜어져 나오는 유기적인 아름다움을 모티브로 삼았습니다. 천장과 바닥의 대칭적인 직선형 LED 연출은 차량의 동선을 시각화하는 것과 동시에 하이엔드 전시장으로서의 진중함을 놓치지 않도록 전체 톤을 정돈하였습니다.',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    area: '480㎡',
    period: '2025.08 - 2026.01',
    location: 'Busan, South Korea (Haeundae)',
    scope: 'Interior Design, Creative Direction, Styling & Construction',
    keywords: ['Retail', 'Commercial Space', 'High-End'],
    featured: true
  },
  {
    id: 'lg-display',
    title: 'LG Display Transparent Pavilion',
    client: 'LG Display',
    year: '2026',
    category: 'Exhibition',
    heroImage: UNSPLASH_POOL.lgDisplayPavilion,
    summary: '정지해 있는 공간에 디지털 미디어의 생명력을 투과하는 실험적 미디어 아트 파빌리온입니다.\n보이지 않는 기술을 공간의 기하학적 구도를 통해 유형의 감동으로 이끌어냅니다.\n관람객의 호흡에 반응하는 맞춤형 인터랙티브 가벽 레이아웃 설계.',
    concept: '미래 디스플레이인 "투명 OLED"의 궁극적인 존재 가치를 일상 공간과의 융합으로 설명하고자 했습니다. 미니멀한 알루미늄 슬랫과 초저반사 유리벽 사이에 디스플레이를 내장시켜 테크놀로지가 꺼졌을 때는 완전한 여백의 공간이 되고, 켜졌을 때는 마법 같은 세계가 열리는 이중성을 구축했습니다.',
    designStory: '화려함만을 내세우는 기존의 IT 전시에서 완전히 탈피했습니다. 1mm 오차도 허용하지 않는 수평/수직의 철골 정렬과 간결한 백색 노출 콘크리트를 대치시켜 시각적 노이즈를 극도로 배제했습니다. 빛과 디스플레이 영상만이 주인공이 되는 엄숙한 갤러리 구조를 완성해 큰 찬사를 받았습니다.',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    area: '600㎡',
    period: '2025.11 - 2026.01',
    location: 'CES Pavilion, Las Vegas',
    scope: 'Exhibition Design, Media Planning, Spatial Strategy & Fabrication',
    keywords: ['Exhibition', 'Media Art', 'Branding'],
    featured: true
  },
  {
    id: 'kcc',
    title: 'KCC Materials Pavilion',
    client: 'KCC Corporation',
    year: '2026',
    category: 'Brand Experience',
    heroImage: UNSPLASH_POOL.kccPavilion,
    summary: '친환경 건축자재가 가진 날것 그대로의 물성과 기하학적 중첩을 경험하는 파빌리온입니다.\n자연에서 추출한 광물과 원료가 아름다운 공간적 예술로 승화하는 순간.\n소재의 무게감과 촉각적 레이어링을 극대화한 독창적인 동선 구성.',
    concept: '보통 감추어지는 천장 단열재, 석고 보드, 유리 원자재 등 KCC의 핵심 원자재들을 전면으로 시각화했습니다. 흙, 돌, 유리가 지닌 본질적인 힘을 드러내어, 화려한 가식 대신 굳건한 신뢰감과 영속성을 표현하고자 공간의 모든 벽을 기하학적 석재 슬래브와 가공되지 않은 콘크리트로 채웠습니다.',
    designStory: '우리는 자재 창고의 거친 레이아웃에서 조각적인 아름다움을 포착해 냈습니다. 불규칙하게 배치된 건축용 단열재 단면들이 자연광과 만났을 때 생기는 따뜻하고 원초적인 패턴을 찾아내어, 관람객이 마치 거대한 현대 조각품 속을 걷는 듯한 차분하고 깊이 있는 명상적 동선을 완성했습니다.',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    area: '400㎡',
    period: '2025.07 - 2025.12',
    location: 'Ilsan, South Korea (KINTEX)',
    scope: 'Concept Curation, Exhibition Identity, Spatial Architecture & Design',
    keywords: ['Brand Experience', 'Exhibition', 'Material Art'],
    featured: false
  },
  {
    id: 'shinsegae-property',
    title: 'Shinsegae Library Lounge',
    client: 'Shinsegae Property',
    year: '2026',
    category: 'Commercial Space',
    heroImage: UNSPLASH_POOL.shinsegaeAtrium,
    summary: '도심 속 바쁜 일상에서 탈피해 고풍스러운 지성과 감각을 환기하는 공공 라운지입니다.\n압도적인 목조 서가 벽면과 격자형 유리 천장 아래 가득 퍼지는 빛의 굴절.\n자연 친화적 플랜테리어와 정제된 가구가 조화를 이루는 커뮤니티 거점.',
    concept: '도시민을 위한 "지적이고 평화로운 숲"을 정의했습니다. 8미터 높이에 달하는 천연 목조 월넛 기둥과 따뜻한 베이지 패브릭 소재가 거대한 스케일의 부담감을 지워내고 정서적인 편안함을 줍니다. 천장의 격자창을 통해 시간마다 다른 각도로 비쳐 들어오는 햇살은 공간의 생동감을 높여줍니다.',
    designStory: '공공 상업 공간이면서도 개인의 고독과 몰입을 동시에 지켜주는 레이아웃 구조가 핵심이었습니다. 가벽을 세우지 않는 대신, 높은 모듈 서가들을 부드러운 곡선 형태로 배치하여 자연스럽게 개인의 아늑한 서재 같은 독립적인 공간들을 레이어 형태로 포개어 놓았습니다.',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    area: '1,200㎡',
    period: '2025.04 - 2025.11',
    location: 'Suwon, South Korea (Starfield)',
    scope: 'Space Master Planning, Furniture Styling, Interior Design & Supervision',
    keywords: ['Commercial Space', 'Public Atrium', 'Lounge'],
    featured: false
  },
  {
    id: 'haagen-dazs',
    title: 'Häagen-Dazs Atelier Lounge',
    client: 'Häagen-Dazs Korea',
    year: '2026',
    category: 'Brand Experience',
    heroImage: UNSPLASH_POOL.haagenDazsLounge,
    summary: '하겐다즈의 고품격 리치 플레이버를 고딕 양식의 깊이 있는 예술적 차원으로 번역했습니다.\n벨벳 크림슨 컬러와 묵직한 다크 초콜릿 빛 천연 대리석의 농밀한 밀도감.\n프리미엄 미식과 최상의 예술적 조각품이 결합된 하이엔드 다이닝 플래그십.',
    concept: '미각적 경험의 깊이를 시각적 밀도로 환원하는 작업이었습니다. 시그니처 딥 크림슨 벨벳 패브릭을 벽 전면에 수작업으로 마감하여 소리의 흐름을 차분히 제어했고, 조명을 받아 부드럽게 반짝이는 천연 황동 몰딩을 1mm 단위로 세밀하게 돌출시켜 공간 자체에서 농밀한 초콜릿과 바닐라 풍미가 뿜어져 나오는 듯한 기품을 연출했습니다.',
    designStory: '도심 속에서 오롯이 디저트 미식에만 집중할 수 있는 완벽한 아지트를 설계하고자 했습니다. 입구에서 메인 홀로 들어서는 좁고 굴절된 어두운 브릿지 복도는 외부 세계의 시끄러움을 차분히 가라앉히고, 복도가 끝나는 순간 압도적인 미학적 테이블과 하이라이트 천장 장식물이 정서적 하이라이트를 맞이하도록 의도했습니다.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    area: '260㎡',
    period: '2025.06 - 2025.10',
    location: 'Seoul, South Korea (Hannandong)',
    scope: 'Brand Concept Translation, Art Direction, Furniture Customization & Build',
    keywords: ['Brand Experience', 'Retail', 'Gourmet Lounge'],
    featured: false
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
