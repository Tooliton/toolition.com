import Link from "next/link";

export function CTASection() {
  return (
    <section className="mt-24 rounded-[2.5rem] border border-accent/20 bg-accent/5 p-10 shadow-glow backdrop-blur-xl lg:p-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Ready to ship faster?</h2>
          <p className="max-w-xl text-sm text-white/70">
            Join Tooliton Labs on GitHub and get involved in shaping the next wave of production-ready Java tooling.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <Link
            href="https://github.com/tooliton"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent/90"
          >
            Join Tooliton Labs on GitHub →
          </Link>
          <form className="flex w-full max-w-sm items-center overflow-hidden rounded-full border border-white/10 bg-black/40 pl-4">
            <input
              type="email"
              placeholder="Email for updates"
              className="w-full bg-transparent py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              disabled
            />
            <button type="button" className="h-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Soon
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
