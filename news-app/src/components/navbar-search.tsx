"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavbarSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search?q=${encodeURIComponent(search)}`);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="w-full p-3 border border-gray-500 dark:border-none dark:bg-zinc-800 rounded-lg flex items-center gap-3"
      >
        <input
          type="text"
          placeholder="Search for topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-neutral-400 text-base font-normal outline-none w-full placeholder:text-neutral-400"
          autoComplete="off"
        />
        <button
          type="submit"
          className="text-gray-500 dark:text-white px-3 py-1 rounded-lg hover:bg-zinc-700 hover:text-white"
        >
          Search
        </button>
      </form>
    </section>
  );
}
