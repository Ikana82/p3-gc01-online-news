import { News } from "@/types/type";
import Link from "next/link";

const getCardImageUrl = (news: News) => {
  return news.poster || "/placeholder-image.jpg";
};

const fetchNews = async (): Promise<News[]> => {
  const res = await fetch("http://localhost:3001/news", { cache: "no-store" });
  const news: News[] = await res.json();
  return news;
};

export default async function About() {
  const news = await fetchNews();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-end mb-6">
        <Link href="/add-client">
          <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            + Add Moment
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <a
            key={item.id}
            href={`/detail/${item.id}`}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div
              className="h-60 rounded-t-lg bg-gray-300 bg-cover bg-center"
              style={{ backgroundImage: `url(${getCardImageUrl(item)})` }}
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
