import Link from "next/link";

const navLinks = [
  { label: "Personal", href: "/personal" },
  { label: "Business", href: "/business" },
  { label: "Rates", href: "/rates" },
  { label: "Security", href: "/security" },
];

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          SaharaPay
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/download"
          className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Download
        </Link>
      </div>
    </header>
  );
}