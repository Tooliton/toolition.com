import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 pt-10 text-xs text-white/50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Tooliton Labs. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4 text-white/60">
          <Link href="https://github.com/tooliton" className="hover:text-accent">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com" className="hover:text-accent">
            LinkedIn
          </Link>
          <Link href="mailto:hello@tooliton.com" className="hover:text-accent">
            Email
          </Link>
          <Link href="https://github.com/tooliton/tooliton/blob/main/LICENSE" className="hover:text-accent">
            License
          </Link>
        </nav>
      </div>
    </footer>
  );
}
