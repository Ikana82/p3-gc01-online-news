import NewsContainer from "@/components/news-container";
// import { News } from "@/types/type"; -- jika menggunakan type.ts

const fetchNews = async () => {
  const res = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=S1n7RArUbF9iGy5eWptSvg0TbQp3r8uO",
    {
      cache: "force-cache",
    }
  );
  const news = await res.json();
  return news.results as Article[];
};

export default async function Home() {
  const news = await fetchNews();

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-4xl font-semibold text-center">Daily New</h1>
      <NewsContainer news={news} />
    </div>
  );
}
