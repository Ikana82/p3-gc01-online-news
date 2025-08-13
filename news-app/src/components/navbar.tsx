import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className="container flex gap-2 mx-auto justify-between py-4">
                <h1 className="text-2xl font-bold">News</h1>
            <div className="flex gap-2">
                <Link href="/" className="px-4 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900">Home</Link>
                <Link href="/about" className="px-4 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900">About</Link>
                <Link href="/add-client" className="px-4 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900">Add Client</Link>
                <Link href="/add-server" className="px-4 py-2 rounded-md font-bold hover:bg-gray-100 dark:hover:bg-zinc-900">Add Server</Link>
            </div>
            </div>
        </nav>
    )
}