import NewsCard from "./news-card";
// import { News } from "@/types/type"; -- jika menggunakan type.ts

export default function NewsContainer({ news }: { news: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-2">
      {news.map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </div>
  );
}
