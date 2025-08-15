import Link from "next/link";
import Image from "next/image";
import SearchNews from "./searchnews";

export default function Navbar() {
  return (
    <nav>
      <nav className="bg-black md:bg-white dark:bg-zinc-950 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left */}
            <div className="flex justify-center md:justify-start">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo-trenday.png"
                  alt="Trenday Logo"
                  width={170}
                  height={90}
                />
              </Link>
            </div>

            {/* Right */}
            <div className="flex flex-col w-full md:w-auto gap-2">
              <div className="w-full md:w-auto">
                <SearchNews />
              </div>

              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <Link
                  href="/news"
                  className="px-3 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900"
                >
                  News
                </Link>
                <Link
                  href="/category/world"
                  className="px-3 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900"
                >
                  World
                </Link>
                <Link
                  href="/category/food"
                  className="px-3 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900"
                >
                  Food
                </Link>
                <Link
                  href="/category/home"
                  className="px-3 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900"
                >
                  Lifestyle
                </Link>
                <Link
                  href="/politic"
                  className="px-3 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900"
                >
                  Politic
                </Link>
                <Link
                  href="/health"
                  className="px-3 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900"
                >
                  Health
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="container flex gap-2 mx-auto justify-between py-4">
                <h1 className="text-2xl font-bold">News</h1>
            <div className="flex gap-2">
                <Link href="/" className="px-4 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900">Home</Link>
                <Link href="/about" className="px-4 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900">About</Link>
                <Link href="/add-client" className="px-4 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900">Add Client</Link>
                <Link href="/add-server" className="px-4 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900">Add Server</Link>
            </div>
            </div> */}
    </nav>
  );
}
