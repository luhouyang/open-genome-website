import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learn/$aritcleId")({
  component: ArticleComponent,
  loader: async ({ params }) => {
    return {
      articleId: params.aritcleId,
    };
  },
  pendingComponent: () => <div>Loading . . .</div>,
  errorComponent: () => <div>oopsie . . . something broken</div>
});

function ArticleComponent() {
  const { articleId } = Route.useLoaderData();

  return <div>You are reading {articleId}</div>;
}
