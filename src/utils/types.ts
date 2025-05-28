// News API Types
export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export interface NewsFilterParams {
  category?: string;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  pageSize?: number;
  page?: number;
  q?: string;
}

// Service Types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

// Client Types
export interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
  description: string;
}

// Announcement Types
export interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  image?: string;
}