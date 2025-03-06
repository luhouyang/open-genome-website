import { Suspense, lazy } from "react";

// Lazy load the ComputerCanvas component
const LazyComputerCanvas = lazy(() => import("./Computers"));

const ComputerCanvasLazy = () => (
  <Suspense>
    <LazyComputerCanvas />
  </Suspense>
);

export default ComputerCanvasLazy;
