import { libraries } from "@/data/libraries";
import { LibraryCard } from "./LibraryCard";

export function FeaturedLibrariesSection() {
  return (
    <section id="libraries" className="mt-24 space-y-10">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">Featured libraries</span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Grown in production, hardened by teams</h2>
        <p className="mx-auto max-w-2xl text-sm text-white/60">
          Tooliton libraries solve the unglamorous backend problems with meticulous APIs, precise documentation, and batteries-included tooling.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {libraries.map((library) => (
          <LibraryCard key={library.name} library={library} />
        ))}
      </div>
    </section>
  );
}
