"use client";

import { useState } from "react";

export default function SearchNews() {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=S1n7RArUbF9iGy5eWptSvg0TbQp3r8uO`,
        {
          cache: "force-cache",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch articles");

      const article = await res.json();
      console.log(article.response.docs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="w-full h-10 p-6 bg-zinc-700 rounded-lg flex flex-col justify-center gap-3"
      >
        <div className="flex justify-start items-center gap-5 w-full">
          <input
            type="text"
            placeholder="Search for topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-neutral-400 text-base font-normal outline-none w-full placeholder:text-neutral-400"
          />

          <button
            type="submit"
            className="text-white px-4 py-1 rounded-lg hover:bg-zinc-600"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
