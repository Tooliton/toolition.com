import Link from "next/link";

const codeLines = [
  "// Tooliton Core API",
  "final Cache cache = CacheBuilder.newBuilder()",
  "    .withMetrics(Micrometer.registry())",
  "    .withSerializer(JsonSerializer.of(ObjectMapperFactory.create()))",
  "    .build();",
  "",
  "cache.put(\"session\", Session.of(userId));",
  "cache.get(\"session\").ifPresent(Session::hydrate);"
];

export function HeroSection() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] p-10 shadow-glow backdrop-blur-2xl lg:p-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,191,166,0.2)_0%,_transparent_60%)]" />
      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">
            Open source Java libraries
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build better backends with Tooliton
          </h1>
          <p className="text-lg text-white/70">
            A growing suite of modern Java libraries — crafted for developers who care about clean code.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#libraries"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent/90"
            >
              Explore Libraries
            </Link>
            <Link
              href="https://github.com/tooliton"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              View on GitHub
            </Link>
          </div>
        </div>
        <div className="relative w-full lg:w-auto">
          <div className="code-surface relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-6 shadow-lg shadow-black/30">
            <div className="absolute inset-x-6 top-6 h-6 rounded-full bg-white/5" />
            <div className="relative mt-10 space-y-2 font-mono text-xs leading-relaxed text-emerald-200/90">
              {codeLines.map((line, index) => (
                <span
                  key={`${line}-${index}`}
                  className={`code-line ${index % 2 === 0 ? "text-emerald-100" : "text-emerald-200/80"}`}
                  style={{ animation: `fade-in-up 0.6s ease-out forwards`, animationDelay: `${0.05 * index}s` }}
                >
                  {line || "\u00A0"}
                </span>
              ))}
            </div>
            <div className="absolute -inset-x-10 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden />
          </div>
          <div className="absolute -right-16 top-0 hidden h-32 w-32 rounded-full bg-accent/20 blur-3xl lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
