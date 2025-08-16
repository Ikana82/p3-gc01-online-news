import NewsContent from "@/components/news-content";
import Image from "next/image";
import { Metadata } from "next";
interface Props {
  params: Promise<{ slug: string }>;
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
    `https://api.nytimes.com/svc/topstories/v2/${slug}.json?api-key=API_KEY`,
    { next: { revalidate: 2 } } // ISR cache 2 detik
  );

  if (!res.ok) throw new Error(`Failed to fetch news: ${slug}`);

  const data = await res.json();
  return data.results ?? [];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articles = await fetchCategoryNews(slug);
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

interface NewsContentProps {
  news: Article[];
}

function NewsContentWithImage({ news }: NewsContentProps) {
  return (
    <div className="space-y-6">
      {news.map((article, idx) => {
        const image =
          article.multimedia?.find((m) => m.format === "superJumbo") ||
          article.multimedia?.[0];

        return (
          <div key={idx} className="border p-4 rounded shadow-sm">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg hover:underline"
            >
              {article.title}
            </a>
            <p className="mt-2">{article.abstract}</p>
            {image && (
              <div className="mt-2 relative w-full h-64 sm:h-80 md:h-96">
                <Image
                  src={image.url}
                  alt={article.title}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default async function NewsPage({ params }: Props) {
  const { slug } = await params;
  const news = await fetchCategoryNews(slug);

  if (!news || news.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>No news available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <NewsContentWithImage news={news} />
    </div>
  );
}
