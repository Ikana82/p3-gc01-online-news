"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarSearch from "./navbar-search";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black md:bg-white dark:bg-zinc-950 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
        {/* Top 1 */}
        <div className="flex flex-row items-center justify-between w-full gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-trenday-black.png"
              alt="Trenday Logo"
              width={170}
              height={90}
              className="dark:hidden"
            />
            <Image
              src="/images/logo-trenday.png"
              alt="Trenday Logo"
              width={170}
              height={90}
              className="hidden dark:block"
            />
          </Link>
          <div className="w-auto">
            <NavbarSearch />
          </div>
        </div>

        {/* Top Menu */}
        <div className="w-full flex justify-between flex-wrap md:gap-2 py-2">
          <Link
            href="/politic"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/politic"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            Politic
          </Link>
          <Link
            href="/news/health"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/news/health"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            Health
          </Link>
          <Link
            href="/news/business"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/news/business"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            Business
          </Link>
          <Link
            href="/news/technology"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/news/technology"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            Technology
          </Link>
          <Link
            href="/news/fashion"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/news/fashion"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            Fashion
          </Link>
          <Link
            href="/category/world"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/category/world"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            World
          </Link>
          <Link
            href="/category/food"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/category/food"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            Food
          </Link>
          <Link
            href="/category/science"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/category/science"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            Science
          </Link>
          <Link
            href="/category/arts"
            className={`px-3 py-2 font-bold hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md ${
              pathname === "/category/arts"
                ? "border-b-2 border-white rounded-b-none"
                : ""
            }`}
          >
            Lifestyle
          </Link>
        </div>
      </div>

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
