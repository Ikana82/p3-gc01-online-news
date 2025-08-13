import NewsCard from "./news-card";

export default function NewsContainer() {
    return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-2">
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </div>
    )
}