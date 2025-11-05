import Link from "next/link";

export function OpenSourceSection() {
  return (
    <section className="mt-24 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0f141f] via-[#0b1416] to-[#081012] p-10 shadow-glow lg:p-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">Open source</span>
          <h2 className="text-3xl font-semibold text-white">Open, transparent, community-driven.</h2>
          <p className="text-sm leading-relaxed text-white/70">
            All Tooliton projects are open source. Fork, contribute, or build your next project with us.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/10 px-3 py-1">GitHub ★ 1.2k+</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Contributors: 40+</span>
            <span className="rounded-full border border-white/10 px-3 py-1">MIT Licensed</span>
          </div>
        </div>
        <div className="section-container relative max-w-sm flex-1 bg-white/[0.04] p-6">
          <div className="section-accent-ring" aria-hidden />
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/80">Community</h3>
          <p className="mt-4 text-sm text-white/60">
            Join the Tooliton Labs GitHub organization to contribute new modules, report issues, or share what you&apos;re building. Every pull request is reviewed by maintainers who ship production-grade Java every day.
          </p>
          <Link
            href="https://github.com/tooliton"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2 text-xs font-semibold text-accent transition hover:bg-accent/20"
          >
            Contribution Guide ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
