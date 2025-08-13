import Link
 from "next/link"
export default function Navbar() {
    return (
        <nav>
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}