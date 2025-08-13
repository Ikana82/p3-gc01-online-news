export default function NewsCard() {
    return (
          <div className="h-auto p-4 rounded-lg border border-zinc-300 dark:border-zinc-600 flex flex-col justify-between">
          <div>
            <img src="https://placehold.co/600x400"
            alt="article image"
            className="w-full h-48 object-cover rounded-md"/>
            <h2 className="text-2xl font-semibold mt-3">Article Title</h2>
            <p className="text-sm text-gray-500">Article Subtitle</p>
          </div>
          <div>
            <a href="/detail/1">
            <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-md mt-3">Read More</button>
            </a>
          </div>
        </div>
    )
}