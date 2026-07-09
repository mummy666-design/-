export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'Exhibition' | 'Brand Experience' | 'Commercial Space' | 'and';
  heroImage: string;
  summary: string; // 3 lines
  concept: string; // 5-10 lines
  designStory: string; // Detailed story
  gallery: string[]; // 10-20 images
  area: string; // 면적 (e.g., "350㎡")
  period: string; // 기간 (e.g., "3 months")
  location: string; // 위치
  scope: string; // 참여범위 (e.g., "Space Design, Brand Strategy, Construction")
  keywords: string[]; // Exhibition / Retail / Branding etc
  featured: boolean;
  videoUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  englishTitle: string;
  description: string;
}

export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  status: 'Pending' | 'Contacted' | 'Completed';
}
