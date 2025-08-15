import NewsContent from "@/components/news-content";

const fetchNews = async (): Promise<News[]> => {
  const res = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=S1n7RArUbF9iGy5eWptSvg0TbQp3r8uO",
    { cache: "force-cache" }
  );
  const data = await res.json();
  return data.results as News[];
};

export default async function NewsPage() {
  let news: News[] = [];

  try {
    news = await fetchNews();
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500"></div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center mb-8">Health News</h1>
      <NewsContent news={news} />
    </div>
  );
}
