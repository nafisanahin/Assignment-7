import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-700 px-6 py-5">
      <Link href="/" className="text-2xl font-bold text-green-500">
        বাজার দর
      </Link>

      <div className="flex gap-5 text-sm">
        <Link href="/" className="hover:text-green-400">
          Home
        </Link>
        <Link href="/login" className="hover:text-green-400">
          Login
        </Link>
        <Link href="/register" className="hover:text-green-400">
          Register
        </Link>
      </div>
    </nav>
  );
}
