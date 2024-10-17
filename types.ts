export interface Article {
  title: string;
  pubDate: string;
  description: string;
  image: string;
  link: string;
  source: number;
  category: number;
}

export interface SourceCategory {
  url: string;
  category_id: number;
  source_id: number;
}
