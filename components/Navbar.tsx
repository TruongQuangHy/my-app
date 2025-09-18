import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex p-4 gap-4">
      <Link className="border-2 rounded-lg p-2" href="/">
        Home
      </Link>
      <Link className="border-2 rounded-lg p-2" href="/contact">
        Contact
      </Link>
      <Link className="border-2 rounded-lg p-2" href="/blog">
        Blog
      </Link>
    </nav>
  );
}
