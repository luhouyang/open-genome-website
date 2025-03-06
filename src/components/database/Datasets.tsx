import { Link } from "@tanstack/react-router";

import { SectionWrapper } from "../../hoc";

const Datasets = () => {
  const modelData = ["VGG16", "AlexNet", "LeNet5", "PointNet"];

  return (
    <div className="relative z-0">
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
};

export default SectionWrapper(Datasets, "datasets");
