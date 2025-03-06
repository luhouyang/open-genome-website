import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/learn/")({
  component: Learn,
});

function Learn() {
  const articles = ["alignment-problem", "computer vision", "toy models"];

  return (
    <div className="relative z-0">
      {articles.map((article) => (
        <div key={article}>
          <Link
            to="/learn/$aritcleId"
            params={{ aritcleId: article }}
          >
            {article}
          </Link>
        </div>
      ))}
    </div>
  );
}
