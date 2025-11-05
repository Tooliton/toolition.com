export type Library = {
  name: string;
  description: string;
  githubUrl: string;
  status?: "stable" | "beta" | "alpha";
  tags?: string[];
};

export const libraries: Library[] = [
  {
    name: "JFluentValidation",
    description: "Expressive, fluent validation for Java services without the boilerplate.",
    githubUrl: "https://github.com/tooliton/jfluentvalidation",
    status: "stable",
    tags: ["validation", "fluent api"]
  },
  {
    name: "Tooliton-Cache",
    description: "In-memory + distributed caching primitives with observability baked in.",
    githubUrl: "https://github.com/tooliton/tooliton-cache",
    status: "beta",
    tags: ["cache", "performance"]
  },
  {
    name: "Tooliton-Core",
    description: "Opinionated foundation utilities for building resilient backend services.",
    githubUrl: "https://github.com/tooliton/tooliton-core",
    status: "beta",
    tags: ["core", "utilities"]
  },
  {
    name: "Tooliton-Rest",
    description: "REST toolkit with type-safe clients, metrics, and testing harnesses.",
    githubUrl: "https://github.com/tooliton/tooliton-rest",
    status: "alpha",
    tags: ["rest", "http"]
  }
];
