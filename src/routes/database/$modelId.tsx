import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/database/$modelId")({
  component: ModelComponent,
  loader: async ({ params }) => {
    return {
      modelId: params.modelId,
    };
  },
  pendingComponent: () => <div>Loading . . .</div>,
  errorComponent: () => <div>oopsie . . . something broken</div>
});

function ModelComponent() {
  const { modelId } = Route.useLoaderData();

  return <div>Hello {modelId}</div>;
}
