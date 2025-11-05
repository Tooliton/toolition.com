const docsSnippet = [
  "---",
  "title: Warming caches with async loaders",
  "description: Cache loader patterns using Tooliton-Cache",
  "---",
  "",
  "## Async loader",
  "",
  "```java",
  "Cache<String, Session> cache = caches.withLoader(",
  "    sessionStore::hydrate,",
  "    Duration.ofMinutes(5)",
  ");",
  "```",
  "",
  "Get production-safe defaults with configurable fallbacks."
].join("\n");

export function DocsPreviewSection() {
  return (
    <section className="mt-24 space-y-6 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 shadow-glow backdrop-blur-xl lg:p-14">
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">Docs preview</span>
        <h2 className="text-3xl font-semibold text-white">Write once. Share everywhere.</h2>
        <p className="max-w-2xl text-sm text-white/60">
          Tooliton docs are built with MDX, so code and explanations stay in sync. Import snippets, render diagrams, and keep your engineering guides versioned alongside the code.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <article className="section-container relative space-y-4 p-6">
          <div className="section-accent-ring" aria-hidden />
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent/70">docs/tooliton-cache.mdx</p>
          <pre className="overflow-x-auto rounded-2xl bg-black/50 p-5 font-mono text-xs leading-relaxed text-emerald-200/80">
            <code>{docsSnippet}</code>
          </pre>
        </article>
        <div className="section-container relative space-y-4 p-6">
          <div className="section-accent-ring" aria-hidden />
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/80">MDX Modules</h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent/80" aria-hidden />
              Custom code fences with live previews.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent/80" aria-hidden />
              Import diagrams, ERDs, and architecture callouts.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent/80" aria-hidden />
              Version docs alongside releases.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
