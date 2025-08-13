export default function NewsCard({item}: {item: News}) {
    return (
          <div className="h-auto p-4 rounded-lg border border-zinc-300 dark:border-zinc-600 flex flex-col justify-between">
          <div>
            <img src={item.poster}
            alt={item.title}
            className="w-full h-48 object-cover rounded-md"/>
            <h2 className="text-2xl font-semibold mt-3">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
          <div>
            <a href="/detail/1">
            <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-md mt-3">Read More</button>
            </a>
          </div>
        </div>
    )
}