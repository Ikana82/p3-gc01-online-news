import NewsContent from "@/components/news-content";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  caption: string;
}

export interface Article {
  section: string;
  title: string;
  abstract: string;
  byline: string;
  url: string;
  multimedia: Multimedia[];
  published_date: string;
}

const fetchCategoryNews = async (slug: string): Promise<Article[]> => {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${slug}.json?api-key=S1n7RArUbF9iGy5eWptSvg0TbQp3r8uO`,
    { cache: "force-cache" }
  );

  if (!res.ok) throw new Error(`Failed to fetch news: ${slug}`);

  const data = await res.json();
  return data.results ?? [];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articles = await fetchCategoryNews(params.slug);
  const first = articles[0];

  return {
    title: first?.title ?? "News",
    description: first?.abstract ?? "Latest news",
    openGraph: {
      title: first?.title ?? "News",
      description: first?.abstract ?? "Latest news",
    },
  };
}

export default async function NewsPage({ params }: Props) {
  const news = await fetchCategoryNews(params.slug);

  if (!news || news.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>No news available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <NewsContent news={news} />
    </div>
  );
}
