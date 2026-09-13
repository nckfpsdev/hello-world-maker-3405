import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Página Simples" },
      { name: "description", content: "Uma página bem simples feita com HTML." },
      { property: "og:title", content: "Página Simples" },
      { property: "og:description", content: "Uma página bem simples feita com HTML." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold text-foreground">Olá, mundo</h1>
      <p className="text-muted-foreground">Esta é uma página bem simples.</p>
    </main>
  );
}
