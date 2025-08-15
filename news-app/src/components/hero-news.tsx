const getHeroImageUrl = (news: News) => {
  const media = news.multimedia;
  if (!media || media.length === 0) return "/placeholder-image.jpg";
  const superJumbo = media.find((m) => m.format === "superJumbo");
  return superJumbo ? superJumbo.url : media[0].url;
};

export default function HeroNews({ news }: { news: News }) {
  return (
    <div className="w-full h-[500px] relative rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${getHeroImageUrl(news)})` }}
      ></div>
      <div className="relative z-10 flex flex-col md:flex-row h-full gap-4">
        <div className="flex-2 flex items-end text-shadow-lg text-white text-3xl md:text-4xl p-6 font-bold">
          {news.title}
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4 p-6 bg-black/80 text-white">
          <p className="text-base">{news.byline}</p>
          <p className="text-lg line-clamp-6">{news.abstract}</p>
          <a href={news.url} className="text-blue-400 underline">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
