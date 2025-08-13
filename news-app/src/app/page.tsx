import NewsContainer from "@/components/news-container";

export default function Home() {
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-4xl font-semibold text-center">Daily New</h1>
      <NewsContainer/>
    </div>
  )
}