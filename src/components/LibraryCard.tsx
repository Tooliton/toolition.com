import Link from "next/link";
import type { Library } from "@/data/libraries";

export function LibraryCard({ library }: { library: Library }) {
  return (
    <div className="section-container relative flex flex-col justify-between gap-6 p-6 transition hover:translate-y-[-4px] hover:bg-white/[0.07]">
      <div className="section-accent-ring" aria-hidden />
      <div className="relative space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.3em] text-accent/70">
          <span>{library.status ?? "stable"}</span>
          <span className="flex gap-2 text-[10px] text-white/40">
            {library.tags?.map((tag) => (
              <span key={tag} className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase text-white/60">
                {tag}
              </span>
            ))}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white">{library.name}</h3>
        <p className="text-sm text-white/70">{library.description}</p>
      </div>
      <Link
        href={library.githubUrl}
        className="relative inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-accent hover:text-accent"
      >
        View on GitHub
        <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}
