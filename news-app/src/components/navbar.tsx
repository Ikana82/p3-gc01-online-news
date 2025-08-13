import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className="flex gap-4 justify-center">
                <Link href="/" className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md mt-3">Home</Link>
                <Link href="/about" className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md mt-3">About</Link>
                <Link href="/category/sport" className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md mt-3">Sport</Link>
                <Link href="/category/tech" className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md mt-3">Tech</Link>
            </div>
        </nav>
    )
}