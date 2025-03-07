import { createFileRoute } from "@tanstack/react-router";

import Loading from "../../components/Loading";

export const Route = createFileRoute("/academy/$aritcleId")({
  component: ArticleComponent,
  loader: async ({ params }) => {
    return {
      articleId: params.aritcleId,
    };
  },
  pendingComponent: () => Loading,
  errorComponent: () => <div>oopsie . . . something broken</div>
});

function ArticleComponent() {
  const { articleId } = Route.useLoaderData();

  return <div>You are reading {articleId}</div>;
}
