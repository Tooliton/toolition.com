export function PhilosophySection() {
  return (
    <section className="mt-24 grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 shadow-glow backdrop-blur-xl lg:grid-cols-2 lg:p-14">
      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">Philosophy</span>
        <h2 className="text-3xl font-semibold text-white">Code with clarity.</h2>
        <p className="text-sm leading-relaxed text-white/70">
          Tooliton was created by developers for developers. Each library solves a real production problem with simplicity and elegance. We obsess over ergonomics so you can obsess over building the right features.
        </p>
      </div>
      <div className="space-y-4 text-sm text-white/60">
        <p className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <strong className="text-white">Consistent APIs:</strong> Every Tooliton package follows the same design language — fluent builders, explicit defaults, and guardrails that keep runtime surprises out of your services.
        </p>
        <p className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <strong className="text-white">Production-first docs:</strong> From copy-pastable snippets to architectural guidance, the documentation is engineered for velocity.
        </p>
      </div>
    </section>
  );
}
