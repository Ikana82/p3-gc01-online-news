import NewsCard from "@/components/news-card";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  try {
    const res = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${slug}.json?api-key=S1n7RArUbF9iGy5eWptSvg0TbQp3r8uO`,
      { cache: "force-cache" }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch category: ${slug}`);
    }

    const data = await res.json();
    const articles = (data.results ?? []) as Category[];

    return (
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold capitalize">{slug}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {articles.map((item) => (
            <NewsCard key={item.url} item={item} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold capitalize">{slug}</h1>
        <p className="mt-4 text-red-500">Terjadi kesalahan saat memuat data.</p>
      </div>
    );
  }
}
