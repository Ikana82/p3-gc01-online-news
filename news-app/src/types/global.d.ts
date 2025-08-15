interface News {
  id: string;
  title: string;
  description: string;
  poster: string;
  publishedAt: string;
  originalUrl: string;
  author: string;
  category: string;
}

type NewsForm = Pick<News, 'title' | 'description' | 'poster'>;

interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
}

interface Article {
  section: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  multimedia: Multimedia[];
}

interface Category {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  updated_date: string;
  published_date: string;
  multimedia: Multimedia[];
  url: string;
  byline: string;
}

interface Multimedianews {
  url: string;
  format: string;
  height: number;
  width: number;
}

interface News {
  title: string;
  abstract: string;
  byline: string;
  url: string;
  multimedia: Multimedianews[];
}

