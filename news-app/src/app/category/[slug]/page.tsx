import NewsCategoryContent from "@/components/news-category";
import { Metadata } from "next";

async function fetchCategoryNews(slug: string) {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${slug}.json?api-key=S1n7RArUbF9iGy5eWptSvg0TbQp3r8uO`,
    { cache: "force-cache" }
  );

  if (!res.ok) throw new Error(`Failed to fetch category: ${slug}`);
  const data = await res.json();
  return data.results ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const articles = await fetchCategoryNews(params.slug);
  const post = articles[0];

  return {
    title: post?.title ?? "News",
    description: post?.abstract ?? "Latest news",
    openGraph: {
      title: post?.title ?? "News",
      description: post?.abstract ?? "Latest news",
      type: "article",
      section: post?.section,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const articles = await fetchCategoryNews(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <NewsCategoryContent news={articles} />
    </div>
  );
}
