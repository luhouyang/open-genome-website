import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/database/")({
  component: Database,
});

function Database() {
  const modelData = ["VGG16", "AlexNet", "LeNet5", "PointNet"];

  return (
    <div>
      {modelData.map((model) => (
        <div key={model}>
          <Link
            to="/database/$modelId"
            params={{
              modelId: model,
            }}
          >
            {model}
          </Link>
        </div>
      ))}
    </div>
  );
}
