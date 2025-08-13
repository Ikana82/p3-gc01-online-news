import NewsContainer from "@/components/news-container";
// import { News } from "@/types/type"; -- jika menggunakan type.ts

const fetchNews = async () => {
  const res = await fetch('http://localhost:3001/news');
  const news: News[] = await res.json();

  return news;
}

export default async function Home() {
const news = await fetchNews();

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-4xl font-semibold text-center">Daily New</h1>
      <NewsContainer news={news} />
    </div>
  )
}